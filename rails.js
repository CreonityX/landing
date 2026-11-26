document.querySelectorAll('.rail-controls').forEach((controls) => {
  const [previous, next] = controls.querySelectorAll('button');
  const rail = document.getElementById(previous.getAttribute('aria-controls'));

  function updateControls() {
    const limit = rail.scrollWidth - rail.clientWidth;
    controls.hidden = limit <= 1;
    previous.disabled = rail.scrollLeft <= 1;
    next.disabled = rail.scrollLeft >= limit - 1;
  }

  function moveRail(direction) {
    const [first, second] = rail.children;
    if (!second) return;

    const step = second.getBoundingClientRect().left - first.getBoundingClientRect().left;
    const index = Math.round(rail.scrollLeft / step);
    rail.scrollTo({ left: (index + direction) * step });
  }

  controls.addEventListener('click', (event) => {
    const button = event.target.closest('button');
    if (!button) return;

    moveRail(Number(button.dataset.direction));
  });

  rail.addEventListener('keydown', (event) => {
    if (event.key !== 'ArrowLeft' && event.key !== 'ArrowRight') return;

    event.preventDefault();
    moveRail(event.key === 'ArrowLeft' ? -1 : 1);
  });

  rail.addEventListener('scroll', updateControls, { passive: true });
  new ResizeObserver(updateControls).observe(rail);
  updateControls();
});
