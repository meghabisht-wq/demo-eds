export default function decorate(block) {
  block.innerHTML = `
    <div class="header-topbar">
      <div class="header-topbar-inner">
        <span class="topbar-text">
          🏆 SearchUnify Knowbler Wins Gold Globee® Award for AI-Powered Knowledge Management
          <a href="/press-release/searchunify-knowbler-wins-gold-globee-award/" class="topbar-link">Know More →</a>
        </span>
      </div>
    </div>

    <nav class="header-nav">
      <div class="header-nav-inner">

        <div class="header-logo">
          <a href="/">
            <span class="logo-search">Search</span><span class="logo-unify">Unify</span>
          </a>
        </div>

        <ul class="header-links" id="mainNav">
          <li class="has-dropdown">
            <a href="#">Platform <span class="chevron">&#8964;</span></a>
            <div class="dropdown">
              <a href="/platform/agentic-ai-suite/">Agentic AI Suite</a>
              <a href="/platform/search-analytics/">Analytics</a>
              <a href="/platform/connectors/">Integrations</a>
              <a href="/su/platform/model-context-protocols/">MCP</a>
              <a href="/su/platform/security/">Security & Guardrails</a>
            </div>
          </li>
          <li class="has-dropdown">
            <a href="#">Products <span class="chevron">&#8964;</span></a>
            <div class="dropdown">
              <a href="/products/agent-helper/">Agent Helper</a>
              <a href="/products/ai-agents/ai-support-agent/">AI Support Agent</a>
              <a href="/products/ai-agents/ai-agent-partner/">AI Agent Partner</a>
              <a href="/products/ai-agents/ai-knowledge-agent/">AI Knowledge Agent</a>
              <a href="/products/cognitive-search/">Cognitive Search</a>
              <a href="/products/knowbler/">Knowbler</a>
              <a href="/su/searchunify-gpt/">SearchUnifyGPT™</a>
              <a href="/products/searchunify-virtual-assistant/">Virtual Assistant</a>
            </div>
          </li>
          <li class="has-dropdown">
            <a href="/industries/">Industries <span class="chevron">&#8964;</span></a>
            <div class="dropdown">
              <a href="/industries/bfsi/">BFSI</a>
              <a href="/industries/bfsi/insurance/">Insurance</a>
              <a href="/industries/bfsi/banking/">Banking</a>
            </div>
          </li>
          <li class="has-dropdown">
            <a href="/resource-center/">Resources <span class="chevron">&#8964;</span></a>
            <div class="dropdown">
              <a href="/resource-center/blog/">Blogs</a>
              <a href="/resource-center/events/">Events</a>
              <a href="/resource-center/videos/">Videos</a>
              <a href="/expert-hub/">Expert Hub</a>
              <a href="/resource-center/the-customer-service-show/">Customer Service Show</a>
            </div>
          </li>
          <li class="has-dropdown">
            <a href="#">Company <span class="chevron">&#8964;</span></a>
            <div class="dropdown">
              <a href="/company/about-us/">About Us</a>
              <a href="/company/leadership/">Leadership</a>
              <a href="/company/recognitions/">Awards & Recognitions</a>
              <a href="/company/press-releases/">Newsroom</a>
              <a href="/company/partner-network/">Partners</a>
              <a href="/company/contact-us/">Contact Us</a>
            </div>
          </li>
        </ul>

        <div class="header-actions">
          <a href="/request-demo/" class="btn-demo">Book a Demo ↗</a>
          <button class="btn-search" aria-label="Search">&#128269;</button>
        </div>

        <button class="hamburger" id="hamburger" aria-label="Menu">&#9776;</button>
      </div>
    </nav>
  `;

  // Mobile menu toggle
  const hamburger = block.querySelector('#hamburger');
  const links = block.querySelector('#mainNav');
  hamburger.addEventListener('click', () => {
    links.classList.toggle('open');
  });

  // Dropdown hover for desktop
  const dropdowns = block.querySelectorAll('.has-dropdown');
  dropdowns.forEach((item) => {
    item.addEventListener('mouseenter', () => {
      item.querySelector('.dropdown').style.display = 'flex';
    });
    item.addEventListener('mouseleave', () => {
      item.querySelector('.dropdown').style.display = 'none';
    });
  });
}
