<template>
  <form @submit.prevent="handleSubmit" class="row g-3">
    <div class="col-12">
      <label class="form-label fw-bold">Full Name</label>
      <input type="text" class="form-control" placeholder="John Doe" required />
    </div>

    <div class="col-12">
      <label class="form-label fw-bold">Phone Number</label>
      <input type="tel" class="form-control" placeholder="(555) 000-0000" required />
    </div>

    <div class="col-12">
      <label class="form-label fw-bold">Service Needed</label>
      <select class="form-select" required>
        <option value="" selected disabled>Select a service...</option>
        <option value="water">Water Damage Restoration</option>
        <option value="mold">Mold Remediation</option>
        <option value="fire">Fire & Smoke Damage</option>
        <option value="remodel">General Construction/Remodel</option>
      </select>
    </div>

    <div class="col-12">
      <label class="form-label fw-bold">Urgency Level</label>
      <div class="d-flex gap-2">
        <div class="form-check rounded flex-fill text-center">
          <input class="form-check-input d-none" type="radio" name="urgency" id="low" value="low">
          <label class="form-check-label w-100" for="low">Standard</label>
        </div>
        <div class="flex-fill text-center emergency-group">
            <input type="radio" name="urgency" id="high" class="form-check-input">
            <label class="form-check-label" for="high">Emergency</label>
        </div>
      </div>
    </div>

    <div class="col-12">
      <label class="form-label fw-bold">Message / Details</label>
      <textarea class="form-control" rows="3" placeholder="Tell us about the project..."></textarea>
    </div>

    <div class="col-12 mt-4">
      <button type="submit" class="btn btn-primary w-100 py-2 fw-bold">
        Send Request
      </button>
    </div>
  </form>
</template>

<script setup>
const handleSubmit = () => {
  alert("Quote Request Sent! We'll contact you shortly.");
  // Later, we can connect this to EmailJS or a backend API
};
</script>

<style scoped>
/* Hide the actual radio circle */
.form-check-input {
  display: none;
}

/* Base style for the labels (The "Tiles") */
.form-check-label {
  cursor: pointer;
  display: block;
  padding: var(--spacing-sm);
  border: 2px solid #dee2e6; 
  border-radius: var(--border-radius);
  transition: var(--transition-default);
  font-weight: var(--font-weight-bold);
  background-color: transparent;
  color: var(--color-text-dark); /* Default text color */
}

/* "Standard" Selected State -> Purple with White Text */
#low:checked + .form-check-label {
  background-color: var(--color-primary) !important;
  border-color: var(--color-primary) !important;
  color: var(--color-text-light) !important; /* Forces text to be white */
}

/* "Emergency" Selected State -> Red with White Text */
#high:checked + .form-check-label {
  background-color: var(--color-alert) !important;
  border-color: var(--color-alert) !important;
  color: var(--color-text-light) !important; /* Forces text to be white */
}

/* --- Standard Button Hover (Purple) --- */
.form-check-label:hover {
  border-color: var(--color-primary);
  background-color: rgba(86, 8, 115, 0.05); /* Purple tint */
}

/* --- Emergency Button Hover (Red) --- */
/* This targets the label specifically inside the emergency group */
.emergency-group .form-check-label:hover {
  border-color: var(--color-alert);
  background-color: rgba(236, 14, 14, 0.05); /* Red tint (Red rgba) */
  color: var(--color-alert);
}

/* --- When ALREADY Checked --- */

/* Standard (Keep Purple) */
#low:checked + .form-check-label:hover {
  background-color: #45065c !important; 
  border-color: #45065c !important;
  color: var(--color-text-light) !important;
}

/* Emergency (Keep Red) */
#high:checked + .form-check-label:hover {
  background-color: #b30a0a !important; /* Darker Red */
  border-color: #b30a0a !important;
  color: var(--color-text-light) !important;
}
</style>