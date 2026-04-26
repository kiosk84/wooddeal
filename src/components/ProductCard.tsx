import { ArrowRight } from 'lucide-react';

interface ProductCardProps {
  title: string;
  subtitle: string;
  price: string;
  imageUrl: string;
  imageAlt: string;
  badge?: string;
  isPrimaryAction?: boolean;
}

export function ProductCard({ 
  title, 
  subtitle, 
  price, 
  imageUrl, 
  imageAlt, 
  badge,
  isPrimaryAction = false 
}: ProductCardProps) {
  return (
    <article className="border border-[#d4af37]/10 bg-[#131407] flex flex-col overflow-hidden group shadow-2xl h-full">
      <div className="h-56 md:h-64 w-full bg-[#1b1d0e] relative overflow-hidden flex-shrink-0">
        <div className="absolute inset-0 opacity-20 pointer-events-none z-10" style={{ backgroundImage: 'radial-gradient(#d4af37 0.5px, transparent 0.5px)', backgroundSize: '8px 8px' }}></div>
        <img 
          src={imageUrl}
          alt={imageAlt}
          className="object-cover w-full h-full transform transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100 relative z-0"
        />
        {badge && (
          <div className="absolute top-4 left-4 bg-[#d4af37] text-[#0e0f05] text-[10px] px-2 py-1 font-bold tracking-tighter uppercase z-20">
            {badge}
          </div>
        )}
      </div>
      
      <div className="p-6 flex flex-col justify-between flex-1">
        <div className="flex justify-between items-start mb-6">
          <div className="flex-1 pr-4">
            <h3 className="text-xl font-serif text-on-surface mb-1 leading-snug">{title}</h3>
            <p className="text-[11px] text-[#d4af37]/70 italic tracking-widest uppercase leading-relaxed">{subtitle}</p>
          </div>
          <span className="text-lg font-light text-on-surface whitespace-nowrap">{price}</span>
        </div>
        
        <button className="mt-auto border border-[#d4af37]/40 text-[#d4af37] py-2.5 w-full text-[11px] font-medium hover:bg-[#d4af37] hover:text-[#0e0f05] transition-all flex items-center justify-center gap-2 uppercase tracking-[0.2em]">
          <span>{isPrimaryAction ? 'Забронировать' : 'Подробнее'}</span>
        </button>
      </div>
    </article>
  );
}
