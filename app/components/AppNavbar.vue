<template>
  <div class="fixed-top shadow-sm main-nav-wrapper">
    <div class="top-bar d-flex align-items-center">
      <div class="top-bar-left d-none d-sm-flex px-lg-5 ps-3 align-items-center">
        <span class="motto-text fw-bold text-primary text-uppercase ls-1 small">Water Mitifation, Mold Remediation, Remodels/Repair, Demolition, and Fencing</span>
      </div>
      
      <div class="top-bar-right py-2 pe-lg-5 pe-3 d-flex justify-content-end align-items-center ms-auto">
        <a :href="`tel:${appConfig.phoneRaw}`" class="emergency-link d-flex align-items-center">
          <span class="pulse-dot me-2">●</span>
          <span class="fw-bold">24/7 EMERGENCY: {{ appConfig.phoneNumber }}</span>
        </a>
      </div>
    </div>

    <nav class="navbar navbar-expand-md bg-white position-relative">
      <div class="container-fluid ps-0 pe-lg-5">
        
        <NuxtLink class="navbar-brand ps-3 ps-lg-5 py-0" to="/">
          <img 
            src="/ec-logo-small.png" 
            alt="Elevated Construction" 
            class="nav-logo"
          >
        </NuxtLink>

        <NuxtLink class="mobile-title-logo d-flex pt-1 ps-0 align-items-center" to="/">
        <img 
              src="/ec-title-logo.png" 
              alt="Elevated Construction" 
              class="nav-logo"
            >
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
                <li><NuxtLink class="dropdown-item" to="/services/rebuild-remodel/structural-reconstruction">Structural Reconstruction</NuxtLink></li>
                <li><NuxtLink class="dropdown-item" to="/services/rebuild-remodel/residential-remodeling">Residential Remodeling</NuxtLink></li>
                <li><hr class="dropdown-divider"></li>
                <li><NuxtLink class="dropdown-header-link" to="/services/specialty-care">Specialty Care</NuxtLink></li>
                <li><NuxtLink class="dropdown-item" to="/services/specialty-care/air-duct-cleaning">Air Duct & HVAC</NuxtLink></li>
                <li><NuxtLink class="dropdown-item" to="/services/specialty-care/surface-cleaning">Specialty Surface Cleaning</NuxtLink></li>
                <li><NuxtLink class="dropdown-item" to="/services/specialty-care/emergency-power">Emergency Power</NuxtLink></li>
              </ul>
            </li>
            <li class="nav-item dropdown">
              <p class="nav-link dropdown-toggle px-3 m-0 d-inline-block cursor-pointer" role="button" data-bs-toggle="dropdown">
                Information
              </p>
              <ul class="dropdown-menu shadow-lg border-primary">
                <li><NuxtLink class="dropdown-item" to="/info/priority-program">First Priority Program</NuxtLink></li>
                <li><NuxtLink class="dropdown-item" to="/info/industries-served">Industries We Serve</NuxtLink></li>
                <li><NuxtLink class="dropdown-item" to="/info/insurance-professionals">Insurance Professionals</NuxtLink></li>
                <!-- <li><NuxtLink class="dropdown-item" to="/info/resource-center">Resource Center</NuxtLink></li> -->
              </ul>
            </li>
            <li class="nav-item">
              <NuxtLink class="nav-link px-3" to="/about">About Us</NuxtLink>
            </li>
            <li class="nav-item">
              <NuxtLink class="nav-link px-3" to="/contact">Contact</NuxtLink>
            </li>
            <li class="nav-item ms-lg-3 mt-3 mt-md-0 w-100 w-md-auto">
              <button 
                class="btn btn-quote-trigger rounded-pill px-2 px-md-4 w-100 fw-bold shadow-sm" 
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
/* * { outline: 1px solid red !important; } */

/* RESET MARGINS AND PADDING COMPLETELY */
.main-nav-wrapper, .navbar, .container-fluid {
  margin-left: 0 !important;
  padding-left: 0 !important;
}

/* TOP BAR RESTRUCTURE */
.top-bar { 
  background-color: #ffffff; /* Default background is white for the left side */
  margin: 0;
  position: relative;
  z-index: 1040;
  border-bottom: 1px solid #eee;
}

.motto-text {
  font-size: 1rem;
}

.top-bar-left {
  flex: 1;
}

.top-bar-right {
  background-color: var(--color-alert); /* Red background starts here */
  clip-path: polygon(5% 0, 100% 0, 100% 100%, 0% 100%); /* Optional: angled cut */
  padding-left: 2rem !important;
}

/* NAVBAR & LOGO (Clean & Contained) */
.navbar {
  padding: 0.5rem 0;
  min-height: 70px;
}

.nav-logo {
  height: 50px; /* Adjust this to your preferred "smaller" size */
  width: auto;
  object-fit: contain;
  transition: transform 0.3s ease;
  /* margin-left: 1rem; */
}

.emergency-link {
  color: #ffffff !important;
  text-decoration: none;
  font-size: 0.85rem;
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

.nav-link {
  font-weight: var(--font-weight-normal);
  color: var(--color-text-dark);
  transition: var(--transition-default);
  white-space: nowrap; 
}
.nav-link:hover { color: var(--color-primary); }


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
  .nav-logo { height: 40px; }
  .motto-text {
    font-size: .7rem;
  }
}

@media (max-width: 1215.98px) {  
  .motto-text {
    font-size: .8rem;
  }
}

@media (max-width: 1072.98px) {  
  .motto-text {
    font-size: .7rem;
  }
}

@media (max-width: 767.98px) {
  .mobile-title-logo {
    position: absolute;
    left: 50%;
    top: 0;
    margin-top: 1rem;
    transform: translateX(-50%);
  }
}

@media (max-width: 622.98px) {  
  .motto-text {
    font-size: .5rem;
  }
}

@media (max-width: 575.98px) {
.top-bar-right { clip-path: none; width: 100%; padding-left: 1rem !important; }
}

@media (max-width: 339.98px) {
  .mobile-title-logo {
  display: none !important;
}
}

/* DROPDOWNS & BUTTONS */
.dropdown-menu { border-top: 4px solid var(--color-primary); border-radius: 0 0 8px 8px; }
.dropdown-header-link { display: block; width: 100%; padding: 0.6rem 1.5rem; font-weight: 700; color: var(--color-primary); text-decoration: none; text-transform: uppercase; font-size: 0.75rem; letter-spacing: 1px; }
.dropdown-header-link:hover { background-color: var(--color-primary); color: #ffffff !important; }
.dropdown-item:hover { background-color: var(--color-secondary); }
.nav-spacer { height: 115px; }
.btn-quote-trigger { background-color: var(--color-primary); color: white; border: none; transition: all 0.3s ease; }
.btn-quote-trigger:hover { background-color: #45065c; transform: translateY(-2px); box-shadow: 0 4px 8px rgba(86, 8, 115, 0.3); }
.ls-1 { letter-spacing: 1px; }
.cursor-pointer { cursor: pointer; }
</style>