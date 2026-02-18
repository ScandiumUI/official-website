<template>
  <div class="download-page">
    <!-- Hero -->
    <section class="page-hero">
      <div class="wrapper">
        <div class="page-hero-content animate-fade-up">
          <h1>{{ t('download.title') }}</h1>
          <p>{{ t('download.desc') }}</p>
        </div>
      </div>
    </section>

    <!-- Main Release Card -->
    <section class="release-section">
      <div class="wrapper">
        <div class="release-hero animate-fade-up">
          <div class="release-card md3-card-elevated">
            <div class="release-card-header">
              <div class="release-icon">
                <span class="material-symbols-outlined filled" style="font-size: 36px;">android</span>
              </div>
              <div class="release-info">
                <h2>{{ t('download.releaseTitle') }}</h2>
                <p>{{ t('download.releaseDesc') }}</p>
              </div>
              <div class="release-badges">
                <div class="info-chip">
                  <span class="material-symbols-outlined" style="font-size: 14px;">verified</span>
                  {{ t('download.signedBuild') }}
                </div>
                <div class="info-chip">
                  <span class="material-symbols-outlined" style="font-size: 14px;">security</span>
                  Feb 2026 SPL
                </div>
                <div class="info-chip">
                  <span class="material-symbols-outlined" style="font-size: 14px;">code</span>
                  {{ t('download.openSource') }}
                </div>
              </div>
            </div>

            <div class="release-meta">
              <div v-for="meta in releaseMeta" :key="meta.icon" class="meta-item">
                <span class="material-symbols-outlined meta-icon" style="font-size: 20px;">{{ meta.icon }}</span>
                <div class="meta-text">
                  <span class="meta-label">{{ meta.label }}</span>
                  <span class="meta-value">{{ meta.value }}</span>
                </div>
              </div>
            </div>

            <div class="release-actions">
              <a href="#" class="md3-btn md3-btn-filled action-btn">
                <span class="material-symbols-outlined" style="font-size: 20px;">download</span>
                {{ t('download.downloadRom') }}
              </a>
              <a href="#" class="md3-btn md3-btn-outlined action-btn">
                <span class="material-symbols-outlined" style="font-size: 20px;">description</span>
                {{ t('download.fullChangelog') }}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Changelog Section -->
    <section class="changelog-section">
      <div class="wrapper">
        <h2 class="section-title animate-fade-up">{{ t('download.changelogTitle') }}</h2>
        
        <div class="changelog-accordion">
          <details 
            v-for="(log, i) in changelog" 
            :key="log.version" 
            class="changelog-panel animate-fade-up"
            :class="'delay-' + (i + 1) + '00'"
            :open="i === 0"
          >
            <summary class="panel-header md3-card-outlined">
              <div class="panel-header-main">
                <div class="panel-icon" :class="getUpdateColor(i)">
                  <span class="material-symbols-outlined">{{ getUpdateIcon(i) }}</span>
                </div>
                <div class="panel-info">
                  <div class="panel-title">
                    <h3>ScandiumOS {{ log.version }}</h3>
                    <span v-if="i === 0" class="latest-tag">{{ t('download.latest') }}</span>
                  </div>
                  <div class="panel-meta">
                    <span class="meta-date">{{ log.date }}</span>
                    <span class="meta-sep">•</span>
                    <span class="meta-type">{{ log.type }}</span>
                  </div>
                </div>
              </div>
              <div class="panel-chevron">
                <span class="material-symbols-outlined">expand_more</span>
              </div>
            </summary>
            
            <div class="panel-content">
              <div class="content-inner">
                <ul class="panel-list">
                  <li v-for="change in log.changes" :key="change">
                    <span class="material-symbols-outlined">circle</span>
                    <p>{{ change }}</p>
                  </li>
                </ul>
              </div>
            </div>
          </details>
        </div>
      </div>
    </section>

    <!-- Additional Downloads -->
    <section class="extras-section">
      <div class="wrapper">
        <h2 class="section-title animate-fade-up">{{ t('download.additionalTitle') }}</h2>
        <div class="extras-grid">
          <div v-for="extra in extras" :key="extra.icon" class="extra-card md3-card-outlined animate-fade-up">
            <div class="extra-icon-wrap">
              <span class="material-symbols-outlined filled" style="font-size: 26px;">{{ extra.icon }}</span>
            </div>
            <div class="extra-body">
              <h3>{{ extra.title }}</h3>
              <p>{{ extra.desc }}</p>
            </div>
            <a :href="extra.url" class="md3-btn md3-btn-tonal extra-btn">
              <span class="material-symbols-outlined" style="font-size: 18px;">download</span>
              {{ t('home.download') }}
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Source -->
    <section class="source-section">
      <div class="wrapper">
        <div class="source-card animate-fade-up">
          <div class="source-icon">
            <svg width="32" height="32" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
          </div>
          <div class="source-text">
            <h3>{{ t('download.sourceTitle') }}</h3>
            <p>{{ t('download.sourceDesc') }}</p>
          </div>
          <a href="https://github.com/ScandiumUI" target="_blank" rel="noopener noreferrer" class="md3-btn md3-btn-tonal">
            <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
            {{ t('download.viewOnGithub') }}
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from '../i18n/index.js'

const { t } = useI18n()

const releaseMeta = computed(() => [
  { icon: 'calendar_month', label: t('download.releaseDate'), value: 'February 15, 2026' },
  { icon: 'tag', label: t('download.version'), value: 'v16.2.1-stable' },
  { icon: 'storage', label: t('download.size'), value: '1.2 GB' },
  { icon: 'smartphone', label: t('download.architecture'), value: 'ARM64' },
])

const changelog = [
  {
    version: 'v16.2.1',
    date: 'Feb 15, 2026',
    type: 'Security Patch',
    changes: [
      'Updated security patch level to February 2026',
      'Fixed Control Center blur rendering on some devices',
      'Improved battery life with optimized background services',
      'Enhanced GPU rendering performance for smoother animations',
      'Fixed Bluetooth audio codec selection bug',
    ],
  },
  {
    version: 'v16.2.0',
    date: 'Jan 20, 2026',
    type: 'Feature Update',
    changes: [
      'Redesigned volume panel with media player integration',
      'New Scandium Launcher with widget support',
      'Material You dynamic theming improvements',
      'Performance optimizations for gaming and multitasking',
    ],
  },
  {
    version: 'v16.1.0',
    date: 'Dec 10, 2025',
    type: 'Initial Release',
    changes: [
      'Initial stable release of ScandiumOS 16',
      'New Control Center with monochromatic design',
      'Custom notification shade',
      'Privacy dashboard integration',
    ],
  },
]

const extras = computed(() => [
  { icon: 'apps', title: t('download.gappsTitle'), desc: t('download.gappsDesc'), url: '#' },
  { icon: 'memory', title: t('download.firmwareTitle'), desc: t('download.firmwareDesc'), url: '#' },
  { icon: 'install_desktop', title: t('download.recoveryTitle'), desc: t('download.recoveryDesc'), url: '#' },
])

function getUpdateIcon(index) {
  const icons = ['security_update_good', 'system_update', 'rocket_launch']
  return icons[index] || 'update'
}

function getUpdateColor(index) {
  return 'accent-primary'
}
</script>

<style scoped>
/* ── Hero ── */
.page-hero {
  padding: 4rem 0 3rem;
  border-bottom: 1px solid var(--color-border);
}
.page-hero-content { 
  max-width: 800px; 
  margin: 0 auto;
  text-align: center; 
}
.page-hero-content .md3-chip { margin-bottom: 1.5rem; }
.page-hero-content h1 { margin-bottom: 0.75rem; }

/* ── Release Section ── */
.release-section { padding: 2.5rem 0; }
.release-hero { max-width: 780px; margin: 0 auto; }
.release-card { padding: 2rem; }

.release-card-header {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
  text-align: center;
}

.release-icon {
  width: 56px; height: 56px;
  border-radius: 16px;
  background: linear-gradient(135deg, var(--color-tertiary) 0%, var(--color-primary) 100%);
  display: flex; align-items: center; justify-content: center;
  flex-shrink: 0;
}
.release-icon .material-symbols-outlined { color: #fff; }

.release-info { width: 100%; }
.release-info h2 { color: var(--color-text-one); font-size: 1.5rem; margin-bottom: 0.4rem; }
.release-info p { font-size: 0.85rem; color: var(--color-text-four); max-width: 480px; margin: 0 auto; }

.release-badges {
  display: flex; flex-wrap: wrap; gap: 0.4rem;
  justify-content: center;
}

.release-meta {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.65rem;
  margin-bottom: 1.5rem;
}

.meta-item {
  display: flex; align-items: center; gap: 0.65rem;
  padding: 0.75rem 1rem;
  border-radius: 12px;
  background-color: var(--color-surface-eight);
  transition: background-color 0.2s ease;
}
.meta-item:hover { background-color: var(--color-surface-nine); }

.meta-icon { color: var(--color-primary); flex-shrink: 0; }
.meta-label { font-size: 0.65rem; color: var(--color-text-four); display: block; text-transform: uppercase; letter-spacing: 0.05em; }
.meta-value { font-size: 0.85rem; font-weight: 600; color: var(--color-text-one); display: block; margin-top: 1px; }

.release-actions {
  display: flex;
  gap: 0.65rem;
}
.action-btn {
  flex: 1;
  justify-content: center;
  padding: 12px 20px !important;
  font-size: 0.9rem !important;
}

/* ── Changelog Accordion ── */
.changelog-section { padding: 4rem 0; }
.section-title { font-size: 1.8rem; color: var(--color-text-one); margin-bottom: 2.5rem; text-align: center; }

.changelog-accordion {
  max-width: 780px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.changelog-panel {
  border-radius: 20px;
  overflow: hidden;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  border: 1px solid var(--color-border);
  background-color: var(--color-surface-one);
}

.changelog-panel:hover {
  border-color: var(--color-primary);
}

.changelog-panel[open] {
  border-color: var(--color-primary);
  box-shadow: 0 4px 20px -5px rgba(0, 0, 0, 0.2);
}

.panel-header {
  padding: 1.25rem 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  list-style: none;
  background-color: transparent;
  transition: all 0.2s ease;
}
.panel-header::-webkit-details-marker { display: none; }

.changelog-panel[open] .panel-header {
  background-color: var(--color-surface-two);
  border-bottom: 1px solid var(--color-border);
}

.panel-header-main {
  display: flex;
  align-items: center;
  gap: 1.25rem;
}

.panel-icon {
  width: 44px; height: 44px;
  border-radius: 12px;
  background-color: var(--color-tertiary);
  display: flex; align-items: center; justify-content: center;
  color: var(--color-primary);
  transition: all 0.3s ease;
}

.changelog-panel[open] .panel-icon {
  background-color: var(--color-primary);
  color: #fff;
}

.panel-info {
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  text-align: left;
}

.panel-title {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.panel-title h3 {
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--color-text-one);
}

.latest-tag {
  font-size: 0.6rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  padding: 2px 8px;
  border-radius: 6px;
  background: linear-gradient(135deg, var(--color-primary), hsl(206, 80%, 65%));
  color: #fff;
}

.panel-meta {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  font-size: 0.8rem;
  color: var(--color-text-four);
  font-weight: 500;
}

.meta-sep { opacity: 0.5; }

.meta-type {
  color: var(--color-primary);
  font-weight: 700;
  font-size: 0.7rem;
  text-transform: uppercase;
}

.panel-chevron {
  color: var(--color-text-four);
  transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.changelog-panel[open] .panel-chevron {
  transform: rotate(180deg);
  color: var(--color-primary);
}

.panel-content {
  background-color: transparent;
}

.content-inner {
  padding: 1.5rem;
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

/* ── Extras ── */
.extras-section { padding: 3rem 0; text-align: center; }
.extras-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
}

.extra-card {
  display: flex; flex-direction: column;
  align-items: center; gap: 1rem;
  padding: 2rem;
  text-align: center;
}
.extra-card:hover {
  border-color: var(--color-primary);
}

.extra-icon-wrap {
  width: 52px; height: 52px; border-radius: 16px;
  display: flex; align-items: center; justify-content: center;
  background: hsla(206, 80%, 60%, 0.15);
  color: var(--color-primary);
  margin-bottom: 0.5rem;
}

.extra-body { flex: 1; width: 100%; }
.extra-body h3 { font-size: 1.1rem; color: var(--color-text-one); margin-bottom: 0.5rem; font-weight: 700; }
.extra-body p { font-size: 0.85rem; color: var(--color-text-four); line-height: 1.6; }

.extra-btn {
  width: 100%; justify-content: center;
  margin-top: 0.5rem;
}

/* ── Source ── */
.source-section { padding: 2rem 0 5rem; }
.source-card {
  display: flex; flex-direction: column;
  align-items: center; gap: 1.5rem;
  padding: 3rem 2rem; border-radius: 24px;
  background-color: var(--color-surface-nine);
  text-align: center;
}
.source-icon {
  width: 64px; height: 64px; border-radius: 18px;
  background: hsla(206, 80%, 60%, 0.1);
  display: flex; align-items: center; justify-content: center;
  flex-shrink: 0; color: var(--color-primary);
}
.source-text { flex: 1; width: 100%; }
.source-text h3 { font-size: 1.4rem; color: var(--color-text-one); margin-bottom: 0.5rem; font-weight: 700; }
.source-text p { font-size: 0.95rem; color: var(--color-text-four); max-width: 600px; margin: 0 auto; line-height: 1.6; }

.source-card .md3-btn {
  padding: 12px 32px !important;
}

/* ── Responsive ── */
@media (max-width: 768px) {
  .page-hero { padding: 3rem 0 2rem; }
  .release-card { padding: 2rem 1.5rem; }
  .release-meta { grid-template-columns: repeat(2, 1fr); }
  .extras-grid { grid-template-columns: 1fr; }
  .source-card { flex-direction: column; text-align: center; padding: 2rem 1.5rem; }
  .source-icon { margin: 0 auto; }
  .panel-header { padding: 1rem 1.25rem; }
  .panel-icon { width: 38px; height: 38px; }
  .panel-title h3 { font-size: 1rem; }
}

@media (max-width: 480px) {
  .page-hero-content h1 { font-size: 2.2rem; }
  .release-meta { grid-template-columns: 1fr; }
  .release-actions { flex-direction: column; }
  .action-btn { width: 100%; }
}</style>
