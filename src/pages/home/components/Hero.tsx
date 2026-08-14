export default function Hero() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          alt="헤이리 오베르원 히어로 이미지"
          className="w-full h-full object-cover object-top"
          src="https://www.xn--2w2b1dm8gn5nwya81ag35e.com/assets/images/main/visual-bg-new.jpg"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/60" />
      </div>

      {/* 시공사 Badge */}
      <div className="absolute top-20 right-4 md:right-8 lg:right-16 z-10 hidden md:block">
        <div className="flex items-center gap-0 rounded-lg overflow-hidden border border-foreground-700/20">
          <div className="px-3 py-1.5 bg-primary-500/80 text-xs font-semibold text-background-50">
            시공사
          </div>
          <div className="px-3 py-1.5 bg-background-50/80 text-xs font-medium text-foreground-50 backdrop-blur-sm">
            제일건설 시공참여
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="text-shadow-lg">
          <p className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground-50 leading-tight">
            파주 서부권
          </p>
          <p className="text-2xl md:text-4xl lg:text-5xl font-heading font-medium text-foreground-100 mt-2 leading-tight">
            프리미엄 시대를 열다!
          </p>
        </div>
        <div className="w-16 h-px bg-primary-500 mx-auto my-6 md:my-8" />
        <div className="space-y-1">
          <p className="text-xl md:text-2xl lg:text-3xl font-heading font-semibold text-foreground-50 tracking-wide">
            헤이리 <span className="text-foreground-50 font-bold">오베르원</span>
          </p>
          <p className="text-sm md:text-base text-foreground-100 tracking-widest">
            장기일반민간임대주택
          </p>
        </div>
      </div>

      {/* GRAND OPEN Badge */}
      <div className="absolute right-4 md:right-8 lg:right-12 bottom-24 md:bottom-32 z-10 flex flex-col items-center gap-4">
        <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-background-50/30 backdrop-blur-sm border border-foreground-700/20 flex items-center justify-center">
          <div className="text-center">
            <p className="text-[9px] md:text-[10px] font-bold text-foreground-50 leading-tight">GRAND</p>
            <p className="text-[9px] md:text-[10px] font-bold text-primary-500 leading-tight">OPEN</p>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2">
        <span className="text-[10px] text-foreground-700 tracking-widest">SCROLL</span>
        <div className="w-px h-8 bg-gradient-to-b from-foreground-700 to-transparent" />
      </div>
    </section>
  );
}