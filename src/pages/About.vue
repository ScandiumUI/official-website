<template>
  <div class="about-page">
    <!-- Page Header -->
    <section class="page-hero">
      <div class="wrapper">
        <div class="page-hero-content animate-fade-up">
          <h1>{{ t('about.title') }}</h1>
          <p>{{ t('about.desc') }}</p>
        </div>
      </div>
    </section>

    <!-- Values (Mission/Vision) -->
    <section class="values-section">
      <div class="wrapper">
        <div class="values-grid">
          <div class="value-card md3-card-elevated animate-fade-up delay-100">
            <span class="material-symbols-outlined filled value-icon">flag</span>
            <h3>{{ t('about.missionTitle') }}</h3>
            <p>{{ t('about.missionDesc') }}</p>
          </div>
          <div class="value-card md3-card-elevated animate-fade-up delay-200">
            <span class="material-symbols-outlined filled value-icon">visibility</span>
            <h3>{{ t('about.visionTitle') }}</h3>
            <p>{{ t('about.visionDesc') }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Story -->
    <section class="story-section">
      <div class="wrapper">
        <div class="story-layout animate-fade-up">
          <div class="story-text">
            <h2>{{ t('about.storyTitle') }}</h2>
            <p>{{ t('about.storyP1') }}</p>
            <p>{{ t('about.storyP2') }}</p>
          </div>
          <div class="story-visual">
            <div class="story-icon-grid">
              <div class="story-icon-item md3-card animate-fade-up delay-100">
                <span class="material-symbols-outlined filled" style="font-size: 32px; color: var(--color-primary);">palette</span>
                <span>{{ t('about.storyMaterialYou') }}</span>
              </div>
              <div class="story-icon-item md3-card animate-fade-up delay-200">
                <span class="material-symbols-outlined filled" style="font-size: 32px; color: var(--color-primary);">speed</span>
                <span>{{ t('about.storyPerformance') }}</span>
              </div>
              <div class="story-icon-item md3-card animate-fade-up delay-300">
                <span class="material-symbols-outlined filled" style="font-size: 32px; color: var(--color-primary);">lock</span>
                <span>{{ t('about.storyPrivacy') }}</span>
              </div>
              <div class="story-icon-item md3-card animate-fade-up delay-400">
                <span class="material-symbols-outlined filled" style="font-size: 32px; color: var(--color-primary);">code</span>
                <span>{{ t('about.storyOpenSource') }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="stack-section">
      <div class="wrapper">
        <h2 class="section-title animate-fade-up">{{ t('about.builtWith') }}</h2>
        <div class="stack-grid">
          <div v-for="(tech, i) in techStack" :key="tech.icon" class="stack-item md3-card-outlined animate-fade-up" :class="'delay-' + ((i % 4 + 1)) + '00'">
            <span class="material-symbols-outlined filled stack-icon">{{ tech.icon }}</span>
            <div class="stack-info">
              <h4>{{ tech.name }}</h4>
              <span>{{ tech.desc }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="timeline-section">
      <div class="wrapper">
        <h2 class="section-title animate-fade-up">{{ t('about.timelineTitle') }}</h2>
        <div class="timeline">
          <div v-for="(event, i) in timeline" :key="i" class="timeline-item animate-fade-up" :class="'delay-' + ((i % 3 + 1)) + '00'">
            <div class="timeline-marker">
              <div class="tm-dot"></div>
              <div v-if="i < timeline.length - 1" class="tm-line"></div>
            </div>
            <div class="timeline-content md3-card-outlined">
              <span class="timeline-date">{{ event.date }}</span>
              <h4>{{ event.title }}</h4>
              <p>{{ event.desc }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="stats-section">
      <div class="wrapper">
        <div class="stats-cards">
          <div v-for="stat in stats" :key="stat.value" class="stat-card md3-card-outlined animate-fade-up">
            <div class="stat-card-header">
              <span class="material-symbols-outlined filled stat-card-icon">{{ stat.icon }}</span>
              <span class="stat-card-value gradient-text">{{ stat.value }}</span>
            </div>
            <span class="stat-card-label">{{ stat.label }}</span>
          </div>
        </div>
      </div>
    </section>

    <section class="contact-section">
      <div class="wrapper">
        <div class="contact-card animate-fade-up">
          <h2>{{ t('about.contactTitle') }}</h2>
          <p>{{ t('about.contactDesc') }}</p>
          <div class="contact-links">
            <a href="https://github.com/ScandiumUI" target="_blank" rel="noopener noreferrer" class="contact-link md3-card-outlined">
              <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              <div>
                <h4>{{ t('about.contactGithub') }}</h4>
                <span>{{ t('about.contactGithubDesc') }}</span>
              </div>
            </a>
            <a href="https://t.me/AkiraDevs" target="_blank" rel="noopener noreferrer" class="contact-link md3-card-outlined">
              <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.479.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>
              <div>
                <h4>{{ t('about.contactTelegram') }}</h4>
                <span>{{ t('about.contactTelegramDesc') }}</span>
              </div>
            </a>
            <a href="mailto:support@scandiumui.tech" class="contact-link md3-card-outlined">
              <span class="material-symbols-outlined" style="font-size: 24px;">mail</span>
              <div>
                <h4>{{ t('about.contactEmail') }}</h4>
                <span>support@scandiumui.tech</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from '../i18n/index.js'

const { t } = useI18n()

const founders = [
  {
    name: 'rayh4ze',
    handle: 'rayh4ze',
    avatar: 'https://avatars.githubusercontent.com/u/109618146?v=4',
    roles: ['Founder', 'Software Engineer', 'UI/UX Designer', 'Lead Developer'],
    bio: 'Full-stack developer and founder of ScandiumOS. Handles system-level development, UI/UX design, and overall project direction.',
    github: 'https://github.com/SayuZX',
    telegram: 'https://t.me/Rrrrzzeee',
  },
  {
    name: 'PGYT PROJECT',
    handle: 'pgytproject',
    avatar: 'https://avatars.githubusercontent.com/u/155278452?v=4',
    roles: ['Android Developer', 'Lead Developer'],
    bio: 'Android and kernel developer. Focuses on device trees, custom recovery, and system-level builds for ScandiumOS.',
    github: 'https://github.com/KernelBuilding',
    telegram: 'https://t.me/pgytproject',
  },
]

const techStack = computed(() => [
  { icon: 'android', name: t('about.techAOSP'), desc: t('about.techAOSPDesc') },
  { icon: 'palette', name: t('about.techMD3'), desc: t('about.techMD3Desc') },
  { icon: 'memory', name: t('about.techKernel'), desc: t('about.techKernelDesc') },
  { icon: 'security', name: t('about.techSELinux'), desc: t('about.techSELinuxDesc') },
  { icon: 'build', name: t('about.techSoong'), desc: t('about.techSoongDesc') },
  { icon: 'code', name: t('about.techLangs'), desc: t('about.techLangsDesc') },
])

const timeline = computed(() => [
  { date: t('about.timeline4Date'), title: t('about.timeline4Title'), desc: t('about.timeline4Desc') },
])

const stats = computed(() => [
  { value: '2', label: t('about.statMembers'), icon: 'groups' },
  { value: '10+', label: t('about.statContributors'), icon: 'person_add' },
  { value: '200+', label: t('about.statCommits'), icon: 'history' },
  { value: '1', label: t('about.statReleases'), icon: 'verified' },
])
</script>

<style scoped>
/* === PAGE HERO === */
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

/* === STORY === */
.story-section { padding: 3rem 0; text-align: center; }

.story-layout {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.5rem;
  max-width: 800px;
  margin: 0 auto;
}

.story-text h2 {
  font-size: 1.75rem;
  color: var(--color-text-one);
  margin-bottom: 1.25rem;
}

.story-text p {
  line-height: 1.8;
  margin-bottom: 1rem;
  text-align: center;
}

.story-visual { padding: 2rem; width: 100%; }

.story-icon-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
}

.story-icon-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
  padding: 1.5rem 1rem;
  border-radius: 20px;
  background-color: var(--color-surface-one);
  border: 1px solid var(--color-border);
  transition: all 0.3s ease;
}

.story-icon-item:hover {
  background-color: var(--color-surface-two);
  border-color: var(--color-primary);
  transform: translateY(-4px);
}

.story-icon-item span:last-child {
  font-size: 0.85rem;
  color: var(--color-text-one);
  font-weight: 600;
}

/* === VALUES === */
.values-section { padding: 3rem 0; }

.values-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  max-width: 900px;
  margin: 0 auto;
}

.value-card {
  padding: 3rem 2rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--color-surface-one);
  border: 1px solid var(--color-border);
  border-radius: 28px;
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}

.value-card:hover {
  background-color: var(--color-surface-two);
  border-color: var(--color-primary);
  transform: translateY(-8px);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.08);
}

.value-icon {
  font-size: 44px;
  color: var(--color-primary);
  margin-bottom: 1.5rem;
}

.value-card h3 {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--color-text-one);
  margin-bottom: 1rem;
}

.value-card p { 
  font-size: 1rem;
  line-height: 1.7; 
  text-align: center; 
  color: var(--color-text-four);
  max-width: 400px;
}

/* === TECH STACK === */
.stack-section { padding: 3rem 0; text-align: center; }

.section-title {
  font-size: 1.75rem;
  color: var(--color-text-one);
  margin-bottom: 2rem;
  text-align: center;
}

.stack-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 0.75rem;
}

.stack-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 1.5rem 1rem;
  text-align: center;
}

.stack-icon { font-size: 32px; color: var(--color-primary); flex-shrink: 0; }
.stack-info h4 { font-size: 0.95rem; color: var(--color-text-one); margin-bottom: 0.25rem; }
.stack-info span { font-size: 0.75rem; color: var(--color-text-four); line-height: 1.4; display: block; }

/* === TIMELINE === */
.timeline-section { padding: 3rem 0; text-align: center; }

.timeline {
  display: flex;
  flex-direction: column;
  max-width: 800px;
  margin: 0 auto;
}

.timeline-item {
  display: flex;
  gap: 1.5rem;
  text-align: left;
}

.timeline-marker {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-shrink: 0;
  width: 20px;
}

.tm-dot {
  width: 12px; height: 12px;
  border-radius: 50%;
  background-color: var(--color-primary);
  flex-shrink: 0;
  margin-top: 1.25rem;
}

.tm-line {
  width: 2px;
  flex: 1;
  background-color: var(--color-border);
}

.timeline-content {
  flex: 1;
  margin-bottom: 1.5rem;
  position: relative;
  padding: 1.5rem;
}

.timeline-date {
  font-size: 0.7rem;
  color: var(--color-primary);
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  position: absolute;
  top: 1rem;
  right: 1.25rem;
}

.timeline-content h4 {
  font-size: 1.05rem;
  color: var(--color-text-one);
  margin: 0 0 0.5rem;
  text-align: left;
}

.timeline-content p {
  font-size: 0.9rem;
  line-height: 1.6;
  text-align: left;
}

/* === STATS === */
.stats-section { padding: 4rem 0; }

.stats-cards {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.25rem;
}

.stat-card {
  padding: 1.5rem;
  background-color: var(--color-surface-one);
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  text-align: center;
}

.stat-card:hover {
  background-color: var(--color-surface-two);
  transform: translateY(-4px);
  border-color: var(--color-primary);
}

.stat-card-header {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  width: 100%;
}

.stat-card-icon {
  font-size: 24px;
  color: var(--color-primary);
  opacity: 0.8;
}

.stat-card-value {
  font-size: 1.75rem;
  font-weight: 800;
}

.stat-card-label {
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--color-text-four);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

/* === FOUNDERS === */
.founders-section { padding: 3rem 0; }

.founders-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 1.5rem;
}

.founder-card {
  display: flex;
  gap: 1.5rem;
  padding: 2rem;
  align-items: flex-start;
}

.founder-avatar {
  width: 72px; height: 72px;
  border-radius: 50%;
  object-fit: cover;
  flex-shrink: 0;
  border: 3px solid var(--color-tertiary);
}

.founder-info h3 { font-size: 1.1rem; color: var(--color-text-one); margin-bottom: 0.1rem; }

.founder-handle {
  font-size: 0.8rem;
  color: var(--color-text-four);
  display: block;
  margin-bottom: 0.5rem;
}

.founder-roles {
  display: flex;
  flex-wrap: wrap;
  gap: 0.375rem;
  margin-bottom: 0.75rem;
}

.founder-info p {
  font-size: 0.85rem;
  line-height: 1.6;
  margin-bottom: 0.75rem;
}

.founder-socials {
  display: flex;
  gap: 0.75rem;
}

.founder-social-link {
  display: flex;
  align-items: center;
  gap: 0.375rem;
  font-size: 0.8rem;
  font-weight: 500;
  color: var(--color-primary);
  text-decoration: none;
  transition: opacity 0.2s;
}

.founder-social-link:hover { opacity: 0.7; }

/* === CONTACT === */
.contact-section { padding: 2rem 0 5rem; }

.contact-card { text-align: center; }
.contact-card h2 { font-size: 1.75rem; color: var(--color-text-one); margin-bottom: 0.75rem; }
.contact-card > p { max-width: 500px; margin: 0 auto 2rem; }

.contact-links {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  max-width: 700px;
  margin: 0 auto;
}

.contact-link {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1.25rem;
  text-decoration: none;
  color: var(--color-text-four);
  transition: background-color 0.2s, border-color 0.2s;
}

.contact-link:hover {
  background-color: var(--color-surface-eight);
  border-color: var(--color-primary);
}

.contact-link svg,
.contact-link .material-symbols-outlined { color: var(--color-primary); flex-shrink: 0; }
.contact-link h4 { font-size: 0.95rem; color: var(--color-text-one); text-align: left; }
.contact-link span { font-size: 0.75rem; text-align: left; display: block; }

/* === RESPONSIVE === */
@media (max-width: 768px) {
  .page-hero { padding: 3rem 0 2rem; }
  .story-layout { grid-template-columns: 1fr; }
  .story-icon-grid { grid-template-columns: repeat(2, 1fr); gap: 1rem; }
  .values-grid { grid-template-columns: 1fr; }
  .stack-grid { grid-template-columns: repeat(2, 1fr); gap: 0.5rem; }
  .stats-cards { grid-template-columns: repeat(2, 1fr); gap: 1rem; }
  .contact-links { grid-template-columns: 1fr; }
  .timeline-marker { display: none; }
  .timeline-item { gap: 0; }
  .founders-grid { grid-template-columns: 1fr; }
  .founder-card { flex-direction: column; align-items: center; text-align: center; }
  .founder-roles { justify-content: center; }
  .founder-socials { display: none; }
}

@media (max-width: 450px) {
  .page-hero-content h1 { font-size: 2.2rem; }
  .stat-number { font-size: 2rem; }
}
</style>
