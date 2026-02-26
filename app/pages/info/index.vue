<template>
  <div class="info-hub">
    <section class="bg-primary text-white py-5">
      <div class="container py-lg-5 text-center">
        <h6 class="text-secondary fw-bold text-uppercase ls-2 mb-3">Professional Resources</h6>
        <h1 class="display-3 fw-bold mb-4">Information & Partnership Hub</h1>
        <p class="lead mx-auto opacity-90" style="max-width: 800px;">
          Access the tools, programs, and expert insights you need to protect your property and navigate the complexities of restoration and reconstruction.
        </p>
      </div>
    </section>

    <Breadcrumbs class="py-3 border-bottom mb-5" />

    <section class="container mb-5">
      <div class="row g-4 mb-5">
        <div class="col-lg-6">
          <div class="card h-100 border-0 shadow-sm p-4 p-md-5 bg-light">
            <div class="d-flex align-items-center mb-4">
              <div class="icon-box bg-primary text-white me-3">
                <i class="bi bi-star-fill"></i>
              </div>
              <h2 class="h3 fw-bold text-primary mb-0">First Priority Program</h2>
            </div>
            <p class="text-muted mb-4">
              Our exclusive pre-disaster program for commercial property managers and business owners. Ensure your facility is "Restoration Ready" with pre-mapped logistics and guaranteed response times.
            </p>
            <NuxtLink to="/info/priority-program" class="btn btn-primary rounded-pill px-4 align-self-start">
              Explore the Program
            </NuxtLink>
          </div>
        </div>

        <div class="col-lg-6">
          <div class="card h-100 border-0 shadow-sm p-4 p-md-5 bg-light">
            <div class="d-flex align-items-center mb-4">
              <div class="icon-box bg-primary text-white me-3">
                <i class="bi bi-file-earmark-medical"></i>
              </div>
              <h2 class="h3 fw-bold text-primary mb-0">Insurance Professionals</h2>
            </div>
            <p class="text-muted mb-4">
              Resources for adjusters and agents. Access our Xactimate pricing standards, digital moisture logs, and 100% transparent documentation protocols.
            </p>
            <NuxtLink to="/info/insurance-professionals" class="btn btn-primary rounded-pill px-4 align-self-start">
              Adjuster Resources
            </NuxtLink>
          </div>
        </div>
      </div>

      <div class="row g-4">
        <div class="col-md-4">
          <div class="card h-100 border-0 shadow-sm p-4 text-center">
            <i class="bi bi-geo-fill text-secondary fs-1 mb-3"></i>
            <h5 class="fw-bold">Industries We Serve</h5>
            <p class="small text-muted mb-4">Specialized restoration for hospitality, healthcare, retail, and education sectors.</p>
            <NuxtLink to="/info/industries-served" class="btn btn-outline-primary btn-sm rounded-pill mt-auto">View Industries</NuxtLink>
          </div>
        </div>

        <div class="col-md-4">
          <div class="card h-100 border-0 shadow-sm p-4 text-center">
            <i class="bi bi-book text-secondary fs-1 mb-3"></i>
            <h5 class="fw-bold">Resource Center</h5>
            <p class="small text-muted mb-4">Expert guides on moisture prevention, fire safety, and home maintenance tips.</p>
            <NuxtLink to="/info/resource-center" class="btn btn-outline-primary btn-sm rounded-pill mt-auto">Open Library</NuxtLink>
          </div>
        </div>

        <div class="col-md-4">
          <div class="card h-100 border-0 shadow-sm p-4 text-center">
            <i class="bi bi-question-circle text-secondary fs-1 mb-3"></i>
            <h5 class="fw-bold">General FAQ</h5>
            <p class="small text-muted mb-4">Answers to common questions about claims, billing, and the rebuild process.</p>
            <button 
              class="btn btn-outline-primary btn-sm rounded-pill mt-auto"
              data-bs-toggle="offcanvas" 
              data-bs-target="#quoteDrawer"
            >
              Ask a Question
            </button>
          </div>
        </div>
      </div>
    </section>

    <section class="py-5 bg-dark text-white rounded-4 mx-3 mb-5">
      <div class="container py-lg-4">
        <div class="row align-items-center">
          <div class="col-lg-8">
            <h2 class="fw-bold mb-3">Professional Standards. Proven Results.</h2>
            <p class="opacity-75 mb-0">We maintain an open-door policy for all our professional partners. If you require specific documentation or have technical questions about our IICRC-certified processes, our leadership team is available for direct consultation.</p>
          </div>
          <div class="col-lg-4 text-lg-end mt-4 mt-lg-0">
            <button 
              class="btn btn-secondary btn-lg rounded-pill px-5 fw-bold"
              data-bs-toggle="offcanvas" 
              data-bs-target="#quoteDrawer"
            >
              Get in Touch
            </button>
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
.icon-box {
  width: 50px;
  height: 50px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
}

.hover-up { transition: transform 0.3s ease; }
.hover-up:hover { transform: translateY(-5px); }
.ls-2 { letter-spacing: 2px; }
</style>