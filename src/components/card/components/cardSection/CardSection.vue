<script setup lang="ts"></script>

<template>
  <section class="card-section-container">
    <slot></slot>
  </section>
</template>

<style scoped>
.card-section-container {
  padding: 1em;
}

.card-section-container:empty {
  display: none;
}
</style>
