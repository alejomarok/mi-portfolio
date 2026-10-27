"""Generate bilingual, selectable-text resumes and matching plain-text exports.

Run with the bundled Python runtime (reportlab, pypdf, Pillow).
The source intentionally has no photos, tables, columns, headers, or footers.
"""
from pathlib import Path
from html import escape
import json
from reportlab.lib import colors
from reportlab.lib.enums import TA_LEFT
from reportlab.lib.pagesizes import letter
from reportlab.lib.styles import ParagraphStyle
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.platypus import SimpleDocTemplate, Paragraph, PageBreak, KeepTogether
from pypdf import PdfReader

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "public" / "cv"
OUT.mkdir(parents=True, exist_ok=True)
CONTENT = json.loads((ROOT / "scripts" / "resume-content.json").read_text(encoding="utf-8"))
FONT_DIR = Path("C:/Windows/Fonts")
pdfmetrics.registerFont(TTFont("ResumeSans", str(FONT_DIR / "arial.ttf")))
pdfmetrics.registerFont(TTFont("ResumeSansBold", str(FONT_DIR / "arialbd.ttf")))
pdfmetrics.registerFontFamily("ResumeSans", normal="ResumeSans", bold="ResumeSansBold")
body = ParagraphStyle("Body", fontName="ResumeSans", fontSize=11, leading=13.2,
                      textColor=colors.black, alignment=TA_LEFT, spaceAfter=3)
styles = {
    "body": body,
    "name": ParagraphStyle("Name", parent=body, fontName="ResumeSansBold", fontSize=23, leading=27, spaceAfter=5),
    "role": ParagraphStyle("Role", parent=body, fontName="ResumeSansBold", fontSize=12, leading=16, spaceAfter=8),
    "contact": ParagraphStyle("Contact", parent=body, fontSize=10.5, leading=14, spaceAfter=2),
    "section": ParagraphStyle("Section", parent=body, fontName="ResumeSansBold", fontSize=12, leading=16,
                              spaceBefore=13, spaceAfter=7, keepWithNext=True),
    "entry": ParagraphStyle("Entry", parent=body, fontName="ResumeSansBold", spaceBefore=7, spaceAfter=3, keepWithNext=True),
    "meta": ParagraphStyle("Meta", parent=body, fontSize=10.5, leading=14, spaceAfter=5, keepWithNext=True),
    "bullet": ParagraphStyle("Bullet", parent=body, leftIndent=11, firstLineIndent=-8, spaceAfter=3),
}

def p(text, style="body"):
    return Paragraph(escape(text), styles[style])

def labeled(label, value):
    return Paragraph(f"<b>{escape(label)}:</b> {escape(value)}", body)

for language, content in CONTENT.items():
    target = OUT / f"alejo-marco-fullstack-{language}.pdf"
    doc = SimpleDocTemplate(str(target), pagesize=letter, topMargin=42, bottomMargin=42,
                            leftMargin=46, rightMargin=46, title=f"Alejo Marcó - {content['role']}",
                            author="Alejo Marcó", subject=content["summary"], pageCompression=1)
    story = [p("Alejo Marcó", "name"), p(content["role"], "role")]
    plain = ["Alejo Marcó", content["role"]]
    for line in content["contact"]:
        story.append(p(line, "contact"))
        plain.append(line)
    story.extend([p(content["summary_title"], "section"), p(content["summary"])])
    plain.extend(["", content["summary_title"], content["summary"]])
    story.append(p(content["experience_title"], "section"))
    plain.extend(["", content["experience_title"]])
    for job in content["experience"]:
        story.extend([p(job["title"], "entry"), p(job["period"], "meta")])
        plain.extend([job["title"], job["period"]])
        for item in job["items"]:
            story.append(p(f"- {item}", "bullet"))
            plain.append(f"- {item}")
    story.append(p(content["skills_title"], "section"))
    plain.extend(["", content["skills_title"]])
    for label, value in content["skills"]:
        story.append(labeled(label, value))
        plain.append(f"{label}: {value}")
    story.extend([PageBreak(), p(content["projects_title"], "section")])
    plain.extend(["", content["projects_title"]])
    for project in content["projects"]:
        block = [p(project["name"], "entry"), p(project["stack"], "meta")]
        block.extend(p(f"- {item}", "bullet") for item in project["items"])
        story.append(KeepTogether(block))
        plain.extend([project["name"], project["stack"]] + [f"- {item}" for item in project["items"]])
    for key in ["education", "other", "languages"]:
        section = content[key]
        story.append(p(section["title"], "section"))
        plain.extend(["", section["title"]])
        for item in section["items"]:
            story.append(p(item))
            plain.append(item)
    doc.build(story)
    text_path = target.with_suffix(".txt")
    text_path.write_text("\n".join(plain) + "\n", encoding="utf-8")
    reader = PdfReader(target)
    extracted = "\n".join(page.extract_text() for page in reader.pages)
    required = ["Alejo Marcó", "Oracle", "PL/SQL", "PostgreSQL", "Node.js", "React", "Next.js", "Codex", "Claude", "AutoGlobal", "Chaioboutique", "GAMAAN", "Pactum"]
    assert len(reader.pages) == 2, f"{language}: expected 2 pages, got {len(reader.pages)}"
    assert all(token in extracted for token in required), f"{language}: missing expected profile text"
    assert extracted.index("AutoGlobal") < extracted.index("Chaioboutique") < extracted.index("GAMAAN") < extracted.index("Pactum"), "Project reading order"
    assert "\ufffd" not in extracted, "Broken character mapping"
    assert target.stat().st_size < 2_500_000
    assert not any(page.images for page in reader.pages), "Resume must remain text-based"
    print(f"{language}: {len(reader.pages)} pages, {target.stat().st_size} bytes, text checks passed -> {target}")
