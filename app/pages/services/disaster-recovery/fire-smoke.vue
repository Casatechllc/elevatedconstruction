<template>
  <div class="service-page">
    <section class="bg-primary text-white py-5">
      <div class="container py-lg-5">
        <h1 class="display-3 fw-bold mb-3">Fire & Smoke Damage Care</h1>
        <p class="lead" style="max-width: 800px;">
          Expert soot removal, structural cleaning, and advanced molecular deodorization. We stop the corrosive effects of fire byproducts and restore your home’s air quality to hospital-grade standards.
        </p>
        <div class="d-flex gap-3 mt-4">
          <a :href="`tel:${appConfig.phoneRaw}`" class="btn btn-secondary btn-lg rounded-pill px-4 fw-bold shadow">
            Emergency Decontamination: {{ appConfig.phoneNumber }}
          </a>
        </div>
      </div>
    </section>

    <Breadcrumbs class="py-3 border-bottom mb-5" />

    <section class="container mb-5">
      <div class="row g-5">
        <div class="col-lg-8">
          <h2 class="text-primary fw-bold mb-4">Beyond the Flames: The Science of Smoke</h2>
          <p class="lead text-muted">
            Fire damage doesn't end when the last ember is extinguished. Smoke is a pressurized, acidic gas that seeks out cool surfaces and "settles" into the most microscopic pores of your home.
          </p>

          

          <div class="my-5">
            <h3 class="h4 fw-bold text-primary mb-3">Identifying Soot Residue Types</h3>
            <p class="small text-muted mb-4">Not all smoke is the same. Our technicians "map" the soot to determine which specific chemical sponges and cleaning agents are required for your specific loss.</p>
            
            <div class="row g-4">
              <div class="col-md-6">
                <div class="p-4 border-start border-4 border-secondary bg-light h-100 shadow-sm">
                  <h6 class="fw-bold">Dry Soot (Natural Materials)</h6>
                  <p class="small mb-0">Resulting from wood or paper fires. This soot is powdery and easier to remove if addressed before it is smeared by amateur cleaning attempts.</p>
                </div>
              </div>
              <div class="col-md-6">
                <div class="p-4 border-start border-4 border-secondary bg-light h-100 shadow-sm">
                  <h6 class="fw-bold">Wet Soot (Synthetic Materials)</h6>
                  <p class="small mb-0">Produced by burning plastics, rubber, or foam. It is smeary, sticky, and highly acidic—requiring specialized solvents to neutralize "etching" on metals.</p>
                </div>
              </div>
              <div class="col-md-6">
                <div class="p-4 border-start border-4 border-secondary bg-light h-100 shadow-sm">
                  <h6 class="fw-bold">Protein Residue (Kitchen Fires)</h6>
                  <p class="small mb-0">Virtually invisible but carries a pungent, repulsive odor. It discolors paints and finishes over time and requires deep enzymatic cleaning.</p>
                </div>
              </div>
              <div class="col-md-6">
                <div class="p-4 border-start border-4 border-secondary bg-light h-100 shadow-sm">
                  <h6 class="fw-bold">Fuel Oil Soot (Puff-Backs)</h6>
                  <p class="small mb-0">Caused by furnace malfunctions. This oily film covers every surface in the home and requires a full-scale HVAC and structural degreasing.</p>
                </div>
              </div>
            </div>
          </div>

          <h3 class="h4 fw-bold text-primary mb-3">Professional Odor Neutralization</h3>
          <p>We don't "mask" smells with perfumes; we utilize molecular-level neutralization technology:</p>
          <ul class="list-group list-group-flush mb-5">
            <li class="list-group-item px-0">
              <strong>Hydroxyl Generation:</strong> Utilizing UV light to produce atmospheric hydroxyl radicals that destroy odor molecules and bacteria in occupied spaces.
            </li>
            <li class="list-group-item px-0">
              <strong>Thermal Fogging:</strong> We recreate the particle size of smoke using specialized deodorizers. This allows the neutralizer to penetrate the same pores the smoke did.
            </li>
            <li class="list-group-item px-0">
              <strong>Ozone Treatment:</strong> For severe losses, we use controlled O3 oxidation to permanently break down complex smoke carbon molecules.
            </li>
            <li class="list-group-item px-0">
              <strong>HEPA Air Scrubbing:</strong> Continuous 99.97% particulate filtration to remove airborne soot and carcinogens during the cleaning process.
            </li>
          </ul>

          <div class="bg-primary text-white p-4 rounded-4 shadow">
            <h4 class="fw-bold mb-3">Restoration Fact: Acidic Etching</h4>
            <p class="mb-0 small">
              Soot is highly acidic. Within 24 hours, soot particulates can cause yellowing of finishes. Within 72 hours, it begins to "pit" and corrode chrome, marble, and glass. <strong>Immediate neutralization is the only way to avoid total replacement of these expensive surfaces.</strong>
            </p>
          </div>
        </div>

        <div class="col-lg-4">
          <div class="sticky-top" style="top: 130px;">
            <div class="card border-danger p-4 mb-4 shadow-sm">
              <h5 class="text-danger fw-bold mb-3"><i class="bi bi-exclamation-triangle-fill me-2"></i>Homeowner Warnings</h5>
              <ul class="list-unstyled small mb-0">
                <li class="mb-3">
                  <strong>DO NOT turn on the HVAC:</strong> The furnace/AC will act as a distribution system, blowing soot into unaffected rooms and clogging your expensive ductwork.
                </li>
                <li class="mb-3">
                  <strong>DO NOT use household vacuums:</strong> Standard vacuums lack HEPA filters; they will simply exhaust fine soot particulates back into the air you breathe.
                </li>
                <li class="mb-3">
                  <strong>DO NOT touch walls or upholstery:</strong> The oils from your hands can permanently "set" soot stains into paints and fabrics.
                </li>
                <li>
                  <strong>DO NOT eat exposed food:</strong> Smoke particulates are toxic. Any food (even in cans) exposed to heat and smoke should be discarded.
                </li>
              </ul>
            </div>

            <div class="card bg-dark text-white p-4 text-center border-0 shadow">
              <h5 class="fw-bold mb-3 text-secondary text-uppercase ls-1">Professional Recovery</h5>
              <p class="small opacity-75">We provide detailed soot mapping and Xactimate estimates for a seamless insurance experience.</p>
              <button to="/contact" class="btn btn-secondary w-100 fw-bold py-2" 
                data-bs-toggle="offcanvas" 
                data-bs-target="#quoteDrawer"
               >
                    Schedule Inspection
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