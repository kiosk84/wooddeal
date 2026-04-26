import { useState } from 'react';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { ProductCard } from './components/ProductCard';
import { Hero } from './components/Hero';
import { Footer } from './components/Footer';
import { Star } from 'lucide-react';

const PRODUCTS = [
  {
    title: "Обсидиановый Зенит",
    subtitle: "Массив африканского эбенового дерева со стерлинговым серебром",
    price: "$4,250",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBnzok-jqA2GRm8GDNUZq_8XzQXV5uMd7iN-u3uXnkXq_22Ny-wh-5wE7niyUfh95YoRwHGp-PODm5cMlDHkPKvEPuZ4GSIKX5DZD3uHcOks_paQL6HBEC3frPSr0vK-0pxTBGURzEItLs3smaeIiffgHB-O1cK4Cdifrjdh4sGxDOajtzKZwzH2pu8Nk7jPJbWvwaj5OLuMHbVkLOy9Mso1Rr3phSNk82RLVdTkKt_-InnrkH4uYM7KC0d4xHmRmTS5IQHbYgep_Q",
    imageAlt: "Close up of a luxury black ebony backgammon board with gold and silver inlays under dramatic studio lighting",
    badge: "Лимитированная серия",
    isPrimaryAction: true
  },
  {
    title: "Королевский Орех Геометрия",
    subtitle: "Кавказский орех с инкрустацией из клена и латуни",
    price: "$3,800",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDE6qDEdkqEZgCII9QxiY7i5RcQ_dMvz4RyzwHuXIQebcF549QFSxmnFBUs_jTkNwNn5PkbUTuzFFBIyx81SU2foIQHcnCmJzkF2TO_srSGQSbKxYd4m-X_PgU8UN5wui6Cz1JgCyexqNB4yHk0tXwgqOXifRPd525LA_FsCPnbIlwz1tX2uDkPtJzjQLr4J-VC5sjOBfIkq3XX8zEFbffEQaGQfSQMzy9VdR4B9ykQq2chCVLEglVybzhwSsxRyaRNgybsgovmXvg",
    imageAlt: "Exquisite carved walnut wood backgammon board displaying geometric patterns and warm rich tones, resting on a velvet surface",
  },
  {
    title: "Императорский Палисандр",
    subtitle: "Гондурасский палисандр с перламутром",
    price: "$5,100",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBe7V2QS-gLghlP_6NanwocI8G8wXtKgWwRCDiMzmyUcNkqjXW7u_YTu8b9KWcWeSMKDcG0cyhoVQQGPjrlwkP4mrtE5BIDnpDT5bymw_CvaG-HGIaNnwC8H0eNT09SStJ0ZrYxTxBvdofOruc0fBS9SbHpU3a0B-ZZOD7WYvnTYWqKVtzm_QSlJYbxnS2u6C8gt66weuJgHOoZP2QtLnG5HyIeFFA4uv2J9vUKKz09bCqbMOGESJ-Drr5dsi5D-MpcFaKE44U37Os",
    imageAlt: "Rich reddish-brown rosewood backgammon board with intricate mother of pearl inlays, high angle shot showing fine detail",
  },
  {
    title: "Дубовое Маркетри Мастера",
    subtitle: "Мореный дуб с деталями из сикомора и вишни",
    price: "$2,950",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuAHy2lXyoLFEA94swnTlBpTKY4nmUy2c_NmY-sFCZh-2K2HajK0T90dBIPw2hI80_5VkA1fZqk4qNMjcSi4LSGHXmNVUbyv_8KmDtcCRei1ROJBvtXicAB7hpaDGcjkMCJ2rmERFkjwzzBn0eRvHVq6YIAAlPGtB2K3xMN3IOShQS68WM7FCfa6ThL6V4lkLYcHHCGdty1gy_Mr4qKDkr-qtG4OCaUs35BemY-Cn7EyjK29OWNlyDQM2Sa_HntdXuWw-6wbOZQSBaM",
    imageAlt: "Light oak wood backgammon board featuring complex marquetry patterns of contrasting woods, warm natural lighting",
    badge: "Мастерский уровень",
  }
];

export default function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="bg-background text-on-background antialiased selection:bg-primary-container selection:text-on-primary-container min-h-screen flex flex-col">
      <Header onMenuClick={() => setIsSidebarOpen(true)} />
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
      
      <main className="flex-grow flex flex-col pt-0">
        <Hero />

        {/* Pattern Divider */}
        <div className="w-full h-4 border-y border-[#d4af37]/10 flex justify-center items-center overflow-hidden opacity-40 my-8">
          <div className="flex gap-4">
            <Star className="text-[#d4af37] w-3 h-3 fill-[#d4af37]/50" />
            <Star className="text-[#d4af37] w-4 h-4 fill-[#d4af37]" />
            <Star className="text-[#d4af37] w-3 h-3 fill-[#d4af37]/50" />
            <Star className="text-[#d4af37] w-4 h-4 fill-[#d4af37]" />
            <Star className="text-[#d4af37] w-3 h-3 fill-[#d4af37]/50" />
          </div>
        </div>

        {/* Collection Section */}
        <section className="text-center max-w-3xl mx-auto space-y-4 px-6 md:px-10 mt-8 mb-12">
          <h2 className="text-3xl md:text-4xl font-serif italic font-light text-[#f2ca50] leading-tight">
            Коллекция Шедевров
          </h2>
          <p className="text-[11px] md:text-sm max-w-2xl mx-auto opacity-70 leading-relaxed uppercase tracking-[0.2em] md:tracking-wider">
            Откройте для себя нашу галерею нард ручной работы. Каждая доска — это 
            завершенное произведение, оживающее в текстурах эбена, ореха и палисандра.
          </p>
        </section>

        {/* Collection Grid */}
        <div className="max-w-7xl mx-auto px-6 md:px-10 grid grid-cols-1 md:grid-cols-2 gap-6 pb-20 w-full">
          {PRODUCTS.map((product, idx) => (
            <ProductCard key={idx} {...product} />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
