<script setup>
defineProps(['title', 'desc', 'icon'])
</script>

<template>
  <div class="col-md-6 col-lg-3">
    <div class="card h-100 border-0 shadow-sm hover-lift transition-all p-4">
      <div class="icon-box mb-3 d-flex align-items-center justify-content-center">
        <i :class="['bi', icon, 'fs-1 text-primary']"></i>
      </div>
      <h4 class="fw-bold">{{ title }}</h4>
      <p class="text-muted small">{{ desc }}</p>
      <NuxtLink to="/services" class="text-primary fw-bold text-decoration-none mt-auto">
        Learn More →
      </NuxtLink>
    </div>
  </div>
</template>

<style scoped>
.card {
  transition: transform 0.3s ease;
  border-bottom: 3px solid transparent !important;
}
.card:hover {
  transform: translateY(-10px);
  border-color: var(--color-secondary) !important;
}
.icon-box {
  width: 60px;
  height: 60px;
  background: rgba(86, 8, 115, 0.1);
  border-radius: 12px;
}
</style>