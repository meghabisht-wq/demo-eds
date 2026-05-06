export default function decorate(block) {
  // Read rows from EDS block table
  const rows = [...block.children];

  const cards = rows.map((row) => {
    const cols = [...row.children];
    const title = cols[0]?.textContent?.trim() || '';
    const description = cols[1]?.textContent?.trim() || '';
    const isFeatured = cols[2]?.textContent?.trim().toLowerCase() === 'featured';

    return { title, description, isFeatured };
  });

  // Icon map based on title
  const iconMap = {
    IT: `<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M24 4L6 14v10c0 11 7.8 21.3 18 24 10.2-2.7 18-13 18-24V14L24 4z" stroke="#fff" stroke-width="2" stroke-linejoin="round"/>
              <path d="M18 24l4 4 8-8" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>`,
    Marketing: `<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="6" y="10" width="16" height="12" rx="2" stroke="#fff" stroke-width="2"/>
              <rect x="26" y="10" width="16" height="12" rx="2" stroke="#fff" stroke-width="2"/>
              <rect x="6" y="26" width="16" height="12" rx="2" stroke="#fff" stroke-width="2"/>
              <rect x="26" y="26" width="16" height="12" rx="2" stroke="#fff" stroke-width="2"/>
            </svg>`,
    'Customer Support': `<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="24" cy="18" r="8" stroke="#fff" stroke-width="2"/>
              <path d="M8 40c0-8.837 7.163-16 16-16s16 7.163 16 16" stroke="#fff" stroke-width="2" stroke-linecap="round"/>
              <path d="M30 10l3-3M34 16h3" stroke="#fff" stroke-width="2" stroke-linecap="round"/>
            </svg>`,
    Sales: `<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="24" cy="24" r="14" stroke="#fff" stroke-width="2"/>
              <path d="M24 16v8l5 5" stroke="#fff" stroke-width="2" stroke-linecap="round"/>
              <path d="M17 10l-3-3M10 17l-3-3" stroke="#fff" stroke-width="2" stroke-linecap="round"/>
            </svg>`,
    'Human Resource': `<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="24" cy="16" r="8" stroke="#fff" stroke-width="2"/>
              <path d="M8 42c0-8.837 7.163-16 16-16s16 7.163 16 16" stroke="#fff" stroke-width="2" stroke-linecap="round"/>
            </svg>`,
  };

  // Build HTML
  block.innerHTML = `
    <div class="bf-wrapper">
      <h2 class="bf-title">AI Agents Engineered for Your Business Functions</h2>
      <div class="bf-cards">
        ${cards.map(({ title, description, isFeatured }) => `
          <div class="bf-card ${isFeatured ? 'bf-card-featured' : ''}">
            <div class="bf-card-icon ${isFeatured ? 'bf-card-icon-featured' : ''}">
              ${iconMap[title] || ''}
            </div>
            <h3>${title}</h3>
            <p>${description}</p>
            ${isFeatured ? '<div class="bf-card-arrow">&#8964;</div>' : ''}
          </div>
        `).join('')}
      </div>
      <div class="bf-mascot">
        <div class="bf-mascot-robot">🤖</div>
      </div>
    </div>
  `;

  // Animate cards on scroll
  const cardEls = block.querySelectorAll('.bf-card');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add('bf-card-visible');
        }, i * 120);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  cardEls.forEach((card) => observer.observe(card));
}