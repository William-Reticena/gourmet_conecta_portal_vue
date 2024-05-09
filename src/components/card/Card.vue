<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { cardProps } from './props'
import CardSection from './components/cardSection/CardSection.vue'

const cardContainerRef = ref<HTMLDivElement | null>(null)

const props = defineProps(cardProps)

onMounted(() => {
  if (cardContainerRef.value) {
    cardContainerRef.value.style.height = props.height
    cardContainerRef.value.style.maxWidth = props.maxWidth
    cardContainerRef.value.style.width = props.width
  }
})
</script>

<template>
  <div ref="cardContainerRef" class="card-container">
    <slot name="default"></slot>

    <CardSection>
      <slot name="section"></slot>
    </CardSection>
  </div>
</template>

<style scoped>
.card-container {
  backdrop-filter: blur(4px);
  background: rgba(255, 255, 255, 0.25);
  border: 1px solid rgba(255, 255, 255, 0.18);
  border-radius: 10px;
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.2);
  overflow: hidden;
  position: relative;
}
</style>
