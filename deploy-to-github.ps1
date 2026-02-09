# Run this script from the project folder (where this file is) in PowerShell.
# Make sure Git is installed and you're logged in to GitHub.

$ErrorActionPreference = "Stop"
Set-Location $PSScriptRoot

# Optional: set README first line (comment out next line to keep existing README)
# Set-Content -Path "README.md" -Value "# healIQ"

Write-Host "Initializing git repository..." -ForegroundColor Green
git init

Write-Host "Adding all files..." -ForegroundColor Green
git add .

Write-Host "Committing..." -ForegroundColor Green
git commit -m "first commit"

Write-Host "Setting branch to main..." -ForegroundColor Green
git branch -M main

Write-Host "Adding remote origin..." -ForegroundColor Green
git remote add origin https://github.com/kiranprasad-b/healIQ.git

Write-Host "Pushing to GitHub..." -ForegroundColor Green
git push -u origin main

Write-Host "Done! Your code is at https://github.com/kiranprasad-b/healIQ" -ForegroundColor Green
