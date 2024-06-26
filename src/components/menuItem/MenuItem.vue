<script setup lang="ts">
import { onMounted, ref } from 'vue'

const menuItemRef = ref<HTMLDivElement | null>(null)

const observer = new ResizeObserver((entries) => {
  if (entries[0].contentRect.width < 180) {
    entries[0].target.children[1].classList.add('will-hide')
  } else {
    entries[0].target.children[1].classList.remove('will-hide')
  }

  if (entries[0].contentRect.width < 40) {
    entries[0].target.children[0].classList.add('no-label')
    entries[0].target.children[1].classList.add('hidden')
  } else {
    entries[0].target.children[0].classList.remove('no-label')
    entries[0].target.children[1].classList.remove('hidden')
  }
})

onMounted(() => {
  if (menuItemRef.value) {
    observer.observe(menuItemRef.value, { box: 'content-box' })
  }
})
</script>

<template>
  <div ref="menuItemRef" class="menu-item-container">
    <div class="menu-item-icon">
      <slot name="icon"></slot>
    </div>
    <div class="menu-item-label">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
.menu-item-container {
  align-items: center;
  cursor: pointer;
  display: flex;
  min-height: 2.75rem;
  padding: 0.5rem 1rem;
}

.menu-item-icon {
  align-items: center;
  display: flex;
  min-width: 3.5rem;
}

.menu-item-icon.no-label {
  min-width: auto;
}

.menu-item-label {
  display: block;
  font-size: 16px;
  line-height: 1.3;
  opacity: 1;
  text-overflow: ellipsis;
  transition: opacity var(--animation-duration);
}

.menu-item-label.will-hide {
  opacity: 0;
  overflow: hidden;
  white-space: nowrap;
  width: 9.375rem;
}

.menu-item-label.hidden {
  display: none;
}
</style>
