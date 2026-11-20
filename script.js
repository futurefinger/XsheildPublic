/**
 * XShield Antivirus - Official Product Website JavaScript
 * Pure Vanilla JavaScript (No external frameworks or heavy runtime)
 * Dynamic Configuration Binding, Smooth Scroll, Lightbox, FAQ Accordion & Hash Copy
 */

(function () {
  'use strict';

  // 1. DOM Ready Initialization
  document.addEventListener('DOMContentLoaded', () => {
    initDynamicConfig();
    initStickyHeader();
    initMobileNav();
    initSmoothScroll();
    initScreenshotsLightbox();
    initFaqAccordion();
    initHashCopy();
    initDynamicFooterYear();
  });

  /**
   * Bind dynamic configuration from config.js (XSHIELD_CONFIG)
   */
  function initDynamicConfig() {
    if (typeof XSHIELD_CONFIG === 'undefined') {
      console.warn('XSHIELD_CONFIG is not defined. Falling back to default values.');
      return;
    }

    // Version text
    document.querySelectorAll('[data-config="version"]').forEach(el => {
      el.textContent = `v${XSHIELD_CONFIG.version}`;
    });

    // Release Date
    document.querySelectorAll('[data-config="releaseDate"]').forEach(el => {
      el.textContent = XSHIELD_CONFIG.releaseDate;
    });

    // File Size
    document.querySelectorAll('[data-config="fileSize"]').forEach(el => {
      el.textContent = XSHIELD_CONFIG.fileSize;
    });

    // Windows Compatibility
    document.querySelectorAll('[data-config="compatibility"]').forEach(el => {
      el.textContent = XSHIELD_CONFIG.compatibility;
    });

    // SHA-256 Checksum
    document.querySelectorAll('[data-config="sha256"]').forEach(el => {
      el.textContent = XSHIELD_CONFIG.checksumSha256;
    });

    // Direct Download Links
    document.querySelectorAll('[data-config="downloadLink"]').forEach(el => {
      if (el.tagName.toLowerCase() === 'a') {
        el.setAttribute('href', XSHIELD_CONFIG.downloadUrl);
        el.setAttribute('download', XSHIELD_CONFIG.downloadFileName);
      }
    });

    // Release Notes Dynamic Injection (if container exists)
    const notesContainer = document.getElementById('dynamic-release-notes');
    if (notesContainer && Array.isArray(XSHIELD_CONFIG.releaseNotes)) {
      notesContainer.innerHTML = '';
      const list = document.createElement('ul');
      list.className = 'release-notes-list';
      XSHIELD_CONFIG.releaseNotes.forEach(note => {
        const item = document.createElement('li');
        item.innerHTML = `<span class="release-bullet">✓</span> ${escapeHtml(note)}`;
        list.appendChild(item);
      });
      notesContainer.appendChild(list);
    }
  }

  /**
   * Sticky Header with background blur on scroll
   */
  function initStickyHeader() {
    const header = document.querySelector('.site-header');
    if (!header) return;

    const handleScroll = () => {
      if (window.scrollY > 40) {
        header.classList.add('header-scrolled');
      } else {
        header.classList.remove('header-scrolled');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Trigger once initially
  }

  /**
   * Mobile Hamburger Menu Toggle
   */
  function initMobileNav() {
    const hamburgerBtn = document.querySelector('.hamburger-btn');
    const mobileMenu = document.querySelector('.nav-links');
    const navOverlay = document.querySelector('.mobile-overlay');

    if (!hamburgerBtn || !mobileMenu) return;

    const toggleMenu = (open) => {
      const isExpanded = open !== undefined ? open : hamburgerBtn.getAttribute('aria-expanded') !== 'true';
      hamburgerBtn.setAttribute('aria-expanded', isExpanded ? 'true' : 'false');
      mobileMenu.classList.toggle('nav-active', isExpanded);
      hamburgerBtn.classList.toggle('hamburger-active', isExpanded);
      if (navOverlay) navOverlay.classList.toggle('active', isExpanded);
      document.body.style.overflow = isExpanded ? 'hidden' : '';
    };

    hamburgerBtn.addEventListener('click', () => toggleMenu());

    if (navOverlay) {
      navOverlay.addEventListener('click', () => toggleMenu(false));
    }

    // Close mobile nav when clicking any nav link
    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        if (window.innerWidth <= 992) {
          toggleMenu(false);
        }
      });
    });
  }

  /**
   * Smooth Scroll with sticky header height compensation
   */
  function initSmoothScroll() {
    const scrollLinks = document.querySelectorAll('a[href^="#"]:not([href="#"])');
    scrollLinks.forEach(link => {
      link.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href');
        const targetEl = document.querySelector(targetId);
        if (targetEl) {
          e.preventDefault();
          const headerOffset = 80;
          const elementPosition = targetEl.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });

          // Set focus for accessibility
          targetEl.setAttribute('tabindex', '-1');
          targetEl.focus({ preventScroll: true });
        }
      });
    });
  }

  /**
   * Lightbox Modal for Product Screenshots
   */
  function initScreenshotsLightbox() {
    const modal = document.getElementById('lightbox-modal');
    const modalImg = document.getElementById('lightbox-image');
    const modalCaption = document.getElementById('lightbox-caption');
    const closeBtn = document.querySelector('.lightbox-close');
    const backdrop = document.querySelector('.lightbox-backdrop');

    if (!modal || !modalImg) return;

    const openModal = (src, caption) => {
      modalImg.src = src;
      modalImg.alt = caption || 'XShield Screenshot';
      if (modalCaption) modalCaption.textContent = caption || '';
      modal.classList.add('lightbox-open');
      modal.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
      if (closeBtn) closeBtn.focus();
    };

    const closeModal = () => {
      modal.classList.remove('lightbox-open');
      modal.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
      modalImg.src = '';
    };

    document.querySelectorAll('.gallery-card').forEach(card => {
      card.addEventListener('click', function () {
        const img = this.querySelector('img');
        const caption = this.querySelector('.gallery-title')?.textContent;
        if (img) {
          openModal(img.getAttribute('src'), caption);
        }
      });
      // Keyboard support
      card.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          const img = this.querySelector('img');
          const caption = this.querySelector('.gallery-title')?.textContent;
          if (img) openModal(img.getAttribute('src'), caption);
        }
      });
    });

    if (closeBtn) closeBtn.addEventListener('click', closeModal);
    if (backdrop) backdrop.addEventListener('click', closeModal);

    document.addEventListener('keydown', e => {
      if (e.key === 'Escape' && modal.classList.contains('lightbox-open')) {
        closeModal();
      }
    });

    // Gallery Category Filtering (All / Scans / Protection / Tools)
    const filterTabs = document.querySelectorAll('.gallery-tab');
    filterTabs.forEach(tab => {
      tab.addEventListener('click', function () {
        filterTabs.forEach(t => {
          t.classList.remove('active');
          t.setAttribute('aria-selected', 'false');
        });
        this.classList.add('active');
        this.setAttribute('aria-selected', 'true');

        const filter = this.getAttribute('data-filter');
        document.querySelectorAll('.gallery-card').forEach(card => {
          if (filter === 'all' || card.getAttribute('data-category') === filter) {
            card.style.display = 'block';
          } else {
            card.style.display = 'none';
          }
        });
      });
    });
  }

  /**
   * FAQ Accordion with smooth toggle & accessibility
   */
  function initFaqAccordion() {
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
      const header = item.querySelector('.faq-question');
      const content = item.querySelector('.faq-answer');

      if (!header || !content) return;

      header.addEventListener('click', () => {
        const isExpanded = header.getAttribute('aria-expanded') === 'true';

        // Close other items
        faqItems.forEach(otherItem => {
          if (otherItem !== item) {
            const otherHeader = otherItem.querySelector('.faq-question');
            const otherContent = otherItem.querySelector('.faq-answer');
            if (otherHeader && otherContent) {
              otherHeader.setAttribute('aria-expanded', 'false');
              otherContent.style.maxHeight = null;
              otherItem.classList.remove('active');
            }
          }
        });

        // Toggle current item
        if (isExpanded) {
          header.setAttribute('aria-expanded', 'false');
          content.style.maxHeight = null;
          item.classList.remove('active');
        } else {
          header.setAttribute('aria-expanded', 'true');
          content.style.maxHeight = content.scrollHeight + 'px';
          item.classList.add('active');
        }
      });
    });
  }

  /**
   * One-Click SHA-256 Hash Copy with Visual Feedback
   */
  function initHashCopy() {
    const copyBtn = document.getElementById('copy-hash-btn');
    const hashTextEl = document.getElementById('sha256-text');

    if (!copyBtn || !hashTextEl) return;

    copyBtn.addEventListener('click', () => {
      const hash = hashTextEl.textContent.trim();
      if (!hash) return;

      navigator.clipboard.writeText(hash).then(() => {
        const originalText = copyBtn.innerHTML;
        copyBtn.innerHTML = '✓ Copied!';
        copyBtn.classList.add('copied');

        setTimeout(() => {
          copyBtn.innerHTML = originalText;
          copyBtn.classList.remove('copied');
        }, 2200);
      }).catch(err => {
        console.error('Clipboard copy failed:', err);
        // Fallback for older browsers
        const textarea = document.createElement('textarea');
        textarea.value = hash;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);

        copyBtn.innerHTML = '✓ Copied!';
        setTimeout(() => {
          copyBtn.innerHTML = 'Copy Hash';
        }, 2200);
      });
    });
  }

  /**
   * Set dynamic current year in footer
   */
  function initDynamicFooterYear() {
    const yearEl = document.getElementById('current-year');
    if (yearEl) {
      yearEl.textContent = new Date().getFullYear();
    }
  }

  /**
   * Safe HTML escaping helper
   */
  function escapeHtml(str) {
    if (!str) return '';
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
  }
})();
