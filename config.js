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
    version: "2.6.16",
    tag: "v2.6.16",
    releaseDate: "November 23, 2026",
    
    // Installer Specifications
    installerName: "XSHEILD_Setup.exe",
    installerSize: "43.3 MB",
    installerSizeBytes: 47355096,
    downloadUrl: "https://raw.githubusercontent.com/futurefinger/XsheildPublic/main/release/XSHEILD_Setup.exe",
    portableName: "XSHEILD_v1.0.0_Portable.zip",
    portableSize: "43.1 MB",
    portableUrl: "https://raw.githubusercontent.com/futurefinger/XsheildPublic/main/release/XSHEILD_v1.0.0_Portable.zip",
    
    // Cryptographic Checksums
    sha256: "01e595f2ed8ed550a8a0b3cedec66e7582a634f69163ebcba06ba40984bf7198",
    portableSha256: "01e595f2ed8ed550a8a0b3cedec66e7582a634f69163ebcba06ba40984bf7198",
    
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
                pro: { price: "14.99", period: "/ year", label: "$14.99 / year", inquiryText: "$14.99 USD" },
                fleet: { price: "34.99", period: "/ year", label: "$34.99 / year", inquiryText: "5 Licenses - $34.99 USD" },
                lifetime: { price: "69.99", period: "one-time", label: "$69.99 one-time", inquiryText: "$69.99 USD" }
            }
        },
        EUR: {
            code: "EUR",
            symbol: "€",
            name: "Euro",
            flag: "🇪🇺",
            plans: {
                pro: { price: "12.99", period: "/ year", label: "€12.99 / year", inquiryText: "€12.99 EUR" },
                fleet: { price: "31.99", period: "/ year", label: "€31.99 / year", inquiryText: "5 Licenses - €31.99 EUR" },
                lifetime: { price: "64.99", period: "one-time", label: "€64.99 one-time", inquiryText: "€64.99 EUR" }
            }
        },
        GBP: {
            code: "GBP",
            symbol: "£",
            name: "British Pound",
            flag: "🇬🇧",
            plans: {
                pro: { price: "11.99", period: "/ year", label: "£11.99 / year", inquiryText: "£11.99 GBP" },
                fleet: { price: "27.99", period: "/ year", label: "£27.99 / year", inquiryText: "5 Licenses - £27.99 GBP" },
                lifetime: { price: "54.99", period: "one-time", label: "£54.99 one-time", inquiryText: "£54.99 GBP" }
            }
        },
        CAD: {
            code: "CAD",
            symbol: "C$",
            name: "Canadian Dollar",
            flag: "🇨🇦",
            plans: {
                pro: { price: "19.99", period: "/ year", label: "C$19.99 / year", inquiryText: "C$19.99 CAD" },
                fleet: { price: "44.99", period: "/ year", label: "C$44.99 / year", inquiryText: "5 Licenses - C$44.99 CAD" },
                lifetime: { price: "89.99", period: "one-time", label: "C$89.99 one-time", inquiryText: "C$89.99 CAD" }
            }
        },
        AUD: {
            code: "AUD",
            symbol: "A$",
            name: "Australian Dollar",
            flag: "🇦🇺",
            plans: {
                pro: { price: "22.99", period: "/ year", label: "A$22.99 / year", inquiryText: "A$22.99 AUD" },
                fleet: { price: "49.99", period: "/ year", label: "A$49.99 / year", inquiryText: "5 Licenses - A$49.99 AUD" },
                lifetime: { price: "99.99", period: "one-time", label: "A$99.99 one-time", inquiryText: "A$99.99 AUD" }
            }
        },
        AED: {
            code: "AED",
            symbol: "AED ",
            name: "UAE Dirham",
            flag: "🇦🇪",
            plans: {
                pro: { price: "49.99", period: "/ year", label: "AED 49.99 / year", inquiryText: "AED 49.99" },
                fleet: { price: "129.99", period: "/ year", label: "AED 129.99 / year", inquiryText: "5 Licenses - AED 129.99" },
                lifetime: { price: "259.99", period: "one-time", label: "AED 259.99 one-time", inquiryText: "AED 259.99" }
            }
        },
        SGD: {
            code: "SGD",
            symbol: "S$",
            name: "Singapore Dollar",
            flag: "🇸🇬",
            plans: {
                pro: { price: "19.99", period: "/ year", label: "S$19.99 / year", inquiryText: "S$19.99 SGD" },
                fleet: { price: "44.99", period: "/ year", label: "S$44.99 / year", inquiryText: "5 Licenses - S$44.99 SGD" },
                lifetime: { price: "89.99", period: "one-time", label: "S$89.99 one-time", inquiryText: "S$89.99 SGD" }
            }
        },
        JPY: {
            code: "JPY",
            symbol: "¥",
            name: "Japanese Yen",
            flag: "🇯🇵",
            plans: {
                pro: { price: "2,200", period: "/ year", label: "¥2,200 / year", inquiryText: "¥2,200 JPY" },
                fleet: { price: "4,900", period: "/ year", label: "¥4,900 / year", inquiryText: "5 Licenses - ¥4,900 JPY" },
                lifetime: { price: "9,900", period: "one-time", label: "¥9,900 one-time", inquiryText: "¥9,900 JPY" }
            }
        },
        SAR: {
            code: "SAR",
            symbol: "SAR ",
            name: "Saudi Riyal",
            flag: "🇸🇦",
            plans: {
                pro: { price: "54.99", period: "/ year", label: "SAR 54.99 / year", inquiryText: "SAR 54.99" },
                fleet: { price: "139.99", period: "/ year", label: "SAR 139.99 / year", inquiryText: "5 Licenses - SAR 139.99" },
                lifetime: { price: "259.99", period: "one-time", label: "SAR 259.99 one-time", inquiryText: "SAR 259.99" }
            }
        }
    }
};

// Export for module environments if needed
if (typeof module !== 'undefined' && module.exports) {
    module.exports = XSHIELD_CONFIG;
}
