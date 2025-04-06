export function TeamMuetHero() {
  return (
    <header className="relative h-[60vh] bg-cover bg-center" style={{
      backgroundImage: 'url("https://images.unsplash.com/photo-1612160808975-ecb94e6e517b?auto=format&fit=crop&q=80&w=1920")'
    }}>
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
        <h1 className="text-5xl md:text-7xl text-white font-extralight tracking-wider mb-2">
          team<br />mouillette
        </h1>
        <p className="text-white/90 text-sm tracking-wider">
          チームムエット 〜嗅覚への挑戦〜
        </p>
      </div>
    </header>
  );
}