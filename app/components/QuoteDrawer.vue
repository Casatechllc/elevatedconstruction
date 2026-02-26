<template>
  <div 
    class="offcanvas offcanvas-end" 
    tabindex="-1" 
    id="quoteDrawer" 
    aria-labelledby="quoteDrawerLabel"
  >
    <div class="offcanvas-header bg-dark text-white">
      <h5 class="offcanvas-title" id="quoteDrawerLabel">Request a Quote</h5>
      <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div class="offcanvas-body">
      <p class="text-muted">Fill out the details below and our team will reach out shortly.</p>
      <QuoteForm />
    </div>
  </div>
</template>