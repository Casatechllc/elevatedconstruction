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
              and premium remodeling services. When disaster strikes, we rise to the occasion.
            </p>
            <div class="d-flex flex-wrap gap-3">
              <button 
                class="btn btn-quote-trigger btn-lg rounded-pill px-5"
                data-bs-toggle="offcanvas" 
                data-bs-target="#quoteDrawer"
              >
                Start Your Project
              </button>
              <a href="tel:5550000000" class="btn btn-outline-light btn-lg rounded-pill px-4">
                Call for Emergency
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div class="bg-light py-4 border-bottom">
      <div class="container">
        <div class="row align-items-center text-center g-4">
          <div class="col-6 col-md-3 fw-bold text-muted">Licensed & Insured</div>
          <div class="col-6 col-md-3 fw-bold text-muted">24/7 Response</div>
          <div class="col-6 col-md-3 fw-bold text-muted">IICRC Certified</div>
          <div class="col-6 col-md-3 fw-bold text-muted">Insurance Approved</div>
        </div>
      </div>
    </div>

    <section class="py-5 bg-white">
      <div class="container py-lg-5">
        <div class="text-center mb-5">
          <h2 class="text-primary h1">Our Core Services</h2>
          <div class="mx-auto bg-secondary mt-2" style="height: 4px; width: 60px;"></div>
        </div>
        
        <div class="row g-4">
          <ServiceCard 
            title="Water Restoration" 
            desc="Flood extraction, drying, and structural repair."
            icon="bi-droplet-fill"
          />
          <ServiceCard 
            title="Fire & Smoke" 
            desc="Comprehensive cleaning and odor neutralization."
            icon="bi-fire"
          />
          <ServiceCard 
            title="Remodeling" 
            desc="Kitchens, bathrooms, and complete home transformations."
            icon="bi-house-heart"
          />
          <ServiceCard 
            title="Commercial" 
            desc="Large scale mitigation and tenant build-outs."
            icon="bi-building"
          />
        </div>
      </div>
    </section>

    <section class="py-5 bg-light">
      <div class="container py-lg-5">
        <div class="row align-items-center mb-5">
          <div class="col-lg-6">
            <h2 class="text-primary display-5 fw-bold">Our Process</h2>
            <p class="lead text-muted">
              From the first call to the final nail, we provide a seamless path to restoration. 
              We handle the chaos so you can focus on getting back to normal.
            </p>
          </div>
          <div class="col-lg-6 text-lg-end">
            <button class="btn btn-primary rounded-pill px-4" data-bs-toggle="offcanvas" data-bs-target="#quoteDrawer">
              Learn More About Our Standards
            </button>
          </div>
        </div>

        <div class="row g-4">
          <div class="col-md-3">
            <div class="process-card">
              <div class="step-number">01</div>
              <h4 class="fw-bold mt-3">Respond</h4>
              <p class="text-muted small">Our emergency team is dispatched within minutes, arriving ready to stabilize the scene.</p>
            </div>
          </div>
          <div class="col-md-3">
            <div class="process-card">
              <div class="step-number">02</div>
              <h4 class="fw-bold mt-3">Resolve</h4>
              <p class="text-muted small">We deploy industrial-grade tools to stop ongoing damage and secure your property.</p>
            </div>
          </div>
          <div class="col-md-3">
            <div class="process-card">
              <div class="step-number">03</div>
              <h4 class="fw-bold mt-3">Restore</h4>
              <p class="text-muted small">Our certified craftsmen rebuild and refinish your space to its pre-loss condition.</p>
            </div>
          </div>
          <div class="col-md-3">
            <div class="process-card">
              <div class="step-number">04</div>
              <h4 class="fw-bold mt-3">Return</h4>
              <p class="text-muted small">We walk you through the finished results as you move back into your restored property.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <InsuranceBar />

    <section class="py-5 overflow-hidden">
  <div class="container py-lg-5">
    <div class="row align-items-center">
      <div class="col-lg-6 mb-5 mb-lg-0 position-relative">
        <img 
          src="https://images.unsplash.com/photo-1581094288338-2314dddb7bc3?auto=format&fit=crop&q=80&w=800" 
          alt="Construction Team at Work" 
          class="img-fluid rounded shadow-lg w-100"
          style="object-fit: cover; height: 450px;"
        >
        <div class="stats-badge shadow-lg d-none d-md-block">
          <span class="h2 fw-bold text-secondary mb-0">25+</span>
          <p class="small fw-bold mb-0 text-white">YEARS OF<br>SERVICE</p>
        </div>
      </div>

      <div class="col-lg-6 ps-lg-5">
        <h6 class="text-secondary fw-bold text-uppercase ls-2">The Elevated Standard</h6>
        <h2 class="text-primary display-6 fw-bold mb-4">Integrity in Every Inch</h2>
        <p class="text-muted mb-4">
          Founded on the principles of excellence, Elevated Construction was built to help our neighbors 
          in their most difficult moments. We don't just fix buildings; we restore peace of mind.
        </p>

        <div class="row g-4 mb-4">
          <div class="col-6 col-md-4">
            <div class="stat-item">
              <div class="h3 fw-bold text-primary mb-0">25+</div>
              <div class="small text-muted fw-bold text-uppercase">Years Experience</div>
            </div>
          </div>
          <div class="col-6 col-md-4">
            <div class="stat-item">
              <div class="h3 fw-bold text-primary mb-0">60+</div>
              <div class="small text-muted fw-bold text-uppercase">Miles Around VA</div>
            </div>
          </div>
          <div class="col-6 col-md-4">
            <div class="stat-item">
              <div class="h3 fw-bold text-primary mb-0">100%</div>
              <div class="small text-muted fw-bold text-uppercase">On Time</div>
            </div>
          </div>
        </div>

        <NuxtLink to="/about" class="btn btn-outline-primary rounded-pill px-4">
          Meet The Team
        </NuxtLink>
      </div>
    </div>
  </div>
</section>

<section class="py-5 bg-white">
  <div class="container py-lg-5">
    <div class="row align-items-center">
      <div class="col-lg-5">
        <h6 class="text-secondary fw-bold text-uppercase ls-2">Where We Work</h6>
        <h2 class="text-primary display-6 fw-bold mb-4">Serving the Shenandoah Valley</h2>
        <p class="text-muted">
          Based in <strong>Bridgewater, VA</strong>, our emergency response units are strategically 
          positioned to reach your property within the hour. We proudly serve a 60-mile radius.
        </p>
        <ul class="list-unstyled row g-2 mt-4">
          <li class="col-6 fw-bold text-primary"><i class="bi bi-geo-alt-fill me-2 text-secondary"></i>Harrisonburg</li>
          <li class="col-6 fw-bold text-primary"><i class="bi bi-geo-alt-fill me-2 text-secondary"></i>Staunton</li>
          <li class="col-6 fw-bold text-primary"><i class="bi bi-geo-alt-fill me-2 text-secondary"></i>Waynesboro</li>
          <li class="col-6 fw-bold text-primary"><i class="bi bi-geo-alt-fill me-2 text-secondary"></i>Charlottesville</li>
          <li class="col-6 fw-bold text-primary"><i class="bi bi-geo-alt-fill me-2 text-secondary"></i>Elkton</li>
          <li class="col-6 fw-bold text-primary"><i class="bi bi-geo-alt-fill me-2 text-secondary"></i>Lexington</li>
        </ul>
      </div>
      <div class="col-lg-7 ps-lg-5 mt-5 mt-lg-0">
        <div class="map-placeholder rounded shadow-sm d-flex align-items-center justify-content-center">
           <div class="text-center">
             <i class="bi bi-map-fill display-1 text-light opacity-50"></i>
             <p class="text-white fw-bold">60-MILE RADIUS AROUND BRIDGEWATER</p>
           </div>
        </div>
      </div>
    </div>
  </div>
</section>

  </div>
</template>

<style scoped>
.hero-section {
  min-height: 85vh;
  /* Add a placeholder construction image with an overlay */
  background: linear-gradient(rgba(86, 8, 115, 0.7), rgba(26, 26, 26, 0.8)), 
              url('https://images.unsplash.com/photo-1503387762-592dea58ef23?auto=format&fit=crop&q=80&w=1600') center/cover no-repeat;
}

.text-secondary {
  color: var(--color-secondary) !important;
}

.opacity-90 {
  opacity: 0.9;
}

.step-number {
  font-family: var(--font-family-headings);
  font-size: 3rem;
  font-weight: 900;
  color: transparent;
  -webkit-text-stroke: 1px var(--color-secondary);
  line-height: 1;
  margin-bottom: var(--spacing-sm);
}

.process-card {
  position: relative;
  padding: var(--spacing-md);
  transition: var(--transition-default);
}

.process-card:hover .step-number {
  color: var(--color-secondary);
  -webkit-text-stroke: 1px var(--color-secondary);
}

.ls-2 {
  letter-spacing: 2px;
}

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
  border-radius: var(--border-radius);
  text-align: center;
  border-bottom: 5px solid var(--color-secondary);
}

.stat-item .h3 {
  font-family: var(--font-family-headings);
  line-height: 1;
}

.map-placeholder {
  height: 400px;
  background: linear-gradient(45deg, var(--color-primary), #6a1b9a);
  border: 8px solid #f8f9fa;
}

/* Ensure mobile stacking looks clean */
@media (max-width: 768px) {
  .stat-item {
    margin-bottom: 10px;
  }
}
</style>