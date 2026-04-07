<template>
  <div class="accessibility-page">
    <section class="bg-primary text-white py-5">
      <div class="container py-lg-4 text-center">
        <h1 class="display-4 fw-bold mb-0">Accessibility Statement</h1>
        <p class="lead opacity-75 mt-2">Our commitment to an inclusive digital experience.</p>
      </div>
    </section>

    <Breadcrumbs class="py-3 border-bottom mb-5" />

    <section class="container mb-5">
      <div class="row justify-content-center">
        <div class="col-lg-9">
          <div class="card border-0 shadow-sm p-4 p-md-5">
            <p class="text-muted mb-5">
              <strong>Last Updated:</strong> {{ new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }) }}
            </p>

            <div class="accessibility-content">
              <h3 class="text-primary fw-bold">1. Our Commitment</h3>
              <p>
                Elevated Construction is committed to ensuring digital accessibility for people with disabilities. We are continually improving the user experience for everyone and applying the relevant accessibility standards to our online presence.
              </p>

              <h3 class="text-primary fw-bold mt-5">2. Conformance Status</h3>
              <p>
                We strive to conform to the <strong>Web Content Accessibility Guidelines (WCAG) 2.1 level AA</strong>. These guidelines explain how to make web content more accessible for people with a wide array of disabilities, including visual, auditory, physical, speech, cognitive, language, learning, and neurological disabilities.
              </p>

              <h3 class="text-primary fw-bold mt-5">3. Accessibility Features</h3>
              <p>To help ensure an "Elevated" experience for all visitors, our website incorporates several accessibility features, including:</p>
              <ul>
                <li><strong>Alt Text:</strong> Providing descriptive alternative text for all functional images and diagrams.</li>
                <li><strong>Color Contrast:</strong> Ensuring sufficient contrast ratios between text and backgrounds.</li>
                <li><strong>Keyboard Navigation:</strong> Maintaining a logical tab order for users who navigate without a mouse.</li>
                <li><strong>Responsive Design:</strong> Ensuring content remains legible and functional across various screen sizes and zoom levels.</li>
              </ul>

              <h3 class="text-primary fw-bold mt-5">4. Feedback & Contact</h3>
              <p>
                We welcome your feedback on the accessibility of the Elevated Construction website. If you encounter accessibility barriers or have suggestions for improvement, please let us know:
              </p>
              
              <div class="bg-light p-4 rounded-3 border-start border-4 border-secondary mt-3">
                <p class="fw-bold mb-1">Elevated Construction</p>
                <p class="mb-1">Phone: <a :href="`tel:${appConfig.phoneRaw}`" class="text-decoration-none fw-bold">{{ appConfig.phoneNumber }}</a></p>
                <p class="mb-0">Email: <a :href="`mailto:${appConfig.email}`" class="text-primary fw-bold">{{ appConfig.email }}</a></p>
              </div>

              <p class="mt-4 small text-muted">
                We try to respond to feedback within 5 business days.
              </p>
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
  title: 'Accessibility Statement | Elevated Construction',
  meta: [
    { name: 'description', content: 'Elevated Construction is committed to ensuring digital accessibility for all users. View our accessibility statement and features.' }
  ]
})
</script>

<style scoped>
.accessibility-content h3 {
  font-size: 1.5rem;
}

.accessibility-content p, .accessibility-content li {
  line-height: 1.8;
  color: #4a4a4a;
  margin-bottom: 1rem;
}

.accessibility-content ul {
  padding-left: 1.25rem;
}

.bg-light {
  background-color: #f8f9fa !important;
}
</style>