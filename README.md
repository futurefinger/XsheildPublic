# XSHEILD — Beyond Antivirus. Your Digital Bodyguard.
### Owner: Future Finger Technologies

[![Platform: Windows 10/11](https://img.shields.io/badge/Platform-Windows%2010%20%7C%2011-00F0FF.svg)](https://microsoft.com/windows)
[![Version: v2.6.2](https://img.shields.io/badge/Release-v2.6.2--Production-emerald.svg)](https://github.com/futurefinger/XsheildPublic/releases)
[![Python: 3.12](https://img.shields.io/badge/Python-3.12-blue.svg)](https://python.org)
[![FastAPI: Backend](https://img.shields.io/badge/Backend-FastAPI%20%7C%20SQLite-009688.svg)](https://fastapi.tiangolo.com)
[![Updated: 16 Nov 2026](https://img.shields.io/badge/Updated-November%2016%2C%202026-brightgreen.svg)](https://github.com/futurefinger/XSHEILD)
[![License: Proprietary Commercial](https://img.shields.io/badge/License-Proprietary-FF9800.svg)](#commercial-model)
[![Status: Active Engineering](https://img.shields.io/badge/Status-Active%20Engineering-4CAF50.svg)](STATUS.md)

---

## 1. Executive Summary

**XSHEILD** is a next-generation, layered Windows endpoint security product engineered by **Future Finger Technologies**. XSHEILD bridges low-latency heuristic scanning, cryptographic signature verification, behavioral and persistence surveillance, and a cloud-assisted reputation subsystem with an ultra-responsive, animated desktop UI.

### Brand Attribution
- **Product Name**: XSHEILD (alias: XSHIELD)
- **Tagline**: *"Beyond Antivirus. Your Digital Bodyguard."*
- **Publisher**: Future Finger Technologies
- **Target OS**: 64-bit Windows 11 and supported Windows 10 installations.

---

## 2. Core Pillars & Architecture

```
                       ┌──────────────────────────────────────────────┐
                       │          XSHEILD Desktop UI (v1.0)           │
                       │    (WebView2 / Hardware-Accelerated Web)     │
                       └──────────────────────┬───────────────────────┘
                                              │ Local Authenticated IPC
                                              ▼
┌─────────────────────────────────────────────────────────────────────────────────────────────┐
│                                 XSHEILD CORE SERVICE                                        │
├───────────────────────────────┬─────────────────────────────┬───────────────────────────────┤
│    Detection Engine           │   Quarantine Vault          │   Real-Time Monitor           │
│  - Multi-Hash (SHA256/MD5)    │  - AES/XOR Encrypted Stash  │  - Filesystem Watcher         │
│  - PE Header & Import Parser  │  - Tamper-Evident Manifest  │  - Registry Persistence Mon   │
│  - Shannon Entropy Inspection │  - Atomic Safe Restoration  │  - Process Spawning Telemetry │
│  - EICAR & Custom Signatures  │  - Safe Isolation ACLs      │  - Download Dir Interception  │
├───────────────────────────────┴─────────────────────────────┴───────────────────────────────┤
│   Entitlement & Licensing Engine                                                            │
│  - Cryptographically Signed Entitlements (HMAC-SHA256 Token)                                │
│  - Anti-Rollback Monotonic System Clock Verifier                                            │
│  - Offline Grace Period Cache with Device UUID Fingerprinting                               │
└─────────────────────────────────────────────┬───────────────────────────────────────────────┘
                                              │ TLS 1.3 / Authenticated REST
                                              ▼
                       ┌──────────────────────────────────────────────┐
                       │           XSHEILD Cloud & Backend            │
                       │   - FastAPI Cloud Reputation & Feed          │
                       │   - Razorpay Sandbox Payment Verification    │
                       │   - Webhook Signature & Replay Protection    │
                       │   - Customer & Device Admin Portal           │
                       └──────────────────────────────────────────────┘
```

1. **Deterministic Multi-Hash Engine**: Fast block-level SHA-256, MD5, and SHA-1 calculation against local and cloud threat databases.
2. **PE File Structural Analysis**: Deep inspection of portable executable sections, anomalously high entropy (packed/encrypted malware indicators), suspicious DLL imports (e.g., `VirtualAllocEx`, `WriteProcessMemory`, `CreateRemoteThread`), and anomalous compile timestamps.
3. **Archive Security**: Deep zip inspection with strict recursion limits, decompression ratios, and zip-bomb containment.
4. **Secure Quarantine Vault**: Cryptographically obfuscates and isolates malicious binaries in a sandboxed, restricted directory, preventing direct execution while preserving original filesystem metadata for authorized restoration.
5. **Real-Time Filesystem & Persistence Monitor**: Continuous monitoring of critical directories (Downloads, Desktop, Temp, Startup) and registry run keys (`HKCU\Software\Microsoft\Windows\CurrentVersion\Run`).
6. **Commercial Razorpay Billing & Cryptographic Licensing**: Integrates Razorpay sandbox order creation, payment capture, idempotent webhook event verification, and Ed25519/HMAC-signed offline entitlement tokens.
7. **Windows Defender Coexistence**: Designed to run cleanly alongside Microsoft Defender without attempting to disable or bypass Windows core security features.

---

## 3. Commercial Model & Plans

| Plan | Target | Duration / Billing | Key Capabilities |
| :--- | :--- | :--- | :--- |
| **Free Evaluation** | Single Device | 14-day trial | Quick & Full scan, basic heuristic analysis, quarantine |
| **XSHEILD Pro** | Individual User | Monthly / Annual | Real-time monitoring, cloud reputation, auto-updates |
| **XSHEILD Family** | Multi-Device (Up to 5) | Monthly / Annual | Centralized license dashboard, multi-seat activation |
| **XSHEILD Business**| Organization / Enterprise | Annual | Policy enforcement, administrative reporting, device audit |

*Payment gateway supported via Razorpay (UPI, Credit/Debit Cards, NetBanking).*

---

## 4. Repository Structure

```
XSHIELD/
├── README.md               # Product overview and documentation index
├── ARCHITECTURE.md         # Full systems engineering & data flow specification
├── SECURITY.md             # Security policies, boundaries, vulnerability disclosure
├── THREAT_MODEL.md         # STRIDE & attack surface analysis
├── DEVELOPMENT_PLAN.md     # 9-Phase engineering milestones & priorities
├── TEST_PLAN.md            # Test matrix, EICAR tests, unit, integration tests
├── PRIVACY.md              # Telemetry ethics, Indian privacy law & GDPR compliance
├── INSTALLATION.md         # Build, installation, and deployment procedures
├── RELEASE_CHECKLIST.md    # Production acceptance gates & verification checklist
├── CHANGELOG.md            # Version history and changes
├── AI_HANDOFF.md           # Autonomous agent context & state continuation
├── STATUS.md               # Live task ledger and build/test status
├── assets/                 # SVGs, icons (.ico), logos, high-res marketing marks
├── src/
│   ├── core/               # Antivirus engine: scanner, heuristics, quarantine, cache
│   ├── realtime/           # Filesystem watcher & persistence surveillance
│   ├── licensing/          # Entitlement tokens, device binding, anti-clock-tamper
│   ├── backend/            # FastAPI licensing, admin portal, Razorpay sandbox
│   ├── ui/                 # Animated UI (HTML5/CSS3/JS) + PyWebView IPC runner
│   └── tools/              # CLI scanner, test dataset generator, benchmark harness
├── tests/                  # Automated pytest suite (scanner, quarantine, licensing)
└── installer/              # Standalone Windows packaging & setup script
```

---

## 5. Quick Start (Development & Testing)

### Prerequisites
- Windows 10 or 11 (64-bit)
- Python 3.12+
- Microsoft Edge WebView2 Evergreen Runtime (pre-installed on Windows 10/11)

### Running Automated Test Suite
```powershell
pytest -v tests/
```

### Running the Desktop UI
```powershell
python -m src.ui.app
```

### Running the Licensing & Payment Backend
```powershell
uvicorn src.backend.server:app --port 8000 --reload
```

### Running CLI Scanner Directly
```powershell
python -m src.tools.cli scan --path "C:\Users\HP\Downloads" --mode full
```

---

## 6. Truth in Security & Attributions
- **No Deceptive Protection**: XSHEILD reports genuine scan results and never fabricates threat counts or claims "100% security".
- **Coexistence**: XSHEILD complies with Windows Security guidelines and does not disable Defender or UAC.
- **Attribution**: *XSHEILD is developed and owned by Future Finger Technologies.*
