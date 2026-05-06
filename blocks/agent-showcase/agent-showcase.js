export default function decorate(block) {
  const rows = [...block.children];
  if (rows.length < 2) return;

  // First row = left panel: col0=title, col1=description, col2=image
  const leftRow = rows[0];
  const leftCols = [...leftRow.children];
  const leftTitle = leftCols[0]?.innerHTML || '';
  const leftDesc = leftCols[1]?.innerHTML || '';
  const leftImage = leftCols[2]?.innerHTML || '';

  // Remaining rows = cards: col0=icon(img or emoji), col1=title, col2=description
  const cards = rows.slice(1).map((row) => {
    const cols = [...row.children];
    const icon = cols[0]?.innerHTML || '';
    const title = cols[1]?.textContent?.trim() || '';
    const description = cols[2]?.innerHTML || '';
    return { icon, title, description };
  });

  block.innerHTML = `
    <div class="as-wrapper">
      <div class="as-left">
        <div class="as-left-inner">
          <div class="as-left-title">${leftTitle}</div>
          <div class="as-left-desc">${leftDesc}</div>
          ${leftImage ? `<div class="as-left-image">${leftImage}</div>` : ''}
        </div>
      </div>
      <div class="as-right">
        <div class="as-cards">
          ${cards.map(({ icon, title, description }, i) => `
            <div class="as-card" style="--i:${i}">
              <div class="as-card-connector">
                <div class="as-card-dot"></div>
                ${i < cards.length - 1 ? '<div class="as-card-line"></div>' : ''}
              </div>
              <div class="as-card-body">
                ${icon ? `<div class="as-card-icon">${icon}</div>` : ''}
                <div class="as-card-content">
                  <h3 class="as-card-title">${title}</h3>
                  <div class="as-card-desc">${description}</div>
                </div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </div>
  `;

  // Animate cards on scroll
  const cardEls = block.querySelectorAll('.as-card');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('as-card-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  cardEls.forEach((card) => observer.observe(card));
}