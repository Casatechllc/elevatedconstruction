<template>
  <div class="service-page">
    <section class="bg-primary text-white py-5">
      <div class="container py-lg-5">
        <h1 class="display-3 fw-bold mb-3">Storm & Wind Damage</h1>
        <p class="lead" style="max-width: 800px;">
          Emergency structural stabilization, roof tarping, and debris removal. We protect your property from the elements following severe weather, ensuring the interior remains secure while we plan the full restoration.
        </p>
        <div class="d-flex gap-3 mt-4">
          <button 
            class="btn btn-secondary btn-lg rounded-pill px-4 fw-bold shadow"
            data-bs-toggle="offcanvas" 
            data-bs-target="#quoteDrawer"
          >
            Request Emergency Tarping
          </button>
        </div>
      </div>
    </section>

    <Breadcrumbs class="py-3 border-bottom mb-5" />

    <section class="container mb-5">
      <div class="row g-5">
        <div class="col-lg-8">
          <h2 class="text-primary fw-bold mb-4">Site Stabilization & Weatherproofing</h2>
          <p class="lead text-muted">
            High winds and falling debris can compromise the "envelope" of your home in seconds. Once the roof or windows are breached, the risk of massive water damage and structural rot increases with every passing hour.
          </p>

          

          <div class="my-5">
            <h3 class="h4 fw-bold text-primary mb-3">Comprehensive Storm Response</h3>
            <p class="small text-muted mb-4">Our specialized storm teams are equipped for immediate physical intervention to prevent secondary loss.</p>
            
            <div class="row g-4">
              <div class="col-md-6">
                <div class="p-4 border-start border-4 border-secondary bg-light h-100 shadow-sm">
                  <h6 class="fw-bold">Industrial Roof Tarping</h6>
                  <p class="small mb-0">We use UV-resistant, heavy-duty tarps secured with wooden furring strips to ensure a watertight seal that holds even during follow-up rain and wind.</p>
                </div>
              </div>
              <div class="col-md-6">
                <div class="p-4 border-start border-4 border-secondary bg-light h-100 shadow-sm">
                  <h6 class="fw-bold">Structural Shoring</h6>
                  <p class="small mb-0">If a tree or heavy debris has compromised a load-bearing wall, we install temporary shoring posts to prevent further collapse of the floor or roof system.</p>
                </div>
              </div>
              <div class="col-md-6">
                <div class="p-4 border-start border-4 border-secondary bg-light h-100 shadow-sm">
                  <h6 class="fw-bold">Window & Door Board-Up</h6>
                  <p class="small mb-0">Securing breached entry points with structural-grade plywood to protect your belongings from both weather and unauthorized entry.</p>
                </div>
              </div>
              <div class="col-md-6">
                <div class="p-4 border-start border-4 border-secondary bg-light h-100 shadow-sm">
                  <h6 class="fw-bold">Tree & Debris Removal</h6>
                  <p class="small mb-0">Safe removal of fallen trees from structures. We coordinate with crane operators for complex extractions that minimize further structural stress.</p>
                </div>
              </div>
            </div>
          </div>

          <h3 class="h4 fw-bold text-primary mb-3">The Importance of "Loss Mitigation"</h3>
          <p>Insurance policies contain a "Duty to Mitigate" clause. This means the homeowner is responsible for taking reasonable steps to prevent further damage after a storm. Our emergency services provide the documentation you need for compliance:</p>
          <ul class="list-group list-group-flush mb-5">
            <li class="list-group-item px-0">
              <strong>Photo Documentation:</strong> We capture "Before" and "After" securing photos to prove the original extent of the damage to your adjuster.
            </li>
            <li class="list-group-item px-0">
              <strong>Moisture Prevention:</strong> By tarping immediately, we prevent Category 3 (contaminated) rainwater from saturating your insulation and drywall.
            </li>
            <li class="list-group-item px-0">
              <strong>Satellite Measurement:</strong> We use EagleView technology to get precise roof dimensions for accurate insurance estimating.
            </li>
          </ul>

          <div class="bg-primary text-white p-4 rounded-4 shadow">
            <h4 class="fw-bold mb-3">Storm Fact: Wind Uplift</h4>
            <p class="mb-0 small">
              Wind damage isn't always obvious. High-velocity winds can create "uplift" that breaks the seal of your shingles without blowing them off. This leads to slow, hidden leaks that rot your roof deck over several months. <strong>Professional drone or ladder inspections are the only way to verify the seal integrity.</strong>
            </p>
          </div>
        </div>

        <div class="col-lg-4">
          <div class="sticky-top" style="top: 130px;">
            <div class="card border-danger p-4 mb-4 shadow-sm">
              <h5 class="text-danger fw-bold mb-3"><i class="bi bi-exclamation-triangle-fill me-2"></i>Storm Safety Warnings</h5>
              <ul class="list-unstyled small mb-0">
                <li class="mb-3">
                  <strong>Beware of Downed Lines:</strong> Always assume downed power lines are live. Wind-damaged trees often hide tangled wires. Keep at least 30 feet away.
                </li>
                <li class="mb-3">
                  <strong>Avoid DIY Roof Tarping:</strong> Walking on a storm-damaged roof is extremely hazardous. Compromised decking or slick surfaces lead to thousands of falls annually.
                </li>
                <li class="mb-3">
                  <strong>Watch for "Storm Chasers":</strong> After a major event, out-of-state contractors often flood the area. Ensure your contractor is a local <strong>Virginia Class A</strong> license holder like Elevated Construction.
                </li>
                <li>
                  <strong>Hidden Structural Shifts:</strong> Impact from a tree can shift the foundation or crack plumbing lines. We perform a total "Envelope Inspection" to ensure safety.
                </li>
              </ul>
            </div>

            <div class="card bg-dark text-white p-4 text-center border-0 shadow">
              <h5 class="fw-bold mb-3 text-secondary text-uppercase ls-1">Immediate Site Security</h5>
              <p class="small opacity-75">Don't leave your home vulnerable to the next rain clouds. Secure your property now.</p>
              <button 
                class="btn btn-secondary w-100 fw-bold py-2"
                data-bs-toggle="offcanvas" 
                data-bs-target="#quoteDrawer"
              >
                Get Emergency Help
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