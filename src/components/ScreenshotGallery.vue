<template>
  <section class="screenshot-gallery">
    <div class="wrapper">
      <div class="section-header" data-reveal>
        <h2>{{ t('screenshots.title') }}</h2>
        <p>{{ t('screenshots.subtitle') }}</p>
      </div>

      <div class="gallery-container" data-reveal data-reveal-delay="200">
        <swiper
          :modules="modules"
          :effect="'coverflow'"
          :grabCursor="true"
          :centeredSlides="true"
          :slidesPerView="'auto'"
          :coverflowEffect="{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: false,
          }"
          :pagination="{
            clickable: true,
            dynamicBullets: true,
          }"
          :autoplay="{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }"
          :loop="true"
          :speed="600"
          class="screenshot-swiper"
        >
          <swiper-slide v-for="(screenshot, index) in screenshots" :key="index">
            <div class="screenshot-card">
              <div class="phone-mockup pixel6pro">
                <!-- Punch-hole camera -->
                <div class="pixel-punch-hole"></div>
                <img 
                  :src="screenshot.image" 
                  :alt="screenshot.title"
                  class="screenshot-image"
                  loading="lazy"
                />
                <!-- Nav pill -->
                <div class="pixel-nav-pill"></div>
              </div>
              <div class="screenshot-info">
                <h3>{{ screenshot.title }}</h3>
                <p>{{ screenshot.description }}</p>
              </div>
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { computed } from 'vue'
import screenshot1 from '../assets/photo_1_2026-02-17_18-13-15.jpg'
import screenshot2 from '../assets/photo_2_2026-02-17_18-13-15.jpg'
import screenshot3 from '../assets/photo_3_2026-02-17_18-13-15.jpg'
import screenshot4 from '../assets/photo_4_2026-02-17_18-13-15.jpg'
import screenshot5 from '../assets/photo_5_2026-02-17_18-13-15.jpg'
import screenshot6 from '../assets/photo_6_2026-02-17_18-13-15.jpg'
import screenshot7 from '../assets/photo_7_2026-02-17_18-13-15.jpg'
import { useScrollReveal } from '../composables/useScrollReveal.js'
import { useI18n } from '../i18n/index.js'

import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'

const { t } = useI18n()
useScrollReveal()

const modules = [EffectCoverflow, Pagination, Autoplay]

const screenshots = computed(() => [
  {
    image: screenshot1,
    title: t('screenshots.home'),
    description: t('screenshots.homeDesc'),
  },
  {
    image: screenshot2,
    title: t('screenshots.settings'),
    description: t('screenshots.settingsDesc'),
  },
  {
    image: screenshot3,
    title: t('screenshots.notifications'),
    description: t('screenshots.notificationsDesc'),
  },
  {
    image: screenshot4,
    title: t('screenshots.quickSettings'),
    description: t('screenshots.quickSettingsDesc'),
  },
  {
    image: screenshot5,
    title: t('screenshots.lockscreen'),
    description: t('screenshots.lockscreenDesc'),
  },
  {
    image: screenshot6,
    title: t('screenshots.appDrawer'),
    description: t('screenshots.appDrawerDesc'),
  },
  {
    image: screenshot7,
    title: t('screenshots.home'),
    description: t('screenshots.homeDesc'),
  },
])
</script>

<style scoped>
.screenshot-gallery {
  padding: 6rem 0;
  background: linear-gradient(180deg, var(--color-bg-one) 0%, var(--color-surface-seven) 100%);
  overflow: hidden;
}

.section-header {
  text-align: center;
  margin-bottom: 4rem;
}

.section-header h2 {
  color: var(--color-text-one);
  margin-bottom: 0.75rem;
}

.section-header p {
  color: var(--color-text-four);
  font-size: 1.1rem;
  max-width: 600px;
  margin: 0 auto;
}

.gallery-container {
  position: relative;
  width: 100%;
  padding: 2rem 0 4rem;
}

.screenshot-swiper {
  width: 100%;
  padding-top: 50px;
  padding-bottom: 80px;
}

.screenshot-swiper :deep(.swiper-slide) {
  background-position: center;
  background-size: cover;
  width: 320px;
  height: auto;
}

.screenshot-swiper :deep(.swiper-slide-active) .screenshot-card {
  transform: scale(1);
}

.screenshot-card {
  border-radius: 24px;
  padding: 1.5rem;
  transition: transform 0.3s ease-out;
  transform: scale(0.9);
}

.phone-mockup.pixel6pro {
  position: relative;
  width: 100%;
  aspect-ratio: 9 / 19.5;
  background: linear-gradient(135deg, var(--color-surface-three) 0%, var(--color-surface-four) 100%);
  border-radius: 40px;
  padding: 8px;
  box-shadow: var(--shadow-elevation-3);
  overflow: hidden;
}

/* Pixel 6 Pro punch-hole camera */
.pixel-punch-hole {
  position: absolute;
  top: 16px;
  left: 50%;
  transform: translateX(-50%);
  width: 10px; height: 10px;
  background: var(--color-bg-one);
  border-radius: 50%;
  z-index: 3;
  box-shadow: 0 0 0 2px var(--color-surface-four);
}

.screenshot-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 34px;
  display: block;
}

/* Pixel gesture nav pill */
.pixel-nav-pill {
  position: absolute;
  bottom: 14px;
  left: 50%;
  transform: translateX(-50%);
  width: 90px; height: 4px;
  background: var(--color-text-four);
  border-radius: 4px;
  opacity: 0.5;
  z-index: 3;
}

.screenshot-info {
  margin-top: 1.5rem;
  text-align: center;
}

.screenshot-info h3 {
  font-size: 1.1rem;
  color: var(--color-text-one);
  margin-bottom: 0.5rem;
  font-weight: 600;
}

.screenshot-info p {
  font-size: 0.9rem;
  color: var(--color-text-four);
  line-height: 1.5;
}

.screenshot-swiper :deep(.swiper-pagination) {
  bottom: 20px;
}

.screenshot-swiper :deep(.swiper-pagination-bullet) {
  width: 10px;
  height: 10px;
  background-color: var(--color-surface-six);
  opacity: 0.5;
  transition: all 0.3s ease;
}

.screenshot-swiper :deep(.swiper-pagination-bullet-active) {
  background-color: var(--color-primary);
  opacity: 1;
  width: 24px;
  border-radius: 5px;
}

.screenshot-swiper :deep(.swiper-pagination-bullet-active-main) {
  background-color: var(--color-primary);
}

@media (max-width: 768px) {
  .screenshot-gallery {
    padding: 4rem 0;
  }

  .section-header {
    margin-bottom: 2.5rem;
  }

  .screenshot-swiper :deep(.swiper-slide) {
    width: 280px;
  }

  .screenshot-card {
    padding: 1rem;
  }

  .screenshot-info h3 {
    font-size: 1rem;
  }

  .screenshot-info p {
    font-size: 0.85rem;
  }
}

@media (max-width: 480px) {
  .screenshot-swiper :deep(.swiper-slide) {
    width: 260px;
  }
}
</style>
