<template>
  <div class="service-page">
    <section class="bg-primary text-white py-5">
      <div class="container py-lg-5">
        <h1 class="display-3 fw-bold mb-3">Air Duct & HVAC Cleaning</h1>
        <p class="lead" style="max-width: 800px;">
          Professional source removal of airborne contaminants. We utilize high-static pressure vacuum systems and HEPA filtration to sanitize your building's "lungs" and restore peak mechanical efficiency.
        </p>
        <div class="d-flex gap-3 mt-4">
          <button 
            class="btn btn-secondary btn-lg rounded-pill px-4 fw-bold shadow"
            data-bs-toggle="offcanvas" 
            data-bs-target="#quoteDrawer"
          >
            Schedule Air Quality Audit
          </button>
        </div>
      </div>
    </section>

    <Breadcrumbs class="py-3 border-bottom mb-5" />

    <section class="container mb-5">
      <div class="row g-md-5">
        <div class="col-lg-8">
          <h2 class="text-primary fw-bold mb-4">Total Source Removal vs. Surface Dusting</h2>
          <p class="lead text-muted">
            Most residential and commercial HVAC systems circulate the same air 5 to 7 times per day. Over time, this air deposits a "mat" of dust, dander, mold spores, and chemical particulates inside your supply and return plenums.
          </p>

          <div class="my-5 p-2 p-md-4 bg-dark rounded-4 text-center overflow-hidden shadow-lg">
            <div class="diagram-wrapper mb-3">
              <img 
                src="/negative-pressure-diagram.png" 
                alt="Diagram of the Elevated Construction Negative Pressure HVAC Cleaning Process" 
                class="img-fluid rounded-3 shadow-sm"
              >
            </div>
            
            <p class="text-white mt-3 fw-bold mb-1">The Negative Pressure Cleaning Process</p>
            <p class="text-white-50 small mb-0 px-3">
              Visualizing how we isolate your HVAC system to prevent dust blow-back and ensure total source removal.
            </p>
          </div>

          <h3 class="h4 fw-bold text-primary mb-3">The Elevated Cleaning Protocol</h3>
          <p>We follow the **NADCA (National Air Duct Cleaners Association)** standards for "Source Removal" to ensure your system is clinically clean:</p>
          <ul class="list-group list-group-flush mb-5">
            <li class="list-group-item px-0">
              <strong>Negative Pressure Isolation:</strong> We connect a 5,000+ CFM HEPA-filtered vacuum to your main trunk line, putting the entire system under vacuum so no dust escapes into your living space.
            </li>
            <li class="list-group-item px-0">
              <strong>Agitation Tools:</strong> We use pneumatic whips and rotating brushes to dislodge debris from the walls of your ducts, which is then sucked directly into our containment system.
            </li>
            <li class="list-group-item px-0">
              <strong>Coil & Blower Sanitization:</strong> We don't just clean the "tubes." We clean the evaporator coils and blower motor—the heart of your HVAC system—to improve heat transfer and reduce energy bills.
            </li>
            <li class="list-group-item px-0">
              <strong>EPA-Registered Disinfectant:</strong> Upon request, we apply a fogged antimicrobial treatment to kill lingering bacteria, fungi, and viruses inside the ductwork.
            </li>
          </ul>

          <div class="bg-primary text-white p-4 rounded-4 shadow">
            <h4 class="fw-bold mb-3 text-secondary">Technical Fact: The "Mat" Effect</h4>
            <p class="small mb-0">
              A buildup of just <strong>1/16th of an inch</strong> of dust on your HVAC coils can reduce system efficiency by up to <strong>21%</strong>. This forces your blower motor to work harder, shortening the lifespan of your expensive equipment and significantly increasing monthly utility costs.
            </p>
          </div>
        </div>

        <div class="col-lg-4">
          <div class="sticky-top" style="top: 130px;">
            <div class="card border-warning p-4 mb-4 shadow-sm border-top border-5 mt-4 mt-md-0">
              <h5 class="text-primary fw-bold mb-3"><i class="bi bi-info-circle-fill me-2"></i>When to Call Us</h5>
              <ul class="list-unstyled small mb-0">
                <li class="mb-3"><strong>Post-Construction:</strong> Drywall dust and sawdust are highly abrasive and will destroy a new HVAC unit if not removed.</li>
                <li class="mb-3"><strong>Allergy Season:</strong> If you suffer from unexplained respiratory issues, your ducts may be harboring years of pollen and dander.</li>
                <li class="mb-3"><strong>Musty Odors:</strong> If you smell "locker room" or "earthy" scents when the AC turns on, biological growth is likely present on your coils.</li>
                <li><strong>Visible Dust:</strong> If your registers show dark "ghosting" or soot-like streaks, the system is actively recirculating contaminants.</li>
              </ul>
            </div>

            <div class="card bg-dark text-white p-4 text-center border-0 shadow">
              <h5 class="fw-bold mb-3 text-secondary">Breathe Better. Save More.</h5>
              <p class="small opacity-75">Restore your home’s air quality and lower your energy footprint today.</p>
              <button 
                class="btn btn-secondary w-100 fw-bold py-2 shadow-sm"
                data-bs-toggle="offcanvas" 
                data-bs-target="#quoteDrawer"
              >
                Get a Free Estimate
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
.list-group-item { background-color: transparent; border-color: rgba(0,0,0,0.05); }

.diagram-wrapper {
  transition: transform 0.3s ease;
  /* cursor: zoom-in; */
}

.diagram-wrapper:hover {
  transform: scale(1.02);
}

.diagram-wrapper img {
  max-height: 450px; /* Keeps the page from becoming too long */
  width: auto;
  border: 1px solid rgba(255, 255, 255, 0.1); /* Subtle border for the dark theme */
}

@media (max-width: 767.98px) {
  .diagram-wrapper img {
    max-height: none; /* Let it be full width on mobile */
  }
}
</style>