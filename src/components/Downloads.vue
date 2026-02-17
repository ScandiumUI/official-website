<template>
  <section id="download" class="download-section">
    <div class="wrapper">
      <div class="download-center">
        <div class="download-header">
          <div class="md3-chip">
            <span class="material-symbols-outlined filled" style="font-size: 16px;">new_releases</span>
            Latest Release
          </div>
          <h2>ScandiumOS <span class="gradient-text">16</span></h2>
          <p>Download the latest build for your device and give your phone a new life.</p>
        </div>
        <div class="download-card md3-card-elevated">
          <div class="card-icon">
            <span class="material-symbols-outlined filled" style="font-size: 36px; color: var(--color-primary);">android</span>
          </div>
          <h3 class="card-title">ScandiumOS 16</h3>
          <p class="card-subtitle">Based on Android 16 (AOSP) — Stable Release</p>

          <div class="card-buttons">
            <a href="#" class="md3-btn md3-btn-filled">
              <span class="material-symbols-outlined" style="font-size: 20px;">download</span>
              Download
            </a>
            <a href="#" class="md3-btn md3-btn-tonal">
              <span class="material-symbols-outlined" style="font-size: 20px;">description</span>
              Changelog
            </a>
          </div>

          <div class="card-chips">
            <div v-for="chip in infoChips" :key="chip.label" class="info-chip">
              <span class="material-symbols-outlined" style="font-size: 14px;">{{ chip.icon }}</span>
              {{ chip.label }}
            </div>
          </div>
        </div>
        <div class="source-note">
          <a href="https://github.com/ScandiumUI" target="_blank" rel="noopener noreferrer" class="md3-btn md3-btn-text">
            <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
            View source code
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const infoChips = [
  { icon: 'verified', label: 'Signed Build' },
  { icon: 'security', label: 'Feb 2026 SPL' },
  { icon: 'code', label: 'Open Source' },
]
</script>

<style scoped>
.download-section {
  padding: 5rem 0;
}

.download-center {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 600px;
  margin: 0 auto;
}

.download-header {
  text-align: center;
  margin-bottom: 2.5rem;
}

.download-header .md3-chip {
  margin-bottom: 1.5rem;
}

.download-header h2 {
  color: var(--color-text-one);
  margin-bottom: 0.75rem;
}

.download-header p {
  font-size: 1.05rem;
}

.download-card {
  width: 100%;
  text-align: center;
  padding: 2.5rem 2rem;
}

.card-icon {
  width: 64px;
  height: 64px;
  border-radius: 16px;
  background-color: var(--color-tertiary);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;
}

.card-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--color-text-one);
  margin-bottom: 0.5rem;
}

.card-subtitle {
  font-size: 0.95rem;
  color: var(--color-text-four);
  margin-bottom: 2rem;
}

.card-buttons {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
}

.card-chips {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.5rem;
}

.source-note {
  margin-top: 1.5rem;
}

@media (max-width: 768px) {
  .download-section {
    padding: 3rem 0;
  }

  .download-card {
    padding: 2rem 1.5rem;
  }
}

@media (max-width: 450px) {
  .card-buttons {
    flex-direction: column;
    width: 100%;
  }

  .card-buttons .md3-btn {
    width: 100%;
    justify-content: center;
  }
}
</style>
