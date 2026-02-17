import { onMounted, onUnmounted } from 'vue'
export function useScrollReveal() {
  let observer = null

  const handleIntersect = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const el = entry.target
        const delay = el.dataset.revealDelay || '0'
        el.style.transitionDelay = `${delay}ms`
        el.classList.add('revealed')
        observer.unobserve(el)
      }
    })
  }

  onMounted(() => {
    observer = new IntersectionObserver(handleIntersect, {
      threshold: 0.15,
      rootMargin: '0px 0px -40px 0px',
    })

    const elements = document.querySelectorAll('[data-reveal]')
    elements.forEach((el) => observer.observe(el))
  })

  onUnmounted(() => {
    if (observer) {
      observer.disconnect()
    }
  })
}
