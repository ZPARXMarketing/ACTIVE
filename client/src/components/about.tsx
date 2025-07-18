export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Who Are <span className="text-secondary">We?</span>
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            We're a Huntsville, Alabama-based lead generation agency that helps local businesses by delivering top-tier, 
            quote-ready leads through strategic advertising on popular social media platforms. Our targeted approach not only 
            frees you up to concentrate on your work, but also ensures your growth is driven by genuinely interested clients, 
            making your business growth smooth and efficient.
          </p>
        </div>
        
        <div className="mt-16">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-12">
            Our <span className="text-secondary">Process</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Gather Content</h4>
              <p className="text-gray-600">
                In the initial step, we collect visuals that highlight your craftsmanship. 
                These form the foundation of our strategy, serving to attract a great 
                number of potential clients to your business.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Launch Ads</h4>
              <p className="text-gray-600">
                Next, we launch ads based on the content we've collected. These ads 
                are strategically designed and placed on popular social media 
                platforms to capture clients' attention.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-accent text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Generate Leads</h4>
              <p className="text-gray-600">
                Finally, we collect information from individuals who are genuinely 
                interested in your services. Prioritizing quote-ready leads and 
                eliminating tire kickers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}