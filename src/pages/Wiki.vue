<template>
  <div class="wiki-page">
    <section class="page-hero">
      <div class="wrapper">
        <div class="page-hero-content animate-fade-up">
          <h1>
            {{ displayedTitle }}<span class="typing-cursor">|</span>
          </h1>
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
            <article id="getting-started" class="wiki-section animate-fade-up centered-header">
              <h2>{{ t('wiki.gettingStarted') }}</h2>
              <p>{{ t('wiki.gettingStartedDesc') }}</p>

              <div class="requirements-list">
                <div v-for="req in requirements" :key="req.icon" class="req-item md3-card-outlined">
                  <div class="req-icon-box">
                    <span class="material-symbols-outlined filled">{{ req.icon }}</span>
                  </div>
                  <div class="req-content">
                    <h3>{{ req.title }}</h3>
                    <p>{{ req.desc }}</p>
                  </div>
                </div>
              </div>
            </article>
            <article id="installation" class="wiki-section animate-fade-up centered-header">
              <h2>{{ t('wiki.installTitle') }}</h2>
              <p>{{ t('wiki.installDesc') }}</p>

              <div class="steps-grid-expand">
                <details v-for="(step, i) in steps" :key="i" class="step-expand-item">
                  <summary>
                    <div class="step-item-flex">
                      <div class="step-number-box">
                        <span class="step-num">{{ i + 1 }}</span>
                      </div>
                      <div class="step-text-side">
                        <h3>{{ step.title }}</h3>
                        <p>{{ step.desc }}</p>
                        <div v-if="step.command" class="code-block">
                          <code>{{ step.command }}</code>
                        </div>
                      </div>
                    </div>
                  </summary>
                </details>
              </div>
            </article>
            <article id="features" class="wiki-section animate-fade-up centered-header">
              <h2>{{ t('wiki.featuresTitle') }}</h2>
              <p>{{ t('wiki.featuresDesc') }}</p>

              <div class="feature-grid-expand">
                <details v-for="feat in wikiFeatures" :key="feat.icon" class="feature-expand-item">
                  <summary>
                    <div class="feature-item-flex md3-card-outlined">
                      <div class="feature-icon-column">
                        <div class="feature-icon-only">
                          <span class="material-symbols-outlined filled">{{ feat.icon }}</span>
                        </div>
                        <span class="feature-mini-title">{{ feat.title }}</span>
                      </div>
                      <div class="feature-text-side">
                        <h3>{{ feat.title }}</h3>
                        <p>{{ feat.desc }}</p>
                      </div>
                    </div>
                  </summary>
                </details>
              </div>
            </article>
            <article id="faq" class="wiki-section animate-fade-up centered-header">
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
            <article id="troubleshooting" class="wiki-section animate-fade-up centered-header">
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

const displayedTitle = ref('')
const fullTitle = computed(() => t('wiki.title'))
let typingInterval = null

const startTyping = () => {
  let i = 0
  displayedTitle.value = ''
  clearInterval(typingInterval)
  typingInterval = setInterval(() => {
    if (i < fullTitle.value.length) {
      displayedTitle.value += fullTitle.value.charAt(i)
      i++
    } else {
      clearInterval(typingInterval)
    }
  }, 100)
}

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

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
  startTyping()
})
onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  clearInterval(typingInterval)
})
</script>

<style scoped>
.page-hero {
  padding: 6rem 0 4rem;
  border-bottom: 1px solid var(--color-border);
  background: radial-gradient(circle at 50% -20%, var(--color-tertiary) 0%, transparent 70%);
}

.page-hero-content {
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
}

.page-hero-content h1 {
  font-size: 3.5rem;
  font-weight: 800;
  margin-bottom: 1rem;
  letter-spacing: -0.02em;
}

.typing-cursor {
  color: var(--color-primary);
  animation: blink 0.8s infinite;
  margin-left: 2px;
}

@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}

.page-hero-content p {
  font-size: 1.1rem;
  color: var(--color-text-four);
  max-width: 500px;
  margin: 0 auto;
}

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
.wiki-section.centered-header h2 { text-align: center; margin-bottom: 0.25rem; }
#faq.centered-header h2, #troubleshooting.centered-header h2 { margin-bottom: 1rem; }
.wiki-section.centered-header > p { text-align: center; margin-bottom: 1.5rem; }
#faq.centered-header > p, #troubleshooting.centered-header > p { margin-bottom: 2.5rem; }
.wiki-section > p { margin-bottom: 2rem; }
.requirements-list {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.req-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  background-color: var(--color-surface-one);
  border-radius: 20px;
  transition: all 0.3s ease;
}

.req-item:hover {
  background-color: var(--color-surface-two);
  border-color: var(--color-primary);
}

.req-icon-box {
  width: 44px; height: 44px;
  min-width: 44px;
  border-radius: 12px;
  background-color: var(--color-tertiary);
  display: flex; align-items: center; justify-content: center;
  flex-shrink: 0;
}

.req-icon-box .material-symbols-outlined {
  font-size: 22px;
  color: var(--color-primary);
}

.req-content h3 {
  font-size: 0.95rem;
  font-weight: 600;
  color: var(--color-text-one);
  margin-bottom: 0.15rem !important;
  text-align: left;
}

.req-content p {
  font-size: 0.85rem;
  color: var(--color-text-four);
  line-height: 1.4;
  margin: 0;
  text-align: left;
}

@media (max-width: 600px) {
  .req-item {
    padding: 0.875rem;
  }
}

.steps-grid-expand {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  max-width: 600px;
  margin: 0 auto;
}

.step-expand-item {
  display: block;
  width: 100%;
}

.step-expand-item summary {
  list-style: none;
  cursor: pointer;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
}

.step-expand-item summary::-webkit-details-marker { display: none; }

.step-item-flex {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 1.25rem 0.75rem;
  background-color: var(--color-surface-one);
  border-radius: 20px;
  border: 1px solid var(--color-border);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  min-height: 80px;
}

.step-expand-item:hover .step-item-flex {
  background-color: var(--color-surface-two);
  border-color: var(--color-primary);
}

.step-expand-item[open] {
  grid-column: 1 / -1;
  width: 100%;
}

.step-expand-item[open] .step-item-flex {
  justify-content: flex-start;
  background-color: var(--color-surface-one);
  border-color: var(--color-primary);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
  padding: 1.5rem;
  margin: 0.25rem 0;
  display: flex;
  animation: cardExpand 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.step-number-box {
  width: 48px; height: 48px;
  min-width: 48px;
  border-radius: 50%;
  background-color: var(--color-tertiary);
  display: flex; 
  align-items: center; 
  justify-content: center;
  transition: all 0.3s ease;
  flex-shrink: 0;
}

.step-num {
  font-size: 1.25rem;
  font-weight: 800;
  color: var(--color-primary);
}

.step-expand-item[open] .step-number-box {
  background-color: var(--color-primary);
}

.step-expand-item[open] .step-num {
  color: white;
}

.step-text-side {
  display: none;
  overflow: hidden;
  opacity: 0;
  text-align: left;
  flex-direction: column;
  justify-content: center;
}

.step-expand-item[open] .step-text-side {
  display: flex;
  max-width: 1000px;
  opacity: 1;
  padding-left: 1.5rem;
}

.step-text-side h3 { 
  font-size: 1.1rem; 
  font-weight: 700;
  color: var(--color-text-one); 
  margin: 0 0 4px 0;
  line-height: 1.2;
}

.step-text-side p { 
  font-size: 0.9rem; 
  line-height: 1.5; 
  color: var(--color-text-four); 
  margin: 0;
}

@media (max-width: 600px) {
  .steps-grid-expand {
    grid-template-columns: repeat(2, 1fr);
  }
}

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

.feature-grid-expand {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.75rem;
  max-width: 500px;
  margin: 0 auto;
}

.feature-expand-item {
  display: block;
  width: 100%;
}

.feature-expand-item[open] {
  grid-column: 1 / -1;
}

.feature-expand-item summary {
  list-style: none;
  cursor: pointer;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
}

.feature-expand-item summary::-webkit-details-marker { display: none; }

.feature-item-flex {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 1.25rem 0.75rem;
  background-color: var(--color-surface-one);
  border-radius: 20px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  min-height: 120px;
}

.feature-expand-item:hover .feature-item-flex {
  background-color: var(--color-surface-two);
}

.feature-expand-item[open] {
  grid-column: 1 / -1;
  width: 100%;
}

.feature-expand-item[open] .feature-item-flex {
  justify-content: flex-start;
  align-items: center;
  align-content: center;
  background-color: var(--color-surface-one);
  border-color: var(--color-primary);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
  transform: none;
  padding: 1.25rem;
  margin: 0.25rem 0;
  display: flex;
  min-height: 80px;
  animation: cardExpand 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
}

@keyframes cardExpand {
  from { 
    opacity: 0; 
    transform: translateY(-20px) scale(0.98);
  }
  to { 
    opacity: 1; 
    transform: translateY(0) scale(1);
  }
}

.feature-icon-column {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
  transition: all 0.3s ease;
}

.feature-expand-item[open] .feature-icon-column {
  gap: 0;
}

.feature-expand-item[open] .feature-mini-title {
  display: none;
}

.feature-mini-title {
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--color-text-one);
  text-align: center;
  max-width: 100px;
  line-height: 1.3;
}

.feature-icon-only {
  width: 52px; height: 52px;
  min-width: 52px;
  border-radius: 14px;
  background-color: var(--color-surface-three);
  display: flex; 
  align-items: center; 
  justify-content: center;
  transition: all 0.3s ease;
  flex-shrink: 0;
}

.feature-expand-item:hover .feature-icon-only {
  background-color: var(--color-tertiary);
}

.feature-expand-item[open] .feature-icon-only {
  width: 56px; height: 56px;
  min-width: 56px;
  background-color: var(--color-primary);
  border-radius: 16px;
  transform: scale(1);
  display: flex;
  align-items: center;
  justify-content: center;
}

.feature-icon-only .material-symbols-outlined { 
  font-size: 24px; 
  color: var(--color-primary); 
  transition: all 0.3s ease;
}

.feature-expand-item[open] .feature-icon-only .material-symbols-outlined {
  font-size: 28px;
  color: white;
  transform: scale(1);
}

.feature-text-side {
  display: none;
  overflow: hidden;
  opacity: 0;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  text-align: left;
  flex-direction: column;
  justify-content: center;
}

.feature-expand-item[open] .feature-text-side {
  display: flex;
  max-width: 1000px;
  opacity: 1;
  padding-left: 1.25rem;
}

.feature-text-side h3 { 
  font-size: 1rem; 
  font-weight: 600;
  color: var(--color-text-one); 
  margin: 0 0 2px 0; 
  white-space: nowrap; 
}

.feature-text-side p { 
  font-size: 0.875rem; 
  line-height: 1.4; 
  color: var(--color-text-four); 
  margin: 0;
}

@media (max-width: 600px) {
  .feature-grid-expand {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .feature-text-side h3 {
    white-space: normal;
  }
}

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
  .trouble-grid { grid-template-columns: 1fr; }
}

@media (max-width: 450px) {
  .page-hero-content h1 { font-size: 2.2rem; }
}
</style>
