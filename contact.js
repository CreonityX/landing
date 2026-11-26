const inquiryForm = document.querySelector('.contact-form');
const inquiryButton = inquiryForm.querySelector('button[type="submit"]');
const inquiryStatus = inquiryForm.querySelector('.contact-status');

inquiryForm.addEventListener('submit', async (event) => {
  event.preventDefault();
  if (inquiryButton.disabled) return;

  const body = new URLSearchParams(new FormData(inquiryForm));
  inquiryButton.disabled = true;
  inquiryStatus.textContent = 'Sending your inquiry…';

  try {
    const response = await fetch(inquiryForm.action, {
      method: 'POST',
      headers: { Accept: 'application/json' },
      body,
      signal: AbortSignal.timeout(20_000),
    });
    const result = await response.json();

    if (!response.ok || !result.ok) {
      inquiryStatus.textContent = result.message || 'We couldn’t send your inquiry. Try again or email us directly.';
      return;
    }

    inquiryForm.reset();
    inquiryStatus.textContent = 'Thanks. Your inquiry was sent. We’ll reply by email.';
  } catch {
    inquiryStatus.textContent = 'We couldn’t confirm your inquiry was sent. Try again or email us directly.';
  } finally {
    inquiryButton.disabled = false;
  }
});
