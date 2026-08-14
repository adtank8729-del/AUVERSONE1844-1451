export default function Community() {
  const facilities = [
    {
      icon: 'ri-run-line',
      title: '피트니스센터',
      desc: '최신 운동기구와 전문 트레이너 상주',
    },
    {
      icon: 'ri-focus-3-line',
      title: '골프연습장',
      desc: '스크린골프 & 스크린테니스',
    },
    {
      icon: 'ri-restaurant-line',
      title: '카페 & 라운지',
      desc: '호텔식 조중식 서비스',
    },
    {
      icon: 'ri-drop-line',
      title: '사우나 & 스파',
      desc: '리조트급 웰니스 시설',
    },
  ];

  const images = [
    { alt: '커뮤니티 시설 1', src: 'https://www.xn--2w2b1dm8gn5nwya81ag35e.com/assets/images/main/community-img-01.jpg' },
    { alt: '커뮤니티 시설 2', src: 'https://www.xn--2w2b1dm8gn5nwya81ag35e.com/assets/images/main/community-img-02.jpg' },
    { alt: '커뮤니티 시설 3', src: 'https://www.xn--2w2b1dm8gn5nwya81ag35e.com/assets/images/main/community-img-03.jpg' },
    { alt: '커뮤니티 시설 4', src: 'https://www.xn--2w2b1dm8gn5nwya81ag35e.com/assets/images/main/community-img-04.jpg' },
  ];

  return (
    <section className="relative w-full min-h-screen bg-background-100 overflow-hidden" id="community">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          alt="Community background"
          className="w-full h-full object-cover object-top opacity-20"
          src="https://www.xn--2w2b1dm8gn5nwya81ag35e.com/assets/images/main/community-bg.jpg"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background-100 via-background-100/95 to-background-100" />
      </div>

      <div className="relative z-10 section-padding py-20 md:py-28">
        <div className="mb-12 md:mb-16">
          <p className="text-xs md:text-sm font-medium text-primary-500 tracking-[0.3em] mb-2">
            HEYRI AUVERSONE
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground-50">
            CLUB AUVERSONE
          </h2>
        </div>

        <div className="max-w-2xl mb-12">
          <h3 className="text-xl md:text-2xl font-bold text-foreground-100 mb-4">
            파주에 없었던 멀티 레이어드 커뮤니티 서비스
          </h3>
          <p className="text-sm md:text-base text-foreground-400 leading-relaxed">
            피트니스센터, 골프연습장, 스크린골프, 스크린테니스,
            <br className="hidden md:block" />
            카페에 리조트급 사우나 & 스파와 호텔식 조중식 서비스까지-
            <br className="hidden md:block" />
            차원이 다른 모던 바이브 커뮤니티가 펼쳐집니다.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 mb-12">
          {facilities.map((facility) => (
            <div
              key={facility.title}
              className="group p-4 md:p-6 bg-background-50/50 border border-background-200/30 rounded-xl hover:border-primary-500/30 transition-all duration-300"
            >
              <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-primary-500/10 rounded-lg mb-3 group-hover:bg-primary-500/20 transition-colors">
                <i className={`${facility.icon} text-lg md:text-xl text-primary-500`} />
              </div>
              <h4 className="text-sm md:text-base font-semibold text-foreground-100 mb-1">
                {facility.title}
              </h4>
              <p className="text-xs text-foreground-400">{facility.desc}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
          {images.map((img) => (
            <div key={img.alt} className="group relative overflow-hidden rounded-xl aspect-[3/2]">
              <img
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                src={img.src}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}