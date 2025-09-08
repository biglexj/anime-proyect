export default function Logo() {
  return (
    <a href="/" className="flex items-center gap-2 group">
      <span
        aria-hidden
        className="size-7 rounded-md bg-gradient-to-br from-pink-500 to-fuchsia-600 grid place-items-center shadow-[0_0_24px_-8px] shadow-pink-500/50"
      >
        ✦
      </span>
      <span className="text-lg font-extrabold tracking-wide uppercase">
        <span className="text-pink-400">Ver</span>{" "}
        <span className="text-zinc-50">Anime</span>
      </span>
    </a>
  );
}
