<template>
  <hr>
  <footer id="about" class="footer-section">
    <div class="footer-wrapper">
      <div class="footer-top">
        <section class="footer-about">
          <router-link to="/" class="footer-logo">
            <span class="material-symbols-outlined filled" style="font-size: 28px; color: var(--color-primary);">android</span>
          </router-link>
          <p>{{ t('footer.desc') }}</p>
        </section>
        <section class="footer-links">
          <div class="footer-col">
            <span class="footer-col-title">{{ t('footer.pages') }}</span>
            <ul>
              <li><router-link to="/">{{ t('nav.home') }}</router-link></li>
              <li><router-link to="/download">{{ t('nav.download') }}</router-link></li>
              <li><router-link to="/wiki">{{ t('nav.wiki') }}</router-link></li>
              <li><router-link to="/contributors">{{ t('nav.contributors') }}</router-link></li>
              <li><router-link to="/about">{{ t('nav.about') }}</router-link></li>
            </ul>
          </div>
          <div class="footer-col">
            <span class="footer-col-title">{{ t('footer.socials') }}</span>
            <ul>
              <li><a href="https://github.com/ScandiumUI" target="_blank" rel="noopener noreferrer">GitHub</a></li>
              <li><a href="https://t.me/s/ScandiumOS" target="_blank" rel="noopener noreferrer">Telegram</a></li>
            </ul>
          </div>
        </section>
      </div>

      <div class="footer-bottom">
        <div class="footer-brand">
          <span class="brand-highlight">Scandium</span>OS
        </div>
        <span class="footer-copy">&copy; {{ currentYear }} ScandiumOS Team</span>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { useI18n } from '../i18n/index.js'

const { t } = useI18n()
const currentYear = new Date().getFullYear()
</script>

<style scoped>
.footer-section {
  max-width: min(87%, 100rem);
  padding: 5rem 0rem;
  margin: 0 auto;
}

.footer-wrapper {
  width: 100%;
}

.footer-top {
  display: flex;
  gap: 8rem;
  justify-content: space-between;
  margin-bottom: 4rem;
}

.footer-about {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  align-items: flex-start;
  max-width: 400px;
}

.footer-logo {
  text-decoration: none;
  display: flex;
  align-items: center;
}

.footer-about p {
  font-size: 0.95rem;
  line-height: 1.75;
}

.footer-links {
  display: flex;
  gap: 10rem;
  margin-top: 1rem;
}

.footer-col-title {
  display: flex;
  margin-bottom: 1.5rem;
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--color-text-four);
}

.footer-col ul {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  list-style: none;
}

.footer-col li {
  list-style: none;
  font-size: 0.9rem;
  font-weight: 500;
}

.footer-col li a {
  color: var(--color-primary);
  font-weight: 600;
  font-size: 0.95rem;
  text-decoration: none;
  transition: color 0.2s ease-out;
}

.footer-col li a:hover {
  text-decoration: underline var(--color-secondary);
  color: var(--color-text-one);
}

.footer-bottom {
  display: flex;
  gap: 2rem;
  align-items: center;
  padding-top: 2rem;
  border-top: 1px solid var(--color-border);
}

.footer-brand {
  font-size: 1.4rem;
  color: var(--color-text-one);
  font-weight: 600;
}

.brand-highlight {
  color: var(--color-primary);
}

.footer-copy {
  color: var(--color-text-four);
  font-size: 0.85rem;
  font-weight: 500;
}

@media (max-width: 1050px) {
  .footer-top {
    flex-direction: column;
    gap: 2rem;
  }

  .footer-links {
    display: grid;
    gap: 2rem;
    grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
  }
}

@media (max-width: 768px) {
  .footer-section {
    padding: 3rem 0;
    max-width: min(92%, 100rem);
  }

  .footer-links {
    display: flex;
    flex-direction: column;
    gap: 0;
  }

  .footer-col:not(:last-child) {
    border-bottom: 1px solid var(--color-border);
    padding-bottom: 1.5rem;
    margin-bottom: 1.5rem;
  }

  .footer-bottom {
    flex-wrap: wrap;
    gap: 1rem;
  }
}
</style>
