<template>
  <div class="service-page">
    <section class="bg-primary text-white py-5">
      <div class="container py-lg-5">
        <h1 class="display-3 fw-bold mb-3">Biohazard & Trauma Recovery</h1>
        <p class="lead" style="max-width: 800px;">
          Compassionate, discreet, and forensic-grade remediation. We handle the most sensitive environments with specialized equipment and strict adherence to OSHA and CDC health protocols.
        </p>
        <div class="d-flex gap-3 mt-4">
          <button 
            class="btn btn-secondary btn-lg rounded-pill px-4 fw-bold shadow"
            data-bs-toggle="offcanvas" 
            data-bs-target="#quoteDrawer"
          >
            Request Discreet Assessment
          </button>
        </div>
      </div>
    </section>

    <Breadcrumbs class="py-3 border-bottom mb-5" />

    <section class="container mb-5">
      <div class="row g-5">
        <div class="col-lg-8">
          <h2 class="text-primary fw-bold mb-4">Professionalism in the Most Difficult Moments</h2>
          <p class="lead text-muted">
            Biohazardous situations—including trauma scenes, unattended deaths, or infectious disease outbreaks—require more than just cleaning. They require a total molecular decontamination to ensure the space is legally and biologically safe for re-entry.
          </p>

          

          <div class="my-5">
            <h3 class="h4 fw-bold text-primary mb-3">Our Forensic Cleaning Protocol</h3>
            <p class="small text-muted mb-4">Our team is trained to handle biological contaminants with the highest level of technical precision and emotional intelligence.</p>
            
            <div class="row g-4">
              <div class="col-md-6">
                <div class="p-4 border-start border-4 border-secondary bg-light h-100 shadow-sm">
                  <h6 class="fw-bold">OSHA-Compliant Removal</h6>
                  <p class="small mb-0">Strict adherence to bloodborne pathogen standards. We ensure all biological waste is properly contained, transported, and disposed of at licensed medical waste facilities.</p>
                </div>
              </div>
              <div class="col-md-6">
                <div class="p-4 border-start border-4 border-secondary bg-light h-100 shadow-sm">
                  <h6 class="fw-bold">Multi-Stage Decontamination</h6>
                  <p class="small mb-0">We use hospital-grade broad-spectrum disinfectants and ULV fogging to neutralize viruses and bacteria in porous and non-porous surfaces alike.</p>
                </div>
              </div>
              <div class="col-md-6">
                <div class="p-4 border-start border-4 border-secondary bg-light h-100 shadow-sm">
                  <h6 class="fw-bold">Odor Eradication</h6>
                  <p class="small mb-0">Utilizing hydroxyl generators and specialized enzyme treatments to permanently break down biological odors at the molecular level, rather than masking them.</p>
                </div>
              </div>
              <div class="col-md-6">
                <div class="p-4 border-start border-4 border-secondary bg-light h-100 shadow-sm">
                  <h6 class="fw-bold">Discreet Service</h6>
                  <p class="small mb-0">We prioritize your privacy. Our teams arrive in unmarked vehicles upon request and maintain strict confidentiality throughout the entire process.</p>
                </div>
              </div>
            </div>
          </div>

          <h3 class="h4 fw-bold text-primary mb-3">The Invisible Risks of Biohazards</h3>
          <p>Biological contaminants carry significant health risks that standard cleaning supplies cannot neutralize. Our clinical approach addresses:</p>
          <ul class="list-group list-group-flush mb-5">
            <li class="list-group-item px-0"><strong>Bloodborne Pathogens:</strong> Neutralizing risks associated with HIV, Hepatitis B, and C that can survive on surfaces for days.</li>
            <li class="list-group-item px-0"><strong>Micro-Cleaning:</strong> Removing biological fluids that have migrated into subfloors, wall cavities, or structural supports.</li>
            <li class="list-group-item px-0"><strong>Infectious Disease:</strong> Sanitizing environments after viral or bacterial outbreaks to restore public safety.</li>
          </ul>

          <div class="bg-primary text-white p-4 rounded-4 shadow">
            <h4 class="fw-bold mb-3 text-secondary">Technical Fact: The ATP Test</h4>
            <p class="small mb-0">
              How do we know a surface is actually safe? We utilize **ATP (Adenosine Triphosphate) Testing**. By measuring the presence of organic matter on a molecular scale, we get a digital reading of cleanliness. If the reading isn't near zero, we haven't finished our job. This provides objective proof of sanitization for your records.
            </p>
          </div>
        </div>

        <div class="col-lg-4">
          <div class="sticky-top" style="top: 130px;">
            <div class="card border-danger p-4 mb-4 shadow-sm border-top border-5">
              <h5 class="text-danger fw-bold mb-3"><i class="bi bi-exclamation-triangle-fill me-2"></i>Critical Safety Warnings</h5>
              <ul class="list-unstyled small mb-0">
                <li class="mb-3">
                  <strong>Do Not Attempt DIY Cleanup:</strong> Household cleaners are ineffective against many bloodborne pathogens. Exposure risks are significant without professional PPE.
                </li>
                <li class="mb-3">
                  <strong>Structural Migration:</strong> Biological fluids are liquid; they move like water. They often hide under flooring where they can cause permanent structural rot and odor issues.
                </li>
                <li class="mb-3">
                  <strong>Legal Liability:</strong> Employers and landlords have a legal "Duty of Care" to ensure a space is professionally decontaminated before allowing re-entry.
                </li>
              </ul>
            </div>

            <div class="card bg-dark text-white p-4 text-center border-0 shadow">
              <h5 class="fw-bold mb-3 text-secondary">Compassionate Response</h5>
              <p class="small opacity-75">We are here to take the burden off your shoulders during life's most difficult moments.</p>
              <button 
                class="btn btn-secondary w-100 fw-bold py-2 shadow-sm"
                data-bs-toggle="offcanvas" 
                data-bs-target="#quoteDrawer"
              >
                Contact Our Specialists
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