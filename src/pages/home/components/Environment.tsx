export default function Environment() {
  return (
    <section className="relative w-full bg-background-50 overflow-hidden" id="environment">
      <div className="relative section-padding py-20 md:py-28">
        <p className="text-xs md:text-sm font-medium text-primary-500 tracking-[0.3em] mb-2">
          HEYRI AUVERSONE
        </p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground-50 mb-8 md:mb-12">
          입지환경
        </h2>
        <img
          alt="헤이리 오베르원 입지환경"
          className="w-full max-w-5xl mx-auto h-auto rounded-lg border border-background-200/30"
          src="https://www.xn--2w2b1dm8gn5nwya81ag35e.com/assets/images/sub/environment.jpg"
        />
        <ul className="max-w-5xl mx-auto mt-6 space-y-2 text-xs md:text-sm text-foreground-600 leading-relaxed">
          <li>
            ※ 본 홈페이지에 사용된 이미지 및 그림(일러스트) 등은 소비자의 이해를 돕기 위해 촬영 또는 제작한 것으로 실제와 다소 상이할 수 있으므로 홍보관 및 현장을 방문하시어 직접 확인하시기 바랍니다.
          </li>
          <li>
            ※ 본 홈페이지에 기재된 계획, 사업계획 내용, 개발계획은 해당 관청, 지자체, 사업체 등의 상황에 따라 변경, 지연, 취소 될 수 있습니다.
          </li>
        </ul>
      </div>
    </section>
  );
}