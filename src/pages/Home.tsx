import miku from "@assets/wallpaper/Hatsune-Miku.webp";

function Home() {
  return (
    <main className="h-screen w-full flex justify-center">
      <img
        src={miku}
        alt="Hyprland wallpaper"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <section className="flex justify-center align-center flex-col">
        <div className="max-w-7xl mx-auto h-auto bg-pink-panther-400/50 backdrop-blur-sm rounded-lg p-5">
          <h1 className="text-4xl text-center text-white font-bold">Hello</h1>
          <p className="text-lg text-center text-dark font-semibold mt-4">
            Welcome to your Anime Project!
            <br />
            Configuración inicial completa. De los assets y dependencias
            necesarias funcionan correctamente.
            <br />A desarrollar tu aplicación con React, TypeScript y Tailwind
            CSS. ¡Diviértete programando!
          </p>
          <h2 className="text-lg text-center text-white">Popipo</h2>
        </div>
      </section>
    </main>
  );
}

export default Home;
