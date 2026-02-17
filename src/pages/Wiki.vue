<template>
  <div class="wiki-page">
    <section class="page-hero">
      <div class="wrapper">
        <div class="page-hero-content animate-fade-up">
          <div class="md3-chip">
            <span class="material-symbols-outlined filled" style="font-size: 16px;">menu_book</span>
            {{ t('wiki.chip') }}
          </div>
          <h1>{{ t('wiki.title') }}</h1>
          <p>{{ t('wiki.desc') }}</p>
        </div>
      </div>
    </section>
    <section class="wiki-content">
      <div class="wrapper">
        <div class="wiki-layout">
          <aside class="wiki-sidebar">
            <nav class="toc">
              <span class="toc-title">{{ t('wiki.onThisPage') }}</span>
              <ul>
                <li v-for="section in sections" :key="section.id">
                  <a :href="'#' + section.id" class="toc-link" :class="{ active: activeSection === section.id }" @click.prevent="scrollTo(section.id)">
                    {{ section.title }}
                  </a>
                </li>
              </ul>
            </nav>
          </aside>
          <div class="wiki-main">
            <article id="getting-started" class="wiki-section animate-fade-up">
              <h2>{{ t('wiki.gettingStarted') }}</h2>
              <p>{{ t('wiki.gettingStartedDesc') }}</p>

              <div class="requirements-grid">
                <div v-for="req in requirements" :key="req.icon" class="req-card md3-card-outlined">
                  <span class="material-symbols-outlined filled req-icon">{{ req.icon }}</span>
                  <h3>{{ req.title }}</h3>
                  <p>{{ req.desc }}</p>
                </div>
              </div>
            </article>
            <article id="installation" class="wiki-section animate-fade-up">
              <h2>{{ t('wiki.installTitle') }}</h2>
              <p>{{ t('wiki.installDesc') }}</p>

              <div class="steps-list">
                <div v-for="(step, i) in steps" :key="i" class="step-item">
                  <div class="step-number">{{ i + 1 }}</div>
                  <div class="step-content">
                    <h3>{{ step.title }}</h3>
                    <p>{{ step.desc }}</p>
                    <div v-if="step.command" class="code-block">
                      <code>{{ step.command }}</code>
                    </div>
                  </div>
                </div>
              </div>
            </article>
            <article id="features" class="wiki-section animate-fade-up">
              <h2>{{ t('wiki.featuresTitle') }}</h2>
              <p>{{ t('wiki.featuresDesc') }}</p>

              <div class="feature-list">
                <div v-for="feat in wikiFeatures" :key="feat.icon" class="feature-row">
                  <div class="feature-row-icon">
                    <span class="material-symbols-outlined filled">{{ feat.icon }}</span>
                  </div>
                  <div class="feature-row-text">
                    <h3>{{ feat.title }}</h3>
                    <p>{{ feat.desc }}</p>
                  </div>
                </div>
              </div>
            </article>
            <article id="faq" class="wiki-section animate-fade-up">
              <h2>{{ t('wiki.faqTitle') }}</h2>
              <div class="faq-list">
                <details v-for="(faq, i) in faqs" :key="i" class="faq-item md3-card-outlined">
                  <summary>
                    <span class="faq-q">{{ faq.q }}</span>
                    <span class="material-symbols-outlined faq-chevron">expand_more</span>
                  </summary>
                  <p class="faq-a">{{ faq.a }}</p>
                </details>
              </div>
            </article>
            <article id="troubleshooting" class="wiki-section animate-fade-up">
              <h2>{{ t('wiki.troubleTitle') }}</h2>
              <div class="trouble-grid">
                <div v-for="(item, i) in troubleshoot" :key="i" class="trouble-card md3-card">
                  <div class="trouble-header">
                    <span class="material-symbols-outlined filled" style="color: var(--color-md-error);">error</span>
                    <h3>{{ item.problem }}</h3>
                  </div>
                  <p>{{ item.solution }}</p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useI18n } from '../i18n/index.js'

const { t } = useI18n()

const activeSection = ref('getting-started')

const sections = computed(() => [
  { id: 'getting-started', title: t('wiki.tocGettingStarted') },
  { id: 'installation', title: t('wiki.tocInstallation') },
  { id: 'features', title: t('wiki.tocFeatures') },
  { id: 'faq', title: t('wiki.tocFAQ') },
  { id: 'troubleshooting', title: t('wiki.tocTroubleshooting') },
])

const requirements = computed(() => [
  { icon: 'smartphone', title: t('wiki.reqBootloader'), desc: t('wiki.reqBootloaderDesc') },
  { icon: 'install_mobile', title: t('wiki.reqRecovery'), desc: t('wiki.reqRecoveryDesc') },
  { icon: 'battery_charging_full', title: t('wiki.reqBattery'), desc: t('wiki.reqBatteryDesc') },
  { icon: 'backup', title: t('wiki.reqBackup'), desc: t('wiki.reqBackupDesc') },
])

const steps = computed(() => [
  { title: t('wiki.step1Title'), desc: t('wiki.step1Desc'), command: null },
  { title: t('wiki.step2Title'), desc: t('wiki.step2Desc'), command: 'adb reboot recovery' },
  { title: t('wiki.step3Title'), desc: t('wiki.step3Desc'), command: null },
  { title: t('wiki.step4Title'), desc: t('wiki.step4Desc'), command: 'adb sideload ScandiumOS-16-*.zip' },
  { title: t('wiki.step5Title'), desc: t('wiki.step5Desc'), command: null },
  { title: t('wiki.step6Title'), desc: t('wiki.step6Desc'), command: null },
])

const wikiFeatures = computed(() => [
  { icon: 'tune', title: t('wiki.featControlCenter'), desc: t('wiki.featControlCenterDesc') },
  { icon: 'music_note', title: t('wiki.featMedia'), desc: t('wiki.featMediaDesc') },
  { icon: 'home', title: t('wiki.featLauncher'), desc: t('wiki.featLauncherDesc') },
  { icon: 'palette', title: t('wiki.featTheme'), desc: t('wiki.featThemeDesc') },
  { icon: 'lock', title: t('wiki.featPrivacy'), desc: t('wiki.featPrivacyDesc') },
  { icon: 'battery_saver', title: t('wiki.featBattery'), desc: t('wiki.featBatteryDesc') },
])

const faqs = computed(() => [
  { q: t('wiki.faq1Q'), a: t('wiki.faq1A') },
  { q: t('wiki.faq2Q'), a: t('wiki.faq2A') },
  { q: t('wiki.faq3Q'), a: t('wiki.faq3A') },
  { q: t('wiki.faq4Q'), a: t('wiki.faq4A') },
  { q: t('wiki.faq5Q'), a: t('wiki.faq5A') },
])

const troubleshoot = computed(() => [
  { problem: t('wiki.trouble1Problem'), solution: t('wiki.trouble1Solution') },
  { problem: t('wiki.trouble2Problem'), solution: t('wiki.trouble2Solution') },
  { problem: t('wiki.trouble3Problem'), solution: t('wiki.trouble3Solution') },
  { problem: t('wiki.trouble4Problem'), solution: t('wiki.trouble4Solution') },
])

const scrollTo = (id) => {
  const el = document.getElementById(id)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}

const handleScroll = () => {
  const sectionEls = sections.map(s => document.getElementById(s.id))
  for (let i = sectionEls.length - 1; i >= 0; i--) {
    if (sectionEls[i] && sectionEls[i].getBoundingClientRect().top <= 150) {
      activeSection.value = sections[i].id
      break
    }
  }
}

onMounted(() => window.addEventListener('scroll', handleScroll, { passive: true }))
onUnmounted(() => window.removeEventListener('scroll', handleScroll))
</script>

<style scoped>
.page-hero {
  padding: 4rem 0 3rem;
  border-bottom: 1px solid var(--color-border);
}

.page-hero-content {
  max-width: 600px;
}

.page-hero-content .md3-chip { margin-bottom: 1.5rem; }
.page-hero-content h1 { margin-bottom: 0.75rem; }
.wiki-content { padding: 3rem 0 5rem; }

.wiki-layout {
  display: grid;
  grid-template-columns: 220px 1fr;
  gap: 3rem;
  align-items: start;
}

.wiki-sidebar {
  position: sticky;
  top: 90px;
}

.toc-title {
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--color-text-four);
  text-transform: uppercase;
  letter-spacing: 0.06em;
  margin-bottom: 1rem;
  display: block;
}

.toc ul {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.toc-link {
  display: block;
  padding: 8px 12px;
  border-radius: 8px;
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--color-text-four);
  text-decoration: none;
  border-left: 2px solid transparent;
  transition: color 0.2s, background-color 0.2s, border-color 0.2s;
}

.toc-link:hover { color: var(--color-text-one); background-color: var(--color-surface-three); }
.toc-link.active { color: var(--color-primary); border-left-color: var(--color-primary); background-color: var(--color-tertiary); }
.wiki-section { margin-bottom: 4rem; }
.wiki-section h2 { color: var(--color-text-one); font-size: 1.75rem; margin-bottom: 1rem; }
.wiki-section > p { margin-bottom: 2rem; }
.requirements-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
}

.req-card {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 1.5rem;
}

.req-icon { font-size: 24px; color: var(--color-primary); }
.req-card h3 { font-size: 1rem; color: var(--color-text-one); }
.req-card p { font-size: 0.875rem; }

.steps-list {
  display: flex;
  flex-direction: column;
  gap: 0;
}

.step-item {
  display: flex;
  gap: 1.25rem;
  padding: 1.5rem 0;
  border-bottom: 1px solid var(--color-border);
}

.step-item:last-child { border-bottom: none; }

.step-number {
  width: 36px; height: 36px; min-width: 36px;
  border-radius: 50%;
  background-color: var(--color-tertiary);
  color: var(--color-primary);
  font-weight: 700; font-size: 0.9rem;
  display: flex; align-items: center; justify-content: center;
}

.step-content h3 { font-size: 1rem; color: var(--color-text-one); margin-bottom: 0.25rem; }
.step-content p { font-size: 0.9rem; }

.code-block {
  margin-top: 0.75rem;
  padding: 10px 16px;
  border-radius: 8px;
  background-color: var(--color-surface-seven);
  border: 1px solid var(--color-border);
  overflow-x: auto;
}

.code-block code {
  font-family: var(--font-family-mono);
  font-size: 0.85rem;
  color: var(--color-primary);
}

.feature-list {
  display: flex;
  flex-direction: column;
  gap: 0;
}

.feature-row {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 1.25rem 0;
  border-bottom: 1px solid var(--color-border);
}

.feature-row:last-child { border-bottom: none; }

.feature-row-icon {
  width: 40px; height: 40px; min-width: 40px;
  border-radius: 12px;
  background-color: var(--color-tertiary);
  display: flex; align-items: center; justify-content: center;
}

.feature-row-icon .material-symbols-outlined { font-size: 20px; color: var(--color-primary); }
.feature-row-text h3 { font-size: 1rem; color: var(--color-text-one); margin-bottom: 0.25rem; }
.feature-row-text p { font-size: 0.9rem; line-height: 1.6; }

/* FAQ */
.faq-list { display: flex; flex-direction: column; gap: 0.75rem; }

.faq-item {
  cursor: pointer;
  padding: 0;
}

.faq-item summary {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.25rem 1.5rem;
  list-style: none;
  user-select: none;
}

.faq-item summary::-webkit-details-marker { display: none; }

.faq-q { font-weight: 600; font-size: 0.95rem; color: var(--color-text-one); }

.faq-chevron {
  transition: transform 0.25s ease-out;
  color: var(--color-text-four);
}

.faq-item[open] .faq-chevron { transform: rotate(180deg); }

.faq-a {
  padding: 0 1.5rem 1.25rem;
  font-size: 0.9rem;
  line-height: 1.7;
}

/* Troubleshoot */
.trouble-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
}

.trouble-card { cursor: default; }

.trouble-header {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
}

.trouble-header h3 { font-size: 0.95rem; color: var(--color-text-one); }
.trouble-card p { font-size: 0.875rem; line-height: 1.6; }

@media (max-width: 1024px) {
  .wiki-layout { grid-template-columns: 1fr; }
  .wiki-sidebar { display: none; }
}

@media (max-width: 768px) {
  .page-hero { padding: 3rem 0 2rem; }
  .wiki-content { padding: 2rem 0 3rem; }
  .requirements-grid { grid-template-columns: 1fr; }
  .trouble-grid { grid-template-columns: 1fr; }
}

@media (max-width: 450px) {
  .page-hero-content h1 { font-size: 2.2rem; }
}
</style>
