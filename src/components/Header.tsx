import { Menu, ShoppingBag } from 'lucide-react';

export function Header({ onMenuClick }: { onMenuClick: () => void }) {
  return (
    <header className="fixed top-0 w-full z-50 bg-[#0c0d04] border-b border-[#d4af37]/20 shadow-2xl backdrop-blur-sm h-20">
      <div className="flex justify-between items-center w-full px-6 md:px-10 h-full max-w-7xl mx-auto">
        <button 
          onClick={onMenuClick}
          className="w-10 h-10 border border-[#d4af37]/40 flex flex-shrink-0 items-center justify-center text-[#d4af37] hover:bg-[#d4af37] hover:text-[#0c0d04] transition-all duration-300 active:scale-95"
          aria-label="Открыть меню"
        >
          <Menu className="w-5 h-5" strokeWidth={1.5} />
        </button>
        
        <div className="flex flex-col items-center flex-1 cursor-pointer select-none">
          <span className="text-[10px] tracking-[0.4em] uppercase opacity-60 font-medium mb-1 hidden md:block">
            Ателье
          </span>
          <h1 className="text-xl md:text-2xl font-serif font-bold text-[#d4af37] tracking-[0.2em] uppercase text-center">
            Wood Deal
          </h1>
        </div>

        <button 
          className="w-10 h-10 border border-[#d4af37]/40 flex flex-shrink-0 items-center justify-center text-[#d4af37] hover:bg-[#d4af37] hover:text-[#0c0d04] transition-all duration-300 active:scale-95 relative"
          aria-label="Корзина"
        >
          <ShoppingBag className="w-5 h-5" strokeWidth={1.5} />
          {/* Subtle dot indicator */}
          <div className="absolute top-2 right-2 w-1.5 h-1.5 bg-[#d4af37] rounded-full"></div>
        </button>
      </div>
    </header>
  );
}
