<template>
  <div class="info-page">
    <section class="bg-primary text-white py-5">
      <div class="container py-lg-5">
        <h6 class="text-secondary fw-bold text-uppercase ls-2 mb-3">Professional Advocacy</h6>
        <h1 class="display-3 fw-bold mb-4">Insurance & Claims Resource</h1>
        <p class="lead opacity-90" style="max-width: 850px;">
          Navigating the bridge between property loss and professional recovery. We provide adjusters with the transparent data they need and homeowners with the guidance they deserve.
        </p>
        <div class="d-flex flex-wrap gap-3 mt-4">
          <button 
            class="btn btn-secondary btn-lg rounded-pill px-5 fw-bold shadow"
            data-bs-toggle="offcanvas" 
            data-bs-target="#quoteDrawer"
          >
            Start a Documented Claim
          </button>
        </div>
      </div>
    </section>

    <Breadcrumbs class="py-3 border-bottom mb-5" />

    <section class="container mb-5">
      <div class="row g-md-5">
        <div class="col-lg-8">
          
          <h2 class="text-primary fw-bold mb-4">How to File a Claim: Step-by-Step</h2>
          <div class="process-steps mb-5">
            <div class="step-item d-flex mb-4">
              <div class="step-num-circle me-3">1</div>
              <div>
                <h5 class="fw-bold">Safety & Mitigation First</h5>
                <p class="small text-muted">Before calling the agent, ensure the property is safe. If there is active water or fire damage, call <strong>Elevated Construction</strong> immediately. Your policy <em>requires</em> you to "mitigate" (stop) further damage to honor the claim.</p>
              </div>
            </div>
            <div class="step-item d-flex mb-4">
              <div class="step-num-circle me-3">2</div>
              <div>
                <h5 class="fw-bold">Contact Your Carrier</h5>
                <p class="small text-muted">Call your 24/7 claims hotline. Provide them with your policy number and the date of loss. Tell them you have already contacted a <strong>licensed restoration professional</strong> to stabilize the site.</p>
              </div>
            </div>
            <div class="step-item d-flex mb-4">
              <div class="step-num-circle me-3">3</div>
              <div>
                <h5 class="fw-bold">Assigning an Adjuster</h5>
                <p class="small text-muted mb-5">The carrier will assign a field adjuster. We prefer to be on-site when they arrive to ensure every hidden technical detail (like sub-floor moisture or attic soot) is included in their initial scope.</p>
              </div>
            </div>
          </div>          

         <div class="bg-light p-4 p-lg-5 rounded-4 mb-5 border-start border-5 border-primary mt-5">
            <div class="mb-4">
                <h3 class="fw-bold text-primary mb-2">Adjuster & Agent Resources</h3>
                <p class="text-muted">
                A successful claim is built on <strong>Total Transparency</strong>. Elevated Construction utilizes the industry-standard software and IICRC protocols you rely on.
                </p>
            </div>

            <div class="row g-4">
                <div class="col-md-6">
                <div class="d-flex align-items-start">
                    <i class="bi bi-check-square-fill text-primary mt-1 me-3"></i>
                    <div>
                    <h6 class="fw-bold mb-1">Xactimate Pricing</h6>
                    <p class="small text-muted mb-0">Standardized, fair-market line items for seamless estimate approval.</p>
                    </div>
                </div>
                </div>

                <div class="col-md-6">
                <div class="d-flex align-items-start">
                    <i class="bi bi-check-square-fill text-primary mt-1 me-3"></i>
                    <div>
                    <h6 class="fw-bold mb-1">Digital Moisture Logs</h6>
                    <p class="small text-muted mb-0">Daily atmospheric and moisture readings for strict S500 compliance.</p>
                    </div>
                </div>
                </div>

                <div class="col-md-6">
                <div class="d-flex align-items-start">
                    <i class="bi bi-check-square-fill text-primary mt-1 me-3"></i>
                    <div>
                    <h6 class="fw-bold mb-1">Matterport Documentation</h6>
                    <p class="small text-muted mb-0">High-resolution 360° scans of the loss site to verify scope accuracy.</p>
                    </div>
                </div>
                </div>

                <div class="col-md-6">
                <div class="d-flex align-items-start">
                    <i class="bi bi-check-square-fill text-primary mt-1 me-3"></i>
                    <div>
                    <h6 class="fw-bold mb-1">Detailed Scopes</h6>
                    <p class="small text-muted mb-0">Clear, documented separation between Mitigation and Rebuild phases.</p>
                    </div>
                </div>
                </div>
            </div>
         </div>

          <div class="mb-5">
          <h3 class="h4 fw-bold text-primary mb-4 text-center">Common Insurance Misconceptions</h3>
          
          <div class="row g-4">
            <div class="col-md-6">
              <div class="card h-100 border-0 shadow-sm overflow-hidden">
                <div class="bg-primary py-2 px-3 text-white small fw-bold text-uppercase ls-1">
                  Myth #1: Contractor Choice
                </div>
                <div class="card-body">
                  <h5 class="fw-bold mb-2">"I have to use the company my insurance recommends."</h5>
                  <p class="small text-muted mb-0">
                    <strong>The Reality:</strong> In almost every state, including Virginia, you have the legal right to choose your own contractor. While carriers suggest "Preferred Vendors," those vendors often have contracts to minimize costs for the insurance company. Choosing your own independent professional ensures your home's best interest is the only priority.
                  </p>
                </div>
              </div>
            </div>

            <div class="col-md-6">
              <div class="card h-100 border-0 shadow-sm overflow-hidden">
                <div class="bg-primary py-2 px-3 text-white small fw-bold text-uppercase ls-1">
                  Myth #2: Rate Increases
                </div>
                <div class="card-body">
                  <h5 class="fw-bold mb-2">"If I file a claim, my rates will automatically go up."</h5>
                  <p class="small text-muted mb-0">
                    <strong>The Reality:</strong> Most homeowners' insurance rate increases are determined by ZIP-code-wide events or regional "acts of God." A single "no-fault" water claim—such as a sudden pipe burst—is exactly what your policy is designed for and rarely triggers an individual rate hike.
                  </p>
                </div>
              </div>
            </div>

            <div class="col-md-6">
              <div class="card h-100 border-0 shadow-sm overflow-hidden">
                <div class="bg-primary py-2 px-3 text-white small fw-bold text-uppercase ls-1">
                  Myth #3: The Deductible
                </div>
                <div class="card-body">
                  <h5 class="fw-bold mb-2">"The contractor can waive my insurance deductible."</h5>
                  <p class="small text-muted mb-0">
                    <strong>The Reality:</strong> Requesting or offering to "waive" a deductible is considered insurance fraud in most jurisdictions. The deductible is a legally binding portion of your contract with the carrier and must be paid to the contractor to ensure a legitimate, fully funded restoration.
                  </p>
                </div>
              </div>
            </div>

              <div class="col-md-6">
                <div class="card h-100 border-0 shadow-sm overflow-hidden">
                  <div class="bg-primary py-2 px-3 text-white small fw-bold text-uppercase ls-1">
                    Myth #4: Coverage Limits
                  </div>
                  <div class="card-body">
                    <h5 class="fw-bold mb-2">"Standard policies cover every type of water damage."</h5>
                    <p class="small text-muted mb-0">
                      <strong>The Reality:</strong> Most standard policies cover "sudden and accidental" water loss but exclude "gradual seepage" or "groundwater flooding." This is why professional documentation is vital—we help prove the sudden nature of the loss to ensure your coverage is applied correctly.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- <h3 class="h4 fw-bold text-primary mb-3">Important Documentation Links</h3>
          <p class="small text-muted mb-4">Click below to view or download standard industry forms used during our restoration process:</p>
          <div class="list-group list-group-flush shadow-sm rounded border">
            <a href="#" class="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
              <div><i class="bi bi-file-earmark-pdf text-danger me-2"></i> Direction to Pay (DTP) Form</div>
              <span class="badge bg-light text-primary rounded-pill">View PDF</span>
            </a>
            <a href="#" class="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
              <div><i class="bi bi-file-earmark-pdf text-danger me-2"></i> Work Authorization Agreement</div>
              <span class="badge bg-light text-primary rounded-pill">View PDF</span>
            </a>
            <a href="#" class="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
              <div><i class="bi bi-file-earmark-pdf text-danger me-2"></i> Certificate of Completion (COC)</div>
              <span class="badge bg-light text-primary rounded-pill">View PDF</span>
            </a>
          </div> -->
        </div>

        <div class="col-lg-4">
          <div class="sticky-top" style="top: 130px;">
            <div class="card border-0 shadow-sm p-4 mb-4 border-top border-5 border-secondary">
              <h5 class="text-primary fw-bold mb-3">Adjuster Direct Line</h5>
              <p class="small text-muted">Are you an adjuster looking for a site update or a specific moisture log?</p>
              <a :href="`tel:${appConfig.phoneRaw}`" class="btn btn-primary w-100 fw-bold mb-3">Call Our Claims Dept</a>
              <p class="x-small text-center opacity-75 mb-0">Priority response for active claims.</p>
            </div>

            <div class="card bg-dark text-white p-4 mb-4 border-0 shadow">
              <h5 class="text-secondary fw-bold mb-3">Need to Know</h5>
              <p class="x-small mb-2"><strong>The Deductible:</strong> This is your only out-of-pocket expense. It is paid directly to the contractor, not the insurance company.</p>
              <p class="x-small mb-2"><strong>ACV vs RCV:</strong> Ask your agent if you have "Replacement Cost Value" (full cost) or "Actual Cash Value" (depreciated value).</p>
              <p class="x-small mb-0"><strong>Supplementing:</strong> If we find more damage during demolition, we "Supplement" the claim by sending evidence to the adjuster for approval.</p>
            </div>

            <div class="card bg-secondary text-primary p-4 text-center border-0 shadow">
              <h5 class="fw-bold mb-3">Starting a Claim?</h5>
              <p class="small mb-4">Let our team help you document the loss correctly from hour one.</p>
              <button 
                class="btn btn-primary w-100 fw-bold py-2 shadow-sm"
                data-bs-toggle="offcanvas" 
                data-bs-target="#quoteDrawer"
              >
                Request Inspection
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
.step-num-circle {
  width: 40px;
  height: 40px;
  background-color: var(--color-primary);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  flex-shrink: 0;
}
.x-small { font-size: 0.85rem; }
.ls-2 { letter-spacing: 2px; }
</style>