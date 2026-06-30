# deploy.ps1 — rebuild resumes, refresh the portfolio resume, and deploy to GitHub Pages.
# Usage:
#   .\deploy.ps1                 # default commit message
#   .\deploy.ps1 "your message"  # custom commit message
#
# Run from anywhere; paths are resolved relative to this script.

param(
    [string]$Message = "Update portfolio + refresh resume"
)

$ErrorActionPreference = "Stop"

$portfolio = $PSScriptRoot
$resume    = Join-Path (Split-Path $portfolio -Parent) "resume"
$python    = "C:/Python/python.exe"
$asset     = Join-Path $portfolio "assets\Bineetbhusan_Das_Resume.pdf"
$source    = Join-Path $resume "Resume_Universal_2page.pdf"

Write-Host "==> 1/4  Rebuilding all resumes (PDF + DOCX)..." -ForegroundColor Cyan
Push-Location $resume
& $python "build_resumes.py"
if ($LASTEXITCODE -ne 0) { Pop-Location; throw "Resume build failed." }
Pop-Location

Write-Host "==> 2/4  Refreshing portfolio resume asset..." -ForegroundColor Cyan
Copy-Item $source $asset -Force
Write-Host "    Copied: $source -> $asset"

Write-Host "==> 3/4  Staging and committing..." -ForegroundColor Cyan
git -C $portfolio add .
# commit returns non-zero when there is nothing to commit; tolerate it.
git -C $portfolio commit -m $Message
if ($LASTEXITCODE -ne 0) { Write-Host "    (Nothing new to commit, or commit skipped.)" -ForegroundColor Yellow }

Write-Host "==> 4/4  Pushing to GitHub Pages..." -ForegroundColor Cyan
# git writes normal progress to stderr; capture it so PowerShell does not flag a false error.
$pushOutput = git -C $portfolio push origin main 2>&1
$pushOutput | ForEach-Object { Write-Host "    $_" }

Write-Host ""
Write-Host "Done. Live at https://bineetbhusandas.github.io (allow ~1-2 min for GitHub Pages to rebuild)." -ForegroundColor Green
