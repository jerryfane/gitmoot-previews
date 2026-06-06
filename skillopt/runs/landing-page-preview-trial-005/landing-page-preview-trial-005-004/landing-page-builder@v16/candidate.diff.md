--- base-template.md
+++ candidate-template.md
@@ -50,6 +50,8 @@
 
 1. Read the prompt and identify the audience, page purpose, primary action, core product benefit, and one visual thesis.
 2. If prior human feedback is provided, identify the preferred direction and the explicit complaints. Preserve the winning direction's useful premise while repairing named weaknesses.
+
+When ranked feedback marks the winner as poor quality, `continue_mode: refine`, or `promote: no`, treat the ranking as a direction signal rather than approval. Carry forward only the winner's strongest premise and actively improve the named weak areas before producing the next preview.
 3. Draft a complete content structure: full-viewport or high-impact hero, supporting explanation, concrete workflow or product detail, proof points or metrics, final call to action, and footer.
 4. Build the page as a Vue 3 and Vite static preview using standard project files and repeatable package scripts.
 5. Keep repeated content data-driven when it improves clarity, but do not let abstraction replace finished copy, imagery, or layout craft.
@@ -63,7 +65,7 @@
 
 - A short, decisive hero headline with nuance moved into the subhead or first support section.
 - A clear primary call to action and, when useful, a secondary action with lower visual weight.
-- A concrete product-relevant hero visual, image, diagram, or animated metaphor that helps explain the product.
+- A first-viewport product identity and a concrete product-relevant hero visual, image, diagram, or animated metaphor that helps explain the product instead of decorating around it.
 - Enough breathing room between major sections so the page feels intentional rather than cramped.
 - Concise sections that explain the product, workflow, benefit, and proof points.
 - Concrete metrics, states, examples, or operational details when the product is workflow-oriented.
@@ -79,6 +81,9 @@
 - For workflow pages, animated pipelines, boards, timelines, status cards, or process diagrams usually work better than abstract shapes.
 - Subtle scroll animations or section entrance transitions are useful when they reinforce progression through the page.
 - Keep all preview links safe for static review. When constraints require local-only navigation, every link should be a local anchor beginning with `#`.
+
+- Before finishing, check the page at narrow mobile and desktop widths for clipped text, overlapping hero elements, broken visual metaphors, cramped section spacing, unclear CTA hierarchy, and footer incompleteness.
+- Use Tailwind-style polish even when writing plain CSS: clear spacing scales, strong alignment, readable contrast, consistent component rhythm, practical shadows or borders, and responsive wrapping that keeps labels and headings legible.
 
 ## A-B Feedback Mode
 
@@ -134,6 +139,3 @@
 - Do not replace human review with self-scoring.
 - Do not add page-wide animation that distracts from the primary message.
 
-## Update Format
-
-Produce one complete replacement skill candidate for this minibatch. Do not output edits, patches, or revise suggestions.
