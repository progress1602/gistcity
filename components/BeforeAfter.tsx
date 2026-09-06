
import React, { useState } from 'react';

const BeforeAfter: React.FC = () => {
  const [sliderPos, setSliderPos] = useState(50);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    setSliderPos(Math.min(Math.max(x, 0), 100));
  };

  return (
    <section className="py-24 bg-black text-white border-t border-yellow-400/15">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-yellow-400/10 border border-yellow-400/30 text-yellow-400 text-xs font-black uppercase tracking-widest mb-3">
            Visibility Impact Comparison
          </div>
          <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-4 uppercase">THE MEDIA AMPLIFICATION EFFECT</h2>
          <p className="text-neutral-400 max-w-xl mx-auto font-medium">Slide to see how GistCity elevates local announcements into high-visibility international headlines.</p>
        </div>

        <div 
          className="relative w-full max-w-4xl mx-auto aspect-video rounded-[2.5rem] overflow-hidden cursor-ew-resize select-none border border-yellow-400/25 shadow-2xl shadow-yellow-400/10"
          onMouseMove={handleMouseMove}
        >
          {/* After Image */}
          <div className="absolute inset-0">
            <img 
              src="https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1600&auto=format&fit=crop" 
              alt="GistCity Amplified Coverage" 
              className="w-full h-full object-cover"
            />
            <div className="absolute top-6 right-6 bg-yellow-400 text-black px-5 py-2.5 rounded-full font-black text-xs uppercase tracking-widest shadow-xl shadow-yellow-400/20">
              With GistCity (200K+ Reach)
            </div>
          </div>

          {/* Before Image */}
          <div 
            className="absolute inset-0 overflow-hidden" 
            style={{ width: `${sliderPos}%` }}
          >
            <img 
              src="https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1600&auto=format&fit=crop" 
              alt="Standard Local Coverage" 
              className="w-[100vw] max-w-[1200px] h-full object-cover grayscale brightness-50 contrast-75"
            />
            <div className="absolute top-6 left-6 bg-black/80 text-white px-5 py-2.5 rounded-full font-black text-xs uppercase tracking-widest shadow-lg whitespace-nowrap border border-white/20">
              Standard Local Coverage
            </div>
          </div>

          {/* Slider Line */}
          <div 
            className="absolute top-0 bottom-0 w-1 bg-yellow-400 shadow-[0_0_20px_rgba(250,204,21,0.8)] flex items-center justify-center"
            style={{ left: `${sliderPos}%` }}
          >
            <div className="w-12 h-12 bg-yellow-400 text-black rounded-full shadow-2xl flex items-center justify-center font-black">
              <div className="flex gap-1">
                <span className="w-1.5 h-1.5 bg-black rounded-full" />
                <span className="w-1.5 h-1.5 bg-black rounded-full" />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-8 text-center">
          <div className="p-8 rounded-3xl bg-neutral-950 border border-yellow-400/15">
             <h4 className="text-xl font-black mb-2 text-white">Editorial Authority</h4>
             <p className="text-neutral-400 text-sm">Targeted news angle, verified reporting, and high-prestige presentation.</p>
          </div>
          <div className="p-8 rounded-3xl bg-neutral-950 border border-yellow-400/15">
             <h4 className="text-xl font-black mb-2 text-yellow-400">Cross-Border Reach</h4>
             <p className="text-neutral-400 text-sm">Simultaneous distribution to audiences across Nigeria, USA, and UK.</p>
          </div>
          <div className="p-8 rounded-3xl bg-neutral-950 border border-yellow-400/15">
             <h4 className="text-xl font-black mb-2 text-white">Lasting Digital Presence</h4>
             <p className="text-neutral-400 text-sm">High-ranking Google search discoverability and permanent media archives.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfter;
