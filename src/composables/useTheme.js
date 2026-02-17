import { ref, watch } from 'vue'

const isDark = ref(true)
const saved = typeof localStorage !== 'undefined' ? localStorage.getItem('scandium-theme') : null
if (saved !== null) {
  isDark.value = saved === 'dark'
} else if (typeof window !== 'undefined') {
  isDark.value = window.matchMedia('(prefers-color-scheme: dark)').matches
}

function applyTheme() {
  const root = document.documentElement
  if (isDark.value) {
    root.setAttribute('data-theme', 'dark')
    root.classList.add('dark')
    root.classList.remove('light')
  } else {
    root.setAttribute('data-theme', 'light')
    root.classList.add('light')
    root.classList.remove('dark')
  }
}

watch(isDark, (val) => {
  localStorage.setItem('scandium-theme', val ? 'dark' : 'light')
  applyTheme()
}, { immediate: true })

export function useTheme() {
  function toggleTheme() {
    isDark.value = !isDark.value
  }

  function setTheme(dark) {
    isDark.value = dark
  }

  return {
    isDark,
    toggleTheme,
    setTheme,
  }
}
