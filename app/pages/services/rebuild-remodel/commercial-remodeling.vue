<template>
  <div class="service-page">
    <section class="bg-primary text-white py-5">
      <div class="container py-lg-5">
        <div class="row align-items-center">
          <div class="col-lg-8">
            <h6 class="text-secondary fw-bold text-uppercase ls-2 mb-3">Business-First Construction</h6>
            <h1 class="display-3 fw-bold mb-4">Commercial Remodeling & Build-Outs</h1>
            <p class="lead opacity-90 mb-4">
              Providing professional tenant improvements, office renovations, and retail build-outs across the Shenandoah Valley. We deliver high-impact results with aggressive timelines to keep your business moving forward.
            </p>
            <div class="d-flex flex-wrap gap-3">
              <button 
                class="btn btn-secondary btn-lg rounded-pill px-5 fw-bold shadow"
                data-bs-toggle="offcanvas" 
                data-bs-target="#quoteDrawer"
              >
                Schedule a Site Walkthrough
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <Breadcrumbs class="py-3 border-bottom mb-5" />

    <section class="container mb-5">
      <div class="row g-5">
        <div class="col-lg-8">
          <h2 class="text-primary fw-bold mb-4">Commercial Excellence & Compliance</h2>
          <p class="lead text-muted">
            Commercial remodeling requires a different level of precision. Between ADA compliance, strict fire codes, and the need for seamless project management, you need a Class A contractor that treats your deadline as a hard requirement.
          </p>

          <div class="my-5">
            <img 
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200" 
              alt="Modern Commercial Office Build-out" 
              class="img-fluid rounded-4 shadow-lg"
            >
          </div>

          <h3 class="h4 fw-bold text-primary mb-4 text-uppercase ls-1">Core Commercial Services</h3>
          <div class="row g-4 mb-5">
            <div class="col-md-6">
              <div class="p-4 border h-100 rounded-3 hover-up bg-white">
                <h5 class="fw-bold text-primary"><i class="bi bi-briefcase me-2"></i>Tenant Improvements</h5>
                <p class="small text-muted mb-0">Customizing leased spaces to fit the specific operational needs of new or expanding businesses.</p>
              </div>
            </div>
            <div class="col-md-6">
              <div class="p-4 border h-100 rounded-3 hover-up bg-white">
                <h5 class="fw-bold text-primary"><i class="bi bi-shop me-2"></i>Retail & Restaurant</h5>
                <p class="small text-muted mb-0">High-traffic durable finishes and specialized plumbing/electrical for food service and retail environments.</p>
              </div>
            </div>
            <div class="col-md-6">
              <div class="p-4 border h-100 rounded-3 hover-up bg-white">
                <h5 class="fw-bold text-primary"><i class="bi bi-building-gear me-2"></i>Office Modernization</h5>
                <p class="small text-muted mb-0">Transforming dated layouts into collaborative, tech-forward environments that boost employee morale.</p>
              </div>
            </div>
            <div class="col-md-6">
              <div class="p-4 border h-100 rounded-3 hover-up bg-white">
                <h5 class="fw-bold text-primary"><i class="bi bi-hospital me-2"></i>Healthcare & Medical</h5>
                <p class="small text-muted mb-0">Clinical-grade surfaces and compliance-focused layouts for dental offices, clinics, and labs.</p>
              </div>
            </div>
          </div>

          <div class="bg-light p-4 p-lg-5 rounded-4 border-top border-4 border-primary">
            <h3 class="fw-bold text-primary mb-3">Minimizing Operational Downtime</h3>
            <p>We understand that every day your doors are closed is a day of lost revenue. Our commercial project management focuses on:</p>
            <ul class="list-unstyled mt-3">
              <li class="mb-2"><i class="bi bi-check2-circle text-secondary me-2"></i><strong>Phase Construction:</strong> Working in sections to keep your business partially operational.</li>
              <li class="mb-2"><i class="bi bi-check2-circle text-secondary me-2"></i><strong>Off-Hour Scheduling:</strong> Strategically planning loud or disruptive work during your closed hours.</li>
              <li class="mb-2"><i class="bi bi-check2-circle text-secondary me-2"></i><strong>Rapid Permitting:</strong> Leveraging our local relationships in the Shenandoah Valley to expedite the paperwork.</li>
            </ul>
          </div>
        </div>

        <div class="col-lg-4">
          <div class="sticky-top" style="top: 130px;">
            <div class="card bg-dark text-white p-4 border-0 shadow-sm mb-4">
              <h5 class="text-secondary fw-bold mb-3">The "First Priority" Advantage</h5>
              <p class="small opacity-75">Commercial clients enrolled in our <strong>First Priority Program</strong> receive expedited estimating and preferred scheduling for all remodeling and build-out projects.</p>
              <NuxtLink to="/info/priority-program" class="btn btn-outline-light btn-sm rounded-pill w-100">Learn More</NuxtLink>
            </div>

            <div class="card border-0 shadow-sm p-4">
              <h5 class="text-primary fw-bold mb-3">Commercial Facts</h5>
              <p class="x-small text-muted mb-2"><strong>ADA Compliance:</strong> We ensure all renovations meet the Americans with Disabilities Act standards to protect you from liability.</p>
              <p class="x-small text-muted mb-0"><strong>ROI Focus:</strong> Modernized commercial spaces can increase lease rates by up to 20% in the Virginia market.</p>
            </div>

            <div class="mt-4">
              <button 
                class="btn btn-secondary w-100 fw-bold py-3 shadow-sm"
                data-bs-toggle="offcanvas" 
                data-bs-target="#quoteDrawer"
              >
                Request a Commercial Quote
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
.ls-2 { letter-spacing: 2px; }
.x-small { font-size: 0.85rem; }
.hover-up { transition: transform 0.3s ease; }
.hover-up:hover { transform: translateY(-5px); border-color: var(--color-primary) !important; }
</style>