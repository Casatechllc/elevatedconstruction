<template>
  <div class="about-page">
    <section class="bg-primary py-5 text-white position-relative overflow-hidden">
      <div class="container py-lg-5 text-center position-relative z-index-1">
        <h6 class="text-secondary fw-bold text-uppercase ls-2 mb-3">Our Legacy</h6>
        <h1 class="display-3 fw-bold mb-4">Building Trust Since 2001</h1>
        <p class="lead mx-auto opacity-75" style="max-width: 700px;">
          Elevated Construction was founded on a simple promise: to treat every property restoration as if it were our own family home.
        </p>
      </div>
      <div class="bg-shape"></div>
    </section>

    <<Breadcrumbs class="mb-4" />

    <section class="py-5">
      <div class="container py-lg-5">
        <div class="row align-items-center g-5">
          <div class="col-lg-6">
            <img 
              src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=800" 
              alt="Construction site" 
              class="img-fluid rounded shadow-lg border-primary border-bottom border-5 p-0"
            >
          </div>
          <div class="col-lg-6">
            <h2 class="text-primary fw-bold mb-4">The Elevated Standard</h2>
            <p class="text-muted mb-4">
              Headquartered in **Bridgewater, Virginia**, we have spent over two decades serving the Shenandoah Valley. What started as a small local remodeling crew has grown into a premier full-service restoration and construction firm.
            </p>
            <p class="text-muted mb-4">
              We understand that property damage—whether from fire, water, or storm—is more than just a logistical hurdle; it’s a life-altering event. That’s why our approach combines technical precision with genuine empathy.
            </p>
            
            <div class="row g-3">
              <div class="col-md-6">
                <div class="d-flex align-items-center p-3 border rounded shadow-sm">
                  <i class="bi bi-shield-check-fill text-secondary fs-4 me-3"></i>
                  <span class="fw-bold text-primary">Fully Licensed & Insured</span>
                </div>
              </div>
              <div class="col-md-6">
                <div class="d-flex align-items-center p-3 border rounded shadow-sm">
                  <i class="bi bi-clock-history text-secondary fs-4 me-3"></i>
                  <span class="fw-bold text-primary">24/7 Emergency Response</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>


    <section class="py-5 bg-light">
      <div class="container">
        <div class="text-center mb-5">
          <h2 class="text-primary fw-bold">Driven by Our Values</h2>
          <div class="mx-auto bg-secondary mt-2" style="width: 60px; height: 4px;"></div>
        </div>
        <div class="row g-4">
          <div class="col-md-4" v-for="value in values" :key="value.title">
            <div class="card h-100 border-0 shadow-sm p-4 text-center">
              <div class="icon-box bg-primary text-white mx-auto mb-3">
                <i :class="value.icon"></i>
              </div>
              <h5 class="fw-bold text-primary">{{ value.title }}</h5>
              <p class="text-muted small mb-0">{{ value.text }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-5 bg-primary text-white text-center">
      <div class="container py-4">
        <h2 class="fw-bold mb-4">Ready to start your project?</h2>
        <div class="d-flex justify-content-center gap-3">
          <NuxtLink to="/contact" class="btn btn-secondary btn-lg rounded-pill px-5 fw-bold text-primary">
            Get a Free Quote
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import Breadcrumbs from '~/components/Breadcrumbs.vue';

const values = [
  { 
    title: 'Integrity', 
    icon: 'bi-hand-thumbs-up-fill', 
    text: 'We do what we say we will do, when we say we will do it. No shortcuts.' 
  },
  { 
    title: 'Quality', 
    icon: 'bi-gem', 
    text: 'Our work is built to last, meeting and exceeding local Virginia building codes.' 
  },
  { 
    title: 'Community', 
    icon: 'bi-house-heart-fill', 
    text: 'We live where we work. We take pride in restoring our neighbors’ peace of mind.' 
  }
]
</script>

<style scoped>
.ls-2 { letter-spacing: 2px; }

.icon-box {
  width: 60px;
  height: 60px;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
}

.bg-shape {
  position: absolute;
  top: -10%;
  right: -5%;
  width: 400px;
  height: 400px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 50%;
  z-index: 0;
}

.z-index-1 {
  position: relative;
  z-index: 1;
}

/* Ensuring border-primary utility works as intended */
.border-primary {
  border-color: var(--color-primary) !important;
}
</style>