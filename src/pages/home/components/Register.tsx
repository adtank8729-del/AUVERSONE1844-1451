import { useState, type FormEvent } from 'react';

const GOOGLE_SHEET_WEBHOOK_URL =
  'https://script.google.com/macros/s/AKfycbzPrPhjumWJQRW3OSYgeyuoAvCuy5lFITUC29ETHTeNoMa3oZHhEGbULEMyqmqB4r6wGg/exec';

function sendToGoogleSheets(data: {
  name: string;
  phone: string;
  visitDate: string;
  message: string;
}) {
  const params = new URLSearchParams();
  params.append('submitted_at', new Date().toLocaleString('ko-KR', { timeZone: 'Asia/Seoul' }));
  params.append('name', data.name);
  params.append('phone', data.phone);
  params.append('visit_date', data.visitDate);
  params.append('message', data.message);

  return fetch(GOOGLE_SHEET_WEBHOOK_URL, {
    method: 'POST',
    mode: 'no-cors',
    body: params,
  });
}

export default function Register() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const [showPrivacy, setShowPrivacy] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMsg('');

    const form = e.currentTarget;
    const formData = new FormData(form);

    // Check honeypot
    const honeypot = formData.get('website_alt') as string;
    if (honeypot && honeypot.trim()) {
      setStatus('success');
      form.reset();
      return;
    }

    // Remove honeypot from payload
    formData.delete('website_alt');

    // Google Sheets로 관심고객 등록 알림 전송 (best-effort, 폼 상태에 영향 없음)
    const name = (formData.get('name') as string) || '';
    const phone = (formData.get('phone') as string) || '';
    const visitDate = (formData.get('visit_date') as string) || '';
    const message = (formData.get('message') as string) || '';
    void sendToGoogleSheets({ name, phone, visitDate, message }).catch(() => {});

    try {
      const response = await fetch('https://readdy.ai/api/form/d9valmcpc8jh8d0bvq7g', {
        method: 'POST',
        body: formData,
      });

      const responseText = await response.text();
      let parsed;
      try {
        parsed = JSON.parse(responseText);
      } catch {
        parsed = null;
      }

      const serverMsg =
        parsed?.meta?.message ||
        parsed?.message ||
        parsed?.meta?.detail ||
        responseText;

      const isSpam =
        serverMsg?.toLowerCase().includes('spam') ||
        serverMsg?.toLowerCase().includes('form data is spam');

      if (response.ok && parsed?.code === 'OK' && !isSpam) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
        setErrorMsg(serverMsg || '등록 중 오류가 발생했습니다. 다시 시도해주세요.');
      }
    } catch {
      setStatus('error');
      setErrorMsg('네트워크 오류가 발생했습니다. 다시 시도해주세요.');
    }
  };

  return (
    <section className="relative w-full bg-background-50 overflow-hidden" id="register">
      <div className="relative section-padding py-20 md:py-28">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-10 md:mb-14">
            <p className="text-xs md:text-sm font-medium text-primary-500 tracking-[0.3em] mb-2">
              REGISTER
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground-50">
              관심고객 등록
            </h2>
            <p className="text-sm md:text-base text-foreground-400 mt-4">
              상담을 원하시면 아래 정보를 남겨주세요. 빠르게 연락드리겠습니다.
            </p>
          </div>

          <form
            className="p-6 md:p-8 bg-background-100/50 border border-background-200/30 rounded-xl"
            data-readdy-form=""
            id="interest-register-form"
            onSubmit={handleSubmit}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs md:text-sm font-medium text-foreground-300 mb-2" htmlFor="interest-name">
                  이름 <span className="text-primary-500">*</span>
                </label>
                <input
                  className="w-full px-4 py-3 bg-background-50/60 border border-background-300/60 rounded-md text-sm text-foreground-50 placeholder:text-foreground-400 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500/30 transition-colors"
                  id="interest-name"
                  name="name"
                  placeholder="성함을 입력해주세요"
                  required
                  type="text"
                />
              </div>
              <div>
                <label className="block text-xs md:text-sm font-medium text-foreground-300 mb-2" htmlFor="interest-phone">
                  연락처 <span className="text-primary-500">*</span>
                </label>
                <input
                  className="w-full px-4 py-3 bg-background-50/60 border border-background-300/60 rounded-md text-sm text-foreground-50 placeholder:text-foreground-400 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500/30 transition-colors"
                  id="interest-phone"
                  name="phone"
                  placeholder="010-0000-0000"
                  required
                  type="tel"
                />
              </div>
            </div>

            <div className="mt-5">
              <label className="block text-xs md:text-sm font-medium text-foreground-300 mb-2" htmlFor="interest-visit-date">
                방문일자
              </label>
              <input
                className="w-full px-4 py-3 bg-background-50/60 border border-background-300/60 rounded-md text-sm text-foreground-50 placeholder:text-foreground-400 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500/30 transition-colors"
                id="interest-visit-date"
                name="visit_date"
                type="date"
              />
            </div>

            <div className="mt-5">
              <label className="block text-xs md:text-sm font-medium text-foreground-300 mb-2" htmlFor="interest-message">
                문의내용
              </label>
              <textarea
                className="w-full px-4 py-3 bg-background-50/60 border border-background-300/60 rounded-md text-sm text-foreground-50 placeholder:text-foreground-400 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500/30 transition-colors resize-none"
                id="interest-message"
                maxLength={500}
                name="message"
                placeholder="문의하실 내용을 입력해주세요 (500자 이내)"
                rows={4}
              />
            </div>

            {/* Honeypot field */}
            <input
              aria-hidden="true"
              autoComplete="off"
              className="form-aux-field"
              name="website_alt"
              readOnly
              tabIndex={-1}
              type="text"
            />

            <div className="mt-6">
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  className="mt-0.5 h-4 w-4 shrink-0 accent-primary-500 cursor-pointer"
                  name="privacy_consent"
                  required
                  type="checkbox"
                />
                <span className="text-xs md:text-sm text-foreground-300 leading-relaxed">
                  개인정보 수집·이용에 동의합니다. <span className="text-primary-500">(필수)</span>
                </span>
              </label>

              <div className="mt-3 pl-7">
                <button
                  className="inline-flex items-center gap-1 text-xs text-foreground-400 hover:text-primary-500 transition-colors cursor-pointer whitespace-nowrap"
                  onClick={() => setShowPrivacy((prev) => !prev)}
                  type="button"
                >
                  개인정보 처리방침 {showPrivacy ? '접기' : '자세히 보기'}
                  <i
                    className={`ri-arrow-down-s-line text-sm transition-transform ${showPrivacy ? 'rotate-180' : ''}`}
                  />
                </button>

                {showPrivacy && (
                  <div className="mt-3 p-4 bg-background-50/60 border border-background-200/30 rounded-md text-[11px] leading-relaxed text-foreground-400 space-y-2">
                    <p className="font-semibold text-foreground-300">개인정보 수집·이용 동의서</p>
                    <p>
                      <strong className="text-foreground-300">1. 수집하는 개인정보 항목</strong><br />
                      성명, 연락처(휴대전화), 방문 희망일자, 문의내용
                    </p>
                    <p>
                      <strong className="text-foreground-300">2. 수집·이용 목적</strong><br />
                      분양 및 임대 상담 안내, 방문 예약, 고객 문의 응대, 마케팅 정보 제공
                    </p>
                    <p>
                      <strong className="text-foreground-300">3. 보유·이용 기간</strong><br />
                      상담 종료 후 1년 (단, 관련 법령에 따라 보존이 필요한 경우 해당 기간까지 보관)
                    </p>
                    <p>
                      <strong className="text-foreground-300">4. 동의 거부 권리</strong><br />
                      귀하는 개인정보 수집·이용에 대한 동의를 거부할 권리가 있으며, 동의를 거부할 경우
                      상담 및 관심고객 등록 서비스 이용이 제한될 수 있습니다.
                    </p>
                    <p>
                      <strong className="text-foreground-300">5. 수집 주체</strong><br />
                      파주 헤이리 오베르원
                    </p>
                  </div>
                )}
              </div>
            </div>

            <div className="mt-7">
              <button
                className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary-500 hover:bg-primary-600 disabled:opacity-60 disabled:cursor-not-allowed text-background-50 font-semibold rounded-full transition-colors duration-300 cursor-pointer whitespace-nowrap"
                disabled={status === 'submitting'}
                type="submit"
              >
                {status === 'submitting' ? '등록 중...' : '등록하기'}
              </button>
            </div>

            {status === 'success' && (
              <p className="mt-4 text-sm text-primary-500 text-center">
                등록이 완료되었습니다. 빠르게 연락드리겠습니다.
              </p>
            )}
            {status === 'error' && (
              <p className="mt-4 text-sm text-red-400 text-center">{errorMsg}</p>
            )}

            <p className="mt-4 text-[11px] text-foreground-400 text-center">
              ※ 등록해주신 정보는 상담 목적으로만 사용됩니다.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}