(function () {
  'use strict';

  var WA_NUMBER = '5581987861442';

  document.querySelectorAll('[data-wa]').forEach(function (el) {
    var msg = el.getAttribute('data-wa');
    el.setAttribute('href', 'https://wa.me/' + WA_NUMBER + '?text=' + encodeURIComponent(msg));
  });

  var anoEl = document.getElementById('ano');
  if (anoEl) anoEl.textContent = new Date().getFullYear();

  var header = document.querySelector('.site-header');
  var nav = document.getElementById('menu');
  var toggle = document.getElementById('navToggle');

  function onScrollHeader() {
    if (!header) return;
    if (window.scrollY > 40) header.classList.add('scrolled');
    else header.classList.remove('scrolled');
  }
  onScrollHeader();
  window.addEventListener('scroll', onScrollHeader, { passive: true });

  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      toggle.classList.toggle('open', open);
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    nav.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        nav.classList.remove('open');
        toggle.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  var faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(function (item) {
    var btn = item.querySelector('.faq-q');
    var panel = item.querySelector('.faq-a');
    if (!btn || !panel) return;
    btn.addEventListener('click', function () {
      var isOpen = item.classList.contains('open');

      faqItems.forEach(function (other) {
        if (other === item || !other.classList.contains('open')) return;
        other.classList.remove('open');
        var ob = other.querySelector('.faq-q');
        var op = other.querySelector('.faq-a');
        if (ob) ob.setAttribute('aria-expanded', 'false');
        if (window.gsap) gsap.to(op, { height: 0, duration: 0.35, ease: 'power2.inOut' });
        else op.style.height = '0px';
      });

      if (isOpen) {
        item.classList.remove('open');
        btn.setAttribute('aria-expanded', 'false');
        if (window.gsap) gsap.to(panel, { height: 0, duration: 0.35, ease: 'power2.inOut' });
        else panel.style.height = '0px';
      } else {
        item.classList.add('open');
        btn.setAttribute('aria-expanded', 'true');
        if (window.gsap) gsap.to(panel, { height: 'auto', duration: 0.42, ease: 'power2.out' });
        else panel.style.height = 'auto';
      }
    });
  });

  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (!window.gsap) return;

  if (window.ScrollTrigger) gsap.registerPlugin(ScrollTrigger);

  if (reduce) {
    if (window.ScrollTrigger) ScrollTrigger.refresh();
    return;
  }

  var hero = gsap.timeline({ defaults: { ease: 'power3.out', duration: 0.8 } });
  hero.from('.hero-copy [data-hero]', { y: 34, opacity: 0, stagger: 0.11 })
      .from('.hero-art-wrap', { y: 40, opacity: 0, scale: 0.96, duration: 1 }, '-=0.9');

  gsap.to('.wheel', { rotation: 360, transformOrigin: '50% 50%', repeat: -1, ease: 'none', duration: 1.7 });
  gsap.to('.rig', { y: -6, repeat: -1, yoyo: true, ease: 'sine.inOut', duration: 1.5 });
  gsap.to('.box-1', { y: -4, repeat: -1, yoyo: true, ease: 'sine.inOut', duration: 1.9 });
  gsap.to('.box-2', { y: -5, repeat: -1, yoyo: true, ease: 'sine.inOut', duration: 2.1, delay: 0.15 });
  gsap.to('.box-3', { y: -3, repeat: -1, yoyo: true, ease: 'sine.inOut', duration: 1.7, delay: 0.3 });
  gsap.to('.speed', { x: 18, opacity: 0.15, repeat: -1, yoyo: true, ease: 'sine.inOut', duration: 1.1, stagger: 0.14 });
  gsap.fromTo('.road-dash', { strokeDashoffset: 0 }, { strokeDashoffset: -84, repeat: -1, ease: 'none', duration: 1.3 });

  if (!window.ScrollTrigger) return;

  gsap.utils.toArray('[data-reveal]').forEach(function (el) {
    gsap.from(el, {
      y: 34,
      opacity: 0,
      duration: 0.75,
      ease: 'power3.out',
      scrollTrigger: { trigger: el, start: 'top 86%' }
    });
  });

  var cards = gsap.utils.toArray('.cards .card');
  if (cards.length) {
    gsap.from(cards, {
      y: 46,
      opacity: 0,
      duration: 0.7,
      ease: 'power3.out',
      stagger: 0.09,
      scrollTrigger: { trigger: '.cards', start: 'top 82%' }
    });
  }

  var trust = gsap.utils.toArray('.trust-item');
  if (trust.length) {
    gsap.from(trust, {
      y: 26,
      opacity: 0,
      duration: 0.6,
      ease: 'power3.out',
      stagger: 0.09,
      scrollTrigger: { trigger: '.trust-band', start: 'top 90%' }
    });
  }

  var steps = gsap.utils.toArray('.step');
  if (steps.length) {
    gsap.from(steps, {
      y: 34,
      opacity: 0,
      duration: 0.7,
      ease: 'power3.out',
      stagger: 0.12,
      scrollTrigger: { trigger: '.steps', start: 'top 80%' }
    });
  }

  var features = gsap.utils.toArray('.feature');
  features.forEach(function (el, i) {
    gsap.from(el, {
      x: i % 2 === 0 ? -40 : 40,
      opacity: 0,
      duration: 0.75,
      ease: 'power3.out',
      scrollTrigger: { trigger: el, start: 'top 86%' }
    });
  });

  var cities = gsap.utils.toArray('.city-list li');
  if (cities.length) {
    gsap.from(cities, {
      y: 16,
      opacity: 0,
      scale: 0.94,
      duration: 0.5,
      ease: 'power2.out',
      stagger: 0.05,
      scrollTrigger: { trigger: '.city-list', start: 'top 88%' }
    });
  }

  var mm = gsap.matchMedia();
  mm.add('(min-width:761px)', function () {
    gsap.to('.steps-progress', {
      width: '100%',
      ease: 'none',
      scrollTrigger: { trigger: '.steps', start: 'top 75%', end: 'bottom 55%', scrub: true }
    });
  });
  mm.add('(max-width:760px)', function () {
    gsap.to('.steps-progress', {
      height: '100%',
      ease: 'none',
      scrollTrigger: { trigger: '.steps', start: 'top 70%', end: 'bottom 60%', scrub: true }
    });
  });

  var track = document.querySelector('.marquee-track');
  if (track) {
    track.innerHTML += track.innerHTML;
    var marqueeTween = gsap.to(track, { xPercent: -50, ease: 'none', duration: 42, repeat: -1 });
    track.addEventListener('mouseenter', function () { marqueeTween.timeScale(0.25); });
    track.addEventListener('mouseleave', function () { marqueeTween.timeScale(1); });
  }

  gsap.to('.wave-1', {
    yPercent: -16, ease: 'none',
    scrollTrigger: { trigger: '.cta-final', start: 'top bottom', end: 'bottom top', scrub: true }
  });
  gsap.to('.wave-2', {
    yPercent: 13, ease: 'none',
    scrollTrigger: { trigger: '.cta-final', start: 'top bottom', end: 'bottom top', scrub: true }
  });

  gsap.from('.map-path', {
    strokeDashoffset: 340,
    duration: 1.6,
    ease: 'power2.out',
    scrollTrigger: { trigger: '.atendimento-art', start: 'top 84%' }
  });

  gsap.from('.map-pin, .map-dot', {
    scale: 0,
    transformOrigin: '50% 50%',
    opacity: 0,
    duration: 0.5,
    ease: 'back.out(2)',
    stagger: 0.12,
    scrollTrigger: { trigger: '.atendimento-art', start: 'top 80%' }
  });

  window.addEventListener('load', function () {
    ScrollTrigger.refresh();
  });
})();
