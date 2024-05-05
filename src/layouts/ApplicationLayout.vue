<script setup lang="ts">
import { ref } from 'vue'
import Avatar from '@components/avatar/Avatar.vue'
import Drawer from '@components/drawer/Drawer.vue'
import Header from '@components/header/Header.vue'

import AvatarImg from '@assets/imgs/avatar.jpeg'
const isOpen = ref(false)
</script>

<template>
  <div>
    <Header>
      <div class="header-content">
        <h1>Logo</h1>

        <Avatar :src="AvatarImg" />
      </div>
    </Header>

    <Drawer v-model="isOpen" />

    <div class="application-container">
      <RouterView></RouterView>
    </div>
  </div>
</template>

<style scoped>
.header-content {
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 1.25rem;
}

.application-container {
  /* padding-top: var(--content-viewing-padding-top); */
  padding: calc(var(--content-viewing-padding-top) + 1.5rem) 1.5rem 1.5rem calc(1.5rem + 3.125rem);
  position: relative;
}
</style>
