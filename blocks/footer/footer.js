export default function decorate(block) {
  block.innerHTML = `
    <div class="footer-inner">
      <div class="footer-brand">
        <div class="footer-logo">
          <span class="logo-search">Search</span><span class="logo-unify">Unify</span>
        </div>
        <p class="footer-tagline">Embed Agentic AI across your Enterprise</p>
        <div class="footer-social">
          <a href="#" aria-label="LinkedIn">in</a>
          <a href="#" aria-label="Twitter">𝕏</a>
          <a href="#" aria-label="YouTube">▶</a>
        </div>
      </div>

      <div class="footer-links-group">
        <h4>Platform</h4>
        <ul>
          <li><a href="#">SearchUnifyFRAG™</a></li>
          <li><a href="#">BYOLLM</a></li>
          <li><a href="#">Governance</a></li>
          <li><a href="#">Analytics</a></li>
        </ul>
      </div>

      <div class="footer-links-group">
        <h4>Products</h4>
        <ul>
          <li><a href="#">AI Agents</a></li>
          <li><a href="#">Enterprise Search</a></li>
          <li><a href="#">Knowledge Hub</a></li>
          <li><a href="#">Integrations</a></li>
        </ul>
      </div>

      <div class="footer-links-group">
        <h4>Industries</h4>
        <ul>
          <li><a href="#">Customer Support</a></li>
          <li><a href="#">IT Service Desk</a></li>
          <li><a href="#">HR & Employees</a></li>
          <li><a href="#">Sales Enablement</a></li>
        </ul>
      </div>

      <div class="footer-links-group">
        <h4>Company</h4>
        <ul>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Careers</a></li>
          <li><a href="#">Blog</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </div>
    </div>

    <div class="footer-bottom">
      <p>&copy; ${new Date().getFullYear()} SearchUnify. All rights reserved.</p>
      <div class="footer-legal">
        <a href="#">Privacy Policy</a>
        <a href="#">Terms of Service</a>
        <a href="#">Cookie Policy</a>
      </div>
    </div>
  `;
}
