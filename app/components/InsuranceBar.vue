<template>
  <section class="insurance-bar py-5 border-top border-bottom">
    <div class="container mb-4">
      <div class="row justify-content-center text-center">
        <div class="col-lg-8">
          <h5 class="fw-bold text-primary mb-1 text-uppercase ls-1">Direct Insurance Billing</h5>
          <p class="text-muted small mb-0">
            Elevated Construction is a preferred provider for all major carriers in the Shenandoah Valley.
          </p>
        </div>
      </div>
    </div>

    <div class="marquee-container">
      <div class="marquee-track">
        <div class="insurance-logo">STATE FARM</div>
        <div class="insurance-logo">ALLSTATE</div>
        <div class="insurance-logo">PROGRESSIVE</div>
        <div class="insurance-logo">LIBERTY MUTUAL</div>
        <div class="insurance-logo">GEICO</div>
        <div class="insurance-logo">USA_A</div>
        <div class="insurance-logo">NATIONWIDE</div>
        <div class="insurance-logo">TRAVELERS</div>
        <div class="insurance-logo">CHUBB</div>
        
        <div class="insurance-logo">STATE FARM</div>
        <div class="insurance-logo">ALLSTATE</div>
        <div class="insurance-logo">PROGRESSIVE</div>
        <div class="insurance-logo">LIBERTY MUTUAL</div>
        <div class="insurance-logo">GEICO</div>
        <div class="insurance-logo">USA_A</div>
        <div class="insurance-logo">NATIONWIDE</div>
        <div class="insurance-logo">TRAVELERS</div>
        <div class="insurance-logo">CHUBB</div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.ls-1 { letter-spacing: 1px; }

/* Custom light background using your secondary brand color */
.insurance-bar {
  /* Adjust the 0.05 alpha to make it more or less subtle */
  background-color: rgba(249, 177, 21, 0.07); 
}

.marquee-container {
  width: 100%;
  overflow: hidden;
  display: flex;
  position: relative;
  /* Fade effect tuned for the gold background */
  mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
  -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
}

.marquee-track {
  display: flex;
  gap: 5rem;
  width: max-content;
  animation: scroll 40s linear infinite;
  padding: 10px 0;
}

.marquee-track:hover {
  animation-play-state: paused;
}

@keyframes scroll {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}

.insurance-logo {
  font-weight: 800;
  /* Darker gray to stand out against the light gold */
  color: #8d96a0; 
  font-size: 1.25rem;
  letter-spacing: 2px;
  white-space: nowrap;
  transition: all 0.3s ease;
  cursor: default;
  user-select: none;
}

.insurance-logo:hover {
  color: var(--color-primary);
  transform: scale(1.1);
}

@media (max-width: 768px) {
  .marquee-track {
    gap: 3.5rem;
    animation: scroll 25s linear infinite;
  }
}
</style>