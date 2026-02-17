<template>
  <div class="monet-blobs" aria-hidden="true">
    <img
      src="/blobs/image-1771330854742.png"
      alt=""
      class="blob spin-animation blob-tl"
    />
    <img
      src="/blobs/image-1771330866048.png"
      alt=""
      class="blob spin-animation blob-tr"
    />
    <img
      src="/blobs/image-1771330876831.png"
      alt=""
      class="blob spin-animation blob-bl"
    />
    <img
      src="/blobs/image-1771330888951.png"
      alt=""
      class="blob spin-animation blob-br"
    />
  </div>
</template>

<script setup>
defineProps({
  theme: {
    type: String,
    default: 'dark',
  },
})
</script>

<style scoped>
.monet-blobs {
  position: absolute;
  inset: 0;
  overflow: hidden;
  pointer-events: none;
  z-index: 0;
}

.blob {
  position: absolute;
  pointer-events: none;
  width: 700px;
  height: 700px;
  object-fit: contain;
}

.blob-tl {
  top: -20%;
  left: -15%;
  opacity: 0.35;
  filter: hue-rotate(190deg) saturate(0.6) brightness(0.55);
}

.blob-tr {
  top: -25%;
  right: -18%;
  opacity: 0.2;
  filter: hue-rotate(200deg) saturate(0.4) brightness(0.45);
}

.blob-bl {
  bottom: -20%;
  left: -15%;
  opacity: 0.3;
  filter: hue-rotate(180deg) saturate(0.5) brightness(0.5);
}

.blob-br {
  bottom: -18%;
  right: -12%;
  opacity: 0.3;
  filter: hue-rotate(170deg) saturate(0.55) brightness(0.5);
}

.spin-animation {
  animation: spin 60s linear infinite;
}

.blob-tr {
  animation-direction: reverse;
}

.blob-bl {
  animation-duration: 50s;
}

.blob-br {
  animation-duration: 70s;
  animation-direction: reverse;
}

@keyframes spin {
  from {
    rotate: 0deg;
  }
  to {
    rotate: 360deg;
  }
}

[data-theme="light"] .blob-tl {
  opacity: 0.4;
  filter: hue-rotate(190deg) saturate(0.7) brightness(1.1);
}
[data-theme="light"] .blob-tr {
  opacity: 0.3;
  filter: hue-rotate(200deg) saturate(0.5) brightness(1.2);
}
[data-theme="light"] .blob-bl {
  opacity: 0.35;
  filter: hue-rotate(180deg) saturate(0.6) brightness(1.0);
}
[data-theme="light"] .blob-br {
  opacity: 0.35;
  filter: hue-rotate(170deg) saturate(0.65) brightness(1.05);
}

@media (prefers-reduced-motion: reduce) {
  .spin-animation {
    animation: none !important;
  }
}

@media (max-width: 768px) {
  .blob {
    width: 350px;
    height: 350px;
  }
  .blob-tl {
    top: -8%;
    left: -18%;
  }
  .blob-tr {
    top: -10%;
    right: -20%;
  }
  .blob-bl {
    bottom: -8%;
    left: -18%;
  }
  .blob-br {
    bottom: -6%;
    right: -15%;
  }
}

@media (max-width: 480px) {
  .blob {
    width: 280px;
    height: 280px;
  }
  .blob-tl {
    top: -5%;
    left: -15%;
  }
  .blob-tr {
    top: -8%;
    right: -15%;
  }
  .blob-bl {
    bottom: -5%;
    left: -15%;
  }
  .blob-br {
    bottom: -3%;
    right: -10%;
  }
}
</style>
