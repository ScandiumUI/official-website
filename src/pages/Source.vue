<template>
  <div class="source-page">
    <!-- Changelog Section -->
    <section class="changelog-section">
      <div class="wrapper">
        <h2 class="section-title animate-fade-up" data-reveal>{{ t('download.changelogTitle') }}</h2>
        
        <div class="changelog-accordion">
          <div 
            v-for="(log, i) in changelog" 
            :key="log.version" 
            class="changelog-panel-wrapper animate-fade-up"
            :class="'delay-' + (i + 1) + '00'"
            data-reveal
            :data-reveal-delay="i * 100"
          >
            <div 
              class="changelog-panel"
              :class="{ 'is-open': activePanel === i }"
            >
              <div class="panel-header" @click="activePanel = activePanel === i ? -1 : i">
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
              </div>
              
              <div class="panel-content-container">
                <div class="panel-content">
                  <div class="content-inner">
                    <ul class="panel-list">
                      <li v-for="change in log.changes.slice(0, 4)" :key="change">
                        <span class="material-symbols-outlined">circle</span>
                        <p>{{ change }}</p>
                      </li>
                    </ul>
                    <div v-if="log.changes.length > 4" class="panel-actions">
                      <button @click.stop="openFullChangelog(log)" class="md3-btn md3-btn-outlined full-changelog-btn">
                        <span class="material-symbols-outlined" style="font-size: 20px;">description</span>
                        {{ t('download.fullChangelog') }}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Full Changelog Modal -->
    <div v-if="selectedChangelog" class="modal-overlay" @click.self="selectedChangelog = null">
      <div class="modal-container md3-card-elevated animate-fade-up">
        <div class="modal-header">
          <div class="modal-header-text">
            <h2>ScandiumOS {{ selectedChangelog.version }}</h2>
            <p>{{ selectedChangelog.date }} • {{ selectedChangelog.type }}</p>
          </div>
          <button @click="selectedChangelog = null" class="close-btn">
            <span class="material-symbols-outlined">close</span>
          </button>
        </div>
        <div class="modal-body">
          <ul class="panel-list">
            <li v-for="change in selectedChangelog.changes" :key="change">
              <span class="material-symbols-outlined">circle</span>
              <p>{{ change }}</p>
            </li>
          </ul>
        </div>
        <div class="modal-footer">
          <button @click="selectedChangelog = null" class="md3-btn md3-btn-filled">
            {{ t('about.contactEmail') === 'Email' ? 'Close' : 'Tutup' }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useI18n } from '../i18n/index.js'
import { useScrollReveal } from '../composables/useScrollReveal.js'

const route = useRoute()
const { t } = useI18n()
useScrollReveal()

const selectedChangelog = ref(null)
const activePanel = ref(0)

onMounted(() => {
  const queryChangelog = route.query.changelog
  if (queryChangelog) {
    // Expected format: ScandiumOS-16.1 -> 16.1
    const versionMatch = queryChangelog.match(/ScandiumOS-(\d+\.\d+)/)
    const targetVersion = versionMatch ? versionMatch[1] : queryChangelog

    const index = changelog.findIndex(log => 
      log.version.includes(targetVersion) || 
      (log.version.startsWith('v') && log.version.slice(1).startsWith(targetVersion))
    )

    if (index !== -1) {
      activePanel.value = index
      selectedChangelog.value = changelog[index]
      
      setTimeout(() => {
        const panels = document.querySelectorAll('.changelog-panel-wrapper')
        if (panels[index]) {
          panels[index].scrollIntoView({ behavior: 'smooth', block: 'center' })
        }
      }, 300)
    }
  }
})

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

function getUpdateIcon(index) {
  const icons = ['security_update_good', 'system_update', 'rocket_launch']
  return icons[index] || 'update'
}

function getUpdateColor(index) {
  return 'accent-primary'
}

function openFullChangelog(log) {
  selectedChangelog.value = log
}
</script>

<style scoped>
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
}

.modal-header {
  padding: 1.5rem 2rem;
  border-bottom: 1px solid var(--color-border);
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
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
}

.modal-footer {
  padding: 1.25rem 2rem;
  border-top: 1px solid var(--color-border);
  display: flex;
  justify-content: flex-end;
}

.panel-actions {
  margin-top: 1rem;
  display: flex;
}

.full-changelog-btn {
  width: 100%;
  justify-content: center;
  font-size: 0.85rem !important;
  gap: 0.5rem;
}

.full-changelog-btn .material-symbols-outlined {
  font-size: 16px;
}

/* ── Changelog Accordion ── */
.changelog-section { padding: 3rem 0 4rem; }
.section-title { font-size: 1.8rem; color: var(--color-text-one); margin-bottom: 2.5rem; text-align: center; }

.changelog-accordion {
  max-width: 780px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.changelog-panel-wrapper {
  width: 100%;
}

.changelog-panel {
  border-radius: 20px;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  border: 1px solid var(--color-border);
  background-color: var(--color-surface-one);
}

.changelog-panel:hover {
  border-color: var(--color-primary);
}

.changelog-panel.is-open {
  border-color: var(--color-primary);
  box-shadow: 0 4px 24px -8px rgba(0, 0, 0, 0.3);
}

.panel-header {
  padding: 1.25rem 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  user-select: none;
  background-color: transparent;
  transition: background-color 0.3s ease;
}

.changelog-panel.is-open .panel-header {
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

.changelog-panel.is-open .panel-icon {
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

.changelog-panel.is-open .panel-chevron {
  transform: rotate(180deg);
  color: var(--color-primary);
}

.panel-content-container {
  display: grid;
  grid-template-rows: 0fr;
  transition: grid-template-rows 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.changelog-panel.is-open .panel-content-container {
  grid-template-rows: 1fr;
}

.panel-content {
  overflow: hidden;
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

/* ── Responsive ── */

@media (max-width: 768px) {

  .panel-header { padding: 1rem 1.25rem; }

  .panel-icon { width: 38px; height: 38px; }

  .panel-title h3 { font-size: 1rem; }

}



@media (max-width: 480px) {

}

</style>
