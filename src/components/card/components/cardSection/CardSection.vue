<script setup lang="ts"></script>

<template>
  <div class="card-section-container">
    <slot></slot>
  </div>
</template>

<style scoped>
.card-section-container {
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding: 1em;
}
</style>
