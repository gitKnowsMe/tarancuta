export default function Footer() {
  return (
    <footer id="contact" className="bg-deep-brown text-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Info */}
          <div className="md:col-span-2">
            <h3 className="text-3xl font-handwritten font-bold text-warm-orange mb-4">Țărăncuța</h3>
            <p className="text-white/80 mb-6">
              Bunătăți tradiționale din inima Moldovei, livrate cu drag la ușa ta. 
              Produse naturale, făcute cu suflet în satul Cojușna.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white/60 hover:text-warm-orange transition-colors duration-200">
                <i className="fab fa-facebook-f text-2xl"></i>
              </a>
              <a href="#" className="text-white/60 hover:text-warm-orange transition-colors duration-200">
                <i className="fab fa-instagram text-2xl"></i>
              </a>
              <a href="#" className="text-white/60 hover:text-warm-orange transition-colors duration-200">
                <i className="fab fa-whatsapp text-2xl"></i>
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-handwritten font-bold mb-4">Contact</h4>
            <div className="space-y-3 text-white/80">
              <div className="flex items-center">
                <i className="fas fa-phone mr-3 text-warm-orange"></i>
                <span>+373 69 123 456</span>
              </div>
              <div className="flex items-center">
                <i className="fas fa-envelope mr-3 text-warm-orange"></i>
                <span>olga@tarancuta.md</span>
              </div>
              <div className="flex items-center">
                <i className="fas fa-map-marker-alt mr-3 text-warm-orange"></i>
                <span>Cojușna, Moldova</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-handwritten font-bold mb-4">Livrare</h4>
            <div className="space-y-3 text-white/80">
              <div className="flex items-center">
                <i className="fas fa-truck mr-3 text-warm-orange"></i>
                <span>Livrare gratuită {'>'}50 lei</span>
              </div>
              <div className="flex items-center">
                <i className="fas fa-clock mr-3 text-warm-orange"></i>
                <span>Marți - Sâmbătă</span>
              </div>
              <div className="flex items-center">
                <i className="fas fa-hand-holding-heart mr-3 text-warm-orange"></i>
                <span>Preluare din sat</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-12 pt-8 text-center text-white/60">
          <p>&copy; 2024 Țărăncuța. Toate drepturile rezervate. Făcut cu <i className="fas fa-heart text-warm-orange"></i> în Moldova.</p>
        </div>
      </div>
    </footer>
  );
}
