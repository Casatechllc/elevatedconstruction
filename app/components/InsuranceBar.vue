<template>
  <section class="insurance-bar py-5 border-top border-bottom bg-white">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-4 text-center text-lg-start mb-4 mb-lg-0">
          <h5 class="fw-bold text-primary mb-1">Direct Insurance Billing</h5>
          <p class="text-muted small mb-0">We work with all major carriers to streamline your claim.</p>
        </div>
        
        <div class="col-lg-8">
          <div class="d-flex flex-wrap justify-content-center justify-content-lg-between align-items-center gap-4 opacity-75">
            <div class="insurance-logo">STATE FARM</div>
            <div class="insurance-logo">ALLSTATE</div>
            <div class="insurance-logo">PROGRESSIVE</div>
            <div class="insurance-logo">LIBERTY MUTUAL</div>
            <div class="insurance-logo">GEICO</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.insurance-logo {
  font-weight: 800;
  color: #adb5bd;
  font-size: 1.1rem;
  letter-spacing: 1px;
  transition: all 0.3s ease;
  filter: grayscale(100%);
}

.insurance-logo:hover {
  color: var(--color-primary);
  filter: grayscale(0%);
  transform: scale(1.05);
}

.insurance-bar {
  background-image: linear-gradient(to right, #ffffff, #fcfcfc, #ffffff);
}
</style>