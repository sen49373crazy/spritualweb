# Git Upload Script
Set-Location "C:\Users\shivu\OneDrive\Desktop\HTML"

Write-Host "Initializing Git..."
git init

Write-Host "Adding remote..."
try {
    git remote add origin https://github.com/Shivamthakur7500/spritualweb.git
} catch {
    Write-Host "Remote might already exist, continuing..."
}

Write-Host "Adding files..."
git add .

Write-Host "Committing..."
git commit -m "Add spiritual website with images and all pages"

Write-Host "Renaming branch to main..."
git branch -M main

Write-Host "Pushing to GitHub..."
git push -u origin main
