export default function ProductCategories() {
  return (
    <section id="produse" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-handwritten font-bold text-deep-brown mb-4">
            Ce găsești la Țărăncuța
          </h2>
          <p className="text-lg text-warm-gray max-w-2xl mx-auto">
            Produse naturale, făcute cu drag și grijă, exact cum îți amintești din copilărie
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Din Cuptor Category */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden transform hover:scale-105 transition-all duration-300">
            <img 
              src="https://images.unsplash.com/photo-1549931319-a545dcf3bc73?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400" 
              alt="Produse de patiserie tradiționale" 
              className="w-full h-48 object-cover" 
            />
            <div className="p-6">
              <div className="flex items-center mb-3">
                <i className="fas fa-bread-slice text-warm-orange text-2xl mr-3"></i>
                <h3 className="text-2xl font-handwritten font-bold text-deep-brown">Din Cuptor</h3>
              </div>
              <p className="text-warm-gray mb-4">Plăcinte rumene, biscuiți de casă, pâine caldă și cozonac de sezon</p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-sm text-warm-gray">
                  <i className="fas fa-check-circle text-fresh-green mr-2"></i>
                  Plăcinte cu brânză și mărar
                </li>
                <li className="flex items-center text-sm text-warm-gray">
                  <i className="fas fa-check-circle text-fresh-green mr-2"></i>
                  Invârtite cu nucă și stafide
                </li>
                <li className="flex items-center text-sm text-warm-gray">
                  <i className="fas fa-check-circle text-fresh-green mr-2"></i>
                  Pâine de casă rotundă
                </li>
              </ul>
              <button className="w-full bg-warm-orange text-white py-2 rounded-full hover:bg-deep-brown transition-colors duration-200">
                Vezi toate produsele
              </button>
            </div>
          </div>

          {/* Din Grădină Category */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden transform hover:scale-105 transition-all duration-300">
            <img 
              src="https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400" 
              alt="Legume și fructe proaspete" 
              className="w-full h-48 object-cover" 
            />
            <div className="p-6">
              <div className="flex items-center mb-3">
                <i className="fas fa-carrot text-fresh-green text-2xl mr-3"></i>
                <h3 className="text-2xl font-handwritten font-bold text-deep-brown">Din Grădină</h3>
              </div>
              <p className="text-warm-gray mb-4">Legume și fructe de sezon, culese manual la momentul perfect</p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-sm text-warm-gray">
                  <i className="fas fa-leaf text-fresh-green mr-2"></i>
                  <span>Roșii de Cojușna</span>
                  <span className="ml-auto bg-fresh-green text-white px-2 py-1 rounded text-xs">În sezon</span>
                </li>
                <li className="flex items-center text-sm text-warm-gray">
                  <i className="fas fa-leaf text-fresh-green mr-2"></i>
                  <span>Castraveți crocanți</span>
                  <span className="ml-auto bg-fresh-green text-white px-2 py-1 rounded text-xs">În sezon</span>
                </li>
                <li className="flex items-center text-sm text-warm-gray">
                  <i className="fas fa-leaf text-fresh-green mr-2"></i>
                  Mure și prune de sezon
                </li>
              </ul>
              <button className="w-full bg-fresh-green text-white py-2 rounded-full hover:bg-green-600 transition-colors duration-200">
                Vezi disponibilitatea
              </button>
            </div>
          </div>

          {/* Coșul Țărăncuței */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden transform hover:scale-105 transition-all duration-300">
            <img 
              src="https://images.unsplash.com/photo-1506976785307-8732e854ad03?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400" 
              alt="Coșul săptămânal Țărăncuța" 
              className="w-full h-48 object-cover" 
            />
            <div className="p-6">
              <div className="flex items-center mb-3">
                <i className="fas fa-basket-shopping text-deep-brown text-2xl mr-3"></i>
                <h3 className="text-2xl font-handwritten font-bold text-deep-brown">Coșul Țărăncuței</h3>
              </div>
              <p className="text-warm-gray mb-4">Combinații săptămânale cu reducere - tot ce îți trebuie pentru masa de familie</p>
              <div className="bg-cream rounded-lg p-4 mb-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-semibold text-deep-brown">Coșul "Luna lui Gustar"</span>
                  <span className="text-2xl font-bold text-warm-orange">55 lei</span>
                </div>
                <ul className="text-sm text-warm-gray space-y-1">
                  <li>• 1 plăcintă cu brânză</li>
                  <li>• 500g roșii cherry</li>
                  <li>• 1 borcan dulceață de mure</li>
                  <li>• 1 pâine de casă rotundă</li>
                </ul>
              </div>
              <button className="w-full bg-deep-brown text-white py-2 rounded-full hover:bg-warm-gray transition-colors duration-200">
                Comandă coșul
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
