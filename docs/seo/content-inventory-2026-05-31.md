# Content Inventory - 2026-05-31

## Goal

Add one incremental, high-quality SEO article after checking existing content, avoiding duplicate intent, and strengthening internal links around robot joint hardware, titanium powder, stainless steel powder, LPBF, and industrial automation.

## Stock Check Before Increment

- Existing markdown posts before this update: 98.
- Existing robotics / automation-adjacent pages:
  - `ti64-powder-robotic-arm-brackets-and-end-effector-hardware`
  - `17-4ph-powder-industrial-automation-actuator-housings-and-latch-hardware`
  - `17-4ph-powder-industrial-fixtures-and-tooling-hardware`
  - `ti64-powder-lattice-brackets-and-lightweight-structural-nodes`
  - `alsi10mg-powder-uav-motor-mounts-and-thermal-electronics-frames`
  - `alsi10mg-powder-radar-and-eo-ir-sensor-housings`
  - `cucrzr-powder-conductive-tooling-and-welding-contacts`
- Gap found: no page specifically targets humanoid robot joint material selection, actuator-side versus distal-link tradeoffs, or Ti64 vs 17-4PH comparison intent.

## Recent / Long-Term Signal

- HANNOVER MESSE reported a 2026 Schaeffler-Hexagon partnership around humanoid robotics and highlighted compact actuator systems as a cost and performance lever, including reduced installation space and weight while maintaining continuous torque: https://www.hannovermesse.de/en/news/news-articles/the-backbone-of-the-next-generation-of-humanoid-robotics
- Axios reported Hyundai's January 2026 plan to manufacture and deploy Atlas humanoid robots at factory scale from 2028, reinforcing the move from demos into production environments: https://www.axios.com/2026/01/05/hyundai-humanoid-robots-boston-dynamics
- Fincantieri announced a February 2026 industrial partnership to develop humanoid welding robots for shipyards, indicating non-automotive industrial interest in humanoid platforms: https://www.fincantieri.com/en/newsroom/press-releases/2026/fincantieri-and-generative-bionics-launch-an-industrial-partnership-to-develop-a-humanoid-welding-robot-for-shipyards

## Increment Added

- New article: `ti64-vs-17-4ph-powder-humanoid-robot-joints`
- Search intent: compare Ti64 and 17-4PH powder for humanoid robot joint brackets, actuator housings, wrist links, end-effector support hardware, bearing-adjacent structures, and latch hardware.
- Long-term value: material selection, RFQ guidance, LPBF powder specification, post-processing, and design tradeoffs.
- Not a duplicate: existing Ti64 robotic arm page is single-alloy and bracket focused; existing 17-4PH automation page is single-alloy and actuator/latch focused. The new article targets cross-material comparison for humanoid robot joints and connects both clusters.

## Internal Link Plan

Article outbound links:

- `/posts/Alloys/tc4-ti6al4v-powder/`
- `/posts/Alloys/17-4ph-stainless-steel-powder/`
- `/posts/Alloys/ti64-powder-robotic-arm-brackets-and-end-effector-hardware/`
- `/posts/Alloys/17-4ph-powder-industrial-automation-actuator-housings-and-latch-hardware/`
- `/posts/Alloys/ti64-powder-lattice-brackets-and-lightweight-structural-nodes/`
- `/posts/Alloys/316l-vs-17-4ph-powder/`
- `/posts/Alloys/lpbf-powder-particle-size-guide/`
- `/posts/Alloys/metal-powder-specification-guide-psd-oxygen-flowability/`
- `/materials/titanium-powder/`
- `/materials/stainless-steel-powder/`
- `/applications/industrial-automation-robotics/`
- `/applications/humanoid-and-robot-joint-hardware/`
- `/processes/lpbf/`

New / updated inbound links:

- Added to Titanium Powder hub.
- Added to Stainless Steel Powder hub.
- Added to Industrial Automation and Robotics hub.
- Added new Humanoid and Robot Joint Hardware application hub.
- Added to LPBF Powder process hub.
- Added to comparison article collection.

## Image Prompt Logic

Used only the visual prompt logic from `TITAN-INDUSTRIAL-SEO v8.3.txt`, not the writing protocol. Applied the following constraints:

- Fresh 16:9 hero image.
- Target export: 1536x864 WebP.
- Visual role: evidence plus explanation.
- Composition: organized side-by-side industrial product cluster, not a chaotic pile.
- Camera: 50-70mm product-lens feel, three-quarter view, deep focus.
- Lighting: cool 6000K engineering studio / clean lab, controlled contrast.
- No text, labels, logos, people, or watermark in the generated image.
- Alt text is factual and not keyword-stuffed.

Final GPT Image prompt:

```text
Use case: ads-marketing
Asset type: 16:9 article hero image for a high-end industrial metal powder and additive manufacturing website.
Primary request: Create a photorealistic engineering product composition for an article comparing Ti64 titanium powder and 17-4PH stainless steel powder for humanoid robot joint brackets, compact actuator housings, wrist-side links, and end-effector support hardware.
Scene/backdrop: Clean robotics engineering lab / additive manufacturing inspection studio, cool neutral light, dark graphite work surface, no text, no labels, no logos, no people.
Subject: A cohesive comparison scene with two organized groups of AM metal robot-joint components: on one side satin gray Ti64 lightweight lattice joint brackets and wrist links with thin ribs, cable routing reliefs, and machined bearing seats; on the other side darker 17-4PH stainless actuator housings, latch blocks, compact gear-side covers, and reinforced mounting ears. Include small piles/samples of titanium powder and stainless powder in shallow metal cups, machined datum faces, threaded bosses, bearing bores, inspection-relevant chamfers, and realistic LPBF texture only on nonfunctional surfaces.
Composition: Wide 16:9, three-quarter product photography, 50-70mm product lens feel, deep focus, aperture f/8, balanced side-by-side comparison with one central humanoid robot joint assembly mockup as anchor, visually dense but organized, no chaotic pile.
Lighting: Industrial clean room / engineering studio, cool white 6000K, large softbox reflections, crisp edge separation, controlled contrast so titanium and stainless surfaces are visually distinct, no bokeh blur.
Material physics: Realistic Ti64 satin titanium, slightly warmer/darker 17-4PH stainless, fine additive texture, machined flat interfaces, clean bearing bores, crisp chamfers, no plastic, no toy robot look, no chrome mirror finish, no impossible mechanisms.
Render style: Ultra-realistic product photography / KeyShot / Octane quality, 8k inspection-grade detail, premium B2B engineering visual.
Negative prompt: text, typography, numbers, labels, logo, watermark, people, hands, cartoon robot, toy robot, full humanoid character, sci-fi glow, fantasy machinery, dirty parts, broken parts, impossible joints, random holes, warped geometry, melted edges, plastic, blurry, bokeh, low resolution, exaggerated CGI.
Aspect ratio: 16:9.
```

Generated source image:

- `C:\Users\79211\.codex\generated_images\019e1afe-c6d1-7b10-b617-284ee969bb0a\ig_0ed55a2578c91e99016a1b109819c8819aab1c9e35bf850a33.png`

Project asset:

- `public/images/blog/ti64-vs-17-4ph-powder-humanoid-robot-joints.webp`

## Expected Result After Build

- Markdown posts after update: 99.
- New article route: `/posts/Alloys/ti64-vs-17-4ph-powder-humanoid-robot-joints/`
- New application hub route: `/applications/humanoid-and-robot-joint-hardware/`
- Image available at: `/images/blog/ti64-vs-17-4ph-powder-humanoid-robot-joints.webp`
