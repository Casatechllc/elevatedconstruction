<template>
  <div class="rebuild-remodel-hub">
    <section class="bg-primary text-white py-5">
      <div class="container py-lg-5">
        <div class="row align-items-center">
          <div class="col-lg-8">
            <h6 class="text-secondary fw-bold text-uppercase ls-2 mb-3">Class A Master Craftsmanship</h6>
            <h1 class="display-3 fw-bold mb-4">Rebuild, Remodel & Restore</h1>
            <p class="lead opacity-90 mb-4">
              From restoring structural integrity after a disaster to custom-tailored interior renovations. We combine technical engineering with high-end aesthetics to elevate every square inch of your property.
            </p>
            <div class="d-flex flex-wrap gap-3">
              <a 
                class="btn btn-secondary btn-lg rounded-pill px-5 fw-bold shadow"
                :href="`tel:${appConfig.phoneRaw}`"
              >
                Schedule a Consultation
            </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <Breadcrumbs class="py-3 border-bottom mb-5" />

    <section class="container mb-5">
      <div class="row g-md-5">
        <div class="col-lg-8">
          <h2 class="text-primary fw-bold mb-4">Our Construction Philosophy</h2>
          <p class="lead text-muted">
            At Elevated Construction, we believe that the bones of a building are just as important as the finishes. As a licensed Class A contractor, we manage the complex intersection of structural engineering and interior design.
          </p>

          

          <div class="row g-4 my-5">
            <div class="col-md-6" v-for="silo in rebuildSilos" :key="silo.title">
              <div class="card h-100 border-0 shadow-sm p-4 hover-up">
                <div class="mb-3 text-primary fs-2">
                  <i :class="silo.icon"></i>
                </div>
                <h5 class="fw-bold text-primary">{{ silo.title }}</h5>
                <p class="small text-muted mb-4">{{ silo.desc }}</p>
                <NuxtLink :to="silo.link" class="btn btn-outline-primary btn-sm rounded-pill mt-auto">
                  View Service
                </NuxtLink>
              </div>
            </div>
          </div>

          <div class="bg-light p-4 p-lg-5 rounded-4 border-start border-5 border-secondary mb-5">
            <h3 class="fw-bold text-primary mb-3">The "Elevated" Advantage</h3>
            <p>Unlike standard remodeling companies, we have our roots in <strong>Disaster Restoration</strong>. This gives us a unique perspective on building longevity. We don't just put up drywall; we ensure the structural cavity is clean, dry, and optimized for the life of the home.</p>
            <ul class="row list-unstyled g-3 mt-3">
              <li class="col-md-6 d-flex align-items-center">
                <i class="bi bi-check-circle-fill text-secondary me-2"></i> Comprehensive Project Management
              </li>
              <li class="col-md-6 d-flex align-items-center">
                <i class="bi bi-check-circle-fill text-secondary me-2"></i> Permitting & Code Compliance
              </li>
              <li class="col-md-6 d-flex align-items-center">
                <i class="bi bi-check-circle-fill text-secondary me-2"></i> Quality Material Sourcing
              </li>
              <li class="col-md-6 d-flex align-items-center">
                <i class="bi bi-check-circle-fill text-secondary me-2"></i> Master-Class Craftsmen
              </li>
            </ul>
          </div>

          <h3 class="h4 fw-bold text-primary mb-4">The Value of Professional Reconstruction</h3>
          <p>Whether you are rebuilding after a fire or adding a new master suite, the quality of the "hidden" work—the framing, the electrical runs, the insulation—determines your home's long-term value. We treat every project as a legacy piece.</p>
        </div>

        <div class="col-lg-4">
          <div class="sticky-top" style="top: 130px;">
            <div class="card bg-primary text-white p-4 border-0 shadow mb-4 mt-4 mt-md-0">
              <h5 class="fw-bold mb-3">Licensed & Insured</h5>
              <p class="small opacity-75">Elevated Construction is a <strong>Class A Contractor</strong> in the state of Virginia. This is the highest tier of licensing, allowing us to manage large-scale structural projects that general handymen cannot.</p>
              <hr class="opacity-25">
              <p class="small mb-0"><strong>License No:</strong> [Add License Number Here]</p>
            </div>

            <div class="card border-0 shadow-sm p-4 text-center mt-4">
              <h5 class="fw-bold text-primary mb-3">Ready to Start?</h5>
              <p class="small text-muted mb-4">Don't settle for "good enough." Let's build something exceptional together.</p>
              <button 
                class="btn btn-secondary w-100 fw-bold py-2 shadow-sm"
                data-bs-toggle="offcanvas" 
                data-bs-target="#quoteDrawer"
              >
                Get a Quote
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

const rebuildSilos = [
  { 
    title: 'Structural Reconstruction', 
    icon: 'bi-building-up', 
    desc: 'The A-Z rebuild process after a major insurance claim or structural failure.',
    link: '/services/rebuild-remodel/structural-reconstruction' 
  },
  { 
    title: 'Residential Remodeling', 
    icon: 'bi-house-heart', 
    desc: 'Transforming kitchens, bathrooms, and basements into custom living spaces.',
    link: '/services/rebuild-remodel/residential-remodeling' 
  }
  // { 
  //   title: 'Commercial Remodeling', 
  //   icon: 'bi-briefcase', 
  //   desc: 'Professional build-outs, tenant improvements, and office renovations.',
  //   link: '/services/rebuild-remodel/commercial-remodeling' 
  // }
]
</script>

<style scoped>
.hover-up { transition: transform 0.3s ease; }
.hover-up:hover { transform: translateY(-5px); }
.ls-2 { letter-spacing: 2px; }
.bg-light { background-color: #f8f9fa !important; }
</style>