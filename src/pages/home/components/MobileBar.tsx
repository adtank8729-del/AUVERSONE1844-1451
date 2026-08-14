export default function MobileBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden">
      <div className="bg-background-50/95 backdrop-blur-md border-t border-background-200/40 px-4 pt-2.5 pb-[calc(0.625rem+env(safe-area-inset-bottom))]">
        <div className="flex items-center gap-2.5">
          <a
            className="flex-1 inline-flex items-center justify-center gap-2 h-12 rounded-full bg-primary-500 text-background-50 font-semibold text-sm whitespace-nowrap transition-colors duration-300 hover:bg-primary-600 cursor-pointer"
            href="#register"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#register')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            <i className="ri-user-add-line" />
            관심고객등록
          </a>
          <a
            className="flex-1 inline-flex items-center justify-center gap-2 h-12 rounded-full bg-accent-500 text-background-50 font-semibold text-sm whitespace-nowrap transition-colors duration-300 hover:bg-accent-600 cursor-pointer"
            href="tel:1844-1451"
          >
            <i className="ri-phone-line" />
            전화걸기
          </a>
        </div>
      </div>
    </div>
  );
}