from PIL import Image, ImageDraw, ImageFont, ImageFilter
import os
os.makedirs('public/og', exist_ok=True)
base = Image.open('public/img/aion2-header.jpg').convert('RGB')
F = '/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf'
cards = {'default':'Aion 2 Builds','home':'Aion 2 Builds','classes':'Aion 2 Classes','updates':'Aion 2 Update Log',
 'guide-beginner-guide':'Aion 2 Beginner Guide','guide-server-transfer':'Aion 2 Server Transfer','guide-launch-rewards':'Aion 2 Launch Rewards'}
for c in ['chanter','cleric','ranger','sorcerer','gladiator','templar','assassin','spiritmaster']:
    cards['class-'+c] = f'Aion 2 {c.capitalize()}'
for slug, title in cards.items():
    w, h = 1200, 630
    bg = base.resize((int(base.width*h/base.height), h)).crop((0,0,w,h)) if base.width*h/base.height >= w else base.resize((w, int(base.height*w/base.width)))
    bg = bg.crop((0,0,w,h)).filter(ImageFilter.GaussianBlur(2))
    ov = Image.new('RGBA',(w,h),(10,12,30,150)); img = Image.alpha_composite(bg.convert('RGBA'), ov)
    d = ImageDraw.Draw(img)
    d.text((70,240), title, font=ImageFont.truetype(F,78), fill='white')
    sub = 'Build notes' if slug.startswith('class-') else ('Guide' if slug.startswith('guide-') else 'aion2builds.wiki')
    d.text((72,350), sub, font=ImageFont.truetype(F,40), fill=(242,193,78))
    d.text((72,560), 'aion2builds.wiki  ·  fan guide, not affiliated with NC', font=ImageFont.truetype(F,26), fill=(220,220,230))
    img.convert('RGB').save(f'public/og/{slug}.png', optimize=True)
print(len(cards))
