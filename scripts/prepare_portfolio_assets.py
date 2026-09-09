"""Prepare supplied figures for the portfolio."""
from pathlib import Path
from PIL import Image, ImageDraw, ImageFont
ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / 'frontend_react/public/projects'
OUT.mkdir(parents=True, exist_ok=True)
with Image.open(ROOT / 'images/fire_watch/3.png') as source:
    source.crop((0, 76, source.width, source.height)).save(OUT / 'fire-watch-fuel.webp', quality=90, method=6)
with Image.open(ROOT / 'images/cloudnet/1.png') as source:
    source.convert('RGB').save(OUT / 'cloudnet-results.webp', quality=95, method=6)
with Image.open(OUT / 'cloudnet-architecture.png') as source:
    source.convert('RGB').save(OUT / 'cloudnet-architecture.webp', lossless=True, method=6)
# Exact, code-rendered typography for the social preview.
card = Image.new('RGB', (1200, 630), '#f7f8f4')
draw = ImageDraw.Draw(card)
regular = 'C:/Windows/Fonts/arial.ttf'
bold = 'C:/Windows/Fonts/arialbd.ttf'
draw.line((64, 64, 1136, 64), fill='#152220', width=2)
draw.rectangle((1080, 100, 1136, 156), fill='#c4ff5c')
draw.text((64, 110), 'HARRY WANG', font=ImageFont.truetype(bold, 25), fill='#456254')
draw.text((60, 196), 'Software Developer', font=ImageFont.truetype(bold, 86), fill='#152220')
draw.text((64, 324), 'Web applications. Generative AI.', font=ImageFont.truetype(regular, 42), fill='#456254')
draw.line((64, 430, 760, 430), fill='#9acd42', width=5)
draw.text((64, 468), 'React  /  TypeScript  /  Python', font=ImageFont.truetype(regular, 30), fill='#152220')
draw.text((64, 540), 'Perth, Australia  ·  UWA Master of Information Technology', font=ImageFont.truetype(regular, 24), fill='#456254')
card.save(ROOT / 'frontend_react/public/social-card.png', optimize=True)
for path in OUT.glob('*.webp'):
    print(path.name, path.stat().st_size)
