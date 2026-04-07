<template>
  <div class="privacy-policy-page">
    <section class="bg-primary text-white py-5">
      <div class="container py-lg-4 text-center">
        <h1 class="display-4 fw-bold mb-0">Privacy Policy</h1>
        <p class="lead opacity-75 mt-2">How Elevated Construction protects your property and personal data.</p>
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

            <div class="policy-content">
              <h3 class="text-primary fw-bold">1. Introduction</h3>
              <p>
                At Elevated Construction, we value your privacy and are committed to protecting the personal information you share with us. This policy outlines our practices regarding the collection, use, and safeguarding of data across our service areas in the Shenandoah Valley.
              </p>

              <h3 class="text-primary fw-bold mt-5">2. Information We Collect</h3>
              <p>We collect information that you voluntarily provide to us when requesting a quote or utilizing our 24/7 emergency services:</p>
              <ul>
                <li><strong>Contact Data:</strong> Name, phone number, and email address.</li>
                <li><strong>Property Data:</strong> Service addresses and specific details regarding water, fire, or mold damage.</li>
                <li><strong>Communication Logs:</strong> Records of your inquiries and project requirements.</li>
              </ul>

              <h3 class="text-primary fw-bold mt-5">3. How We Use Your Information</h3>
              <p>Your information is used strictly to deliver high-end restoration and reconstruction services:</p>
              <ul>
                <li>To provide accurate project estimates and structural assessments.</li>
                <li>To coordinate emergency dispatch for 24/7 mitigation needs.</li>
                <li>To facilitate insurance claims processing with your designated adjusters.</li>
              </ul>

              <h3 class="text-primary fw-bold mt-5">4. Data Sharing & Security</h3>
              <p>
                We do not sell your personal data. We may share information with trusted subcontractors or insurance professionals only as required to complete your specific project. We implement robust security measures to protect your data from unauthorized access or disclosure.
              </p>

              <h3 class="text-primary fw-bold mt-5">5. Your Rights & Contact</h3>
              <p>
                You have the right to request access to or deletion of your personal data at any time. For questions regarding this policy, please contact our main office:
              </p>
              <div class="bg-light p-4 rounded-3 border-start border-4 border-secondary mt-3">
                <p class="fw-bold mb-1">Elevated Construction</p>
                <p class="mb-1">{{ appConfig.phoneNumber }}</p>
                <p class="mb-0">Email: <a :href="`mailto:${appConfig.email}`" class="text-primary">{{ appConfig.email }}</a></p>
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
  title: 'Privacy Policy | Elevated Construction',
  meta: [
    { name: 'description', content: 'Read the Elevated Construction privacy policy to understand how we protect your data and property information.' }
  ]
})
</script>

<style scoped>
.policy-content h3 {
  font-size: 1.5rem;
  margin-bottom: 1.25rem;
}

.policy-content p, .policy-content li {
  line-height: 1.8;
  color: #4a4a4a;
  margin-bottom: 1rem;
}

.policy-content ul {
  padding-left: 1.25rem;
}

.bg-light {
  background-color: #f8f9fa !important;
}
</style>