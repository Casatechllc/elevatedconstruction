<template>
  <div class="info-page">
    <section class="bg-primary text-white py-5">
      <div class="container py-lg-5 text-center">
        <h6 class="text-secondary fw-bold text-uppercase ls-2 mb-3">Specialized Expertise</h6>
        <h1 class="display-3 fw-bold mb-4">Industries We Serve</h1>
        <p class="lead mx-auto opacity-90" style="max-width: 800px;">
          Providing tailored restoration and reconstruction solutions for the Shenandoah Valley’s critical sectors. We understand that every industry has unique operational, safety, and compliance requirements.
        </p>
      </div>
    </section>

    <Breadcrumbs class="py-3 border-bottom mb-5" />

    <section class="container mb-5">
      <div class="row g-md-5">
        <div class="col-lg-8">
          <h2 class="text-primary fw-bold mb-4">Industry-Specific Restoration & Rebuilds</h2>
          <p class="lead text-muted">
            Disaster recovery isn't one-size-fits-all. A hospital requires different containment than a retail store, and a school has different scheduling needs than a hotel. We provide the technical precision required for your specific environment.
          </p>

          

          <div class="row g-4 my-5">
            <div class="col-md-6" v-for="industry in industries" :key="industry.name">
              <div class="card h-100 border-0 shadow-sm overflow-hidden">
                <div class="card-body p-4">
                  <div class="d-flex align-items-center mb-3">
                    <div class="icon-square bg-light text-primary me-3">
                      <i :class="industry.icon"></i>
                    </div>
                    <h5 class="fw-bold mb-0">{{ industry.name }}</h5>
                  </div>
                  <p class="small text-muted mb-0">{{ industry.desc }}</p>
                  <hr class="my-3 opacity-10">
                  <div class="small fw-bold text-primary">Key Priority: <span class="text-muted fw-normal">{{ industry.priority }}</span></div>
                </div>
              </div>
            </div>
          </div>

          <div class="bg-light p-4 p-lg-5 rounded-4 border-top border-4 border-primary">
            <h3 class="fw-bold text-primary mb-3">Why Industry Expertise Matters</h3>
            <p>We don't just "fix buildings"; we restore operational capability. Our teams are trained in:</p>
            <ul class="list-unstyled mt-3">
              <li class="mb-2"><i class="bi bi-check2-circle text-secondary me-2"></i><strong>Regulatory Compliance:</strong> Meeting HIPAA, ADA, and OSHA standards for your specific facility type.</li>
              <li class="mb-2"><i class="bi bi-check2-circle text-secondary me-2"></i><strong>Asset Protection:</strong> Specialized protocols for high-value machinery, data centers, and historical archives.</li>
              <li class="mb-2"><i class="bi bi-check2-circle text-secondary me-2"></i><strong>Rapid Scalability:</strong> The ability to deploy large-loss teams for multi-story hospitality or educational campuses.</li>
            </ul>
          </div>
        </div>

        <div class="col-lg-4">
          <div class="sticky-top" style="top: 130px;">
            <div class="card bg-dark text-white p-4 border-0 shadow-sm mb-4 mt-4 mt-md-0">
              <h5 class="text-secondary fw-bold mb-3">Priority Response</h5>
              <p class="small opacity-75">Commercial facilities across these industries can ensure 24/7 emergency priority through our <strong>First Priority Program</strong>.</p>
              <NuxtLink to="/info/priority-program" class="btn btn-outline-light btn-sm rounded-pill w-100 mt-2">Learn More</NuxtLink>
            </div>

            <div class="card border-0 shadow-sm p-4 text-center border-top border-5 border-secondary">
              <h5 class="fw-bold text-primary mb-3">Consult with our Experts</h5>
              <p class="small text-muted mb-4">Need a contractor who understands your industry's specific codes? Let's discuss your facility's needs.</p>
              <button 
                class="btn btn-primary w-100 fw-bold py-3 shadow-sm"
                data-bs-toggle="offcanvas" 
                data-bs-target="#quoteDrawer"
              >
                Schedule a Walkthrough
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const industries = [
  { 
    name: 'Hospitality & Hotels', 
    icon: 'bi-building', 
    desc: 'Minimizing guest impact with quiet-phase construction and rapid room-turnover protocols.',
    priority: 'Revenue Continuity'
  },
  { 
    name: 'Healthcare & Medical', 
    icon: 'bi-hospital', 
    desc: 'Strict infection control, HEPA containment, and sterilized site management for clinics and labs.',
    priority: 'Patient Safety'
  },
  { 
    name: 'Retail & Commercial', 
    icon: 'bi-shop', 
    desc: 'Fast-track rebuilds to reopen doors and protect inventory from smoke and water damage.',
    priority: 'Minimized Downtime'
  },
  { 
    name: 'Education & Schools', 
    icon: 'bi-book', 
    desc: 'Off-hour scheduling and non-toxic material use to ensure student and staff health.',
    priority: 'Compliance & Safety'
  },
  { 
    name: 'Property Management', 
    icon: 'bi-houses', 
    desc: 'Streamlined communication for multi-family units and landlord-tenant coordination.',
    priority: 'Liability Reduction'
  },
  { 
    name: 'Manufacturing & Industrial', 
    icon: 'bi-gear-wide-connected', 
    desc: 'Specialized cleaning for high-value equipment and large-scale structural stabilization.',
    priority: 'Operational Restoration'
  }
]
</script>

<style scoped>
.icon-square {
  width: 48px;
  height: 48px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.25rem;
}
.ls-2 { letter-spacing: 2px; }
</style>