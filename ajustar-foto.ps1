# Ajustar Foto de Perfil - Script Interativo
# Configuração fácil de cortes

param(
    [int]$CorteTopo = 150,      # Pixels para cortar do topo (aumente = foto desce)
    [int]$CorteInferior = 0,    # Pixels para cortar de baixo
    [switch]$AutoPush = $false  # Enviar automaticamente para GitHub
)

Add-Type -AssemblyName System.Drawing

Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  AJUSTAR FOTO DE PERFIL" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Verificar se existe backup original
$origem = ".\assets\profile.jpg"
$backup = ".\assets\profile-original.jpg"
$temp = ".\assets\temp.jpg"

if (-not (Test-Path $backup)) {
    Write-Host "Criando backup da foto original..." -ForegroundColor Yellow
    Copy-Item $origem $backup
}

# Carregar imagem
try {
    $img = [System.Drawing.Image]::FromFile($origem)
} catch {
    Write-Host "❌ Erro ao carregar foto: $origem" -ForegroundColor Red
    exit 1
}

$w = $img.Width
$h = $img.Height

Write-Host "📐 Dimensões atuais: $w x $h" -ForegroundColor Gray
Write-Host "✂️  Corte do topo: $CorteTopo pixels" -ForegroundColor Gray
Write-Host ""

# Calcular nova altura
$novaAltura = $h - $CorteTopo - $CorteInferior

if ($novaAltura -lt 100) {
    Write-Host "❌ Erro: Corte muito grande! Altura resultante seria: $novaAltura" -ForegroundColor Red
    $img.Dispose()
    exit 1
}

# Criar nova imagem
$nova = New-Object System.Drawing.Bitmap($w, $novaAltura)
$g = [System.Drawing.Graphics]::FromImage($nova)

# Copiar parte da imagem
$srcRect = New-Object System.Drawing.Rectangle(0, $CorteTopo, $w, $novaAltura)
$dstRect = New-Object System.Drawing.Rectangle(0, 0, $w, $novaAltura)
$g.DrawImage($img, $dstRect, $srcRect, [System.Drawing.GraphicsUnit]::Pixel)

# Limpar
$g.Dispose()
$img.Dispose()

# Salvar em arquivo temporário
$nova.Save($temp, [System.Drawing.Imaging.ImageFormat]::Jpeg)
$nova.Dispose()

# Substituir original
Remove-Item $origem -Force
Rename-Item $temp $origem

Write-Host "✅ Foto ajustada com sucesso!" -ForegroundColor Green
Write-Host "   Novas dimensões: $w x $novaAltura" -ForegroundColor Gray
Write-Host ""

# Perguntar se quer enviar para GitHub
if (-not $AutoPush) {
    $resposta = Read-Host "Deseja enviar para o GitHub agora? (S/N)"
    $AutoPush = ($resposta -eq 'S' -or $resposta -eq 's')
}

if ($AutoPush) {
    Write-Host "Enviando para GitHub..." -ForegroundColor Yellow
    
    git add assets/profile.jpg
    git commit -m "Adjust profile image - crop top $CorteTopo pixels"
    git push origin master
    
    Write-Host ""
    Write-Host "🚀 Enviado com sucesso!" -ForegroundColor Green
    Write-Host "🌐 Site: https://luisedmk.github.io/portfolio/" -ForegroundColor Cyan
    Write-Host ""
    Write-Host "Aguarde 2-5 minutos para as alterações aparecerem." -ForegroundColor Yellow
} else {
    Write-Host ""
    Write-Host "Para enviar manualmente depois:" -ForegroundColor Yellow
    Write-Host "  git add assets/profile.jpg" -ForegroundColor White
    Write-Host "  git commit -m 'Adjust profile image'" -ForegroundColor White
    Write-Host "  git push origin master" -ForegroundColor White
}

Write-Host ""
Read-Host "Pressione ENTER para sair"
