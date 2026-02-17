<template>
  <nav class="navbar" :class="{ scrolled: isScrolled }">
    <button
      class="menu-btn mobile-only"
      :class="{ open: menuOpen }"
      @click="menuOpen = !menuOpen"
      aria-label="Menu"
    >
      <span class="menu-btn__burger"></span>
    </button>

    <router-link to="/" class="logo-link">
      <span class="material-symbols-outlined filled logo-icon">android</span>
      <span class="logo-text"><span class="logo-highlight">Scandium</span>OS</span>
    </router-link>
    <div class="mobile-actions mobile-only">
      <button class="theme-toggle-btn" @click="toggleTheme" :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'">
        <span class="theme-icon-wrap" :class="{ 'is-light': !isDark }">
          <span class="material-symbols-outlined filled theme-icon">{{ isDark ? 'dark_mode' : 'light_mode' }}</span>
        </span>
      </button>
      <button class="mobile-lang-toggle" @click="toggleLang" aria-label="Switch language">
        <span class="material-symbols-outlined" style="font-size: 18px;">language</span>
        <span class="mobile-lang-code">{{ currentLang }}</span>
      </button>
    </div>

    <div class="nav-container desktop-only">
      <div class="nav-wrapper">
        <div class="main-nav">
          <ul class="nav-buttons">
            <li v-for="link in navLinks" :key="link.name"
                class="nav-btn"
                :class="{ active: route.path === link.to }">
              <router-link :to="link.to">
                <span>{{ link.name }}</span>
              </router-link>
            </li>
          </ul>
        </div>
        <div class="secondary-nav">
          <button class="theme-toggle-btn" @click="toggleTheme" :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'">
            <span class="theme-icon-wrap" :class="{ 'is-light': !isDark }">
              <span class="material-symbols-outlined filled theme-icon">{{ isDark ? 'dark_mode' : 'light_mode' }}</span>
            </span>
          </button>
          <div class="lang-switcher" ref="langRef">
            <button @click="langOpen = !langOpen" class="lang-btn" :class="{ selected: langOpen }">
              <span class="material-symbols-outlined" style="font-size: 18px;">language</span>
              <span class="lang-label">{{ currentLang }}</span>
            </button>
            <transition name="dropdown">
              <div v-if="langOpen" class="lang-dropdown">
                <button v-for="lang in languages" :key="lang.code"
                        @click="setLang(lang.code)"
                        class="lang-option"
                        :class="{ active: currentLang === lang.code }">
                  {{ lang.label }}
                </button>
              </div>
            </transition>
          </div>
          <a href="https://github.com/ScandiumUI" target="_blank" rel="noopener noreferrer" class="nav-icon-btn" aria-label="GitHub">
            <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
          </a>
          <a href="https://t.me/s/ScandiumOS" target="_blank" rel="noopener noreferrer" class="nav-icon-btn" aria-label="Telegram">
            <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.479.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>
          </a>
        </div>
      </div>
    </div>
    <transition name="sidebar">
      <div v-if="menuOpen" class="mobile-sidebar mobile-only">
        <div class="sidebar-content">
          <div class="sidebar-nav">
            <ul class="sidebar-buttons">
              <li v-for="link in navLinks" :key="link.name"
                  class="nav-btn"
                  :class="{ active: route.path === link.to }">
                <router-link :to="link.to" @click="menuOpen = false">
                  <span>{{ link.name }}</span>
                </router-link>
              </li>
            </ul>
          </div>
          <div class="sidebar-bottom">
            <div class="sidebar-socials">
              <a href="https://github.com/ScandiumUI" target="_blank" rel="noopener noreferrer" class="social-btn" aria-label="GitHub">
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              </a>
              <a href="https://t.me/s/ScandiumOS" target="_blank" rel="noopener noreferrer" class="social-btn" aria-label="Telegram">
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.479.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </transition>
    <transition name="fade">
      <div v-if="menuOpen" class="overlay mobile-only" @click="menuOpen = false"></div>
    </transition>
  </nav>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'
import { useI18n } from '../i18n/index.js'
import { useTheme } from '../composables/useTheme.js'

const route = useRoute()
const { t, locale, setLocale } = useI18n()
const { isDark, toggleTheme } = useTheme()

const isScrolled = ref(false)
const menuOpen = ref(false)
const langOpen = ref(false)
const langRef = ref(null)

const currentLang = computed(() => locale.value)

const navLinks = computed(() => [
  { name: t('nav.home'), to: '/' },
  { name: t('nav.wiki'), to: '/wiki' },
  { name: t('nav.download'), to: '/download' },
  { name: t('nav.contributors'), to: '/contributors' },
  { name: t('nav.about'), to: '/about' },
])

const languages = [
  { code: 'EN', label: 'English' },
  { code: 'ID', label: 'Bahasa Indonesia' },
]

const setLang = (code) => {
  setLocale(code)
  langOpen.value = false
}

const toggleLang = () => {
  const next = locale.value === 'EN' ? 'ID' : 'EN'
  setLocale(next)
}

const handleScroll = () => {
  isScrolled.value = window.scrollY > 10
}

const handleClickOutside = (e) => {
  if (langRef.value && !langRef.value.contains(e.target)) {
    langOpen.value = false
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
  document.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  document.removeEventListener('click', handleClickOutside)
})
</script>

<style scoped>
.navbar {
  position: sticky;
  top: 0;
  z-index: 50;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  height: 70px;
  padding: 1rem 2rem;
  width: 100%;
  background-color: var(--color-surface-eight);
  transition: box-shadow 0.3s ease-out;
}

.navbar.scrolled {
  box-shadow: var(--shadow-nav);
}

.logo-link {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none;
  padding: 0.5rem;
  flex-shrink: 0;
}

.logo-icon {
  font-size: 22px;
  color: var(--color-primary);
}

.logo-text {
  font-size: 1.15rem;
  font-weight: 700;
  color: var(--color-text-one);
  letter-spacing: -0.01em;
}

.logo-highlight {
  color: var(--color-primary);
}

.nav-container {
  width: 100%;
}

.nav-wrapper {
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
}

.main-nav {
  display: flex;
}

.nav-buttons {
  display: flex;
  gap: 0.25rem;
  list-style: none;
}

.secondary-nav {
  display: flex;
  gap: 0.5rem;
  align-items: center;
}

.nav-icon-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  padding: 10px;
  color: var(--color-surface-six);
  text-decoration: none;
  transition: background-color 0.25s ease-out, color 0.25s ease-out;
}

.nav-icon-btn:hover {
  background-color: var(--color-surface-three);
  color: var(--color-primary);
}

.lang-switcher {
  position: relative;
}

.lang-btn {
  display: flex;
  align-items: center;
  gap: 0.375rem;
  padding: 10px 16px;
  border-radius: 10px;
  border: none;
  background-color: transparent;
  color: var(--color-surface-six);
  cursor: pointer;
  font-size: 0.9rem;
  font-weight: 500;
  transition: background-color 0.25s ease-out, color 0.25s ease-out;
}

.lang-btn:hover {
  background-color: var(--color-surface-three);
}

.lang-btn.selected {
  background-color: var(--color-tertiary);
  color: var(--color-primary);
}

.lang-label {
  font-size: 0.85rem;
}

.lang-dropdown {
  position: absolute;
  top: calc(100% + 8px);
  right: 0;
  background-color: var(--color-surface-nine);
  border: 1px solid var(--color-border);
  border-radius: 12px;
  overflow: hidden;
  box-shadow: var(--shadow-elevation-2);
  min-width: 160px;
  z-index: 60;
}

.lang-option {
  display: block;
  width: 100%;
  text-align: left;
  padding: 12px 16px;
  border: none;
  background: transparent;
  color: var(--color-text-four);
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s ease-out;
}

.lang-option:hover {
  background-color: var(--color-surface-three);
}

.lang-option.active {
  color: var(--color-primary);
  font-weight: 600;
}

.menu-btn {
  user-select: none;
  position: relative;
  display: flex;
  height: 50px;
  z-index: 55;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background: transparent;
  border: none;
  padding: 0;
}

.menu-btn__burger {
  display: flex;
  flex-wrap: wrap;
  width: 24px;
  height: 2px;
  background: var(--color-surface-six);
  transition: all 0.3s ease-out;
  position: relative;
}

.menu-btn__burger::before,
.menu-btn__burger::after {
  content: '';
  position: absolute;
  width: 24px;
  height: 2px;
  background: var(--color-surface-six);
  transition: all 0.3s ease-out;
}

.menu-btn__burger::before {
  transform: translateY(-6.5px);
}

.menu-btn__burger::after {
  transform: translateY(6.5px);
}

.menu-btn.open .menu-btn__burger {
  transform: translateX(-10px);
  background: transparent;
  box-shadow: none;
}

.menu-btn.open .menu-btn__burger::before {
  transform: rotate(45deg) translate(10px, -10px);
}

.menu-btn.open .menu-btn__burger::after {
  transform: rotate(-45deg) translate(10px, 10px);
}

.mobile-sidebar {
  overflow: hidden;
  position: fixed;
  width: 20rem;
  top: 0;
  left: 0;
  height: 100%;
  background-color: var(--color-surface-eight);
  z-index: 52;
}

.sidebar-content {
  display: flex;
  flex-direction: column;
  height: 100%;
  margin: 0 auto;
  width: 20rem;
  border-radius: 0px 24px 24px 0px;
  padding: 1rem;
  padding-top: 6rem;
  justify-content: space-between;
}

.sidebar-nav {
  flex: 1;
}

.sidebar-buttons {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  list-style: none;
  width: 100%;
}

.sidebar-buttons .nav-btn a {
  justify-content: flex-start;
  padding: 0.75rem 1.25rem;
}

.sidebar-buttons .nav-btn span {
  font-size: 1rem;
  font-weight: 500;
}

.sidebar-bottom {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
}

.sidebar-socials {
  display: flex;
  gap: 0.75rem;
}

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 51;
}

.mobile-lang-toggle {
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 6px 12px;
  border-radius: 10px;
  border: 1px solid var(--color-border);
  background: transparent;
  color: var(--color-text-four);
  cursor: pointer;
  transition: background-color 0.2s ease-out, border-color 0.2s ease-out;
}

.mobile-lang-toggle:active {
  background-color: var(--color-tertiary);
  border-color: var(--color-primary);
}

.mobile-lang-code {
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--color-primary);
}

.mobile-actions {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-left: auto;
}

.theme-toggle-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 38px;
  height: 34px;
  border-radius: 10px;
  border: 1px solid var(--color-border);
  background: transparent;
  cursor: pointer;
  padding: 0;
  overflow: hidden;
  transition: background-color 0.3s cubic-bezier(0.4, 0, 0.2, 1),
              border-color 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.theme-toggle-btn:hover {
  background-color: var(--color-surface-three);
  border-color: var(--color-primary);
}

.theme-toggle-btn:active {
  transform: scale(0.92);
}

.theme-icon-wrap {
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.theme-icon-wrap.is-light {
  transform: rotate(360deg);
}

.theme-icon {
  font-size: 16px;
  color: var(--color-primary);
  transition: color 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

@media (min-width: 768px) {
  .mobile-only {
    display: none !important;
  }
}

@media (max-width: 767px) {
  .desktop-only {
    display: none !important;
  }

  .navbar {
    justify-content: normal;
    gap: 0.5rem;
  }
}

.sidebar-enter-active {
  transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}

.sidebar-leave-active {
  transition: transform 0.3s cubic-bezier(0.7, 0, 0.84, 0);
}

.sidebar-enter-from,
.sidebar-leave-to {
  transform: translateX(-100%);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.35s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.dropdown-enter-active {
  transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
}

.dropdown-leave-active {
  transition: all 0.15s ease;
}

.dropdown-enter-from,
.dropdown-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}
</style>
