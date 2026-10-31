import React, { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface TrustItem {
  id: number;
  title: string;
  icon: React.ReactNode;
}

export default function WhoTrustsUs() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(4);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const trustItems: TrustItem[] = [
    {
      id: 1,
      title: "Equipos deportivos",
      icon: (
        // Pelota de fútbol clásica idéntica a la imagen
        <svg viewBox="0 0 24 24" className="w-10 h-10 sm:w-12 sm:h-12" fill="none" stroke="#7b1824" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <polygon points="12 8 8 11 9.5 15.5 14.5 15.5 16 11" fill="#7b1824" fillOpacity="0.1" />
          <line x1="12" y1="2" x2="12" y2="8" />
          <line x1="4.93" y1="5.93" x2="8" y2="11" />
          <line x1="2.4" y1="14.4" x2="9.5" y2="15.5" />
          <line x1="21.6" y1="14.4" x2="14.5" y2="15.5" />
          <line x1="19.07" y1="5.93" x2="16" y2="11" />
          <line x1="8.5" y1="21.5" x2="9.5" y2="15.5" />
          <line x1="15.5" y1="21.5" x2="14.5" y2="15.5" />
        </svg>
      ),
    },
    {
      id: 2,
      title: "Productoras y equipos de producción",
      icon: (
        // Claqueta de cine / film idéntica a la imagen
        <svg viewBox="0 0 24 24" className="w-10 h-10 sm:w-12 sm:h-12" fill="none" stroke="#7b1824" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="10" width="18" height="11" rx="2" />
          <path d="M3 10L7 4h14l-4 6" />
          <path d="M7 4l3 6" />
          <path d="M12 4l3 6" />
          <line x1="7" y1="15" x2="12" y2="15" strokeWidth="2.5" />
          <line x1="7" y1="18" x2="10" y2="18" strokeWidth="2.5" />
        </svg>
      ),
    },
    {
      id: 3,
      title: "Empresas internacionales",
      icon: (
        // Maletín ejecutivo
        <svg viewBox="0 0 24 24" className="w-10 h-10 sm:w-12 sm:h-12" fill="none" stroke="#7b1824" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="7" width="20" height="14" rx="2.5" />
          <path d="M16 7V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v3" />
          <path d="M2 13h7a3 3 0 0 0 6 0h7" />
          <circle cx="12" cy="13" r="1.5" fill="#7b1824" />
        </svg>
      ),
    },
    {
      id: 4,
      title: "Universidades e instituciones educativas",
      icon: (
        // Birrete de graduación
        <svg viewBox="0 0 24 24" className="w-10 h-10 sm:w-12 sm:h-12" fill="none" stroke="#7b1824" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
          <path d="M6 12v5c3 3 9 3 12 0v-5" />
        </svg>
      ),
    },
    {
      id: 5,
      title: "ONGs y organizaciones",
      icon: (
        // Manos sosteniendo corazón
        <svg viewBox="0 0 24 24" className="w-10 h-10 sm:w-12 sm:h-12" fill="none" stroke="#7b1824" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
          <path d="M12 11c-1.5-1.5-2.5-1.5-4 0" strokeDasharray="1 1" />
        </svg>
      ),
    },
    {
      id: 6,
      title: "Embajadas y delegaciones",
      icon: (
        // Edificio institucional con columnas clásicas / frontón
        <svg viewBox="0 0 24 24" className="w-10 h-10 sm:w-12 sm:h-12" fill="none" stroke="#7b1824" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="12 2 2 7 22 7" />
          <line x1="4" y1="7" x2="20" y2="7" strokeWidth="2" />
          <line x1="5" y1="7" x2="5" y2="18" strokeWidth="2" />
          <line x1="9.5" y1="7" x2="9.5" y2="18" strokeWidth="2" />
          <line x1="14.5" y1="7" x2="14.5" y2="18" strokeWidth="2" />
          <line x1="19" y1="7" x2="19" y2="18" strokeWidth="2" />
          <rect x="2" y="18" width="20" height="4" rx="1" />
        </svg>
      ),
    },
    {
      id: 7,
      title: "Agencias y operadores turísticos",
      icon: (
        // Grupo de personas / viajeros
        <svg viewBox="0 0 24 24" className="w-10 h-10 sm:w-12 sm:h-12" fill="none" stroke="#7b1824" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
    },
  ];

  // Detectar items por vista según ancho de pantalla: 2 en mobile, 4 en desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsPerView(2); // Mobile: 2 ítems
      } else if (window.innerWidth < 1024) {
        setItemsPerView(3); // Tablet: 3 ítems
      } else {
        setItemsPerView(4); // Desktop: 4 ítems
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = Math.max(0, trustItems.length - itemsPerView);

  const prev = () => {
    setCurrentIndex((prevIdx) => (prevIdx <= 0 ? maxIndex : prevIdx - 1));
  };

  const next = () => {
    setCurrentIndex((prevIdx) => (prevIdx >= maxIndex ? 0 : prevIdx + 1));
  };

  // Autoplay continuo suave
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex((prevIdx) => (prevIdx >= maxIndex ? 0 : prevIdx + 1));
    }, 3800);
    return () => clearInterval(interval);
  }, [maxIndex, isPaused]);

  // Manejadores de touch / deslizar en móvil
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const diff = touchStartX.current - touchEndX.current;
    if (diff > 45) {
      next();
    } else if (diff < -45) {
      prev();
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <section className="py-7 md:py-9 bg-[#fbfbfc] border-b border-gray-200/60 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Título idéntico a la imagen de referencia */}
        <div className="text-center mb-6 md:mb-7">
          <h2 className="font-display text-xl sm:text-2xl md:text-3xl font-[900] text-[#7b1824] uppercase tracking-tight">
            ¿QUIÉNES CONFÍAN EN NOSOTROS?
          </h2>
        </div>

        {/* Contenedor del Carrusel */}
        <div
          className="relative px-2 sm:px-8"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Flecha Izquierda */}
          <button
            type="button"
            onClick={prev}
            aria-label="Ver anteriores"
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-8 h-8 sm:w-9 sm:h-9 bg-white rounded-full shadow-md border border-gray-200 text-[#7b1824] hover:bg-[#7b1824] hover:text-white transition-all flex items-center justify-center cursor-pointer active:scale-95"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Flecha Derecha */}
          <button
            type="button"
            onClick={next}
            aria-label="Ver siguientes"
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-8 h-8 sm:w-9 sm:h-9 bg-white rounded-full shadow-md border border-gray-200 text-[#7b1824] hover:bg-[#7b1824] hover:text-white transition-all flex items-center justify-center cursor-pointer active:scale-95"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Ventana de visualización */}
          <div className="overflow-hidden py-1">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{
                transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
              }}
            >
              {trustItems.map((item) => (
                <div
                  key={item.id}
                  className="shrink-0 px-2 sm:px-2.5"
                  style={{ width: `${100 / itemsPerView}%` }}
                >
                  <div className="bg-white rounded-2xl border border-gray-200/90 shadow-sm hover:shadow-md transition-all duration-300 p-4 sm:p-5 flex flex-col items-center justify-center text-center h-[145px] sm:h-[160px] group">
                    <div className="mb-3 text-[#7b1824] transform group-hover:scale-110 transition-transform duration-300 flex items-center justify-center">
                      {item.icon}
                    </div>
                    <span className="text-xs sm:text-[13px] md:text-sm font-extrabold text-[#111827] leading-snug tracking-tight">
                      {item.title}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Indicadores de paginación */}
          <div className="flex justify-center items-center gap-1.5 mt-5">
            {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Ir al grupo ${idx + 1}`}
                className={`transition-all rounded-full cursor-pointer ${
                  idx === currentIndex
                    ? "w-6 h-2 bg-[#7b1824]"
                    : "w-2 h-2 bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
