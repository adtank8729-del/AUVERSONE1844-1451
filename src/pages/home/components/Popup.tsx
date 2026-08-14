import { useState, useEffect } from 'react';

export default function Popup() {
  const [isVisible, setIsVisible] = useState(false);
  const [dontShowToday, setDontShowToday] = useState(false);

  useEffect(() => {
    const hiddenUntil = localStorage.getItem('popup-hide-until');
    if (!hiddenUntil || new Date().getTime() > parseInt(hiddenUntil, 10)) {
      setIsVisible(true);
    }
  }, []);

  const handleClose = () => {
    if (dontShowToday) {
      const tomorrow = new Date();
      tomorrow.setDate(tomorrow.getDate() + 1);
      tomorrow.setHours(0, 0, 0, 0);
      localStorage.setItem('popup-hide-until', tomorrow.getTime().toString());
    }
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={handleClose} />
      <div className="relative z-10 w-full max-w-lg animate-fade-in">
        <img
          alt="놓칠 수 없는 6가지 이유"
          className="w-full h-auto rounded-xl shadow-2xl"
          src="https://www.xn--2w2b1dm8gn5nwya81ag35e.com/assets/images/popup/popup_260604_03.png"
        />
        <div className="flex items-center justify-between mt-3 px-1">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              checked={dontShowToday}
              className="w-4 h-4 rounded border-background-300 bg-background-200 text-primary-500 focus:ring-primary-500"
              onChange={(e) => setDontShowToday(e.target.checked)}
              type="checkbox"
            />
            <span className="text-xs text-foreground-700">오늘 하루 보지않기</span>
          </label>
          <button
            className="text-sm font-medium text-foreground-700 hover:text-foreground-50 transition-colors whitespace-nowrap"
            onClick={handleClose}
          >
            팝업닫기 <span className="text-lg leading-none">&times;</span>
          </button>
        </div>
      </div>
    </div>
  );
}