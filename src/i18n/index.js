import { reactive, computed } from 'vue'
import en from './en.js'
import id from './id.js'

const messages = { EN: en, ID: id }

const state = reactive({
  locale: 'EN',
})

function getNestedValue(obj, path) {
  return path.split('.').reduce((o, k) => (o && o[k] !== undefined ? o[k] : path), obj)
}

export function setLocale(code) {
  state.locale = code
}

export function useI18n() {
  const locale = computed(() => state.locale)

  const t = (key) => {
    const msg = messages[state.locale]
    if (!msg) return key
    return getNestedValue(msg, key)
  }

  return { t, locale, setLocale }
}
