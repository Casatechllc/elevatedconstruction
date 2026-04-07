<template>
  <div class="sitemap-page">
    <section class="bg-primary text-white py-5">
      <div class="container py-lg-4 text-center">
        <h1 class="display-4 fw-bold mb-0">Sitemap</h1>
      </div>
    </section>

    <Breadcrumbs class="py-3 border-bottom mb-5" />

    <section class="container mb-5">
      <div class="row g-5">
        <div class="col-md-4 col-lg-3">
          <h4 class="text-primary fw-bold mb-4 border-bottom pb-2">Main Pages</h4>
          <ul class="list-unstyled sitemap-list">
            <li><NuxtLink to="/">Home</NuxtLink></li>
            <li><NuxtLink to="/about">About Us</NuxtLink></li>
            <!-- <li><NuxtLink to="/portfolio">Project Gallery</NuxtLink></li> -->
            <li><NuxtLink to="/contact">Contact & Estimates</NuxtLink></li>
          </ul>
        </div>

        <div class="col-md-4 col-lg-3">
          <h4 class="text-primary fw-bold mb-4 border-bottom pb-2">Disaster Recovery</h4>
          <ul class="list-unstyled sitemap-list">
            <li><NuxtLink to="/services/disaster-recovery">Overview</NuxtLink></li>
            <li><NuxtLink to="/services/disaster-recovery/water-flood">Water & Flood Mitigation</NuxtLink></li>
            <li><NuxtLink to="/services/disaster-recovery/fire-smoke">Fire & Smoke Damage</NuxtLink></li>
            <li><NuxtLink to="/services/disaster-recovery/storm-wind">Storm & Wind Damage</NuxtLink></li>
            <li><NuxtLink to="/services/disaster-recovery/mold-environmental">Environmental & Mold</NuxtLink></li>
          </ul>
        </div>

        <div class="col-md-4 col-lg-3">
          <h4 class="text-primary fw-bold mb-4 border-bottom pb-2">Construction</h4>
          <ul class="list-unstyled sitemap-list">
            <li><NuxtLink to="/services/rebuild-remodel">Overview</NuxtLink></li>
            <li><NuxtLink to="/services/rebuild-remodel/structural-reconstruction">Structural Reconstruction</NuxtLink></li>
            <li><NuxtLink to="/services/rebuild-remodel/residential-remodeling">Residential Remodeling</NuxtLink></li>
            <li><NuxtLink to="/services/specialty-care/surface-cleaning">Specialty Cleaning</NuxtLink></li>
            <li><NuxtLink to="/services/specialty-care/air-duct-cleaning">Air Duct & HVAC Cleaning</NuxtLink></li>
            <!-- <li><NuxtLink to="/services/specialty-care/biohazard-trauma">Biohazard & Trauma</NuxtLink></li> -->
          </ul>
        </div>

        <div class="col-md-4 col-lg-3">
          <h4 class="text-primary fw-bold mb-4 border-bottom pb-2">Resources</h4>
          <ul class="list-unstyled sitemap-list">
            <li><NuxtLink to="/info/priority-program">First Priority Program</NuxtLink></li>
            <li><NuxtLink to="/info/industries-served">Industries We Serve</NuxtLink></li>
            <li><NuxtLink to="/info/insurance-professionals">Insurance Professionals</NuxtLink></li>
            <!-- <li><NuxtLink to="/info/resource-center">Resource Center</NuxtLink></li> -->
          </ul>
        </div>
      </div>
    </section>

    <section class="container mb-5">
      <div class="bg-light p-5 rounded-4 text-center border">
        <h3 class="fw-bold text-primary">Need immediate help?</h3>
        <p class="text-muted mb-4">Our emergency dispatch team is available 24/7 across Virginia.</p>
        <a :href="`tel:${appConfig.phoneRaw}`" class="btn btn-primary btn-lg rounded-pill px-5 fw-bold">
          Call {{ appConfig.phoneNumber }}
        </a>
      </div>
    </section>
  </div>
</template>

<script setup>
const appConfig = useAppConfig()

useHead({
  title: 'Sitemap | Elevated Construction',
  meta: [
    { name: 'description', content: 'Navigate all services provided by Elevated Construction, from disaster recovery to premium remodeling.' }
  ]
})
</script>

<style scoped>
.sitemap-list li {
  margin-bottom: 0.75rem;
}

.sitemap-list a {
  color: var(--color-text-dark);
  text-decoration: none;
  font-weight: 500;
  transition: all 0.2s ease;
  display: inline-block;
}

.sitemap-list a:hover {
  color: var(--color-secondary);
  transform: translateX(5px);
}

.border-bottom {
  border-color: var(--color-secondary) !important;
  border-width: 3px !important;
}
</style>