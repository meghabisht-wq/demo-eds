export default function decorate(block) {
  block.innerHTML = `
    <div class="bf-wrapper">
      <h2 class="bf-title">AI Agents Engineered for Your Business Functions</h2>

      <div class="bf-cards">

        <div class="bf-card">
          <div class="bf-card-icon">
            <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M24 4L6 14v10c0 11 7.8 21.3 18 24 10.2-2.7 18-13 18-24V14L24 4z" stroke="#fff" stroke-width="2" stroke-linejoin="round"/>
              <path d="M18 24l4 4 8-8" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
          <h3>IT</h3>
          <p>AI-powered agents for proactive IT support and infrastructure monitoring-resolving incidents faster, enhancing security, and ensuring uptime.</p>
        </div>

        <div class="bf-card">
          <div class="bf-card-icon">
            <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="6" y="10" width="16" height="12" rx="2" stroke="#fff" stroke-width="2"/>
              <rect x="26" y="10" width="16" height="12" rx="2" stroke="#fff" stroke-width="2"/>
              <rect x="6" y="26" width="16" height="12" rx="2" stroke="#fff" stroke-width="2"/>
              <rect x="26" y="26" width="16" height="12" rx="2" stroke="#fff" stroke-width="2"/>
            </svg>
          </div>
          <h3>Marketing</h3>
          <p>Drive higher ROI with AI agents that power hyper-personalized campaigns and real-time performance optimization.</p>
        </div>

        <div class="bf-card bf-card--featured">
          <div class="bf-card-icon bf-card-icon--featured">
            <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="24" cy="18" r="8" stroke="#fff" stroke-width="2"/>
              <path d="M8 40c0-8.837 7.163-16 16-16s16 7.163 16 16" stroke="#fff" stroke-width="2" stroke-linecap="round"/>
              <path d="M30 10l3-3M34 16h3" stroke="#fff" stroke-width="2" stroke-linecap="round"/>
            </svg>
          </div>
          <h3>Customer Support</h3>
          <p>Deliver exceptional support with scalable Agentic AI-faster resolutions, higher CSAT, and lower operational costs from first contact to close.</p>
          <div class="bf-card-arrow">&#8964;</div>
        </div>

        <div class="bf-card">
          <div class="bf-card-icon">
            <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="24" cy="24" r="14" stroke="#fff" stroke-width="2"/>
              <path d="M24 16v8l5 5" stroke="#fff" stroke-width="2" stroke-linecap="round"/>
              <path d="M17 10l-3-3M10 17l-3-3" stroke="#fff" stroke-width="2" stroke-linecap="round"/>
            </svg>
          </div>
          <h3>Sales</h3>
          <p>Accelerate your sales funnel with AI-driven lead qualification, deal acceleration, and actionable insights for smarter selling.</p>
        </div>

        <div class="bf-card">
          <div class="bf-card-icon">
            <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="24" cy="16" r="8" stroke="#fff" stroke-width="2"/>
              <path d="M8 42c0-8.837 7.163-16 16-16s16 7.163 16 16" stroke="#fff" stroke-width="2" stroke-linecap="round"/>
            </svg>
          </div>
          <h3>Human Resource</h3>
          <p>Transform HR with intelligent agents that optimize talent acquisition, boost retention, and enable data-driven workforce management.</p>
        </div>

      </div>

      <div class="bf-mascot">
        <div class="bf-mascot-robot">🤖</div>
      </div>

    </div>
  `;

  // Animate cards on scroll
  const cards = block.querySelectorAll('.bf-card');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add('bf-card--visible');
        }, i * 120);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  cards.forEach((card) => observer.observe(card));
}