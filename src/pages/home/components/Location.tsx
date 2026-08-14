export default function Location() {
  return (
    <section className="relative w-full min-h-screen overflow-hidden" id="location">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          alt="Location background"
          className="w-full h-full object-cover object-top opacity-30"
          src="https://www.xn--2w2b1dm8gn5nwya81ag35e.com/assets/images/main/location-bg.jpg"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background-50 via-background-50/90 to-background-50" />
      </div>

      <div className="relative z-10 section-padding py-20 md:py-28 flex items-center min-h-screen">
        <div className="w-full">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-display font-bold tracking-[0.2em] text-foreground-50">
              CONTACT
            </h2>
            <p className="text-sm md:text-base text-foreground-400 mt-4">
              헤이리 오베르원 오시는길
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
            {/* 홍보관 */}
            <div className="p-6 md:p-8 bg-background-100/50 border border-background-200/30 rounded-xl">
              <div className="flex items-center gap-2 mb-4">
                <span className="px-2 py-1 bg-primary-500/10 text-xs font-semibold text-primary-500 rounded">
                  홍보관
                </span>
              </div>
              <p className="text-base md:text-lg font-medium text-foreground-100 mb-4">
                경기도 파주시 다율동 1041-9
              </p>
              <div className="flex gap-3 flex-wrap">
                <a
                  className="inline-flex items-center gap-2 px-4 py-2 bg-[#03C75A]/10 border border-[#03C75A]/20 rounded-lg text-xs font-medium text-[#03C75A] hover:bg-[#03C75A]/20 transition-colors"
                  href="https://naver.me/xNp9x8rk"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <img
                    alt="네이버"
                    className="w-4 h-4 object-contain"
                    src="https://www.xn--2w2b1dm8gn5nwya81ag35e.com/assets/images/main/naver.png"
                  />
                  네이버 지도
                </a>
                <a
                  className="inline-flex items-center gap-2 px-4 py-2 bg-[#FEE500]/10 border border-[#FEE500]/20 rounded-lg text-xs font-medium text-[#FEE500] hover:bg-[#FEE500]/20 transition-colors"
                  href="https://kko.to/yR44B1nNq5"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <img
                    alt="카카오"
                    className="w-4 h-4 object-contain"
                    src="https://www.xn--2w2b1dm8gn5nwya81ag35e.com/assets/images/main/kakao.png"
                  />
                  카카오 지도
                </a>
              </div>
            </div>

            {/* 현장 */}
            <div className="p-6 md:p-8 bg-background-100/50 border border-background-200/30 rounded-xl">
              <div className="flex items-center gap-2 mb-4">
                <span className="px-2 py-1 bg-accent-500/10 text-xs font-semibold text-accent-500 rounded">
                  현장
                </span>
              </div>
              <p className="text-base md:text-lg font-medium text-foreground-100 mb-4">
                경기도 파주시 탄현면 축현리 562번지 일원
              </p>
              <div className="flex gap-3 flex-wrap">
                <a
                  className="inline-flex items-center gap-2 px-4 py-2 bg-[#03C75A]/10 border border-[#03C75A]/20 rounded-lg text-xs font-medium text-[#03C75A] hover:bg-[#03C75A]/20 transition-colors"
                  href="https://naver.me/x4lcDOy6"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <img
                    alt="네이버"
                    className="w-4 h-4 object-contain"
                    src="https://www.xn--2w2b1dm8gn5nwya81ag35e.com/assets/images/main/naver.png"
                  />
                  네이버 지도
                </a>
                <a
                  className="inline-flex items-center gap-2 px-4 py-2 bg-[#FEE500]/10 border border-[#FEE500]/20 rounded-lg text-xs font-medium text-[#FEE500] hover:bg-[#FEE500]/20 transition-colors"
                  href="https://kko.to/0WZDrM2mzC"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <img
                    alt="카카오"
                    className="w-4 h-4 object-contain"
                    src="https://www.xn--2w2b1dm8gn5nwya81ag35e.com/assets/images/main/kakao.png"
                  />
                  카카오 지도
                </a>
              </div>
            </div>
          </div>

          <div className="mt-8 md:mt-10 max-w-4xl mx-auto">
            <img
              alt="오시는 길 지도"
              className="w-full h-auto rounded-xl border border-background-200/30"
              src="https://www.xn--2w2b1dm8gn5nwya81ag35e.com/assets/images/main/location-map-01.png"
            />
          </div>

          <div className="mt-10 md:mt-14 text-center">
            <a
              className="inline-flex items-center gap-3 px-8 py-4 bg-primary-500 hover:bg-primary-600 text-background-50 font-semibold rounded-full transition-colors duration-300 shadow-lg shadow-primary-500/20 whitespace-nowrap"
              href="tel:1844-1451"
            >
              <i className="ri-phone-line text-xl" />
              <span className="font-display text-xl md:text-2xl">1844-1451</span>
            </a>
            <p className="text-xs text-foreground-400 mt-3">
              상담 시간: 평일 09:00 ~ 18:00 / 주말 10:00 ~ 17:00
            </p>
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 right-6 md:right-12 text-xs text-foreground-700 font-display tracking-widest">
        Be the Greatest
      </div>
    </section>
  );
}