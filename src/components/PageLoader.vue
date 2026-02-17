<template>
  <Transition name="loader">
    <div v-if="isLoading" class="page-loader">
      <!-- Top progress bar -->
      <div class="loader-bar">
        <div class="loader-bar-fill"></div>
      </div>
      <!-- Center spinner -->
      <div class="loader-overlay">
        <div class="loader-spinner">
          <svg viewBox="0 0 50 50" class="spinner-svg">
            <circle cx="25" cy="25" r="20" fill="none" stroke-width="3" />
          </svg>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup>
defineProps({
  isLoading: {
    type: Boolean,
    default: false,
  },
})
</script>

<style scoped>
.page-loader {
  position: fixed;
  inset: 0;
  z-index: 9999;
  pointer-events: all;
}

/* ── Top progress bar ── */
.loader-bar {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: transparent;
  z-index: 10001;
  overflow: hidden;
}

.loader-bar-fill {
  height: 100%;
  background: linear-gradient(
    90deg,
    transparent,
    var(--color-primary) 30%,
    hsl(206, 100%, 90%) 50%,
    var(--color-primary) 70%,
    transparent
  );
  border-radius: 2px;
  animation: loader-bar-slide 1.2s ease-in-out infinite;
}

@keyframes loader-bar-slide {
  0% {
    transform: translateX(-100%);
    width: 40%;
  }
  50% {
    width: 60%;
  }
  100% {
    transform: translateX(300%);
    width: 40%;
  }
}

/* ── Center overlay + spinner ── */
.loader-overlay {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--color-bg-one);
  opacity: 0.92;
}

.loader-spinner {
  width: 42px;
  height: 42px;
  animation: spinner-rotate 0.8s linear infinite;
}

.spinner-svg {
  width: 100%;
  height: 100%;
}

.spinner-svg circle {
  stroke: var(--color-primary);
  stroke-linecap: round;
  stroke-dasharray: 80, 200;
  stroke-dashoffset: 0;
  animation: spinner-dash 1.4s ease-in-out infinite;
}

@keyframes spinner-rotate {
  100% {
    transform: rotate(360deg);
  }
}

@keyframes spinner-dash {
  0% {
    stroke-dasharray: 1, 200;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 80, 200;
    stroke-dashoffset: -35;
  }
  100% {
    stroke-dasharray: 80, 200;
    stroke-dashoffset: -125;
  }
}

/* ── Transition ── */
.loader-enter-active {
  transition: opacity 0.15s ease;
}

.loader-leave-active {
  transition: opacity 0.3s ease 0.05s;
}

.loader-enter-from,
.loader-leave-to {
  opacity: 0;
}
</style>
