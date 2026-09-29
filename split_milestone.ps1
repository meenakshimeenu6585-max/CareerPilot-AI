$ErrorActionPreference = 'Stop'

# 1. index.html
$linesHtml = Get-Content -Path 'index.html.later_backup'
$part1Html = $linesHtml[0..762]
$part2Html = $linesHtml[1712..($linesHtml.Count - 1)]
$cleanHtml = ($part1Html + $part2Html) -join "`r`n"
[System.IO.File]::WriteAllText((Join-Path (Get-Location) 'index.html'), $cleanHtml, [System.Text.Encoding]::UTF8)

# 2. styles.css
$linesCss = Get-Content -Path 'styles.css.later_backup'
$part1Css = $linesCss[0..1332] # Variables, Reset, Splash, Landing, Auth
$part2Css = $linesCss[2305..2374] # Toast styles
$part3Css = $linesCss[2375..2454] # Responsive queries for Landing & Auth
$part4Css = $linesCss[2496..2521] # Responsive queries max-width 576px
$cleanCss = ($part1Css + $part2Css + $part3Css + $part4Css) -join "`r`n"
[System.IO.File]::WriteAllText((Join-Path (Get-Location) 'styles.css'), $cleanCss, [System.Text.Encoding]::UTF8)

# 3. app.js
$linesJs = Get-Content -Path 'app.js.later_backup'
$toastJs = $linesJs[225..266] # showToast and isValidEmail
$routerJs = $linesJs[267..470] # Router, splash timer, toggleAuthView, initPasswordToggles, initFormSubmissions, initSocialRedirection, initLandingInteractions

$footerJs = @'

// Initialization
let splashCompleted = false;
let splashTimer = null;

document.addEventListener('DOMContentLoaded', () => {
  window.addEventListener('hashchange', router);

  if (!window.location.hash) {
    window.location.hash = '#splash';
  } else {
    splashCompleted = true;
    router();
  }

  router();

  // Load interactions
  initPasswordToggles();
  initFormSubmissions();
  initSocialRedirection();
  initLandingInteractions();
});
'@

$cleanJs = ($toastJs + $routerJs) -join "`r`n"
$cleanJs = $cleanJs + "`r`n" + $footerJs
[System.IO.File]::WriteAllText((Join-Path (Get-Location) 'app.js'), $cleanJs, [System.Text.Encoding]::UTF8)

Write-Host "SUCCESS: Milestone 1 files prepared."
