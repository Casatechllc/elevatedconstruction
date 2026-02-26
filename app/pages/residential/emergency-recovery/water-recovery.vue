<template>
  <div class="service-page">
    <section class="bg-primary text-white py-5">
      <div class="container py-lg-4">
        <h1 class="display-3 fw-bold mb-3">Water & Flood Mitigation</h1>
        <p class="lead" style="max-width: 750px;">
          Fast, professional water extraction and structural drying to save your property from long-term damage and mold.
        </p>
      </div>
    </section>

    <Breadcrumbs class="mb-4 opacity-75" />
    
    <section class="py-5">
      <div class="container">
        <div class="row g-5">
          <div class="col-lg-8">
            <h2 class="text-primary fw-bold mb-4">Every Second Counts</h2>
            <p>Water damage is progressive. Within minutes, it spreads to floors and walls. Within hours, drywall begins to swell and disintegrate. Within 48 hours, mold begins to colonize. At <strong>Elevated Construction</strong>, we use scientific drying methods to stop this cycle.</p>
            
            <h3 class="h4 fw-bold mt-5 mb-3">Our 5-Step Water Recovery Process</h3>
            <div class="process-list ms-3 border-start border-primary border-3 ps-4">
              <div class="mb-4">
                <h5 class="fw-bold">1. Emergency Inspection & Mapping</h5>
                <p class="text-muted">We use thermal imaging and moisture meters to find hidden water behind walls and under floors.</p>
              </div>
              <div class="mb-4">
                <h5 class="fw-bold">2. Industrial Water Extraction</h5>
                <p class="text-muted">Powerful truck-mounted vacuums remove the bulk of the standing water quickly.</p>
              </div>
              <div class="mb-4">
                <h5 class="fw-bold">3. Structural Stabilizing & Drying</h5>
                <p class="text-muted">LGR Dehumidifiers and high-velocity air movers create an environment that "pulls" moisture out of wood and drywall.</p>
              </div>
              <div class="mb-4">
                <h5 class="fw-bold">4. Sanitization & Deodorization</h5>
                <p class="text-muted">We apply EPA-approved antimicrobials to prevent mold growth and eliminate musty odors.</p>
              </div>
              <div>
                <h5 class="fw-bold">5. Monitoring & Documentation</h5>
                <p class="text-muted">We provide daily moisture logs to your insurance company to ensure the claim is handled correctly.</p>
              </div>
            </div>
          </div>

          <div class="col-lg-4">
            <div class="card border-primary p-4 shadow-sm mb-4">
              <h5 class="fw-bold text-primary mb-3">24/7 Priority Hotline</h5>
              <p class="small text-muted">Direct line to our Bridgewater dispatch team.</p>
              <a :href="`tel:${appConfig.phoneRaw}`" class="btn btn-secondary w-100 py-3 fw-bold fs-5">
                {{ appConfig.phoneNumber }}
              </a>
            </div>

            <div class="card bg-light p-4 border-0">
              <h5 class="fw-bold mb-3">Why Choose Us?</h5>
              <ul class="list-unstyled small">
                <li class="mb-2"><i class="bi bi-check-circle-fill text-primary me-2"></i> 60-Minute Response</li>
                <li class="mb-2"><i class="bi bi-check-circle-fill text-primary me-2"></i> Direct Insurance Billing</li>
                <li class="mb-2"><i class="bi bi-check-circle-fill text-primary me-2"></i> IICRC Certified Technicians</li>
                <li><i class="bi bi-check-circle-fill text-primary me-2"></i> Advanced Thermal Imaging</li>
              </ul>
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