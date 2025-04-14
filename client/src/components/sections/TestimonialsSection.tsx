interface TestimonialProps {
  quote: string;
  name: string;
  title: string;
  initials: string;
}

const testimonials: TestimonialProps[] = [
  {
    quote: "\"Real Invest Funding helped me close on a property in just 7 days. Their team was professional and the process was smooth from start to finish.\"",
    name: "John Doe",
    title: "Fix & Flip Investor",
    initials: "JD"
  },
  {
    quote: "\"I've used their CDNA reports for multiple deals and they've saved me from overpaying several times. The detail and accuracy is impressive.\"",
    name: "Sarah Johnson",
    title: "Rental Portfolio Owner",
    initials: "SJ"
  },
  {
    quote: "\"As a new investor, I was surprised how easy it was to get financing. They focused on my deal's numbers, not my experience or credit score.\"",
    name: "Michael Brown",
    title: "First-Time Investor",
    initials: "MB"
  }
];

export function TestimonialsSection() {
  return (
    <section className="py-16 bg-primary text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">What Our Investors Say</h2>
          <p className="max-w-3xl mx-auto opacity-80">Real feedback from real estate investors who've worked with us</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white bg-opacity-10 p-8 rounded-lg">
              <div className="flex text-amber-500 mb-4">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
              <p className="italic mb-6">{testimonial.quote}</p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-amber-500 rounded-full mr-4 flex items-center justify-center text-gray-800 font-bold">
                  {testimonial.initials}
                </div>
                <div>
                  <h4 className="font-heading font-semibold">{testimonial.name}</h4>
                  <p className="text-sm opacity-80">{testimonial.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
