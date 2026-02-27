<template>
  <div>
    <section class="hero-section d-flex align-items-center">
      <div class="container">
        <div class="row">
          <div class="col-lg-7 text-white">
            <h1 class="display-3 fw-bold mb-3">
              Restoring Property, <br />
              <span class="text-secondary">Rebuilding Lives.</span>
            </h1>
            <p class="lead mb-4 opacity-90">
              Elevated Construction provides expert 24/7 emergency restoration 
              and premium structural repairs. From first response to final nail, we rise to the occasion.
            </p>
            <div class="d-flex flex-wrap gap-3">
              <button 
                class="btn btn-quote-trigger btn-lg rounded-pill px-5 fw-bold"
                data-bs-toggle="offcanvas" 
                data-bs-target="#quoteDrawer"
              >
                Start Your Project
              </button>
              <a :href="`tel:${appConfig.phoneRaw}`" class="btn btn-outline-light btn-lg rounded-pill px-4">
                <i class="bi bi-telephone-fill me-2"></i> 24/7 Emergency Dispatch
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div class="bg-light py-4 border-bottom">
      <div class="container">
        <div class="row align-items-center text-center g-4">
          <div class="col-6 col-md-3">
             <i class="bi bi-shield-check text-primary me-2"></i>
             <span class="fw-bold text-muted text-uppercase small ls-1">Licensed & Insured</span>
          </div>
          <div class="col-6 col-md-3">
             <i class="bi bi-clock-history text-primary me-2"></i>
             <span class="fw-bold text-muted text-uppercase small ls-1">60-Min Response</span>
          </div>
          <div class="col-6 col-md-3">
             <i class="bi bi-trophy text-primary me-2"></i>
             <span class="fw-bold text-muted text-uppercase small ls-1">IICRC Certified</span>
          </div>
          <div class="col-6 col-md-3">
             <i class="bi bi-file-earmark-check text-primary me-2"></i>
             <span class="fw-bold text-muted text-uppercase small ls-1">Insurance Approved</span>
          </div>
        </div>
      </div>
    </div>

    <section class="py-5 bg-white">
      <div class="container py-lg-5">
        <div class="text-center mb-5">
          <h6 class="text-secondary fw-bold text-uppercase ls-2">Expert Solutions</h6>
          <h2 class="text-primary display-5 fw-bold">How Can We Help?</h2>
          <div class="mx-auto bg-secondary mt-2" style="height: 4px; width: 60px;"></div>
        </div>
        
        <div class="row g-4">
          <div class="col-md-4">
            <div class="service-card shadow-sm p-4 h-100 border-top border-4 border-primary">
              <i class="bi bi-lightning-charge-fill display-4 text-primary mb-3 d-block"></i>
              <h4 class="fw-bold">Disaster Recovery</h4>
              <p class="text-muted small">Rapid mitigation for water, fire, smoke, and storm damage to stabilize your property.</p>
              <ul class="list-unstyled mb-4 small">
                <li><i class="bi bi-check2 text-secondary me-2"></i>Water Extraction</li>
                <li><i class="bi bi-check2 text-secondary me-2"></i>Fire/Soot Remediation</li>
                <li><i class="bi bi-check2 text-secondary me-2"></i>Mold Removal</li>
              </ul>
              <NuxtLink to="/services/disaster-recovery" class="btn btn-outline-primary w-100 rounded-pill">View Recovery</NuxtLink>
            </div>
          </div>

          <div class="col-md-4">
            <div class="service-card shadow-sm p-4 h-100 border-top border-4 border-primary">
              <i class="bi bi-tools display-4 text-primary mb-3 d-block"></i>
              <h4 class="fw-bold">Rebuild & Remodel</h4>
              <p class="text-muted small">Full-scale reconstruction and high-end remodeling to return your home to pre-loss state.</p>
              <ul class="list-unstyled mb-4 small">
                <li><i class="bi bi-check2 text-secondary me-2"></i>Structural Reconstruction</li>
                <li><i class="bi bi-check2 text-secondary me-2"></i>Kitchen & Bath Remodels</li>
                <li><i class="bi bi-check2 text-secondary me-2"></i>Whole-Home Renovations</li>
              </ul>
              <NuxtLink to="/services/rebuild-remodel" class="btn btn-outline-primary w-100 rounded-pill">View Rebuilding</NuxtLink>
            </div>
          </div>

          <div class="col-md-4">
            <div class="service-card shadow-sm p-4 h-100 border-top border-4 border-primary">
              <i class="bi bi-stars display-4 text-primary mb-3 d-block"></i>
              <h4 class="fw-bold">Specialty Care</h4>
              <p class="text-muted small">Advanced cleaning and sanitization for air ducts, textiles, and hazardous environments.</p>
              <ul class="list-unstyled mb-4 small">
                <li><i class="bi bi-check2 text-secondary me-2"></i>Air Duct Cleaning</li>
                <li><i class="bi bi-check2 text-secondary me-2"></i>Surface Decontamination</li>
                <li><i class="bi bi-check2 text-secondary me-2"></i>Emergency Power</li>
              </ul>
              <NuxtLink to="/services/specialty-care" class="btn btn-outline-primary w-100 rounded-pill">View Specialty</NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-5 bg-light">
      <div class="container py-lg-5">
        <div class="row align-items-center mb-5">
          <div class="col-lg-7">
            <h2 class="text-primary display-5 fw-bold">The Elevated Process</h2>
            <p class="lead text-muted">
              We provide a seamless path from chaos to restoration. We coordinate with your insurance and manage every trade so you can focus on your family.
            </p>
          </div>
          <div class="col-lg-5 text-lg-end">
            <NuxtLink to="/info/resource-center" class="btn btn-primary rounded-pill px-4 py-3 fw-bold">
              Explore Our Standards
            </NuxtLink>
          </div>
        </div>

        <div class="row g-4">
          <div class="col-md-3" v-for="(step, idx) in steps" :key="idx">
            <div class="process-card bg-white shadow-sm p-4 h-100 rounded">
              <div class="step-number">{{ step.num }}</div>
              <h4 class="fw-bold mt-3">{{ step.title }}</h4>
              <p class="text-muted small mb-0">{{ step.desc }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-5 bg-primary text-white">
      <div class="container text-center py-lg-4">
        <h2 class="display-6 fw-bold mb-3">Property Managers & Business Owners</h2>
        <p class="lead mb-4 mx-auto" style="max-width: 800px;">
          Minimize downtime and protect your tenants with our <strong>First Priority Program</strong>. 
          Get a customized emergency response plan before the disaster hits.
        </p>
        <NuxtLink to="/info/priority-program" class="btn btn-secondary btn-lg rounded-pill px-5 fw-bold">
          Join the Priority Program
        </NuxtLink>
      </div>
    </section>

    <section class="py-5 bg-white overflow-hidden">
      <div class="container py-lg-5">
        <div class="row align-items-center">
          <div class="col-lg-6 mb-5 mb-lg-0 position-relative">
            <img 
              src="/ec-home-team-at-work.png" 
              alt="Construction Team at Work" 
              class="img-fluid rounded shadow-lg w-100"
              style="object-fit: cover; height: 450px;"
            >
            <div class="stats-badge shadow-lg d-none d-md-block">
              <span class="h2 fw-bold text-secondary mb-0">25+</span>
              <p class="small fw-bold mb-0 text-white text-uppercase ls-1">Years of<br>Excellence</p>
            </div>
          </div>

          <div class="col-lg-6 ps-lg-5">
            <h6 class="text-secondary fw-bold text-uppercase ls-2">The Elevated Standard</h6>
            <h2 class="text-primary display-6 fw-bold mb-4">Integrity in Every Inch</h2>
            <p class="text-muted mb-4">
              Founded on the principles of reliability and elite craftsmanship, Elevated Construction was built to help our neighbors 
              in their most difficult moments. We don't just fix buildings; we restore homes.
            </p>

            <div class="row g-4 mb-4">
              <div class="col-6 col-md-4">
                <div class="stat-item">
                  <div class="h3 fw-bold text-primary mb-0">25+</div>
                  <div class="small text-muted fw-bold text-uppercase">Years Exp.</div>
                </div>
              </div>
              <div class="col-6 col-md-4">
                <div class="stat-item">
                  <div class="h3 fw-bold text-primary mb-0">60</div>
                  <div class="small text-muted fw-bold text-uppercase">Mile Radius</div>
                </div>
              </div>
              <div class="col-6 col-md-4">
                <div class="stat-item">
                  <div class="h3 fw-bold text-primary mb-0">100%</div>
                  <div class="small text-muted fw-bold text-uppercase">Licensed</div>
                </div>
              </div>
            </div>

            <NuxtLink to="/about" class="btn btn-outline-primary rounded-pill px-4 fw-bold">
              Meet Our Leadership
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <section class="py-5 bg-light">
      <div class="container py-lg-5">
        <div class="row align-items-center">
          <div class="col-lg-5">
            <h6 class="text-secondary fw-bold text-uppercase ls-2">Rapid Dispatch</h6>
            <h2 class="text-primary display-6 fw-bold mb-4">Serving the Shenandoah Valley</h2>
            <p class="text-muted">
              Headquartered in <strong>Bridgewater, VA</strong>, our units are strategically 
              positioned to reach your property within the hour.
            </p>
            <ul class="list-unstyled row g-2 mt-4">
              <li v-for="city in cities" :key="city" class="col-6 fw-bold text-primary">
                <i class="bi bi-geo-alt-fill me-2 text-secondary small"></i>{{ city }}
              </li>
            </ul>
          </div>
          <div class="col-lg-7 ps-lg-5 mt-5 mt-lg-0">
            <div class="map-placeholder rounded shadow-lg d-flex align-items-center justify-content-center">
               <div class="text-center p-4">
                 <i class="bi bi-geo-fill display-1 text-white opacity-25"></i>
                 <h4 class="text-white fw-bold mt-3">24/7 Mobile Response Units</h4>
                 <p class="text-white opacity-75 small mb-0">Harrisonburg • Staunton • Waynesboro • Charlottesville • Lexington</p>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const appConfig = useAppConfig()

const steps = [
  { num: '01', title: 'Respond', desc: 'Our emergency units are dispatched instantly to stabilize and secure your property.' },
  { num: '02', title: 'Resolve', desc: 'We deploy industrial drying and cleaning tech to stop ongoing damage immediately.' },
  { num: '03', title: 'Restore', desc: 'Our Class A craftsmen rebuild and refinish your space to pre-loss condition.' },
  { num: '04', title: 'Return', desc: 'A final quality walkthrough ensures your total satisfaction before we hand back the keys.' }
]

const cities = ['Harrisonburg', 'Staunton', 'Waynesboro', 'Charlottesville', 'Elkton', 'Lexington']
</script>

<style scoped>
.hero-section {
  min-height: 85vh;
  background: linear-gradient(rgba(86, 8, 115, 0.75), rgba(26, 26, 26, 0.85)), 
              url('/ec-home-header.png') center/cover no-repeat;
  margin-top: -2px;
}

.service-card {
  transition: all 0.3s ease;
  background: white;
}
.service-card:hover {
  transform: translateY(-5px);
  border-color: var(--color-secondary) !important;
}

.step-number {
  font-size: 3rem;
  font-weight: 900;
  color: transparent;
  -webkit-text-stroke: 1px var(--color-secondary);
  line-height: 1;
}

.process-card:hover .step-number {
  color: var(--color-secondary);
  -webkit-text-stroke: 1px var(--color-secondary);
}

.ls-1 { letter-spacing: 1px; }
.ls-2 { letter-spacing: 2px; }

.stat-item {
  border-left: 3px solid var(--color-secondary);
  padding-left: 15px;
}

.stats-badge {
  position: absolute;
  bottom: -20px;
  right: 20px;
  background-color: var(--color-primary);
  padding: 20px 30px;
  border-radius: 8px;
  text-align: center;
  border-bottom: 5px solid var(--color-secondary);
}

.map-placeholder {
  height: 400px;
  background: linear-gradient(45deg, var(--color-primary), #4a0072);
  border: 4px solid #fff;
}
</style>