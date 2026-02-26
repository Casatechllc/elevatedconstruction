<template>
  <div class="service-page">
    <section class="bg-primary text-white py-5">
      <div class="container py-lg-4">
        <h1 class="display-3 fw-bold mb-3">Air Duct & HVAC Cleaning</h1>
        <p class="lead">Eliminating the "Hidden" pollutants in your home's lungs.</p>
      </div>
    </section>

    <Breadcrumbs class="py-3 border-bottom mb-5" />

    <section class="container mb-5">
      <div class="row g-5">
        <div class="col-lg-8">
          <h2 class="text-primary fw-bold mb-4">Improve Your Indoor Air Quality</h2>
          <p>
            The average 6-room home collects up to 40 pounds of dust and allergens in its air ducts every year. When your furnace or AC runs, these particles are circulated throughout your living space.
          </p>

          

          <h3 class="h4 fw-bold text-primary mt-5 mb-3">The Elevated Duct Cleaning Process</h3>
          <ul class="list-group list-group-flush">
            <li class="list-group-item px-0"><strong>Source Removal:</strong> We use high-velocity compressed air and "whips" to dislodge debris from duct walls.</li>
            <li class="list-group-item px-0"><strong>HEPA Vacuuming:</strong> All contaminants are pulled into a 99.97% efficient HEPA collection system, ensuring no dust enters your home.</li>
            <li class="list-group-item px-0"><strong>Component Cleaning:</strong> We don't just do the vents; we clean the blower motor, coils, and drain pan to improve system efficiency.</li>
            <li class="list-group-item px-0"><strong>Sanitization:</strong> Optional EPA-registered antimicrobial treatment to kill bacteria and mold spores within the system.</li>
          </ul>
        </div>

        <div class="col-lg-4">
          <div class="card bg-light border-0 p-4">
            <h5 class="fw-bold">Health Benefits</h5>
            <ul class="small text-muted ps-3">
              <li>Reduced Allergy Symptoms</li>
              <li>Lower Energy Bills</li>
              <li>Less Dust on Furniture</li>
              <li>Elimination of Musty Odors</li>
            </ul>
            <a :href="`tel:${appConfig.phoneRaw}`" class="btn btn-primary w-100 mt-3">Book an Inspection</a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const appConfig = useAppConfig()
</script>