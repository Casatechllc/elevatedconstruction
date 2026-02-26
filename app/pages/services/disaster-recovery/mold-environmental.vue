<template>
  <div class="service-page">
    <section class="bg-primary text-white py-5">
      <div class="container py-lg-5">
        <h1 class="display-3 fw-bold mb-3">Environmental & Mold Solutions</h1>
        <p class="lead" style="max-width: 800px;">
          Scientific fungal remediation and indoor air quality restoration. We don't just "clean" mold; we identify the moisture source, contain the spores, and neutralize the environment to IICRC S520 standards.
        </p>
        <div class="d-flex gap-3 mt-4">
          <button 
            class="btn btn-secondary btn-lg rounded-pill px-4 fw-bold shadow"
            data-bs-toggle="offcanvas" 
            data-bs-target="#quoteDrawer"
          >
            Schedule a Mold Assessment
          </button>
        </div>
      </div>
    </section>

    <Breadcrumbs class="py-3 border-bottom mb-5" />

    <section class="container mb-5">
      <div class="row g-5">
        <div class="col-lg-8">
          <h2 class="text-primary fw-bold mb-4">Total Spore Management & Air Quality</h2>
          <p class="lead text-muted">
            Mold is a biological contaminant that requires more than surface scrubbing. When mold is disturbed by amateur cleaning, it releases millions of microscopic spores and mycotoxins into your HVAC system, spreading the hazard to every room in your home.
          </p>

          

          <div class="my-5">
            <h3 class="h4 fw-bold text-primary mb-3">Our Remediation Protocol</h3>
            <p class="small text-muted mb-4">We follow a strict 5-step containment and removal process to ensure the health of your family and the integrity of your property.</p>
            
            <div class="row g-4">
              <div class="col-md-6">
                <div class="p-4 border-start border-4 border-secondary bg-light h-100 shadow-sm">
                  <h6 class="fw-bold">HEPA Negative Air Containment</h6>
                  <p class="small mb-0">We build physical barriers using 6-mil polyethylene and use air scrubbers to create negative pressure, ensuring zero cross-contamination during removal.</p>
                </div>
              </div>
              <div class="col-md-6">
                <div class="p-4 border-start border-4 border-secondary bg-light h-100 shadow-sm">
                  <h6 class="fw-bold">Abrasive Media Blasting</h6>
                  <p class="small mb-0">For deep-rooted mold on structural framing, we use soda or dry-ice blasting to remove the hyphae (roots) of the mold without damaging the wood fibers.</p>
                </div>
              </div>
              <div class="col-md-6">
                <div class="p-4 border-start border-4 border-secondary bg-light h-100 shadow-sm">
                  <h6 class="fw-bold">Antimicrobial Encapsulation</h6>
                  <p class="small mb-0">After cleaning, we apply a specialized fungicidal coating that "locks down" any remaining microscopic particulates and prevents future growth.</p>
                </div>
              </div>
              <div class="col-md-6">
                <div class="p-4 border-start border-4 border-secondary bg-light h-100 shadow-sm">
                  <h6 class="fw-bold">Post-Remediation Verification</h6>
                  <p class="small mb-0">We work with independent third-party industrial hygienists to provide air sampling and "clearance" letters, proving your home is safe.</p>
                </div>
              </div>
            </div>
          </div>

          <h3 class="h4 fw-bold text-primary mb-3">Understanding Indoor Air Quality (IAQ)</h3>
          <p>Visible mold is often just the "tip of the iceberg." Our environmental services address the hidden toxins that affect your respiratory health:</p>
          <ul class="list-group list-group-flush mb-5">
            <li class="list-group-item px-0">
              <strong>Mycotoxin Neutralization:</strong> Removing the toxic chemical byproducts produced by certain fungal species like Stachybotrys (Black Mold).
            </li>
            <li class="list-group-item px-0">
              <strong>HVAC Decontamination:</strong> Cleaning the "lungs" of your home to ensure spores aren't trapped in your ductwork or on your AC coils.
            </li>
            <li class="list-group-item px-0">
              <strong>Moisture Source Identification:</strong> Using infrared technology to find the hidden pipe leaks or humidity issues fueling the growth.
            </li>
          </ul>

          <div class="bg-primary text-white p-4 rounded-4 shadow">
            <h4 class="fw-bold mb-3">Remediation Fact: The Bleach Myth</h4>
            <p class="mb-0 small">
              <strong>Never use bleach on moldy wood or drywall.</strong> Bleach contains 90% water. While it removes the stain, the water soaks into the porous material, feeding the mold roots (hyphae). This often causes the mold to return faster and more aggressively than before.
            </p>
          </div>
        </div>

        <div class="col-lg-4">
          <div class="sticky-top" style="top: 130px;">
            <div class="card border-danger p-4 mb-4 shadow-sm">
              <h5 class="text-danger fw-bold mb-3"><i class="bi bi-exclamation-triangle-fill me-2"></i>Health & Safety Warnings</h5>
              <ul class="list-unstyled small mb-0">
                <li class="mb-3">
                  <strong>Do Not Use Fans:</strong> Pointing a household fan at mold will aerosolize millions of spores, contaminating your entire HVAC system.
                </li>
                <li class="mb-3">
                  <strong>Respiratory Risk:</strong> If you can smell a "musty" odor, you are inhaling microbial volatile organic compounds (mVOCs). Limit exposure to the area immediately.
                </li>
                <li class="mb-3">
                  <strong>Porous Disposal:</strong> Most mold-saturated insulation and ceiling tiles cannot be "cleaned" and must be removed under containment to be safe.
                </li>
                <li>
                  <strong>Asthma/Allergy Trigger:</strong> Mold is a primary trigger for chronic respiratory issues. Our HEPA-filtration removes 99.97% of these airborne triggers.
                </li>
              </ul>
            </div>

            <div class="card bg-dark text-white p-4 text-center border-0 shadow">
              <h5 class="fw-bold mb-3 text-secondary text-uppercase ls-1">Professional Verification</h5>
              <p class="small opacity-75">We provide documented ERMI and Spore Trap testing results for total peace of mind.</p>
              <button 
                class="btn btn-secondary w-100 fw-bold py-2"
                data-bs-toggle="offcanvas" 
                data-bs-target="#quoteDrawer"
              >
                Request Air Testing
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
.ls-1 { letter-spacing: 1px; }
.bg-light { background-color: #f8f9fa !important; }
.border-secondary { border-color: var(--color-secondary) !important; }
</style>