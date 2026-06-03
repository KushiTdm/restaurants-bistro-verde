'use client'

import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

let registered = false

export function useGsapAnimations(deps: any[] = []) {
  useEffect(() => {
    if (typeof window === 'undefined') return
    if (!registered) {
      gsap.registerPlugin(ScrollTrigger)
      registered = true
    }

    // Marque le body pour que les classes .js-ready .gsap-* s'appliquent
    document.documentElement.classList.add('js-ready')

    const fromUp = { opacity: 0, y: 40 }
    const toUp = { opacity: 1, y: 0, duration: 1, ease: 'power3.out' as const, overwrite: 'auto' as const }
    const fromIn = { opacity: 0 }
    const toIn = { opacity: 1, duration: 1.2, ease: 'power2.out' as const, overwrite: 'auto' as const }
    const fromStagger = { opacity: 0, y: 30 }
    const toStagger = { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' as const, overwrite: 'auto' as const }

    const animate = (
      targets: HTMLElement | HTMLElement[],
      fromV: gsap.TweenVars,
      toV: gsap.TweenVars,
      triggerEl: HTMLElement,
      stagger?: number,
    ) => {
      const rect = triggerEl.getBoundingClientRect()
      const inView = rect.top < window.innerHeight * 0.95
      const toVars: gsap.TweenVars = stagger ? { ...toV, stagger } : toV
      if (inView) {
        gsap.fromTo(targets, fromV, toVars)
      } else {
        gsap.fromTo(targets, fromV, {
          ...toVars,
          scrollTrigger: { trigger: triggerEl, start: 'top 90%', toggleActions: 'play none none none' },
        })
      }
    }

    gsap.utils.toArray<HTMLElement>('.gsap-fade-up').forEach((el) => {
      animate(el, fromUp, toUp, el)
    })

    gsap.utils.toArray<HTMLElement>('.gsap-fade-in').forEach((el) => {
      animate(el, fromIn, toIn, el)
    })

    gsap.utils.toArray<HTMLElement>('.gsap-stagger').forEach((container) => {
      const items = Array.from(container.querySelectorAll<HTMLElement>('.gsap-stagger-item'))
      if (!items.length) return
      animate(items, fromStagger, toStagger, container, 0.1)
    })

    // Parallax
    gsap.utils.toArray<HTMLElement>('[data-parallax]').forEach((el) => {
      const speed = parseFloat(el.dataset.parallax || '0.3')
      gsap.to(el, {
        yPercent: -speed * 100,
        ease: 'none',
        scrollTrigger: {
          trigger: el.parentElement || el,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      })
    })

    ScrollTrigger.refresh()
    const refreshTimer = setTimeout(() => ScrollTrigger.refresh(), 800)

    return () => {
      clearTimeout(refreshTimer)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps)
}
