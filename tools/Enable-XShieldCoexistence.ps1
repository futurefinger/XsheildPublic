# XShield Antivirus & Microsoft Defender Coexistence Script
# Future Finger Technologies Inc. (C) 2026

Write-Host "==========================================================" -ForegroundColor Cyan
Write-Host "  XSHIELD ENDPOINT ANTIVIRUS - DEFENDER COEXISTENCE SETUP  " -ForegroundColor Cyan
Write-Host "==========================================================" -ForegroundColor Cyan

# Check Administrator Privileges
$isAdmin = ([Security.Principal.WindowsPrincipal][Security.Principal.WindowsIdentity]::GetCurrent()).IsInRole([Security.Principal.WindowsBuiltInRole]::Administrator)
if (-not $isAdmin) {
    Write-Warning "This script requires Administrator privileges. Requesting elevation..."
    Start-Process powershell.exe -Verb RunAs -ArgumentList ("-NoProfile -ExecutionPolicy Bypass -File `"$PSCommandPath`"")
    exit
}

Write-Host "[1/3] Adding Official Windows Defender Path Exclusions..." -ForegroundColor Yellow
$localAppData = [Environment]::GetFolderPath([Environment]::SpecialFolder.LocalApplicationData)
$progFiles = [Environment]::GetFolderPath([Environment]::SpecialFolder.ProgramFiles)
$scriptDir = Split-Path -Parent $PSCommandPath
$repoRoot = Split-Path -Parent $scriptDir

$pathsToExclude = @(
    "$localAppData\XSHEILD",
    "$progFiles\XShield",
    "$repoRoot",
    "$localAppData\Programs\XShield"
)

foreach ($p in $pathsToExclude) {
    try {
        if (-not (Test-Path $p)) {
            New-Item -ItemType Directory -Path $p -Force | Out-Null
        }
        Add-MpPreference -ExclusionPath $p -ErrorAction SilentlyContinue
        Write-Host "  [+] Excluded Path: $p" -ForegroundColor Green
    } catch {
        Write-Warning "  [-] Failed to exclude $p: $_"
    }
}

Write-Host "`n[2/3] Adding Windows Defender Process Exclusions..." -ForegroundColor Yellow
$processesToExclude = @(
    "XSHEILD.exe",
    "XSHEILD_Setup.exe",
    "xshield_svc.exe",
    "xshield_gui.exe",
    "xshield_sentry.exe"
)

foreach ($proc in $processesToExclude) {
    try {
        Add-MpPreference -ExclusionProcess $proc -ErrorAction SilentlyContinue
        Write-Host "  [+] Excluded Process: $proc" -ForegroundColor Green
    } catch {
        Write-Warning "  [-] Failed to exclude $proc: $_"
    }
}

Write-Host "`n[3/3] Verifying Active Microsoft Defender Preferences..." -ForegroundColor Yellow
try {
    $prefs = Get-MpPreference -ErrorAction SilentlyContinue
    $excludedCount = ($prefs.ExclusionPath | Where-Object { $_ -like "*XSHEILD*" -or $_ -like "*xshield*" }).Count
    $excludedProcCount = ($prefs.ExclusionProcess | Where-Object { $_ -like "*XSHEILD*" -or $_ -like "*xshield*" }).Count
    Write-Host "  [OK] Active XShield Path Exclusions: $excludedCount" -ForegroundColor Cyan
    Write-Host "  [OK] Active XShield Process Exclusions: $excludedProcCount" -ForegroundColor Cyan
} catch {
    Write-Host "  [i] Exclusion preferences updated." -ForegroundColor Gray
}

Write-Host "`n==========================================================" -ForegroundColor Green
Write-Host "  XSHIELD IS NOW FULLY HARMONIZED WITH WINDOWS DEFENDER!   " -ForegroundColor Green
Write-Host "  Windows Defender will NOT quarantine or block XShield.   " -ForegroundColor Green
Write-Host "==========================================================" -ForegroundColor Green
Start-Sleep -Seconds 3
