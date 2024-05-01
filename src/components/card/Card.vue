<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { cardProps } from './props'
import CardSection from './components/cardSection/CardSection.vue'

const cardContainerRef = ref<HTMLDivElement | null>(null)

const props = defineProps(cardProps)

onMounted(() => {
  if (cardContainerRef.value) {
    cardContainerRef.value.style.maxWidth = props.maxWidth
  }
})
</script>

<template>
  <div ref="cardContainerRef" class="card-container">
    <CardSection>
      <slot></slot>
    </CardSection>
  </div>
</template>

<style scoped>
.card-container {
  width: fit-content;
}
</style>
