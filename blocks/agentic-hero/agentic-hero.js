export default function decorate(block) {
  block.innerHTML = `
    <!-- ===== HERO SECTION ===== -->
    <section class="agentic-hero-section">
      <div class="agentic-hero-container">
        <h1 class="agentic-hero-title">Embed Agentic AI across your Enterprise</h1>

        <div class="agentic-steps">

          <div class="agentic-step">
            <div class="step-icon-wrap">
              <div class="step-icon">
                <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="8" y="10" width="14" height="10" rx="2" stroke="#e87722" stroke-width="2"/>
                  <rect x="26" y="10" width="14" height="10" rx="2" stroke="#e87722" stroke-width="2"/>
                  <rect x="8" y="28" width="14" height="10" rx="2" stroke="#e87722" stroke-width="2"/>
                  <rect x="26" y="28" width="14" height="10" rx="2" stroke="#e87722" stroke-width="2"/>
                </svg>
              </div>
              <div class="step-connector"></div>
            </div>
            <h3>Leverage Unified Data</h3>
            <p>With SearchUnifyFRAG™ make your data the foundation of success.</p>
          </div>

          <div class="agentic-step">
            <div class="step-icon-wrap">
              <div class="step-icon">
                <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="24" cy="24" r="14" stroke="#e87722" stroke-width="2"/>
                  <path d="M18 24l4 4 8-8" stroke="#e87722" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
              <div class="step-connector"></div>
            </div>
            <h3>Select Optimal Models</h3>
            <p>Choose the best mix of LLMs (BYOLLM) to get results tailored to your goals.</p>
          </div>

          <div class="agentic-step">
            <div class="step-icon-wrap">
              <div class="step-icon">
                <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24 8l16 8v8c0 8-6.4 15.4-16 18C14.4 39.4 8 32 8 24v-8l16-8z" stroke="#e87722" stroke-width="2"/>
                  <path d="M18 24l4 4 8-8" stroke="#e87722" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
              <div class="step-connector"></div>
            </div>
            <h3>Forge Operational Resilience</h3>
            <p>Secure every stage of the AI lifecycle with robust Multi-layered framework.</p>
          </div>

          <div class="agentic-step">
            <div class="step-icon-wrap">
              <div class="step-icon">
                <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="24" cy="20" r="8" stroke="#e87722" stroke-width="2"/>
                  <path d="M12 40c0-6.627 5.373-12 12-12s12 5.373 12 12" stroke="#e87722" stroke-width="2" stroke-linecap="round"/>
                  <path d="M30 14l4-4M34 20h4" stroke="#e87722" stroke-width="2" stroke-linecap="round"/>
                </svg>
              </div>
              <div class="step-connector"></div>
            </div>
            <h3>Ensure Ethical Autonomy</h3>
            <p>Foster user confidence with built-in governance and guardrails that steer AI ethically.</p>
          </div>

          <div class="agentic-step">
            <div class="step-icon-wrap">
              <div class="step-icon">
                <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="10" y="14" width="28" height="20" rx="2" stroke="#e87722" stroke-width="2"/>
                  <path d="M18 34v4M30 34v4M14 38h20" stroke="#e87722" stroke-width="2" stroke-linecap="round"/>
                  <path d="M20 24h8M24 20v8" stroke="#e87722" stroke-width="2" stroke-linecap="round"/>
                </svg>
              </div>
            </div>
            <h3>Deploy with Confidence</h3>
            <p>Accelerate outcomes with prebuilt AI agents; tailored for enterprise needs.</p>
          </div>

        </div>
      </div>
    </section>

    <!-- ===== AI AGENTS SECTION ===== -->
    <section class="agentic-functions-section">
      <div class="agentic-functions-container">
        <h2 class="agentic-functions-title">AI Agents Engineered for Your Business Functions</h2>

        <div class="agentic-functions-grid">

          <div class="function-card">
            <div class="function-icon">🏪</div>
            <h3>Commerce</h3>
            <p>Power intelligent product discovery and personalized shopping experiences.</p>
          </div>

          <div class="function-card featured">
            <div class="function-icon">🎧</div>
            <h3>Customer Support</h3>
            <p>Deliver exceptional support with scalable Agentic AI tailored for your enterprise.</p>
            <a href="#" class="function-cta">Learn More →</a>
          </div>

          <div class="function-card">
            <div class="function-icon">💰</div>
            <h3>Sales Enablement</h3>
            <p>Equip your sales teams with AI-powered insights and guided selling workflows.</p>
          </div>

        </div>
      </div>
    </section>
  `;

  // Animate steps on scroll
  const steps = block.querySelectorAll('.agentic-step');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, i * 100);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  steps.forEach(step => observer.observe(step));
}