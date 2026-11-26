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
    initWebPricingCurrency();
  });

  /* ==========================================================================
     1. Cyber Matrix 4D Quantum Particle Canvas (Zero-Dependency)
     ========================================================================== */
  function initCyberMatrixCanvas() {
    const canvas = document.getElementById('cyberMatrixCanvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Dynamic density based on screen width
    const count = Math.min(Math.floor(width / 22), 65);
    const particles = [];
    const pointer = { x: null, y: null, radius: 150, active: false };

    class Particle4D {
      constructor() {
        this.baseX = Math.random() * width;
        this.baseY = Math.random() * height;
        this.baseZ = (Math.random() - 0.5) * 280; // 3rd spatial dimension
        this.vx = (Math.random() - 0.5) * 0.7;
        this.vy = (Math.random() - 0.5) * 0.7;
        this.vz = (Math.random() - 0.5) * 0.5;
        this.radius = Math.random() * 2.2 + 1.2;
        this.phase = Math.random() * Math.PI * 2; // 4th temporal dimension phase

        // Cyber chromatic palette
        const colors = [
          'rgba(0, 240, 255, 0.85)',
          'rgba(139, 92, 246, 0.8)',
          'rgba(16, 185, 129, 0.8)',
          'rgba(56, 189, 248, 0.85)',
          'rgba(251, 191, 36, 0.75)'
        ];
        this.color = colors[Math.floor(Math.random() * colors.length)];
      }

      update(time) {
        this.baseX += this.vx;
        this.baseY += this.vy;
        this.baseZ += this.vz;

        // Wrap around spatial boundaries
        if (this.baseX < 0) this.baseX = width;
        if (this.baseX > width) this.baseX = 0;
        if (this.baseY < 0) this.baseY = height;
        if (this.baseY > height) this.baseY = 0;
        if (this.baseZ < -140) this.baseZ = 140;
        if (this.baseZ > 140) this.baseZ = -140;

        // 4D Temporal Wave Function: z oscillates with time & coordinate distance
        const tWave = Math.sin(time * 0.0018 + this.phase + this.baseX * 0.008) * 35;
        const currentZ = this.baseZ + tWave;

        // 3D Perspective Projection
        const fov = 300;
        const scale = fov / (fov + currentZ);
        this.projX = (this.baseX - width / 2) * scale + width / 2;
        this.projY = (this.baseY - height / 2) * scale + height / 2;
        this.projRadius = Math.max(0.6, this.radius * scale);
        this.projAlpha = Math.min(1, Math.max(0.15, scale * 0.85));

        // Touch & Mouse gravitational ripple
        if (pointer.active && pointer.x !== null && pointer.y !== null) {
          const dx = pointer.x - this.projX;
          const dy = pointer.y - this.projY;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < pointer.radius && dist > 0) {
            const force = (pointer.radius - dist) / pointer.radius;
            this.baseX -= (dx / dist) * force * 2.2;
            this.baseY -= (dy / dist) * force * 2.2;
          }
        }
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.projX, this.projY, this.projRadius, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.shadowBlur = 10 * this.projAlpha;
        ctx.shadowColor = this.color;
        ctx.globalAlpha = this.projAlpha;
        ctx.fill();
        ctx.globalAlpha = 1;
        ctx.shadowBlur = 0;
      }
    }

    for (let i = 0; i < count; i++) {
      particles.push(new Particle4D());
    }

    window.addEventListener('resize', () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    }, { passive: true });

    // Mouse events
    window.addEventListener('mousemove', (e) => {
      pointer.x = e.clientX;
      pointer.y = e.clientY;
      pointer.active = true;
    }, { passive: true });

    window.addEventListener('mouseleave', () => {
      pointer.active = false;
      pointer.x = null;
      pointer.y = null;
    });

    // Touch events for mobile
    window.addEventListener('touchstart', (e) => {
      if (e.touches.length) {
        pointer.x = e.touches[0].clientX;
        pointer.y = e.touches[0].clientY;
        pointer.active = true;
      }
    }, { passive: true });

    window.addEventListener('touchmove', (e) => {
      if (e.touches.length) {
        pointer.x = e.touches[0].clientX;
        pointer.y = e.touches[0].clientY;
        pointer.active = true;
      }
    }, { passive: true });

    window.addEventListener('touchend', () => {
      pointer.active = false;
    }, { passive: true });

    let animationFrameId;
    let startTime = performance.now();

    function render(currentTime) {
      const elapsed = currentTime - startTime;
      ctx.clearRect(0, 0, width, height);

      // Connect nearby particles with glowing neural lines
      for (let i = 0; i < particles.length; i++) {
        particles[i].update(elapsed);
        particles[i].draw();

        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].projX - particles[j].projX;
          const dy = particles[i].projY - particles[j].projY;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 135) {
            const alpha = (1 - dist / 135) * Math.min(particles[i].projAlpha, particles[j].projAlpha);
            ctx.beginPath();
            ctx.moveTo(particles[i].projX, particles[i].projY);
            ctx.lineTo(particles[j].projX, particles[j].projY);
            ctx.strokeStyle = `rgba(0, 240, 255, ${alpha * 0.22})`;
            ctx.lineWidth = 0.9;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    }

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!prefersReducedMotion) {
      render(performance.now());
    }

    document.addEventListener('visibilitychange', () => {
      if (document.hidden) {
        cancelAnimationFrame(animationFrameId);
      } else if (!prefersReducedMotion) {
        startTime = performance.now();
        render(performance.now());
      }
    });
  }

  /* ==========================================================================
     2. 3D Volumetric Hero Shield Gyroscope & Mobile Touch Tilt
     ========================================================================== */
  function init3DHeroTilt() {
    const stage = document.getElementById('heroVisualStage') || document.querySelector('.hero-visual');
    const container = document.getElementById('heroShieldContainer');
    if (!stage || !container) return;

    let bounds = stage.getBoundingClientRect();
    window.addEventListener('resize', () => {
      bounds = stage.getBoundingClientRect();
    }, { passive: true });

    const applyTilt = (x, y) => {
      const centerX = bounds.left + bounds.width / 2;
      const centerY = bounds.top + bounds.height / 2;

      const deltaX = Math.max(-1, Math.min(1, (x - centerX) / (bounds.width / 2)));
      const deltaY = Math.max(-1, Math.min(1, (y - centerY) / (bounds.height / 2)));

      const rotateY = deltaX * 24;
      const rotateX = -deltaY * 24;

      container.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    };

    stage.addEventListener('mousemove', (e) => {
      applyTilt(e.clientX, e.clientY);
    });

    stage.addEventListener('mouseleave', () => {
      container.style.transform = 'rotateX(0deg) rotateY(0deg)';
    });

    // Touch interaction for mobile devices
    stage.addEventListener('touchmove', (e) => {
      if (e.touches.length) {
        applyTilt(e.touches[0].clientX, e.touches[0].clientY);
      }
    }, { passive: true });

    stage.addEventListener('touchend', () => {
      container.style.transform = 'rotateX(0deg) rotateY(0deg)';
    }, { passive: true });

    // Gyroscope orientation tilt on mobile (when available)
    if (window.DeviceOrientationEvent) {
      window.addEventListener('deviceorientation', (e) => {
        if (e.gamma !== null && e.beta !== null && window.innerWidth <= 1024) {
          const tiltX = Math.min(Math.max(e.gamma, -25), 25) * 0.6;
          const tiltY = Math.min(Math.max(e.beta - 45, -25), 25) * 0.6;
          container.style.transform = `rotateX(${-tiltY}deg) rotateY(${tiltX}deg)`;
        }
      }, { passive: true });
    }
  }

  /* ==========================================================================
     3. Interactive 3D Perspective & Specular Glare on All Cards
     ========================================================================== */
  function init3DCardTilt() {
    const cards = document.querySelectorAll('[data-tilt], .feature-card, .why-card, .metric-strip-card, .pricing-card, .download-card, .pillar-card');

    cards.forEach(card => {
      const updateCardGlare = (clientX, clientY) => {
        const rect = card.getBoundingClientRect();
        const x = clientX - rect.left;
        const y = clientY - rect.top;

        // Set CSS variables for radial glare spotlight
        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);

        // Subtle 3D tilt
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = ((y - centerY) / centerY) * -7;
        const rotateY = ((x - centerX) / centerX) * 7;

        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
      };

      card.addEventListener('mousemove', (e) => {
        updateCardGlare(e.clientX, e.clientY);
      });

      card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0)';
      });

      // Mobile touch spotlight
      card.addEventListener('touchmove', (e) => {
        if (e.touches.length) {
          const rect = card.getBoundingClientRect();
          const x = e.touches[0].clientX - rect.left;
          const y = e.touches[0].clientY - rect.top;
          card.style.setProperty('--mouse-x', `${x}px`);
          card.style.setProperty('--mouse-y', `${y}px`);
        }
      }, { passive: true });
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
     8. Mobile Cyber Drawer Navigation & Touch Gestures
     ========================================================================== */
  function initMobileNav() {
    const hamburgerBtn = document.querySelector('.hamburger-btn');
    const mobileMenu = document.querySelector('.nav-links');
    const navOverlay = document.querySelector('.mobile-overlay');
    const closeBtn = document.getElementById('mobileNavClose') || document.querySelector('.mobile-nav-close');

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

    if (closeBtn) {
      closeBtn.addEventListener('click', () => toggleMenu(false));
    }

    if (navOverlay) {
      navOverlay.addEventListener('click', () => toggleMenu(false));
    }

    // Close on link click on tablets & mobile
    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        if (window.innerWidth <= 1024) {
          toggleMenu(false);
        }
      });
    });

    // Close on Escape key
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && mobileMenu.classList.contains('nav-active')) {
        toggleMenu(false);
      }
    });

    // Touch swipe-to-close gesture
    let touchStartX = 0;
    mobileMenu.addEventListener('touchstart', (e) => {
      touchStartX = e.touches[0].clientX;
    }, { passive: true });

    mobileMenu.addEventListener('touchmove', (e) => {
      const touchCurrentX = e.touches[0].clientX;
      if (touchCurrentX - touchStartX > 50) {
        toggleMenu(false);
      }
    }, { passive: true });
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

  // ---------------------------------------------------------------------------
  // Intelligent Multi-Currency Purchasing Power & Currency Switcher
  // ---------------------------------------------------------------------------
  function initWebPricingCurrency() {
    const select = document.getElementById('web-pricing-currency-select');
    const badge = document.getElementById('web-currency-badge');
    if (!select) return;

    const catalog = (typeof XSHIELD_CONFIG !== 'undefined' && XSHIELD_CONFIG.currencyPricing) ? XSHIELD_CONFIG.currencyPricing : null;
    if (!catalog) return;

    // Detect visitor currency from locale, timezone, or saved preference
    let detectedCurrency = 'INR';
    let isManual = false;
    try {
      const saved = localStorage.getItem('xshield_web_currency');
      if (saved && catalog[saved]) {
        detectedCurrency = saved;
        isManual = true;
      } else {
        const tz = Intl.DateTimeFormat().resolvedOptions().timeZone || '';
        const lang = (navigator.language || navigator.userLanguage || '').toLowerCase();
        if (tz.includes('London') || lang.endsWith('gb')) detectedCurrency = 'GBP';
        else if (tz.includes('Dubai') || lang.endsWith('ae')) detectedCurrency = 'AED';
        else if (tz.includes('Singapore') || lang.endsWith('sg')) detectedCurrency = 'SGD';
        else if (tz.includes('Tokyo') || lang.endsWith('jp') || lang.startsWith('ja')) detectedCurrency = 'JPY';
        else if (tz.includes('Sydney') || tz.includes('Melbourne') || lang.endsWith('au')) detectedCurrency = 'AUD';
        else if (tz.includes('Toronto') || tz.includes('Vancouver') || lang.endsWith('ca')) detectedCurrency = 'CAD';
        else if (tz.includes('Riyadh') || lang.endsWith('sa')) detectedCurrency = 'SAR';
        else if (tz.includes('Berlin') || tz.includes('Paris') || tz.includes('Rome') || tz.includes('Madrid') || tz.includes('Amsterdam') || ['de','fr','it','es','nl'].some(l => lang.startsWith(l))) detectedCurrency = 'EUR';
        else if (tz.includes('America') || tz.includes('New_York') || tz.includes('Chicago') || tz.includes('Los_Angeles') || lang.endsWith('us')) detectedCurrency = 'USD';
        else if (tz.includes('Kolkata') || tz.includes('Calcutta') || lang.endsWith('in') || lang.startsWith('hi')) detectedCurrency = 'INR';
      }
    } catch (e) {}

    function applyCurrency(cur, manualChoice = false) {
      if (!catalog[cur]) cur = 'INR';
      const curData = catalog[cur];
      select.value = cur;

      if (badge) {
        badge.innerText = manualChoice ? 'Selected' : 'Auto-Detected';
        badge.style.color = manualChoice ? '#38bdf8' : '#10b981';
        badge.style.borderColor = manualChoice ? 'rgba(56, 189, 248, 0.4)' : 'rgba(16, 185, 129, 0.3)';
      }

      const pPro = curData.plans.pro;
      const pFleet = curData.plans.fleet;
      const pLife = curData.plans.lifetime;

      // Update Pro card
      const elProCur = document.getElementById('web-pro-currency');
      const elProPrice = document.getElementById('web-pro-price');
      const elProPeriod = document.getElementById('web-pro-period');
      const elProBtn = document.getElementById('web-pro-buy-btn');
      if (elProCur) elProCur.innerText = curData.symbol;
      if (elProPrice) elProPrice.innerText = pPro.price;
      if (elProPeriod) elProPeriod.innerText = pPro.period;
      if (elProBtn) {
        elProBtn.setAttribute('href', `mailto:futurefingerindia@gmail.com?subject=XShield%20Pro%20Purchase%20Inquiry&body=Hi%2C%20I%20want%20to%20purchase%20XShield%20Pro%20(${encodeURIComponent(pPro.inquiryText)})%20to%20Unlock%20Full%20Security.`);
      }

      // Update Fleet card
      const elFleetCur = document.getElementById('web-fleet-currency');
      const elFleetPrice = document.getElementById('web-fleet-price');
      const elFleetPeriod = document.getElementById('web-fleet-period');
      const elFleetBtn = document.getElementById('web-fleet-buy-btn');
      if (elFleetCur) elFleetCur.innerText = curData.symbol;
      if (elFleetPrice) elFleetPrice.innerText = pFleet.price;
      if (elFleetPeriod) elFleetPeriod.innerText = pFleet.period;
      if (elFleetBtn) {
        elFleetBtn.setAttribute('href', `mailto:futurefingerindia@gmail.com?subject=XShield%20Enterprise%20Fleet%20Order&body=Hi%2C%20I%20want%20to%20deploy%20XShield%20Fleet%20Enterprise%20(${encodeURIComponent(pFleet.inquiryText)})%20to%20Unlock%20Full%20Security.`);
      }

      // Update Lifetime card
      const elLifeCur = document.getElementById('web-lifetime-currency');
      const elLifePrice = document.getElementById('web-lifetime-price');
      const elLifePeriod = document.getElementById('web-lifetime-period');
      const elLifeBtn = document.getElementById('web-lifetime-buy-btn');
      if (elLifeCur) elLifeCur.innerText = curData.symbol;
      if (elLifePrice) elLifePrice.innerText = pLife.price;
      if (elLifePeriod) elLifePeriod.innerText = pLife.period;
      if (elLifeBtn) {
        elLifeBtn.setAttribute('href', `mailto:futurefingerindia@gmail.com?subject=XShield%20Lifetime%20Sovereign%20Order&body=Hi%2C%20I%20want%20to%20purchase%20XShield%20Lifetime%20Sovereign%20(${encodeURIComponent(pLife.inquiryText)})%20to%20Unlock%20Full%20Security.`);
      }
    }

    select.addEventListener('change', (e) => {
      const chosen = e.target.value;
      try { localStorage.setItem('xshield_web_currency', chosen); } catch(e) {}
      applyCurrency(chosen, true);
    });

    applyCurrency(detectedCurrency, isManual);
  }

  // Run on load and listen for license activation events
  syncFloatingBuyNowVisibility();
  window.addEventListener('storage', syncFloatingBuyNowVisibility);
  window.addEventListener('xshield:license-updated', syncFloatingBuyNowVisibility);

})();
