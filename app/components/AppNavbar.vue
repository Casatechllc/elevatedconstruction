<template>
  <div class="fixed-top shadow-sm">
    <div class="top-bar py-2">
      <div class="container-fluid px-lg-5 d-flex justify-content-end align-items-center">
        <a href="tel:5550000000" class="emergency-link d-flex align-items-center">
          <span class="pulse-dot me-2">●</span>
          <span class="fw-bold">24/7 EMERGENCY: (555) 000-0000</span>
        </a>
      </div>
    </div>

    <nav class="navbar navbar-expand-lg bg-white">
      <div class="container-fluid px-lg-5">
        <NuxtLink class="navbar-brand fw-bold" to="/" style="color: var(--color-primary)">
          ELEVATED CONSTRUCTION
        </NuxtLink>
        
        <button 
          class="navbar-toggler custom-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav" 
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto align-items-center">
            
            <li class="nav-item dropdown text-nowrap">
              <a class="nav-link dropdown-toggle px-3" href="#" id="resDev" role="button" data-bs-toggle="dropdown">
                Residential
              </a>
              <ul class="dropdown-menu border-0 shadow" aria-labelledby="resDev">
                <!-- <li><NuxtLink class="dropdown-item" to="/residential/water-restoration">Water Restoration</NuxtLink></li>
                <li><NuxtLink class="dropdown-item" to="/residential/remodeling">Remodeling</NuxtLink></li>
                <li><NuxtLink class="dropdown-item" to="/residential/roofing">Roofing</NuxtLink></li> -->
              </ul>
            </li>

            <li class="nav-item dropdown text-nowrap">
              <a class="nav-link dropdown-toggle px-3" href="#" id="commDev" role="button" data-bs-toggle="dropdown">
                Commercial
              </a>
              <ul class="dropdown-menu border-0 shadow" aria-labelledby="commDev">
                <!-- <li><NuxtLink class="dropdown-item" to="/commercial/mitigation">Mitigation</NuxtLink></li>
                <li><NuxtLink class="dropdown-item" to="/commercial/build-outs">Build-outs</NuxtLink></li> -->
              </ul>
            </li>

            <li class="nav-item">
              <NuxtLink class="nav-link px-3" to="/about">About Us</NuxtLink>
            </li>
            <li class="nav-item">
              <NuxtLink class="nav-link px-3" to="/contact">Contact</NuxtLink>
            </li>
            
            <li class="nav-item ms-lg-3 mt-3 mt-lg-0 w-100 w-lg-auto">
              <button 
                class="btn btn-quote-trigger rounded-pill px-4 w-100" 
                data-bs-toggle="offcanvas" 
                data-bs-target="#quoteDrawer"
              >
                Get a Quote
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
  <div class="nav-spacer"></div>
  
  <QuoteDrawer />
</template>
<style scoped>

/* Navbar Customization */
.navbar {
  padding: var(--spacing-md) 0;
}

.nav-link {
  font-weight: var(--font-weight-normal);
  color: var(--color-text-dark);
  transition: var(--transition-default);
}

.nav-link:hover {
  color: var(--color-primary);
}

/* Top Bar Styles */
.top-bar {
  background-color: var(--color-alert);
  transition: var(--transition-default);
}

.emergency-link {
  color: var(--color-text-light) !important;
  text-decoration: none;
  font-size: 0.9rem;
  letter-spacing: 0.5px;
}

.pulse-dot {
  color: var(--color-text-light);
  animation: pulse-red 2s infinite;
}

@keyframes pulse-red {
  0% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.4; transform: scale(1.2); }
  100% { opacity: 1; transform: scale(1); }
}

/* Navbar Spacing Buffer */
.nav-spacer {
  height: 120px; /* Adjust this to match the combined height of bar + nav */
}

/* Desktop Fixes */
@media (min-width: 992px) {
  .navbar-nav .nav-link {
    padding-left: 0.8rem !important;
    padding-right: 0.8rem !important;
    white-space: nowrap;
  }
  
  .navbar-brand {
    font-size: 1.3rem;
  }
}

/* Responsive Shrinking for Laptops */
@media (min-width: 992px) and (max-width: 1200px) {
  .navbar-brand { font-size: 1.1rem; }
  .navbar-nav .nav-link { font-size: 0.9rem; padding-left: 0.5rem !important; }
}

/* Ensure Dropdowns stay clean */
.dropdown-menu {
  margin-top: 10px;
}
</style>