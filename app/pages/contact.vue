<template>
  <div>
    <section class="bg-primary py-5 text-white">
      <div class="container py-lg-4 text-center">
        <h1 class="display-4 fw-bold">Get Your Estimate</h1>
        <p class="lead opacity-75">Tell us about your project and we'll get back to you with an Elevated solution.</p>
      </div>
    </section>
    <Breadcrumbs/>

    <section class="py-5">
      <div class="container">
        <div class="row g-md-5">
          <div class="col-lg-4">
            <div class="sticky-top" style="top: 150px;">
              <h3 class="text-primary fw-bold mb-4">Contact Details</h3>
              
              <div class="p-4 mb-4 shadow-sm rounded border-start border-5 border-secondary bg-light">
                <h6 class="text-uppercase small fw-bold text-muted ls-1">Emergency 24/7</h6>
                <h6 class="text-uppercase small fw-bold text-muted ls-1">and Non Emergency</h6>
                <a :href="`tel:${appConfig.phoneRaw}`" class="h4 fw-bold text-decoration-none text-primary d-block">
                  {{ appConfig.phoneNumber }}
                </a>
              </div>

              <!-- <div class="p-4 mb-4 shadow-sm rounded border-start border-5 border-primary bg-white border-top border-end border-bottom">
                <div class="d-flex align-items-start">
                  <i class="bi bi-geo-alt-fill text-secondary fs-4 me-3"></i>
                  <div>
                    <h6 class="text-uppercase small fw-bold text-primary ls-1">Main Office</h6>
                    <address class="mb-2 text-muted lh-base">
                      {{ appConfig.address }}
                    </address>
                    <a href="https://maps.google.com" target="_blank" class="small text-decoration-none fw-bold text-secondary">
                      Get Directions <i class="bi bi-arrow-right ms-1"></i>
                    </a>
                  </div>
                </div>
              </div> -->

              <div class="ps-2">
                <div class="mb-3">
                  <h6 class="text-uppercase small fw-bold text-primary ls-1 mb-1">Email</h6>
                  <a :href="`mailto:${appConfig.email}`" class="text-muted">{{ appConfig.email }}</a>
                </div>
                <div>
                  <h6 class="text-uppercase small fw-bold text-primary ls-1 mb-1">Service Area</h6>
                  <p class="text-muted">60-mile radius around Bridgewater</p>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-8">
            <div class="card border-0 shadow-lg p-4 p-md-5 mt-4 mt-md-0">
              <h2 class="text-primary fw-bold mb-4">Request a Quote</h2>
              <ClientOnly>
                <QuoteDrawer :is-inline="true" />
              </ClientOnly>
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