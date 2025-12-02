# Git Remove Large File and Push Script
Set-Location "C:\Users\shivu\OneDrive\Desktop\HTML"

Write-Host "Resetting git history to remove large file..."
# Undo the merge and the initial commit, keeping changes staged
git reset --soft HEAD~2

# Unstage the large file
Write-Host "Unstaging ram.mp4..."
git reset HEAD ram.mp4

# Create .gitignore to ignore the large file
Write-Host "Creating .gitignore..."
Add-Content -Path .gitignore -Value "ram.mp4"

# Add .gitignore
git add .gitignore

# Commit changes
Write-Host "Committing changes..."
git commit -m "Add spiritual website (excluding large video files)"

# Pull remote changes again (since we undid the merge)
Write-Host "Pulling remote changes..."
git pull origin main --allow-unrelated-histories

# Push to GitHub
Write-Host "Pushing to GitHub..."
git push -u origin main
