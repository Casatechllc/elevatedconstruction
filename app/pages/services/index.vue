<template>
  <div class="services-page">
    <section class="bg-primary text-white py-5 position-relative">
      <div class="container py-lg-5">
        <div class="row align-items-center">
          <div class="col-lg-7">
            <h6 class="text-secondary fw-bold text-uppercase ls-2 mb-3">Professional Restoration</h6>
            <h1 class="display-3 fw-bold mb-4">Total Property Solutions</h1>
            <p class="lead opacity-75 mb-4">
              From emergency response and structural drying to high-end remodeling and specialty cleaning. Elevated Construction is your single-source partner for property care in the Shenandoah Valley.
            </p>
            <div class="d-flex flex-wrap gap-3">
              <button class="btn btn-secondary px-4 py-3 rounded-pill shadow fw-bold" data-bs-toggle="offcanvas" data-bs-target="#quoteDrawer">
                Request a Service
              </button>
              <a :href="`tel:${appConfig.phoneRaw}`" class="btn btn-outline-light px-4 py-3 rounded-pill">
                <i class="bi bi-telephone-fill me-2"></i> {{ appConfig.phoneNumber }}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <Breadcrumbs class="py-3 border-bottom mb-0" />

    <section class="py-5 bg-white">
      <div class="container py-lg-5">
        <div class="text-center mb-5">
          <h2 class="text-primary fw-bold display-5">Our Core Divisions</h2>
          <p class="text-muted lead">Specialized teams for every stage of your project.</p>
        </div>

        <div class="row g-4">
          <div class="col-lg-4">
            <div class="card h-100 border-0 shadow-sm p-4 service-hub-card">
              <div class="icon-box mb-4">
                <i class="bi bi-shield-shaded text-primary display-5"></i>
              </div>
              <h3 class="fw-bold text-primary h4">Disaster Recovery</h3>
              <p class="text-muted small">24/7 mitigation to stop damage and stabilize your environment.</p>
              <ul class="list-unstyled mb-4 flex-grow-1 service-list">
                <li><NuxtLink to="/services/disaster-recovery/water-flood">Water & Flood Mitigation</NuxtLink></li>
                <li><NuxtLink to="/services/disaster-recovery/fire-smoke">Fire & Smoke Damage</NuxtLink></li>
                <li><NuxtLink to="/services/disaster-recovery/storm-wind">Storm & Wind Damage</NuxtLink></li>
                <li><NuxtLink to="/services/disaster-recovery/mold-environmental">Environmental & Mold</NuxtLink></li>
              </ul>
              <NuxtLink to="/services/disaster-recovery" class="btn btn-primary rounded-pill w-100">View Recovery Hub</NuxtLink>
            </div>
          </div>

          <div class="col-lg-4">
            <div class="card h-100 border-0 shadow-sm p-4 service-hub-card">
              <div class="icon-box mb-4">
                <i class="bi bi-house-gear text-primary display-5"></i>
              </div>
              <h3 class="fw-bold text-primary h4">Rebuild & Remodeling</h3>
              <p class="text-muted small">A-Z reconstruction from structural framing to luxury interior finishes.</p>
              <ul class="list-unstyled mb-4 flex-grow-1 service-list">
                <li><NuxtLink to="/services/rebuild-remodel/structural-reconstruction">Structural Reconstruction</NuxtLink></li>
                <li><NuxtLink to="/services/rebuild-remodel/residential-remodeling">Residential Remodeling</NuxtLink></li>
              </ul>
              <NuxtLink to="/services/rebuild-remodel" class="btn btn-primary rounded-pill w-100">View Rebuild Hub</NuxtLink>
            </div>
          </div>

          <div class="col-lg-4">
            <div class="card h-100 border-0 shadow-sm p-4 service-hub-card">
              <div class="icon-box mb-4">
                <i class="bi bi-patch-check text-primary display-5"></i>
              </div>
              <h3 class="fw-bold text-primary h4">Specialty Care</h3>
              <p class="text-muted small">High-detail cleaning and hazardous material management.</p>
              <ul class="list-unstyled mb-4 flex-grow-1 service-list">
                <li><NuxtLink to="/services/specialty-care/air-duct-cleaning">Air Duct & HVAC</NuxtLink></li>
                <li><NuxtLink to="/services/specialty-care/surface-cleaning">Specialty Surface Cleaning</NuxtLink></li>
                <li><NuxtLink to="/services/specialty-care/emergency-power">Power & Logistics</NuxtLink></li>
              </ul>
              <NuxtLink to="/services/specialty-care" class="btn btn-primary rounded-pill w-100">View Specialty Hub</NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-5 bg-light border-top">
      <div class="container py-lg-5">
        <div class="row g-5">
          <div class="col-lg-8">
            <h2 class="text-primary fw-bold mb-4">The Science of Professional Restoration</h2>
            <p>At Elevated Construction, we believe that restoration is a science, not just a service. Our methodologies are rooted in IICRC standards, ensuring that every drop of water, every particle of soot, and every mold spore is managed with technical precision.</p>
            
            <div class="row g-4 mt-2">
              <div class="col-md-6">
                <h5 class="fw-bold text-primary">IICRC S500 & S520 Standards</h5>
                <p class="small text-muted">We adhere to the "Standard and Reference Guide for Professional Water Damage Restoration" and mold remediation protocols to ensure the safety of your home's structural integrity and indoor air quality.</p>
              </div>
              <div class="col-md-6">
                <h5 class="fw-bold text-primary">Advanced Psychrometrics</h5>
                <p class="small text-muted">Our water recovery utilizes the study of air and water vapor (psychrometrics) to control humidity and temperature, reaching dry-standard goals in record time.</p>
              </div>
            </div>

            <h3 class="h4 fw-bold text-primary mt-5 mb-3">Service Frequently Asked Questions</h3>
            <div class="accordion border-0" id="serviceFaq">
              <div class="accordion-item border-0 mb-3 shadow-sm rounded">
                <h2 class="accordion-header">
                  <button class="accordion-button collapsed fw-bold rounded" type="button" data-bs-toggle="collapse" data-bs-target="#faq1">
                    How quickly can you respond to an emergency?
                  </button>
                </h2>
                <div id="faq1" class="accordion-collapse collapse" data-bs-parent="#serviceFaq">
                  <div class="accordion-body small text-muted">
                    We maintain mobile response units 24/7/365. For properties within our 60-mile radius (Harrisonburg, Staunton, Waynesboro, etc.), we typically arrive on-site within 60 to 90 minutes of the initial call.
                  </div>
                </div>
              </div>
              <div class="accordion-item border-0 mb-3 shadow-sm rounded">
                <h2 class="accordion-header">
                  <button class="accordion-button collapsed fw-bold rounded" type="button" data-bs-toggle="collapse" data-bs-target="#faq2">
                    Do you work directly with my insurance company?
                  </button>
                </h2>
                <div id="faq2" class="accordion-collapse collapse" data-bs-parent="#serviceFaq">
                  <div class="accordion-body small text-muted">
                    Yes. We utilize Xactimate, the industry-standard estimating software used by 99% of adjusters. We provide full photo documentation and moisture mapping to ensure your claim is processed smoothly and accurately.
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-4">
            <div class="card bg-primary text-white p-4 border-0 shadow sticky-top" style="top: 130px;">
              <h5 class="fw-bold mb-3">Professional Certifications</h5>
              <ul class="list-unstyled small mb-0">
                <li class="mb-3 d-flex align-items-start">
                  <i class="bi bi-patch-check text-secondary me-2 fs-5"></i>
                  <span><strong>WRT:</strong> Water Restoration Technician</span>
                </li>
                <li class="mb-3 d-flex align-items-start">
                  <i class="bi bi-patch-check text-secondary me-2 fs-5"></i>
                  <span><strong>AMRT:</strong> Applied Microbial Remediation</span>
                </li>
                <li class="mb-3 d-flex align-items-start">
                  <i class="bi bi-patch-check text-secondary me-2 fs-5"></i>
                  <span><strong>FSRT:</strong> Fire & Smoke Restoration</span>
                </li>
                <li class="d-flex align-items-start">
                  <i class="bi bi-patch-check text-secondary me-2 fs-5"></i>
                  <span><strong>CDS:</strong> Commercial Drying Specialist</span>
                </li>
              </ul>
              <hr class="opacity-25">
              <NuxtLink to="/contact" class="btn btn-secondary w-100 fw-bold">Contact Our Experts</NuxtLink>
            </div>
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
.service-hub-card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border-top: 5px solid var(--color-primary) !important;
}

.service-hub-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 1rem 3rem rgba(86, 8, 115, 0.15) !important;
}

.service-list li {
  padding: 0.5rem 0;
  border-bottom: 1px solid rgba(0,0,0,0.05);
}

.service-list a {
  color: var(--color-text-dark);
  text-decoration: none;
  font-weight: 500;
  font-size: 0.95rem;
  transition: color 0.2s ease;
}

.service-list a:hover {
  color: var(--color-primary);
  padding-left: 5px;
}

.icon-box {
  width: 80px;
  height: 80px;
  background-color: rgba(86, 8, 115, 0.05);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
}

.accordion-button:not(.collapsed) {
  background-color: var(--color-primary);
  color: white;
}

.accordion-button:focus {
  box-shadow: none;
  border-color: rgba(0,0,0,0.125);
}

.ls-2 { letter-spacing: 2px; }
</style>