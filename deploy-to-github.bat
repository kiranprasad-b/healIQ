@echo off
cd /d "%~dp0"

echo Initializing git repository...
git init

echo Adding all files...
git add .

echo Committing...
git commit -m "first commit"

echo Setting branch to main...
git branch -M main

echo Adding remote origin...
git remote add origin https://github.com/kiranprasad-b/healIQ.git

echo Pushing to GitHub...
git push -u origin main

echo Done! Your code is at https://github.com/kiranprasad-b/healIQ
pause
