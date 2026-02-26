<template>
  <div class="fixed-top shadow-sm main-nav-wrapper">
    <div class="top-bar py-2">
      <div class="container-fluid px-lg-5 d-flex justify-content-end align-items-center">
        <a :href="`tel:${appConfig.phoneRaw}`" class="emergency-link d-flex align-items-center">
          <span class="pulse-dot me-2">●</span>
          <span class="fw-bold">24/7 EMERGENCY: {{ appConfig.phoneNumber }}</span>
        </a>
      </div>
    </div>

    <nav class="navbar navbar-expand-lg bg-white position-relative">
      <div class="container-fluid ps-0 pe-lg-5">
        
        <NuxtLink class="navbar-brand-expanded rounded" to="/">
          <img src="/ec-logo-long-transparent.png" alt="Elevated Construction Logo">
        </NuxtLink>
        
        <button 
          class="navbar-toggler custom-toggler ms-auto m-2" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav" 
          aria-controls="navbarNav" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto align-items-center">
            
            <li class="nav-item dropdown">
              <p class="nav-link dropdown-toggle px-3 m-0 d-inline-block cursor-pointer" role="button" data-bs-toggle="dropdown">
                Services
              </p>
              <ul class="dropdown-menu shadow-lg border-primary">
                <li><NuxtLink class="dropdown-header-link" to="/services/disaster-recovery">Disaster Recovery</NuxtLink></li>
                <li><NuxtLink class="dropdown-item" to="/services/disaster-recovery/water-flood">Water & Flood Mitigation</NuxtLink></li>
                <li><NuxtLink class="dropdown-item" to="/services/disaster-recovery/fire-smoke">Fire & Smoke Damage</NuxtLink></li>
                <li><NuxtLink class="dropdown-item" to="/services/disaster-recovery/storm-wind">Storm & Wind Damage</NuxtLink></li>
                <li><NuxtLink class="dropdown-item" to="/services/disaster-recovery/mold-environmental">Environmental & Mold</NuxtLink></li>
                
                <li><hr class="dropdown-divider"></li>
                
                <li><NuxtLink class="dropdown-header-link" to="/services/rebuild-remodel">Rebuild & Remodeling</NuxtLink></li>
                <li><NuxtLink class="dropdown-item fw-bold" to="/services/rebuild-remodel/structural-reconstruction">Structural Reconstruction</NuxtLink></li>
                <li><NuxtLink class="dropdown-item" to="/services/rebuild-remodel/residential-remodeling">Residential Remodeling</NuxtLink></li>
                <li><NuxtLink class="dropdown-item" to="/services/rebuild-remodel/commercial-remodeling">Commercial Remodeling</NuxtLink></li>
                
                <li><hr class="dropdown-divider"></li>

                <li><NuxtLink class="dropdown-header-link" to="/services/specialty-care">Specialty Care</NuxtLink></li>
                <li><NuxtLink class="dropdown-item" to="/services/specialty-care/air-duct-cleaning">Air Duct & HVAC</NuxtLink></li>
                <li><NuxtLink class="dropdown-item" to="/services/specialty-care/surface-cleaning">Specialty Surface Cleaning</NuxtLink></li>
                <li><NuxtLink class="dropdown-item" to="/services/specialty-care/biohazard-trauma">Biohazard & Trauma</NuxtLink></li>
                <li><NuxtLink class="dropdown-item" to="/services/specialty-care/emergency-power">Emergency Power</NuxtLink></li>
              </ul>
            </li>

            <li class="nav-item dropdown">
              <p class="nav-link dropdown-toggle px-3 m-0 d-inline-block cursor-pointer" role="button" data-bs-toggle="dropdown">
                Information
              </p>
              <ul class="dropdown-menu shadow-lg border-primary">
                <li><NuxtLink class="dropdown-item fw-bold" to="/info/priority-program">First Priority Program</NuxtLink></li>
                <li><NuxtLink class="dropdown-item" to="/info/industries-served">Industries We Serve</NuxtLink></li>
                <li><NuxtLink class="dropdown-item" to="/info/insurance-professionals">Insurance Professionals</NuxtLink></li>
                <li><NuxtLink class="dropdown-item" to="/info/resource-center">Resource Center</NuxtLink></li>
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
                class="btn btn-quote-trigger rounded-pill px-4 w-100 fw-bold shadow-sm" 
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
const route = useRoute()

const closeNavbar = () => {
  if (process.client) {
    const menu = document.getElementById('navbarNav')
    if (menu && menu.classList.contains('show')) {
      // Use Bootstrap's native collapse method if available, or manual toggle
      menu.classList.remove('show')
      const toggler = document.querySelector('.navbar-toggler')
      if (toggler) toggler.setAttribute('aria-expanded', 'false')
    }
  }
}

watch(() => route.path, () => {
  closeNavbar()
})

if (process.client) {
  onMounted(() => {
    window.addEventListener('click', (e) => {
      const navbar = document.getElementById('navbarNav')
      const toggler = document.querySelector('.navbar-toggler')
      if (navbar && navbar.classList.contains('show') && !navbar.contains(e.target) && !toggler.contains(e.target)) {
        closeNavbar()
      }
    })
  })
}
</script>

<style scoped>
/* RESET MARGINS AND PADDING COMPLETELY */
.main-nav-wrapper, .navbar, .container-fluid {
  margin-left: 0 !important;
  padding-left: 0 !important;
}

/* LOGO POSITIONING: Touching Left Side */
.navbar-brand-expanded {
  position: absolute;
  left: 0;      /* Moves it to the absolute left edge */
  top: -43px;   /* Adjusted to pull it into the top-bar */
  z-index: 1060;
  display: block;
  margin: 0;
  padding: 0;
  background-color: #ffffff;
  padding: 5px 1.5rem;
  border-right: var(--color-secondary) solid 2px;
  border-bottom: var(--color-secondary) solid 2px;
}

.navbar-brand-expanded img {
  /* This ensures the height spans both bars while the width stays proportional */
  height: 105px; 
  width: auto;
  object-fit: contain;
  display: block;
  /* Shadow helps visibility since it's now touching the edge */
  filter: drop-shadow(4px 4px 10px rgba(0,0,0,0.15));
  
}

.navbar-brand-expanded:hover img {
  transform: scale(1.03);
}

/* TOP BAR */
.top-bar { 
  background-color: var(--color-alert); 
  margin: 0;
  position: relative;
  z-index: 1040;
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

/* NAV LINKS */
.nav-link {
  font-weight: var(--font-weight-normal);
  color: var(--color-text-dark);
  transition: var(--transition-default);
  white-space: nowrap; 
}
.nav-link:hover { color: var(--color-primary); }

@media (max-width: 1085px) {
  .navbar-brand-expanded {
    display: none !important;
  }
}

@media (min-width: 992px) {

  .navbar-nav .dropdown:hover > .dropdown-menu {
    display: block;
    margin-top: 0;
  }
  .nav-item.dropdown { padding: 0.5rem 0; }
  .navbar-nav .nav-link {
    padding-left: 1rem !important;
    padding-right: 1rem !important;
  }
}

@media (max-width: 991.98px) {
  .navbar-brand-expanded { top: -38px; left: 1rem; }
  .navbar-brand-expanded img { height: 90px; }
  .custom-toggler { margin-left: auto; }
}

/* DROPDOWNS */
.dropdown-menu {
  border-top: 4px solid var(--color-primary);
  border-radius: 0 0 8px 8px;
}

.dropdown-header-link {
  display: block;
  width: 100%;
  padding: 0.6rem 1.5rem;
  font-weight: 700;
  color: var(--color-primary);
  text-decoration: none;
  text-transform: uppercase;
  font-size: 0.75rem;
  letter-spacing: 1px;
}

.dropdown-header-link:hover {
  background-color: var(--color-primary);
  color: #ffffff !important;
}

/* SPACER */
.nav-spacer { height: 115px; }

/* QUOTE BUTTON */
.btn-quote-trigger {
  background-color: var(--color-primary);
  color: white;
  border: none;
  transition: all 0.3s ease;
}

.btn-quote-trigger:hover {
  background-color: #45065c;
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(86, 8, 115, 0.3);
}
</style>