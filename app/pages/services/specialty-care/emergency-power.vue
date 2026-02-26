<template>
  <div class="service-page">
    <section class="bg-primary text-white py-5">
      <div class="container py-lg-5">
        <h1 class="display-3 fw-bold mb-3">Emergency Power & Logistics</h1>
        <p class="lead" style="max-width: 800px;">
          Critical infrastructure support during major outages. We provide mobile power generation, temporary climate control, and logistical management to keep your facility operational while the grid is down.
        </p>
        <div class="d-flex gap-3 mt-4">
          <button 
            class="btn btn-secondary btn-lg rounded-pill px-4 fw-bold shadow"
            data-bs-toggle="offcanvas" 
            data-bs-target="#quoteDrawer"
          >
            Request Power Logistics
          </button>
        </div>
      </div>
    </section>

    <Breadcrumbs class="py-3 border-bottom mb-5" />

    <section class="container mb-5">
      <div class="row g-5">
        <div class="col-lg-8">
          <h2 class="text-primary fw-bold mb-4">Maintaining Operational Continuity</h2>
          <p class="lead text-muted">
            When a disaster strikes, the lack of electricity is often the second crisis. Without power, sump pumps fail, security systems go dark, and climate control stops—leading to rapid mold growth and structural decay. We provide the "Life Support" your building needs.
          </p>

          

          <div class="my-5">
            <h3 class="h4 fw-bold text-primary mb-3">Our Logistics & Power Capabilities</h3>
            <p class="small text-muted mb-4">We manage the "Heavy Lifting" so your facility managers can focus on business continuity.</p>
            
            <div class="row g-4">
              <div class="col-md-6">
                <div class="p-4 border-start border-4 border-secondary bg-light h-100 shadow-sm">
                  <h6 class="fw-bold">Mobile Power Generation</h6>
                  <p class="small mb-0">Deployment of towable industrial generators (25kVA to 500kVA+) to power entire complexes, elevators, and critical lighting systems.</p>
                </div>
              </div>
              <div class="col-md-6">
                <div class="p-4 border-start border-4 border-secondary bg-light h-100 shadow-sm">
                  <h6 class="fw-bold">Temporary Climate Control</h6>
                  <p class="small mb-0">Portable AC units and HEPA-filtered heating systems to prevent pipe bursts in winter or humidity spikes in summer during outages.</p>
                </div>
              </div>
              <div class="col-md-6">
                <div class="p-4 border-start border-4 border-secondary bg-light h-100 shadow-sm">
                  <h6 class="fw-bold">Distribution & Cabling</h6>
                  <p class="small mb-0">Safe installation of spider boxes, heavy-duty "camel-back" cables, and transfer switches to distribute power across large job sites.</p>
                </div>
              </div>
              <div class="col-md-6">
                <div class="p-4 border-start border-4 border-secondary bg-light h-100 shadow-sm">
                  <h6 class="fw-bold">Fuel Management Services</h6>
                  <p class="small mb-0">Scheduled refueling for on-site generators to ensure 100% uptime during long-term grid failures or complex reconstruction phases.</p>
                </div>
              </div>
            </div>
          </div>

          <h3 class="h4 fw-bold text-primary mb-3">Why Logistics Matter in Restoration</h3>
          <p>Restoration equipment (LGR Dehumidifiers and Air Scrubbers) requires significant amperage. If a building's electrical system is compromised by water or fire, we cannot dry the structure without external power. Our logistics team handles:</p>
          <ul class="list-group list-group-flush mb-5">
            <li class="list-group-item px-0"><strong>Emergency Lighting:</strong> Ensuring safe egress and workspace visibility for our reconstruction crews.</li>
            <li class="list-group-item px-0"><strong>Temporary Fencing:</strong> Securing the perimeter of the disaster site to prevent liability and theft.</li>
            <li class="list-group-item px-0"><strong>Mobile On-Site Offices:</strong> Providing climate-controlled command centers for large-scale loss management.</li>
          </ul>

          <div class="bg-primary text-white p-4 rounded-4 shadow">
            <h4 class="fw-bold mb-3 text-secondary">Logistics Fact: The "Secondary Loss"</h4>
            <p class="small mb-0">
              During a summer power outage, the relative humidity inside a building can climb to **80% within 6 hours**. Without temporary power to run dehumidifiers, mold can begin colonizing surfaces before the utility company even restores the grid. <strong>Temporary power is not a luxury; it is a mitigation necessity.</strong>
            </p>
          </div>
        </div>

        <div class="col-lg-4">
          <div class="sticky-top" style="top: 130px;">
            <div class="card bg-dark text-white p-4 border-0 shadow-sm mb-4">
              <h5 class="text-secondary fw-bold mb-3">Commercial Pre-Planning</h5>
              <p class="small opacity-75">Our <strong>First Priority Program</strong> members have their electrical requirements pre-mapped. In a disaster, our team knows exactly what size generator and how much cabling is needed before we even leave the shop.</p>
              <NuxtLink to="/info/priority-program" class="btn btn-outline-light btn-sm rounded-pill w-100 mt-2">View Priority Program</NuxtLink>
            </div>

            <div class="card border-0 shadow-sm p-4 text-center border-top border-5 border-secondary">
              <h5 class="fw-bold text-primary mb-3">Critical Support Ready</h5>
              <p class="small text-muted mb-4">From retail plazas to master-planned communities, we keep the lights on when it matters most.</p>
              <button 
                class="btn btn-secondary w-100 fw-bold py-2 shadow-sm"
                data-bs-toggle="offcanvas" 
                data-bs-target="#quoteDrawer"
              >
                Get a Power Estimate
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
/* Scoped CSS removed as per instructions - using global main.css */
.ls-1 { letter-spacing: 1px; }
.border-secondary { border-color: var(--color-secondary) !important; }
</style>