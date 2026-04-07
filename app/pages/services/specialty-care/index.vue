<template>
  <div class="specialty-care-hub">
    <section class="bg-primary text-white py-5">
      <div class="container py-lg-5">
        <div class="row align-items-center">
          <div class="col-lg-8">
            <h6 class="text-secondary fw-bold text-uppercase ls-2 mb-3">Precision Environmental Care</h6>
            <h1 class="display-3 fw-bold mb-4">Specialty Cleaning & Sanitization</h1>
            <p class="lead opacity-90 mb-4">
              Advanced indoor air quality, biohazard remediation, and forensic-level surface cleaning. We utilize hospital-grade technology to ensure your property is not just clean, but clinically safe.
            </p>
            <div class="d-flex flex-wrap gap-3">
              <button 
                class="btn btn-secondary btn-lg rounded-pill px-5 fw-bold shadow"
                data-bs-toggle="offcanvas" 
                data-bs-target="#quoteDrawer"
              >
                Request Specialty Service
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <Breadcrumbs class="py-3 border-bottom mb-5" />

    <section class="container mb-5">
      <div class="row g-md-5">
        <div class="col-lg-8">
          <h2 class="text-primary fw-bold mb-4">The Science of Deep Cleaning</h2>
          <p class="lead text-muted">
            Standard janitorial services often miss what truly matters: the microscopic particulates and biological hazards that affect your health. Elevated Construction uses the same rigorous standards in specialty cleaning as we do in disaster restoration.
          </p>

          <div class="row g-4 my-5">
            <div class="col-md-6" v-for="specialty in specialties" :key="specialty.title">
              <div class="card h-100 border-0 shadow-sm p-4 hover-up">
                <div class="fs-1 text-primary mb-3">
                  <i :class="specialty.icon"></i>
                </div>
                <h5 class="fw-bold text-primary">{{ specialty.title }}</h5>
                <p class="small text-muted mb-4">{{ specialty.desc }}</p>
                <NuxtLink :to="specialty.link" class="btn btn-outline-primary btn-sm rounded-pill mt-auto">
                  Learn Technical Process
                </NuxtLink>
              </div>
            </div>
          </div>

          <div class="bg-light p-4 p-lg-5 rounded-4 border-start border-5 border-primary mb-5">
            <h3 class="fw-bold text-primary mb-3">Medical-Grade Equipment Standards</h3>
            <p>Our Specialty Care division operates with a "Zero Cross-Contamination" policy. We utilize advanced filtration and molecular-level agents that far exceed consumer-grade products:</p>
            <ul class="row list-unstyled g-3 mt-3">
              <li class="col-md-6 d-flex align-items-center small">
                <i class="bi bi-shield-check text-secondary me-2"></i> <strong>HEPA 500 Filtration:</strong> Captures 99.97% of particulates down to 0.3 microns.
              </li>
              <li class="col-md-6 d-flex align-items-center small">
                <i class="bi bi-shield-check text-secondary me-2"></i> <strong>ULV Fogging:</strong> Distributes disinfectants into hard-to-reach structural voids.
              </li>
              <li class="col-md-6 d-flex align-items-center small">
                <i class="bi bi-shield-check text-secondary me-2"></i> <strong>EPA-Registered Agents:</strong> Non-toxic, hospital-grade biocides and virucides.
              </li>
              <li class="col-md-6 d-flex align-items-center small">
                <i class="bi bi-shield-check text-secondary me-2"></i> <strong>Adenosine Triphosphate (ATP) Testing:</strong> Scientific verification of surface cleanliness.
              </li>
            </ul>
          </div>

          <h3 class="h4 fw-bold text-primary mb-4">Maintaining Property Value & Health</h3>
          <p>Properly maintaining air ducts and high-end surfaces isn't just about appearances—it's about extending the lifespan of your mechanical systems and ensuring the respiratory health of everyone inside. From removing historical allergens to remediating trauma scenes, we handle the jobs that require extreme discretion and technical expertise.</p>
        </div>

        <div class="col-lg-4">
          <div class="sticky-top" style="top: 130px;">
            <div class="card border-0 shadow-sm p-4 mb-4 bg-primary text-white mt-4 mt-md-0">
              <h5 class="fw-bold mb-3 text-secondary">A Healthier Environment</h5>
              <p class="small mb-0"><strong>Indoor Air Quality (IAQ)</strong> is one of the top five environmental risks to public health. Our specialized HVAC and surface cleaning can significantly reduce asthma triggers and seasonal allergy symptoms in your home or office.</p>
            </div>

            <div class="card border-0 shadow-sm p-4 text-center border-top border-5 border-secondary">
              <h5 class="fw-bold text-primary mb-3">Need a Deep Clean?</h5>
              <p class="small text-muted mb-4">From one-time air duct purges to forensic-level sanitization, our team is ready to respond.</p>
              <button 
                class="btn btn-secondary w-100 fw-bold py-2 shadow-sm"
                data-bs-toggle="offcanvas" 
                data-bs-target="#quoteDrawer"
              >
                Book Specialty Service
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

const specialties = [
  { 
    title: 'Air Duct & HVAC', 
    icon: 'bi-wind', 
    desc: 'Removing dust, mold spores, and debris from your systems to improve efficiency and air quality.',
    link: '/services/specialty-care/air-duct-cleaning' 
  },
  { 
    title: 'Specialty Surfaces', 
    icon: 'bi-stars', 
    desc: 'Deep cleaning and sealing for tile, grout, natural stone, and high-performance textiles.',
    link: '/services/specialty-care/surface-cleaning' 
  },
  { 
    title: 'Emergency Power', 
    icon: 'bi-lightning-charge', 
    desc: 'Temporary power solutions and logistics support for properties during critical outages.',
    link: '/services/specialty-care/emergency-power' 
  }
]
</script>

<style scoped>
.hover-up { transition: transform 0.3s ease; }
.hover-up:hover { transform: translateY(-5px); border-color: var(--color-primary) !important; }
.ls-2 { letter-spacing: 2px; }
.bg-light { background-color: #f8f9fa !important; }
</style>