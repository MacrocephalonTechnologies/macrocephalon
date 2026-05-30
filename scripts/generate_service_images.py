from pathlib import Path
import math

from PIL import Image, ImageDraw, ImageFont, ImageFilter


OUT_DIR = Path("public/services")
OUT_DIR.mkdir(parents=True, exist_ok=True)

SERVICES = [
    ("web-development", "Web Development", "Responsive apps, portals, and modern web systems"),
    ("custom-software", "Custom Software", "Business tools, automation, and enterprise workflows"),
    ("api-development", "API Development", "Secure integrations, REST, GraphQL, and webhook systems"),
    ("saas-products", "SaaS Products", "Cloud platforms, subscriptions, and scalable product backends"),
    ("ui-ux-design", "UI/UX Design", "Design systems, prototypes, and polished product interfaces"),
    ("database-design", "Database Design", "Relational, NoSQL, cloud data, and performance tuning"),
    ("ai-ml-models", "AI/ML Models", "Prediction, classification, training, and model optimization"),
    ("llm-integration", "LLM Integration", "RAG systems, assistants, and language model workflows"),
    ("computer-vision", "Computer Vision", "Detection, recognition, OCR, and visual analytics"),
    ("nlp-chatbots", "NLP & Chatbots", "Conversational automation, text analysis, and support bots"),
    ("ml-pipelines", "ML Pipelines", "Data preparation, training, deployment, and monitoring"),
    ("edge-ai", "Edge AI", "TinyML, embedded inference, and optimized device intelligence"),
    ("academic-projects", "Academic Projects", "Diploma to PhD support with complete documentation"),
    ("research-publishing", "Research & Publishing", "Implementation, paper writing, and publication support"),
    ("hardware-projects", "Hardware Projects", "Embedded boards, circuits, RF, and instrumentation"),
    ("matlab-projects", "MATLAB Projects", "Simulation, signal processing, control, and communications"),
    ("iot-projects", "IoT Projects", "Sensors, edge devices, cloud data, and connected systems"),
    ("all-branches", "All Branches", "CSE, AI/ML, ECE, EE, Mechanical, Robotics, and Civil"),
]


def font(size: int, bold: bool = False):
    candidates = [
        "C:/Windows/Fonts/segoeuib.ttf" if bold else "C:/Windows/Fonts/segoeui.ttf",
        "C:/Windows/Fonts/arialbd.ttf" if bold else "C:/Windows/Fonts/arial.ttf",
    ]
    for candidate in candidates:
        if Path(candidate).exists():
            return ImageFont.truetype(candidate, size)
    return ImageFont.load_default()


TITLE_FONT = font(56, True)
SUBTITLE_FONT = font(25)
TAG_FONT = font(22, True)
SMALL_FONT = font(18, True)

GOLD = (201, 168, 76, 230)
MOLTEN = (217, 181, 90, 230)
ORANGE = (255, 122, 24, 235)
EMBER = (255, 90, 31, 230)
PANEL = (13, 17, 23, 210)
PANEL_2 = (22, 27, 34, 220)
MUTED = (139, 148, 158, 230)
WHITE = (240, 246, 252, 255)


def gradient_background(width, height):
    img = Image.new("RGB", (width, height), "#0d1117")
    px = img.load()
    for y in range(height):
        for x in range(width):
            tx = x / width
            ty = y / height
            warm = max(0, 1 - math.hypot(tx - 0.8, ty - 0.18) * 1.7)
            lava = max(0, 1 - math.hypot(tx - 0.15, ty - 0.85) * 1.45)
            px[x, y] = (
                min(13 + int(55 * warm) + int(55 * lava), 255),
                min(17 + int(27 * warm) + int(20 * lava), 255),
                min(23 + int(4 * warm), 255),
            )
    return img.convert("RGBA")


def add_base(draw, width, height):
    for x in range(0, width, 82):
        draw.line((x, 0, x, height), fill=(201, 168, 76, 25), width=1)
    for y in range(0, height, 76):
        draw.line((0, y, width, y), fill=(201, 168, 76, 22), width=1)
    for x in range(-height, width, 125):
        draw.line((x, 0, x + height, height), fill=(217, 181, 90, 22), width=1)
    draw.rounded_rectangle((24, 24, width - 24, height - 24), radius=34, outline=(201, 168, 76, 70), width=2)


def glow(draw, x, y, radius, color):
    for i in range(8, 0, -1):
        alpha = int(color[3] * (i / 8) * 0.09)
        r = radius * i / 3
        draw.ellipse((x - r, y - r, x + r, y + r), fill=(color[0], color[1], color[2], alpha))


def text_block(draw, title, subtitle):
    draw.rounded_rectangle((46, 44, 310, 88), radius=22, fill=(0, 0, 0, 125), outline=(201, 168, 76, 85), width=2)
    draw.text((66, 55), "MACROCEPHALON", font=TAG_FONT, fill=MOLTEN)
    draw.text((60, 360), title, font=TITLE_FONT, fill=WHITE)
    draw.text((61, 429), subtitle, font=SUBTITLE_FONT, fill=MUTED)
    draw.line((60, 492, 520, 492), fill=ORANGE, width=4)


def laptop(draw, x, y, w, h, title=""):
    draw.rounded_rectangle((x, y, x + w, y + h), radius=18, fill=PANEL_2, outline=GOLD, width=3)
    draw.rectangle((x + 24, y + 30, x + w - 24, y + h - 36), fill=(7, 10, 15, 255))
    for i in range(7):
        yy = y + 55 + i * 24
        draw.line((x + 50, yy, x + 180 + i * 18, yy), fill=ORANGE if i % 2 else GOLD, width=3)
    draw.rounded_rectangle((x - 36, y + h + 10, x + w + 36, y + h + 40), radius=12, fill=(7, 10, 15, 255), outline=(201, 168, 76, 110), width=2)
    if title:
        draw.text((x + 42, y + h - 26), title, font=SMALL_FONT, fill=MOLTEN)


def phone(draw, x, y, w, h):
    draw.rounded_rectangle((x, y, x + w, y + h), radius=28, fill=PANEL, outline=ORANGE, width=3)
    draw.rectangle((x + 18, y + 40, x + w - 18, y + h - 36), fill=(9, 12, 17, 255))
    draw.ellipse((x + w // 2 - 7, y + h - 25, x + w // 2 + 7, y + h - 11), outline=GOLD, width=2)


def cloud(draw, x, y):
    draw.ellipse((x, y + 45, x + 95, y + 135), fill=PANEL_2, outline=GOLD, width=3)
    draw.ellipse((x + 55, y, x + 170, y + 120), fill=PANEL_2, outline=GOLD, width=3)
    draw.ellipse((x + 135, y + 45, x + 240, y + 135), fill=PANEL_2, outline=GOLD, width=3)
    draw.rectangle((x + 45, y + 80, x + 205, y + 135), fill=PANEL_2)
    draw.arc((x, y + 45, x + 95, y + 135), 90, 260, fill=GOLD, width=3)
    draw.arc((x + 55, y, x + 170, y + 120), 180, 350, fill=GOLD, width=3)
    draw.arc((x + 135, y + 45, x + 240, y + 135), 280, 90, fill=GOLD, width=3)


def database(draw, x, y):
    for i in range(3):
        yy = y + i * 78
        draw.ellipse((x, yy, x + 260, yy + 70), fill=PANEL_2, outline=GOLD, width=3)
        draw.rectangle((x, yy + 35, x + 260, yy + 95), fill=PANEL_2, outline=GOLD, width=3)
        draw.ellipse((x, yy + 60, x + 260, yy + 130), fill=PANEL_2, outline=ORANGE, width=3)


def circuit_board(draw, x, y, w, h):
    draw.rounded_rectangle((x, y, x + w, y + h), radius=24, fill=(8, 32, 26, 245), outline=GOLD, width=4)
    for i in range(8):
        px = x + 35 + i * 55
        draw.line((px, y + 40, px, y + h - 45), fill=(201, 168, 76, 150), width=2)
    for i in range(5):
        py = y + 45 + i * 50
        draw.line((x + 35, py, x + w - 35, py), fill=(255, 122, 24, 125), width=2)
    draw.rounded_rectangle((x + w // 2 - 75, y + h // 2 - 60, x + w // 2 + 75, y + h // 2 + 60), radius=12, fill=(14, 17, 23, 255), outline=ORANGE, width=3)
    for i in range(18):
        draw.rectangle((x + w // 2 - 105 + i * 12, y + h // 2 - 75, x + w // 2 - 100 + i * 12, y + h // 2 - 61), fill=GOLD)
        draw.rectangle((x + w // 2 - 105 + i * 12, y + h // 2 + 61, x + w // 2 - 100 + i * 12, y + h // 2 + 75), fill=GOLD)


def book_stack(draw, x, y):
    colors = [ORANGE, GOLD, MOLTEN]
    for i in range(4):
        yy = y + i * 52
        draw.rounded_rectangle((x + i * 18, yy, x + 310 + i * 18, yy + 42), radius=8, fill=PANEL_2, outline=colors[i % 3], width=3)
        draw.line((x + 60 + i * 18, yy + 8, x + 60 + i * 18, yy + 34), fill=colors[i % 3], width=2)
    draw.polygon((x + 380, y + 8, x + 520, y + 64, x + 440, y + 114, x + 300, y + 58), fill=PANEL_2, outline=GOLD)
    draw.rectangle((x + 362, y + 69, x + 462, y + 84), fill=GOLD)
    draw.line((x + 440, y + 114, x + 440, y + 165), fill=ORANGE, width=4)


def document_stack(draw, x, y):
    for i in range(4):
        dx = i * 34
        dy = i * 22
        draw.rounded_rectangle((x + dx, y + dy, x + 250 + dx, y + 330 + dy), radius=12, fill=(237, 233, 220, 235), outline=GOLD, width=3)
        for j in range(7):
            yy = y + dy + 60 + j * 28
            draw.line((x + dx + 32, yy, x + dx + 210, yy), fill=(36, 38, 44, 180), width=3)
        draw.rectangle((x + dx + 32, y + dy + 245, x + dx + 190, y + dy + 286), fill=(255, 122, 24, 170))
    draw.text((x + 290, y + 120), "IEEE", font=TITLE_FONT, fill=ORANGE)
    draw.text((x + 294, y + 188), "Journal", font=SUBTITLE_FONT, fill=MOLTEN)


def chart(draw, x, y):
    draw.rounded_rectangle((x, y, x + 430, y + 270), radius=18, fill=PANEL_2, outline=GOLD, width=3)
    draw.line((x + 45, y + 220, x + 390, y + 220), fill=MUTED, width=2)
    draw.line((x + 45, y + 35, x + 45, y + 220), fill=MUTED, width=2)
    last = None
    for i in range(12):
        px = x + 55 + i * 28
        py = y + 135 + int(math.sin(i * 0.9) * 65)
        if last:
            draw.line((last[0], last[1], px, py), fill=ORANGE, width=4)
        draw.ellipse((px - 5, py - 5, px + 5, py + 5), fill=GOLD)
        last = (px, py)


def nodes(draw, cx, cy, radius=145, count=10):
    points = []
    for i in range(count):
        angle = math.pi * 2 * i / count
        px = cx + int(math.cos(angle) * radius)
        py = cy + int(math.sin(angle) * radius * 0.7)
        points.append((px, py))
        draw.line((cx, cy, px, py), fill=(255, 122, 24, 110), width=3)
    for px, py in points:
        draw.ellipse((px - 18, py - 18, px + 18, py + 18), fill=PANEL_2, outline=GOLD, width=3)
    draw.ellipse((cx - 38, cy - 38, cx + 38, cy + 38), fill=PANEL_2, outline=ORANGE, width=4)


def service_scene(slug, draw):
    if slug == "web-development":
        laptop(draw, 650, 145, 390, 230, "WEB")
        phone(draw, 920, 250, 92, 170)
    elif slug == "custom-software":
        laptop(draw, 620, 130, 410, 245, "ERP")
        for x, y in [(850, 110), (1030, 210), (725, 420)]:
            draw.ellipse((x - 35, y - 35, x + 35, y + 35), outline=ORANGE, width=4)
            draw.line((815, 265, x, y), fill=GOLD, width=3)
    elif slug == "api-development":
        nodes(draw, 840, 300, 170, 8)
        draw.text((790, 284), "API", font=TITLE_FONT, fill=ORANGE)
    elif slug == "saas-products":
        cloud(draw, 720, 155)
        laptop(draw, 660, 310, 420, 160, "SaaS")
    elif slug == "ui-ux-design":
        for i, (x, y) in enumerate([(650, 130), (840, 150), (710, 330)]):
            draw.rounded_rectangle((x, y, x + 250, y + 145), radius=18, fill=PANEL_2, outline=GOLD if i % 2 else ORANGE, width=3)
            draw.rectangle((x + 25, y + 25, x + 100, y + 62), fill=(255, 122, 24, 130))
            draw.line((x + 25, y + 82, x + 210, y + 82), fill=MUTED, width=4)
            draw.line((x + 25, y + 110, x + 175, y + 110), fill=MUTED, width=4)
    elif slug == "database-design":
        database(draw, 730, 145)
    elif slug == "ai-ml-models":
        nodes(draw, 850, 300, 190, 12)
        draw.arc((760, 190, 940, 410), 45, 315, fill=ORANGE, width=6)
    elif slug == "llm-integration":
        for i, (x, y, w) in enumerate([(660, 150, 330), (760, 255, 310), (695, 360, 360)]):
            draw.rounded_rectangle((x, y, x + w, y + 78), radius=24, fill=PANEL_2, outline=ORANGE if i % 2 else GOLD, width=3)
            draw.line((x + 32, y + 30, x + w - 36, y + 30), fill=MUTED, width=4)
            draw.line((x + 32, y + 52, x + w - 90, y + 52), fill=MUTED, width=4)
    elif slug == "computer-vision":
        draw.rounded_rectangle((670, 155, 1065, 430), radius=24, fill=PANEL_2, outline=GOLD, width=4)
        for box in [(710, 205, 850, 340), (890, 235, 1018, 370)]:
            draw.rectangle(box, outline=ORANGE, width=5)
        draw.ellipse((800, 250, 940, 350), outline=MOLTEN, width=5)
        draw.ellipse((845, 285, 895, 335), fill=ORANGE)
    elif slug == "nlp-chatbots":
        draw.rounded_rectangle((660, 160, 910, 270), radius=26, fill=PANEL_2, outline=GOLD, width=3)
        draw.rounded_rectangle((790, 305, 1080, 430), radius=26, fill=PANEL_2, outline=ORANGE, width=3)
        draw.ellipse((650, 345, 730, 425), outline=GOLD, width=4)
        draw.arc((670, 372, 710, 410), 0, 180, fill=ORANGE, width=4)
        for x in [715, 755, 835, 875]:
            draw.ellipse((x, 198, x + 18, 216), fill=ORANGE)
    elif slug == "ml-pipelines":
        labels = ["DATA", "TRAIN", "MODEL", "DEPLOY"]
        for i, label in enumerate(labels):
            x = 620 + i * 135
            draw.rounded_rectangle((x, 245, x + 105, 330), radius=16, fill=PANEL_2, outline=GOLD, width=3)
            draw.text((x + 15, 274), label, font=SMALL_FONT, fill=MOLTEN)
            if i < len(labels) - 1:
                draw.line((x + 110, 288, x + 132, 288), fill=ORANGE, width=5)
                draw.polygon((x + 132, 288, x + 120, 278, x + 120, 298), fill=ORANGE)
    elif slug == "edge-ai":
        circuit_board(draw, 655, 145, 420, 310)
        draw.text((790, 282), "AI", font=TITLE_FONT, fill=ORANGE)
    elif slug == "academic-projects":
        book_stack(draw, 610, 185)
    elif slug == "research-publishing":
        document_stack(draw, 620, 120)
    elif slug == "hardware-projects":
        circuit_board(draw, 650, 145, 430, 300)
        draw.line((680, 500, 1040, 500), fill=ORANGE, width=4)
        draw.ellipse((745, 478, 790, 523), outline=GOLD, width=4)
    elif slug == "matlab-projects":
        chart(draw, 650, 175)
        draw.text((750, 470), "SIMULATION", font=TAG_FONT, fill=MOLTEN)
    elif slug == "iot-projects":
        nodes(draw, 850, 305, 185, 9)
        for x, y in [(675, 230), (1018, 245), (790, 430), (955, 420)]:
            draw.rounded_rectangle((x - 30, y - 22, x + 30, y + 22), radius=8, fill=PANEL_2, outline=ORANGE, width=3)
    elif slug == "all-branches":
        labels = ["CSE", "AI", "ECE", "EE", "MECH", "CIVIL"]
        for i, label in enumerate(labels):
            angle = math.pi * 2 * i / len(labels)
            x = 850 + int(math.cos(angle) * 180)
            y = 300 + int(math.sin(angle) * 115)
            draw.rounded_rectangle((x - 48, y - 28, x + 48, y + 28), radius=14, fill=PANEL_2, outline=GOLD if i % 2 else ORANGE, width=3)
            draw.text((x - 30, y - 12), label, font=SMALL_FONT, fill=WHITE)
            draw.line((850, 300, x, y), fill=(255, 122, 24, 100), width=3)


def create_image(slug, title, subtitle):
    width, height = 1200, 640
    img = gradient_background(width, height)
    overlay = Image.new("RGBA", (width, height), (0, 0, 0, 0))
    draw = ImageDraw.Draw(overlay, "RGBA")
    add_base(draw, width, height)
    glow(draw, 880, 290, 230, ORANGE)
    service_scene(slug, draw)
    overlay = overlay.filter(ImageFilter.GaussianBlur(0.1))
    img.alpha_composite(overlay)

    shade = Image.new("RGBA", (width, height), (0, 0, 0, 0))
    sdraw = ImageDraw.Draw(shade, "RGBA")
    sdraw.rectangle((0, 0, 600, height), fill=(0, 0, 0, 75))
    img.alpha_composite(shade)

    draw = ImageDraw.Draw(img, "RGBA")
    text_block(draw, title, subtitle)
    img.convert("RGB").save(OUT_DIR / f"{slug}.png", quality=95)


for service in SERVICES:
    create_image(*service)

print(f"Generated {len(SERVICES)} relevant service images in {OUT_DIR}")
