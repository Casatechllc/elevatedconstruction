<template>
  <div class="service-page">
    <section class="bg-primary text-white py-5">
      <div class="container py-lg-4">
        <h1 class="display-3 fw-bold mb-3">Personal Content Cleaning</h1>
        <p class="lead">Restoring the belongings you thought were lost to smoke, water, or mold.</p>
      </div>
    </section>

    <Breadcrumbs class="py-3 border-bottom mb-5" />

    <section class="container mb-5">
      <div class="row g-5">
        <div class="col-lg-8">
          <h2 class="text-primary fw-bold mb-4">Compassionate Care for Your Keepsakes</h2>
          <p>
            When disaster strikes, it’s often the items inside the home—furniture, electronics, photos, and heirlooms—that matter most. Our content restoration team specializes in the "Pack-Out" and "Clean-Room" processing of your personal property.
          </p>

          <div class="row g-4 my-4">
            <div class="col-md-6">
              <div class="p-4 border-start border-secondary border-4 bg-light">
                <h6 class="fw-bold">Ultrasonic Cleaning</h6>
                <p class="small mb-0">Using sound waves in specialized tanks to remove soot and contaminants from intricate items like jewelry and electronics.</p>
              </div>
            </div>
            <div class="col-md-6">
              <div class="p-4 border-start border-secondary border-4 bg-light">
                <h6 class="fw-bold">Odor Neutralization</h6>
                <p class="small mb-0">De-scenting fabrics and furniture in our controlled ozone or hydroxyl chambers.</p>
              </div>
            </div>
          </div>
        </div>
        
        <div class="col-lg-4">
          <div class="card border-primary p-4">
            <h5 class="fw-bold text-primary">Secure Storage</h5>
            <p class="small">We provide climate-controlled storage for your restored items while your home reconstruction is underway.</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const appConfig = useAppConfig()
</script>