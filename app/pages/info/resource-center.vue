<template>
  <div class="info-page">
    <section class="bg-primary text-white py-5">
      <div class="container py-lg-5 text-center">
        <h6 class="text-secondary fw-bold text-uppercase ls-2 mb-3">Knowledge is Protection</h6>
        <h1 class="display-3 fw-bold mb-4">Resource Center</h1>
        <p class="lead mx-auto opacity-90" style="max-width: 800px;">
          Your library for property maintenance, disaster prevention, and restoration science. We empower our neighbors in the Shenandoah Valley with the facts they need to protect their investments.
        </p>
      </div>
    </section>

    <Breadcrumbs class="py-3 border-bottom mb-5" />

    <section class="container mb-5">
      <div class="row g-md-5">
        <div class="col-lg-8">
          
          <h2 class="text-primary fw-bold mb-4">Expert Maintenance & Safety Guides</h2>
          <div class="row g-4 mb-5">
            <div class="col-md-6" v-for="guide in guides" :key="guide.title">
              <div class="card h-100 border-0 shadow-sm hover-up overflow-hidden">
                <div class="card-body p-4">
                  <div class="badge bg-secondary text-primary fw-bold mb-2">{{ guide.category }}</div>
                  <h5 class="fw-bold text-primary">{{ guide.title }}</h5>
                  <p class="small text-muted">{{ guide.desc }}</p>
                  <button 
                    class="btn btn-link text-primary p-0 fw-bold text-decoration-none small"
                    data-bs-toggle="offcanvas" 
                    data-bs-target="#quoteDrawer"
                  >
                    Read Guide →
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div class="pdf-repository mb-5">
            <h3 class="h4 fw-bold text-primary mb-4"><i class="bi bi-file-earmark-pdf me-2"></i>Downloadable Resources & Forms</h3>
            <div class="card border-0 shadow-sm">
              <div class="list-group list-group-flush">
                <div v-for="pdf in pdfs" :key="pdf.title" class="list-group-item p-3 d-flex align-items-center justify-content-between">
                  <div class="d-flex align-items-center">
                    <div class="pdf-icon-bg me-3">
                      <i class="bi bi-file-pdf-fill text-danger fs-4"></i>
                    </div>
                    <div>
                      <h6 class="mb-0 fw-bold">{{ pdf.title }}</h6>
                      <small class="text-muted">{{ pdf.size }} • {{ pdf.type }}</small>
                    </div>
                  </div>
                  <a :href="pdf.url" download class="btn btn-outline-primary btn-sm rounded-pill px-3">
                    <i class="bi bi-download me-1"></i> Download
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div class="bg-light p-4 p-lg-5 rounded-4 border-start border-5 border-primary mb-5">
            <h3 class="fw-bold text-primary mb-3">The Restoration Standard (IICRC)</h3>
            <p>We believe in "Restoration over Replacement." We follow the standards set by the Institute of Inspection, Cleaning and Restoration Certification (IICRC). Understanding these standards helps you evaluate the quality of any contractor's work.</p>
            
            

            <div class="row g-4 mt-2">
              <div class="col-md-6">
                <h6 class="fw-bold"><i class="bi bi-droplet-fill text-primary me-2"></i>S500: Water Damage</h6>
                <p class="x-small text-muted">The procedural standard for professional water damage restoration, focusing on health, safety, and structural integrity.</p>
              </div>
              <div class="col-md-6">
                <h6 class="fw-bold"><i class="bi bi-fire text-primary me-2"></i>S520: Mold Remediation</h6>
                <p class="x-small text-muted">The definitive guide for fungal remediation, emphasizing containment and source removal over chemical "killing."</p>
              </div>
            </div>
          </div>
          

          <h3 class="h4 fw-bold text-primary mb-4">Essential Property Checklists</h3>
          <div class="list-group list-group-flush shadow-sm rounded border">
            <div class="list-group-item p-4">
              <h6 class="fw-bold mb-2">Winter Freeze Prevention</h6>
              <p class="small text-muted mb-0">Learn how to insulate your main water line and the correct "drip" method to prevent pipe bursts during Virginia winters.</p>
            </div>
            <div class="list-group-item p-4">
              <h6 class="fw-bold mb-2">Post-Storm Roof Assessment</h6>
              <p class="small text-muted mb-0">A 10-point visual checklist to help you spot hidden wind uplift or hail bruising before leaks start.</p>
            </div>
            <div class="list-group-item p-4">
              <h6 class="fw-bold mb-2">Fire Safety Audit</h6>
              <p class="small text-muted mb-0">Tips for kitchen grease safety, dryer vent cleaning, and electrical load management in older homes.</p>
            </div>
          </div>
        </div>

        <div class="col-lg-4">
          <div class="sticky-top" style="top: 130px;">
            <div class="card bg-dark text-white p-4 border-0 shadow-sm mb-4 mt-4 mt-md-0">
              <h5 class="text-secondary fw-bold mb-3">Expert Advice On-Demand</h5>
              <p class="small opacity-75">Have a specific question about moisture, mold, or structural concerns? Our certified technicians are available for consultations.</p>
              <button 
                class="btn btn-outline-light btn-sm rounded-pill w-100 mt-2"
                data-bs-toggle="offcanvas" 
                data-bs-target="#quoteDrawer"
              >
                Ask a Technician
              </button>
            </div>

            <div class="card border-0 shadow-sm p-4 border-top border-5 border-secondary">
              <h5 class="fw-bold text-primary mb-3">Newsletter Enrollment</h5>
              <p class="x-small text-muted mb-4">Receive seasonal maintenance reminders and local storm alerts directly to your inbox.</p>
              <div class="input-group mb-3">
                <input type="email" class="form-control form-control-sm" placeholder="Your Email">
                <button class="btn btn-primary btn-sm" type="button">Join</button>
              </div>
              <p class="x-small text-center opacity-50 mb-0">No spam. Just local expertise.</p>
            </div>
          </div>
        </div>
      </div>

    </section>

    
  </div>
</template>

<script setup>
const guides = [
  { 
    category: 'Water Safety', 
    title: 'Hidden Leaks: FLIR Technology', 
    desc: 'How infrared cameras find water behind your tiles before the drywall starts to rot.' 
  },
  { 
    category: 'Air Quality', 
    title: 'The Truth About Air Ducts', 
    desc: 'Why "blow-and-go" cleaners might be doing more harm than good to your HVAC system.' 
  },
  { 
    category: 'Construction', 
    title: 'ROI on Remodeling', 
    desc: 'Which kitchen and bath upgrades provide the highest return on investment in Harrisonburg.' 
  },
  { 
    category: 'Insurance', 
    title: 'Documentation 101', 
    desc: 'What photos and logs you need to keep to ensure your insurance claim is approved fast.' 
  }
]

const pdfs = [
  { title: 'Direction to Pay (DTP) Form', size: '145 KB', type: 'PDF Form', url: '/forms/direction-to-pay.pdf' },
  { title: 'First Priority Program Brochure', size: '2.1 MB', type: 'Brochure', url: '/docs/priority-program-overview.pdf' },
  { title: 'Emergency Contact & Valve Tag Guide', size: '890 KB', type: 'Checklist', url: '/docs/emergency-tags.pdf' },
  { title: 'IICRC Homeowner Standards Guide', size: '1.4 MB', type: 'Educational', url: '/docs/iicrc-standards.pdf' }
]
</script>

<style scoped>
.pdf-icon-bg {
  width: 45px;
  height: 45px;
  background-color: #fff1f0;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.x-small { font-size: 0.85rem; }
.ls-2 { letter-spacing: 2px; }
.hover-up { transition: transform 0.3s ease; }
.hover-up:hover { transform: translateY(-5px); }
</style>
