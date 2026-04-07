<template>
  <div class="about-page">
    <section class="bg-primary text-white py-5">
      <div class="container py-lg-5 text-center">
        <h6 class="text-secondary fw-bold text-uppercase ls-2 mb-3">Our Mission</h6>
        <h1 class="display-3 fw-bold mb-4">Restoring Peace of Mind</h1>
        <p class="lead mx-auto opacity-90" style="max-width: 800px;">
          Elevated Construction was founded on a simple principle: to lead with integrity and high-end craftsmanship during our neighbors' most difficult moments.
        </p>
      </div>
    </section>

    <Breadcrumbs class="py-3 border-bottom mb-5" />

    <section class="container mb-5">
      <div class="row g-md-5 align-items-center">
        <div class="col-lg-6">
          <h2 class="text-primary fw-bold mb-4">Integrity in Every Inch</h2>
          <p class="text-muted mb-4">
            Founded in the heart of the Shenandoah Valley, Elevated Construction was built to provide a higher standard of service for property restoration and reconstruction. We recognized that homeowners and business owners were often left in the dark during complex insurance claims or structural rebuilds.
          </p>
          <p class="text-muted mb-4">
            Today, we are a <strong>Class A Contractor</strong> specialized in "The Total Recovery." This means we don't just mitigate the damage; we stay on-site to handle the complete architectural rebuild, ensuring that the final result is even better than the pre-loss condition.
          </p>
          
          <div class="row g-3">
            <div class="col-6">
              <div class="p-3 border-start border-4 border-secondary bg-light">
                <h6 class="fw-bold mb-1">Local Roots</h6>
                <p class="x-small mb-0 text-muted">Proudly serving Bridgewater, Harrisonburg, and the surrounding 60-mile radius.</p>
              </div>
            </div>
            <div class="col-6">
              <div class="p-3 border-start border-4 border-secondary bg-light">
                <h6 class="fw-bold mb-1">Master Class</h6>
                <p class="x-small mb-0 text-muted">High-tier licensing and certifications in every restoration category.</p>
              </div>
            </div>
          </div>
        </div>

        <div class="col-lg-6">
          <div class="position-relative mt-4 mt-md-0">
            <img 
              src="/ec-logo-white.jpg" 
              alt="Class A Contractor team reviewing construction blueprints on-site" 
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
            <i class="bi bi-shield-check text-primary fs-3"></i>
          </div>
          <h5 class="fw-bold">Transparency</h5>
          <p class="small text-muted">No hidden costs or confusing jargon. We use industry-standard Xactimate pricing and provide detailed photo logs of every step.</p>
        </div>
        <div class="col-md-4 text-center">
          <div class="icon-circle mx-auto bg-light mb-3">
            <i class="bi bi-tools text-primary fs-3"></i>
          </div>
          <h5 class="fw-bold">Craftsmanship</h5>
          <p class="small text-muted">As a Class A Master Contractor, we don't settle for "good enough." We build for longevity, safety, and aesthetic excellence.</p>
        </div>
        <div class="col-md-4 text-center">
          <div class="icon-circle mx-auto bg-light mb-3">
            <i class="bi bi-people-fill text-primary fs-3"></i>
          </div>
          <h5 class="fw-bold">Community</h5>
          <p class="small text-muted">We live where we work. Our priority is restoring the homes and businesses of our neighbors with speed and compassion.</p>
        </div>
      </div>

      <div class="bg-primary text-white p-4 p-lg-5 rounded-4 mt-5 shadow">
        <div class="row align-items-center">
          <div class="col-lg-8">
            <h3 class="fw-bold mb-3 text-secondary">Ready to Start Your Project?</h3>
            <p class="mb-0 opacity-75">Whether you're facing an emergency or planning a custom renovation, our leadership team is ready to provide the expertise your property deserves.</p>
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

<script setup>
const appConfig = useAppConfig()
</script>

<style scoped>
.icon-circle {
  width: 70px;
  height: 70px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
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
.ls-2 { letter-spacing: 2px; }
</style>