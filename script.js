/**
 * XShield Antivirus — Official Production Website JavaScript
 * Pure Vanilla JavaScript & Hardware-Accelerated 60 FPS Visuals
 * Features:
 *  1. Cyber Matrix Neural Particle Canvas
 *  2. 3D Volumetric Hero Shield Gyroscope Tilt
 *  3. Interactive 3D Card Perspective & Specular Glare
 *  4. Live Threat Defense Simulator Console
 *  5. Animated KPI Metric Counters (IntersectionObserver)
 *  6. Dynamic Config Binding, Lightbox, Accordion & Clipboard
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

    // New High-Tech Visual Systems
    initCyberMatrixCanvas();
    init3DHeroTilt();
    init3DCardTilt();
    initAnimatedCounters();
    initScrollReveal();
  });

  /* ==========================================================================
     1. Cyber Matrix Neural Particle Canvas (Zero-Dependency Background)
     ========================================================================== */
  function initCyberMatrixCanvas() {
    const canvas = document.getElementById('cyberMatrixCanvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Particle pool
    const count = Math.min(Math.floor(width / 26), 55);
    const particles = [];
    const mouse = { x: null, y: null, radius: 140 };

    class Particle {
      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 0.65;
        this.vy = (Math.random() - 0.5) * 0.65;
        this.radius = Math.random() * 2 + 1;
        // Cyan, Violet, or Emerald accent
        const colors = [
          'rgba(0, 240, 255, 0.75)',
          'rgba(139, 92, 246, 0.65)',
          'rgba(16, 185, 129, 0.65)',
          'rgba(56, 189, 248, 0.7)'
        ];
        this.color = colors[Math.floor(Math.random() * colors.length)];
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        // Bounce on boundaries
        if (this.x < 0 || this.x > width) this.vx *= -1;
        if (this.y < 0 || this.y > height) this.vy *= -1;

        // Subtle mouse repulsion / attraction
        if (mouse.x !== null && mouse.y !== null) {
          const dx = mouse.x - this.x;
          const dy = mouse.y - this.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < mouse.radius) {
            const force = (mouse.radius - dist) / mouse.radius;
            this.x -= (dx / dist) * force * 1.5;
            this.y -= (dy / dist) * force * 1.5;
          }
        }
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.shadowBlur = 8;
        ctx.shadowColor = this.color;
        ctx.fill();
        ctx.shadowBlur = 0;
      }
    }

    for (let i = 0; i < count; i++) {
      particles.push(new Particle());
    }

    window.addEventListener('resize', () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    }, { passive: true });

    window.addEventListener('mousemove', (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    }, { passive: true });

    window.addEventListener('mouseleave', () => {
      mouse.x = null;
      mouse.y = null;
    });

    let animationFrameId;
    function render() {
      ctx.clearRect(0, 0, width, height);

      // Connect nearby particles with subtle glowing lines
      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();

        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 130) {
            const alpha = 1 - dist / 130;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(0, 240, 255, ${alpha * 0.18})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    }

    // Check reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!prefersReducedMotion) {
      render();
    }

    // Auto-pause when tab is inactive to save battery
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) {
        cancelAnimationFrame(animationFrameId);
      } else if (!prefersReducedMotion) {
        render();
      }
    });
  }

  /* ==========================================================================
     2. 3D Volumetric Hero Shield Gyroscope Tilt
     ========================================================================== */
  function init3DHeroTilt() {
    const stage = document.getElementById('heroVisualStage') || document.querySelector('.hero-visual');
    const container = document.getElementById('heroShieldContainer');
    if (!stage || !container) return;

    let bounds = stage.getBoundingClientRect();
    window.addEventListener('resize', () => {
      bounds = stage.getBoundingClientRect();
    }, { passive: true });

    stage.addEventListener('mousemove', (e) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;
      const centerX = bounds.left + bounds.width / 2;
      const centerY = bounds.top + bounds.height / 2;

      const deltaX = (mouseX - centerX) / (bounds.width / 2);
      const deltaY = (mouseY - centerY) / (bounds.height / 2);

      const rotateY = deltaX * 22;
      const rotateX = -deltaY * 22;

      container.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });

    stage.addEventListener('mouseleave', () => {
      container.style.transform = 'rotateX(0deg) rotateY(0deg)';
    });
  }

  /* ==========================================================================
     3. Interactive 3D Perspective & Specular Glare on Cards
     ========================================================================== */
  function init3DCardTilt() {
    const cards = document.querySelectorAll('[data-tilt], .feature-card, .why-card, .metric-strip-card');

    cards.forEach(card => {
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        // Set CSS variables for radial glare spotlight
        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);

        // Subtle 3D tilt
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = ((y - centerY) / centerY) * -8;
        const rotateY = ((x - centerX) / centerX) * 8;

        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
      });

      card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0)';
      });
    });
  }

  /* ==========================================================================
     4. Animated KPI Metric Counters (IntersectionObserver)
     ========================================================================== */
  function initAnimatedCounters() {
    const counters = document.querySelectorAll('[data-counter]');
    if (!counters.length) return;

    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const targetVal = parseFloat(el.getAttribute('data-counter'));
          const prefix = el.getAttribute('data-prefix') || '';
          const suffix = el.getAttribute('data-suffix') || '';
          const isDecimal = targetVal % 1 !== 0;

          let start = 0;
          const duration = 1600; // ms
          const startTime = performance.now();

          function updateCounter(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Ease-out cubic
            const easeOut = 1 - Math.pow(1 - progress, 3);
            const current = start + (targetVal - start) * easeOut;

            el.textContent = `${prefix}${isDecimal ? current.toFixed(2) : Math.floor(current)}${suffix}`;

            if (progress < 1) {
              requestAnimationFrame(updateCounter);
            } else {
              el.textContent = `${prefix}${targetVal}${suffix}`;
            }
          }

          requestAnimationFrame(updateCounter);
          obs.unobserve(el);
        }
      });
    }, { threshold: 0.35 });

    counters.forEach(counter => observer.observe(counter));
  }

  /* ==========================================================================
     5. Scroll Reveal Animations
     ========================================================================== */
  function initScrollReveal() {
    const revealElements = document.querySelectorAll(
      '.feature-card, .why-card, .gallery-card, .step-card, .faq-item, .about-stat-box'
    );

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
        }
      });
    }, { threshold: 0.1 });

    revealElements.forEach(el => {
      el.style.opacity = '1';
      observer.observe(el);
    });
  }

  /* ==========================================================================
     6. Dynamic Configuration Binding
     ========================================================================== */
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

  /* ==========================================================================
     7. Sticky Header with Background Blur
     ========================================================================== */
  function initStickyHeader() {
    const header = document.querySelector('.site-header');
    if (!header) return;

    const handleScroll = () => {
      if (window.scrollY > 30) {
        header.classList.add('header-scrolled');
      } else {
        header.classList.remove('header-scrolled');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
  }

  /* ==========================================================================
     8. Mobile Hamburger Menu Toggle
     ========================================================================== */
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

    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        if (window.innerWidth <= 992) {
          toggleMenu(false);
        }
      });
    });
  }

  /* ==========================================================================
     9. Smooth Scroll
     ========================================================================== */
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

          targetEl.setAttribute('tabindex', '-1');
          targetEl.focus({ preventScroll: true });
        }
      });
    });
  }

  /* ==========================================================================
     10. Lightbox Modal for Screenshots
     ========================================================================== */
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
        if (img) openModal(img.getAttribute('src'), caption);
      });

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

    // Filtering
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

  /* ==========================================================================
     11. FAQ Accordion
     ========================================================================== */
  function initFaqAccordion() {
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
      const header = item.querySelector('.faq-question');
      const content = item.querySelector('.faq-answer');

      if (!header || !content) return;

      header.addEventListener('click', () => {
        const isExpanded = header.getAttribute('aria-expanded') === 'true';

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

  /* ==========================================================================
     12. One-Click Hash Copy
     ========================================================================== */
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

  function initDynamicFooterYear() {
    const yearEl = document.getElementById('current-year');
    if (yearEl) {
      yearEl.textContent = new Date().getFullYear();
    }
  }

  function escapeHtml(str) {
    if (!str) return '';
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
  }

  /* ==========================================================================
     13. Interactive Live Security Threat Simulator Engine
     ========================================================================== */
  window.runSim = function (type) {
    const screen = document.getElementById('simConsoleScreen');
    const status = document.getElementById('simLiveStatus');
    if (!screen) return;

    const time = new Date().toTimeString().split(' ')[0];

    if (type === 'usb') {
      if (status) status.innerHTML = '<span style="color:#f59e0b;">⚡ INTERCEPTING USB MEDIA...</span>';
      
      addLog(time, 'sim-tag-warn', '[HARDWARE]', 'New USB Block Device detected: Kingston DataTraveler 32GB (Volume E:\\).');
      setTimeout(() => {
        addLog(time, 'sim-tag-warn', '[HEURISTIC]', 'Inspecting filesystem roots... Detected Autorun.inf & hidden .lnk payload.');
      }, 400);
      setTimeout(() => {
        addLog(time, 'sim-tag-intercept', '[NEUTRALIZED]', 'Trojan.Autorun.Generic intercepted in 0.16s! Payload moved to AES-256 Quarantine Vault.');
        if (status) status.innerHTML = '<span style="color:#10b981;">✓ USB DISINFECTED & PROTECTED</span>';
      }, 900);
    } else if (type === 'ransomware') {
      if (status) status.innerHTML = '<span style="color:#f43f5e;">☣️ INTERCEPTING ZERO-DAY CIPHER...</span>';
      
      addLog(time, 'sim-tag-warn', '[BEHAVIOR]', 'High-frequency file entropy shift detected in %TEMP%\\svchost_updater.exe.');
      setTimeout(() => {
        addLog(time, 'sim-tag-intercept', '[HONEYPOT]', 'Tripwire canary triggered! Unauthorized cryptographic AES-256 handle intercepted.');
      }, 500);
      setTimeout(() => {
        addLog(time, 'sim-tag-ok', '[TERMINATED]', 'Process PID 4892 terminated immediately. Zero user files encrypted. System posture: 100%.');
        if (status) status.innerHTML = '<span style="color:#10b981;">✓ RANSOMWARE NEUTRALIZED</span>';
      }, 1000);
    } else if (type === 'persistence') {
      if (status) status.innerHTML = '<span style="color:#8b5cf6;">🛡️ SCANNING PERSISTENCE HOOKS...</span>';
      
      addLog(time, 'sim-tag-warn', '[REGISTRY]', 'HKCU\\Software\\Microsoft\\Windows\\CurrentVersion\\Run modification monitored.');
      setTimeout(() => {
        addLog(time, 'sim-tag-intercept', '[ROOTKIT]', 'Detected unverified binary pointer to AppData\\Roaming\\WinHelper.exe.');
      }, 450);
      setTimeout(() => {
        addLog(time, 'sim-tag-ok', '[RESTORED]', 'Registry Run key sanitized. Stealth persistence vector eliminated safely.');
        if (status) status.innerHTML = '<span style="color:#10b981;">✓ PERSISTENCE AUDIT CLEAN</span>';
      }, 950);
    }
  };

  function addLog(time, tagClass, tagText, msg) {
    const screen = document.getElementById('simConsoleScreen');
    if (!screen) return;
    const row = document.createElement('div');
    row.className = 'sim-log-row';
    row.innerHTML = `<span class="sim-time">[${time}]</span> <span class="${tagClass}">${tagText}</span> ${escapeHtml(msg)}`;
    screen.appendChild(row);
    screen.scrollTop = screen.scrollHeight;
  }

  window.clearSimLogs = function () {
    const screen = document.getElementById('simConsoleScreen');
    const status = document.getElementById('simLiveStatus');
    if (screen) {
      screen.innerHTML = '<div class="sim-log-row"><span class="sim-time">[READY]</span> Console cleared. Sentry listening for threats...</div>';
    }
    if (status) {
      status.innerHTML = '&bull; SENTRY ACTIVE & MONITORING';
    }
  };

  // ---------------------------------------------------------------------------
  // Floating Meditation Sentinel 3D Buy Now Button Visibility Control
  // ---------------------------------------------------------------------------
  function syncFloatingBuyNowVisibility() {
    const badge = document.getElementById('floating-meditation-badge');
    if (!badge) return;

    // Check if user has already purchased / activated XShield license
    const isPurchased = (
      localStorage.getItem('xshield_is_registered') === 'true' ||
      localStorage.getItem('xshield_license_active') === 'true' ||
      localStorage.getItem('xshield_tier') === 'lifetime' ||
      localStorage.getItem('xshield_tier') === 'enterprise' ||
      localStorage.getItem('xshield_tier') === 'pro'
    );

    if (isPurchased) {
      // ANTIVIRUS PURCHASED: Permanently hide the Buy Now floating badge
      badge.style.display = 'none';
    } else {
      // UNPURCHASED: Keep gorgeous 3D Buy Now badge visible
      badge.style.display = 'block';
    }
  }

  // Run on load and listen for license activation events
  syncFloatingBuyNowVisibility();
  window.addEventListener('storage', syncFloatingBuyNowVisibility);
  window.addEventListener('xshield:license-updated', syncFloatingBuyNowVisibility);

})();
