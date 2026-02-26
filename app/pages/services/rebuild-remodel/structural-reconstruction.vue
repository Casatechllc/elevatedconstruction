<template>
  <div class="service-page">
    <section class="bg-primary text-white py-5">
      <div class="container py-lg-5">
        <h1 class="display-3 fw-bold mb-3">Structural Reconstruction</h1>
        <p class="lead" style="max-width: 800px;">
          Seamlessly transitioning from disaster to dream home. As a Class A Contractor, we handle the complex engineering and high-end finishing required to rebuild your property better than it was before.
        </p>
        <div class="d-flex gap-3 mt-4">
          <button 
            class="btn btn-secondary btn-lg rounded-pill px-4 fw-bold shadow"
            data-bs-toggle="offcanvas" 
            data-bs-target="#quoteDrawer"
          >
            Request a Rebuild Estimate
          </button>
        </div>
      </div>
    </section>

    <Breadcrumbs class="py-3 border-bottom mb-5" />

    <section class="container mb-5">
      <div class="row g-5">
        <div class="col-lg-8">
          <h2 class="text-primary fw-bold mb-4">A Single Source for Total Recovery</h2>
          <p class="lead text-muted">
            The hardest part of a property loss is managing multiple contractors. At Elevated Construction, we eliminate the stress by managing the entire project—from the initial structural framing to the final coat of paint.
          </p>

          

          <div class="my-5 p-4 bg-light rounded-4 border-start border-4 border-primary">
            <h4 class="fw-bold text-primary">Why Choose a "Full-Service" Restorer?</h4>
            <p>Standard contractors often don't understand the unique requirements of a "loss site." Because we handle the mitigation (drying/cleaning) ourselves, our rebuild team knows exactly what’s happening behind your walls. This prevents hidden mold or odor issues from being "covered up" by new drywall.</p>
          </div>

          <h3 class="h4 fw-bold text-primary mb-3">Our Reconstruction Capabilities</h3>
          <div class="row g-4 mb-5">
            <div class="col-md-6">
              <div class="d-flex align-items-start">
                <i class="bi bi-hammer text-secondary fs-3 me-3"></i>
                <div>
                  <h6 class="fw-bold mb-1">Structural Framing</h6>
                  <p class="small text-muted">Expert repair of load-bearing walls, roof trusses, and floor joists compromised by fire or impact.</p>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="d-flex align-items-start">
                <i class="bi bi-layers text-secondary fs-3 me-3"></i>
                <div>
                  <h6 class="fw-bold mb-1">Interior Finishing</h6>
                  <p class="small text-muted">Seamless drywall integration, custom trim-work, and premium flooring installations.</p>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="d-flex align-items-start">
                <i class="bi bi-lightning-charge text-secondary fs-3 me-3"></i>
                <div>
                  <h6 class="fw-bold mb-1">Mechanical Systems</h6>
                  <p class="small text-muted">Full-scale electrical, plumbing, and HVAC updates to meet current Virginia building codes.</p>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="d-flex align-items-start">
                <i class="bi bi-palette text-secondary fs-3 me-3"></i>
                <div>
                  <h6 class="fw-bold mb-1">Exterior Restoration</h6>
                  <p class="small text-muted">Roofing, siding, and window replacements that restore your home’s curb appeal and energy efficiency.</p>
                </div>
              </div>
            </div>
          </div>

          <div class="bg-dark text-white p-4 rounded-4 shadow-lg mb-5">
            <div class="row align-items-center">
              <div class="col-md-7">
                <h4 class="fw-bold text-secondary">The Transformation Journey</h4>
                <p class="small opacity-75">We document every stage of your rebuild. Our clients love seeing the progress from a charred or flooded shell to a modern, beautiful living space.</p>
              </div>
              <div class="col-md-5 text-md-end">
                <NuxtLink to="/portfolio" class="btn btn-outline-light rounded-pill px-4">See Our Work</NuxtLink>
              </div>
            </div>
          </div>
        </div>

        <div class="col-lg-4">
          <div class="sticky-top" style="top: 130px;">
            <div class="card bg-white border-0 shadow-sm p-4 mb-4">
              <h5 class="text-primary fw-bold mb-3">Rebuild Insight</h5>
              <p class="small text-muted"><strong>Did you know?</strong> Most insurance policies include a "Code Upgrade" coverage. This means if we have to rebuild, we can often upgrade your outdated wiring or insulation to modern standards at no extra cost to you.</p>
              <hr />
              <p class="small text-muted mb-0"><strong>Pro-Tip:</strong> Since the walls are already open during a restoration rebuild, this is the perfect (and most affordable) time to add extra outlets, recessed lighting, or soundproofing.</p>
            </div>

            <div class="card bg-secondary text-primary p-4 text-center border-0 shadow">
              <h5 class="fw-bold mb-2">Ready to rebuild?</h5>
              <p class="small mb-4">Let’s turn your property loss into a fresh start. We handle the adjusters; you choose the finishes.</p>
              <button 
                class="btn btn-primary w-100 fw-bold py-2 shadow-sm"
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
</script>

<style scoped>
.bg-light { background-color: #f8f9fa !important; }
.hover-up { transition: transform 0.3s ease; }
.hover-up:hover { transform: translateY(-5px); }
</style>