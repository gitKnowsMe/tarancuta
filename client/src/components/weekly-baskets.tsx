export default function WeeklyBaskets() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="cosuri" className="py-20 bg-gradient-to-br from-cream to-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-handwritten font-bold text-deep-brown mb-4">
            Coșuri Săptămânale
          </h2>
          <p className="text-lg text-warm-gray max-w-2xl mx-auto">
            Alege coșul potrivit pentru familia ta - livrat proaspăt în fiecare săptămână
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Coșul Mic */}
          <div className="bg-white rounded-2xl shadow-xl p-6 text-center">
            <div className="mb-6">
              <i className="fas fa-shopping-basket text-4xl text-warm-orange mb-3"></i>
              <h3 className="text-2xl font-handwritten font-bold text-deep-brown mb-2">Coșul Mic</h3>
              <p className="text-warm-gray">Perfect pentru 2 persoane</p>
            </div>
            <div className="text-center mb-6">
              <div className="text-4xl font-bold text-warm-orange mb-2">35 lei</div>
              <div className="text-sm text-warm-gray">per săptămână</div>
            </div>
            <ul className="text-left space-y-2 mb-8 text-warm-gray">
              <li className="flex items-center">
                <i className="fas fa-check-circle text-fresh-green mr-2"></i>
                1 produs de patiserie
              </li>
              <li className="flex items-center">
                <i className="fas fa-check-circle text-fresh-green mr-2"></i>
                2-3 soiuri de legume
              </li>
              <li className="flex items-center">
                <i className="fas fa-check-circle text-fresh-green mr-2"></i>
                1 conservă/dulceață
              </li>
            </ul>
            <button 
              onClick={scrollToContact}
              className="w-full bg-warm-orange text-white py-3 rounded-full hover:bg-deep-brown transition-colors duration-200"
            >
              Alege acest coș
            </button>
          </div>

          {/* Coșul Mediu */}
          <div className="bg-white rounded-2xl shadow-xl p-6 text-center border-2 border-warm-orange relative">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-warm-orange text-white px-4 py-1 rounded-full text-sm font-semibold">
              Cel mai popular
            </div>
            <div className="mb-6 pt-4">
              <i className="fas fa-shopping-basket text-4xl text-warm-orange mb-3"></i>
              <h3 className="text-2xl font-handwritten font-bold text-deep-brown mb-2">Coșul Mediu</h3>
              <p className="text-warm-gray">Ideal pentru 3-4 persoane</p>
            </div>
            <div className="text-center mb-6">
              <div className="text-4xl font-bold text-warm-orange mb-2">55 lei</div>
              <div className="text-sm text-warm-gray">per săptămână</div>
            </div>
            <ul className="text-left space-y-2 mb-8 text-warm-gray">
              <li className="flex items-center">
                <i className="fas fa-check-circle text-fresh-green mr-2"></i>
                2 produse de patiserie
              </li>
              <li className="flex items-center">
                <i className="fas fa-check-circle text-fresh-green mr-2"></i>
                4-5 soiuri de legume
              </li>
              <li className="flex items-center">
                <i className="fas fa-check-circle text-fresh-green mr-2"></i>
                1 pâine de casă
              </li>
              <li className="flex items-center">
                <i className="fas fa-check-circle text-fresh-green mr-2"></i>
                2 conserve/dulcețuri
              </li>
            </ul>
            <button 
              onClick={scrollToContact}
              className="w-full bg-warm-orange text-white py-3 rounded-full hover:bg-deep-brown transition-colors duration-200"
            >
              Alege acest coș
            </button>
          </div>

          {/* Coșul cu Dulce */}
          <div className="bg-white rounded-2xl shadow-xl p-6 text-center">
            <div className="mb-6">
              <i className="fas fa-shopping-basket text-4xl text-warm-orange mb-3"></i>
              <h3 className="text-2xl font-handwritten font-bold text-deep-brown mb-2">Coșul cu Dulce</h3>
              <p className="text-warm-gray">Pentru iubitorii de deserturi</p>
            </div>
            <div className="text-center mb-6">
              <div className="text-4xl font-bold text-warm-orange mb-2">75 lei</div>
              <div className="text-sm text-warm-gray">per săptămână</div>
            </div>
            <ul className="text-left space-y-2 mb-8 text-warm-gray">
              <li className="flex items-center">
                <i className="fas fa-check-circle text-fresh-green mr-2"></i>
                3 produse de patiserie
              </li>
              <li className="flex items-center">
                <i className="fas fa-check-circle text-fresh-green mr-2"></i>
                3-4 soiuri de legume
              </li>
              <li className="flex items-center">
                <i className="fas fa-check-circle text-fresh-green mr-2"></i>
                Cozonac sau prăjitură
              </li>
              <li className="flex items-center">
                <i className="fas fa-check-circle text-fresh-green mr-2"></i>
                3 dulcețuri artizanale
              </li>
            </ul>
            <button 
              onClick={scrollToContact}
              className="w-full bg-warm-orange text-white py-3 rounded-full hover:bg-deep-brown transition-colors duration-200"
            >
              Alege acest coș
            </button>
          </div>
        </div>

        <div className="mt-12 text-center">
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-handwritten font-bold text-deep-brown mb-4">Ce livrăm în această săptămână?</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-warm-gray">
              <div className="text-center">
                <i className="fas fa-bread-slice text-warm-orange text-2xl mb-2"></i>
                <div className="text-sm font-semibold">Plăcinte cu brânză</div>
              </div>
              <div className="text-center">
                <i className="fas fa-seedling text-fresh-green text-2xl mb-2"></i>
                <div className="text-sm font-semibold">Roșii cherry</div>
              </div>
              <div className="text-center">
                <i className="fas fa-jar text-warm-orange text-2xl mb-2"></i>
                <div className="text-sm font-semibold">Dulceață de mure</div>
              </div>
              <div className="text-center">
                <i className="fas fa-apple-alt text-fresh-green text-2xl mb-2"></i>
                <div className="text-sm font-semibold">Dovlecei proaspeți</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
