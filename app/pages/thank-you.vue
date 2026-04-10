<template>
  <div class="thank-you-page">
    <section class="bg-primary text-white py-5 min-vh-50 d-flex align-items-center">
      <div class="container py-lg-5 text-center">
        <div class="mb-4">
          <i class="bi bi-check-circle-fill display-1 text-secondary"></i>
        </div>
        <h1 class="display-3 fw-bold mb-3">Request Received</h1>
        <p class="lead mx-auto" style="max-width: 700px;">
          Thank you for choosing Elevated Construction. Your project details have been sent to our Virginia dispatch team. We will review your information and reach out to you shortly.
        </p>
      </div>
    </section>

    <Breadcrumbs class="py-3 border-bottom mb-5" />

    <section class="container mb-5 py-5">
      <div class="row justify-content-center text-center">
        <div class="col-lg-8">
          <h2 class="text-primary fw-bold mb-4">What's Next?</h2>
          <p class="text-muted mb-5">
            While you wait for our project manager to call, we recommend reviewing how we work with insurance providers to streamline your restoration process.
          </p>

          <div class="row g-4 justify-content-center">
            <div class="col-md-5">
              <div class="card h-100 border-0 shadow-sm p-4 hover-lift">
                <i class="bi bi-shield-check fs-1 text-secondary mb-3"></i>
                <h5 class="fw-bold">Insurance Guide</h5>
                <p class="small text-muted">Learn how we coordinate with adjusters to ensure your claim is handled professionally.</p>
                <NuxtLink to="/info/insurance-professionals" class="btn btn-outline-primary rounded-pill mt-auto">
                  View Insurance Info
                </NuxtLink>
              </div>
            </div>

            <div class="col-md-5">
              <div class="card h-100 border-0 shadow-sm p-4 hover-lift">
                <i class="bi bi-house-door fs-1 text-primary mb-3"></i>
                <h5 class="fw-bold">Back to Home</h5>
                <p class="small text-muted">Return to our main page to explore our remodeling gallery or other specialty services.</p>
                <NuxtLink to="/" class="btn btn-primary rounded-pill mt-auto text-white">
                  Return Home
                </NuxtLink>
              </div>
            </div>
          </div>

          <div class="mt-5 pt-4 border-top">
            <p class="fw-bold text-primary mb-1">Need immediate emergency assistance?</p>
            <a :href="`tel:${appConfig.phoneRaw}`" class="h4 text-decoration-none fw-bold text-secondary">
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

useHead({
  title: 'Thank You | Elevated Construction',
  meta: [
    { name: 'robots', content: 'noindex, follow' } // Keep this out of search results
  ]
})
</script>

<style scoped>
.min-vh-50 {
  min-height: 50vh;
}

.hover-lift {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.hover-lift:hover {
  transform: translateY(-10px);
  box-shadow: 0 1rem 3rem rgba(0,0,0,0.1) !important;
}

.text-secondary {
  color: var(--color-secondary) !important;
}
</style>