<template>
  <div class="service-page">
    <section class="bg-primary text-white py-5">
      <div class="container py-lg-4">
        <h1 class="display-3 fw-bold mb-3">Advanced Odor Elimination</h1>
        <p class="lead" style="max-width: 750px;">
          Don't just mask the smell—neutralize it at the source. We utilize molecular-level technology to eliminate odors from fire, mold, pets, and biological sources.
        </p>
      </div>
    </section>

    <Breadcrumbs class="py-3 border-bottom mb-5" />

    <section class="container mb-5">
      <div class="row g-5">
        <div class="col-lg-8">
          <h2 class="text-primary fw-bold mb-4">Science-Based Deodorization</h2>
          <p class="lead text-muted">
            Odors are actually microscopic particles trapped within porous surfaces like wood framing, subfloors, and drywall. Standard cleaning only addresses the surface; our process reaches the molecules hidden deep within.
          </p>

          
          
          <div class="my-5 p-4 border-start border-4 border-secondary bg-light">
            <h4 class="fw-bold text-primary">Why Conventional Air Fresheners Fail</h4>
            <p class="mb-0 small">
              Most store-bought solutions are "masking agents" that attempt to overpower bad smells with stronger scents. When those scents fade, the odor returns. We use <strong>oxidization</strong> and <strong>encapsulation</strong> to physically alter the odor-causing molecules so they no longer exist.
            </p>
          </div>

          <h3 class="h4 fw-bold text-primary mb-4">Our Technical Arsenal</h3>
          <div class="row g-4">
            <div class="col-md-6">
              <div class="card h-100 border-0 shadow-sm p-4">
                <h5 class="fw-bold"><i class="bi bi-wind text-secondary me-2"></i>Hydroxyl Generation</h5>
                <p class="small text-muted">Safe for use in occupied spaces. This technology uses UV light to create atmospheric hydroxyls that destroy odors and bacteria in the air and on surfaces.</p>
              </div>
            </div>
            <div class="col-md-6">
              <div class="card h-100 border-0 shadow-sm p-4">
                <h5 class="fw-bold"><i class="bi bi-cloud-haze2-fill text-secondary me-2"></i>Thermal Fogging</h5>
                <p class="small text-muted">We recreate the "smoke" particle size using solvent-based deodorizers. This allows the neutralizer to penetrate the exact same pores the smoke did during a fire.</p>
              </div>
            </div>
            <div class="col-md-6">
              <div class="card h-100 border-0 shadow-sm p-4">
                <h5 class="fw-bold"><i class="bi bi-unleash text-secondary me-2"></i>Ozone (O3) Treatment</h5>
                <p class="small text-muted">A powerful oxidizer used in unoccupied spaces to "kill" odors by adding an extra oxygen atom to the odor molecule, breaking it down permanently.</p>
              </div>
            </div>
            <div class="col-md-6">
              <div class="card h-100 border-0 shadow-sm p-4">
                <h5 class="fw-bold"><i class="bi bi-layers-half text-secondary me-2"></i>Encapsulation</h5>
                <p class="small text-muted">For severe cases, we apply specialized sealants to floor joists or subfloors to "lock in" odors that have penetrated too deep to be removed manually.</p>
              </div>
            </div>
          </div>
        </div>

        <div class="col-lg-4">
          <div class="sticky-top" style="top: 130px;">
            <div class="card border-primary p-4 shadow-sm mb-4 text-center">
              <h5 class="fw-bold text-primary mb-3">Breathable Air Again</h5>
              <p class="small text-muted">Persistent odors can lower property value and affect health. Let's fix it.</p>
              <a :href="`tel:${appConfig.phoneRaw}`" class="btn btn-secondary w-100 py-3 fw-bold shadow">
                {{ appConfig.phoneNumber }}
              </a>
            </div>

            <div class="p-4 bg-primary text-white rounded-3 shadow">
              <h6 class="fw-bold text-uppercase mb-3"><i class="bi bi-shield-check me-2"></i>Common Challenges</h6>
              <ul class="list-unstyled small opacity-75">
                <li class="mb-2">● Post-Fire Smoke & Soot</li>
                <li class="mb-2">● Mold & Mildew Mustiness</li>
                <li class="mb-2">● Pet Urine (Subfloor Saturation)</li>
                <li>● Persistent Cooking Spices</li>
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