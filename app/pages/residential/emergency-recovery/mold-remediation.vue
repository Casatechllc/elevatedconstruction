<template>
  <div class="service-page">
    <section class="bg-primary text-white py-5">
      <div class="container py-lg-4">
        <h1 class="display-3 fw-bold mb-3">Environmental & Mold Solutions</h1>
        <p class="lead" style="max-width: 750px;">
          Advanced fungal remediation and air quality control. We don't just remove mold; we identify and solve the moisture source to ensure it never returns.
        </p>
      </div>
    </section>

    <Breadcrumbs class="py-3 border-bottom mb-5" />

    <section class="container mb-5">
      <div class="row g-5">
        <div class="col-lg-8">
          <h2 class="text-primary fw-bold mb-4">Scientific Mold Remediation</h2>
          <p class="lead text-muted">
            Mold spores are naturally occurring, but when they find moisture inside your Bridgewater home, they can quickly become a health hazard and a structural threat.
          </p>
          
          <div class="my-5">
            <h3 class="h4 fw-bold text-primary mb-3">Beyond Visual Cleaning</h3>
            <p>
              Wiping away visible mold is only a temporary fix. Our IICRC-compliant process focuses on <strong>Total Spore Management</strong>. Using HEPA-filtered vacuuming and antimicrobial fogging, we address both the surface growth and the airborne spores that the human eye cannot see.
            </p>
          </div>

          <div class="row g-4 mb-5">
            <div class="col-md-6">
              <div class="card h-100 border-0 bg-light p-4">
                <div class="text-secondary mb-3"><i class="bi bi-shield-lock-fill fs-2"></i></div>
                <h5 class="fw-bold">Negative Air Containment</h5>
                <p class="small mb-0">We use physical barriers and negative air pressure machines to ensure mold spores do not drift into unaffected areas of your home during the cleaning process.</p>
              </div>
            </div>
            <div class="col-md-6">
              <div class="card h-100 border-0 bg-light p-4">
                <div class="text-secondary mb-3"><i class="bi bi-moisture fs-2"></i></div>
                <h5 class="fw-bold">Moisture Source Correction</h5>
                <p class="small mb-0">Our team uses infrared cameras to find the pipe leaks, roof failures, or humidity issues fueling the growth, ensuring a permanent solution.</p>
              </div>
            </div>
          </div>

          <h3 class="h4 fw-bold text-primary mb-3">Our Remediation Standards</h3>
          <p>We follow a strict protocol to ensure your home meets post-remediation air quality standards:</p>
          <ul class="list-unstyled">
            <li class="d-flex mb-3">
              <i class="bi bi-arrow-right-circle-fill text-secondary me-3 mt-1"></i>
              <span><strong>HEPA Air Scrubbing:</strong> Continuous air filtration to capture microscopic spores as small as 0.3 microns.</span>
            </li>
            <li class="d-flex mb-3">
              <i class="bi bi-arrow-right-circle-fill text-secondary me-3 mt-1"></i>
              <span><strong>Content Decontamination:</strong> Expert cleaning of furniture, clothing, and keepsakes affected by mold.</span>
            </li>
            <li class="d-flex mb-3">
              <i class="bi bi-arrow-right-circle-fill text-secondary me-3 mt-1"></i>
              <span><strong>Antimicrobial Encapsulation:</strong> Application of specialized coatings to prevent future fungal growth on structural members.</span>
            </li>
          </ul>
        </div>

        <div class="col-lg-4">
          <div class="sticky-top" style="top: 130px;">
            <div class="card border-primary p-4 shadow-sm mb-4">
              <h5 class="fw-bold text-primary mb-3">Suspect Mold?</h5>
              <p class="small text-muted">Visible growth is often just the "tip of the iceberg." Contact us for a professional assessment.</p>
              <a :href="`tel:${appConfig.phoneRaw}`" class="btn btn-secondary w-100 py-3 fw-bold fs-5">
                {{ appConfig.phoneNumber }}
              </a>
            </div>

            <div class="card border-0 bg-primary text-white p-4">
              <h6 class="text-uppercase fw-bold small ls-1 mb-3">The Elevated Difference</h6>
              <p class="small opacity-75">
                We work alongside independent industrial hygienists and third-party testing labs to provide unbiased verification that your home is officially "mold-free."
              </p>
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