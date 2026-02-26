<template>
  <div class="category-page">
    <section class="bg-primary text-white py-5">
      <div class="container py-lg-4">
        <h1 class="display-3 fw-bold mb-3">Structural Rebuild</h1>
        <p class="lead" style="max-width: 750px;">
          Seamlessly transitioning from disaster recovery to professional reconstruction. We specialize in returning your home to pre-loss condition—or better.
        </p>
      </div>
    </section>

    <Breadcrumbs class="py-3 border-bottom mb-5" />

    <section class="container mb-5">
      <div class="row g-4 align-items-center mb-5">
        <div class="col-lg-6">
          <h2 class="text-primary fw-bold">The Path to Restoration</h2>
          <p class="text-muted">
            Many companies stop once the water is dry or the soot is gone. <strong>Elevated Construction</strong> is a full-service firm that stays on-site until the final coat of paint is dry. By handling both the mitigation and the rebuild, we eliminate the communication gaps between different contractors.
          </p>
          <div class="d-flex gap-3 mt-4">
            <div class="p-3 bg-light rounded text-center border-bottom border-primary border-3 w-50">
              <h3 class="fw-bold mb-0 text-primary">25+</h3>
              <small class="text-uppercase fw-bold">Years Exp.</small>
            </div>
            <div class="p-3 bg-light rounded text-center border-bottom border-secondary border-3 w-50">
              <h3 class="fw-bold mb-0 text-primary">A-Z</h3>
              <small class="text-uppercase fw-bold">Management</small>
            </div>
          </div>
        </div>
        <div class="col-lg-6">
          <img src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=800" alt="Home Framing and Reconstruction" class="img-fluid rounded shadow-lg">
        </div>
      </div>

      <div class="row g-4">
        <div class="col-md-6">
          <div class="card h-100 p-4 border-0 shadow-sm">
            <h4 class="fw-bold text-primary"><i class="bi bi-house-gear-fill me-2"></i>Full Reconstruction</h4>
            <p class="small text-muted">Complete structural repairs, including framing, roofing, and foundational work following catastrophic loss.</p>
            <NuxtLink to="/residential/reconstruction" class="btn btn-link text-primary p-0 fw-bold text-decoration-none">Learn More →</NuxtLink>
          </div>
        </div>
        <div class="col-md-6">
          <div class="card h-100 p-4 border-0 shadow-sm">
            <h4 class="fw-bold text-primary"><i class="bi bi-wind me-2"></i>Advanced Odor Elimination</h4>
            <p class="small text-muted">Deep-set odor removal in subfloors and structural members using thermal fogging and encapsulation.</p>
            <NuxtLink to="/residential/odor-elimination" class="btn btn-link text-primary p-0 fw-bold text-decoration-none">Learn More →</NuxtLink>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const appConfig = useAppConfig()
</script>