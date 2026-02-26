<template>
  <div class="service-page">
    <section class="bg-primary text-white py-5">
      <div class="container py-lg-4">
        <h1 class="display-3 fw-bold mb-3">Fire & Smoke Damage Care</h1>
        <p class="lead" style="max-width: 750px;">
          Beyond the flames: Professional soot removal, structural cleaning, and advanced deodorization to restore your home and air quality.
        </p>
      </div>
    </section>

    <Breadcrumbs class="py-3 border-bottom mb-5" />

    <section class="container mb-5">
      <div class="row g-5">
        <div class="col-lg-8">
          <h2 class="text-primary fw-bold mb-4">Comprehensive Fire Recovery</h2>
          <p class="lead text-muted">
            Fire damage isn't just about what burned. It's about the corrosive soot, the toxic smoke residue, and the thousands of gallons of water used to extinguish the flames.
          </p>
          
          <div class="my-5">
            <h3 class="h4 fw-bold text-primary mb-3">Professional Soot & Residue Mitigation</h3>
            <p>
              Different materials produce different types of soot. Whether it's <strong>Protein residue</strong> (grease fires), <strong>Dry soot</strong> (wood/paper), or <strong>Oily residue</strong> (plastics/electronics), our team uses specialized chemical sponges and aqueous cleaners to safely lift contaminants without "setting" the stain.
            </p>
          </div>

          <div class="row g-4 mb-5">
            <div class="col-md-6">
              <div class="p-4 border-start border-4 border-secondary bg-light h-100">
                <h5 class="fw-bold text-primary">Air Quality Control</h5>
                <p class="small mb-0">We utilize HEPA air scrubbers and hydroxyl generators to neutralize toxic smoke molecules at the molecular level, not just mask them.</p>
              </div>
            </div>
            <div class="col-md-6">
              <div class="p-4 border-start border-4 border-secondary bg-light h-100">
                <h5 class="fw-bold text-primary">Structural Cleaning</h5>
                <p class="small mb-0">Hand-cleaning of wall surfaces, ceilings, and structural framing to remove corrosive char and prevent long-term odors.</p>
              </div>
            </div>
          </div>

          <h3 class="h4 fw-bold text-primary mb-3">The Recovery Timeline</h3>
          <p>We work in phases to ensure the safety of the structure and the health of the inhabitants:</p>
          <ul class="list-group list-group-flush mb-4">
            <li class="list-group-item px-0"><strong class="text-primary">Phase 1: Stabilization</strong> – Securing the property (Board-up) and assessing structural integrity.</li>
            <li class="list-group-item px-0"><strong class="text-primary">Phase 2: Water Removal</strong> – Drying out the water used by fire departments to prevent mold.</li>
            <li class="list-group-item px-0"><strong class="text-primary">Phase 3: Soot Remediation</strong> – Meticulous removal of particulate matter from all surfaces.</li>
            <li class="list-group-item px-0"><strong class="text-primary">Phase 4: Deep Deodorization</strong> – Thermal fogging and ozone treatment for total scent removal.</li>
          </ul>
        </div>

        <div class="col-lg-4">
          <div class="sticky-top" style="top: 130px;">
            <div class="card border-primary p-4 shadow-sm mb-4">
              <h5 class="fw-bold text-primary mb-3">Immediate Assistance</h5>
              <p class="small text-muted">Corrosive soot can cause permanent damage to metals and glass within 24 hours. Call now.</p>
              <a :href="`tel:${appConfig.phoneRaw}`" class="btn btn-secondary w-100 py-3 fw-bold fs-5">
                {{ appConfig.phoneNumber }}
              </a>
            </div>

            <div class="bg-primary text-white p-4 rounded-3 shadow">
              <h5 class="fw-bold mb-3"><i class="bi bi-info-circle me-2"></i>Homeowner Tip</h5>
              <p class="small opacity-75 mb-0">
                Do not attempt to clean soot yourself. Using the wrong cleaner can smear oily residue deeper into your walls, making restoration significantly harder and more expensive.
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