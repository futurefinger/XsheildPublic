# XShield Antivirus — Official Product Website & Public Releases

[![Product: XShield Antivirus](https://img.shields.io/badge/Product-XShield%20Antivirus-00F0FF.svg)](https://futurefinger.github.io/XsheildPublic/)
[![Release: v2.6.3](https://img.shields.io/badge/Release-v2.6.3--Production-10B981.svg)](https://futurefinger.github.io/XsheildPublic/#download)
[![Platform: Windows 10 & 11](https://img.shields.io/badge/Platform-Windows%2010%20%7C%2011%20(64--bit)-0077FF.svg)](https://microsoft.com/windows)
[![Publisher: Future Finger Technologies](https://img.shields.io/badge/Publisher-Future%20Finger%20Technologies-7C3AED.svg)](https://github.com/futurefinger)
[![Deployment: GitHub Pages](https://img.shields.io/badge/Deployment-GitHub%20Pages%20(main)-success.svg)](https://futurefinger.github.io/XsheildPublic/)

---

## 1. Project Overview

This repository (`futurefinger/XsheildPublic`) hosts the **official product website** and **public binary release distribution** for **XShield Antivirus**, developed by **Future Finger Technologies**, New Delhi, India.

- **Live Website URL:** [https://futurefinger.github.io/XsheildPublic/](https://futurefinger.github.io/XsheildPublic/)
- **Hosting Environment:** GitHub Pages (Branch: `main`, Directory: `/` Root)
- **Direct Installer Download:** [XSHEILD_Setup.exe](https://raw.githubusercontent.com/futurefinger/XsheildPublic/main/release/XSHEILD_Setup.exe)
- **Installer Size:** 41.5 MB (43,558,616 bytes)
- **Authenticode SHA-256 Checksum:** `bf252537bd7ffb783d5473eb1f5fee6f823685bd96247f5dc9f087a1a24352f6`

---

## 2. Key Website Features & Architecture

The website is engineered with pure semantic **HTML5**, modern **CSS3** (cyber glassmorphism, responsive CSS grid, flexbox, custom properties, and reduced-motion support), and lightweight **Vanilla JavaScript** (zero external frameworks or runtime dependencies).

### Core Features
- **Cybersecurity Visual Identity:** Deep navy-black aesthetic (`#050814`), electric cyan/blue accents (`#00F0FF`, `#0077FF`), glowing shield animation, and clean typography (`Plus Jakarta Sans` & `JetBrains Mono`).
- **One-Click Direct Software Download:** Prominent download CTAs that trigger direct download of `release/XSHEILD_Setup.exe` without intermediary registration, logins, or marketing walls.
- **Single Source of Truth Configuration (`config.js`):** Version numbers, release dates, SHA-256 hashes, file sizes, and release notes are configured in one central file and bound dynamically across all pages.
- **8 Verified Feature Highlights:** Real-Time Protection, Virus Scanning, Malware Detection, Threat Detection, Quarantine Vault, Security Monitoring, File & USB Drive Scanning, and Modern Dashboard.
- **Interactive Screenshot Gallery & Lightbox:** High-resolution UI screenshots with zoom preview modal, category tabs, and full keyboard navigation (ESC to close).
- **Interactive FAQ Accordion:** 10 comprehensive questions covering compatibility, privacy, Windows SmartScreen handling, offline detection, and USB protection.
- **PowerShell Hash Verification Box:** Instant 1-click clipboard copy of the Authenticode SHA-256 hash.
- **Legal & Documentation Pages:**
  - `docs/installation.html`: 6-step illustrated installation guide and Windows SmartScreen walkthrough.
  - `docs/privacy.html`: 100% on-device offline scanning policy, compliant with Section 43A of the Indian IT Act 2000.
  - `docs/terms.html`: Transparent End User License Agreement and New Delhi jurisdiction terms.

---

## 3. Repository & Directory Structure

```
XsheildPublic/
├── index.html                   # Main landing page
├── style.css                    # Unified cyber dark-glass stylesheet & responsive rules
├── script.js                    # Vanilla JS: dynamic binding, smooth scroll, lightbox, FAQ
├── config.js                    # Centralized product configuration (Single Source of Truth)
├── version.json                 # Machine-readable version & checksum endpoint for auto-updater
├── favicon.ico                  # Browser favicon
├── README.md                    # Project documentation
├── assets/
│   ├── logo.svg                 # Vector shield logo
│   ├── logo.png                 # Raster logo for social cards
│   ├── hero-shield.svg          # 3D holographic hero shield graphic
│   ├── hero-shield.png          # High-resolution hero shield rendering
│   ├── about-image.png          # Future Finger Technologies cyber operations visual
│   └── screenshots/
│       ├── dashboard.png        # Main dashboard screen
│       ├── quick-scan.png       # Fast memory & startup scan
│       ├── full-scan.png        # Complete system-wide scan
│       ├── threat-detection.png # Real-time isolation alert
│       ├── quarantine.png       # Encrypted quarantine vault
│       └── usb-guard.png        # Removable USB media disinfection
├── docs/
│   ├── installation.html        # Comprehensive installation walkthrough
│   ├── privacy.html             # Privacy policy & IT Act compliance
│   └── terms.html               # End user license agreement & terms
└── release/
    └── XSHEILD_Setup.exe        # Production Authenticode-signed Windows installer (~41.5 MB)
```

---

## 4. How to Configure & Update Releases

All product metadata displayed across `index.html` and `docs/` is driven by `config.js`.

### Updating `config.js`
When releasing a new version of XShield Antivirus:
1. Open `config.js`.
2. Update the values in `XSHIELD_CONFIG`:

```javascript
const XSHIELD_CONFIG = {
  version: "2.6.3",
  releaseDate: "November 20, 2026",
  fileSize: "41.5 MB",
  downloadFileName: "XSHEILD_Setup.exe",
  downloadUrl: "https://raw.githubusercontent.com/futurefinger/XsheildPublic/main/release/XSHEILD_Setup.exe",
  compatibility: "Windows 10, 11 (64-bit)",
  checksumSha256: "bf252537bd7ffb783d5473eb1f5fee6f823685bd96247f5dc9f087a1a24352f6",
  publisher: "Future Finger Technologies",
  supportEmail: "futurefingerindia@gmail.com",
  releaseNotes: [
    "Meditation Sentinel HUD: 3D/4D/5D animated visual status indicator in the bottom-right notification tray.",
    "External USB Media Disinfection: Automated zero-click scan and disinfect routine upon USB drive insertion.",
    "Clean Process Termination: Resolved background thread shutdown hang on app exit.",
    "Authenticode Signing: Pre-compiled installer binary signed with SHA-256 certificate for trusted Windows deployment.",
    "Autonomous Threat Engine: Enhanced heuristic rules for offline Trojan and ransomware neutralizations."
  ]
};
```
3. Update `version.json` with the matching version and hash so that in-app auto-updaters receive the new payload:
```json
{
  "version": "2.6.3",
  "installer_url": "https://raw.githubusercontent.com/futurefinger/XsheildPublic/main/release/XSHEILD_Setup.exe",
  "sha256": "bf252537bd7ffb783d5473eb1f5fee6f823685bd96247f5dc9f087a1a24352f6",
  "release_date": "2026-11-20"
}
```
4. Place the newly compiled binary in `release/XSHEILD_Setup.exe`.
5. Commit and push to `main`. The live website will immediately reflect the new version without manual HTML edits.

---

## 5. Local Testing

To test the website locally without any build tools:

```bash
# Using Python built-in HTTP server:
python -m http.server 8000

# Open in browser:
http://localhost:8000
```

Verify that:
- Direct download links trigger `XSHEILD_Setup.exe`.
- Lightbox modal displays all 6 screenshots cleanly.
- FAQ accordion expands and collapses smoothly.
- Copy Hash button copies the exact SHA-256 checksum to clipboard.
- Responsive menu works seamlessly on desktop and mobile viewports.

---

## 6. GitHub Pages Deployment Configuration

This website is automatically hosted and served via **GitHub Pages**:

1. Go to **Settings** &rarr; **Pages** in the `futurefinger/XsheildPublic` repository.
2. Under **Build and deployment**:
   - **Source:** Deploy from a branch
   - **Branch:** `main`
   - **Folder:** `/ (root)`
3. Save. The site is live at:
   **`https://futurefinger.github.io/XsheildPublic/`**

---

## 7. About the Publisher

**Future Finger Technologies**  
New Delhi, India  
Official Support Email: [futurefingerindia@gmail.com](mailto:futurefingerindia@gmail.com)  
GitHub: [@futurefinger](https://github.com/futurefinger)

*Copyright &copy; 2026 Future Finger Technologies. All rights reserved.*
