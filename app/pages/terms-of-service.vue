<template>
  <div class="terms-page">
    <section class="bg-primary text-white py-5">
      <div class="container py-lg-4 text-center">
        <h1 class="display-4 fw-bold mb-0">Terms of Service</h1>
        <p class="lead opacity-75 mt-2">Legal guidelines for using the Elevated Construction website.</p>
      </div>
    </section>

    <Breadcrumbs class="py-3 border-bottom mb-5" />

    <section class="container mb-5">
      <div class="row justify-content-center">
        <div class="col-lg-9">
          <div class="card border-0 shadow-sm p-4 p-md-5">
            <p class="text-muted mb-5">
              <strong>Effective Date:</strong> {{ new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }) }}
            </p>

            <div class="terms-content">
              <h3 class="text-primary fw-bold">1. Acceptance of Terms</h3>
              <p>
                By accessing and using this website, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.
              </p>
              <p>By using this site, you agree to the terms provided by Elevated Construction.</p>

              <h3 class="text-primary fw-bold mt-5">2. Scope of Services</h3>
              <p>
                The information provided on this website is for general informational purposes regarding our restoration, mitigation, and remodeling services. <strong>Website use does not constitute a construction contract.</strong> A formal, written, and signed agreement is required before any physical work, such as water mitigation or structural reconstruction, begins on your property.
              </p>

              <h3 class="text-primary fw-bold mt-5">3. Intellectual Property</h3>
              <p>
                All content on this site, including the "Elevated Construction" name, logos, text, and project portfolio images, is the exclusive property of <strong>Elevated Construction</strong> and is protected by applicable copyright and trademark law. Unauthorized use of these materials is strictly prohibited.
              </p>

              <h3 class="text-primary fw-bold mt-5">4. Liability Limitations</h3>
              <p>
                Elevated Construction shall not be held liable for any damages arising out of the use or inability to use the materials on this website. While we strive for 100% accuracy, we do not warrant that the materials on this site are accurate, complete, or current.
              </p>

              <h3 class="text-primary fw-bold mt-5">5. Governing Law</h3>
              <p>
                Any claim relating to Elevated Construction’s website shall be governed by the laws of the <strong>Commonwealth of Virginia</strong>, depending on the jurisdiction where the primary service is requested, without regard to its conflict of law provisions.
              </p>

              <div class="bg-light p-4 rounded-3 border-start border-4 border-secondary mt-5">
                <p class="fw-bold mb-1 text-primary">Questions?</p>
                <p class="mb-0 text-muted">
                  If you have questions regarding these terms, please contact us at 
                  <a :href="`mailto:${appConfig.email}`" class="fw-bold text-decoration-none">{{ appConfig.email }}</a>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const appConfig = useAppConfig()

useHead({
  title: 'Terms of Service | Elevated Construction',
  meta: [
    { name: 'description', content: 'Terms and conditions for using the Elevated Construction website and inquiring about our restoration services.' }
  ]
})
</script>

<style scoped>
.terms-content h3 {
  font-size: 1.5rem;
}

.terms-content p {
  line-height: 1.8;
  color: #4a4a4a;
  margin-bottom: 1.25rem;
}

.bg-light {
  background-color: #f8f9fa !important;
}
</style>