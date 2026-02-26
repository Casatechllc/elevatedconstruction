<script setup>
const instanceId = Math.random().toString(36).substring(2, 9);
const lowId = `low-${instanceId}`;
const highId = `high-${instanceId}`;

const handleSubmit = () => {
  alert("Quote Request Sent! We'll contact you shortly.");
};
</script>

<template>
  <form @submit.prevent="handleSubmit" class="row g-3">
    <div class="col-md-6">
      <label class="form-label fw-bold small text-uppercase ls-1">Full Name</label>
      <input type="text" class="form-control custom-field" placeholder="John Doe" required />
    </div>

    <div class="col-md-6">
      <label class="form-label fw-bold small text-uppercase ls-1">Phone Number</label>
      <input type="tel" class="form-control custom-field" placeholder="(555) 000-0000" required />
    </div>

    <div class="col-12">
      <label class="form-label fw-bold small text-uppercase ls-1">Service Location</label>
      <div class="input-group">
        <span class="input-group-text bg-light border-end-0 border-dee2e6">
          <i class="bi bi-geo-alt-fill text-secondary"></i>
        </span>
        <input 
          type="text" 
          class="form-control custom-field border-start-0" 
          placeholder="e.g. Harrisonburg, VA or 22812" 
          required 
        />
      </div>
    </div>

    <div class="col-12">
      <label class="form-label fw-bold small text-uppercase ls-1">Service Needed</label>
      <select class="form-select custom-field" required>
        <option value="" selected disabled>Select a service...</option>
        <option value="water">Water Damage Restoration</option>
        <option value="mold">Mold Remediation</option>
        <option value="fire">Fire & Smoke Damage</option>
        <option value="remodel">General Construction/Remodel</option>
      </select>
    </div>

    <div class="col-12">
      <label class="form-label fw-bold small text-uppercase ls-1">Urgency Level</label>
      <div class="d-flex gap-2">
        <div class="flex-fill">
          <input class="d-none urgency-radio" type="radio" :name="`urgency-${instanceId}`" :id="lowId" value="low" checked>
          <label class="urgency-tile" :for="lowId">Standard</label>
        </div>
        <div class="flex-fill">
          <input class="d-none urgency-radio" type="radio" :name="`urgency-${instanceId}`" :id="highId" value="high">
          <label class="urgency-tile emergency-tile" :for="highId">Emergency</label>
        </div>
      </div>
    </div>

    <div class="col-12">
      <label class="form-label fw-bold small text-uppercase ls-1">Message / Details</label>
      <textarea class="form-control custom-field" rows="3" placeholder="Tell us about the project..."></textarea>
    </div>

    <div class="col-12 mt-4">
      <button type="submit" class="btn btn-primary w-100 py-3 fw-bold rounded-pill shadow-sm">
        Send Request
      </button>
    </div>
  </form>
</template>

<style scoped>
.border-dee2e6 {
  border: 1px solid #dee2e6 !important;
  border-radius: 8px 0 0 8px;
}

.custom-field {
  background-color: #f8f9fa;
  border: 1px solid #dee2e6 !important;
  padding: 0.75rem 1rem;
  border-radius: 8px;
  transition: all 0.2s ease;
}

/* Rest of your existing CSS logic for urgency-radio, tiles, etc. */
.urgency-radio:checked + .urgency-tile {
  background-color: var(--color-primary) !important;
  border-color: var(--color-primary) !important;
  color: #fff !important;
}

.urgency-radio:checked + .emergency-tile {
  background-color: var(--color-alert) !important;
  border-color: var(--color-alert) !important;
  color: #fff !important;
}

.urgency-tile {
  cursor: pointer;
  display: block;
  padding: 12px;
  border: 1px solid #dee2e6;
  border-radius: 8px;
  text-align: center;
  font-weight: bold;
  background-color: #fff;
}

.ls-1 { letter-spacing: 1px; }
</style>