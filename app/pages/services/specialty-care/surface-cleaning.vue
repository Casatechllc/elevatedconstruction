<template>
  <div class="service-page">
    <section class="bg-primary text-white py-5">
      <div class="container py-lg-5">
        <h1 class="display-3 fw-bold mb-3">Specialty Surface Cleaning</h1>
        <p class="lead" style="max-width: 800px;">
          Preserving the beauty and longevity of your home’s finest materials. From natural stone and porcelain tile to high-performance upholstery, we provide deep extraction and protective sealing that standard cleaning cannot achieve.
        </p>
        <div class="d-flex gap-3 mt-4">
          <button 
            class="btn btn-secondary btn-lg rounded-pill px-4 fw-bold shadow"
            data-bs-toggle="offcanvas" 
            data-bs-target="#quoteDrawer"
          >
            Get a Surface Assessment
          </button>
        </div>
      </div>
    </section>

    <Breadcrumbs class="py-3 border-bottom mb-5" />

    <section class="container mb-5">
      <div class="row g-5">
        <div class="col-lg-8">
          <h2 class="text-primary fw-bold mb-4">Deep Extraction & Protective Finishing</h2>
          <p class="lead text-muted">
            Hard surfaces and fine textiles act as a filter for your home, trapping oils, allergens, and microscopic grit that acts like sandpaper on your finishes. Standard mopping often just pushes this dirt deeper into the pores and grout lines.
          </p>

          <div class="row g-3 my-5">
            <div class="col-md-6">
              <div class="p-3 border rounded bg-light text-center">
                <i class="bi bi-layers-half display-1 text-muted opacity-25"></i>
                <p class="small fw-bold mt-2">Dull, Soiled Grout & Stone</p>
              </div>
            </div>
            <div class="col-md-6">
              <div class="p-3 border rounded bg-white text-center shadow-sm">
                <i class="bi bi-stars display-1 text-secondary"></i>
                <p class="small fw-bold mt-2 text-primary">Restored & Sealed Finish</p>
              </div>
            </div>
          </div>

          <h3 class="h4 fw-bold text-primary mb-3">Our Specialized Surface Solutions</h3>
          <div class="row g-4 mb-5">
            <div class="col-md-6">
              <div class="p-4 border-start border-4 border-secondary bg-light h-100">
                <h6 class="fw-bold">Tile & Grout Restoration</h6>
                <p class="small mb-0">We use high-pressure steam and specialized alkaline cleaners to emulsify grease and dirt from deep within grout pores, followed by a premium sealant to prevent future staining.</p>
              </div>
            </div>
            <div class="col-md-6">
              <div class="p-4 border-start border-4 border-secondary bg-light h-100">
                <h6 class="fw-bold">Natural Stone Care</h6>
                <p class="small mb-0">Safe, pH-neutral cleaning for Marble, Granite, and Travertine. We remove "etch" marks and apply penetrating sealers that protect the stone's natural veins without changing its appearance.</p>
              </div>
            </div>
            <div class="col-md-6">
              <div class="p-4 border-start border-4 border-secondary bg-light h-100">
                <h6 class="fw-bold">Upholstery & Fine Fabrics</h6>
                <p class="small mb-0">Low-moisture "dry" cleaning for delicate fibers. We remove deep-seated allergens and oils from sofas and chairs without the risk of fabric shrinkage or browning.</p>
              </div>
            </div>
            <div class="col-md-6">
              <div class="p-4 border-start border-4 border-secondary bg-light h-100">
                <h6 class="fw-bold">Hardwood Deep Clean</h6>
                <p class="small mb-0">Removing built-up waxes and residues that make wood floors look cloudy, followed by a professional-grade "top-coat" to restore the original luster.</p>
              </div>
            </div>
          </div>

          <h3 class="h4 fw-bold text-primary mb-3">Why Professional Sealing Matters</h3>
          <p>Cleaning is only half the battle. Without professional-grade sealing, your freshly cleaned surfaces are vulnerable to immediate re-soiling. Our sealants create a <strong>Molecular Barrier</strong>:</p>
          <ul class="list-group list-group-flush mb-5">
            <li class="list-group-item px-0"><strong>Hydrophobic Protection:</strong> Repels water-based spills like coffee or juice.</li>
            <li class="list-group-item px-0"><strong>Oleophobic Protection:</strong> Repels oil-based contaminants that cause dark "traffic lanes" on stone and carpet.</li>
            <li class="list-group-item px-0"><strong>UV Resistance:</strong> Prevents sun-fading on expensive textiles and natural wood.</li>
          </ul>

          <div class="bg-primary text-white p-4 rounded-4 shadow">
            <h4 class="fw-bold mb-3 text-secondary">Surface Fact: The Grout Trap</h4>
            <p class="small mb-0">
              Grout is a cement-based product, meaning it is naturally porous like a sponge. When you mop with standard household cleaners, the dirty water is actually absorbed <strong>into</strong> the grout. Over time, this creates a permanent "grey" or "black" look that no amount of scrubbing can fix—only professional steam extraction can lift it.
            </p>
          </div>
        </div>

        <div class="col-lg-4">
          <div class="sticky-top" style="top: 130px;">
            <div class="card border-0 shadow-sm p-4 mb-4">
              <h5 class="text-primary fw-bold mb-3">Residential & Commercial</h5>
              <p class="small text-muted">We handle large-scale commercial lobbies and retail floors as well as high-end residential interiors. Our equipment is scaled for both speed and precision.</p>
              <hr />
              <div class="d-flex align-items-center mb-2">
                <i class="bi bi-check2 text-secondary me-2"></i>
                <span class="small">Non-Toxic Solutions</span>
              </div>
              <div class="d-flex align-items-center mb-2">
                <i class="bi bi-check2 text-secondary me-2"></i>
                <span class="small">Fast Dry Times</span>
              </div>
              <div class="d-flex align-items-center">
                <i class="bi bi-check2 text-secondary me-2"></i>
                <span class="small">Pet & Child Safe</span>
              </div>
            </div>

            <div class="card bg-dark text-white p-4 text-center border-0 shadow">
              <h5 class="fw-bold mb-3 text-secondary">Refresh Your Property</h5>
              <p class="small opacity-75">Restore the "Like New" look of your floors and furniture today.</p>
              <button 
                class="btn btn-secondary w-100 fw-bold py-2 shadow-sm"
                data-bs-toggle="offcanvas" 
                data-bs-target="#quoteDrawer"
              >
                Request a Quote
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
.border-secondary { border-color: var(--color-secondary) !important; }
</style>