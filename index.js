// server/index.ts
import express2 from "express";

// server/routes.ts
import { createServer } from "http";

// server/storage.ts
var MemStorage = class {
  users;
  contactSubmissions;
  leadCaptureSubmissions;
  consultationBookings;
  currentUserId;
  currentContactId;
  currentLeadCaptureId;
  currentConsultationId;
  constructor() {
    this.users = /* @__PURE__ */ new Map();
    this.contactSubmissions = /* @__PURE__ */ new Map();
    this.leadCaptureSubmissions = /* @__PURE__ */ new Map();
    this.consultationBookings = /* @__PURE__ */ new Map();
    this.currentUserId = 1;
    this.currentContactId = 1;
    this.currentLeadCaptureId = 1;
    this.currentConsultationId = 1;
  }
  async getUser(id) {
    return this.users.get(id);
  }
  async getUserByUsername(username) {
    return Array.from(this.users.values()).find(
      (user) => user.username === username
    );
  }
  async createUser(insertUser) {
    const id = this.currentUserId++;
    const user = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }
  async createContactSubmission(insertContact) {
    const id = this.currentContactId++;
    const contact = {
      ...insertContact,
      id,
      createdAt: /* @__PURE__ */ new Date()
    };
    this.contactSubmissions.set(id, contact);
    return contact;
  }
  async getContactSubmissions() {
    return Array.from(this.contactSubmissions.values());
  }
  async createLeadCaptureSubmission(insertLeadCapture) {
    const id = this.currentLeadCaptureId++;
    const leadCapture = {
      ...insertLeadCapture,
      id,
      createdAt: /* @__PURE__ */ new Date()
    };
    this.leadCaptureSubmissions.set(id, leadCapture);
    return leadCapture;
  }
  async getLeadCaptureSubmissions() {
    return Array.from(this.leadCaptureSubmissions.values());
  }
  async createConsultationBooking(insertBooking) {
    const id = this.currentConsultationId++;
    const booking = {
      ...insertBooking,
      id,
      createdAt: /* @__PURE__ */ new Date()
    };
    this.consultationBookings.set(id, booking);
    return booking;
  }
  async getConsultationBookings() {
    return Array.from(this.consultationBookings.values());
  }
};
var storage = new MemStorage();

// shared/schema.ts
import { pgTable, text, serial, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
var users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull()
});
var contactSubmissions = pgTable("contact_submissions", {
  id: serial("id").primaryKey(),
  firstName: text("first_name").notNull(),
  lastName: text("last_name").notNull(),
  email: text("email").notNull(),
  phone: text("phone"),
  company: text("company"),
  service: text("service"),
  message: text("message").notNull(),
  createdAt: timestamp("created_at").defaultNow()
});
var leadCaptureSubmissions = pgTable("lead_capture_submissions", {
  id: serial("id").primaryKey(),
  fullName: text("full_name").notNull(),
  website: text("website").notNull(),
  email: text("email").notNull(),
  phone: text("phone").notNull(),
  createdAt: timestamp("created_at").defaultNow()
});
var consultationBookings = pgTable("consultation_bookings", {
  id: serial("id").primaryKey(),
  firstName: text("first_name").notNull(),
  lastName: text("last_name").notNull(),
  email: text("email").notNull(),
  phone: text("phone").notNull(),
  company: text("company").notNull(),
  industry: text("industry").notNull(),
  currentLeads: text("current_leads").notNull(),
  preferredTime: text("preferred_time").notNull(),
  createdAt: timestamp("created_at").defaultNow()
});
var insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true
});
var insertContactSchema = createInsertSchema(contactSubmissions).omit({
  id: true,
  createdAt: true
});
var insertLeadCaptureSchema = createInsertSchema(leadCaptureSubmissions).omit({
  id: true,
  createdAt: true
});
var insertConsultationSchema = createInsertSchema(consultationBookings).omit({
  id: true,
  createdAt: true
});

// server/routes.ts
import { z } from "zod";
import nodemailer from "nodemailer";

// server/paypal.ts
import {
  Client,
  Environment,
  LogLevel,
  OAuthAuthorizationController,
  OrdersController
} from "@paypal/paypal-server-sdk";
var { PAYPAL_CLIENT_ID, PAYPAL_CLIENT_SECRET } = process.env;
if (!PAYPAL_CLIENT_ID) {
  throw new Error("Missing PAYPAL_CLIENT_ID");
}
if (!PAYPAL_CLIENT_SECRET) {
  throw new Error("Missing PAYPAL_CLIENT_SECRET");
}
var client = new Client({
  clientCredentialsAuthCredentials: {
    oAuthClientId: PAYPAL_CLIENT_ID,
    oAuthClientSecret: PAYPAL_CLIENT_SECRET
  },
  timeout: 0,
  environment: process.env.NODE_ENV === "production" ? Environment.Production : Environment.Sandbox,
  logging: {
    logLevel: LogLevel.Info,
    logRequest: {
      logBody: true
    },
    logResponse: {
      logHeaders: true
    }
  }
});
var ordersController = new OrdersController(client);
var oAuthAuthorizationController = new OAuthAuthorizationController(client);
async function getClientToken() {
  const auth = Buffer.from(
    `${PAYPAL_CLIENT_ID}:${PAYPAL_CLIENT_SECRET}`
  ).toString("base64");
  const { result } = await oAuthAuthorizationController.requestToken(
    {
      authorization: `Basic ${auth}`
    },
    { intent: "sdk_init", response_type: "client_token" }
  );
  return result.accessToken;
}
async function createPaypalOrder(req, res) {
  try {
    const { amount, currency, intent } = req.body;
    if (!amount || isNaN(parseFloat(amount)) || parseFloat(amount) <= 0) {
      return res.status(400).json({
        error: "Invalid amount. Amount must be a positive number."
      });
    }
    if (!currency) {
      return res.status(400).json({ error: "Invalid currency. Currency is required." });
    }
    if (!intent) {
      return res.status(400).json({ error: "Invalid intent. Intent is required." });
    }
    const collect = {
      body: {
        intent,
        purchaseUnits: [
          {
            amount: {
              currencyCode: currency,
              value: amount
            }
          }
        ]
      },
      prefer: "return=minimal"
    };
    const { body, ...httpResponse } = await ordersController.createOrder(collect);
    const jsonResponse = JSON.parse(String(body));
    const httpStatusCode = httpResponse.statusCode;
    res.status(httpStatusCode).json(jsonResponse);
  } catch (error) {
    console.error("Failed to create order:", error);
    res.status(500).json({ error: "Failed to create order." });
  }
}
async function capturePaypalOrder(req, res) {
  try {
    const { orderID } = req.params;
    const collect = {
      id: orderID,
      prefer: "return=minimal"
    };
    const { body, ...httpResponse } = await ordersController.captureOrder(collect);
    const jsonResponse = JSON.parse(String(body));
    const httpStatusCode = httpResponse.statusCode;
    res.status(httpStatusCode).json(jsonResponse);
  } catch (error) {
    console.error("Failed to create order:", error);
    res.status(500).json({ error: "Failed to capture order." });
  }
}
async function loadPaypalDefault(req, res) {
  const clientToken = await getClientToken();
  res.json({
    clientToken
  });
}

// server/routes.ts
async function registerRoutes(app2) {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER || "your-email@gmail.com",
      pass: process.env.EMAIL_PASSWORD || "your-app-password"
    }
  });
  app2.post("/api/lead-capture", async (req, res) => {
    try {
      let website = req.body.website;
      if (website && !website.startsWith("http://") && !website.startsWith("https://")) {
        website = `https://${website}`;
      }
      const validatedData = insertLeadCaptureSchema.parse({
        ...req.body,
        website
      });
      const leadCapture = await storage.createLeadCaptureSubmission(validatedData);
      const mailOptions = {
        from: process.env.EMAIL_USER || "your-email@gmail.com",
        to: "zparxmarketing@gmail.com",
        subject: `\u{1F3AF} New Lead Capture - ${validatedData.fullName}`,
        html: `
          <h2>New Lead Capture Form Submission</h2>
          <p><strong>Name:</strong> ${validatedData.fullName}</p>
          <p><strong>Website:</strong> <a href="${validatedData.website}" target="_blank">${validatedData.website}</a></p>
          <p><strong>Email:</strong> <a href="mailto:${validatedData.email}">${validatedData.email}</a></p>
          <p><strong>Phone:</strong> <a href="tel:${validatedData.phone}">${validatedData.phone}</a></p>
          <hr>
          <p><strong>Service:</strong> 10 Quote-Ready Leads in 30 Days</p>
          <p><strong>Guarantee:</strong> Results within 30 days or money back</p>
          <p><small>Submitted on: ${(/* @__PURE__ */ new Date()).toLocaleString()}</small></p>
        `
      };
      await transporter.sendMail(mailOptions);
      res.json({ message: "Lead capture submitted successfully", id: leadCapture.id });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ message: "Validation error", errors: error.errors });
      } else {
        console.error("Error processing lead capture:", error);
        res.status(500).json({ message: "Internal server error" });
      }
    }
  });
  app2.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactSchema.parse(req.body);
      const contact = await storage.createContactSubmission(validatedData);
      const mailOptions = {
        from: process.env.EMAIL_USER || "your-email@gmail.com",
        to: "zparxmarketing@gmail.com",
        subject: `New Contact Form Submission - ${validatedData.firstName} ${validatedData.lastName}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${validatedData.firstName} ${validatedData.lastName}</p>
          <p><strong>Email:</strong> ${validatedData.email}</p>
          <p><strong>Phone:</strong> ${validatedData.phone || "Not provided"}</p>
          <p><strong>Company:</strong> ${validatedData.company || "Not provided"}</p>
          <p><strong>Service Interest:</strong> ${validatedData.service || "Not specified"}</p>
          <p><strong>Message:</strong></p>
          <p>${validatedData.message}</p>
          <hr>
          <p><small>Submitted on: ${(/* @__PURE__ */ new Date()).toLocaleString()}</small></p>
        `
      };
      await transporter.sendMail(mailOptions);
      res.json({ message: "Contact form submitted successfully", id: contact.id });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ message: "Validation error", errors: error.errors });
      } else {
        console.error("Error processing contact form:", error);
        res.status(500).json({ message: "Internal server error" });
      }
    }
  });
  app2.get("/api/contacts", async (req, res) => {
    try {
      const contacts = await storage.getContactSubmissions();
      res.json(contacts);
    } catch (error) {
      console.error("Error fetching contacts:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  });
  app2.post("/api/track-offer", async (req, res) => {
    try {
      const { offerType, planName, price, action } = req.body;
      const mailOptions = {
        from: process.env.EMAIL_USER || "your-email@gmail.com",
        to: "zparxmarketing@gmail.com",
        subject: `\u{1F3AF} Offer Page Activity - ${offerType}`,
        html: `
          <h2>New Offer Page Activity</h2>
          <p><strong>Offer Type:</strong> ${offerType}</p>
          <p><strong>Action:</strong> ${action}</p>
          ${planName ? `<p><strong>Plan Selected:</strong> ${planName}</p>` : ""}
          ${price ? `<p><strong>Price:</strong> ${price}</p>` : ""}
          <p><strong>Timestamp:</strong> ${(/* @__PURE__ */ new Date()).toLocaleString()}</p>
          <hr>
          <p><small>This prospect showed interest in your ${offerType} service</small></p>
        `
      };
      await transporter.sendMail(mailOptions);
      res.json({ message: "Offer interaction tracked successfully" });
    } catch (error) {
      console.error("Error tracking offer interaction:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  });
  app2.post("/api/book-consultation", async (req, res) => {
    try {
      const validatedData = insertConsultationSchema.parse(req.body);
      const booking = await storage.createConsultationBooking(validatedData);
      const mailOptions = {
        from: process.env.EMAIL_USER || "your-email@gmail.com",
        to: "zparxmarketing@gmail.com",
        subject: `New Consultation Booking - ${validatedData.firstName} ${validatedData.lastName}`,
        html: `
          <h2>New Consultation Booking for Lead Generation Service</h2>
          <p><strong>Name:</strong> ${validatedData.firstName} ${validatedData.lastName}</p>
          <p><strong>Email:</strong> ${validatedData.email}</p>
          <p><strong>Phone:</strong> ${validatedData.phone}</p>
          <p><strong>Company:</strong> ${validatedData.company}</p>
          <p><strong>Industry:</strong> ${validatedData.industry}</p>
          <p><strong>Current Lead Volume:</strong> ${validatedData.currentLeads}</p>
          <p><strong>Preferred Meeting Time:</strong> ${validatedData.preferredTime}</p>
          <hr>
          <p><strong>Service:</strong> Lead Generation with Calendar Filling</p>
          <p><strong>Guarantee:</strong> 10+ leads per month or money back</p>
          <p><small>Booked on: ${(/* @__PURE__ */ new Date()).toLocaleString()}</small></p>
        `
      };
      await transporter.sendMail(mailOptions);
      res.json({ message: "Consultation booked successfully", id: booking.id });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ message: "Validation error", errors: error.errors });
      } else {
        console.error("Error processing consultation booking:", error);
        res.status(500).json({ message: "Internal server error" });
      }
    }
  });
  app2.get("/api/consultations", async (req, res) => {
    try {
      const bookings = await storage.getConsultationBookings();
      res.json(bookings);
    } catch (error) {
      console.error("Error fetching consultation bookings:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  });
  app2.get("/paypal/setup", async (req, res) => {
    await loadPaypalDefault(req, res);
  });
  app2.post("/paypal/order", async (req, res) => {
    await createPaypalOrder(req, res);
  });
  app2.post("/paypal/order/:orderID/capture", async (req, res) => {
    await capturePaypalOrder(req, res);
  });
  const httpServer = createServer(app2);
  return httpServer;
}

// server/vite.ts
import express from "express";
import fs from "fs";
import path2 from "path";
import { createServer as createViteServer, createLogger } from "vite";

// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";
var vite_config_default = defineConfig({
  plugins: [
    react(),
    runtimeErrorOverlay(),
    ...process.env.NODE_ENV !== "production" && process.env.REPL_ID !== void 0 ? [
      await import("@replit/vite-plugin-cartographer").then(
        (m) => m.cartographer()
      )
    ] : []
  ],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "client", "src"),
      "@shared": path.resolve(import.meta.dirname, "shared"),
      "@assets": path.resolve(import.meta.dirname, "attached_assets")
    }
  },
  root: path.resolve(import.meta.dirname, "client"),
  build: {
    outDir: path.resolve(import.meta.dirname, "dist/public"),
    emptyOutDir: true
  },
  server: {
    fs: {
      strict: true,
      deny: ["**/.*"]
    }
  }
});

// server/vite.ts
import { nanoid } from "nanoid";
var viteLogger = createLogger();
function log(message, source = "express") {
  const formattedTime = (/* @__PURE__ */ new Date()).toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true
  });
  console.log(`${formattedTime} [${source}] ${message}`);
}
async function setupVite(app2, server) {
  const serverOptions = {
    middlewareMode: true,
    hmr: { server },
    allowedHosts: true
  };
  const vite = await createViteServer({
    ...vite_config_default,
    configFile: false,
    customLogger: {
      ...viteLogger,
      error: (msg, options) => {
        viteLogger.error(msg, options);
        process.exit(1);
      }
    },
    server: serverOptions,
    appType: "custom"
  });
  app2.use(vite.middlewares);
  app2.use("*", async (req, res, next) => {
    const url = req.originalUrl;
    try {
      const clientTemplate = path2.resolve(
        import.meta.dirname,
        "..",
        "client",
        "index.html"
      );
      let template = await fs.promises.readFile(clientTemplate, "utf-8");
      template = template.replace(
        `src="/src/main.tsx"`,
        `src="/src/main.tsx?v=${nanoid()}"`
      );
      const page = await vite.transformIndexHtml(url, template);
      res.status(200).set({ "Content-Type": "text/html" }).end(page);
    } catch (e) {
      vite.ssrFixStacktrace(e);
      next(e);
    }
  });
}
function serveStatic(app2) {
  const distPath = path2.resolve(import.meta.dirname, "public");
  if (!fs.existsSync(distPath)) {
    throw new Error(
      `Could not find the build directory: ${distPath}, make sure to build the client first`
    );
  }
  app2.use(express.static(distPath));
  app2.use("*", (_req, res) => {
    res.sendFile(path2.resolve(distPath, "index.html"));
  });
}

// server/index.ts
var app = express2();
app.use(express2.json());
app.use(express2.urlencoded({ extended: false }));
app.use((req, res, next) => {
  const start = Date.now();
  const path3 = req.path;
  let capturedJsonResponse = void 0;
  const originalResJson = res.json;
  res.json = function(bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };
  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path3.startsWith("/api")) {
      let logLine = `${req.method} ${path3} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }
      if (logLine.length > 80) {
        logLine = logLine.slice(0, 79) + "\u2026";
      }
      log(logLine);
    }
  });
  next();
});
(async () => {
  const server = await registerRoutes(app);
  app.use((err, _req, res, _next) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    res.status(status).json({ message });
    throw err;
  });
  if (app.get("env") === "development") {
    await setupVite(app, server);
  } else {
    serveStatic(app);
  }
  const port = 5e3;
  server.listen({
    port,
    host: "0.0.0.0",
    reusePort: true
  }, () => {
    log(`serving on port ${port}`);
  });
})();
