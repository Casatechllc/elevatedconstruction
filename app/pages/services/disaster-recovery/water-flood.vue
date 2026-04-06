<template>
  <div class="service-page">
    <section class="bg-primary text-white py-5">
      <div class="container py-lg-5">
        <h1 class="display-3 fw-bold mb-3">Water & Flood Mitigation</h1>
        <p class="lead" style="max-width: 800px;">
          IICRC-certified water extraction and structural drying. We utilize advanced psychrometric science to stabilize your environment and prevent secondary damage like mold and rot.
        </p>
        <div class="d-flex gap-3 mt-4">
          <a :href="`tel:${appConfig.phoneRaw}`" class="btn btn-secondary btn-lg rounded-pill px-4 fw-bold">
            60-Min Emergency Response
          </a>
        </div>
      </div>
    </section>

    <Breadcrumbs class="py-3 border-bottom mb-5" />

    <section class="container mb-5">
      <div class="row g-md-5">
        <div class="col-lg-8">
          <h2 class="text-primary fw-bold mb-4">Science-Driven Structural Drying</h2>
          <p class="lead text-muted">
            Water damage is progressive. What starts as a simple leak quickly evolves into a structural crisis as water migrates through porous materials like drywall, framing, and subflooring.
          </p>

          

          <div class="my-5">
            <h3 class="h4 fw-bold text-primary mb-3">The Three Categories of Water Loss</h3>
            <p class="small text-muted mb-4">Understanding the "Sanitary Grade" of the water is critical for safety and determines whether materials can be restored or must be disposed of.</p>
            
            <div class="row g-3">
              <div class="col-md-4">
                <div class="p-3 border-top border-4 border-info bg-light h-100">
                  <h6 class="fw-bold">Category 1: Clean</h6>
                  <p class="x-small mb-0">Source: Broken supply lines or tub overflows. Poses no immediate threat if mitigated quickly.</p>
                </div>
              </div>
              <div class="col-md-4">
                <div class="p-3 border-top border-4 border-warning bg-light h-100">
                  <h6 class="fw-bold">Category 2: Grey</h6>
                  <p class="x-small mb-0">Source: Dishwashers or washing machines. Contains significant contamination and can cause sickness.</p>
                </div>
              </div>
              <div class="col-md-4">
                <div class="p-3 border-top border-4 border-danger bg-light h-100">
                  <h6 class="fw-bold">Category 3: Black</h6>
                  <p class="x-small mb-0">Source: Sewage, rising floodwaters, or seawater. Highly unsanitary; contains pathogenic agents.</p>
                </div>
              </div>
            </div>
          </div>

          <h3 class="h4 fw-bold text-primary mb-3">Our Technical Process</h3>
          <p>We don't just "blow air." We manage the <strong>Atmospheric Equilibrium</strong> of your home:</p>
          <ul class="list-group list-group-flush mb-5">
            <li class="list-group-item px-0">
              <strong>Thermal Imaging Inspection:</strong> We use FLIR infrared cameras to locate "ghost moisture" hidden behind tiled walls and under hardwood floors.
            </li>
            <li class="list-group-item px-0">
              <strong>Sub-Surface Extraction:</strong> Our weighted "Rover" extractors pull water from deep within carpet pads, often saving materials that others would tear out.
            </li>
            <li class="list-group-item px-0">
              <strong>LGR Dehumidification:</strong> Low Grain Refrigerant (LGR) units pull moisture from the air even in low-humidity environments, preventing "secondary damage" (mold).
            </li>
            <li class="list-group-item px-0">
              <strong>Daily Moisture Mapping:</strong> We document the "Dry Standard" of your home using moisture probes to prove to your insurance company that the job is done right.
            </li>
          </ul>

          <div class="bg-primary text-white p-4 rounded-4 shadow">
            <h4 class="fw-bold mb-3">Did You Know?</h4>
            <div class="row g-3 small">
              <div class="col-md-6">
                <p>● <strong>Porous Saturation:</strong> Drywall can wick water up to 2 feet above the visible "wet line" within hours via capillary action.</p>
              </div>
              <div class="col-md-6">
                <p>● <strong>Humidity Spikes:</strong> Without industrial dehumidification, evaporated water from the floor will settle on your ceiling and furniture, causing "Secondary Mold."</p>
              </div>
            </div>
          </div>
        </div>

        <div class="col-lg-4">
          <div class="sticky-top" style="top: 130px;">
            <div class="card border-danger p-4 mb-4 shadow-sm mt-4 mt-md-0">
              <h5 class="text-danger fw-bold mb-3"><i class="bi bi-exclamation-triangle-fill me-2"></i>Critical Warnings</h5>
              <ul class="list-unstyled small mb-0">
                <li class="mb-3">
                  <strong>The 48-Hour Rule:</strong> Mold spores activate within 24-48 hours of moisture exposure. Waiting "to see if it dries on its own" is a $10,000 mistake.
                </li>
                <li class="mb-3">
                  <strong>Electricity Safety:</strong> Do not walk on wet carpet if outlets or extension cords are submerged.
                </li>
                <li>
                  <strong>LVP/Hardwood Risk:</strong> Water trapped under "Waterproof" flooring will rot your subfloor. It <em>must</em> be extracted or ventilated professionally.
                </li>
              </ul>
            </div>

            <div class="card bg-dark text-white p-4 text-center border-0 shadow">
              <h5 class="fw-bold mb-3 text-secondary text-uppercase ls-1">Insurance Ready</h5>
              <p class="small opacity-75">We provide 100% transparent Xactimate billing and digital moisture logs for your adjuster.</p>
              <button to="/contact" class="btn btn-secondary w-100 fw-bold py-2" 
                data-bs-toggle="offcanvas" 
                data-bs-target="#quoteDrawer"
              >
                Get an Inspection
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
/* * { outline: 1px solid red !important; } */
.ls-1 { letter-spacing: 1px; }
.x-small { font-size: 0.8rem; }
.bg-light { background-color: #f8f9fa !important; }
</style>