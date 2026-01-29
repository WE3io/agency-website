const imageA = 'url("assets/161019502_431073544859806_3936242597986097519_n.jpg")';
const imageB =
  'url("assets/MM-Bright-Bold-Sam-Buckley-Merchiston-Apartment-3-1.jpg")';

const themeConfigs = {
  gallery: {
    label: "Gallery",
    description: "Gallery calm with curated detail.",
    fonts: {
      display: "Cormorant Garamond",
      body: "Work Sans",
      accent: "IBM Plex Mono",
    },
    paletteGroups: [
      {
        title: "Foundations",
        note: "Parchment, gallery white, ink.",
        swatches: [
          { label: "Parchment", color: "#f6f1e8" },
          { label: "Gallery White", color: "#fffaf3" },
          { label: "Ink", color: "#1d1c19" },
        ],
      },
      {
        title: "Curated Accents",
        note: "Measured greens and brass notes.",
        swatches: [
          { label: "Moss", color: "#3a7f65" },
          { label: "Brass", color: "#d4a85c" },
          { label: "Rosewood", color: "#c06b52" },
        ],
      },
      {
        title: "Unexpected Notes",
        note: "Cool interruptions, subtle depth.",
        swatches: [
          { label: "Indigo", color: "#355c8a" },
          { label: "Clay", color: "#c7a68c" },
          { label: "Slate", color: "#6d7a77" },
        ],
      },
    ],
    vars: {
      "--bg": "#f6f1e8",
      "--surface": "#fffaf3",
      "--surface-2": "#f1e9dd",
      "--text": "#1d1c19",
      "--muted": "#6c665f",
      "--border": "#d8d0c6",
      "--accent": "#3a7f65",
      "--button-text": "#fdfbf7",
      "--stripe":
        "repeating-linear-gradient(90deg, #3a7f65 0 12px, #d4a85c 12px 20px, #c06b52 20px 28px, #355c8a 28px 36px, #f6f1e8 36px 42px, #1d1c19 42px 45px)",
      "--glow-1": "rgba(58, 127, 101, 0.18)",
      "--glow-2": "rgba(208, 168, 92, 0.14)",
      "--font-display": '"Cormorant Garamond", serif',
      "--font-body": '"Work Sans", sans-serif',
      "--font-accent": '"IBM Plex Mono", monospace',
      "--radius": "18px",
      "--tracking": "0.01em",
      "--hero-size": "clamp(2.3rem, 3.4vw, 3.8rem)",
      "--shadow": "0 24px 50px rgba(42, 36, 28, 0.12)",
      "--paper-texture":
        "repeating-linear-gradient(120deg, rgba(0, 0, 0, 0.03) 0, rgba(0, 0, 0, 0.03) 1px, transparent 1px, transparent 8px)",
      "--vignette-shapes":
        "radial-gradient(circle at 10% 20%, rgba(212, 168, 92, 0.35) 0 36%, transparent 38%), radial-gradient(circle at 88% 12%, rgba(58, 127, 101, 0.32) 0 30%, transparent 32%), radial-gradient(140% 120% at 80% 120%, rgba(53, 92, 138, 0.25) 0 45%, transparent 47%)",
      "--vignette-bloom": "radial-gradient(circle at 70% 20%, rgba(212, 168, 92, 0.32), transparent 70%)",
      "--vignette-frame-x": "0px",
      "--vignette-frame-y": "0px",
      "--vignette-text-x": "0px",
      "--vignette-text-y": "0px",
      "--collection-shapes":
        "radial-gradient(circle at 20% 30%, rgba(58, 127, 101, 0.18) 0 30%, transparent 31%), radial-gradient(circle at 80% 70%, rgba(192, 107, 82, 0.18) 0 28%, transparent 29%)",
      "--image-a": imageA,
      "--image-b": imageB,
      "--image-c": imageA,
      "--image-overlay":
        "radial-gradient(circle at 25% 20%, rgba(212, 168, 92, 0.35) 0 28%, transparent 30%), radial-gradient(circle at 80% 0%, rgba(58, 127, 101, 0.28) 0 30%, transparent 32%)",
      "--image-highlight":
        "radial-gradient(circle at 15% 15%, rgba(255, 255, 255, 0.45) 0 30%, transparent 55%)",
      "--image-highlight-opacity": "0.5",
      "--image-blend": "soft-light",
      "--image-shadow": "0 18px 35px rgba(42, 36, 28, 0.18)",
      "--image-border": "rgba(0, 0, 0, 0.12)",
      "--image-saturation": "1.05",
      "--image-contrast": "1.02",
    },
  },
  domestic: {
    label: "Domestic",
    description: "Warm, lived-in, and quietly curious.",
    fonts: {
      display: "Newsreader",
      body: "Work Sans",
      accent: "IBM Plex Mono",
    },
    paletteGroups: [
      {
        title: "Foundations",
        note: "Soft neutrals, linen, stone.",
        swatches: [
          { label: "Linen", color: "#f4ede4" },
          { label: "Warm White", color: "#fff7ef" },
          { label: "Smoked Ink", color: "#2e2a25" },
        ],
      },
      {
        title: "Collected Accents",
        note: "Coral, teal, marigold.",
        swatches: [
          { label: "Coral", color: "#d96b5a" },
          { label: "Teal", color: "#3fb0a2" },
          { label: "Marigold", color: "#e9b146" },
        ],
      },
      {
        title: "Unexpected Notes",
        note: "Cobalt, olive, clay.",
        swatches: [
          { label: "Cobalt", color: "#4a6aa5" },
          { label: "Olive", color: "#7f8b6a" },
          { label: "Clay", color: "#c08a6d" },
        ],
      },
      {
        title: "Rich Exploration",
        note: "Derived from interior study. Lean into these for more depth.",
        swatches: [
          { label: "Deep Burgundy", color: "#5c2a2b" },
          { label: "Peacock Blue", color: "#4a90a4" },
          { label: "Burnt Orange", color: "#d96b5a" },
        ],
      },
    ],
    vars: {
      "--bg": "#f4ede4",
      "--surface": "#fff7ef",
      "--surface-2": "#efe2d6",
      "--text": "#2e2a25",
      "--muted": "#6c645b",
      "--border": "#d7cfc2",
      "--accent": "#d96b5a",
      "--button-text": "#fff7f2",
      "--stripe":
        "repeating-linear-gradient(90deg, #d96b5a 0 12px, #e9b146 12px 20px, #3fb0a2 20px 28px, #4a6aa5 28px 36px, #f4ede4 36px 42px, #2e2a25 42px 46px)",
      "--glow-1": "rgba(217, 107, 90, 0.18)",
      "--glow-2": "rgba(63, 176, 162, 0.16)",
      "--font-display": '"Newsreader", serif',
      "--font-body": '"Work Sans", sans-serif',
      "--font-accent": '"IBM Plex Mono", monospace',
      "--radius": "20px",
      "--tracking": "0.008em",
      "--hero-size": "clamp(2.3rem, 3.3vw, 3.6rem)",
      "--shadow": "0 22px 40px rgba(60, 49, 38, 0.14)",
      "--paper-texture":
        "repeating-linear-gradient(90deg, rgba(0, 0, 0, 0.02) 0, rgba(0, 0, 0, 0.02) 1px, transparent 1px, transparent 10px)",
      "--vignette-shapes":
        "radial-gradient(circle at 15% 25%, rgba(217, 107, 90, 0.35) 0 34%, transparent 36%), radial-gradient(circle at 86% 10%, rgba(63, 176, 162, 0.32) 0 28%, transparent 30%), radial-gradient(140% 120% at 80% 120%, rgba(233, 177, 70, 0.28) 0 44%, transparent 46%)",
      "--vignette-bloom": "radial-gradient(circle at 70% 20%, rgba(217, 107, 90, 0.28), transparent 70%)",
      "--vignette-frame-x": "10px",
      "--vignette-frame-y": "-10px",
      "--vignette-text-x": "-6px",
      "--vignette-text-y": "0px",
      "--collection-shapes":
        "radial-gradient(circle at 15% 25%, rgba(63, 176, 162, 0.2) 0 28%, transparent 29%), radial-gradient(circle at 80% 70%, rgba(217, 107, 90, 0.18) 0 30%, transparent 31%)",
      "--image-a": imageA,
      "--image-b": imageB,
      "--image-c": imageA,
      "--image-overlay":
        "radial-gradient(circle at 20% 15%, rgba(217, 107, 90, 0.35) 0 26%, transparent 28%), radial-gradient(circle at 80% 0%, rgba(63, 176, 162, 0.3) 0 30%, transparent 32%), linear-gradient(140deg, rgba(233, 177, 70, 0.25), rgba(255, 255, 255, 0))",
      "--image-highlight":
        "radial-gradient(circle at 20% 20%, rgba(255, 255, 255, 0.35) 0 30%, transparent 60%)",
      "--image-highlight-opacity": "0.45",
      "--image-blend": "soft-light",
      "--image-shadow": "0 18px 35px rgba(60, 49, 38, 0.2)",
      "--image-border": "rgba(0, 0, 0, 0.14)",
      "--image-saturation": "1.08",
      "--image-contrast": "1.03",
    },
  },
  domestic_rich: {
    label: "Domestic Rich",
    description: "Deep, saturated exploration of the interior study.",
    fonts: {
      display: "Newsreader",
      body: "Work Sans",
      accent: "IBM Plex Mono",
    },
    paletteGroups: [
      {
        title: "Foundations",
        note: "Hinted neutrals, avoiding pure black/white.",
        swatches: [
          { label: "Silk White", color: "#fdfcf8" },
          { label: "Stone Gray", color: "#6c625f" },
          { label: "Ink Burgundy", color: "#1f1818" },
        ],
      },
      {
        title: "Rich Accents",
        note: "Saturated tones inspired by the room's character.",
        swatches: [
          { label: "Deep Burgundy", color: "#5c2a2b" },
          { label: "Peacock Blue", color: "#4a90a4" },
          { label: "Burnt Orange", color: "#d96b5a" },
        ],
      },
      {
        title: "Complementary Notes",
        note: "Mustard light and complementary depth.",
        swatches: [
          { label: "Mustard", color: "#e9b146" },
          { label: "Deep Teal", color: "#264653" },
          { label: "Clay", color: "#c08a6d" },
        ],
      },
    ],
    vars: {
      "--bg": "#fdfcf8",
      "--surface": "#fffdfa",
      "--surface-2": "#f5f0e8",
      "--text": "#1f1818",
      "--muted": "#6c625f",
      "--border": "#e3ded6",
      "--accent": "#5c2a2b",
      "--button-text": "#fdfcf8",
      "--stripe":
        "repeating-linear-gradient(90deg, #5c2a2b 0 12px, #e9b146 12px 20px, #4a90a4 20px 28px, #d96b5a 28px 36px, #fdfcf8 36px 42px, #1f1818 42px 46px)",
      "--glow-1": "rgba(92, 42, 43, 0.15)",
      "--glow-2": "rgba(74, 144, 164, 0.12)",
      "--font-display": '"Newsreader", serif',
      "--font-body": '"Work Sans", sans-serif',
      "--font-accent": '"IBM Plex Mono", monospace',
      "--radius": "20px",
      "--tracking": "0.008em",
      "--hero-size": "clamp(2.3rem, 3.3vw, 3.6rem)",
      "--shadow": "0 22px 40px rgba(60, 49, 38, 0.12)",
      "--paper-texture":
        "repeating-linear-gradient(90deg, rgba(92, 42, 43, 0.02) 0, rgba(92, 42, 43, 0.02) 1px, transparent 1px, transparent 10px)",
      "--vignette-shapes":
        "radial-gradient(circle at 15% 25%, rgba(92, 42, 43, 0.3) 0 34%, transparent 36%), radial-gradient(circle at 86% 10%, rgba(74, 144, 164, 0.28) 0 28%, transparent 30%), radial-gradient(140% 120% at 80% 120%, rgba(233, 177, 70, 0.25) 0 44%, transparent 46%)",
      "--vignette-bloom": "radial-gradient(circle at 70% 20%, rgba(92, 42, 43, 0.22), transparent 70%)",
      "--vignette-frame-x": "10px",
      "--vignette-frame-y": "-10px",
      "--vignette-text-x": "-6px",
      "--vignette-text-y": "0px",
      "--collection-shapes":
        "radial-gradient(circle at 15% 25%, rgba(74, 144, 164, 0.18) 0 28%, transparent 29%), radial-gradient(circle at 80% 70%, rgba(92, 42, 43, 0.15) 0 30%, transparent 31%)",
      "--image-a": imageA,
      "--image-b": imageB,
      "--image-c": imageA,
      "--image-overlay":
        "radial-gradient(circle at 20% 15%, rgba(92, 42, 43, 0.3) 0 26%, transparent 28%), radial-gradient(circle at 80% 0%, rgba(74, 144, 164, 0.25) 0 30%, transparent 32%), linear-gradient(140deg, rgba(233, 177, 70, 0.2), rgba(255, 255, 255, 0))",
      "--image-highlight":
        "radial-gradient(circle at 20% 20%, rgba(255, 255, 255, 0.3) 0 30%, transparent 60%)",
      "--image-highlight-opacity": "0.4",
      "--image-blend": "soft-light",
      "--image-shadow": "0 18px 35px rgba(60, 49, 38, 0.18)",
      "--image-border": "rgba(92, 42, 43, 0.1)",
      "--image-saturation": "1.08",
      "--image-contrast": "1.03",
    },
  },
  playful: {
    label: "Playful",
    description: "Saturated, eccentric, and deliberately bright.",
    fonts: {
      display: "Fraunces",
      body: "Space Grotesk",
      accent: "IBM Plex Mono",
    },
    paletteGroups: [
      {
        title: "Foundations",
        note: "Soft light, crisp contrast.",
        swatches: [
          { label: "Porcelain", color: "#f9efe4" },
          { label: "Studio White", color: "#fff8f1" },
          { label: "Ink", color: "#1d1b1a" },
        ],
      },
      {
        title: "Saturated Accents",
        note: "Teal, coral, marigold.",
        swatches: [
          { label: "Teal", color: "#1fc5b7" },
          { label: "Coral", color: "#f06f7f" },
          { label: "Marigold", color: "#f7b431" },
        ],
      },
      {
        title: "Unexpected Notes",
        note: "Cobalt, mint, berry.",
        swatches: [
          { label: "Cobalt", color: "#2f5dd1" },
          { label: "Mint", color: "#7dd6c5" },
          { label: "Berry", color: "#c54469" },
        ],
      },
    ],
    vars: {
      "--bg": "#f9efe4",
      "--surface": "#fff8f1",
      "--surface-2": "#f1e4d7",
      "--text": "#1d1b1a",
      "--muted": "#6f675e",
      "--border": "#d7cec4",
      "--accent": "#1fc5b7",
      "--button-text": "#0f1a14",
      "--stripe":
        "repeating-linear-gradient(90deg, #1fc5b7 0 10px, #f7b431 10px 18px, #f06f7f 18px 26px, #2f5dd1 26px 34px, #7dd6c5 34px 42px, #1d1b1a 42px 46px, #f9efe4 46px 50px)",
      "--glow-1": "rgba(31, 197, 183, 0.22)",
      "--glow-2": "rgba(247, 180, 49, 0.2)",
      "--font-display": '"Fraunces", serif',
      "--font-body": '"Space Grotesk", sans-serif',
      "--font-accent": '"IBM Plex Mono", monospace',
      "--radius": "22px",
      "--tracking": "0.012em",
      "--hero-size": "clamp(2.5rem, 3.7vw, 4.1rem)",
      "--shadow": "0 28px 60px rgba(50, 39, 30, 0.2)",
      "--paper-texture": "none",
      "--vignette-shapes":
        "radial-gradient(circle at 12% 18%, rgba(31, 197, 183, 0.6) 0 36%, transparent 38%), radial-gradient(circle at 85% 12%, rgba(240, 111, 127, 0.55) 0 32%, transparent 34%), radial-gradient(130% 120% at 75% 120%, rgba(247, 180, 49, 0.55) 0 46%, transparent 48%), radial-gradient(circle at 40% 85%, rgba(47, 93, 209, 0.35) 0 28%, transparent 30%)",
      "--vignette-bloom": "radial-gradient(circle at 70% 20%, rgba(247, 180, 49, 0.38), transparent 70%)",
      "--vignette-frame-x": "18px",
      "--vignette-frame-y": "-16px",
      "--vignette-text-x": "-10px",
      "--vignette-text-y": "4px",
      "--collection-shapes":
        "radial-gradient(circle at 15% 25%, rgba(31, 197, 183, 0.28) 0 30%, transparent 31%), radial-gradient(circle at 80% 70%, rgba(247, 180, 49, 0.26) 0 30%, transparent 31%), radial-gradient(circle at 70% 25%, rgba(47, 93, 209, 0.22) 0 24%, transparent 25%)",
      "--image-a": imageA,
      "--image-b": imageB,
      "--image-c": imageB,
      "--image-overlay":
        "radial-gradient(circle at 20% 20%, rgba(240, 111, 127, 0.45) 0 26%, transparent 28%), radial-gradient(circle at 82% 0%, rgba(31, 197, 183, 0.45) 0 30%, transparent 32%), radial-gradient(circle at 20% 90%, rgba(47, 93, 209, 0.35) 0 26%, transparent 28%), linear-gradient(140deg, rgba(247, 180, 49, 0.35), rgba(255, 255, 255, 0))",
      "--image-highlight":
        "radial-gradient(circle at 18% 18%, rgba(255, 255, 255, 0.55) 0 28%, transparent 60%)",
      "--image-highlight-opacity": "0.6",
      "--image-blend": "screen",
      "--image-shadow": "0 22px 45px rgba(50, 39, 30, 0.28)",
      "--image-border": "rgba(0, 0, 0, 0.16)",
      "--image-saturation": "1.2",
      "--image-contrast": "1.05",
    },
  },
  refined: {
    label: "Refined",
    description: "Tailored, quiet, and deliberately composed.",
    fonts: {
      display: "Cormorant Garamond",
      body: "Space Grotesk",
      accent: "IBM Plex Mono",
    },
    paletteGroups: [
      {
        title: "Foundations",
        note: "Inky, dense, quiet.",
        swatches: [
          { label: "Obsidian", color: "#1f1b18" },
          { label: "Charcoal", color: "#2b2622" },
          { label: "Ivory", color: "#f2ece5" },
        ],
      },
      {
        title: "Refined Accents",
        note: "Brass, teal, rust.",
        swatches: [
          { label: "Brass", color: "#d6a13a" },
          { label: "Teal", color: "#4b8f86" },
          { label: "Rust", color: "#b36b55" },
        ],
      },
      {
        title: "Unexpected Notes",
        note: "Slate, olive, stone.",
        swatches: [
          { label: "Slate", color: "#6b7882" },
          { label: "Olive", color: "#6f7f6b" },
          { label: "Stone", color: "#8c7b6a" },
        ],
      },
    ],
    vars: {
      "--bg": "#1f1b18",
      "--surface": "#2b2622",
      "--surface-2": "#241f1b",
      "--text": "#f2ece5",
      "--muted": "#b5ada3",
      "--border": "#3a352f",
      "--accent": "#d6a13a",
      "--button-text": "#1b1b1b",
      "--stripe":
        "repeating-linear-gradient(90deg, #d6a13a 0 10px, #4b8f86 10px 18px, #b36b55 18px 26px, #6b7882 26px 34px, #f2ece5 34px 40px, #1f1b18 40px 44px)",
      "--glow-1": "rgba(214, 161, 58, 0.18)",
      "--glow-2": "rgba(75, 143, 134, 0.14)",
      "--font-display": '"Cormorant Garamond", serif',
      "--font-body": '"Space Grotesk", sans-serif',
      "--font-accent": '"IBM Plex Mono", monospace',
      "--radius": "16px",
      "--tracking": "0.02em",
      "--hero-size": "clamp(2.1rem, 3vw, 3.4rem)",
      "--shadow": "0 20px 50px rgba(0, 0, 0, 0.4)",
      "--paper-texture":
        "repeating-linear-gradient(120deg, rgba(255, 255, 255, 0.04) 0, rgba(255, 255, 255, 0.04) 1px, transparent 1px, transparent 10px)",
      "--vignette-shapes":
        "radial-gradient(circle at 12% 18%, rgba(214, 161, 58, 0.22) 0 34%, transparent 36%), radial-gradient(circle at 86% 12%, rgba(75, 143, 134, 0.2) 0 28%, transparent 30%), radial-gradient(140% 120% at 80% 120%, rgba(107, 120, 130, 0.22) 0 44%, transparent 46%)",
      "--vignette-bloom": "radial-gradient(circle at 80% 10%, rgba(214, 161, 58, 0.28), transparent 70%)",
      "--vignette-frame-x": "6px",
      "--vignette-frame-y": "-8px",
      "--vignette-text-x": "0px",
      "--vignette-text-y": "0px",
      "--collection-shapes":
        "radial-gradient(circle at 20% 30%, rgba(214, 161, 58, 0.18) 0 26%, transparent 27%), radial-gradient(circle at 80% 70%, rgba(75, 143, 134, 0.16) 0 26%, transparent 27%)",
      "--image-a": imageA,
      "--image-b": imageB,
      "--image-c": imageA,
      "--image-overlay":
        "radial-gradient(circle at 25% 20%, rgba(214, 161, 58, 0.2) 0 26%, transparent 28%), radial-gradient(circle at 80% 0%, rgba(75, 143, 134, 0.2) 0 28%, transparent 30%), linear-gradient(140deg, rgba(179, 107, 85, 0.15), rgba(0, 0, 0, 0))",
      "--image-highlight":
        "radial-gradient(circle at 18% 18%, rgba(255, 255, 255, 0.25) 0 28%, transparent 60%)",
      "--image-highlight-opacity": "0.35",
      "--image-blend": "multiply",
      "--image-shadow": "0 20px 45px rgba(0, 0, 0, 0.45)",
      "--image-border": "rgba(255, 255, 255, 0.12)",
      "--image-saturation": "1.05",
      "--image-contrast": "1.08",
    },
  },
};

const themeButtons = Array.from(document.querySelectorAll(".tab"));
const paletteContainer = document.getElementById("palette-groups");
const fontLabels = Array.from(document.querySelectorAll("[data-font-role]"));
const activeTheme = document.getElementById("active-theme");
const themeDescription = document.getElementById("theme-description");

const setThemeVars = (vars) => {
  Object.entries(vars).forEach(([key, value]) => {
    document.documentElement.style.setProperty(key, value);
  });
};

const renderPaletteGroups = (groups) => {
  if (!paletteContainer) {
    return;
  }

  paletteContainer.innerHTML = "";

  groups.forEach((group) => {
    const groupEl = document.createElement("div");
    groupEl.className = "palette-group";

    const groupInfo = document.createElement("div");
    const title = document.createElement("h3");
    title.textContent = group.title;
    const note = document.createElement("p");
    note.textContent = group.note;
    groupInfo.append(title, note);

    const swatchWrap = document.createElement("div");
    swatchWrap.className = "palette-swatches";

    group.swatches.forEach((swatch) => {
      const swatchEl = document.createElement("div");
      swatchEl.className = "swatch";
      swatchEl.style.setProperty("--swatch-color", swatch.color);

      const swatchColor = document.createElement("div");
      swatchColor.className = "swatch-color";

      const meta = document.createElement("div");
      meta.className = "swatch-meta";

      const label = document.createElement("span");
      label.className = "swatch-label";
      label.textContent = swatch.label;

      const hex = document.createElement("span");
      hex.className = "swatch-hex";
      hex.textContent = swatch.color.toUpperCase();

      meta.append(label, hex);
      swatchEl.append(swatchColor, meta);
      swatchWrap.appendChild(swatchEl);
    });

    groupEl.append(groupInfo, swatchWrap);
    paletteContainer.appendChild(groupEl);
  });
};

const updateFontLabels = (fonts) => {
  fontLabels.forEach((label) => {
    const role = label.dataset.fontRole;
    label.textContent = fonts[role] || "";
  });
};

const setActiveTab = (name) => {
  themeButtons.forEach((button) => {
    const isActive = button.dataset.theme === name;
    button.setAttribute("aria-selected", String(isActive));
  });
};

const applyTheme = (name) => {
  const config = themeConfigs[name];
  if (!config) {
    return;
  }

  document.documentElement.setAttribute("data-theme", name);
  document.body.classList.add("theme-transition");
  window.setTimeout(() => document.body.classList.remove("theme-transition"), 240);

  setThemeVars(config.vars);
  renderPaletteGroups(config.paletteGroups);
  updateFontLabels(config.fonts);
  setActiveTab(name);

  if (activeTheme) {
    activeTheme.textContent = config.label;
  }

  if (themeDescription) {
    themeDescription.textContent = config.description;
  }
};

const focusTab = (index) => {
  const target = themeButtons[index];
  if (!target) {
    return;
  }
  target.focus();
  applyTheme(target.dataset.theme);
};

themeButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    applyTheme(button.dataset.theme);
  });

  button.addEventListener("keydown", (event) => {
    if (event.key === "ArrowRight") {
      event.preventDefault();
      focusTab((index + 1) % themeButtons.length);
    }

    if (event.key === "ArrowLeft") {
      event.preventDefault();
      focusTab((index - 1 + themeButtons.length) % themeButtons.length);
    }

    if (event.key === "Home") {
      event.preventDefault();
      focusTab(0);
    }

    if (event.key === "End") {
      event.preventDefault();
      focusTab(themeButtons.length - 1);
    }
  });
});

const initialTheme = document.body.dataset.theme || "gallery";
applyTheme(initialTheme);
