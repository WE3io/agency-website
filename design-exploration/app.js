const themeConfigs = {
  editorial: {
    label: "Editorial",
    description: "Calm, confident, and composed.",
    fonts: {
      headline: "Fraunces",
      body: "Sora",
      mono: "IBM Plex Mono",
    },
    palette: [
      { label: "Background", color: "#0e1110" },
      { label: "Panel", color: "#151a18" },
      { label: "Primary Text", color: "#f2f5f3" },
      { label: "Accent Green", color: "#6eea8a" },
      { label: "Neon Pink", color: "#ff4fd8" },
    ],
    vars: {
      "--bg": "#0e1110",
      "--panel": "#151a18",
      "--panel-2": "#101413",
      "--text": "#f2f5f3",
      "--muted": "#9aa7a1",
      "--border": "#25312c",
      "--accent": "#6eea8a",
      "--glow-1": "rgba(110, 234, 138, 0.16)",
      "--glow-2": "rgba(240, 213, 139, 0.12)",
      "--font-headline": '"Fraunces", serif',
      "--font-body": '"Sora", sans-serif',
      "--font-mono": '"IBM Plex Mono", monospace',
      "--radius": "18px",
      "--tracking": "0.01em",
      "--hero-size": "clamp(2.3rem, 3vw, 3.6rem)",
      "--shadow": "0 24px 60px rgba(0, 0, 0, 0.35)",
      "--bg-texture": "none",
      "--bg-size": "auto",
      "--surface-texture": "none",
      "--surface-texture-size": "auto",
      "--panel-glow-color": "rgba(110, 234, 138, 0.14)",
      "--accent-pink": "#ff4fd8",
      "--image-a":
        "radial-gradient(circle at 30% 20%, rgba(110, 234, 138, 0.45), transparent 60%), linear-gradient(140deg, rgba(21, 26, 24, 0.9), rgba(14, 17, 16, 0.9))",
      "--image-b":
        "radial-gradient(circle at 70% 30%, rgba(240, 213, 139, 0.35), transparent 60%), linear-gradient(160deg, rgba(9, 12, 11, 0.9), rgba(15, 20, 18, 0.9))",
      "--image-c":
        "radial-gradient(circle at 20% 70%, rgba(110, 234, 138, 0.25), transparent 60%), linear-gradient(180deg, rgba(8, 10, 9, 0.9), rgba(17, 22, 20, 0.9))",
      "--image-overlay":
        "linear-gradient(120deg, rgba(110, 234, 138, 0.18), rgba(255, 255, 255, 0))",
    },
  },
  system: {
    label: "System",
    description: "Builder energy with modern console density.",
    fonts: {
      headline: "Space Grotesk",
      body: "Space Grotesk",
      mono: "IBM Plex Mono",
    },
    palette: [
      { label: "Background", color: "#060a08" },
      { label: "Panel", color: "#0b0f0d" },
      { label: "Primary Text", color: "#e6f2ec" },
      { label: "Accent Green", color: "#4fd983" },
      { label: "Neon Pink", color: "#ff4fd8" },
    ],
    vars: {
      "--bg": "#060a08",
      "--panel": "#0b0f0d",
      "--panel-2": "#070a09",
      "--text": "#e6f2ec",
      "--muted": "#7f9089",
      "--border": "#1b2722",
      "--accent": "#4fd983",
      "--glow-1": "rgba(79, 217, 131, 0.2)",
      "--glow-2": "rgba(130, 210, 170, 0.12)",
      "--font-headline": '"Space Grotesk", sans-serif',
      "--font-body": '"Space Grotesk", sans-serif',
      "--font-mono": '"IBM Plex Mono", monospace',
      "--radius": "12px",
      "--tracking": "0.02em",
      "--hero-size": "clamp(2.1rem, 2.7vw, 3.2rem)",
      "--shadow": "0 18px 42px rgba(0, 0, 0, 0.45)",
      "--bg-texture":
        "repeating-linear-gradient(90deg, rgba(79, 217, 131, 0.04) 0, rgba(79, 217, 131, 0.04) 1px, transparent 1px, transparent 80px), repeating-linear-gradient(0deg, rgba(255, 255, 255, 0.02) 0, rgba(255, 255, 255, 0.02) 1px, transparent 1px, transparent 40px)",
      "--bg-size": "auto",
      "--surface-texture": "none",
      "--surface-texture-size": "auto",
      "--panel-glow-color": "rgba(79, 217, 131, 0.2)",
      "--accent-pink": "#ff4fd8",
      "--image-a":
        "radial-gradient(circle at 40% 30%, rgba(79, 217, 131, 0.45), transparent 60%), linear-gradient(150deg, rgba(6, 10, 8, 0.95), rgba(11, 15, 13, 0.9))",
      "--image-b":
        "radial-gradient(circle at 70% 20%, rgba(79, 217, 131, 0.3), transparent 60%), linear-gradient(160deg, rgba(4, 6, 5, 0.95), rgba(12, 16, 14, 0.9))",
      "--image-c":
        "radial-gradient(circle at 20% 70%, rgba(230, 242, 236, 0.12), transparent 60%), linear-gradient(180deg, rgba(7, 11, 9, 0.95), rgba(13, 18, 16, 0.9))",
      "--image-overlay":
        "linear-gradient(120deg, rgba(79, 217, 131, 0.25), rgba(255, 255, 255, 0))",
    },
  },
  expressive: {
    label: "Expressive",
    description: "Brighter, kinetic, and future-facing.",
    fonts: {
      headline: "Syne",
      body: "Sora",
      mono: "IBM Plex Mono",
    },
    palette: [
      { label: "Background", color: "#0b100d" },
      { label: "Panel", color: "#121918" },
      { label: "Primary Text", color: "#f7faf8" },
      { label: "Accent Green", color: "#35ff95" },
      { label: "Neon Pink", color: "#ff4fd8" },
    ],
    vars: {
      "--bg": "#0b100d",
      "--panel": "#121918",
      "--panel-2": "#0d1211",
      "--text": "#f7faf8",
      "--muted": "#a0aea7",
      "--border": "#27332e",
      "--accent": "#35ff95",
      "--glow-1": "rgba(53, 255, 149, 0.24)",
      "--glow-2": "rgba(255, 184, 107, 0.2)",
      "--font-headline": '"Syne", sans-serif',
      "--font-body": '"Sora", sans-serif',
      "--font-mono": '"IBM Plex Mono", monospace',
      "--radius": "22px",
      "--tracking": "0.015em",
      "--hero-size": "clamp(2.4rem, 3.4vw, 3.8rem)",
      "--shadow": "0 30px 70px rgba(0, 0, 0, 0.4)",
      "--bg-texture":
        "repeating-linear-gradient(0deg, rgba(53, 255, 149, 0.05) 0, rgba(53, 255, 149, 0.05) 1px, transparent 1px, transparent 32px), repeating-linear-gradient(90deg, rgba(53, 255, 149, 0.05) 0, rgba(53, 255, 149, 0.05) 1px, transparent 1px, transparent 32px), repeating-linear-gradient(0deg, rgba(53, 255, 149, 0.09) 0, rgba(53, 255, 149, 0.09) 1px, transparent 1px, transparent 160px), repeating-linear-gradient(90deg, rgba(53, 255, 149, 0.09) 0, rgba(53, 255, 149, 0.09) 1px, transparent 1px, transparent 160px)",
      "--bg-size": "auto",
      "--surface-texture":
        "repeating-linear-gradient(0deg, rgba(53, 255, 149, 0.03) 0, rgba(53, 255, 149, 0.03) 1px, transparent 1px, transparent 36px), repeating-linear-gradient(90deg, rgba(53, 255, 149, 0.03) 0, rgba(53, 255, 149, 0.03) 1px, transparent 1px, transparent 36px)",
      "--surface-texture-size": "auto",
      "--panel-glow-color": "rgba(53, 255, 149, 0.26)",
      "--accent-pink": "#ff4fd8",
      "--image-a":
        "radial-gradient(circle at 30% 20%, rgba(53, 255, 149, 0.6), transparent 60%), linear-gradient(140deg, rgba(11, 16, 13, 0.9), rgba(18, 25, 23, 0.85))",
      "--image-b":
        "radial-gradient(circle at 70% 20%, rgba(255, 184, 107, 0.45), transparent 60%), linear-gradient(160deg, rgba(10, 14, 12, 0.9), rgba(18, 24, 22, 0.85))",
      "--image-c":
        "radial-gradient(circle at 20% 70%, rgba(53, 255, 149, 0.4), transparent 60%), linear-gradient(180deg, rgba(9, 12, 11, 0.9), rgba(16, 22, 20, 0.85))",
      "--image-overlay":
        "linear-gradient(120deg, rgba(53, 255, 149, 0.3), rgba(255, 255, 255, 0))",
    },
  },
  minimal: {
    label: "Minimal",
    description: "Near-monochrome restraint and quiet confidence.",
    fonts: {
      headline: "Instrument Serif",
      body: "Space Grotesk",
      mono: "IBM Plex Mono",
    },
    palette: [
      { label: "Background", color: "#0f1011" },
      { label: "Panel", color: "#111315" },
      { label: "Primary Text", color: "#e7ecea" },
      { label: "Accent Green", color: "#7ee0b0" },
      { label: "Neon Pink", color: "#ff4fd8" },
    ],
    vars: {
      "--bg": "#0f1011",
      "--panel": "#111315",
      "--panel-2": "#0e1011",
      "--text": "#e7ecea",
      "--muted": "#9ea7a3",
      "--border": "#1c2120",
      "--accent": "#7ee0b0",
      "--glow-1": "rgba(126, 224, 176, 0.12)",
      "--glow-2": "rgba(255, 255, 255, 0.06)",
      "--font-headline": '"Instrument Serif", serif',
      "--font-body": '"Space Grotesk", sans-serif',
      "--font-mono": '"IBM Plex Mono", monospace',
      "--radius": "20px",
      "--tracking": "0.03em",
      "--hero-size": "clamp(2.2rem, 3vw, 3.4rem)",
      "--shadow": "0 20px 50px rgba(0, 0, 0, 0.3)",
      "--bg-texture": "none",
      "--bg-size": "auto",
      "--surface-texture": "none",
      "--surface-texture-size": "auto",
      "--panel-glow-color": "rgba(126, 224, 176, 0.12)",
      "--accent-pink": "#ff4fd8",
      "--image-a":
        "radial-gradient(circle at 25% 20%, rgba(126, 224, 176, 0.3), transparent 60%), linear-gradient(140deg, rgba(15, 16, 17, 0.95), rgba(20, 22, 23, 0.9))",
      "--image-b":
        "radial-gradient(circle at 70% 20%, rgba(231, 236, 234, 0.18), transparent 60%), linear-gradient(160deg, rgba(14, 16, 17, 0.95), rgba(19, 21, 22, 0.9))",
      "--image-c":
        "radial-gradient(circle at 20% 70%, rgba(126, 224, 176, 0.2), transparent 60%), linear-gradient(180deg, rgba(13, 15, 16, 0.95), rgba(17, 19, 20, 0.9))",
      "--image-overlay":
        "linear-gradient(120deg, rgba(126, 224, 176, 0.18), rgba(255, 255, 255, 0))",
    },
  },
};

const themeButtons = Array.from(document.querySelectorAll(".tab"));
const swatches = Array.from(document.querySelectorAll("[data-swatch-index]"));
const fontLabels = Array.from(document.querySelectorAll("[data-font-role]"));
const activeTheme = document.getElementById("active-theme");
const themeDescription = document.getElementById("theme-description");

const setThemeVars = (vars) => {
  Object.entries(vars).forEach(([key, value]) => {
    document.documentElement.style.setProperty(key, value);
  });
};

const updateSwatches = (palette) => {
  swatches.forEach((swatch, index) => {
    const data = palette[index];
    if (!data) {
      return;
    }

    swatch.style.setProperty("--swatch-color", data.color);
    const labelEl = swatch.querySelector(".swatch-label");
    const hexEl = swatch.querySelector(".swatch-hex");

    if (labelEl) {
      labelEl.textContent = data.label;
    }

    if (hexEl) {
      hexEl.textContent = data.color.toUpperCase();
    }
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
  updateSwatches(config.palette);
  updateFontLabels(config.fonts);
  setActiveTab(name);

  if (activeTheme) {
    activeTheme.textContent = config.label;
  }

  if (themeDescription) {
    themeDescription.textContent = config.description;
  }
};

const glowTargets = Array.from(
  document.querySelectorAll(".panel, .signal-card, .swatch, .type-sample, .ui-block")
);

const handleGlowMove = (event) => {
  const target = event.currentTarget;
  const rect = target.getBoundingClientRect();
  const x = ((event.clientX - rect.left) / rect.width) * 100;
  const y = ((event.clientY - rect.top) / rect.height) * 100;

  target.style.setProperty("--glow-x", `${x}%`);
  target.style.setProperty("--glow-y", `${y}%`);
  target.style.setProperty("--glow-intensity", "0.9");
};

glowTargets.forEach((target) => {
  target.addEventListener("pointermove", handleGlowMove);
  target.addEventListener("pointerleave", () => {
    target.style.setProperty("--glow-intensity", "0");
  });
});

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

const initialTheme = document.body.dataset.theme || "editorial";
applyTheme(initialTheme);
