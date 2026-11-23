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
    version: "2.6.9",
    tag: "v2.6.9",
    releaseDate: "November 23, 2026",
    
    // Installer Specifications
    installerName: "XSHEILD_Setup.exe",
    installerSize: "43.3 MB",
    installerSizeBytes: 45372632,
    downloadUrl: "https://raw.githubusercontent.com/futurefinger/XsheildPublic/main/release/XSHEILD_Setup.exe",
    portableName: "XSHEILD_v1.0.0_Portable.zip",
    portableSize: "43.1 MB",
    portableUrl: "https://raw.githubusercontent.com/futurefinger/XsheildPublic/main/release/XSHEILD_v1.0.0_Portable.zip",
    
    // Cryptographic Checksums
    sha256: "fbb2b1ae166c26345b000e506a5e43cde3548164f901c6588795def149a6c780",
    portableSha256: "fbb2b1ae166c26345b000e506a5e43cde3548164f901c6588795def149a6c780",
    
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
        "Ultra-Compact Sacred Meditation Sentry HUD (116x110) with 3D/4D/5D Perspective Rings & 7 Jewel Chakras",
        "Bulletproof Instant Boot Failsafe: zero-freeze startup with immediate 1s dismissal on click or keypress",
        "Resolved Startup Splash Unload Exception with seamless background system tray defense",
        "Zero-Tolerance USB Removable Media Auto-Shield with deep disinfection and autorun immunization",
        "On-Device 3-Layer Neural Zero-Day Structural Anomaly Classifier (<10ms offline execution)",
        "B2B Enterprise Fleet Management & Section 65B Cyber Compliance Certificates",
        "Viral Growth Referral Rewards (Invite 3 colleagues to unlock 6 Months Pro Free)",
        "Digitally Signed with Future Finger Technologies Authenticode Certificate"
    ]
};

// Export for module environments if needed
if (typeof module !== 'undefined' && module.exports) {
    module.exports = XSHIELD_CONFIG;
}
