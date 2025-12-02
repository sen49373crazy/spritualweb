# Git Fresh Start Script
Set-Location "C:\Users\shivu\OneDrive\Desktop\HTML"

Write-Host "Removing existing .git directory..."
Remove-Item -Path .git -Recurse -Force -ErrorAction SilentlyContinue

Write-Host "Initializing new Git repository..."
git init

Write-Host "Creating .gitignore to exclude large files..."
Set-Content -Path .gitignore -Value "ram.mp4"

Write-Host "Adding files..."
git add .

Write-Host "Committing..."
git commit -m "Initial commit (clean upload)"

Write-Host "Adding remote..."
git remote add origin https://github.com/Shivamthakur7500/spritualweb.git

Write-Host "Pulling remote changes..."
git pull origin main --allow-unrelated-histories

Write-Host "Pushing to GitHub..."
git push -u origin main --force
