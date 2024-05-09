<script setup lang="ts">
import { ref } from 'vue'
import Avatar from '@components/avatar/Avatar.vue'
import Box from '@components/box/Box.vue'
import Drawer from '@components/drawer/Drawer.vue'
import Header from '@components/header/Header.vue'
import Logo from '@assets/icons/Logo.vue'
import MenuItem from '@components/menuItem/MenuItem.vue'
import HomeIcon from '@/assets/icons/HomeFilled.vue'
import OrderIcon from '@/assets/icons/OrderFilled.vue'
import UserIcon from '@/assets/icons/UserFilled.vue'

import AvatarImg from '@assets/imgs/avatar.jpeg'
const isOpen = ref(false)
</script>

<template>
  <div>
    <Header>
      <div class="header-content">
        <Box class="logo-container">
          <Logo />
        </Box>

        <Avatar :src="AvatarImg" />
      </div>
    </Header>

    <Drawer v-model="isOpen">
      <MenuItem>
        <template #icon>
          <HomeIcon />
        </template>
        Início
      </MenuItem>

      <MenuItem>
        <template #icon>
          <OrderIcon />
        </template>
        Meus pedidos
      </MenuItem>

      <MenuItem>
        <template #icon>
          <UserIcon />
        </template>
        Meu perfil
      </MenuItem>
    </Drawer>

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

.logo-container {
  height: 3.125rem;
  width: 3.125rem;
}

.application-container {
  /* padding-top: var(--content-viewing-padding-top); */
  padding: calc(var(--content-viewing-padding-top) + 1.5rem) 1.5rem 1.5rem calc(1.5rem + 3.125rem);
  position: relative;
}
</style>
