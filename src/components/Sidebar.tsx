import { TreePine, Moon, Gem, User, X } from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export function Sidebar({ isOpen, onClose }: SidebarProps) {
  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/60 z-50 transition-opacity"
          onClick={onClose}
        />
      )}

      {/* Drawer */}
      <aside 
        className={`fixed inset-y-0 right-0 z-[60] flex flex-col h-full w-80 border-l border-yellow-900/40 divide-y divide-yellow-900/10 shadow-2xl bg-stone-950 transform transition-transform duration-500 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-6 flex justify-between items-center">
          <h2 className="text-lg text-yellow-500 font-serif font-black uppercase tracking-wider">
            Меню Ателье
          </h2>
          <button 
            onClick={onClose}
            className="text-stone-400 hover:text-yellow-400 p-2 rounded focus:outline-none"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        <nav className="flex-1 overflow-y-auto">
          <ul className="flex flex-col py-2">
            <li>
              <a href="#" className="flex items-center gap-4 text-stone-400 px-6 py-4 hover:bg-stone-900/50 hover:text-yellow-400 transition-all font-sans">
                <TreePine className="w-5 h-5" />
                <span>Коллекция из ореха</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center gap-4 text-stone-400 px-6 py-4 hover:bg-stone-900/50 hover:text-yellow-400 transition-all font-sans">
                <Moon className="w-5 h-5" />
                <span>Серия из эбенового дерева</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center gap-4 text-stone-400 px-6 py-4 hover:bg-stone-900/50 hover:text-yellow-400 transition-all font-sans">
                <Gem className="w-5 h-5" />
                <span>Шедевры из палисандра</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center gap-4 text-stone-400 px-6 py-4 hover:bg-stone-900/50 hover:text-yellow-400 transition-all font-sans">
                <User className="w-5 h-5" />
                <span>О мастере</span>
              </a>
            </li>
          </ul>
        </nav>
      </aside>
    </>
  );
}
