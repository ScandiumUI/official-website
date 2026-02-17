<template>
  <div class="home-page">
    <!-- Hero Section -->
    <section class="hero">
      <MonetBlobs :theme="isDark ? 'dark' : 'light'" />
      <div class="hero-content">
        <div class="hero-text">
          <h1 class="animate-fade-up">
            {{ t('home.heroTitle1') }}<br>
            {{ t('home.heroTitle2') }}<br>
            {{ t('home.heroTitle3') }} <span class="gradient-text">{{ t('home.heroTitleHighlight') }}</span>.
          </h1>
          <p class="animate-fade-up delay-200">
            {{ t('home.heroDesc1') }}<br>
            {{ t('home.heroDesc2') }}
          </p>
          <div class="hero-actions animate-fade-up delay-300">
            <router-link to="/download" class="md3-btn md3-btn-filled">
              <span class="material-symbols-outlined" style="font-size: 20px;">download</span>
              {{ t('home.download') }}
            </router-link>
            <a href="https://github.com/ScandiumUI" target="_blank" rel="noopener noreferrer" class="md3-btn md3-btn-tonal">
              <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              {{ t('home.github') }}
            </a>
          </div>
        </div>
        <div class="hero-phone-wrap">
          <div class="phone-frame pixel6pro">
            <!-- Camera bar (Pixel 6 Pro signature) -->
            <div class="pixel-camera-bar">
              <div class="camera-lens lens-main"></div>
              <div class="camera-lens lens-ultra"></div>
              <div class="camera-lens lens-tele"></div>
            </div>
            <div class="phone-screen">
              <!-- Punch-hole camera -->
              <div class="pixel-punch-hole"></div>
              <div class="phone-statusbar">
                <span class="phone-time">12:00</span>
                <div class="phone-icons">
                  <span class="material-symbols-outlined" style="font-size: 14px;">signal_cellular_alt</span>
                  <span class="material-symbols-outlined" style="font-size: 14px;">wifi</span>
                  <span class="material-symbols-outlined" style="font-size: 14px;">battery_full</span>
                </div>
              </div>
              <div class="phone-content">
                <span class="material-symbols-outlined phone-logo filled" style="font-size: 48px;">android</span>
                <span class="phone-brand">ScandiumOS</span>
                <span class="phone-ver">16</span>
              </div>
              <!-- Navigation pill -->
              <div class="pixel-nav-pill"></div>
            </div>
          </div>
        </div>
      </div>
      <svg class="wave-svg" viewBox="0 0 1440 500" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
        <path class="wave-path" />
      </svg>
    </section>

    <!-- UI Showcase Teaser -->
    <section class="ui-teaser">
      <div class="wrapper">
        <div class="ui-teaser-content">
          <div class="ui-teaser-text" data-reveal>
            <h2>{{ t('home.uiTitle') }} <span class="gradient-text">{{ t('home.uiTitleHighlight') }}</span></h2>
            <p>{{ t('home.uiDesc') }}</p>
          </div>
          <div class="ui-teaser-cards">
            <div v-for="(card, i) in uiCards" :key="card.icon" class="ui-mini-card md3-card-elevated" data-reveal :data-reveal-delay="100 + i * 100">
              <span class="material-symbols-outlined filled" style="font-size: 28px;">{{ card.icon }}</span>
              <span class="ui-mini-label">{{ card.label }}</span>
            </div>
          </div>
          <div class="ui-teaser-actions" data-reveal data-reveal-delay="500">
            <router-link to="/wiki" class="md3-btn md3-btn-outlined">
              <span class="material-symbols-outlined" style="font-size: 20px;">menu_book</span>
              {{ t('home.learnMore') }}
            </router-link>
          </div>
        </div>
      </div>
    </section>

    <!-- Screenshot Gallery -->
    <ScreenshotGallery />

    <!-- Quick Download CTA -->
    <section class="cta-section">
      <div class="wrapper">
        <div class="cta-card" data-reveal>
          <div class="cta-content">
            <h2>{{ t('home.ctaTitle') }}</h2>
            <p>{{ t('home.ctaDesc') }}</p>
          </div>
          <div class="cta-actions">
            <router-link to="/download" class="md3-btn md3-btn-filled">
              <span class="material-symbols-outlined" style="font-size: 20px;">download</span>
              {{ t('home.downloadNow') }}
            </router-link>
            <router-link to="/contributors" class="md3-btn md3-btn-tonal">
              <span class="material-symbols-outlined" style="font-size: 20px;">group</span>
              {{ t('home.meetTeam') }}
            </router-link>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>

import { computed } from 'vue'
import { useI18n } from '../i18n/index.js'
import { useScrollReveal } from '../composables/useScrollReveal.js'
import { useTheme } from '../composables/useTheme.js'
import ScreenshotGallery from '../components/ScreenshotGallery.vue'
import MonetBlobs from '../components/MonetBlobs.vue'

const { t } = useI18n()
const { isDark } = useTheme()
useScrollReveal()

const features = computed(() => [
  { icon: 'verified', title: t('home.featureStable'), desc: t('home.featureStableDesc') },
  { icon: 'speed', title: t('home.featureLightweight'), desc: t('home.featureLightweightDesc') },
  { icon: 'touch_app', title: t('home.featureIntuitive'), desc: t('home.featureIntuitiveDesc') },
  { icon: 'palette', title: t('home.featureMaterial'), desc: t('home.featureMaterialDesc') },
  { icon: 'security', title: t('home.featureSecure'), desc: t('home.featureSecureDesc') },
  { icon: 'code', title: t('home.featureOpenSource'), desc: t('home.featureOpenSourceDesc') },
])

const uiCards = computed(() => [
  { icon: 'tune', label: t('home.uiControlCenter') },
  { icon: 'music_note', label: t('home.uiMediaPlayer') },
  { icon: 'home', label: t('home.uiLauncher') },
  { icon: 'notifications', label: t('home.uiNotifications') },
])
</script>

<style scoped>
.hero {
  overflow: hidden;
  padding: 3rem 0 0;
  min-height: max(100vh, 600px);
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  margin-bottom: 4rem;
}

.hero-content {
  display: flex;
  align-items: flex-start;
  justify-content: space-evenly;
  width: min(87%, 80rem);
  gap: 2rem;
  position: relative;
  z-index: 1;
  flex: 1;
}

.hero-text {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding-top: 8vh;
}

.hero-text h1 { line-height: 1.15; }
.hero-text p { font-size: 1rem; letter-spacing: 0.02rem; line-height: 1.75rem; }

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.hero-socials {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-top: 0.5rem;
}

.hero-phone-wrap { flex-shrink: 0; padding-top: 5vh; }

.phone-frame.pixel6pro {
  position: relative;
  width: 280px; height: 580px;
  border-radius: 40px;
  border: 3px solid var(--color-border);
  background-color: var(--color-surface-seven);
  overflow: visible;
  box-shadow: var(--shadow-elevation-3);
}

.pixel-camera-bar {
  position: absolute;
  top: -4px;
  left: -3px; right: -3px;
  height: 0;
  z-index: -1;
}

.phone-screen {
  position: relative;
  width: 100%; height: 100%;
  display: flex; flex-direction: column;
  background: linear-gradient(180deg, var(--color-surface-eight) 0%, var(--color-bg-one) 100%);
  border-radius: 37px;
  overflow: hidden;
}

.pixel-punch-hole {
  position: absolute;
  top: 12px;
  left: 50%;
  transform: translateX(-50%);
  width: 12px; height: 12px;
  background: var(--color-bg-one);
  border-radius: 50%;
  z-index: 3;
  box-shadow: 0 0 0 2px var(--color-surface-four);
}

.phone-statusbar {
  display: flex; justify-content: space-between; align-items: center;
  padding: 14px 24px 8px; color: var(--color-text-four);
  z-index: 2;
}

.phone-time { font-size: 0.75rem; font-weight: 600; }
.phone-icons { display: flex; gap: 4px; }

.phone-content {
  flex: 1; display: flex; flex-direction: column;
  align-items: center; justify-content: center; gap: 0.75rem;
}

.phone-logo { color: var(--color-primary); }
.phone-brand { font-size: 1.5rem; font-weight: 700; color: var(--color-text-one); letter-spacing: -0.02em; }
.phone-ver { font-size: 3rem; font-weight: 800; color: var(--color-primary); opacity: 0.3; line-height: 1; }

.pixel-nav-pill {
  width: 120px; height: 4px;
  background: var(--color-text-four);
  border-radius: 4px;
  margin: 0 auto 10px;
  opacity: 0.4;
}
.features-overview {
  padding: 6rem 0;
}

.section-header {
  text-align: center;
  margin-bottom: 3.5rem;
}

.section-header h2 {
  color: var(--color-text-one);
  margin-bottom: 0.75rem;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.25rem;
}

.feature-card {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  padding: 1.75rem;
  cursor: default;
}

.feature-card .feature-icon-wrap {
  width: 48px; height: 48px;
  border-radius: 14px;
  background-color: var(--color-tertiary);
  display: flex; align-items: center; justify-content: center;
}

.feature-card .feature-icon-wrap .material-symbols-outlined {
  font-size: 24px;
  color: var(--color-primary);
}

.feature-card h3 {
  font-size: 1.05rem;
  color: var(--color-text-one);
  font-weight: 600;
}

.feature-card p {
  font-size: 0.9rem;
  line-height: 1.6;
}

.ui-teaser {
  padding: 12rem 0 6rem;
}

.ui-teaser-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 3rem;
}

.ui-teaser-text {
  max-width: 800px;
}

.ui-teaser-text h2 {
  color: var(--color-text-one);
  margin-bottom: 1rem;
}

.ui-teaser-cards {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
  width: 100%;
}

.ui-teaser-actions {
  display: flex;
  justify-content: center;
  width: 100%;
}

.ui-mini-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  padding: 2rem 1rem;
  text-align: center;
}

.ui-mini-card .material-symbols-outlined {
  color: var(--color-primary);
  opacity: 0.7;
}

.ui-mini-label {
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--color-text-four);
}

.cta-section {
  padding: 8rem 0 6rem;
}

.cta-card {
  background-color: var(--color-surface-nine);
  border-radius: 24px;
  padding: 3.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
}

.cta-content h2 {
  color: var(--color-text-one);
  font-size: 2rem;
  margin-bottom: 0.5rem;
}

.cta-actions {
  display: flex;
  gap: 1rem;
  flex-shrink: 0;
}

@media (max-width: 1100px) {
  .hero-phone-wrap { display: none; }

  .hero-content {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    gap: 3rem;
  }

  .hero-text {
    align-items: center;
    padding-top: 6rem;
  }

  .hero-actions {
    justify-content: center;
  }
}

@media (max-width: 1024px) {
  .features-grid { grid-template-columns: repeat(2, 1fr); }
  .ui-teaser-cards { grid-template-columns: repeat(2, 1fr); }
  .cta-card { flex-direction: column; text-align: center; padding: 2.5rem; }
  .cta-actions { justify-content: center; }
}

@media (max-width: 768px) {
  .features-overview { padding: 4rem 0; }
  .ui-teaser { padding: 2rem 0 4rem; }
  .cta-section { padding: 4rem 0 4rem; }
}

@media (max-width: 640px) {
  .features-grid { grid-template-columns: 1fr; }
  .ui-teaser-cards { grid-template-columns: 1fr 1fr; gap: 0.75rem; }
}

@media (max-width: 450px) {
  .hero { padding: 2rem 0 0; }
  .hero-content { width: min(92%, 80rem); }
  .hero-actions { flex-direction: column; width: 100%; }
  .hero-actions .md3-btn { width: 100%; justify-content: center; }
  .hero-socials { justify-content: center; }
  .cta-card { padding: 2rem 1.5rem; }
  .cta-actions { flex-direction: column; width: 100%; }
  .cta-actions .md3-btn { width: 100%; }
}
@media (max-height: 600px) {
  .hero { min-height: initial; }
}
</style>
