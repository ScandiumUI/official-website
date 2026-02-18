<template>
  <div class="contributors-page">
    <!-- Page Header -->
    <section class="page-hero">
      <div class="wrapper">
        <div class="page-hero-content animate-fade-up">
          <h1>{{ t('contributors.title') }}</h1>
          <p>{{ t('contributors.desc') }}</p>
        </div>
      </div>
    </section>

    <!-- Core Team -->
    <section class="team-section">
      <div class="wrapper">
        <h2 class="section-title animate-fade-up">{{ t('contributors.coreTeam') }}</h2>
        <div class="team-grid">
          <div v-for="(member, i) in coreTeam" :key="member.name" class="member-card md3-card-elevated animate-fade-up" :class="'delay-' + (i + 1) + '00'">
            <img :src="member.avatar" :alt="member.name" class="member-avatar-img" loading="lazy" />
            <h3>{{ member.name }}</h3>
            <span class="member-handle">@{{ member.handle }}</span>
            <div class="member-roles">
              <span v-for="role in member.roles" :key="role" class="info-chip">{{ role }}</span>
            </div>
            <p class="member-bio">{{ member.bio }}</p>
            <div class="member-socials">
              <a v-for="social in member.socials" :key="social.label" :href="social.url" target="_blank" rel="noopener noreferrer" :aria-label="social.label" class="member-social-btn">
                <svg v-if="social.label === 'GitHub'" width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                <svg v-else-if="social.label === 'Telegram'" width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.479.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>
                <svg v-else width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/></svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contributors List -->
    <section class="contrib-section">
      <div class="wrapper">
        <h2 class="section-title animate-fade-up">{{ t('contributors.contributorsTitle') }}</h2>
        <p class="section-subtitle animate-fade-up">{{ t('contributors.contributorsDesc') }}</p>
        <div class="contrib-grid">
          <div v-for="(c, i) in contributors" :key="c.name" class="contrib-item md3-card-outlined animate-fade-up" :class="'delay-' + ((i % 4 + 1)) + '00'">
            <div class="contrib-avatar" :style="{ backgroundColor: c.color }">
              <span>{{ c.initials }}</span>
            </div>
            <div class="contrib-info">
              <h4>{{ c.name }}</h4>
              <span>{{ c.area }}</span>
            </div>
            <div class="contrib-stat">{{ c.contributions }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contribute CTA -->
    <section class="cta-section">
      <div class="wrapper">
        <div class="cta-card animate-fade-up">
          <span class="material-symbols-outlined filled cta-icon">volunteer_activism</span>
          <h2>{{ t('contributors.ctaTitle') }}</h2>
          <p>{{ t('contributors.ctaDesc') }}</p>
          <div class="cta-actions">
            <a href="https://github.com/ScandiumUI" target="_blank" rel="noopener noreferrer" class="md3-btn md3-btn-filled">
              <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              {{ t('contributors.browseGithub') }}
            </a>
            <a href="https://t.me/AkiraDevs" target="_blank" rel="noopener noreferrer" class="md3-btn md3-btn-tonal">
              <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.479.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>
              {{ t('contributors.joinCommunity') }}
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { useI18n } from '../i18n/index.js'

const { t } = useI18n()

const coreTeam = [
  {
    name: 'rayh4ze',
    handle: 'rayh4ze',
    avatar: 'https://avatars.githubusercontent.com/u/109618146?v=4',
    roles: ['Founder', 'Software Engineer', 'UI/UX Designer', 'Lead Developer'],
    bio: 'Full-stack developer and founder of ScandiumOS. Handles system-level development, UI/UX design, and project direction.',
    socials: [
      { label: 'GitHub', url: 'https://github.com/SayuZX' },
      { label: 'Telegram', url: 'https://t.me/Rrrrzzeee' },
    ],
  },
  {
    name: 'PGYT PROJECT',
    handle: 'pgytproject',
    avatar: 'https://avatars.githubusercontent.com/u/155278452?v=4',
    roles: ['Android Developer', 'Lead Developer'],
    bio: 'Android and kernel developer. Focuses on device trees, custom recovery, and system-level builds for ScandiumOS.',
    socials: [
      { label: 'GitHub', url: 'https://github.com/KernelBuilding' },
      { label: 'Telegram', url: 'https://t.me/pgytproject' },
    ],
  },
]

const contributors = [
  { name: 'Ray', initials: 'R', area: 'Performance', contributions: '42 commits', color: 'hsl(30, 60%, 25%)' },
  { name: 'Luna', initials: 'L', area: 'Translations', contributions: '28 commits', color: 'hsl(190, 60%, 25%)' },
  { name: 'Kai', initials: 'K', area: 'Documentation', contributions: '35 commits', color: 'hsl(260, 60%, 25%)' },
  { name: 'Ember', initials: 'E', area: 'Kernel', contributions: '19 commits', color: 'hsl(10, 60%, 25%)' },
  { name: 'Sky', initials: 'S', area: 'Theming', contributions: '24 commits', color: 'hsl(200, 60%, 25%)' },
  { name: 'Mika', initials: 'M', area: 'Testing', contributions: '17 commits', color: 'hsl(120, 50%, 25%)' },
  { name: 'Dev', initials: 'D', area: 'Security', contributions: '15 commits', color: 'hsl(50, 60%, 25%)' },
  { name: 'Neo', initials: 'N', area: 'Build System', contributions: '22 commits', color: 'hsl(300, 50%, 25%)' },
]
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

/* === CORE TEAM === */
.team-section { padding: 3rem 0; text-align: center; }

.section-title {
  font-size: 1.75rem;
  color: var(--color-text-one);
  margin-bottom: 0.5rem;
  text-align: center;
}

.section-subtitle {
  margin: 0 auto 2rem;
  max-width: 550px;
  text-align: center;
}

.team-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 1.25rem;
}

.member-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 2.5rem 1.5rem 2rem;
}

.member-avatar-img {
  width: 80px; height: 80px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 1.25rem;
  flex-shrink: 0;
  border: 3px solid var(--color-tertiary);
}

.member-card h3 {
  font-size: 1.15rem;
  color: var(--color-text-one);
  margin-bottom: 0.15rem;
}

.member-handle {
  font-size: 0.8rem;
  color: var(--color-text-four);
  margin-bottom: 0.75rem;
}

.member-roles {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.375rem;
  margin-bottom: 0.75rem;
}

.member-bio {
  font-size: 0.85rem;
  line-height: 1.6;
  margin-bottom: 1.25rem;
}

.member-socials {
  display: flex;
  gap: 0.5rem;
}

.member-social-btn {
  width: 38px; height: 38px;
  border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
  color: var(--color-text-four);
  background-color: var(--color-surface-eight);
  transition: background-color 0.2s, color 0.2s;
}

.member-social-btn:hover {
  background-color: var(--color-tertiary);
  color: var(--color-primary);
}

/* === CONTRIBUTORS LIST === */
.contrib-section { padding: 3rem 0; }

.contrib-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 0.75rem;
}

.contrib-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem 1.25rem;
}

.contrib-avatar {
  width: 40px; height: 40px;
  border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
  flex-shrink: 0;
}

.contrib-avatar span {
  font-size: 0.9rem;
  font-weight: 700;
  color: var(--color-primary);
}

.contrib-info { flex: 1; }
.contrib-info h4 { font-size: 0.95rem; color: var(--color-text-one); margin-bottom: 0.1rem; }
.contrib-info span { font-size: 0.8rem; color: var(--color-text-four); }

.contrib-stat {
  font-size: 0.75rem;
  font-weight: 600;
  color: var(--color-primary);
  white-space: nowrap;
  padding: 4px 12px;
  border-radius: 20px;
  background-color: var(--color-tertiary);
}

/* === CTA === */
.cta-section { padding: 2rem 0 5rem; }

.cta-card {
  text-align: center;
  padding: 3.5rem 2rem;
  border-radius: 24px;
  background-color: var(--color-surface-nine);
}

.cta-icon { font-size: 48px; color: var(--color-primary); margin-bottom: 1.5rem; }
.cta-card h2 { font-size: 1.75rem; color: var(--color-text-one); margin-bottom: 0.75rem; }
.cta-card p { max-width: 500px; margin: 0 auto 2rem; line-height: 1.7; }

.cta-actions {
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
}

@media (max-width: 450px) {
  .cta-actions .md3-btn {
    width: 100%;
    justify-content: center;
  }
}

/* === RESPONSIVE === */
@media (max-width: 768px) {
  .page-hero { padding: 3rem 0 2rem; }
  .team-grid { grid-template-columns: 1fr; }
  .contrib-grid { grid-template-columns: 1fr; }
  .cta-card { padding: 2.5rem 1.5rem; }
  .cta-actions { 
    display: grid !important;
    grid-template-columns: 1fr 1fr;
    gap: 0.5rem;
    width: 100%;
  }
  .cta-actions .md3-btn {
    padding: 0.75rem 0.5rem;
    font-size: 0.8rem;
    white-space: nowrap;
    justify-content: center;
  }
  .cta-actions .md3-btn svg { display: none; }
}

@media (max-width: 450px) {
  .page-hero-content h1 { font-size: 2.2rem; }
}
</style>
