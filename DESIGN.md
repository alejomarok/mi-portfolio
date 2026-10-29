# Alejo Marcó

A portfolio for Full Stack hiring, grounded in business systems, databases, and end-to-end web products. Prove the work through real projects, and make conversation and the CV easy to reach.

## Visual system

- Archivo variable, hosted locally. A contained, title-case name uses weight 700 and normal width. Body weight 400, 18px; mobile body stays at 18px.
- Ground `#f7f7f7`, bottle ink `#0d2a1c`, yellow action `#f6e016`. Use project colors only inside that project’s showcase.
- Equal responsive outer margins, 20–40px. Large typography and actual product images establish hierarchy.
- Square surfaces and buttons. Separation through space and flat tones. No decorative gradients, glass, or resting shadows.
- Hero pairs a restrained name with Alejo’s actual portrait on a circular background. The crop must remain a true circle at every width. ReactBits Waves covers the entire hero behind its content, outside the portrait. Background, text, controls, and wave contrast follow light/dark mode. Keep the name at 52–104px on desktop and 48–72px on phones. The footer uses a smaller signature lockup. Projects are large visual/editorial pairs.
- The am logo is a custom vector mark, independent of fonts, with a yellow angled terminal. Use the same mark in the header and footer.

## Content

- Position Alejo as Full Stack, with databases, business logic, technical leadership, and React / Next.js as complementary strengths. Describe Codex and Claude as tools for ideation and complex problem solving, matching his stated use.
- Prioritize professional experience: show Recursos Informáticos in the hero, make experience the first navigation/action target and the first section after the hero. The employer, current role, dates, Oracle work, leadership, production problem solving and modernization must be readable without expanding details. Keep the independent projects visually secondary to the employment evidence.
- Keep Spanish and English equivalent. CVs use two pages, one column, real text, and standard section headings. Keep source content in scripts/resume-content.json. Downloads follow the selected language; offer PDF and text.
- Case order: AutoGlobal, Chaioboutique, GAMAAN, Pactum. Each case explains a business need, its administrative workflow, data and permissions, implementation decisions, and practical value. Describe supported capabilities without inventing measured outcomes.
- Never invent metrics, customer counts, testimonials, employers, or production readiness.
- All four project covers show actual public interfaces. Chaioboutique uses a screenshot captured from the existing local application with its development database, including header, navigation, hero copy and controls.
- All brand logos come from the original project folders. Chaioboutique’s multicolor mark and original brand colors are retained.
- Present clients with a shared circular badge: 120px on desktop, 88px on smaller screens, with contained artwork and space around it. Use original standalone symbols when available (GAMAAN’s monogram and Pactum’s feather), keeping the full name beside the badge. Never squeeze horizontal wordmarks into a cropped square.
- The real website views sit on a flat field in that client’s brand color, with generous inset spacing and a clear case-study action. Identity, media and explanatory copy form one composition; on phones, identity comes first. Use the same presentation and logo treatment in each case study. Keep the full screenshot visible and preserve the actual site navigation.

## Interaction and accessibility

Real project URLs, native disclosures, keyboard-operated stack tabs, an accessible mobile menu, light/dark themes, ES/EN preference, visible focus, reduced-motion support, and reading without JavaScript.

ReactBits Waves is a full-width hero background, with its own layer behind the copy and photograph. The portrait responds to pointer movement and floats gently, anchored to the panel’s lower edge. The pause/resume button in the hero footer controls both animations. Render the waves on mobile too: screen width alone must not disable the canvas. Honor reduced motion, suspend heavy drawing offscreen and when the browser is hidden, and keep the photograph visible without JavaScript. Theme changes must affect the full hero even when motion is paused.

Contact uses direct email. When SMTP credentials exist, the same form sends through the existing contact API. Otherwise it prepares a draft in the visitor’s email app and explains that action. Never display a sent confirmation for an unsubmitted draft.

## References

Initial direction: The name as a monument, seed 1068229793. The user explicitly requested a smaller name, AutoGlobal first, and a fresher ReactBits treatment; those preferences supersede the initial giant-name composition. Palette and typography remain. The bundled Figma reference informs the editorial scale and flat color fields; its brand identity is not copied.

Review against [Web Interface Guidelines](https://github.com/vercel-labs/web-interface-guidelines) and the installed React quality checklist.
