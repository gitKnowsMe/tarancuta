export default function AboutSection() {
  return (
    <section id="despre" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <img 
              src="https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="Olga, proprietara Țărăncuța" 
              className="rounded-2xl shadow-2xl w-full" 
            />
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="text-4xl md:text-5xl font-handwritten font-bold text-deep-brown mb-6">
              Cine e Țărăncuța
            </h2>
            <div className="prose prose-lg text-warm-gray space-y-4">
              <p>
                Țărăncuța este o mică gospodărie din inima Moldovei, mai exact din satul <strong>Cojușna</strong>, unde tradiția, grija și gustul autentic se regăsesc în fiecare produs.
              </p>
              <p>
                În spatele brandului stă <strong>Olga</strong>, o țărăncuță harnică și pricepută, cunoscută în sat pentru plăcintele rumenite și grădina bogată. Cuptorul ei coace zilnic invârtite, biscuiți, pâine și alte bunătăți de casă.
              </p>
              <p>
                Toate produsele sunt pregătite în loturi mici, cu ingrediente simple și naturale, fără grabă, exact cum se făcea odinioară. Țărăncuța nu este un magazin – este o <em>fărâmă de viață de la țară</em>, adusă mai aproape de cei care tânjesc după gustul copilăriei.
              </p>
            </div>
            <div className="mt-8">
              <button className="bg-warm-orange text-white px-8 py-3 rounded-full hover:bg-deep-brown transition-colors duration-200 font-semibold">
                Află mai multe despre povestea noastră
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
