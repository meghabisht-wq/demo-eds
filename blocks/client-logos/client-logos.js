export default function decorate(block) {
  block.innerHTML = `
    <div class="client-logos-container">
      <p class="client-logos-label">Our Esteemed Clients</p>
      <div class="client-logos-track-wrapper">
        <div class="client-logos-track">

          <div class="client-logo-item">Accela</div>
          <div class="client-logo-item">Fortinet</div>
          <div class="client-logo-item">Automation Anywhere</div>
          <div class="client-logo-item">Cornerstone</div>
          <div class="client-logo-item">EBSCO</div>
          <div class="client-logo-item">Zuora</div>
          <div class="client-logo-item">Coupa</div>
          <div class="client-logo-item">Pantheon</div>
          <div class="client-logo-item">Drift</div>
          <div class="client-logo-item">Gainsight</div>

          <!-- Duplicate for infinite scroll -->
          <div class="client-logo-item">Accela</div>
          <div class="client-logo-item">Fortinet</div>
          <div class="client-logo-item">Automation Anywhere</div>
          <div class="client-logo-item">Cornerstone</div>
          <div class="client-logo-item">EBSCO</div>
          <div class="client-logo-item">Zuora</div>
          <div class="client-logo-item">Coupa</div>
          <div class="client-logo-item">Pantheon</div>
          <div class="client-logo-item">Drift</div>
          <div class="client-logo-item">Gainsight</div>

        </div>
      </div>
    </div>
  `;
}
