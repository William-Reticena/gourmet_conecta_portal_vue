<script setup lang="ts">
import RestaurantList from './components/restaurantList/RestaurantList.vue'
</script>

<template>
  <div class="home">
    <RestaurantList />
  </div>
</template>

<style scoped>
.home {
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  justify-content: center;
}
</style>
