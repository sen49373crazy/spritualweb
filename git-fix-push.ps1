# Git Fix and Push Script
Set-Location "C:\Users\shivu\OneDrive\Desktop\HTML"

Write-Host "Pulling remote changes..."
git pull origin main --allow-unrelated-histories

Write-Host "Pushing to GitHub..."
git push -u origin main
