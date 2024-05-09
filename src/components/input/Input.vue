<script setup lang="ts">
import { inputProps } from './props'
import InputBase from './components/inputBase/InputBase.vue'

const model = defineModel({ default: '', required: true, type: String })
defineProps(inputProps)
</script>

<template>
  <div class="input-container">
    <label class="input-label" for="">{{ label }}</label>
    <div class="input-wrapper">
      <!-- <div>😀</div> -->
      <InputBase v-model="model" :placeholder="placeholder" :type="type" />
      <!-- <div>😛</div> -->
    </div>
    <!-- <div>errors</div> -->
  </div>
</template>

<style scoped>
.input-container {
  display: inline-block;
}

.input-label {
  display: block;
  font-size: 0.75rem;
  margin-bottom: 0.0625rem;
}

.input-label:empty {
  display: none;
}

.input-wrapper {
  align-items: center;
  background-color: rgba(30, 30, 30, 0.5);
  border: 1px solid rgba(30, 30, 30, 0.5);
  border-radius: 10px;
  display: flex;
  gap: 0.5rem;
  padding: 0.25rem 0.625rem;
}
</style>
