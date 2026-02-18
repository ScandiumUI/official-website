<template>
  <div class="download-page">
    <!-- Hero (List View) -->
    <section v-if="!selectedDevice" class="page-hero">
      <div class="wrapper">
        <div class="page-hero-content animate-fade-up">
          <h1>{{ t('nav.download') }}</h1>
          <p>{{ t('download.desc') }}</p>
        </div>
      </div>
    </section>

    <!-- Device List View -->
    <section v-if="!selectedDevice" class="device-section">
      <div class="wrapper">
        <div class="device-grid">
          <div v-for="(device, i) in devices" :key="device.codename" class="device-card md3-card-elevated animate-fade-up" :style="{ animationDelay: `${i * 100}ms` }">
            <div class="device-card-inner">
              <div class="device-header">
                <div class="device-icon">
                  <span class="material-symbols-outlined filled">smartphone</span>
                </div>
                <div class="device-info">
                  <div class="device-title-wrap">
                    <h3>{{ device.name }}</h3>
                    <span v-if="device.status === 'Official'" class="material-symbols-outlined verified-icon" title="Official">verified</span>
                  </div>
                  <p class="codename">{{ device.codename }}</p>
                </div>
                <div class="last-updated-badge">
                  <span class="label">Updated</span>
                  <span class="value">{{ device.lastUpdate }}</span>
                </div>
              </div>

              <div class="device-actions">
                <button @click="selectDevice(device.codename)" class="md3-btn md3-btn-filled action-btn">
                  <span class="material-symbols-outlined">download</span>
                  Download Build
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Device Detail View -->
    <div v-else :key="route.fullPath" class="device-detail-view">
      <!-- Detail Hero -->
      <section class="detail-hero">
        <div class="wrapper">
          <div class="detail-hero-content animate-fade-up">
            <div class="device-title-large">
              <div class="device-icon-large">
                <span class="material-symbols-outlined filled">smartphone</span>
              </div>
              <div class="device-info-large">
                <h1>{{ selectedDevice.name }}</h1>
                <div class="device-meta-large">
                  <span class="codename-large">{{ selectedDevice.codename }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Builds Section -->
      <section class="builds-section">
        <div class="wrapper">
          <div class="builds-container">
            <h2 class="section-subtitle animate-fade-up">Available Builds</h2>
            
            <div class="builds-list">
              <div v-for="(build, i) in selectedDevice.builds" :key="build.version" class="build-item-container animate-fade-up" :style="{ animationDelay: `${(i + 1) * 100}ms` }">
                <div class="build-card md3-card-elevated">
                  <div class="build-info">
                    <div class="build-main">
                      <h3>ScandiumOS {{ build.version }}</h3>
                      <div class="build-tags">
                        <span class="build-tag" :class="build.status.toLowerCase()">{{ build.status }}</span>
                        <span class="build-tag size">{{ build.size }}</span>
                      </div>
                    </div>
                    <div class="build-meta">
                      <div class="build-meta-info">
                        <div class="meta-row">
                          <span class="material-symbols-outlined">calendar_month</span>
                          <span>{{ build.date }}</span>
                        </div>
                        <div class="meta-row">
                          <span class="material-symbols-outlined">person</span>
                          <span>{{ build.maintainer }}</span>
                        </div>
                      </div>
                      
                      <button v-if="build.status === 'Stable'" class="gallery-btn-inline" @click="build.showGallery = !build.showGallery" :class="{ active: build.showGallery }" title="View Screenshots">
                        <span class="material-symbols-outlined">{{ build.showGallery ? 'image_not_supported' : 'image' }}</span>
                      </button>
                    </div>
                  </div>
                  <div class="build-actions">
                    <a :href="build.downloadUrl" class="md3-btn md3-btn-filled build-btn">
                      <span class="material-symbols-outlined">download</span>
                      Download ROM
                    </a>
                    <button @click="openBuildChangelog(build)" class="md3-btn md3-btn-outlined changelog-btn">
                      <span class="material-symbols-outlined">description</span>
                      Full Changelog
                    </button>
                  </div>
                </div>

                <!-- Build Specific Screenshot Gallery -->
                <transition name="expand">
                  <div v-if="build.showGallery" class="build-gallery-expand">
                    <div class="mini-screenshots-grid">
                      <div v-for="(ss, idx) in selectedDevice.screenshots" :key="idx" class="mini-screenshot-item">
                        <div class="mini-phone-mockup">
                          <img :src="ss.image" :alt="ss.title" />
                        </div>
                      </div>
                    </div>
                  </div>
                </transition>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Build Changelog Modal -->
      <div v-if="selectedBuild" class="modal-overlay" @click.self="selectedBuild = null">
        <div class="modal-container md3-card-elevated">
          <div class="modal-header">
            <div class="modal-header-text">
              <h2>ScandiumOS {{ selectedBuild.version }}</h2>
              <p>{{ selectedBuild.date }} • {{ selectedDevice.name }}</p>
            </div>
            <button @click="selectedBuild = null" class="close-btn">
              <span class="material-symbols-outlined">close</span>
            </button>
          </div>
          <div class="modal-body">
            <ul class="panel-list">
              <li v-for="change in selectedBuild.changes" :key="change">
                <span class="material-symbols-outlined">circle</span>
                <p>{{ change }}</p>
              </li>
            </ul>
          </div>
          <div class="modal-footer">
            <button @click="selectedBuild = null" class="md3-btn md3-btn-filled">
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref, reactive, onMounted, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useI18n } from '../i18n/index.js'
import { useScrollReveal } from '../composables/useScrollReveal.js'
import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/vue'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'

// Import screenshots
import screenshot1 from '../assets/photo_1_2026-02-17_18-13-15.jpg'
import screenshot2 from '../assets/photo_2_2026-02-17_18-13-15.jpg'
import screenshot3 from '../assets/photo_3_2026-02-17_18-13-15.jpg'
import screenshot4 from '../assets/photo_4_2026-02-17_18-13-15.jpg'

const route = useRoute()
const router = useRouter()
const { t } = useI18n()

const modules = [EffectCoverflow, Pagination, Autoplay]

const selectedBuild = ref(null)

const devices = reactive([
  {
    name: 'Itel P55 5G',
    codename: 'P661N',
    maintainer: 'Scandium Team',
    lastUpdate: 'Feb 15, 2026',
    status: 'Official',
    screenshots: [
      { image: screenshot1, title: 'Home' },
      { image: screenshot2, title: 'Settings' },
      { image: screenshot3, title: 'Notifications' },
      { image: screenshot4, title: 'Quick Settings' }
    ],
    builds: [
      {
        version: 'v16.2.1',
        status: 'Stable',
        size: '1.8 GB',
        date: 'Feb 15, 2026',
        maintainer: 'Scandium Team',
        downloadUrl: '#',
        showGallery: false,
        changes: [
          'Updated security patch level to February 2026',
          'Fixed Control Center blur rendering on some devices',
          'Improved battery life with optimized background services',
          'Enhanced GPU rendering performance for smoother animations',
          'Fixed Bluetooth audio codec selection bug',
        ]
      },
      {
        version: 'v16.2.0',
        status: 'Stable',
        size: '1.8 GB',
        date: 'Jan 20, 2026',
        maintainer: 'Scandium Team',
        downloadUrl: '#',
        showGallery: false,
        changes: [
          'Redesigned volume panel with media player integration',
          'New Scandium Launcher with widget support',
          'Material You dynamic theming improvements',
          'Performance optimizations for gaming and multitasking',
        ]
      }
    ]
  }
])

const selectedDevice = computed(() => {
  const codename = route.query.device
  return devices.find(d => d.codename === codename)
})

function selectDevice(codename) {
  router.push({ query: { device: codename } })
  window.scrollTo(0, 0)
}

function clearSelection() {
  router.push({ query: {} })
  window.scrollTo(0, 0)
}

function openBuildChangelog(build) {
  selectedBuild.value = build
}
</script>

<style scoped>
.download-page {
  padding-bottom: 4rem;
}

/* ── Hero (List) ── */
.page-hero {
  padding: 4rem 0 3rem;
  text-align: center;
}

.page-hero-content h1 {
  margin: 0 0 0.5rem;
  font-size: 3rem;
  color: var(--color-text-one);
}

.page-hero-content p {
  color: var(--color-text-four);
  font-size: 1.1rem;
}

/* ── Device List ── */
.device-section {
  padding: 1rem 0 0.5rem;
}

.device-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 1.5rem;
  max-width: 1000px;
  margin: 0 auto;
}

.device-card {
  padding: 0;
  border-radius: 24px;
  overflow: hidden;
}

.device-card:hover {
  /* Remove transform */
}

.device-card-inner {
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
}

.device-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;
}

.device-icon {
  width: 48px;
  height: 48px;
  border-radius: 12px;
  background-color: var(--color-surface-three);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-primary);
}

.device-icon .material-symbols-outlined {
  font-size: 24px;
}

.device-title-wrap {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.device-info h3 {
  font-size: 1.1rem;
  color: var(--color-text-one);
  margin: 0;
}

.verified-icon {
  font-size: 16px;
  color: var(--color-primary);
}

.codename {
  font-size: 0.8rem;
  color: var(--color-text-four);
  margin-top: 2px;
}

.last-updated-badge {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  text-align: right;
  margin-left: auto;
}

.last-updated-badge .label {
  font-size: 0.55rem;
  text-transform: uppercase;
  color: var(--color-text-four);
  letter-spacing: 0.05em;
  font-weight: 700;
}

.last-updated-badge .value {
  font-size: 0.75rem;
  font-weight: 600;
  color: var(--color-text-one);
  margin-top: 2px;
}

.action-btn {
  width: 100%;
  height: 48px !important;
  font-size: 0.9rem !important;
  border-radius: 100px !important;
  cursor: pointer;
}

/* ── Device Detail View ── */
.detail-hero {
  padding: 4rem 0 1rem;
}

.back-btn {
  background: none;
  border: none;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--color-primary);
  font-weight: 600;
  cursor: pointer;
  padding: 0.5rem;
  margin-bottom: 2rem;
  border-radius: 8px;
  transition: background-color 0.2s ease;
}

.back-btn:hover {
  background-color: var(--color-surface-three);
}

.device-title-large {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  text-align: center;
}

.device-icon-large {
  width: 80px;
  height: 80px;
  border-radius: 24px;
  background: linear-gradient(135deg, var(--color-tertiary) 0%, var(--color-primary) 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
}

.device-icon-large .material-symbols-outlined {
  font-size: 48px;
}

.device-info-large h1 {
  font-size: 2.5rem;
  color: var(--color-text-one);
  margin: 0;
}

.device-meta-large {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  color: var(--color-text-four);
  font-size: 1rem;
  margin-top: 0.5rem;
}

.codename-large {
  font-weight: 700;
  color: var(--color-primary);
}

.meta-sep { opacity: 0.5; }

/* Screenshots */
.screenshots-section {
  padding: 1.5rem 0 0rem;
}

.screenshots-section .section-subtitle {
  margin-bottom: 0rem;
}

.screenshots-container {
  width: 100%;
  padding: 0;
}

.screenshot-swiper {
  width: 100%;
  padding-bottom: 30px !important;
}

.screenshot-swiper :deep(.swiper-slide) {
  width: 280px;
  transition: transform 0.3s ease;
}

.screenshot-swiper :deep(.swiper-slide:not(.swiper-slide-active)) {
  transform: translateY(40px) scale(0.85);
  opacity: 0.6;
}

.screenshot-card {
  width: 100%;
  padding: 1rem;
}

.phone-mockup {
  position: relative;
  width: 100%;
  aspect-ratio: 9 / 19.5;
  background-color: var(--color-surface-four);
  border-radius: 36px;
  padding: 8px;
  box-shadow: var(--shadow-elevation-3);
  overflow: hidden;
}

.pixel-punch-hole {
  position: absolute;
  top: 14px;
  left: 50%;
  transform: translateX(-50%);
  width: 10px; height: 10px;
  background: #000;
  border-radius: 50%;
  z-index: 3;
}

.phone-mockup img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 30px;
}

.pixel-nav-pill {
  position: absolute;
  bottom: 12px;
  left: 50%;
  transform: translateX(-50%);
  width: 80px; height: 4px;
  background: var(--color-text-four);
  border-radius: 4px;
  opacity: 0.5;
  z-index: 3;
}

.screenshot-swiper :deep(.swiper-pagination-bullet) {
  background: var(--color-primary);
}

/* Builds */
.builds-section {
  padding: 1.5rem 0 0.5rem;
}

.builds-container {
  max-width: 800px;
  margin: 0 auto;
}

.section-subtitle {
  font-size: 1.5rem;
  color: var(--color-text-one);
  margin-bottom: 1rem;
  text-align: center;
}

.builds-list {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.build-card {
  padding: 1.5rem;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
}

.build-info {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  flex: 1;
}

.build-main {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
  flex-wrap: wrap;
}

.build-main h3 {
  font-size: 1.2rem;
  color: var(--color-text-one);
  margin: 0;
}

.build-tags {
  display: flex;
  gap: 0.5rem;
}

.build-tag {
  font-size: 0.65rem;
  font-weight: 700;
  text-transform: uppercase;
  padding: 4px 10px;
  border-radius: 8px;
  background-color: var(--color-surface-three);
  color: var(--color-text-four);
}

.build-tag.stable {
  background-color: rgba(33, 150, 243, 0.1);
  color: #2196F3;
}

.build-meta {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 1.5rem;
  width: 100%;
  margin-top: 0.25rem;
}

.build-meta-info {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  text-align: left;
}

.meta-row {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.85rem;
  color: var(--color-text-four);
}

.meta-row .material-symbols-outlined {
  font-size: 18px;
  color: var(--color-primary);
}

.gallery-btn-inline {
  background: none;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-text-four);
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  padding: 4px;
  margin-left: auto;
}

.gallery-btn-inline .material-symbols-outlined {
  font-size: 36px;
}

.gallery-btn-inline:hover {
  color: var(--color-primary);
}

.gallery-btn-inline.active {
  color: var(--color-primary);
}

.build-actions {
  display: flex;
  gap: 0.75rem;
}

.changelog-btn {
  padding: 12px 20px !important;
  font-size: 0.85rem !important;
  font-weight: 600 !important;
}

.build-btn {
  flex-shrink: 0;
  padding: 12px 24px !important;
}

/* Build Gallery Expand */
.build-gallery-expand {
  padding: 1rem 1.5rem 1.5rem;
  background-color: var(--color-surface-nine);
  border-radius: 0 0 20px 20px;
  margin-top: -10px;
  border: 1px solid var(--color-border);
  border-top: none;
}

.mini-screenshots-grid {
  display: flex;
  gap: 1rem;
  overflow-x: auto;
  padding-bottom: 0.5rem;
  scrollbar-width: thin;
}

.mini-screenshot-item {
  flex-shrink: 0;
  width: 140px;
}

.mini-phone-mockup {
  width: 100%;
  aspect-ratio: 9/19.5;
  border-radius: 12px;
  overflow: hidden;
  border: 2px solid var(--color-border);
}

.mini-phone-mockup img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.expand-enter-active, .expand-leave-active {
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  max-height: 500px;
  opacity: 1;
  overflow: hidden;
}

.expand-enter-from, .expand-leave-to {
  max-height: 0;
  opacity: 0;
  transform: translateY(-10px);
}

/* ── Modal ── */
.modal-overlay {
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 1.5rem;
}

.modal-container {
  max-width: 600px;
  width: 100%;
  max-height: 80vh;
  display: flex;
  flex-direction: column;
  padding: 0;
  overflow: hidden;
  border-radius: 28px;
  background-color: var(--color-surface-eight);
  box-shadow: var(--shadow-elevation-3);
  border: 1px solid var(--color-border);
}

.modal-header {
  padding: 1.5rem 2rem;
  border-bottom: 1px solid var(--color-border);
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  background-color: var(--color-surface-eight);
}

.modal-header h2 {
  font-size: 1.5rem;
  margin-bottom: 0.25rem;
  color: var(--color-text-one);
}

.modal-header p {
  font-size: 0.85rem;
  color: var(--color-text-four);
}

.close-btn {
  background: none;
  border: none;
  color: var(--color-text-four);
  cursor: pointer;
  padding: 4px;
}

.modal-body {
  padding: 2rem;
  overflow-y: auto;
  flex: 1;
  background-color: var(--color-surface-eight);
}

.panel-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.panel-list li {
  display: flex;
  gap: 1rem;
  align-items: flex-start;
  text-align: left;
}

.panel-list li .material-symbols-outlined {
  font-size: 8px;
  color: var(--color-primary);
  margin-top: 0.5rem;
  opacity: 0.7;
}

.panel-list li p {
  font-size: 0.95rem;
  color: var(--color-text-four);
  line-height: 1.6;
}

.modal-footer {
  padding: 1.25rem 2rem;
  border-top: 1px solid var(--color-border);
  display: flex;
  justify-content: flex-end;
  background-color: var(--color-surface-eight);
}

@media (max-width: 900px) {
  .build-card {
    flex-direction: column;
    align-items: stretch;
    gap: 1.5rem;
  }
  
  .build-actions {
    flex-direction: column;
  }

  .build-actions .md3-btn {
    width: 100%;
    justify-content: center;
  }
}

@media (max-width: 768px) {
  .device-title-large {
    text-align: center;
  }
}

@media (max-width: 480px) {
  .page-hero-content h1 {
    font-size: 2.2rem;
  }
  
  .device-info-large h1 {
    font-size: 2rem;
  }
  
  .build-meta {
    flex-wrap: wrap;
    gap: 0.75rem;
  }
}
</style>
