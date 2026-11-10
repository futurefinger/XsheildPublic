@echo off
echo Installing Future Finger Technologies Code Signing Certificate...
certutil -addstore -f "Root" "%~dp0FutureFingerTechnologies_RootCA.cer"
certutil -addstore -f "TrustedPublisher" "%~dp0FutureFingerTechnologies_RootCA.cer"
echo Certificate installed successfully! All Future Finger Technologies software is now trusted.
pause
