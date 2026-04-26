export function Footer() {
  return (
    <footer className="w-full py-8 md:py-10 bg-[#0e0f05] border-t border-[#d4af37]/10 relative z-10 pb-28 md:pb-10 opacity-70">
      <div className="flex flex-col md:flex-row justify-between items-center px-6 md:px-10 max-w-7xl mx-auto gap-8">
        <div className="text-xl font-serif italic text-primary tracking-widest opacity-80">
          Ателье Нард
        </div>
        
        <nav className="flex flex-wrap justify-center gap-4 md:gap-8 font-sans text-[9px] tracking-[0.3em] uppercase opacity-80">
          <a className="text-[#e4e4cc] hover:text-[#d4af37] transition-colors focus:ring-1 focus:ring-primary rounded px-2 py-1 outline-none" href="#">Коллекция</a>
          <a className="text-[#e4e4cc] hover:text-[#d4af37] transition-colors focus:ring-1 focus:ring-primary rounded px-2 py-1 outline-none" href="#">Процесс</a>
          <a className="text-[#e4e4cc] hover:text-[#d4af37] transition-colors focus:ring-1 focus:ring-primary rounded px-2 py-1 outline-none" href="#">На Заказ</a>
          <a className="text-[#e4e4cc] hover:text-[#d4af37] transition-colors focus:ring-1 focus:ring-primary rounded px-2 py-1 outline-none" href="#">Уход</a>
          <a className="text-[#e4e4cc] hover:text-[#d4af37] transition-colors focus:ring-1 focus:ring-primary rounded px-2 py-1 outline-none" href="#">Доставка</a>
        </nav>
        
        <div className="font-sans text-[9px] tracking-[0.3em] text-[#e4e4cc] opacity-40 text-center md:text-right uppercase leading-relaxed">
          © {new Date().getFullYear()} WOOD DEAL
        </div>
      </div>
    </footer>
  );
}
