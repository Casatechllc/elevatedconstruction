<template>
  <div class="service-page">
    <section class="bg-primary text-white py-5">
      <div class="container py-lg-4">
        <h1 class="display-3 fw-bold mb-3">Emergency Property Securing</h1>
        <p class="lead" style="max-width: 750px;">
          Critical site stabilization following storm damage, vehicle impact, or fire. We secure your home against the elements and intruders within the hour.
        </p>
      </div>
    </section>

    <Breadcrumbs class="py-3 border-bottom mb-5" />

    <section class="container mb-5">
      <div class="row g-5">
        <div class="col-lg-8">
          <h2 class="text-primary fw-bold mb-4">Immediate Site Stabilization</h2>
          <p class="lead text-muted">
            After a disaster, your home is vulnerable. Broken windows, compromised roofs, and damaged doors leave your belongings exposed to theft and weather.
          </p>

          <div class="my-5 p-4 bg-light border-start border-primary border-4">
            <h4 class="fw-bold">Insurance Compliance Note</h4>
            <p class="mb-0">Most insurance policies require homeowners to take "reasonable action" to prevent further damage. Our professional board-up services provide the documentation you need to prove you protected the property immediately.</p>
          </div>

          <h3 class="h4 fw-bold text-primary mb-3">Our Securing Services</h3>
          <div class="row g-4">
            <div class="col-md-6">
              <ul class="list-unstyled">
                <li class="mb-3 d-flex align-items-start">
                  <i class="bi bi-shield-check text-secondary me-2 fs-5"></i>
                  <div><strong>Window & Door Board-Up:</strong> Using structural-grade plywood and non-destructive "tension" mounting where possible.</div>
                </li>
                <li class="mb-3 d-flex align-items-start">
                  <i class="bi bi-shield-check text-secondary me-2 fs-5"></i>
                  <div><strong>Roof Tarping:</strong> Industrial-strength, UV-resistant tarps secured with furring strips to prevent leaks.</div>
                </li>
              </ul>
            </div>
            <div class="col-md-6">
              <ul class="list-unstyled">
                <li class="mb-3 d-flex align-items-start">
                  <i class="bi bi-shield-check text-secondary me-2 fs-5"></i>
                  <div><strong>Temporary Fencing:</strong> Perimeter security for sites that are structurally unstable.</div>
                </li>
                <li class="mb-3 d-flex align-items-start">
                  <i class="bi bi-shield-check text-secondary me-2 fs-5"></i>
                  <div><strong>Structural Shoring:</strong> Temporary support for compromised load-bearing walls.</div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div class="col-lg-4">
          <div class="card border-primary p-4 shadow-sm text-center">
            <h5 class="fw-bold mb-3">Rapid Dispatch</h5>
            <p class="small text-muted">We have crews on standby in Bridgewater to secure your home right now.</p>
            <a :href="`tel:${appConfig.phoneRaw}`" class="btn btn-secondary w-100 py-3 fw-bold fs-5">
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