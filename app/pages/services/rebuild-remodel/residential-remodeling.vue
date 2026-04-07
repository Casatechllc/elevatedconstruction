<template>
  <div class="service-page">
    <section class="bg-primary text-white py-5">
      <div class="container py-lg-5">
        <div class="row align-items-center">
          <div class="col-lg-8">
            <h6 class="text-secondary fw-bold text-uppercase ls-2 mb-3">Elevate Your Living Space</h6>
            <h1 class="display-3 fw-bold mb-4">Residential Remodeling & Renovations</h1>
            <p class="lead opacity-90 mb-4">
              From gourmet kitchen transformations to spa-like bathroom retreats. We combine elite Class A craftsmanship with personalized design to turn your current house into your forever home.
            </p>
            <div class="d-flex flex-wrap gap-3">
              <a
                class="btn btn-secondary btn-lg rounded-pill px-5 fw-bold shadow"
                :href="`tel:${appConfig.phoneRaw}`"
              >
                Book a Design Consultation
              </a>
              <!-- <NuxtLink to="/portfolio" class="btn btn-outline-light btn-lg rounded-pill px-4">
                View Our Gallery
              </NuxtLink> -->
            </div>
          </div>
        </div>
      </div>
    </section>

    <Breadcrumbs class="py-3 border-bottom mb-5" />

    <section class="container mb-5">
      <div class="row g-md-5">
        <div class="col-lg-8">
          <h2 class="text-primary fw-bold mb-4">Investment-Grade Craftsmanship</h2>
          <p class="lead text-muted">
            A home remodel is more than an aesthetic upgrade; it’s a strategic investment in your property’s value and your family’s quality of life. At Elevated Construction, we manage every detail—from structural changes to the final hardware selection.
          </p>

          <div class="row g-3 my-5">
            <div class="col-md-6">
              <div class="position-relative">
                <img src="/kitchen-before.png" alt="Kitchen Before" class="img-fluid rounded-3 grayscale">
                <span class="badge bg-dark position-absolute top-0 start-0 m-3">THE CHALLENGE</span>
              </div>
            </div>
            <div class="col-md-6">
              <div class="position-relative">
                <img src="/kitchen-after.png" alt="Kitchen After" class="img-fluid rounded-3 shadow">
                <span class="badge bg-secondary text-primary position-absolute top-0 start-0 m-3 fw-bold">THE ELEVATED RESULT</span>
              </div>
            </div>
            <p class="text-center text-muted small mt-3"><em>Example: A dated 1990s kitchen transformed into a modern, open-concept culinary space.</em></p>
          </div>

          <h3 class="h4 fw-bold text-primary mb-4 text-uppercase ls-1">Our Remodeling Specialties</h3>
          <div class="row g-4 mb-5">
            <div class="col-md-6" v-for="item in remodelFocus" :key="item.title">
              <div class="card h-100 border-0 bg-light p-4">
                <div class="d-flex align-items-center mb-3">
                  <div class="icon-circle bg-white text-primary me-3">
                    <i :class="item.icon"></i>
                  </div>
                  <h5 class="fw-bold mb-0">{{ item.title }}</h5>
                </div>
                <p class="small text-muted mb-0">{{ item.desc }}</p>
              </div>
            </div>
          </div>

          <div class="bg-primary text-white p-4 p-lg-5 rounded-4 shadow">
            <h3 class="fw-bold mb-4">The "Elevated" Design-Build Process</h3>
            <div class="row g-4">
              <div class="col-md-4">
                <h6 class="fw-bold text-secondary">01. Discovery</h6>
                <p class="small opacity-75">We meet on-site to discuss your vision, budget, and functional needs for the space.</p>
              </div>
              <div class="col-md-4">
                <h6 class="fw-bold text-secondary">02. Design & Detail</h6>
                <p class="small opacity-75">We finalize layouts, material selections (stone, tile, flooring), and project timelines.</p>
              </div>
              <div class="col-md-4">
                <h6 class="fw-bold text-secondary">03. Execution</h6>
                <p class="small opacity-75">Our Class A team handles construction with minimal disruption to your daily life.</p>
              </div>
            </div>
          </div>
        </div>

        <div class="col-lg-4">
          <div class="sticky-top" style="top: 130px;">
            <div class="card border-0 shadow-sm p-4 mb-4 mt-4 mt-md-0">
              <h5 class="text-primary fw-bold mb-3">Maximizing Your ROI</h5>
              <p class="small text-muted">Thinking about resale value? Here are the top remodeling returns in Virginia:</p>
              <ul class="list-unstyled mb-0">
                <li class="mb-2 small d-flex align-items-center">
                  <i class="bi bi-graph-up-arrow text-secondary me-2"></i> 
                  <strong>Minor Kitchen Remodel:</strong> ~80% ROI
                </li>
                <li class="mb-2 small d-flex align-items-center">
                  <i class="bi bi-graph-up-arrow text-secondary me-2"></i> 
                  <strong>Bathroom Modernization:</strong> ~70% ROI
                </li>
                <li class="small d-flex align-items-center">
                  <i class="bi bi-graph-up-arrow text-secondary me-2"></i> 
                  <strong>Finished Basements:</strong> ~65% ROI
                </li>
              </ul>
            </div>

            <div class="card bg-dark text-white p-4 border-0 shadow">
              <h5 class="fw-bold mb-3 text-secondary">Ready for a Change?</h5>
              <p class="small opacity-75 mb-4">Don't settle for "standard." Experience the difference of high-end craftsmanship and local reliability.</p>
              <button 
                class="btn btn-secondary w-100 fw-bold py-3 shadow-sm"
                data-bs-toggle="offcanvas" 
                data-bs-target="#quoteDrawer"
              >
                Request a Consultation
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

const remodelFocus = [
  { title: 'Kitchen Remodeling', icon: 'bi-cup-hot-fill', desc: 'Custom cabinetry, waterfall islands, and integrated smart appliances designed for the modern chef.' },
  { title: 'Bathroom Suites', icon: 'bi-water', desc: 'Walk-in steam showers, soaking tubs, and heated flooring for a private, spa-like sanctuary.' },
  { title: 'Basement Finishing', icon: 'bi-house-down-fill', desc: 'Transforming cold storage into home theaters, guest suites, or the ultimate entertainment lounge.' },
  { title: 'Home Additions', icon: 'bi-plus-square-fill', desc: 'Seamlessly expanding your footprint with new master suites or sunrooms that look original to the home.' }
]
</script>

<style scoped>
.grayscale { filter: grayscale(100%); opacity: 0.7; }
.ls-1 { letter-spacing: 1px; }
.ls-2 { letter-spacing: 2px; }
.icon-circle {
  width: 45px;
  height: 45px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  box-shadow: 0 4px 10px rgba(0,0,0,0.05);
}
</style>