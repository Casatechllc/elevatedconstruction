<template>
  <div class="category-page">
    <section class="bg-primary text-white py-5">
      <div class="container py-lg-4">
        <h1 class="display-3 fw-bold mb-3">Specialty Surface Cleaning</h1>
        <p class="lead" style="max-width: 750px;">
          Preserving the health and beauty of your home’s most important surfaces. From air quality to fine fabrics, we provide deep-clean solutions that exceed standard maid services.
        </p>
      </div>
    </section>

    <Breadcrumbs class="py-3 border-bottom mb-5" />

    <section class="container mb-5">
      <div class="row g-5 align-items-center mb-5">
        <div class="col-lg-6">
          <h2 class="text-primary fw-bold">Beyond the Surface</h2>
          <p class="text-muted">
            Standard cleaning often leaves behind the contaminants that matter most: allergens in your ducts, oils in your grout, and soot in your upholstery. <strong>Elevated Construction</strong> uses industrial-grade extraction and HEPA-filtration to ensure your home isn't just "tidy"—it's clinically clean.
          </p>
          <div class="row g-3 mt-2">
            <div class="col-6">
              <div class="p-3 border rounded">
                <i class="bi bi-wind text-secondary fs-3"></i>
                <h6 class="fw-bold mt-2">Pure Air</h6>
              </div>
            </div>
            <div class="col-6">
              <div class="p-3 border rounded">
                <i class="bi bi-shield-check text-secondary fs-3"></i>
                <h6 class="fw-bold mt-2">Surface Care</h6>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-6">
          
        </div>
      </div>

      <div class="row g-4">
        <div v-for="item in cleaningLinks" :key="item.title" class="col-md-6 col-lg-3">
          <div class="card h-100 border-0 shadow-sm p-4 text-center hover-up">
            <div class="fs-1 text-primary mb-3"><i :class="item.icon"></i></div>
            <h5 class="fw-bold">{{ item.title }}</h5>
            <NuxtLink :to="item.link" class="btn btn-link text-primary fw-bold text-decoration-none stretched-link">
              Explore
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const cleaningLinks = [
  { title: 'Air Ducts', icon: 'bi-fan', link: '/residential/specialty-cleaning/air-duct-cleaning' },
  { title: 'Content Cleaning', icon: 'bi-box-seam', link: '/residential/specialty-cleaning/content-restoration' },
  { title: 'Tile & Grout', icon: 'bi-grid-3x3', link: '/residential/specialty-cleaning/surface-cleaning' },
  { title: 'Carpet & Upholstery', icon: 'bi-layers', link: '/residential/specialty-cleaning/carpet-cleaning' }
]
</script>

<style scoped>
.hover-up { transition: transform 0.3s; }
.hover-up:hover { transform: translateY(-5px); }
</style>