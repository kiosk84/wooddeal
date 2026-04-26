import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden px-6 py-16 bg-[#0e0f05] border-b border-[#d4af37]/10 shadow-2xl mb-8">
      {/* Мягкая текстура дерева/шум */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.02] pointer-events-none mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100' height='100' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`
        }}
      />
      
      {/* Фоновое изображение */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDHkkRv555K6h0xKR1LCkf0aetKKiTr2sMtcZ-O4HKwZTP4jJHmoJgxCZIk4uiwAJumPaF9YCmWupBswVkRy_oacaAkqosMhJ9OkMRgFwIEOKEd3aoUL99TT0UKLgw4EiBn2TQZnRamAlXj2qXAekL0VD_2oR5MAF0YMNHNzLJpTuNQndB3Ds1scsrCRhepq5HtuEJKgsP3M2PdbVkjtdiX8wm9ZFWVtRp-ALTZm9jwC3OFpj46a1-DU4QIxM5P9O0-RgMLVWxTydo" 
          alt="Роскошные нарды ручной работы" 
          className="w-full h-full object-cover opacity-20 mix-blend-overlay"
        />
        {/* Градиентное наложение для читаемости текста */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0e0f05]/80 via-[#0e0f05]/60 to-[#0e0f05]"></div>
      </div>
      
      {/* Главный контент Hero */}
      <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center mt-12 md:mt-0">
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-serif italic text-[#f2ca50] mb-6 drop-shadow-xl font-light">
          Нарды <br className="md:hidden" />ручной работы!
        </h1>
        
        <p className="text-[11px] md:text-sm max-w-2xl mx-auto opacity-70 leading-relaxed uppercase tracking-[0.2em] md:tracking-wider">
          Исключительные наборы нард, созданные из редких пород дерева с применением старинных техник резьбы.
        </p>
        
        <button className="mt-10 border border-[#d4af37]/40 text-[#d4af37] py-3 px-8 text-[11px] uppercase tracking-[0.2em] hover:bg-[#d4af37] hover:text-[#0e0f05] transition-all flex items-center gap-3">
          Заказать эксклюзив
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
}
