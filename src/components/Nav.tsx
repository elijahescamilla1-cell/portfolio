import { NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <header
      className="fixed top-0 inset-x-0 z-50 h-16 flex items-center px-6 border-b border-border"
      style={{ background: "var(--surface-alt)" }}
    >
      <div className="max-w-5xl w-full mx-auto flex items-center justify-between">
        <span
          className="text-sm font-bold tracking-tight"
          style={{ fontFamily: "'Chakra Petch', sans-serif", color: "var(--foreground)" }}
        >
          Elijah Escamilla
        </span>
        <nav className="flex items-center gap-6">
          {[
            { to: "/", label: "Home" },
            { to: "/work", label: "Work" },
          ].map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end
              className={({ isActive }) =>
                `font-mono text-[11px] tracking-[0.14em] uppercase transition-colors ${
                  isActive ? "text-primary" : "text-muted-foreground hover:text-foreground"
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}
