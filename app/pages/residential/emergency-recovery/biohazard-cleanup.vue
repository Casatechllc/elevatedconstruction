<template>
  <div class="service-page">
    <section class="bg-primary text-white py-5">
      <div class="container py-lg-4">
        <h1 class="display-3 fw-bold mb-3">Trauma & Biohazard Recovery</h1>
        <p class="lead" style="max-width: 750px;">
          Discreet, compassionate, and technically rigorous cleaning services for biological hazards and sensitive environments.
        </p>
      </div>
    </section>

    <Breadcrumbs class="py-3 border-bottom mb-5" />

    <section class="container mb-5">
      <div class="row g-5">
        <div class="col-lg-8">
          <h2 class="text-primary fw-bold mb-4">Professional Compliance & Care</h2>
          <p>Biological contaminants require more than "deep cleaning." They require specialized chemicals and strictly governed disposal protocols. <strong>Elevated Construction</strong> treats these situations with the utmost discretion and respect for the property and its inhabitants.</p>
          
          

          <h3 class="h4 fw-bold text-primary mt-5 mb-3">Certified Cleaning Standards</h3>
          <div class="row g-4">
            <div class="col-md-6" v-for="standard in standards" :key="standard.title">
              <div class="card border-0 bg-light p-4 h-100">
                <h6 class="fw-bold text-uppercase text-secondary small">{{ standard.tag }}</h6>
                <h5 class="fw-bold">{{ standard.title }}</h5>
                <p class="small mb-0 opacity-75">{{ standard.desc }}</p>
              </div>
            </div>
          </div>
        </div>

        <div class="col-lg-4">
          <div class="sticky-top" style="top: 130px;">
            <div class="card border-primary p-4 shadow-sm mb-4">
              <h5 class="fw-bold text-primary mb-3">Discreet Assistance</h5>
              <a :href="`tel:${appConfig.phoneRaw}`" class="btn btn-secondary w-100 py-3 fw-bold fs-5">
                {{ appConfig.phoneNumber }}
              </a>
            </div>
            <div class="p-4 rounded-3 border">
              <h6 class="fw-bold">We Handle:</h6>
              <ul class="small text-muted ps-3">
                <li>Bloodborne Pathogens</li>
                <li>Viral & Bacterial Outbreaks</li>
                <li>Unattended Death Cleanup</li>
                <li>Hoarding & Gross Filth</li>
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
const standards = [
  { tag: 'Regulatory', title: 'OSHA & EPA Compliance', desc: 'All technicians follow strict Bloodborne Pathogen standards and use EPA-registered hospital-grade disinfectants.' },
  { tag: 'Verification', title: 'ATP Surface Testing', desc: 'We utilize Adenosine Triphosphate (ATP) testing to provide scientific proof that surfaces are biologically clean.' },
  { tag: 'Safety', title: 'HEPA Containment', desc: 'Airborne pathogens are managed through negative air pressure and HEPA filtration systems.' },
  { tag: 'Disposal', title: 'Legal Bio-Waste Disposal', desc: 'Secure transport and disposal of all hazardous materials at certified medical waste facilities.' }
]
</script>