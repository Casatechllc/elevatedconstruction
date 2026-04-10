<template>
  <div class="disaster-recovery-hub">
    <section class="bg-primary text-white py-5">
      <div class="container py-lg-4">
        <h1 class="display-3 fw-bold mb-3">Disaster Recovery</h1>
        <p class="lead" style="max-width: 750px;">
          Rapid stabilization and scientific mitigation. We operate 24/7 to protect your property from the cascading effects of water, fire, and storm damage.
        </p>
      </div>
    </section>

    <Breadcrumbs class="py-3 border-bottom mb-5" />

    <section class="container mb-5">
      <div class="row g-5">
        <div class="col-lg-8">
          <div class="row g-4 mb-5">
            <div class="col-md-6" v-for="service in services" :key="service.title">
              <div class="card h-100 border-0 shadow-sm p-4 hover-up">
                <h4 class="fw-bold text-primary">{{ service.title }}</h4>
                <p class="small text-muted">{{ service.desc }}</p>
                <NuxtLink :to="service.link" class="btn btn-link text-primary p-0 fw-bold text-decoration-none">
                  Learn Technical Process →
                </NuxtLink>
              </div>
            </div>
          </div>

          <div class="bg-light p-4 p-lg-5 rounded-4">
            <h2 class="text-primary fw-bold">The Critical Window: The First 24-48 Hours</h2>
            <p>In disaster recovery, time is the primary variable of cost. After 48 hours, clean water becomes "Grey Water" (Category 2), and soot begins to etch into glass and metal surfaces permanently. Our goal is <strong>Stabilization</strong>.</p>
            
            <h5 class="fw-bold mt-4">Recovery Facts:</h5>
            <ul class="list-unstyled">
              <li class="mb-2">● <strong>Secondary Damage:</strong> Unchecked humidity leads to mold growth in as little as 24 hours.</li>
              <li class="mb-2">● <strong>Structural Integrity:</strong> Saturated drywall loses 60% of its structural strength.</li>
              <li class="mb-2">● <strong>Corrosive Soot:</strong> Fire byproducts are highly acidic and will "pitting" appliances if not neutralized.</li>
            </ul>

            <div class="card border-danger p-4 mt-4">
              <h5 class="text-danger fw-bold"><i class="bi bi-exclamation-triangle-fill me-2"></i>Critical Warnings</h5>
              <p class="small mb-2"><strong>Do not enter:</strong> If standing water touches electrical outlets.</p>
              <p class="small mb-2"><strong>Do not clean:</strong> Fire soot with household vacuums; you will blow particulates back into the air.</p>
              <p class="small"><strong>Do not wait:</strong> Insurance companies require "Immediate Mitigation" to honor your claim.</p>
            </div>
          </div>
        </div>

        <div class="col-lg-4">
          <SidebarRestoration />
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const services = [
  { title: 'Water & Flood', desc: 'Extraction and LGR dehumidification for Category 1-3 water losses.', link: '/services/disaster-recovery/water-flood' },
  { title: 'Fire & Smoke', desc: 'Structural cleaning and molecular-level deodorization.', link: '/services/disaster-recovery/fire-smoke' },
  { title: 'Storm & Wind', desc: 'Emergency board-up, tarping, and tree removal services.', link: '/services/disaster-recovery/storm-wind' },
  { title: 'Mold & Environmental', desc: 'HEPA-containment and scientific fungal remediation.', link: '/services/disaster-recovery/mold-environmental' }
]
</script>