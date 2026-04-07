<template>
  <footer class="bg-footer text-white pt-5 pb-3">
    <div class="container">
      <div class="row g-4 mb-5">
        <div class="col-lg-3 col-md-6">
          <div class="footer-logo-container mb-4">
            <NuxtLink to="/">
              <img 
                src="/ec-logo-bordered.png" 
                alt="Elevated Construction Logo" 
                class="footer-logo"
              />
            </NuxtLink>
          </div>
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
          <NuxtLink to="/services/disaster-recovery" class="text-decoration-none">
            <h6 class="fw-bold mb-4 text-uppercase text-secondary">Disaster Recovery</h6>
          </NuxtLink>
          <ul class="list-unstyled footer-links">
            <li><NuxtLink to="/services/disaster-recovery/water-flood">Water & Flood Mitigation</NuxtLink></li>
            <li><NuxtLink to="/services/disaster-recovery/fire-smoke">Fire & Smoke Damage</NuxtLink></li>
            <li><NuxtLink to="/services/disaster-recovery/storm-wind">Storm & Wind Damage</NuxtLink></li>
            <li><NuxtLink to="/services/disaster-recovery/mold-environmental">Environmental & Mold</NuxtLink></li>
          </ul>
        </div>

        <div class="col-lg-3 col-md-6">
            <NuxtLink to="/services/rebuild-remodel" class="text-decoration-none">
                <h6 class="fw-bold mb-4 text-uppercase text-secondary">Rebuild & Remodeling</h6>
            </NuxtLink>
          <ul class="list-unstyled footer-links">
            <li><NuxtLink to="/services/rebuild-remodel/structural-reconstruction">Structural Reconstruction</NuxtLink></li>
            <li><NuxtLink to="/services/rebuild-remodel/residential-remodeling">Residential Remodeling</NuxtLink></li>
            <!-- <li><NuxtLink to="/services/rebuild-remodel/commercial-remodeling">Commercial Remodeling</NuxtLink></li> -->
            <li><NuxtLink to="/services/specialty-care/surface-cleaning">Specialty Cleaning</NuxtLink></li>
            <li><NuxtLink to="/services/specialty-care/air-duct-cleaning">Air Duct & HVAC</NuxtLink></li>
          </ul>
        </div>

        <div class="col-lg-3 col-md-6">
          <h6 class="fw-bold mb-4 text-uppercase text-secondary footer-links">Information Hub</h6>
          <ul class="list-unstyled footer-links mb-4">
            <li><NuxtLink to="/info/priority-program">First Priority Program</NuxtLink></li>
            <li><NuxtLink to="/info/insurance-professionals">Insurance Adjusters</NuxtLink></li>
            <li><NuxtLink to="/info/industries-served">Industries We Serve</NuxtLink></li>
            <li><NuxtLink to="/about">Our Company Story</NuxtLink></li>
            <li><NuxtLink to="/contact">Contact Us</NuxtLink></li>
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
            <span class="ms-2 d-block d-sm-inline mt-1 mt-sm-0">
              Powered by <a href="https://casatechllc.com" target="_blank" class="powered-by-link">Casatech LLC</a>
            </span>
          </p>
        </div>
        <div class="col-md-6 text-md-end">
          <div class="d-flex justify-content-md-end gap-3 opacity-50 small mt-2 mt-md-0">
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
.bg-footer {
  background-color: var(--color-primary);
  background-image: linear-gradient(rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.4) 100%);
}

.footer-logo {
  width: 100%;
  max-width: 300px; 
  height: auto;
  object-fit: contain;
  transition: transform 0.3s ease;
  display: block; 
  margin-left: 0;
}

.footer-logo:hover {
  transform: scale(1.05);
}

@media (max-width: 767px) {
  .footer-logo {
    max-width: 250px;
    margin: 0 auto 1.5rem auto; 
  }
  .col-lg-3 {
    text-align: center;
  }
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
  color: var(--color-secondary);
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

.powered-by-link {
  color: inherit;
  text-decoration: none;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  transition: all 0.3s ease;
}

.powered-by-link:hover {
  color: var(--color-secondary) !important;
  border-bottom-color: var(--color-secondary);
}

@media (max-width: 575px) {
  .col-md-6 {
    text-align: center;
  }
  .justify-content-md-end {
    justify-content: center !important;
  }
}
</style>