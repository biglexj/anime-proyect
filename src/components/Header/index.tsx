import { useEffect, useId, useState } from "react";
import { Icon } from "@ricons/utils";
import { Menu, Search, Close } from "@ricons/carbon";
import { getNavItems } from "../../utils/nav";
import Logo from "./Logo";
import { DesktopNav, DesktopSearch } from "./Desktop";

export interface NavItem {
  href: string;
  label: string;
  order: number;
}

function Actions({
  onOpenSearch,
  onOpenMenu,
}: {
  onOpenSearch: () => void;
  onOpenMenu: () => void;
}) {
  return (
    <div className="flex items-center gap-2">
      {/* Search (desktop inline) */}
      {/* El input desktop vive en DesktopSearch; aquí solo botones móviles */}
      <button
        onClick={onOpenSearch}
        className="md:hidden p-2 rounded-full hover:bg-zinc-900/80 focus:outline-none focus:ring-2 focus:ring-pink-500/60"
        aria-label="Abrir búsqueda"
      >
        <Icon>
          <Search />
        </Icon>
      </button>

      <button
        onClick={onOpenMenu}
        className="md:hidden p-2 rounded-full hover:bg-zinc-900/80 focus:outline-none focus:ring-2 focus:ring-pink-500/60"
        aria-label="Abrir menú"
      >
        <Icon>
          <Menu />
        </Icon>
      </button>
    </div>
  );
}

function MobileSearchOverlay({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  if (!open) return null;
  return (
    <div
      role="dialog"
      aria-modal="true"
      className="
        fixed inset-0 z-[60] md:hidden
        bg-zinc-950/90 backdrop-blur-sm
        animate-in fade-in duration-150
      "
    >
      <div className="absolute inset-x-0 top-0 p-4 pt-[env(safe-area-inset-top)]">
        <div className="relative">
          <input
            autoFocus
            type="text"
            placeholder="Buscar anime…"
            className="
              w-full rounded-full bg-zinc-900 border border-pink-500/30
              text-base text-white placeholder-zinc-500
              pl-11 pr-12 py-3 outline-none
              focus:ring-2 focus:ring-pink-500/60
            "
          />
          <Icon>
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500" />
          </Icon>

          <button
            onClick={onClose}
            className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full hover:bg-zinc-800/80"
            aria-label="Cerrar búsqueda"
          >
            <Icon>
              <Close />
            </Icon>
          </button>
        </div>
      </div>
    </div>
  );
}

function MobileMenuDrawer({
  open,
  navItems,
  onClose,
}: {
  open: boolean;
  navItems: NavItem[];
  onClose: () => void;
}) {
  if (!open) return null;
  return (
    <div
      role="dialog"
      aria-modal="true"
      className="
        fixed inset-0 z-[60] md:hidden
        bg-zinc-950/90 backdrop-blur-sm
        animate-in fade-in duration-150
      "
    >
      {/* Panel */}
      <div
        className="
          absolute left-0 top-0 h-full w-[82%] max-w-xs
          bg-zinc-950 border-r border-pink-500/20
          shadow-2xl
          animate-in slide-in-from-left duration-200
          flex flex-col
        "
      >
        <div className="flex items-center justify-between px-4 py-4 border-b border-white/5">
          <span className="text-sm font-semibold tracking-wide text-zinc-200">
            Menú
          </span>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-zinc-900/80"
            aria-label="Cerrar menú"
          >
            <Close />
          </button>
        </div>

        <nav className="flex-1 px-2 py-2">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={onClose}
              className="
                block rounded-lg px-3 py-3
                text-zinc-200 hover:text-white
                hover:bg-pink-500/10
                border border-transparent hover:border-pink-500/20
                transition
              "
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="px-3 pb-6">
          <a
            href="/premium"
            onClick={onClose}
            className="
              block w-full text-center rounded-full
              bg-gradient-to-r from-pink-600 to-fuchsia-600
              text-white font-semibold py-2.5
              shadow-[0_10px_30px_-10px] shadow-pink-600/50
              hover:opacity-95 active:opacity-90
            "
          >
            🚀 Probar Premium
          </a>
        </div>
      </div>

      {/* Clic fuera cierra el drawer */}
      <button
        onClick={onClose}
        aria-label="Cerrar"
        className="absolute inset-0"
      />
    </div>
  );
}

/* --------------------------------- Header -------------------------------- */

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const searchInputId = useId();

  const navItems = getNavItems();

  useEffect(() => {
    const anyOpen = menuOpen || searchOpen;
    document.documentElement.classList.toggle("overflow-hidden", anyOpen);
  }, [menuOpen, searchOpen]);

  const closeAll = () => {
    setMenuOpen(false);
    setSearchOpen(false);
  };

  return (
    <header
      className="
        sticky top-0 z-50 
        bg-zinc-950/70 backdrop-blur-md border-b border-pink-500/20
        text-zinc-100
        supports-[backdrop-filter]:bg-zinc-950/60
      "
    >
      {/* Barra superior */}
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="flex h-16 items-center justify-between">
          <Logo />

          <DesktopNav navItems={navItems} />

          {/* Acciones + Search desktop */}
          <div className="flex items-center gap-2">
            <DesktopSearch inputId={searchInputId} />
            <Actions
              onOpenSearch={() => setSearchOpen(true)}
              onOpenMenu={() => setMenuOpen(true)}
            />
          </div>
        </div>
      </div>

      {/* Overlays móviles */}
      <MobileSearchOverlay
        open={searchOpen}
        onClose={() => setSearchOpen(false)}
      />
      <MobileMenuDrawer
        open={menuOpen}
        navItems={navItems}
        onClose={closeAll}
      />
    </header>
  );
}
