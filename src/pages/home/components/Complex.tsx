export default function Complex() {
  const stats = [
    { label: '전세대 남향위주', value: '100%' },
    { label: '넓은 동간 거리', value: '50m+' },
    { label: '친환경 자재', value: 'A급' },
    { label: '스마트 홈시스템', value: 'IoT' },
  ];

  const images = [
    { alt: '주출입구', src: 'https://www.xn--2w2b1dm8gn5nwya81ag35e.com/assets/images/main/archi-img-01.jpg', tag: '주출입구' },
    { alt: '어린이놀이터', src: 'https://www.xn--2w2b1dm8gn5nwya81ag35e.com/assets/images/main/archi-img-02.jpg', tag: '어린이놀이터' },
    { alt: '선큰가든', src: 'https://www.xn--2w2b1dm8gn5nwya81ag35e.com/assets/images/main/archi-img-03.jpg', tag: '선큰가든' },
  ];

  return (
    <section className="relative w-full min-h-screen bg-background-50 overflow-hidden" id="complex">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          alt="Architecture background"
          className="w-full h-full object-cover object-top opacity-30"
          src="https://www.xn--2w2b1dm8gn5nwya81ag35e.com/assets/images/main/archi-bg.jpg"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background-50 via-background-50/90 to-background-50/70" />
      </div>

      <div className="relative z-10 section-padding py-20 md:py-28">
        <div className="mb-12 md:mb-16">
          <p className="text-xs md:text-sm font-medium text-primary-500 tracking-[0.3em] mb-2">
            HEYRI AUVERSONE
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground-50">
            ARCHITECTURE PLAN
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div>
            <h3 className="text-xl md:text-2xl font-bold text-foreground-100 mb-4">
              첨단에 힐링을 더한 단지설계
            </h3>
            <p className="text-sm md:text-base text-foreground-400 leading-relaxed mb-6">
              전세대 남향위주, 넓은 동간 거리에 친환경과 첨단 기술이 어우러진 단지설계 -
              <br className="hidden md:block" />
              힐링에서 품격까지 한 수 위 공간을 누리십시오
            </p>
            <div className="flex flex-wrap gap-3">
              {['전세대 남향위주', '넓은 동간 거리', '친환경 설계', '스마트 홈'].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1.5 text-xs font-medium bg-background-200/50 border border-background-300/30 rounded-full text-foreground-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="p-4 md:p-6 bg-background-100/50 border border-background-200/30 rounded-xl text-center"
              >
                <p className="text-2xl md:text-3xl font-display font-bold text-primary-500 mb-1">
                  {stat.value}
                </p>
                <p className="text-xs md:text-sm text-foreground-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {images.map((img) => (
            <div key={img.tag} className="group relative overflow-hidden rounded-xl aspect-[4/3]">
              <img
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                src={img.src}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4">
                <span className="px-3 py-1.5 bg-background-50/80 backdrop-blur-sm text-xs font-medium text-foreground-50 rounded-full">
                  {img.tag}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}