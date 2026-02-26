<template>
  <div class="service-page">
    <section class="bg-primary text-white py-5">
      <div class="container py-lg-4">
        <h1 class="display-3 fw-bold mb-3">Full-Service Reconstruction</h1>
        <p class="lead" style="max-width: 750px;">
          Turning a house back into a home. Our reconstruction division manages every trade required to rebuild your property after fire, water, or storm damage.
        </p>
      </div>
    </section>

    <Breadcrumbs class="py-3 border-bottom mb-5" />

    <section class="container mb-5">
      <div class="row g-5">
        <div class="col-lg-8">
          <h2 class="text-primary fw-bold mb-4">Total Structural Mastery</h2>
          <p>
            Rebuilding after a disaster is significantly more complex than standard new construction. You are dealing with compromised materials, odors, and insurance requirements. We specialize in the "Hard Stuff"—ensuring the structural integrity of your home is never in question.
          </p>

          

          <h3 class="h4 fw-bold text-primary mt-5 mb-4">Our Reconstruction Capabilities</h3>
          <div class="row g-4">
            <div class="col-md-6">
              <h5 class="fw-bold"><i class="bi bi-check2-square text-secondary me-2"></i>Structural Framing</h5>
              <p class="small text-muted">Repairing and replacing load-bearing members, trusses, and joists damaged by fire or rot.</p>
            </div>
            <div class="col-md-6">
              <h5 class="fw-bold"><i class="bi bi-check2-square text-secondary me-2"></i>MEP Restoration</h5>
              <p class="small text-muted">Full Mechanical, Electrical, and Plumbing system updates to meet current Bridgewater building codes.</p>
            </div>
            <div class="col-md-6">
              <h5 class="fw-bold"><i class="bi bi-check2-square text-secondary me-2"></i>Interior Finishes</h5>
              <p class="small text-muted">Expert drywall, trim carpentry, and custom flooring to match your existing style perfectly.</p>
            </div>
            <div class="col-md-6">
              <h5 class="fw-bold"><i class="bi bi-check2-square text-secondary me-2"></i>Insurance Liaising</h5>
              <p class="small text-muted">We provide Xactimate estimates and photo documentation to help your adjuster approve the full scope of work.</p>
            </div>
          </div>
        </div>

        <div class="col-lg-4">
          <div class="card bg-light border-0 p-4 sticky-top" style="top: 130px;">
            <h5 class="fw-bold text-primary mb-3">From Demo to Decor</h5>
            <p class="small">We handle the headache of scheduling multiple subcontractors. One project manager. One timeline. One high standard.</p>
            <hr>
            <p class="fw-bold mb-2">Ready to rebuild?</p>
            <a :href="`tel:${appConfig.phoneRaw}`" class="btn btn-primary w-100 py-2 mb-3">
              Call {{ appConfig.phoneNumber }}
            </a>
            <button class="btn btn-outline-primary w-100" data-bs-toggle="offcanvas" data-bs-target="#quoteDrawer">
              Get an Estimate
            </button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const appConfig = useAppConfig()
</script>