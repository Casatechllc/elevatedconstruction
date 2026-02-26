<template>
  <footer class="bg-footer text-white pt-5 pb-3">
    <div class="container">
      <div class="row g-4 mb-5">
        <div class="col-lg-3 col-md-6">
          <h5 class="fw-bold mb-4 text-uppercase border-bottom border-secondary border-3 d-inline-block pb-1">
            Elevated Construction
          </h5>
          <p class="small opacity-75 mb-4">
            Professional restoration and reconstruction services. We lead with integrity and high-end craftsmanship to restore your peace of mind.
          </p>
          <div class="contact-info">
            <a :href="`tel:${appConfig.phoneRaw}`" class="d-block text-white text-decoration-none mb-2 hover-secondary">
              <i class="bi bi-telephone-fill text-secondary me-2"></i> {{ appConfig.phoneNumber }}
            </a>
            <p class="small mb-0 opacity-75">
              <i class="bi bi-geo-alt-fill text-secondary me-2"></i> {{ appConfig.address }}
            </p>
          </div>
        </div>

        <div class="col-lg-3 col-md-6">
          <h6 class="fw-bold mb-4 text-uppercase text-secondary">Emergency Recovery</h6>
          <ul class="list-unstyled footer-links">
            <li><NuxtLink to="/residential/emergency-recovery/water-recovery">Water & Flood</NuxtLink></li>
            <li><NuxtLink to="/residential/emergency-recovery/fire-smoke-recovery">Fire & Smoke</NuxtLink></li>
            <li><NuxtLink to="/residential/emergency-recovery/mold-remediation">Mold & Environmental</NuxtLink></li>
            <li><NuxtLink to="/residential/emergency-recovery/emergency-securing">Board-Up & Tarping</NuxtLink></li>
            <li><NuxtLink to="/residential/emergency-recovery/biohazard-cleanup">Trauma & Biohazard</NuxtLink></li>
          </ul>
        </div>

        <div class="col-lg-3 col-md-6">
          <h6 class="fw-bold mb-4 text-uppercase text-secondary">Rebuild & Business</h6>
          <ul class="list-unstyled footer-links">
            <li><NuxtLink to="/residential/structural-rebuild/reconstruction">Full Reconstruction</NuxtLink></li>
            <li><NuxtLink to="/residential/structural-rebuild/odor-elimination">Odor Elimination</NuxtLink></li>
            <li><NuxtLink to="/commercial/mitigation">Commercial Mitigation</NuxtLink></li>
            <li><NuxtLink to="/commercial/build-outs">Commercial Build-outs</NuxtLink></li>
          </ul>
        </div>

        <div class="col-lg-3 col-md-6">
          <h6 class="fw-bold mb-4 text-uppercase text-secondary">Specialty Care</h6>
          <ul class="list-unstyled footer-links mb-4">
            <li><NuxtLink to="/residential/specialty-cleaning/air-duct-cleaning">Air Duct Cleaning</NuxtLink></li>
            <li><NuxtLink to="/residential/specialty-cleaning/surface-cleaning">Tile & Grout Care</NuxtLink></li>
            <li><NuxtLink to="/about">About Our Team</NuxtLink></li>
            <li><NuxtLink to="/contact">Get in Touch</NuxtLink></li>
          </ul>
          <button class="btn btn-secondary btn-sm rounded-pill px-4 fw-bold shadow-sm" data-bs-toggle="offcanvas" data-bs-target="#quoteDrawer">
            Request Quote
          </button>
        </div>
      </div>

      <hr class="opacity-10 border-white">

      <div class="row align-items-center pt-3">
        <div class="col-md-6">
          <p class="small mb-0 opacity-50">
            &copy; {{ new Date().getFullYear() }} Elevated Construction.
          </p>
        </div>
        <div class="col-md-6 text-md-end">
          <div class="d-flex justify-content-md-end gap-3 opacity-50 small">
            <span>Licensed & Insured</span>
            <span>Class A Contractor</span>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
    const appConfig = useAppConfig()
</script>

<style scoped>
/* Custom Background using Brand Primary Color */
.bg-footer {
  background-color: var(--color-primary); /* The deep purple */
  background-image: linear-gradient(rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.4) 100%); /* Adds depth */
}

.footer-links li {
  margin-bottom: 0.75rem;
}

.footer-links a {
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  font-size: 0.9rem;
  transition: all 0.2s ease;
  display: inline-block;
}

.footer-links a:hover {
  color: var(--color-secondary); /* This will be your Gold/Yellow accent */
  transform: translateX(5px);
}

.hover-secondary:hover {
  color: var(--color-secondary) !important;
}

.text-secondary {
  color: var(--color-secondary) !important;
}

hr {
  border-top: 1px solid white;
}
</style>