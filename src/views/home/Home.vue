<script setup lang="ts">
import CustomCard from './components/CustomCard/CustomCard.vue'
</script>

<template>
  <div class="home">
    <CustomCard />
  </div>
</template>

<style scoped>
.home {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;
}
</style>
