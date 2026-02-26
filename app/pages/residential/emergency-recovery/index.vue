<template>
  <div class="emergency-recovery-hub">
    <section class="bg-primary text-white py-5 position-relative border-bottom border-secondary border-4">
      <div class="container py-lg-4">
        <div class="row align-items-center">
          <div class="col-lg-8">
            <span class="badge bg-alert text-white px-3 py-2 rounded-pill mb-3 pulse-subtle">
              24/7 DISPATCH ACTIVE
            </span>
            <h1 class="display-3 fw-bold mb-3">Emergency Recovery</h1>
            <p class="lead opacity-75 mb-0" style="max-width: 800px;">
              Rapid-response property restoration for homeowners in crisis. When minutes count, Elevated Construction provides the technical expertise to stabilize your property and begin the recovery process immediately.
            </p>
          </div>
        </div>
      </div>
    </section>

    <Breadcrumbs class="mb-4 text-white-50" />

    <section class="py-5 bg-white">
      <div class="container py-lg-5">
        <div class="row g-4">
          <div v-for="service in emergencyServices" :key="service.title" class="col-md-6 col-xl-4">
            <div class="card h-100 border-0 shadow-sm hover-lift overflow-hidden">
              <div class="row g-0 h-100">
                <div class="col-12 p-4">
                  <div class="d-flex align-items-center mb-3">
                    <div class="icon-square bg-light-purple text-primary me-3">
                      <i :class="service.icon"></i>
                    </div>
                    <h4 class="fw-bold mb-0 text-primary">{{ service.title }}</h4>
                  </div>
                  <p class="text-muted small mb-4">{{ service.description }}</p>
                  
                  <ul class="list-unstyled mb-4 small">
                    <li v-for="feature in service.features" :key="feature" class="mb-2">
                      <i class="bi bi-check2 text-secondary me-2"></i>{{ feature }}
                    </li>
                  </ul>

                  <NuxtLink :to="service.link" class="btn btn-outline-primary rounded-pill w-100 fw-bold">
                    View Recovery Process
                  </NuxtLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="bg-light py-5">
      <div class="container py-4 text-center">
        <div class="card bg-primary text-white p-5 shadow-lg border-0 rounded-4 overflow-hidden position-relative">
          <div class="position-relative z-1">
            <h2 class="fw-bold mb-3">Facing a property emergency?</h2>
            <p class="lead opacity-75 mb-4 mx-auto" style="max-width: 600px;">
              Our crews are stationed throughout the Shenandoah Valley and ready to deploy with industrial-grade extraction and cleaning equipment.
            </p>
            <div class="d-flex flex-column flex-md-row justify-content-center gap-3">
              <a :href="`tel:${appConfig.phoneRaw}`" class="btn btn-secondary btn-lg px-5 rounded-pill fw-bold text-primary shadow">
                <i class="bi bi-telephone-fill me-2"></i> {{ appConfig.phoneNumber }}
              </a>
              <button class="btn btn-outline-light btn-lg px-5 rounded-pill fw-bold" data-bs-toggle="offcanvas" data-bs-target="#quoteDrawer">
                Request Emergency Dispatch
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const appConfig = useAppConfig()
const emergencyServices = [
  {
    title: 'Water & Flood',
    icon: 'bi-droplet-fill',
    link: '/residential/emergency-recovery/water-recovery',
    description: 'Immediate extraction and structural drying to prevent mold growth and rot.',
    features: ['IICRC Certified Extraction', 'LGR Dehumidification', 'Moisture Mapping']
  },
  {
    title: 'Fire & Smoke',
    icon: 'bi-fire',
    link: '/residential/emergency-recovery/fire-smoke-recovery',
    description: 'Soot removal and structural cleaning to salvage your home after fire damage.',
    features: ['HEPA Air Scrubbing', 'Soot Neutralization', 'Deodorization']
  },
  {
    title: 'Mold Solutions',
    icon: 'bi-patch-exclamation-fill',
    link: '/residential/emergency-recovery/mold-remediation',
    description: 'Safe containment and removal of environmental hazards and fungal growth.',
    features: ['Containment Barriers', 'Antimicrobial Treatment', 'Post-Testing']
  },
  {
    title: 'Board-Up / Tarping',
    icon: 'bi-shield-shaded',
    link: '/residential/emergency-recovery/emergency-securing',
    description: 'Securing structural openings to prevent further damage from weather or intruders.',
    features: ['Window & Door Board-up', 'Roof Tarping', 'Site Stabilization']
  },
  {
    title: 'Biohazard Recovery',
    icon: 'bi-biohazard',
    link: '/residential/emergency-recovery/biohazard-cleanup',
    description: 'Professional, discreet cleaning of trauma scenes and biological contaminants.',
    features: ['OSHA Compliance', 'Discreet Service', 'Complete Sanitization']
  }
]
</script>

<style scoped>
.hover-lift {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.hover-lift:hover {
  transform: translateY(-8px);
  box-shadow: 0 1rem 3rem rgba(0,0,0,0.12) !important;
}
.icon-square {
  width: 50px;
  height: 50px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.4rem;
}
.bg-light-purple {
  background-color: rgba(86, 8, 115, 0.08);
}
.bg-alert {
  background-color: var(--color-alert);
}
.pulse-subtle {
  animation: pulse-op 2s infinite;
}
@keyframes pulse-op {
  0% { opacity: 1; }
  50% { opacity: 0.7; }
  100% { opacity: 1; }
}
</style>