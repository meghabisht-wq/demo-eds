export default function decorate(block) {
  block.innerHTML = `
    <div class="hero-banner-container">
      <div class="hero-banner-badge">
        Optimized, Autonomous, Trusted, and Proven to Deliver Results
      </div>
      <h1 class="hero-banner-title">
        Agentic AI for Enterprise <span class="hero-highlight">Customer Support</span>
      </h1>
      <p class="hero-banner-subtitle">
        Deploy autonomous AI agents that resolve issues, optimize support operations,
        and deliver measurable CX outcomes — trusted by global enterprises and
        recognized by leading analysts and G2.
      </p>
      <div class="hero-banner-actions">
        <a href="/request-demo/" class="hero-btn-primary">Book a Demo ↗</a>
        <a href="#" class="hero-btn-secondary">Learn More →</a>
      </div>
      <div class="hero-banner-stats">
        <div class="hero-stat">
          <span class="hero-stat-number">24</span>
          <span class="hero-stat-label">Consecutive Quarters as G2 Leader</span>
        </div>
        <div class="hero-stat">
          <span class="hero-stat-number">#1</span>
          <span class="hero-stat-label">Enterprise Search Choice 2026</span>
        </div>
        <div class="hero-stat">
          <span class="hero-stat-number">Gold</span>
          <span class="hero-stat-label">Globee® Award Winner 2026</span>
        </div>
      </div>
    </div>
  `;
}