<template>
  <section class="features-section">
    <div class="wrapper">
      <div class="inspire-grid">
        <div class="inspire-img">
          <div class="img-glow"></div>
          <div class="img-frame">
            <div class="img-content">
              <div class="img-phone-mini">
                <div class="mini-screen">
                  <span class="material-symbols-outlined filled" style="font-size: 40px; color: var(--color-primary);">android</span>
                  <span class="mini-label">ScandiumOS</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="inspire-text">
          <h1>Built to <span class="gradient-text">inspire</span></h1>
          <p class="inspire-desc">
            ScandiumOS is an operating system based on the Android Open Source Project, built with a unique look and maintaining top-notch performance.
          </p>

          <div class="feature-cards">
            <div v-for="feature in features" :key="feature.title" class="md3-card feature-card">
              <div class="feature-card-inner">
                <div class="feature-icon-wrap">
                  <span class="material-symbols-outlined filled feature-icon">{{ feature.icon }}</span>
                </div>
                <div class="feature-card-text">
                  <h3>{{ feature.title }}</h3>
                  <p>{{ feature.description }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr class="section-divider">
      <div class="ui-section">
        <div class="ui-header">
          <h1>The new <span class="gradient-text">ScandiumUI</span> experience</h1>
          <p>A completely new user interface, designed to be seamless.</p>
        </div>
        <div class="ui-blocks">
          <div v-for="(block, idx) in uiBlocks" :key="block.title"
               class="ui-block"
               :class="{ reversed: idx % 2 !== 0 }">
            <div class="ui-block-visual">
              <div class="ui-block-frame">
                <div class="ui-block-screen">
                  <span class="material-symbols-outlined ui-block-icon filled">{{ block.icon }}</span>
                  <span class="ui-block-label">{{ block.label }}</span>
                </div>
              </div>
            </div>
            <div class="ui-block-text">
              <div class="ui-block-title-row">
                <div class="ui-block-title-icon">
                  <span class="material-symbols-outlined filled">{{ block.icon }}</span>
                </div>
                <h2>{{ block.title }}</h2>
              </div>
              <p v-for="(text, i) in block.texts" :key="i">{{ text }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const features = [
  {
    icon: 'verified',
    title: 'Ready for daily usage',
    description: 'We have refined every detail to make your experience effortless and enjoyable.',
  },
  {
    icon: 'speed',
    title: 'Lightweight',
    description: 'No clutter or bloatware, just the core essentials. You decide what stays on your device.',
  },
  {
    icon: 'touch_app',
    title: 'Intuitive',
    description: "We built an interface that stands out from the rest. It's completely new yet familiar.",
  },
]

const uiBlocks = [
  {
    icon: 'tune',
    title: 'Control Center',
    label: 'Quick Settings',
    texts: [
      'Quick access to settings, music, and notifications all in one place.',
      'A monochromatic color palette combined with a dynamically blurred background gives you a focused panel experience.',
    ],
  },
  {
    icon: 'music_note',
    title: 'Media Controls',
    label: 'Now Playing',
    texts: [
      'A much more minimalistic volume panel with a new elegant look and an embedded quick music player allows you to interact seamlessly with your media.',
    ],
  },
  {
    icon: 'home',
    title: 'Scandium Launcher',
    label: 'Home Screen',
    texts: [
      'This is a lightweight system for your device — very simple yet elegant. It helps you organize your apps and can be customized with widgets and icon packs.',
    ],
  },
]
</script>

<style scoped>
.features-section {
  padding: 5rem 0;
}

.inspire-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  margin-bottom: 5rem;
}

.inspire-img {
  position: relative;
}

.img-glow {
  position: absolute;
  inset: -20%;
  background: radial-gradient(ellipse at center, hsla(206, 100%, 81%, 0.08) 0%, transparent 70%);
  border-radius: 50%;
  pointer-events: none;
}

.img-frame {
  position: relative;
  overflow: hidden;
  border-radius: 24px;
  border: 1px solid var(--color-border);
  background-color: var(--color-surface-seven);
}

.img-content {
  aspect-ratio: 4 / 3;
  display: flex;
  align-items: center;
  justify-content: center;
}

.img-phone-mini {
  width: 160px;
  height: 300px;
  border-radius: 24px;
  border: 2px solid var(--color-border);
  background: linear-gradient(180deg, var(--color-surface-eight) 0%, var(--color-bg-one) 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: var(--shadow-elevation-2);
}

.mini-screen {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
}

.mini-label {
  font-size: 0.75rem;
  font-weight: 600;
  color: var(--color-text-four);
}

.inspire-text h1 {
  margin-bottom: 1rem;
}

.inspire-desc {
  margin-bottom: 2rem;
}

.feature-cards {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.feature-card {
  cursor: default;
}

.feature-card-inner {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
}

.feature-icon-wrap {
  width: 40px;
  height: 40px;
  min-width: 40px;
  border-radius: 12px;
  background-color: var(--color-tertiary);
  display: flex;
  align-items: center;
  justify-content: center;
}

.feature-icon {
  font-size: 20px;
  color: var(--color-primary);
}

.feature-card-text h3 {
  font-size: 1rem;
  font-weight: 600;
  color: var(--color-text-one);
  margin-bottom: 0.25rem;
}

.feature-card-text p {
  font-size: 0.9rem;
  color: var(--color-text-four);
  line-height: 1.6;
}

.section-divider {
  margin: 0 auto 5rem;
  max-width: 200px;
  border-color: var(--color-border);
  opacity: 0.5;
}

.ui-header {
  text-align: center;
  margin-bottom: 4rem;
}

.ui-header h1 {
  margin-bottom: 1rem;
}

.ui-header p {
  font-size: 1.1rem;
  max-width: 600px;
  margin: 0 auto;
}

.ui-blocks {
  display: flex;
  flex-direction: column;
  gap: 5rem;
}

.ui-block {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}

.ui-block.reversed {
  direction: rtl;
}

.ui-block.reversed > * {
  direction: ltr;
}

.ui-block-visual {
  position: relative;
}

.ui-block-frame {
  overflow: hidden;
  border-radius: 24px;
  border: 1px solid var(--color-border);
  background-color: var(--color-surface-seven);
}

.ui-block-screen {
  aspect-ratio: 16 / 10;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  background: linear-gradient(135deg, var(--color-surface-eight) 0%, var(--color-surface-seven) 100%);
}

.ui-block-icon {
  font-size: 48px;
  color: var(--color-primary);
  opacity: 0.6;
}

.ui-block-label {
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--color-text-four);
  padding: 4px 12px;
  border-radius: 100px;
  background-color: var(--color-tertiary);
}

.ui-block-text {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.ui-block-title-row {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 0.5rem;
}

.ui-block-title-icon {
  width: 40px;
  height: 40px;
  min-width: 40px;
  border-radius: 12px;
  background-color: var(--color-tertiary);
  display: flex;
  align-items: center;
  justify-content: center;
}

.ui-block-title-icon .material-symbols-outlined {
  font-size: 20px;
  color: var(--color-primary);
}

.ui-block-text h2 {
  font-size: 1.75rem;
  color: var(--color-text-one);
  font-weight: 700;
}

.ui-block-text p {
  color: var(--color-text-four);
  line-height: 1.75;
}

@media (max-width: 1024px) {
  .inspire-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .inspire-img {
    max-width: 500px;
    margin: 0 auto;
  }

  .ui-block {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .ui-block.reversed {
    direction: ltr;
  }

  .ui-block-visual {
    max-width: 600px;
    margin: 0 auto;
    width: 100%;
  }
}

@media (max-width: 768px) {
  .features-section {
    padding: 3rem 0;
  }

  .inspire-grid {
    margin-bottom: 3rem;
  }

  .section-divider {
    margin-bottom: 3rem;
  }

  .ui-blocks {
    gap: 3rem;
  }
}

@media (max-width: 450px) {
  .inspire-text h1 {
    font-size: 2.2rem;
  }

  .ui-header h1 {
    font-size: 2.2rem;
  }
}
</style>
