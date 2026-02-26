<template>
  <div class="service-page">
    <section class="bg-primary text-white py-5">
      <div class="container py-lg-4">
        <h1 class="display-3 fw-bold mb-3">Carpet & Fabric Refresh</h1>
        <p class="lead" style="max-width: 750px;">
          Removing deeply embedded allergens, soot, and odors from the soft surfaces in your home using IICRC-approved methods.
        </p>
      </div>
    </section>

    <Breadcrumbs class="py-3 border-bottom mb-5" />

    <section class="container mb-5">
      <div class="row g-5">
        <div class="col-lg-8">
          <h2 class="text-primary fw-bold mb-4">The "Elevated" Clean Standard</h2>
          <p>
            Most residential vacuum cleaners only remove surface debris. Our industrial steam cleaning process reaches the base of the carpet fibers to remove dust mites, pet dander, and oily residues that cause "traffic lane" graying.
          </p>

          <div class="my-5">
            <h3 class="h4 fw-bold text-primary mb-4">Our Restoration-Grade Process</h3>
            <div class="d-flex mb-4">
              <div class="me-4 text-secondary fs-2"><i class="bi bi-droplets"></i></div>
              <div>
                <h5 class="fw-bold">Hot Water Extraction</h5>
                <p class="text-muted small">We use truck-mounted equipment that maintains high heat and powerful suction, resulting in faster drying times and a residue-free finish.</p>
              </div>
            </div>
            <div class="d-flex mb-4">
              <div class="me-4 text-secondary fs-2"><i class="bi bi-shield-check"></i></div>
              <div>
                <h5 class="fw-bold">Upholstery & Fine Fabrics</h5>
                <p class="text-muted small">From sofas to delicate curtains, we identify fabric types to ensure the correct pH-balanced cleaner is used for safe, effective soil removal.</p>
              </div>
            </div>
          </div>
        </div>

        <div class="col-lg-4">
          <div class="sticky-top" style="top: 130px;">
            <div class="card bg-primary text-white p-4 border-0 mb-4 shadow">
              <h5 class="fw-bold mb-3">Did You Know?</h5>
              <p class="small opacity-75">
                Carpets act as a giant air filter for your home. When they become "full" of dust, air quality drops. Regular professional cleaning extends carpet life by up to 50%.
              </p>
            </div>
            <button class="btn btn-outline-primary w-100 py-3 fw-bold" data-bs-toggle="offcanvas" data-bs-target="#quoteDrawer">
              Get a Free Estimate
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