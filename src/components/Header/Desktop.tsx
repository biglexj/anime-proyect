import { NavLink } from "react-router-dom";
import { Icon } from "@ricons/utils";
import { Search } from "@ricons/carbon";
import type { NavItem } from ".";

export function DesktopNav({ navItems }: { navItems: NavItem[] }) {
  return (
    <nav className="hidden md:flex items-center gap-6">
      {navItems.map((i) => (
        <NavLink
          key={i.href}
          to={i.href}
          className="text-sm font-medium text-zinc-300 hover:text-white
            relative after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0
            after:bg-gradient-to-r after:from-pink-500 after:to-fuchsia-500
            hover:after:w-full after:transition-all"
          end
        >
          {i.label}
        </NavLink>
      ))}
    </nav>
  );
}

export function DesktopSearch({ inputId }: { inputId: string }) {
  return (
    <div className="relative hidden md:block">
      <input
        id={inputId}
        type="text"
        placeholder="Buscar anime…"
        className="
          w-64 rounded-full bg-zinc-900/80 border border-pink-500/20
          text-sm text-white placeholder-zinc-500
          pl-10 pr-4 py-2 outline-none
          focus:ring-2 focus:ring-pink-500/60 focus:border-pink-500/40
          transition-shadow
        "
      />
      <Icon>
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500" />
      </Icon>
    </div>
  );
}
