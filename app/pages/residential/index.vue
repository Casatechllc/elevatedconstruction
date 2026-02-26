<template>
  <div class="residential-hub">
    <section class="bg-primary text-white py-5 position-relative">
      <div class="container py-lg-5">
        <div class="row align-items-center">
          <div class="col-lg-7">
            <h6 class="text-secondary fw-bold text-uppercase ls-2 mb-3">Residential Excellence</h6>
            <h1 class="display-3 fw-bold mb-4">Total Home Recovery & Restoration</h1>
            <p class="lead opacity-75 mb-4">
              From emergency flood mitigation to full-scale structural reconstruction, Elevated Construction provides Bridgewater homeowners with elite craftsmanship and 24/7 peace of mind.
            </p>
            <div class="d-flex gap-3">
              <button class="btn btn-secondary px-4 py-3 rounded-pill shadow" data-bs-toggle="offcanvas" data-bs-target="#quoteDrawer">
                Start Your Recovery
              </button>
              <a href="tel:5550000000" class="btn btn-outline-light px-4 py-3 rounded-pill">
                <i class="bi bi-telephone-fill me-2"></i> Call Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <Breadcrumbs class="mb-4" />

    <section class="py-5 bg-white">
      <div class="container py-lg-5">
        <div class="text-center mb-5">
          <h2 class="text-primary fw-bold">Specialized Home Services</h2>
          <p class="text-muted">Explore our core divisions of residential care</p>
        </div>

        <div class="row g-4">
          <div class="col-md-4">
            <div class="card h-100 border-primary shadow-hover transition-all p-4">
              <div class="icon-circle bg-light-purple mb-4">
                <i class="bi bi-lightning-charge-fill text-primary"></i>
              </div>
              <h4 class="fw-bold text-primary">Emergency Recovery</h4>
              <p class="text-muted small">Immediate response for water, fire, smoke, and mold mitigation to stop damage in its tracks.</p>
              <NuxtLink to="/residential/emergency-recovery" class="btn btn-link text-primary p-0 fw-bold text-decoration-none">
                View Services <i class="bi bi-arrow-right ms-1"></i>
              </NuxtLink>
            </div>
          </div>

          <div class="col-md-4">
            <div class="card h-100 border-primary shadow-hover transition-all p-4">
              <div class="icon-circle bg-light-purple mb-4">
                <i class="bi bi-tools text-primary"></i>
              </div>
              <h4 class="fw-bold text-primary">Structural Rebuild</h4>
              <p class="text-muted small">Full-service reconstruction and remodeling. We don't just clean up; we rebuild better than before.</p>
              <NuxtLink to="/residential/structural-rebuild" class="btn btn-link text-primary p-0 fw-bold text-decoration-none">
                View Services <i class="bi bi-arrow-right ms-1"></i>
              </NuxtLink>
            </div>
          </div>

          <div class="col-md-4">
            <div class="card h-100 border-primary shadow-hover transition-all p-4">
              <div class="icon-circle bg-light-purple mb-4">
                <i class="bi bi-stars text-primary"></i>
              </div>
              <h4 class="fw-bold text-primary">Specialty Cleaning</h4>
              <p class="text-muted small">Elite care for air ducts, upholstery, contents, and hard surfaces to ensure a healthy home environment.</p>
              <NuxtLink to="/residential/specialty-cleaning" class="btn btn-link text-primary p-0 fw-bold text-decoration-none">
                View Services <i class="bi bi-arrow-right ms-1"></i>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-5 bg-light">
      <div class="container py-lg-5">
        <h2 class="text-center text-primary fw-bold mb-5">How We Restore Your Home</h2>
        <div class="row g-4 text-center">
          <div class="col-md-3" v-for="(step, index) in process" :key="index">
            <div class="process-step">
              <div class="step-number bg-secondary text-primary mx-auto mb-3">{{ index + 1 }}</div>
              <h5 class="fw-bold">{{ step.title }}</h5>
              <p class="text-muted small">{{ step.desc }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const process = [
  { title: 'Rapid Assessment', desc: 'Our team arrives within 60-90 minutes to stabilize the site and prevent secondary damage.' },
  { title: 'Mitigation Plan', desc: 'We document everything for your insurance and start the extraction or cleanup process immediately.' },
  { title: 'Detailed Restoration', desc: 'Using industrial-grade equipment, we dry, clean, and sanitize every affected surface.' },
  { title: 'Final Handover', desc: 'A thorough walkthrough ensures your home is safe, clean, and back to its original (or better) state.' }
]
</script>

<style scoped>
.residential-hub { overflow-x: hidden; }

.ls-2 { letter-spacing: 2px; }

.icon-circle {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
}

.bg-light-purple {
  background-color: rgba(86, 8, 115, 0.1);
}

.shadow-hover:hover {
  transform: translateY(-10px);
  box-shadow: 0 1rem 3rem rgba(0,0,0,0.1) !important;
}

.transition-all {
  transition: all 0.3s ease-in-out;
}

.step-number {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
}
</style>