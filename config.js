/**
 * XShield Antivirus — Official Website Configuration
 * Single Source of Truth for product metadata, downloads, and specifications.
 * Owner: Future Finger Technologies | New Delhi, Delhi, India
 */

const XSHIELD_CONFIG = {
    productName: "XShield Antivirus",
    brandName: "XShield",
    tagline: "Your Digital World. Protected by XShield.",
    subTagline: "Smart Security. Strong Protection. Complete Confidence.",
    description: "XShield Antivirus helps protect your digital environment with security tools designed to detect threats, scan files, and help safeguard your Windows computer.",
    
    // Release Metadata
    version: "2.6.15",
    tag: "v2.6.15",
    releaseDate: "November 23, 2026",
    
    // Installer Specifications
    installerName: "XSHEILD_Setup.exe",
    installerSize: "43.3 MB",
    installerSizeBytes: 47354584,
    downloadUrl: "https://raw.githubusercontent.com/futurefinger/XsheildPublic/main/release/XSHEILD_Setup.exe",
    portableName: "XSHEILD_v1.0.0_Portable.zip",
    portableSize: "43.1 MB",
    portableUrl: "https://raw.githubusercontent.com/futurefinger/XsheildPublic/main/release/XSHEILD_v1.0.0_Portable.zip",
    
    // Cryptographic Checksums
    sha256: "fe2d1e2c1b324ef3300494c54dc30cb21dedb9681ea1772c770dddc0436d6ba1",
    portableSha256: "fe2d1e2c1b324ef3300494c54dc30cb21dedb9681ea1772c770dddc0436d6ba1",
    
    // Compatibility & Architecture
    windowsCompatibility: "Windows 11, Windows 10, Windows Server 2022 / 2019 (64-bit)",
    minRam: "2 GB RAM (Engine uses <25 MB)",
    minDisk: "120 MB free disk space",
    architecture: "x64 (AMD64 / Intel 64-bit)",
    
    // Publisher & Legal Information
    publisher: "Future Finger Technologies",
    publisherLocation: "New Delhi, Delhi, India",
    supportEmail: "futurefingerindia@gmail.com",
    jurisdiction: "New Delhi, Delhi, India (Indian IT Act 2000 Section 65B Compliant)",
    
    // Repository & Navigation Links
    githubRepoUrl: "https://github.com/futurefinger/XsheildPublic",
    githubReleasesUrl: "https://github.com/futurefinger/XsheildPublic/releases",
    coreRepoUrl: "https://github.com/futurefinger/XSHEILD",
    liveWebsiteUrl: "https://futurefinger.github.io/XsheildPublic/",
    
    // Relative Document Paths
    installationGuideUrl: "docs/installation.html",
    privacyPolicyUrl: "docs/privacy.html",
    termsUrl: "docs/terms.html",
    
    // Release Changelog
    releaseNotes: [
        "Global Multi-Currency Sovereign Pricing & Intelligent Country Currency Auto-Detection",
        "Ultra-Compact Sacred Meditation Sentry HUD (116x110) with 3D/4D/5D Perspective Rings & 7 Jewel Chakras",
        "Bulletproof Instant Boot Failsafe: zero-freeze startup with immediate 1s dismissal on click or keypress",
        "Resolved Startup Splash Unload Exception with seamless background system tray defense",
        "Zero-Tolerance USB Removable Media Auto-Shield with deep disinfection and autorun immunization",
        "On-Device 3-Layer Neural Zero-Day Structural Anomaly Classifier (<10ms offline execution)",
        "B2B Enterprise Fleet Management & Section 65B Cyber Compliance Certificates",
        "Viral Growth Referral Rewards (Invite 3 colleagues to unlock 6 Months Pro Free)",
        "Digitally Signed with Future Finger Technologies Authenticode Certificate"
    ],

    // Multi-Currency Sovereign Pricing Catalog (Purchasing Power Parity)
    currencyPricing: {
        INR: {
            code: "INR",
            symbol: "₹",
            name: "Indian Rupee",
            flag: "🇮🇳",
            plans: {
                pro: { price: "999", period: "/ year", label: "₹999 / year", inquiryText: "₹999 INR" },
                fleet: { price: "2,499", period: "/ year", label: "₹2,499 / year", inquiryText: "5 Licenses - ₹2,499 INR" },
                lifetime: { price: "4,999", period: "one-time", label: "₹4,999 one-time", inquiryText: "₹4,999 INR" }
            }
        },
        USD: {
            code: "USD",
            symbol: "$",
            name: "US Dollar",
            flag: "🇺🇸",
            plans: {
                pro: { price: "12.99", period: "/ year", label: "$12.99 / year", inquiryText: "$12.99 USD" },
                fleet: { price: "29.99", period: "/ year", label: "$29.99 / year", inquiryText: "5 Licenses - $29.99 USD" },
                lifetime: { price: "59.99", period: "one-time", label: "$59.99 one-time", inquiryText: "$59.99 USD" }
            }
        },
        EUR: {
            code: "EUR",
            symbol: "€",
            name: "Euro",
            flag: "🇪🇺",
            plans: {
                pro: { price: "11.99", period: "/ year", label: "€11.99 / year", inquiryText: "€11.99 EUR" },
                fleet: { price: "27.99", period: "/ year", label: "€27.99 / year", inquiryText: "5 Licenses - €27.99 EUR" },
                lifetime: { price: "54.99", period: "one-time", label: "€54.99 one-time", inquiryText: "€54.99 EUR" }
            }
        },
        GBP: {
            code: "GBP",
            symbol: "£",
            name: "British Pound",
            flag: "🇬🇧",
            plans: {
                pro: { price: "9.99", period: "/ year", label: "£9.99 / year", inquiryText: "£9.99 GBP" },
                fleet: { price: "24.99", period: "/ year", label: "£24.99 / year", inquiryText: "5 Licenses - £24.99 GBP" },
                lifetime: { price: "49.99", period: "one-time", label: "£49.99 one-time", inquiryText: "£49.99 GBP" }
            }
        },
        CAD: {
            code: "CAD",
            symbol: "C$",
            name: "Canadian Dollar",
            flag: "🇨🇦",
            plans: {
                pro: { price: "17.99", period: "/ year", label: "C$17.99 / year", inquiryText: "C$17.99 CAD" },
                fleet: { price: "41.99", period: "/ year", label: "C$41.99 / year", inquiryText: "5 Licenses - C$41.99 CAD" },
                lifetime: { price: "79.99", period: "one-time", label: "C$79.99 one-time", inquiryText: "C$79.99 CAD" }
            }
        },
        AUD: {
            code: "AUD",
            symbol: "A$",
            name: "Australian Dollar",
            flag: "🇦🇺",
            plans: {
                pro: { price: "19.99", period: "/ year", label: "A$19.99 / year", inquiryText: "A$19.99 AUD" },
                fleet: { price: "44.99", period: "/ year", label: "A$44.99 / year", inquiryText: "5 Licenses - A$44.99 AUD" },
                lifetime: { price: "89.99", period: "one-time", label: "A$89.99 one-time", inquiryText: "A$89.99 AUD" }
            }
        },
        AED: {
            code: "AED",
            symbol: "AED ",
            name: "UAE Dirham",
            flag: "🇦🇪",
            plans: {
                pro: { price: "47.99", period: "/ year", label: "AED 47.99 / year", inquiryText: "AED 47.99" },
                fleet: { price: "109.99", period: "/ year", label: "AED 109.99 / year", inquiryText: "5 Licenses - AED 109.99" },
                lifetime: { price: "219.99", period: "one-time", label: "AED 219.99 one-time", inquiryText: "AED 219.99" }
            }
        },
        SGD: {
            code: "SGD",
            symbol: "S$",
            name: "Singapore Dollar",
            flag: "🇸🇬",
            plans: {
                pro: { price: "17.99", period: "/ year", label: "S$17.99 / year", inquiryText: "S$17.99 SGD" },
                fleet: { price: "39.99", period: "/ year", label: "S$39.99 / year", inquiryText: "5 Licenses - S$39.99 SGD" },
                lifetime: { price: "79.99", period: "one-time", label: "S$79.99 one-time", inquiryText: "S$79.99 SGD" }
            }
        },
        JPY: {
            code: "JPY",
            symbol: "¥",
            name: "Japanese Yen",
            flag: "🇯🇵",
            plans: {
                pro: { price: "1,980", period: "/ year", label: "¥1,980 / year", inquiryText: "¥1,980 JPY" },
                fleet: { price: "4,480", period: "/ year", label: "¥4,480 / year", inquiryText: "5 Licenses - ¥4,480 JPY" },
                lifetime: { price: "8,980", period: "one-time", label: "¥8,980 one-time", inquiryText: "¥8,980 JPY" }
            }
        },
        SAR: {
            code: "SAR",
            symbol: "SAR ",
            name: "Saudi Riyal",
            flag: "🇸🇦",
            plans: {
                pro: { price: "48.99", period: "/ year", label: "SAR 48.99 / year", inquiryText: "SAR 48.99" },
                fleet: { price: "112.99", period: "/ year", label: "SAR 112.99 / year", inquiryText: "5 Licenses - SAR 112.99" },
                lifetime: { price: "224.99", period: "one-time", label: "SAR 224.99 one-time", inquiryText: "SAR 224.99" }
            }
        }
    }
};

// Export for module environments if needed
if (typeof module !== 'undefined' && module.exports) {
    module.exports = XSHIELD_CONFIG;
}
