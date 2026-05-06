export default function decorate(block) {
  const rows = [...block.children];

  // Parse data from block table
  let tagline = '';
  const socialLinks = [];
  const linkGroups = [];
  let copyrightText = '';
  const legalLinks = [];

  rows.forEach((row) => {
    const cols = [...row.children];
    const type = cols[0]?.textContent?.trim().toLowerCase();

    if (type === 'tagline') {
      tagline = cols[1]?.textContent?.trim();
    } else if (type === 'social') {
      // col1=label, col2=url
      const label = cols[1]?.textContent?.trim();
      const url = cols[2]?.textContent?.trim() || '#';
      const icon = cols[3]?.textContent?.trim() || label;
      socialLinks.push({ label, url, icon });
    } else if (type === 'group') {
      // col1=group heading, col2=links (as list items in cell)
      const heading = cols[1]?.textContent?.trim();
      const linkEls = [...(cols[2]?.querySelectorAll('a') || [])];
      const links = linkEls.map((a) => ({ text: a.textContent.trim(), href: a.href || '#' }));
      if (heading) linkGroups.push({ heading, links });
    } else if (type === 'copyright') {
      copyrightText = cols[1]?.textContent?.trim();
    } else if (type === 'legal') {
      const linkEls = [...(cols[1]?.querySelectorAll('a') || [])];
      linkEls.forEach((a) => legalLinks.push({ text: a.textContent.trim(), href: a.href || '#' }));
    }
  });

  // Build social HTML
  const socialHTML = socialLinks.length
    ? `<div class="footer-social">
        ${socialLinks.map(({ label, url, icon }) => `
          <a href="${url}" aria-label="${label}">${icon}</a>
        `).join('')}
      </div>`
    : '';

  // Build link groups HTML
  const groupsHTML = linkGroups.map(({ heading, links }) => `
    <div class="footer-links-group">
      <h4>${heading}</h4>
      <ul>
        ${links.map(({ text, href }) => `<li><a href="${href}">${text}</a></li>`).join('')}
      </ul>
    </div>
  `).join('');

  // Build legal links HTML
  const legalHTML = legalLinks.map(({ text, href }) => `<a href="${href}">${text}</a>`).join('');

  // Build copyright
  const year = new Date().getFullYear();
  const copyright = copyrightText
    ? copyrightText.replace('{year}', year)
    : `&copy; ${year} SearchUnify. All rights reserved.`;

  block.innerHTML = `
    <div class="footer-inner">
      <div class="footer-brand">
        <div class="footer-logo">
          <span class="logo-search">Search</span><span class="logo-unify">Unify</span>
        </div>
        ${tagline ? `<p class="footer-tagline">${tagline}</p>` : ''}
        ${socialHTML}
      </div>
      ${groupsHTML}
    </div>
    <div class="footer-bottom">
      <p>${copyright}</p>
      ${legalHTML ? `<div class="footer-legal">${legalHTML}</div>` : ''}
    </div>
  `;
}
