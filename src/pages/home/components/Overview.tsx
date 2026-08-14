export default function Overview() {
  return (
    <section className="relative w-full bg-background-50 overflow-hidden" id="overview">
      <div className="relative section-padding py-20 md:py-28">
        <p className="text-xs md:text-sm font-medium text-primary-500 tracking-[0.3em] mb-2">
          HEYRI AUVERSONE
        </p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground-50 mb-8 md:mb-12">
          사업개요
        </h2>
        <img
          alt="헤이리 오베르원 사업개요"
          className="w-full max-w-5xl mx-auto h-auto rounded-lg border border-background-200/30"
          src="https://www.xn--2w2b1dm8gn5nwya81ag35e.com/assets/images/sub/overview.jpg"
        />
        <p className="text-xs text-foreground-600 mt-4 text-center">
          ※ 본 홈페이지에 사용된 CG 및 이미지컷은 소비자의 이해를 돕기 위해 임의로 제작된 것입니다.
        </p>
      </div>
    </section>
  );
}