import { useState, useEffect } from 'react';

const navItems = [
  { href: '#overview', label: '사업개요' },
  { href: '#brand', label: '브랜드' },
  { href: '#environment', label: '입지환경' },
  { href: '#premium', label: '프리미엄' },
  { href: '#complex', label: '단지안내' },
  { href: '#unit', label: '세대안내' },
  { href: '#location', label: '오시는길' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-background-50/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="flex items-center justify-between section-padding h-16 md:h-20">
        <a
          className="flex flex-col items-start shrink-0 cursor-pointer"
          href="#top"
          onClick={(e) => handleNavClick(e, '#top')}
        >
          <span className="font-display text-lg md:text-xl font-semibold tracking-wider transition-colors duration-300 text-primary-500">
            AUVERSONE
          </span>
          <span className="text-[10px] md:text-xs tracking-widest transition-colors duration-300 text-foreground-400">
            헤이리 오베르원
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <a
              key={item.href}
              className="px-3 py-2 text-sm font-medium whitespace-nowrap transition-colors duration-300 rounded-md hover:bg-background-200/50 cursor-pointer text-foreground-200 hover:text-foreground-50"
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <a
            className="flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-full border transition-all duration-300 whitespace-nowrap cursor-pointer border-primary-500/50 text-primary-400 hover:bg-primary-500/10 hover:text-primary-300"
            href="#register"
            onClick={(e) => handleNavClick(e, '#register')}
          >
            <i className="ri-user-add-line" />
            관심고객등록
          </a>
          <a
            className="flex items-center gap-2 text-sm font-medium whitespace-nowrap transition-colors duration-300 cursor-pointer text-foreground-200 hover:text-primary-400"
            href="tel:1844-1451"
          >
            <i className="ri-phone-line" />
            <span className="font-display text-base">1844-1451</span>
          </a>
        </div>

        <button
          aria-label="메뉴 열기"
          className="lg:hidden p-2 rounded-md transition-colors cursor-pointer"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <i className={`ri-menu-3-line text-xl text-foreground-50`} />
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-background-50/95 backdrop-blur-md border-t border-background-200/30 animate-fade-in">
          <nav className="flex flex-col p-4 gap-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                className="px-4 py-3 text-sm font-medium rounded-md hover:bg-background-200/50 text-foreground-200"
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
              >
                {item.label}
              </a>
            ))}
            <a
              className="mt-2 flex items-center justify-center gap-2 px-4 py-3 text-sm font-medium rounded-full bg-primary-500 text-background-50"
              href="#register"
              onClick={(e) => handleNavClick(e, '#register')}
            >
              <i className="ri-user-add-line" />
              관심고객등록
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}