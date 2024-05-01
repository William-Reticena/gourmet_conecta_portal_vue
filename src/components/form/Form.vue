<script setup lang="ts">
const handleSubmit = () => {
  console.log('Form submitted')
}
</script>

<template>
  <form @submit.prevent="handleSubmit">
    <slot></slot>
  </form>
</template>

<style scoped></style>
