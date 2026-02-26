<template>
  <div class="info-page">
    <section class="bg-primary text-white py-5">
      <div class="container py-lg-5">
        <h6 class="text-secondary fw-bold text-uppercase ls-2 mb-3">B2B Partnership</h6>
        <h1 class="display-3 fw-bold mb-4">First Priority Program</h1>
        <p class="lead opacity-90" style="max-width: 800px;">
          Minimize downtime, protect your tenants, and stabilize your assets. Our First Priority Program ensures that when disaster strikes, your facility is our first stop.
        </p>
        <div class="d-flex flex-wrap gap-3 mt-4">
          <button 
            class="btn btn-secondary btn-lg rounded-pill px-5 fw-bold shadow"
            data-bs-toggle="offcanvas" 
            data-bs-target="#quoteDrawer"
          >
            Enroll My Property
          </button>
        </div>
      </div>
    </section>

    <Breadcrumbs class="py-3 border-bottom mb-5" />

    <section class="container mb-5">
      <div class="row g-5">
        <div class="col-lg-8">
          <h2 class="text-primary fw-bold mb-4">Preparation is the Best Mitigation</h2>
          <p class="lead text-muted">
            For commercial entities, "Recovery" starts long before the emergency. The First Priority Program (FPP) is a no-cost/low-cost partnership that allows us to map your facility's critical infrastructure, ensuring a 60-minute targeted response during a crisis.
          </p>

          

          <h3 class="h4 fw-bold text-primary mt-5 mb-4">Program Benefits</h3>
          <div class="row g-4 mb-5">
            <div class="col-md-6" v-for="benefit in benefits" :key="benefit.title">
              <div class="d-flex align-items-start p-3 border rounded h-100 bg-white shadow-sm">
                <i class="bi bi-check-circle-fill text-secondary fs-4 me-3"></i>
                <div>
                  <h6 class="fw-bold mb-1">{{ benefit.title }}</h6>
                  <p class="small text-muted mb-0">{{ benefit.desc }}</p>
                </div>
              </div>
            </div>
          </div>

          <div class="bg-light p-4 p-lg-5 rounded-4 mb-5">
            <h3 class="fw-bold text-primary mb-3">What is an ERP (Emergency Response Plan)?</h3>
            <p>As part of the enrollment, our team performs a site walkthrough to document your "Critical Five":</p>
            <ol class="small text-muted">
              <li class="mb-2"><strong>Main Water Shut-offs:</strong> Photographed and tagged so any staff member can stop a flood.</li>
              <li class="mb-2"><strong>Electrical Panels:</strong> Mapped for emergency generator tie-ins and circuit isolation.</li>
              <li class="mb-2"><strong>HVAC Layout:</strong> Documented for rapid air-scrubbing and containment setup.</li>
              <li class="mb-2"><strong>Priority Areas:</strong> Identifying data rooms or record storage that require "First-Out" protection.</li>
              <li class="mb-2"><strong>Pre-Approved Pricing:</strong> We establish labor and equipment rates in advance to skip the red tape during the claim.</li>
            </ol>
          </div>

          <h3 class="h4 fw-bold text-primary mb-4">Membership Tiers & Pricing</h3>
          <div class="table-responsive">
            <table class="table table-bordered align-middle">
              <thead class="bg-primary text-white">
                <tr>
                  <th>Feature</th>
                  <th>Standard (No Cost)</th>
                  <th>Premium ($49/mo)</th>
                </tr>
              </thead>
              <tbody class="small">
                <tr>
                  <td>Facility Walkthrough & ERP</td>
                  <td class="text-center"><i class="bi bi-check2 text-success"></i></td>
                  <td class="text-center"><i class="bi bi-check2 text-success"></i></td>
                </tr>
                <tr>
                  <td>Guaranteed Response Time</td>
                  <td class="text-center">2-4 Hours</td>
                  <td class="text-center fw-bold text-primary">60-90 Minutes</td>
                </tr>
                <tr>
                  <td>Pre-Negotiated Pricing</td>
                  <td class="text-center"><i class="bi bi-check2 text-success"></i></td>
                  <td class="text-center"><i class="bi bi-check2 text-success"></i></td>
                </tr>
                <tr>
                  <td>Priority Logistics (Power/HVAC)</td>
                  <td class="text-center"><i class="bi bi-dash"></i></td>
                  <td class="text-center fw-bold text-primary">First Dispatch</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div class="col-lg-4">
          <div class="sticky-top" style="top: 130px;">
            <div class="card bg-dark text-white p-4 border-0 shadow mb-4">
              <h5 class="text-secondary fw-bold mb-3">Reduce Liability</h5>
              <p class="small opacity-75">Documentation is the key to a successful commercial claim. By having a pre-loss file on record, we can prove the pre-existing condition of your facility to the adjuster instantly.</p>
            </div>

            <div class="card border-0 shadow-sm p-4 text-center border-top border-5 border-secondary">
              <h5 class="fw-bold text-primary mb-3">Request a Site Audit</h5>
              <p class="small text-muted mb-4">Ready to put your facility at the top of our list? Let's build your ERP together.</p>
              <button 
                class="btn btn-primary w-100 fw-bold py-3 shadow-sm"
                data-bs-toggle="offcanvas" 
                data-bs-target="#quoteDrawer"
              >
                Enroll Today
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const benefits = [
  { title: 'Preferred Scheduling', desc: 'During wide-scale regional disasters (storms/floods), FPP members move to the front of our dispatch queue.' },
  { title: 'Asset Documentation', desc: 'Digital logs of all flooring, finishes, and infrastructure to expedite the insurance claim process.' },
  { title: 'Zero Retainer Fees', desc: 'Our standard tier allows you to establish a relationship with a Class A contractor without upfront costs.' },
  { title: 'Dedicated Project Manager', desc: 'A single point of contact who knows your building layout as well as your own staff does.' }
]
</script>

<style scoped>
.ls-2 { letter-spacing: 2px; }
.bg-light { background-color: rgba(86, 8, 115, 0.05) !important; }
</style>