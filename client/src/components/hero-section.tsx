import heroImage from "@assets/hq720_1754608052710.jpg";

export default function HeroSection() {
  const scrollToProducts = () => {
    const element = document.getElementById('produse');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent z-10"></div>
      <div 
        className="h-screen bg-cover bg-center relative" 
        style={{
          backgroundImage: `url(${heroImage})`
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <div className="text-center px-4 max-w-4xl">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-handwritten font-bold text-white mb-6 leading-tight">
              Bunătăți de la Țărăncuța
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 font-light">
              Coapte și culese cu suflet din inima Moldovei
            </p>
            <button 
              onClick={scrollToProducts}
              className="bg-warm-orange text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-deep-brown transform hover:scale-105 transition-all duration-200 shadow-xl"
            >
              Vezi ce avem azi <i className="fas fa-strawberry ml-2"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
