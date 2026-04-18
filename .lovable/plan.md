
## Approved plan — final adjustments locked in

### 1. Single global fixed background
- **Create** `src/components/GlobalBackground.tsx`: two `position: fixed; inset: 0` layers behind everything (`z-index: -10` image, `-9` overlay), `pointer-events: none`. Image: new `hero-bg`, `object-cover`, `blur(2px)`, `scale(1.04)`. Overlay gradient (slightly lighter for premium feel): `linear-gradient(135deg, rgba(50,147,165,0.82) 0%, rgba(50,147,165,0.78) 50%, rgba(40,120,135,0.85) 100%)`.
- **Mount once** in `src/App.tsx` above `<BrowserRouter>`.

### 2. Remove all other bg images
- `HeroSection.tsx`: drop `<img heroBg>` + local overlay → transparent section, content sits over global bg.
- `FinalCTA.tsx`: drop `parallax-bg` + `bg-primary/90` → transparent.
- `AreaPage.tsx` hero: drop `style={{ backgroundImage }}` → transparent.
- `ServicePage.tsx` hero: same.
- `AboutSection.tsx`: drop `heroBg` → transparent (becomes parallax-style). To preserve the white/parallax alternation, keep About on solid `bg-background` instead. **Decision**: About stays white/opaque.

### 3. Refactor `ParallaxSection.tsx`
- Strip layers — becomes a transparent `<section class="relative">{children}</section>`. The global bg shows through automatically.

### 4. Opaque white sections (audit)
Ensure explicit `bg-background` on: About, Services grid, Gallery grid, FAQ, Footer, ServicePage long-desc + steps, AreaPage long-desc, ContactPage form column, GalleryPage grid, all legal pages, Navbar (when scrolled).

### 5. Body / root
- `index.css`: keep `body` default (white). Only sections that should reveal the global bg omit a bg color. No `body { background: transparent }` needed since global bg is `fixed` at `z-index: -10` and white sections paint over it.

### 6. Text + buttons on transparent sections
- All text in `ParallaxSection` → `text-white` (#FFF) with `[text-shadow:0_2px_8px_rgba(0,0,0,0.25)]` on headings.
- Green buttons: keep `bg-accent` + add `shadow-xl shadow-accent/40 ring-1 ring-white/20` for pop over overlay.

### 7. Assets
- Replace `src/assets/hero-bg.jpg` with uploaded `a_1_1-2.png` (saved as `.jpg` for compatibility; webp version `hero-bg.webp` also generated, referenced via `<picture>` inside GlobalBackground for performance).
- Replace `src/assets/logo.png` with uploaded logo image.

### 8. Logo container (white pill)
- `Navbar.tsx` + `Footer.tsx`: wrap `<img src={logo}>` in `<div class="bg-white rounded-xl p-1.5 shadow-md">` so logo stays visible on teal/transparent backgrounds.

### Files touched
- **Create**: `src/components/GlobalBackground.tsx`
- **Edit**: `src/App.tsx`, `src/components/ParallaxSection.tsx`, `src/components/HeroSection.tsx`, `src/components/FinalCTA.tsx`, `src/components/AboutSection.tsx`, `src/components/Navbar.tsx`, `src/components/Footer.tsx`, `src/pages/ServicePage.tsx`, `src/pages/AreaPage.tsx`
- **Replace assets**: `src/assets/hero-bg.jpg` (+ `hero-bg.webp`), `src/assets/logo.png`
