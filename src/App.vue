<template>
  <PageLoader :isLoading="isRouteLoading" />
  <Navbar />
  <main id="page-content">
    <router-view v-slot="{ Component }">
      <transition name="page" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </main>
  <Footer />
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
import PageLoader from './components/PageLoader.vue'

const router = useRouter()
const isRouteLoading = ref(false)
let loadingTimer = null

const clearTimer = () => {
  if (loadingTimer) {
    clearTimeout(loadingTimer)
    loadingTimer = null
  }
}

router.beforeEach((to, from, next) => {
  if (to.path !== from.path) {
    clearTimer()
    isRouteLoading.value = true
  }
  next()
})

router.afterEach(() => {
  // Minimum display time so user sees the transition
  clearTimer()
  loadingTimer = setTimeout(() => {
    isRouteLoading.value = false
  }, 350)
})

onUnmounted(() => {
  clearTimer()
})
</script>

<style>
#page-content {
  flex: 1;
}

.page-enter-active {
  animation: page-in 0.3s ease-out;
}

.page-leave-active {
  animation: page-out 0.2s ease-in;
}

@keyframes page-in {
  from {
    opacity: 0;
    transform: translateY(12px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes page-out {
  from {
    opacity: 1;
    transform: translateY(0);
  }
  to {
    opacity: 0;
    transform: translateY(-8px);
  }
}
</style>
