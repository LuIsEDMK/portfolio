# 📸 Guia: Como Ajustar Sua Foto de Perfil

## Opção 1: Paint (Windows) - Mais Fácil ⭐

### Passo a passo:

1. **Abra a foto no Paint**
   - Clique com botão direito na foto
   - "Abrir com" → "Paint"

2. **Redimensionar a área de trabalho**
   - Clique no botão **"Redimensionar"** (Resize)
   - Selecione **"Pixels"**
   - Mantenha a largura
   - Reduza a altura em 15% (ex: 1024 → 870)
   - **Desmarque** "Manter proporção" se necessário

3. **Salvar**
   - Arquivo → Salvar como → JPEG
   - Nome: `profile.jpg`
   - Substitua o arquivo na pasta `portfolio/assets/`

4. **Enviar para GitHub**
   ```powershell
   cd portfolio
   git add assets/profile.jpg
   git commit -m "Ajustar foto - centralizar rosto"
   git push origin master
   ```

---

## Opção 2: PowerShell (Automático)

Crie um arquivo `ajustar-minha-foto.ps1`:

```powershell
# Configuração - AJUSTE ESSES VALORES
$corteSuperior = 150    # Pixels para cortar do topo (aumente = foto desce)
$corteInferior = 0      # Pixels para cortar de baixo

# Caminhos
$origem = "W:\projetos vscode\portfolio\assets\profile.jpg"
$temp = "W:\projetos vscode\portfolio\assets\temp.jpg"

Add-Type -AssemblyName System.Drawing

# Carregar imagem
$img = [System.Drawing.Image]::FromFile($origem)
$w = $img.Width
$h = $img.Height

# Calcular nova altura
$novaAltura = $h - $corteSuperior - $corteInferior

# Criar nova imagem
$nova = New-Object System.Drawing.Bitmap($w, $novaAltura)
$g = [System.Drawing.Graphics]::FromImage($nova)

# Copiar parte da imagem
$g.DrawImage($img, 0, 0, (New-Object System.Drawing.Rectangle(0, $corteSuperior, $w, $novaAltura)), [System.Drawing.GraphicsUnit]::Pixel)
$g.Dispose()
$img.Dispose()

# Salvar
$nova.Save($temp, [System.Drawing.Imaging.ImageFormat]::Jpeg)
$nova.Dispose()

# Substituir
Remove-Item $origem
Rename-Item $temp $origem

Write-Host "✅ Foto ajustada!" -ForegroundColor Green
Write-Host "Dimensões: $w x $novaAltura"

# Enviar para GitHub
cd "W:\projetos vscode\portfolio"
git add assets/profile.jpg
git commit -m "Ajustar foto de perfil"
git push origin master
Write-Host "🚀 Enviado para GitHub!"
```

**Para usar:**
1. Edite `$corteSuperior = 150` (aumente para descer mais a foto)
2. Salve como `ajustar-minha-foto.ps1`
3. Execute no PowerShell: `.\ajustar-minha-foto.ps1`

---

## Opção 3: Editor Online (Photopea) - Gratuito

1. Acesse: https://www.photopea.com/
2. Arquivo → Abrir → Selecione sua foto
3. Ferramenta "Crop" (Cortar)
4. Arraste a seleção para baixo
5. Aperte Enter para cortar
6. Arquivo → Exportar → JPG
7. Salve como `profile.jpg` na pasta `portfolio/assets/`

---

## Opção 4: Python (Se tiver instalado)

Crie arquivo `ajustar.py`:

```python
from PIL import Image

# CONFIGURAÇÃO - Ajuste esse valor
corte_topo = 150  # Quanto cortar do topo (aumente = rosto desce)

# Abrir foto
img = Image.open("assets/profile.jpg")
w, h = img.size

# Cortar
img_cortada = img.crop((0, corte_topo, w, h))

# Salvar
img_cortada.save("assets/profile.jpg", quality=95)
print(f"✅ Foto ajustada: {w} x {h - corte_topo}")
```

**Para usar:**
```bash
cd portfolio
python ajustar.py
git add assets/profile.jpg
git commit -m "Ajustar foto"
git push origin master
```

---

## 📏 Tabela de Referência

| Seu rosto está... | Ajuste no corte_topo |
|-------------------|----------------------|
| Muito alto | 200-250 |
| Um pouco alto | 100-150 |
| Perfeito agora | 150 |
| Um pouco baixo | 50-100 |
| Muito baixo | Não corte (0) |

---

## 🎯 Dica Visual

```
Antes:                    Depois (corte_topo=150):
┌─────────────┐          ┌─────────────┐
│   CABELO    │ ← cortar │             │
│             │          │   CABELO    │
│    ROSTO    │          │             │
│             │          │    ROSTO    │ ← centralizado!
│   OMBROS    │          │             │
└─────────────┘          │   OMBROS    │
                         └─────────────┘
```

---

## ❓ Problemas Comuns

### "Não tenho Python"
→ Use **Opção 1 (Paint)** ou **Opção 3 (Photopea)**

### "Não sei usar Git"
→ Envie por email: `duduluis366@outlook.com`

### "Cortei demais"
→ Use o backup `profile-original.jpg` e tente novamente

---

## 🚀 Depois de Ajustar

Sempre envie para o GitHub:
```powershell
cd portfolio
git add assets/profile.jpg
git commit -m "Ajustar foto de perfil"
git push origin master
```

**URL do site:** https://luisedmk.github.io/portfolio/
