<template>
  <nav aria-label="breadcrumb" class="navbar bg-light py-2 border-bottom shadow-sm">
    <div class="container">
      <ol class="breadcrumb mb-0">
        <li class="breadcrumb-item">
          <NuxtLink to="/" class="text-decoration-none text-muted small hover-purple">
            <i class="bi bi-house-door-fill me-1"></i> Home
          </NuxtLink>
        </li>

        <li 
          v-for="(crumb, index) in breadcrumbs" 
          :key="index"
          class="breadcrumb-item small"
          :class="{ active: index === breadcrumbs.length - 1 }"
        >
          <NuxtLink 
            v-if="index < breadcrumbs.length - 1" 
            :to="crumb.path"
            class="text-decoration-none text-muted text-capitalize hover-purple"
          >
            {{ crumb.displayName }}
          </NuxtLink>
          <span v-else class="text-primary fw-bold">
            {{ crumb.displayName }}
          </span>
        </li>
      </ol>
    </div>
  </nav>
</template>

<script setup>
const route = useRoute();

// This map translates your URL slugs into the "Elevated" titles you want
const titleMap = {
    // Main Hubs
  'services': 'Services',
  'info': 'Information',
  'remodeling': 'Remodeling',
  
  // Group A: Disaster Recovery
  'disaster-recovery': 'Disaster Recovery',
  'water-flood': 'Water & Flood Mitigation',
  'fire-smoke': 'Fire & Smoke Damage',
  'storm-wind': 'Storm & Wind Damage',
  'mold-environmental': 'Environmental & Mold',
  
  // Group B: Property Rebuild & Remodeling
  'rebuild-remodel': 'Rebuild & Remodeling',
  'structural-reconstruction': 'Structural Reconstruction',
  'residential-remodeling': 'Residential Remodeling',
  'commercial-remodeling': 'Commercial Remodeling',
  
  // Group C: Specialty Care
  'specialty-care': 'Specialty Care',
  'air-duct-cleaning': 'Air Duct & HVAC',
  'surface-cleaning': 'Specialty Surface Cleaning',
  'biohazard-trauma': 'Biohazard & Trauma',
  'emergency-power': 'Emergency Power & Logistics',
  
  // Group D: Information Hub
  'priority-program': 'First Priority Program',
  'industries-served': 'Industries We Serve',
  'insurance-professionals': 'Insurance Professionals',
  'resource-center': 'Resource Center',

  'contact': 'Contact Us',
  'about': 'About Our Team',
};

const breadcrumbs = computed(() => {
  const pathArray = route.path.split('/').filter(p => p);
  
  return pathArray.map((path, index) => {
    const fullPath = `/${pathArray.slice(0, index + 1).join('/')}`;
    
    // Check if we have a custom name in our map, otherwise format the slug
    const displayName = titleMap[path] || path.replace(/-/g, ' ');
    
    return {
      displayName,
      path: fullPath
    };
  });
});
</script>

<style scoped>
.navbar {
    border-top: var(--color-secondary) solid 3px;
}

.breadcrumb-item + .breadcrumb-item::before {
  content: "›" !important; /* Elegant chevron divider */
  font-size: 1.2rem;
  line-height: 1;
  vertical-align: middle;
  color: var(--color-secondary); /* Using your Golden Yellow for the arrows */
}

.hover-purple:hover {
  color: var(--color-primary) !important;
}

.breadcrumb-item.active {
  color: var(--color-primary);
}
</style>