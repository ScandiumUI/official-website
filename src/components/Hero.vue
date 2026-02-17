<template>
  <section id="home" class="hero">
    <div class="hero-content">
      <div class="hero-text">
        <h1 class="animate-fade-up">
          A new<br>
          experience<br>
          awaits <span class="gradient-text">you</span>.
        </h1>
        <p class="animate-fade-up delay-200">
          Give a new life to your phone.<br>
          Faster and better-looking than ever.
        </p>
        <div class="buttons-container animate-fade-up delay-300">
          <div class="hero-buttons internal-buttons">
            <a href="#download" class="md3-btn md3-btn-filled">
              <span class="material-symbols-outlined" style="font-size: 20px;">download</span>
              Download
            </a>
            <a href="https://github.com/ScandiumUI" target="_blank" rel="noopener noreferrer" class="md3-btn md3-btn-tonal">
              <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              GitHub
            </a>
          </div>
        </div>
        <div class="hero-socials animate-fade-up delay-400">
          <a v-for="social in socials" :key="social.name"
             :href="social.url" target="_blank" rel="noopener noreferrer"
             class="social-btn" :aria-label="social.name">
            <span v-html="social.icon"></span>
          </a>
        </div>
      </div>
      <div class="hero-img-container">
        <div class="hero-phone">
          <div class="phone-frame">
            <div class="phone-screen">
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
                <span class="phone-version">14</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <svg class="wave-svg" viewBox="0 0 1440 500" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
      <path class="wave-path" />
    </svg>
  </section>
</template>

<script setup>
const socials = [
  {
    name: 'GitHub',
    url: 'https://github.com/ScandiumUI',
    icon: '<svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>'
  },
  {
    name: 'Telegram',
    url: 'https://t.me/s/ScandiumOS',
    icon: '<svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.479.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>'
  },
]
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
}

.hero-content {
  display: flex;
  align-items: flex-start;
  justify-content: space-evenly;
  width: min(87%, 80rem);
  gap: 1rem;
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

.hero-text h1 {
  color: var(--color-text-one);
  line-height: 1.15;
}

.hero-text .gradient-text {
  color: var(--color-primary);
}

.hero-text p {
  color: var(--color-text-four);
  font-size: 1rem;
  letter-spacing: 0.02rem;
  line-height: 1.75rem;
}

.buttons-container {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.hero-buttons {
  display: flex;
  flex-wrap: wrap;
  user-select: none;
  gap: 1rem;
}

.hero-socials {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-top: 1rem;
}

.hero-img-container {
  z-index: 0;
  flex-shrink: 0;
  padding-top: 5vh;
}

.phone-frame {
  width: 280px;
  height: 560px;
  border-radius: 36px;
  border: 3px solid var(--color-border);
  background-color: var(--color-surface-seven);
  overflow: hidden;
  box-shadow: var(--shadow-elevation-3);
  position: relative;
}

.phone-screen {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background: linear-gradient(180deg, var(--color-surface-eight) 0%, var(--color-bg-one) 100%);
}

.phone-statusbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 20px;
  color: var(--color-text-four);
}

.phone-time {
  font-size: 0.75rem;
  font-weight: 600;
}

.phone-icons {
  display: flex;
  gap: 4px;
  color: var(--color-text-four);
}

.phone-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
}

.phone-logo {
  color: var(--color-primary);
}

.phone-brand {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--color-text-one);
  letter-spacing: -0.02em;
}

.phone-version {
  font-size: 3rem;
  font-weight: 800;
  color: var(--color-primary);
  opacity: 0.3;
  line-height: 1;
}

@media (max-width: 1100px) {
  .hero-img-container {
    display: none;
  }
}

@media (max-width: 450px) {
  .hero {
    padding: 3rem 0;
  }

  .hero-content {
    width: min(92%, 80rem);
  }

  .hero-text {
    padding-top: 2rem;
  }

  .internal-buttons {
    flex-direction: column;
    gap: 1rem;
    width: 100%;
  }

  .internal-buttons .md3-btn {
    width: 100%;
    justify-content: center;
  }

  .hero-socials {
    justify-content: center;
  }
}

@media (max-height: 600px), (max-width: 450px) and (max-height: 780px) {
  .hero {
    min-height: initial;
  }
}

@media (max-width: 335px) {
  .hero {
    padding: 2rem 0 !important;
  }
}
</style>
