const themeConfigs = {
  sketch: {
    label: "Sketch",
    description: "Early sketchlines with gentle depth.",
    fonts: {
      display: "Newsreader",
      body: "Space Grotesk",
      accent: "IBM Plex Mono",
    },
    palette: [
      { label: "Sketch Paper", color: "#eef2f6" },
      { label: "Surface", color: "#f6f8fb" },
      { label: "Shadow", color: "#c9d2df" },
      { label: "Accent", color: "#9aa7ff" },
      { label: "Ink", color: "#2e2f35" },
    ],
    vars: {
      "--bg": "#eef2f6",
      "--surface": "#f6f8fb",
      "--surface-2": "#f0f3f8",
      "--surface-3": "#e8edf4",
      "--text": "#1b1f25",
      "--muted": "#6c7380",
      "--border": "#d9dee7",
      "--accent": "#9aa7ff",
      "--button-text": "#0f1117",
      "--ink": "#2e2f35",
      "--glow-1": "rgba(154, 167, 255, 0.18)",
      "--glow-2": "rgba(210, 220, 235, 0.2)",
      "--font-display": '"Newsreader", serif',
      "--font-body": '"Space Grotesk", sans-serif',
      "--font-accent": '"IBM Plex Mono", monospace',
      "--radius": "20px",
      "--tracking": "0.01em",
      "--hero-size": "clamp(2.2rem, 3.4vw, 3.6rem)",
      "--shadow-soft":
        "12px 12px 24px rgba(26, 36, 52, 0.12), -12px -12px 24px rgba(255, 255, 255, 0.9)",
      "--shadow-inner":
        "inset 2px 2px 6px rgba(255, 255, 255, 0.8), inset -4px -4px 8px rgba(26, 36, 52, 0.12)",
      "--shadow-panel":
        "18px 18px 40px rgba(26, 36, 52, 0.12), -12px -12px 30px rgba(255, 255, 255, 0.9)",
      "--paper-texture":
        "repeating-linear-gradient(120deg, rgba(46, 47, 53, 0.03) 0, rgba(46, 47, 53, 0.03) 1px, transparent 1px, transparent 9px)",
      "--sketch-lines":
        "repeating-linear-gradient(170deg, rgba(46, 47, 53, 0.16) 0, rgba(46, 47, 53, 0.16) 1px, transparent 1px, transparent 10px)",
      "--image-a":
        "radial-gradient(circle at 30% 20%, rgba(154, 167, 255, 0.35), transparent 60%), linear-gradient(140deg, #f7f9fb, #e3e8f0)",
      "--image-b":
        "radial-gradient(circle at 70% 25%, rgba(154, 167, 255, 0.25), transparent 60%), linear-gradient(160deg, #f3f6fb, #dce2ec)",
      "--image-c":
        "radial-gradient(circle at 25% 70%, rgba(154, 167, 255, 0.2), transparent 60%), linear-gradient(180deg, #f1f5fa, #d9e0ea)",
      "--image-overlay":
        "repeating-linear-gradient(160deg, rgba(46, 47, 53, 0.18) 0, rgba(46, 47, 53, 0.18) 1px, transparent 1px, transparent 16px)",
    },
  },
  hybrid: {
    label: "Hybrid",
    description: "Balanced sketch texture and soft 3D surfaces.",
    fonts: {
      display: "Fraunces",
      body: "Space Grotesk",
      accent: "IBM Plex Mono",
    },
    palette: [
      { label: "Paper", color: "#edf1f4" },
      { label: "Surface", color: "#f7f9fb" },
      { label: "Shadow", color: "#c8d3de" },
      { label: "Accent", color: "#7fb7ff" },
      { label: "Ink", color: "#2b2d33" },
    ],
    vars: {
      "--bg": "#edf1f4",
      "--surface": "#f7f9fb",
      "--surface-2": "#eef2f6",
      "--surface-3": "#e7ecf2",
      "--text": "#1b1f25",
      "--muted": "#69717c",
      "--border": "#d7dde6",
      "--accent": "#7fb7ff",
      "--button-text": "#0f1117",
      "--ink": "#2b2d33",
      "--glow-1": "rgba(127, 183, 255, 0.18)",
      "--glow-2": "rgba(189, 209, 235, 0.2)",
      "--font-display": '"Fraunces", serif',
      "--font-body": '"Space Grotesk", sans-serif',
      "--font-accent": '"IBM Plex Mono", monospace',
      "--radius": "20px",
      "--tracking": "0.012em",
      "--hero-size": "clamp(2.3rem, 3.5vw, 3.8rem)",
      "--shadow-soft":
        "14px 14px 28px rgba(25, 35, 50, 0.14), -14px -14px 28px rgba(255, 255, 255, 0.92)",
      "--shadow-inner":
        "inset 2px 2px 6px rgba(255, 255, 255, 0.8), inset -4px -4px 10px rgba(25, 35, 50, 0.14)",
      "--shadow-panel":
        "20px 20px 44px rgba(25, 35, 50, 0.14), -12px -12px 30px rgba(255, 255, 255, 0.9)",
      "--paper-texture":
        "repeating-linear-gradient(120deg, rgba(43, 45, 51, 0.02) 0, rgba(43, 45, 51, 0.02) 1px, transparent 1px, transparent 10px)",
      "--sketch-lines":
        "repeating-linear-gradient(170deg, rgba(43, 45, 51, 0.12) 0, rgba(43, 45, 51, 0.12) 1px, transparent 1px, transparent 12px)",
      "--image-a":
        "radial-gradient(circle at 30% 20%, rgba(127, 183, 255, 0.35), transparent 60%), linear-gradient(140deg, #f8fafc, #e3e9f1)",
      "--image-b":
        "radial-gradient(circle at 70% 25%, rgba(127, 183, 255, 0.3), transparent 60%), linear-gradient(160deg, #f4f7fb, #dde3ed)",
      "--image-c":
        "radial-gradient(circle at 25% 70%, rgba(127, 183, 255, 0.2), transparent 60%), linear-gradient(180deg, #f1f5fa, #d7dde7)",
      "--image-overlay":
        "repeating-linear-gradient(160deg, rgba(43, 45, 51, 0.14) 0, rgba(43, 45, 51, 0.14) 1px, transparent 1px, transparent 18px)",
    },
  },
  sculpted: {
    label: "Sculpted",
    description: "Fully rendered, tactile depth with minimal sketching.",
    fonts: {
      display: "Fraunces",
      body: "Space Grotesk",
      accent: "IBM Plex Mono",
    },
    palette: [
      { label: "Base", color: "#e7edf4" },
      { label: "Surface", color: "#f2f6fb" },
      { label: "Shadow", color: "#c3ccd8" },
      { label: "Accent", color: "#f3a452" },
      { label: "Ink", color: "#2a2d32" },
    ],
    vars: {
      "--bg": "#e7edf4",
      "--surface": "#f2f6fb",
      "--surface-2": "#e9eef4",
      "--surface-3": "#e1e8f0",
      "--text": "#1b1f25",
      "--muted": "#6b7380",
      "--border": "#d2d8e2",
      "--accent": "#f3a452",
      "--button-text": "#2b1b0c",
      "--ink": "#2a2d32",
      "--glow-1": "rgba(243, 164, 82, 0.2)",
      "--glow-2": "rgba(201, 211, 225, 0.2)",
      "--font-display": '"Fraunces", serif',
      "--font-body": '"Space Grotesk", sans-serif',
      "--font-accent": '"IBM Plex Mono", monospace',
      "--radius": "22px",
      "--tracking": "0.014em",
      "--hero-size": "clamp(2.4rem, 3.6vw, 3.9rem)",
      "--shadow-soft":
        "16px 16px 32px rgba(23, 32, 44, 0.16), -16px -16px 32px rgba(255, 255, 255, 0.94)",
      "--shadow-inner":
        "inset 2px 2px 6px rgba(255, 255, 255, 0.75), inset -5px -5px 12px rgba(23, 32, 44, 0.18)",
      "--shadow-panel":
        "24px 24px 50px rgba(23, 32, 44, 0.18), -16px -16px 36px rgba(255, 255, 255, 0.9)",
      "--paper-texture": "none",
      "--sketch-lines": "none",
      "--image-a":
        "radial-gradient(circle at 30% 20%, rgba(243, 164, 82, 0.35), transparent 60%), linear-gradient(140deg, #f7f9fc, #e1e7ef)",
      "--image-b":
        "radial-gradient(circle at 70% 25%, rgba(243, 164, 82, 0.3), transparent 60%), linear-gradient(160deg, #f4f7fb, #dce3ed)",
      "--image-c":
        "radial-gradient(circle at 25% 70%, rgba(243, 164, 82, 0.25), transparent 60%), linear-gradient(180deg, #f1f5fa, #d6dde7)",
      "--image-overlay":
        "radial-gradient(circle at 30% 20%, rgba(255, 255, 255, 0.5), transparent 60%)",
    },
  },
  studio: {
    label: "Studio",
    description: "Playful color infusions with crafted depth.",
    fonts: {
      display: "Newsreader",
      body: "Space Grotesk",
      accent: "IBM Plex Mono",
    },
    palette: [
      { label: "Paper", color: "#edf2f6" },
      { label: "Surface", color: "#f8fafc" },
      { label: "Shadow", color: "#c7d2df" },
      { label: "Accent", color: "#2fb6b9" },
      { label: "Ink", color: "#2c2f35" },
    ],
    vars: {
      "--bg": "#edf2f6",
      "--surface": "#f8fafc",
      "--surface-2": "#eef3f8",
      "--surface-3": "#e7edf4",
      "--text": "#1b1f25",
      "--muted": "#68717b",
      "--border": "#d6dde7",
      "--accent": "#2fb6b9",
      "--button-text": "#0b1b1d",
      "--ink": "#2c2f35",
      "--glow-1": "rgba(47, 182, 185, 0.18)",
      "--glow-2": "rgba(255, 160, 133, 0.18)",
      "--font-display": '"Newsreader", serif',
      "--font-body": '"Space Grotesk", sans-serif',
      "--font-accent": '"IBM Plex Mono", monospace',
      "--radius": "22px",
      "--tracking": "0.012em",
      "--hero-size": "clamp(2.3rem, 3.5vw, 3.7rem)",
      "--shadow-soft":
        "14px 14px 30px rgba(24, 35, 46, 0.14), -14px -14px 30px rgba(255, 255, 255, 0.92)",
      "--shadow-inner":
        "inset 2px 2px 6px rgba(255, 255, 255, 0.8), inset -4px -4px 10px rgba(24, 35, 46, 0.16)",
      "--shadow-panel":
        "22px 22px 48px rgba(24, 35, 46, 0.16), -14px -14px 32px rgba(255, 255, 255, 0.92)",
      "--paper-texture":
        "repeating-linear-gradient(120deg, rgba(44, 47, 53, 0.02) 0, rgba(44, 47, 53, 0.02) 1px, transparent 1px, transparent 12px)",
      "--sketch-lines":
        "repeating-linear-gradient(170deg, rgba(44, 47, 53, 0.1) 0, rgba(44, 47, 53, 0.1) 1px, transparent 1px, transparent 14px)",
      "--image-a":
        "radial-gradient(circle at 30% 20%, rgba(47, 182, 185, 0.35), transparent 60%), linear-gradient(140deg, #f8fafc, #e2e8f0)",
      "--image-b":
        "radial-gradient(circle at 70% 25%, rgba(255, 160, 133, 0.3), transparent 60%), linear-gradient(160deg, #f4f7fb, #dde3ed)",
      "--image-c":
        "radial-gradient(circle at 25% 70%, rgba(47, 182, 185, 0.2), transparent 60%), linear-gradient(180deg, #f1f5fa, #d7dde7)",
      "--image-overlay":
        "repeating-linear-gradient(160deg, rgba(44, 47, 53, 0.12) 0, rgba(44, 47, 53, 0.12) 1px, transparent 1px, transparent 18px)",
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

const initialTheme = document.body.dataset.theme || "sketch";
applyTheme(initialTheme);

const reactiveElements = Array.from(document.querySelectorAll(".light-reactive"));
const maxTilt = 6;
const maxShadow = 10;

const handleLightMove = (event) => {
  const target = event.currentTarget;
  const rect = target.getBoundingClientRect();
  const x = Math.min(Math.max((event.clientX - rect.left) / rect.width, 0), 1);
  const y = Math.min(Math.max((event.clientY - rect.top) / rect.height, 0), 1);
  const tiltX = (0.5 - y) * maxTilt;
  const tiltY = (x - 0.5) * maxTilt;
  const shadowX = (x - 0.5) * maxShadow;
  const shadowY = (y - 0.5) * maxShadow;

  target.style.setProperty("--tilt-x", `${tiltX}deg`);
  target.style.setProperty("--tilt-y", `${tiltY}deg`);
  target.style.setProperty("--shadow-x", `${shadowX}px`);
  target.style.setProperty("--shadow-y", `${shadowY}px`);
  target.style.setProperty("--light-x", `${x * 100}%`);
  target.style.setProperty("--light-y", `${y * 100}%`);
  target.style.setProperty("--light-intensity", "0.9");
};

const resetLight = (target) => {
  target.style.setProperty("--tilt-x", "0deg");
  target.style.setProperty("--tilt-y", "0deg");
  target.style.setProperty("--shadow-x", "0px");
  target.style.setProperty("--shadow-y", "0px");
  target.style.setProperty("--light-intensity", "0");
};

reactiveElements.forEach((element) => {
  element.addEventListener("pointermove", handleLightMove);
  element.addEventListener("pointerleave", () => resetLight(element));
});
