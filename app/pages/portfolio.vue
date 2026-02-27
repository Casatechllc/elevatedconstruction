<template>
  <div class="portfolio-page">
    <section class="bg-primary text-white py-5">
      <div class="container py-lg-5 text-center">
        <h6 class="text-secondary fw-bold text-uppercase ls-2 mb-3">Our Work</h6>
        <h1 class="display-3 fw-bold mb-4">Project Gallery</h1>
        <p class="lead mx-auto opacity-90" style="max-width: 800px;">
          From emergency disaster recovery to high-end residential remodeling. Explore the transformations we've delivered for homeowners and businesses across the Shenandoah Valley.
        </p>
      </div>
    </section>

    <Breadcrumbs class="py-3 border-bottom mb-4" />

    <section class="container mb-5">
      <div class="d-flex flex-wrap justify-content-center gap-2 mb-5">
        <button 
          v-for="filter in filters" 
          :key="filter"
          @click="activeFilter = filter"
          class="btn btn-sm rounded-pill px-4 fw-bold transition-all"
          :class="activeFilter === filter ? 'btn-primary' : 'btn-outline-primary'"
        >
          {{ filter }}
        </button>
      </div>

      <div class="row g-4">
        <transition-group name="fade">
          <div 
            v-for="project in filteredProjects" 
            :key="project.id" 
            class="col-md-6 col-lg-4 project-card"
          >
            <div class="card h-100 border-0 shadow-sm overflow-hidden">
              <div class="position-relative">
                <img 
                  :src="project.image" 
                  :alt="project.title" 
                  class="img-fluid project-img"
                >
                <div class="category-badge">
                  <span v-for="tag in project.tags" :key="tag" class="badge bg-secondary text-primary me-1">
                    {{ tag }}
                  </span>
                </div>
              </div>
              <div class="card-body">
                <h5 class="fw-bold mb-1">{{ project.title }}</h5>
                <p class="small text-muted mb-0">{{ project.description }}</p>
              </div>
            </div>
          </div>
        </transition-group>
      </div>

      <div v-if="filteredProjects.length === 0" class="text-center py-5">
        <p class="text-muted">No projects found for this category.</p>
        <button @click="activeFilter = 'All'" class="btn btn-link text-primary">View All Projects</button>
      </div>
    </section>

    <section class="py-5 bg-light text-center rounded-4 mx-3 mb-5">
      <div class="container py-3">
        <h2 class="fw-bold text-primary mb-3">Inspired by a Transformation?</h2>
        <p class="text-muted mb-4">Let's discuss how we can elevate your own property.</p>
        <button 
          class="btn btn-primary btn-lg rounded-pill px-5 fw-bold shadow"
          data-bs-toggle="offcanvas" 
          data-bs-target="#quoteDrawer"
        >
          Start Your Project
        </button>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const activeFilter = ref('All')

// Add your filter categories here
const filters = ['All', 'Before', 'After', 'Kitchen', 'Living Room', 'Bedroom', 'Disaster Recovery']

// Project Data - Add your image URLs and information here
const projects = ref([
  {
    id: 1,
    title: 'Modern Kitchen Overhaul',
    description: 'A complete residential kitchen remodel featuring custom cabinetry.',
    image: 'https://placehold.co/600x400?text=Kitchen+After',
    tags: ['After', 'Kitchen']
  },
  {
    id: 2,
    title: 'Dated Living Space',
    description: 'The original state of a multi-family living room before restoration.',
    image: 'https://placehold.co/600x400?text=Living+Room+Before',
    tags: ['Before', 'Living Room']
  },
  {
    id: 3,
    title: 'Flood Restoration Success',
    description: 'Full recovery and rebuild following a major water loss event.',
    image: 'https://placehold.co/600x400?text=Flood+Recovery',
    tags: ['After', 'Disaster Recovery']
  },
  {
    id: 4,
    title: 'Master Suite Transformation',
    description: 'High-end bedroom remodeling for a luxury residence.',
    image: 'https://placehold.co/600x400?text=Bedroom+After',
    tags: ['After', 'Bedroom']
  },
  {
    id: 5,
    title: 'Pre-Construction Assessment',
    description: 'Initial site walkthrough for a structural reconstruction project.',
    image: 'https://placehold.co/600x400?text=Structural+Before',
    tags: ['Before', 'Disaster Recovery']
  }
])

// Computed property to handle the filtering logic
const filteredProjects = computed(() => {
  if (activeFilter.value === 'All') return projects.value
  return projects.value.filter(project => project.tags.includes(activeFilter.value))
})
</script>

<style scoped>
.ls-2 { letter-spacing: 2px; }

.project-img {
  height: 250px;
  width: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.project-card:hover .project-img {
  transform: scale(1.05);
}

.category-badge {
  position: absolute;
  top: 15px;
  left: 15px;
  z-index: 10;
}

/* Transition Animations */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.4s ease, transform 0.4s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
  transform: translateY(20px);
}

.transition-all {
  transition: all 0.3s ease;
}
</style>