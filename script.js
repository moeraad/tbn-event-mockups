// Event Production wireframe set — view switching only. No app logic:
// every field, pill and amount on these sheets is fixed sample data.

(function () {
  const binderItems = document.querySelectorAll('.binder-item');
  const sheets = document.querySelectorAll('.sheet');

  binderItems.forEach((btn) => {
    btn.addEventListener('click', () => {
      const target = btn.dataset.sheet;
      binderItems.forEach((b) => b.classList.toggle('is-active', b === btn));
      sheets.forEach((s) => s.classList.toggle('is-active', s.id === target));
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  });

  // Sheet 03 inner tabs (Crew & Availability / Repertoire / Payments),
  // with the shared legend filtered to whichever tab is open.
  const tabs = document.querySelectorAll('.tab[data-tab]');
  const panels = document.querySelectorAll('.tab-panel');
  const legendRows = document.querySelectorAll('#legendS3 li');

  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      const target = tab.dataset.tab;
      tabs.forEach((t) => t.classList.toggle('is-active', t === tab));
      panels.forEach((p) => p.classList.toggle('is-active', p.id === target));
      legendRows.forEach((row) => {
        const scope = (row.dataset.tabLegend || '').split(' ');
        row.hidden = !scope.includes(target);
      });
    });
  });

  // Cosmetic-only filter chips — visual state, no actual filtering.
  document.querySelectorAll('.toolbar-filters').forEach((group) => {
    group.querySelectorAll('.chip').forEach((chip) => {
      chip.addEventListener('click', () => {
        group.querySelectorAll('.chip').forEach((c) => c.classList.remove('chip--active'));
        chip.classList.add('chip--active');
      });
    });
  });

  // Phone response buttons — toggle picked state, nothing is submitted.
  document.querySelectorAll('.phone-choice').forEach((group) => {
    group.querySelectorAll('.pbtn').forEach((btn) => {
      btn.addEventListener('click', () => {
        group.querySelectorAll('.pbtn').forEach((b) => b.classList.remove('pbtn--picked'));
        btn.classList.add('pbtn--picked');
      });
    });
  });
})();
