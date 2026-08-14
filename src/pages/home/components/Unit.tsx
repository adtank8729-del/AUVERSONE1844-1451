import { useState } from 'react';

const units = [
  { alt: '59A 평면도', src: 'https://storage.helloreaddy.io/project_files/e87dc29c-feba-40d3-9c10-bae38306932e/f53ec64f-bedb-4955-a73a-082ba8174cf0_compressed_59A.webp', type: '59A' },
  { alt: '59B 평면도', src: 'https://storage.helloreaddy.io/project_files/e87dc29c-feba-40d3-9c10-bae38306932e/1dc6771a-2446-42b2-a738-1acfb57528aa_compressed_59B.webp', type: '59B' },
  { alt: '59C 평면도', src: 'https://storage.helloreaddy.io/project_files/e87dc29c-feba-40d3-9c10-bae38306932e/bc8c7c09-5904-496a-820b-81937bbc85fb_compressed_59C.webp', type: '59C' },
  { alt: '59D 평면도', src: 'https://storage.helloreaddy.io/project_files/e87dc29c-feba-40d3-9c10-bae38306932e/f69684a6-3674-45bd-bd90-95f2d6596811_compressed_59D.webp', type: '59D' },
  { alt: '74A 평면도', src: 'https://storage.helloreaddy.io/project_files/e87dc29c-feba-40d3-9c10-bae38306932e/0f789aa5-0ba9-4a33-8e48-83d3c438898f_compressed_74a.webp', type: '74A' },
  { alt: '74B 평면도', src: 'https://storage.helloreaddy.io/project_files/e87dc29c-feba-40d3-9c10-bae38306932e/b1294b66-e949-4fc9-8176-f746826c3f3b_compressed_74B.webp', type: '74B' },
  { alt: '74C 평면도', src: 'https://storage.helloreaddy.io/project_files/e87dc29c-feba-40d3-9c10-bae38306932e/08700bfe-8a45-4088-89bb-994a27da85cc_compressed_74C.webp', type: '74C' },
];

export default function Unit() {
  const [selectedUnit, setSelectedUnit] = useState<string | null>(null);

  return (
    <section className="relative w-full overflow-hidden" id="unit">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          alt="Unit background"
          className="w-full h-full object-cover object-top"
          src="https://www.xn--2w2b1dm8gn5nwya81ag35e.com/assets/images/main/unit-bg.jpg"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background-50/95 via-background-50/80 to-background-50/60" />
      </div>

      <div className="relative z-10 section-padding py-20 md:py-28">
        <div className="w-full">
          <div className="mb-10 md:mb-14 text-center">
            <p className="text-xs md:text-sm font-medium text-primary-500 tracking-[0.3em] mb-2">
              HEYRI AUVERSONE
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground-50 mb-3">
              UNIT PLAN
            </h2>
            <p className="text-sm md:text-base text-foreground-300">
              헤이리 오베르원 <span className="text-primary-500 font-semibold">평형안내</span>
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 max-w-5xl mx-auto">
            {units.map((unit) => (
              <button
                key={unit.type}
                className="group relative overflow-hidden rounded-xl border border-background-200/40 bg-background-50/60 backdrop-blur-sm hover:border-primary-500/30 transition-all duration-500 text-left cursor-pointer"
                onClick={() => setSelectedUnit(unit.src)}
                type="button"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    alt={unit.alt}
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    src={unit.src}
                  />
                </div>
                <div className="absolute bottom-0 left-0 right-0 px-4 py-3 bg-gradient-to-t from-black/60 to-transparent">
                  <span className="text-sm font-bold text-background-50">{unit.type} 타입</span>
                </div>
                <div className="absolute inset-0 bg-primary-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-background-50/90 flex items-center justify-center">
                    <i className="ri-zoom-in-line text-lg text-foreground-50" />
                  </div>
                </div>
              </button>
            ))}
          </div>

          <div className="mt-10 md:mt-14 flex flex-wrap justify-center gap-3">
            {units.map((unit) => (
              <div
                key={unit.type}
                className="px-5 py-2.5 bg-background-100/50 border border-background-200/30 rounded-full"
              >
                <span className="text-sm font-semibold text-foreground-200">{unit.type}</span>
                <span className="text-xs text-foreground-500 ml-1">㎡</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedUnit && (
        <div
          className="fixed inset-0 z-[200] flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelectedUnit(null)}
        >
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />
          <div className="relative z-10 max-w-4xl w-full">
            <img
              alt="평면도 상세보기"
              className="w-full h-auto rounded-xl"
              src={selectedUnit}
            />
            <button
              className="absolute -top-10 right-0 text-white text-sm hover:text-primary-500 transition-colors"
              onClick={() => setSelectedUnit(null)}
            >
              닫기 <span className="text-lg">&times;</span>
            </button>
          </div>
        </div>
      )}
    </section>
  );
}