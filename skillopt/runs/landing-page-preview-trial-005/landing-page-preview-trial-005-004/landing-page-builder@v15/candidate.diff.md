--- base-template.md
+++ candidate-template.md
@@ -64,6 +64,9 @@
 - A short, decisive hero headline with nuance moved into the subhead or first support section.
 - A clear primary call to action and, when useful, a secondary action with lower visual weight.
 - A concrete product-relevant hero visual, image, diagram, or animated metaphor that helps explain the product.
+
+- A distinctive brand system visible in the first viewport: product name, simple mark or logo treatment, intentional palette, high-contrast type hierarchy, and a visual style that feels specific to the product rather than a reusable template.
+- Credibility signals when appropriate: customer or trust-logo rows, concrete case-study details, outcome metrics, operational snapshots, or proof sections that make the product feel real.
 - Enough breathing room between major sections so the page feels intentional rather than cramped.
 - Concise sections that explain the product, workflow, benefit, and proof points.
 - Concrete metrics, states, examples, or operational details when the product is workflow-oriented.
@@ -74,10 +77,15 @@
 ## Visual And Interaction Guidance
 
 - Avoid broken, vague, or purely decorative hero visuals. The hero graphic should make the product easier to understand.
+
+- When feedback calls prior options generic or visually weak, upgrade the hero from simple CSS cards into a memorable product-relevant composition: a polished interface mockup, generated or real-looking product graphic, workflow scene, relay board, route map, or cinematic diagram tied directly to the core metaphor.
+- Use dark, premium, high-contrast art direction when reviewers explicitly request it, but keep contrast readable, section boundaries clear, and mobile layouts stable.
 - Prefer a small number of well-finished sections over many shallow blocks.
 - Use restrained, utility-style polish: crisp spacing, clear alignment, readable contrast, consistent radii, intentional borders, and balanced section backgrounds.
 - For workflow pages, animated pipelines, boards, timelines, status cards, or process diagrams usually work better than abstract shapes.
 - Subtle scroll animations or section entrance transitions are useful when they reinforce progression through the page.
+
+- For requested animated workflow metaphors, include purposeful motion in the delivered Vue preview: moving signals, routed paths, staged handoffs, active states, or scroll-linked section reveals. Keep it tasteful and product-explanatory, and provide reduced-motion fallbacks.
 - Keep all preview links safe for static review. When constraints require local-only navigation, every link should be a local anchor beginning with `#`.
 
 ## A-B Feedback Mode
@@ -86,7 +94,7 @@
 
 1. Treat artifact notes, preview URLs, output locations, reviewer choice, and reviewer reasoning as required context.
 2. Identify the preferred option from the feedback. If the reasoning is empty, infer preference from the selected artifact notes and avoid inventing unseen visual details.
-3. If the reviewer dislikes all options but ranks one highest, preserve only the strongest direction from the winner and actively fix the stated weaknesses.
+3. If the reviewer dislikes all options but ranks one highest, treat the winner as a loose structural reference rather than a quality bar. Preserve only the clearest product metaphor, information architecture, or working section pattern, then actively replace rejected traits such as generic branding, weak visuals, thin proof, poor polish, or unsafe mobile composition.
 4. If the prompt asks for an improved implementation, build the next Vue/Vite preview using the winning direction and compatible strengths from the other option.
 5. If the prompt asks only for feedback or recommendations, return a concise Markdown response naming the selected option, the feedback signal, what to preserve, what to improve, and implementation notes.
 6. If source files or preview URLs are unavailable, state that briefly and continue from the provided artifact metadata instead of returning nothing.
