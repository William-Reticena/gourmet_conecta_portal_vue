<script setup lang="ts">
import RestaurantList from './components/restaurantList/RestaurantList.vue'
</script>

<template>
  <div class="home">
    <div class="div">
      <RestaurantList />
    </div>
  </div>
</template>

<style scoped>
.home {
  display: flex;
  justify-content: center;
  /* width: 50%; */
}

.div {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1.5rem;
  width: 50.375rem;
}
</style>
