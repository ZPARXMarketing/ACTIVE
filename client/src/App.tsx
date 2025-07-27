import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import Presentation from "@/pages/presentation";
import Funnel from "@/pages/funnel";
import SocialMediaOffer from "@/pages/social-media-offer";
import Payment from "@/pages/payment";
import SocialMediaPayment from "@/pages/social-media-payment";
import LeadGenerationPayment from "@/pages/lead-generation-payment";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/presentation_A" component={Presentation} />
      <Route path="/lead-gen-offer" component={Funnel} />
      <Route path="/social-media" component={SocialMediaOffer} />
      <Route path="/payment" component={Payment} />
      <Route path="/social-media-payment" component={SocialMediaPayment} />
      <Route path="/lead-generation-payment" component={LeadGenerationPayment} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
