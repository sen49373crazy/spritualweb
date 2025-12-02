# Image Download Script for Spiritual Website
Set-Location "C:\Users\shivu\OneDrive\Desktop\HTML"

# Create directory structure
Write-Host "Creating image directories..."
New-Item -ItemType Directory -Force -Path "images\mahavidyas" | Out-Null
New-Item -ItemType Directory -Force -Path "images\yantras" | Out-Null

# Download Mahavidyas Images
Write-Host "Downloading Mahavidyas images..."

$images = @(
    @{ Url = 'https://sreenivasaraos.com/wp-content/uploads/2012/10/mahavidya_kali_hk50.jpg'; Path = 'images\mahavidyas\kali.jpg' },
    @{ Url = 'https://www.religionworld.in/wp-content/uploads/2020/09/whatsapp-image-2020-09-06-at-5.03.48-pm.jpeg'; Path = 'images\mahavidyas\tara.jpg' },
    @{ Url = 'https://static1.squarespace.com/static/5e7fce1edc34fb6814d4c1f7/610983492531ee5beb2cd16b/6155fcc0c521fb75f50aacaa/1738605111765/tripurasundari-MV2.jpg?format=1500w'; Path = 'images\mahavidyas\tripura-sundari.jpg' },
    @{ Url = 'https://m.media-amazon.com/images/I/61p1cSV+d-L.jpg'; Path = 'images\mahavidyas\bhuvaneshwari.jpg' },
    @{ Url = 'https://cdn.exoticindia.com/images/products/original/hindu/mahavidya_bhairavi_hk53.jpg'; Path = 'images\mahavidyas\bhairavi.jpg' },
    @{ Url = 'https://upload.wikimedia.org/wikipedia/commons/1/12/Chinnamasta_rajasthan.png'; Path = 'images\mahavidyas\chinnamasta.png' },
    @{ Url = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROdgDHtKY1CPbZaDnX_ZS9_jVhvT2D3UtCpg&s'; Path = 'images\mahavidyas\dhumavati.jpg' },
    @{ Url = 'https://www.drikpanchang.com/images/goddesses/parvati/dasha-mahavidya/1080x720/goddess_bagalamukhi.jpg'; Path = 'images\mahavidyas\bagalamukhi.jpg' },
    @{ Url = 'https://media.gettyimages.com/id/1354440215/photo/matangi-one-of-the-ten-hindu-mahavidyas-or-tantric-goddesses-an-aspect-of-devi-the-divine.jpg?s=1024x1024&w=gi&k=20&c=VE4lXUY3tDmnBVX9Uwz9VHIcVkBWg5lRZkW3wtVQ_gU='; Path = 'images\mahavidyas\matangi.jpg' },
    @{ Url = 'https://i0.wp.com/wordzz.com/wp-content/uploads/2023/06/Kamala-Mahavidyas.jpeg?resize=461%2C640&ssl=1'; Path = 'images\mahavidyas\kamala.jpg' }
)

foreach ($img in $images) {
    try {
        Invoke-WebRequest -Uri $img.Url -OutFile $img.Path
        Write-Host "Downloaded $($img.Path)"
    } catch {
        Write-Host "Failed to download $($img.Path)"
    }
}

# Download Yantra Images
Write-Host "Downloading Yantra images..."

$yantras = @(
    @{ Url = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2W_Wf2kB04-mZ0MZkiISZi5vhIQM-nv6syQ&s'; Path = 'images\yantras\sri-yantra.jpg' },
    @{ Url = 'https://www.drikpanchang.com/images/yantra/goddesses/mahavidya/kali/400x400/xkali_yantra.jpg.pagespeed.ic.Uot6bB3IjB.jpg'; Path = 'images\yantras\kali-yantra.jpg' },
    @{ Url = 'https://www.ompoojashop.com/image/cache/yantra/ganpati-yantrama-2-1000x1000.jpg'; Path = 'images\yantras\ganesha-yantra.jpg' },
    @{ Url = 'https://m.media-amazon.com/images/I/61w1T-Gnn1L._AC_UF894,1000_QL80_.jpg'; Path = 'images\yantras\tara-yantra.jpg' },
    @{ Url = 'https://cdn.shopaccino.com/rudraksha-center/products/durgagp-rc-306440_l.jpg?v=523'; Path = 'images\yantras\durga-yantra.jpg' },
    @{ Url = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyv61AIpBS7sbyF41kUEayAolNSNxvPfDBiA&s'; Path = 'images\yantras\saraswati-yantra.jpg' }
)

foreach ($yantra in $yantras) {
    try {
        Invoke-WebRequest -Uri $yantra.Url -OutFile $yantra.Path
        Write-Host "Downloaded $($yantra.Path)"
    } catch {
        Write-Host "Failed to download $($yantra.Path)"
    }
}

Write-Host "Image download complete!"
