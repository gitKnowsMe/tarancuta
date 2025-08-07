export default function Testimonials() {
  const testimonials = [
    {
      name: "Maria Popescu",
      location: "Chișinău",
      text: "Plăcintele cu brânză îmi amintesc de cele făcute de bunica. Gustul autentic și calitatea sunt excepționale!",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100"
    },
    {
      name: "Ion Munteanu",
      location: "Bălți",
      text: "Coșul săptămânal ne-a schimbat complet rutina. Produse proaspete, livrare punctuală și un gust minunat!",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100"
    },
    {
      name: "Ana Ciobanu",
      location: "Orhei",
      text: "Dulcețurile sunt ca ale mamei! Fără conservanți, doar fructe și dragoste. Recomand cu încredere!",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-handwritten font-bold text-deep-brown mb-4">
            Ce spun clienții noștri
          </h2>
          <p className="text-lg text-warm-gray">Mărturiile celor care au gustat din bunătățile Țărăncuței</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-cream rounded-2xl p-6">
              <div className="mb-4">
                <div className="flex text-warm-orange mb-2">
                  {[...Array(5)].map((_, i) => (
                    <i key={i} className="fas fa-star"></i>
                  ))}
                </div>
                <p className="text-warm-gray italic">"{testimonial.text}"</p>
              </div>
              <div className="flex items-center">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name} 
                  className="w-12 h-12 rounded-full mr-3" 
                />
                <div>
                  <div className="font-semibold text-deep-brown">{testimonial.name}</div>
                  <div className="text-sm text-warm-gray">{testimonial.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
