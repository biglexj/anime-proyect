import { routes } from "../routes";
import type { NavItem } from "../components/Header";

export function getNavItems(): NavItem[] {
  return routes
    .map((r) => {
      const meta = (r.handle as any)?.nav;
      if (!meta?.label) return null;
      return { href: r.path!, label: meta.label, order: meta.order ?? 999 };
    })
    .filter(Boolean)
    .sort((a: any, b: any) => a.order - b.order) as NavItem[];
}
