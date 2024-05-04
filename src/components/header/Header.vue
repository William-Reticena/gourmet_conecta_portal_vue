<script setup lang="ts"></script>

<template>
  <header class="header-container">
    <slot></slot>
  </header>
</template>

<style scoped>
.header-container {
  backdrop-filter: blur(4px);
  background: rgba(255, 255, 255, 0.25);
  border: 1px solid rgba(255, 255, 255, 0.18);
  /* border-radius: 10px; */
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.2);
  min-height: 3.125rem;
  position: fixed;
  width: 100%;
  z-index: 1500;
}
</style>
