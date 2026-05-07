export default async function decorate(block) {
  // When loaded via loadFooter() in scripts.js, the block is built empty.
  // Fetch the footer document content ourselves in that case.
  let rows = [...block.children].filter((row) => row.children[0]?.textContent?.trim());

  if (rows.length === 0) {
    const resp = await fetch('/footer.plain.html');
    if (resp.ok) {
      const temp = document.createElement('div');
      temp.innerHTML = await resp.text();
      const footerBlock = temp.querySelector('.footer') || temp;
      rows = [...footerBlock.children].filter((row) => row.children[0]?.textContent?.trim());
    }
  }

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
      const label = cols[1]?.textContent?.trim();
      const url = cols[2]?.textContent?.trim() || '#';
      const icon = cols[3]?.textContent?.trim() || label;
      socialLinks.push({ label, url, icon });
    } else if (type === 'group') {
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
