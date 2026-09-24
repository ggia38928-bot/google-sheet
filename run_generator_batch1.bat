@echo off
setlocal
cd /d "D:\google sheet"
echo ======================================================
echo   MINH TEMPLATES FACTORY - GENERATE BATCH 1 (D:\google sheet)
echo ======================================================
echo.

set "NODE_CMD=%APPDATA%\Antigravity\bin\node.cmd"
if exist "%NODE_CMD%" goto RUN_ANTIGRAVITY

node tools/generator.js --batch 1 --no-sync
goto CHECK_EXIT

:RUN_ANTIGRAVITY
call "%NODE_CMD%" tools/generator.js --batch 1 --no-sync

:CHECK_EXIT
if errorlevel 1 (
    echo.
    echo ❌ [ERROR] Tien trinh build that bai voi exit code %errorlevel%!
    exit /b %errorlevel%
)

:END
echo.
echo ======================================================
echo   Hoan tat thanh cong 100%!
echo ======================================================
pause
