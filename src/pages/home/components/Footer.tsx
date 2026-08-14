export default function Footer() {
  return (
    <footer className="bg-background-100 border-t border-background-200/30 pb-24 lg:pb-0">
      <div className="section-padding py-10 md:py-14">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          <div className="shrink-0">
            <img
              alt="헤이리 오베르원"
              className="w-32 md:w-40 h-auto"
              src="https://www.xn--2w2b1dm8gn5nwya81ag35e.com/assets/images/common/footer-logo.png"
            />
          </div>

          <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-sm font-semibold text-foreground-200 mb-3">시행사</h4>
              <ul className="space-y-1.5 text-xs md:text-sm text-foreground-400">
                <li>
                  <span className="text-foreground-500 font-medium">시행사 :</span> 파주탄현민간임대 협동조합
                </li>
                <li>
                  <span className="text-foreground-500 font-medium">사업자등록번호 :</span> 828-87-03686
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-foreground-200 mb-3">광고대행</h4>
              <ul className="space-y-1.5 text-xs md:text-sm text-foreground-400">
                <li>
                  <span className="text-foreground-500 font-medium">광고대행 :</span> (주)애드탱크
                </li>
                <li>
                  <span className="text-foreground-500 font-medium">담당자명 :</span> 윤영빈
                </li>
                <li>
                  <span className="text-foreground-500 font-medium">tel :</span>{' '}
                  <a
                    className="hover:text-primary-500 transition-colors cursor-pointer"
                    href="tel:010-4601-8729"
                  >
                    010-4601-8729
                  </a>
                </li>
              </ul>
            </div>
            <div className="md:col-span-2">
              <ul className="space-y-1 text-[11px] md:text-xs text-foreground-400 leading-relaxed">
                <li>
                  ※ 본 홈페이지에 사용된 CG 및 이미지컷은 소비자의 이해를 돕기 위해 임의로 제작된 것입니다.
                </li>
                <li>
                  ※ 본 홈페이지에 표시된 개발계획은 언론 및 지방자치단체 외 기타 기관에서 발표한 내용을 참조한 것으로, 국가기관, 지자체, 교육청 및 기타 관계기관의 상황에 따라 사업추진 중 일부변경 또는 지연 및 취소될 수 있으니 유의하시기 바랍니다.
                </li>
              </ul>
            </div>
          </div>

          <div className="shrink-0 lg:text-right">
            <a
              className="inline-block font-display text-2xl md:text-3xl font-bold text-primary-500 hover:text-primary-400 transition-colors cursor-pointer"
              href="tel:1844-1451"
            >
              1844-1451
            </a>
            <div className="mt-4 space-y-1 text-xs md:text-sm text-foreground-400">
              <p>
                <span className="text-foreground-500 font-medium">홍보관.</span> 경기도 파주시 다율동 1041-9
              </p>
              <p>
                <span className="text-foreground-500 font-medium">현장.</span> 경기도 파주시 탄현면 축현리 562번지 일원
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-background-200/20">
        <div className="section-padding py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-[11px] text-foreground-400">© 2026 헤이리 오베르원. All rights reserved.</p>
          <p className="text-[11px] text-foreground-400">Be the Greatest</p>
        </div>
      </div>
    </footer>
  );
}