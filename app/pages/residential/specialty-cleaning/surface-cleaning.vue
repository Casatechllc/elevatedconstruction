<template>
  <div class="service-page">
    <section class="bg-primary text-white py-5">
      <div class="container py-lg-4">
        <h1 class="display-3 fw-bold mb-3">Floor, Tile & Grout Care</h1>
        <p class="lead" style="max-width: 750px;">
          Revitalizing hard surfaces with high-pressure steam and professional-grade sealants. We reach the dirt that mopping simply can't touch.
        </p>
      </div>
    </section>

    <Breadcrumbs class="py-3 border-bottom mb-5" />

    <section class="container mb-5">
      <div class="row g-5">
        <div class="col-lg-8">
          <h2 class="text-primary fw-bold mb-4">Restore Your Floor's Original Brilliance</h2>
          <p>
            Grout is a porous material that acts like a sponge for oils, spills, and bacteria. Over time, your tile floors lose their luster as dirt becomes embedded deep within the pores. Our <strong>Truck-Mounted Vortex system</strong> uses 200°F+ water and high-pressure extraction to flush out contaminants instantly.
          </p>

          <div class="row g-4 my-5">
            <div class="col-md-6">
              <div class="p-4 border-start border-4 border-secondary bg-light h-100">
                <h5 class="fw-bold">Alkaline Pre-Treatment</h5>
                <p class="small mb-0">We apply a specialized solution that breaks down organic grease and heavy soil before we begin the extraction process.</p>
              </div>
            </div>
            <div class="col-md-6">
              <div class="p-4 border-start border-4 border-secondary bg-light h-100">
                <h5 class="fw-bold">Grout Sealing</h5>
                <p class="small mb-0">Once cleaned, we apply a premium penetrative sealer to protect your grout lines from future staining and moisture absorption.</p>
              </div>
            </div>
          </div>

          <h3 class="h4 fw-bold text-primary mb-3">Surfaces We Service</h3>
          <ul class="list-group list-group-flush mb-4">
            <li class="list-group-item px-0"><strong>Ceramic & Porcelain:</strong> Deep pore cleaning and sanitization.</li>
            <li class="list-group-item px-0"><strong>Natural Stone:</strong> Gentle but effective care for Travertine, Marble, and Slate.</li>
            <li class="list-group-item px-0"><strong>LVP & Hardwood:</strong> Specialized machine-scrubbing for luxury vinyl and sealed wood.</li>
          </ul>
        </div>

        <div class="col-lg-4">
          <div class="card border-primary p-4 shadow-sm mb-4">
            <h5 class="fw-bold text-primary mb-3">Kitchen & Bath Refresh</h5>
            <p class="small text-muted">Don't replace your tile—restore it. Professional cleaning can make a 20-year-old floor look brand new.</p>
            <a :href="`tel:${appConfig.phoneRaw}`" class="btn btn-secondary w-100 py-2 fw-bold">
              {{ appConfig.phoneNumber }}
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const appConfig = useAppConfig()
</script>