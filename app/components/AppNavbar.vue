<template>
  <div class="fixed-top shadow-sm">
    <div class="top-bar py-2">
      <div class="container-fluid px-lg-5 d-flex justify-content-end align-items-center">
        <a :href="`tel:${appConfig.phoneRaw}`" class="emergency-link d-flex align-items-center">
          <span class="pulse-dot me-2">●</span>
          <span class="fw-bold">24/7 EMERGENCY: {{ appConfig.phoneNumber }}</span>
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
            
            <li class="nav-item dropdown">
              <NuxtLink 
                class="nav-link dropdown-toggle" 
                to="/residential" 
                role="button" 
                data-bs-toggle="dropdown"
                @click="$router.push('/residential')"
              >
                Residential
              </NuxtLink>
              
              <ul class="dropdown-menu shadow-lg border-primary">
                <li>
                  <NuxtLink class="dropdown-header-link" to="/residential/emergency-recovery">
                    Emergency Recovery
                  </NuxtLink>
                </li>
                <li><NuxtLink class="dropdown-item" to="/residential/emergency-recovery/water-recovery">Water & Flood Mitigation</NuxtLink></li>
                <li><NuxtLink class="dropdown-item" to="/residential/emergency-recovery/fire-smoke-recovery">Fire & Smoke Damage Care</NuxtLink></li>
                <li><NuxtLink class="dropdown-item" to="/residential/emergency-recovery/mold-remediation">Environmental & Mold Solutions</NuxtLink></li>
                <li><NuxtLink class="dropdown-item" to="/residential/emergency-recovery/emergency-securing">Emergency Board-Up & Tarping</NuxtLink></li>
                <li><NuxtLink class="dropdown-item" to="/residential/emergency-recovery/biohazard-cleanup">Trauma & Biohazard Recovery</NuxtLink></li>
                
                <li><hr class="dropdown-divider"></li>
                
                <li>
                  <NuxtLink class="dropdown-header-link" to="/residential/structural-rebuild">
                    Structural Rebuild
                  </NuxtLink>
                </li>
                <li><NuxtLink class="dropdown-item fw-bold" to="/residential/structural-rebuild/reconstruction">Full-Service Reconstruction</NuxtLink></li>
                <li><NuxtLink class="dropdown-item" to="/residential/structural-rebuild/odor-elimination">Advanced Odor Elimination</NuxtLink></li>
                
                <li><hr class="dropdown-divider"></li>

                <li>
                  <NuxtLink class="dropdown-header-link" to="/residential/specialty-cleaning">
                    Specialty Surface Cleaning
                  </NuxtLink>
                </li>
                <li><NuxtLink class="dropdown-item" to="/residential/specialty-cleaning/content-restoration">Personal Content Cleaning</NuxtLink></li>
                <li><NuxtLink class="dropdown-item" to="/residential/specialty-cleaning/air-duct-cleaning">Air Duct & HVAC Cleaning</NuxtLink></li>
                <li><NuxtLink class="dropdown-item" to="/residential/specialty-cleaning/surface-cleaning">Floor, Tile & Grout Care</NuxtLink></li>
                <li><NuxtLink class="dropdown-item" to="/residential/specialty-cleaning/carpet-cleaning">Carpet & Fabric Refresh</NuxtLink></li>
              </ul>
            </li>

            <li class="nav-item dropdown">
              <NuxtLink 
                class="nav-link dropdown-toggle px-3" 
                to="/commercial" 
                role="button" 
                data-bs-toggle="dropdown"
                @click="$router.push('/commercial')"
              >
                Commercial
              </NuxtLink>
              <ul class="dropdown-menu border-0 shadow">
                <li><NuxtLink class="dropdown-item" to="/commercial/mitigation">Mitigation</NuxtLink></li>
                <li><NuxtLink class="dropdown-item" to="/commercial/build-outs">Build-outs</NuxtLink></li>
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

<script setup>
    const appConfig = useAppConfig()
</script>

<style scoped>
/* Navbar Base */
.navbar {
  padding: var(--spacing-md) 0;
}


.nav-link:hover {
  color: var(--color-primary);
}

.nav-link {
  font-weight: var(--font-weight-normal);
  color: var(--color-text-dark);
  transition: var(--transition-default);
  /* PREVENTS TEXT WRAPPING */
  white-space: nowrap; 
}

/* Desktop Fixes for spacing */
@media (min-width: 992px) {
  .navbar-nav .nav-link {
    /* Slightly reduced horizontal padding to keep everything on one line */
    padding-left: 0.7rem !important;
    padding-right: 0.7rem !important;
  }
  
  /* Give the nav more room to expand */
  .navbar-collapse {
    flex-grow: 1;
  }
}

/* Specific fix for mid-sized screens (Laptops) */
@media (min-width: 992px) and (max-width: 1200px) {
  .navbar-brand { 
    font-size: 1.1rem; 
    margin-right: 0.5rem;
  }
  .navbar-nav .nav-link { 
    font-size: 0.85rem; /* Shinks text slightly on smaller laptops to avoid crowding */
    padding-left: 0.4rem !important;
    padding-right: 0.4rem !important;
  }
}

/* Top Bar & Emergency Pulse */
.top-bar {
  background-color: var(--color-alert);
}

.emergency-link {
  color: #ffffff !important;
  text-decoration: none;
  font-size: 0.9rem;
  letter-spacing: 0.5px;
}

.pulse-dot {
  color: #ffffff;
  animation: pulse-red 2s infinite;
}

@keyframes pulse-red {
  0% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.4; transform: scale(1.2); }
  100% { opacity: 1; transform: scale(1); }
}

.nav-spacer {
  height: 110px; 
}

/* Clickable Dropdown Headers */
.dropdown-header-link {
  display: block;
  width: 100%;
  padding: 0.6rem 1.5rem;
  font-weight: 700;
  color: var(--color-primary);
  text-decoration: none;
  text-transform: uppercase;
  font-size: 0.85rem;
  letter-spacing: 1px;
  transition: all 0.2s ease;
}

.dropdown-header-link:hover {
  background-color: var(--color-primary);
  color: #ffffff !important;
}

/* Hover to open dropdown on Desktop */
@media (min-width: 992px) {
  .nav-item.dropdown:hover > .dropdown-menu {
    display: block;
    margin-top: 0; 
  }

  .navbar-nav .nav-link {
    padding-left: 0.8rem !important;
    padding-right: 0.8rem !important;
  }
}

/* Responsive Scaling */
@media (max-width: 1200px) {
  .navbar-brand { font-size: 1.1rem; }
}

.btn-quote-trigger {
  background-color: var(--color-primary);
  color: white;
  border: none;
  transition: transform 0.2s;
}

.btn-quote-trigger:hover {
  background-color: #45065c;
  transform: translateY(-2px);
}
</style>