export default async function decorate(block) {
  // When loaded via loadHeader() in scripts.js, the block is built empty.
  // Fetch the header document content ourselves in that case.
  let rows = [...block.children].filter((row) => row.children[0]?.textContent?.trim());

  if (rows.length === 0) {
    const resp = await fetch('/header.plain.html');
    if (resp.ok) {
      const temp = document.createElement('div');
      temp.innerHTML = await resp.text();
      const headerBlock = temp.querySelector('.header') || temp;
      rows = [...headerBlock.children].filter((row) => row.children[0]?.textContent?.trim());
    }
  }

  // Parse data from block table
  let topbarText = '';
  let topbarLinkText = '';
  let topbarLinkUrl = '';
  let logoText = 'SearchUnify';
  let logoUrl = '/';
  let demoBtnText = 'Book a Demo ↗';
  let demoBtnUrl = '/request-demo/';
  const navItems = [];

  rows.forEach((row) => {
    const cols = [...row.children];
    const type = cols[0]?.textContent?.trim().toLowerCase();

    if (type === 'topbar') {
      topbarText = cols[1]?.textContent?.trim();
      const link = cols[1]?.querySelector('a');
      if (link) {
        topbarLinkText = link.textContent.trim();
        topbarLinkUrl = link.href || '#';
        // Remove link text from topbar text
        topbarText = cols[1]?.innerHTML || '';
      }
    } else if (type === 'logo') {
      logoText = cols[1]?.textContent?.trim() || logoText;
      const link = cols[1]?.querySelector('a');
      logoUrl = link ? link.href : (cols[2]?.textContent?.trim() || '/');
    } else if (type === 'demo') {
      const link = cols[1]?.querySelector('a');
      demoBtnText = link ? link.textContent.trim() : (cols[1]?.textContent?.trim() || demoBtnText);
      demoBtnUrl = link ? link.href : (cols[2]?.textContent?.trim() || demoBtnUrl);
    } else if (type === 'nav') {
      // col1=label, col2=url, col3=dropdown links (optional)
      const label = cols[1]?.textContent?.trim();
      const navLink = cols[1]?.querySelector('a');
      const url = navLink ? navLink.href : (cols[2]?.textContent?.trim() || '#');
      const dropdownLinks = [...(cols[2]?.querySelectorAll('a') || [])];
      const dropdown = dropdownLinks.map((a) => ({ text: a.textContent.trim(), href: a.href || '#' }));
      if (label) navItems.push({ label, url, dropdown });
    }
  });

  // Build logo HTML — split on capital U for Search|Unify
  const logoSplit = logoText.match(/^(Search)(Unify)$/i);
  const logoHTML = logoSplit
    ? `<span class="logo-search">${logoSplit[1]}</span><span class="logo-unify">${logoSplit[2]}</span>`
    : `<span class="logo-search">${logoText}</span>`;

  // Build topbar HTML
  const topbarHTML = topbarText
    ? `<div class="header-topbar">
        <div class="header-topbar-inner">
          <span class="topbar-text">${topbarText}</span>
        </div>
      </div>`
    : '';

  // Build nav items HTML
  const navHTML = navItems.map(({ label, url, dropdown }) => {
    const hasDropdown = dropdown.length > 0;
    return `
      <li class="${hasDropdown ? 'has-dropdown' : ''}">
        <a href="${url}">${label}${hasDropdown ? ' <span class="chevron">&#8964;</span>' : ''}</a>
        ${hasDropdown ? `
          <div class="dropdown">
            ${dropdown.map((d) => `<a href="${d.href}">${d.text}</a>`).join('')}
          </div>` : ''}
      </li>
    `;
  }).join('');

  block.innerHTML = `
    ${topbarHTML}
    <nav class="header-nav">
      <div class="header-nav-inner">
        <div class="header-logo">
          <a href="${logoUrl}">${logoHTML}</a>
        </div>
        <ul class="header-links" id="mainNav">
          ${navHTML}
        </ul>
        <div class="header-actions">
          <a href="${demoBtnUrl}" class="btn-demo">${demoBtnText}</a>
          <button class="btn-search" aria-label="Search">&#128269;</button>
        </div>
        <button class="hamburger" id="hamburger" aria-label="Menu">&#9776;</button>
      </div>
    </nav>
  `;

  // Mobile menu toggle
  const hamburger = block.querySelector('#hamburger');
  const links = block.querySelector('#mainNav');
  if (hamburger && links) {
    hamburger.addEventListener('click', () => {
      links.classList.toggle('open');
    });
  }

  // Dropdown hover for desktop
  const dropdowns = block.querySelectorAll('.has-dropdown');
  dropdowns.forEach((item) => {
    item.addEventListener('mouseenter', () => {
      const dd = item.querySelector('.dropdown');
      if (dd) dd.style.display = 'flex';
    });
    item.addEventListener('mouseleave', () => {
      const dd = item.querySelector('.dropdown');
      if (dd) dd.style.display = 'none';
    });
  });
}
