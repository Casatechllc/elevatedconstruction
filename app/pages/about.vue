<template>
  <div class="about-page">
    <section class="bg-primary text-white py-5">
      <div class="container py-lg-5 text-center">
        <h6 class="text-secondary fw-bold text-uppercase ls-2 mb-3">Our Mission</h6>
        <h1 class="display-3 fw-bold mb-4">Restoring Peace of Mind</h1>
        <p class="lead mx-auto opacity-90" style="max-width: 800px;">
          Elevated Construction was founded on a simple principle: to lead with integrity and technical excellence during our neighbors' most difficult moments.
        </p>
      </div>
    </section>

    <section class="bg-light py-4 border-bottom shadow-sm">
      <div class="container">
        <div class="row g-4 align-items-center justify-content-center text-center">
          <div class="col-6 col-md-3">
            <div class="d-flex align-items-center justify-content-center gap-2">
              <i class="bi bi-patch-check-fill text-primary fs-4"></i>
              <span class="small fw-bold text-uppercase ls-1">IICRC Certified</span>
            </div>
          </div>
          <div class="col-6 col-md-3 border-start-md">
            <div class="d-flex align-items-center justify-content-center gap-2">
              <i class="bi bi-shield-lock-fill text-primary fs-4"></i>
              <span class="small fw-bold text-uppercase ls-1">Fully Insured</span>
            </div>
          </div>
          <div class="col-6 col-md-3 border-start-md">
            <div class="d-flex align-items-center justify-content-center gap-2">
              <i class="bi bi-geo-alt-fill text-primary fs-4"></i>
              <span class="small fw-bold text-uppercase ls-1">Virginia Local</span>
            </div>
          </div>
          <div class="col-6 col-md-3 border-start-md">
            <div class="d-flex align-items-center justify-content-center gap-2">
              <i class="bi bi-clock-fill text-primary fs-4"></i>
              <span class="small fw-bold text-uppercase ls-1">24/7 Response</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <Breadcrumbs class="py-3 border-bottom mb-5" />

    <section class="container mb-5">
      <div class="row g-md-5 align-items-center">
        <div class="col-lg-6">
          <h2 class="text-primary fw-bold mb-4">Integrity in Every Inch</h2>
          <p class="text-muted mb-4">
            Founded in the heart of the Shenandoah Valley, Elevated Construction provides a higher standard of service for property restoration and reconstruction. We recognized that homeowners and business owners were often left in the dark during complex insurance claims or structural rebuilds.
          </p>
          <p class="text-muted mb-4">
            Today, we are a specialized <strong>IICRC Certified Firm</strong> dedicated to "The Total Recovery." We don't just mitigate the damage; we utilize the global S500 and S520 standards to ensure your environment is scientifically clean and structurally sound.
          </p>
          
          <div class="row g-3">
            <div class="col-6">
              <div class="p-3 border-start border-4 border-secondary bg-light">
                <h6 class="fw-bold mb-1">Local Roots</h6>
                <p class="x-small mb-0 text-muted">Proudly serving Bridgewater, Harrisonburg, and the Shenandoah Valley.</p>
              </div>
            </div>
            <div class="col-6">
              <div class="p-3 border-start border-4 border-secondary bg-light">
                <h6 class="fw-bold mb-1">Certified Techs</h6>
                <p class="x-small mb-0 text-muted">Professionally trained in water, fire, and mold remediation.</p>
              </div>
            </div>
          </div>
        </div>

        <div class="col-lg-6">
          <div class="position-relative mt-4 mt-md-0">
            <img 
              src="/ec-logo-white.jpg" 
              alt="Elevated Construction on-site assessment in Virginia" 
              class="img-fluid rounded-4 shadow-lg"
            >
            <div class="stats-badge shadow-lg d-none d-md-block">
              <span class="h2 fw-bold text-secondary mb-0">25+</span>
              <p class="small fw-bold mb-0 text-white">YEARS OF<br>EXPERIENCE</p>
            </div>
          </div>
        </div>
      </div>

      <div class="row g-4 mt-5 pt-lg-5">
        <div class="col-md-4 text-center">
          <div class="icon-circle mx-auto bg-light mb-3">
            <i class="bi bi-graph-up-arrow text-primary fs-3"></i>
          </div>
          <h5 class="fw-bold">Transparency</h5>
          <p class="small text-muted">No hidden costs. We use industry-standard Xactimate pricing and provide detailed photo logs so you and your adjuster see exactly what we see.</p>
        </div>
        <div class="col-md-4 text-center">
          <div class="icon-circle mx-auto bg-light mb-3">
            <i class="bi bi-award text-primary fs-3"></i>
          </div>
          <h5 class="fw-bold">Craftsmanship</h5>
          <p class="small text-muted">We don't settle for "good enough." Every restoration and remodel is executed with an eye for longevity and aesthetic excellence.</p>
        </div>
        <div class="col-md-4 text-center">
          <div class="icon-circle mx-auto bg-light mb-3">
            <i class="bi bi-house-heart text-primary fs-3"></i>
          </div>
          <h5 class="fw-bold">Community</h5>
          <p class="small text-muted">We live where we work. Our priority is restoring the homes and businesses of our neighbors with speed and compassion.</p>
        </div>
      </div>

      <div class="bg-primary text-white p-4 p-lg-5 rounded-4 mt-5 shadow">
        <div class="row align-items-center">
          <div class="col-lg-8">
            <h3 class="fw-bold mb-3 text-secondary">Ready to Start Your Project?</h3>
            <p class="mb-0 opacity-75">Whether you're facing an emergency or planning a custom renovation, our Virginia leadership team is ready to provide the expertise your property deserves.</p>
          </div>
          <div class="col-lg-4 text-lg-end mt-4 mt-lg-0">
            <button 
              class="btn btn-secondary btn-lg rounded-pill px-5 fw-bold"
              data-bs-toggle="offcanvas" 
              data-bs-target="#quoteDrawer"
            >
              Get a Quote
            </button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.border-start-md {
  border-left: 1px solid #dee2e6;
}
@media (max-width: 767px) {
  .border-start-md { border-left: 0; }
}

.icon-circle {
  width: 70px;
  height: 70px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f8f9fa;
  box-shadow: 0 4px 12px rgba(86, 8, 115, 0.05);
}

.stats-badge {
  position: absolute;
  top: -20px;
  left: 20px;
  background-color: var(--color-primary);
  padding: 20px 30px;
  border-radius: 8px;
  text-align: center;
  border-top: 5px solid var(--color-secondary);
}

.x-small { font-size: 0.85rem; }
.ls-1 { letter-spacing: 1px; }
.ls-2 { letter-spacing: 2px; }
</style>