<script setup>
defineProps({
  isInline: { type: Boolean, default: false }
})
</script>

<template>
  <div 
    :class="[isInline ? '' : 'offcanvas offcanvas-end quote-drawer-custom']" 
    id="quoteDrawer"
    tabindex="-1"
  >
    <div v-if="!isInline" class="offcanvas-header border-bottom">
      <h3 class="offcanvas-title fw-bold text-primary">Request a Quote</h3>
      <button type="button" class="btn-close" data-bs-dismiss="offcanvas"></button>
    </div>

    <div :class="isInline ? '' : 'offcanvas-body'">
      <QuoteForm />
    </div>
  </div>
</template>

<style scoped>
.quote-drawer-custom { width: 450px; }
@media (max-width: 576px) { .quote-drawer-custom { width: 100%; } }
</style>