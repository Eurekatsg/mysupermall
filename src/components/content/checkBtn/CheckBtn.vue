<template>
  <div class="check-btn" :class="{ checked: isChecked }">
    <img src="~assets/img/cart/tick.svg" alt="选择" />
  </div>
</template>

<script>
export default {
  name: 'CheckBtn',
  props: {
    isChecked: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style scoped>
.check-btn {
  border-radius: 50%;
  border: 2px solid #aaa;
}

.checked {
  border-color: var(--color-tint);
  background-color: var(--color-tint);
}
</style>