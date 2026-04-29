export default function decorate(block) {
  block.innerHTML = `
    <nav class="header-nav">
      <div class="header-logo">
        <a href="/">
          <span class="logo-search">Search</span><span class="logo-unify">Unify</span>
        </a>
      </div>
      <ul class="header-links">
        <li class="has-dropdown">
          <a href="#">Platform <span class="chevron">&#8964;</span></a>
        </li>
        <li class="has-dropdown">
          <a href="#">Products <span class="chevron">&#8964;</span></a>
        </li>
        <li class="has-dropdown">
          <a href="#">Industries <span class="chevron">&#8964;</span></a>
        </li>
        <li class="has-dropdown">
          <a href="#">Resources <span class="chevron">&#8964;</span></a>
        </li>
        <li class="has-dropdown">
          <a href="#">Company <span class="chevron">&#8964;</span></a>
        </li>
      </ul>
      <div class="header-actions">
        <a href="#" class="btn-demo">Book a Demo &#8599;</a>
        <button class="btn-search" aria-label="Search">&#128269;</button>
      </div>
      <button class="hamburger" aria-label="Menu">&#9776;</button>
    </nav>
  `;

  // Mobile menu toggle
  const hamburger = block.querySelector('.hamburger');
  const links = block.querySelector('.header-links');
  hamburger.addEventListener('click', () => {
    links.classList.toggle('open');
  });
}