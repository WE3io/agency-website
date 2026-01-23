/**
 * WE3 Logo Iterator Engine
 */

const state = {
    // Global
    zoom: 100,

    // Geometry Defaults (used when resetting/init)
    outerRadius: 400,
    middleRadius: 239,
    innerRadius: 100,
    cornerRound: 20,

    // UI Selection
    showGuides: false,
    showLabels: false,
    showIndices: false,

    // Spacing
    spacerRadius: 9,

    selectedStem: 8,
    selectionHighlighted: false,

    // Per-tier state
    tiers: {
        a: { visible: false, morph: 0, shadowBlur: 20, color: '#ffcc00', radius: 100 },
        b: { visible: false, morph: 0, shadowBlur: 20, color: '#ffcc00', radius: 239 },
        c: { visible: false, morph: 0, shadowBlur: 20, color: '#ffcc00', radius: 400 }
    },

    // Per-stem state (9 stems) - Updated with custom defaults
    stems: [
        { p1: 6, p2: 120, p3: 120, p4: 6, linked: false, width: 51, fill: "#021234", strokeVisible: true, strokeWidth: 3, strokeColor: "#ae00ff", glowVisible: true, glowBlur: 3, glowColor: "#ff0092" },
        { p1: 6, p2: 120, p3: 120, p4: 6, linked: false, width: 51, fill: "#021234", strokeVisible: true, strokeWidth: 3, strokeColor: "#ae00ff", glowVisible: true, glowBlur: 3, glowColor: "#ff0092" },
        { p1: 120, p2: 6, p3: 6, p4: 120, linked: false, width: 51, fill: "#021234", strokeVisible: true, strokeWidth: 3, strokeColor: "#ae00ff", glowVisible: true, glowBlur: 3, glowColor: "#ff0092" },
        { p1: 6, p2: 120, p3: 120, p4: 6, linked: false, width: 51, fill: "#021234", strokeVisible: true, strokeWidth: 3, strokeColor: "#ae00ff", glowVisible: true, glowBlur: 3, glowColor: "#ff0092" },
        { p1: 6, p2: 6, p3: 120, p4: 120, linked: false, width: 51, fill: "#021234", strokeVisible: true, strokeWidth: 3, strokeColor: "#ae00ff", glowVisible: true, glowBlur: 3, glowColor: "#ff0092" },
        { p1: 120, p2: 6, p3: 6, p4: 120, linked: false, width: 51, fill: "#021234", strokeVisible: true, strokeWidth: 3, strokeColor: "#ae00ff", glowVisible: true, glowBlur: 3, glowColor: "#ff0092" },
        { p1: 6, p2: 120, p3: 120, p4: 6, linked: false, width: 51, fill: "#021234", strokeVisible: true, strokeWidth: 3, strokeColor: "#ae00ff", glowVisible: true, glowBlur: 3, glowColor: "#ff0092" },
        { p1: 120, p2: 120, p3: 6, p4: 6, linked: false, width: 51, fill: "#021234", strokeVisible: true, strokeWidth: 3, strokeColor: "#ae00ff", glowVisible: true, glowBlur: 3, glowColor: "#ff0092" },
        { p1: 120, p2: 6, p3: 6, p4: 120, linked: false, width: 51, fill: "#021234", strokeVisible: true, strokeWidth: 3, strokeColor: "#ae00ff", glowVisible: true, glowBlur: 3, glowColor: "#ff0092" }
    ]
};

const elements = {
    svg: document.getElementById('logo-svg'),
    viewport: document.querySelector('.viewport'),

    // Containers (Tiers)
    tierOuter: document.getElementById('boundary-outer'),
    tierMiddle: document.getElementById('boundary-middle'),
    tierInner: document.getElementById('boundary-inner'),

    // Characters
    charW: document.getElementById('char-w'),
    charE: document.getElementById('char-e'),
    char3: document.getElementById('char-3'),
    labels: document.getElementById('labels-group'),
    tierLabels: document.getElementById('tier-labels-group'),

    spacersGroup: document.getElementById('char-w').parentNode.insertBefore(document.createElementNS('http://www.w3.org/2000/svg', 'g'), document.getElementById('char-w')), // Create spacers group before chars

    // Refs
    guides: document.querySelectorAll('.ref-circle'),
    innerRef: document.getElementById('inner-ref'),
    middleRef: document.getElementById('middle-ref'),
    outerRef: document.getElementById('outer-ref'),

    // Controls - Global
    inputZoom: document.getElementById('input-zoom'),
    valZoom: document.getElementById('val-zoom'),
    inputSpacer: document.getElementById('input-spacer'),
    valSpacer: document.getElementById('val-spacer'),
    checkGuides: document.getElementById('check-guides'),
    checkLabels: document.getElementById('check-labels'),
    checkIndices: document.getElementById('check-indices'),

    // Controls - Selection
    stemSelector: document.getElementById('stem-selector'),
    // stemLabel removed
    shapesSection: document.querySelector('.stem-geometry-section'), // For disabling

    // Controls - Shape Props
    inputWidth: document.getElementById('input-width'),
    inputFillColor: document.getElementById('input-fill-color'),
    checkStroke: document.getElementById('check-stroke'),
    inputStrokeWidth: document.getElementById('input-stroke-width'),
    inputStrokeColor: document.getElementById('input-stroke-color'),
    inputStrokeWidth: document.getElementById('input-stroke-width'),
    inputStrokeColor: document.getElementById('input-stroke-color'),
    checkGlow: document.getElementById('check-glow'),
    inputGlowBlur: document.getElementById('input-glow-blur'),
    inputGlowColor: document.getElementById('input-glow-color'),

    // Controls - Geometry
    pSliders: [
        document.getElementById('input-p1'),
        document.getElementById('input-p2'),
        document.getElementById('input-p3'),
        document.getElementById('input-p4')
    ],
    btnLink: document.getElementById('btn-link-corners'),

    // Controls - Batch
    btnGroupOuter: document.getElementById('btn-group-outer'),
    btnGroupCross: document.getElementById('btn-group-cross'),
    btnGroupAll: document.getElementById('btn-group-all')
};

// Character definitions
const CHAR_MAP = {
    'W': [
        { slot: 0, rStart: 0, rEnd: 2 },
        { slot: 1, rStart: 0, rEnd: 1 },
        { slot: 2, rStart: 0, rEnd: 2 }
    ],
    'E': [
        { slot: 3, rStart: 0, rEnd: 2 },
        { slot: 4, rStart: 0, rEnd: 1 },
        { slot: 5, rStart: 0, rEnd: 2 }
    ],
    '3': [
        { slot: 6, rStart: 0, rEnd: 2 },
        { slot: 7, rStart: 0, rEnd: 1 },
        { slot: 8, rStart: 0, rEnd: 2 }
    ]
};

function init() {
    setupInputs();
    setupDeselect();
    updateStemUI();
    update();

    setupViewToggles();

    document.getElementById('btn-reset').addEventListener('click', () => {
        location.reload(); // Simple reset
    });

    document.getElementById('btn-export-json').addEventListener('click', () => {
        const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(state, null, 2));
        const downloadAnchorNode = document.createElement('a');
        downloadAnchorNode.setAttribute("href", dataStr);
        downloadAnchorNode.setAttribute("download", "we3-logo-state.json");
        document.body.appendChild(downloadAnchorNode); // required for firefox
        downloadAnchorNode.click();
        downloadAnchorNode.remove();
    });

    // Import State
    const importBtn = document.getElementById('btn-import-json');
    const importInput = document.getElementById('input-import-file');

    importBtn.addEventListener('click', () => {
        importInput.click();
    });

    importInput.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = (e) => {
            try {
                const importedState = JSON.parse(e.target.result);
                // Validate/Merge? For now, simplistic replace.
                // We preserve valid keys.
                Object.keys(importedState).forEach(key => {
                    if (state.hasOwnProperty(key)) {
                        state[key] = importedState[key];
                    }
                });

                // Force UI Update
                // We need to update all input values to match the new state
                updateUIFromState();
                updateStemUI();
                update();
                alert("State imported successfully!");
            } catch (err) {
                console.error("Import Error:", err);
                alert("Failed to import state. Check console.");
            }
        };
        reader.readAsText(file);
        // Reset input value to allow re-importing same file
        e.target.value = '';
    });
}

function updateUIFromState() {
    // Sync Global controls
    elements.inputZoom.value = state.zoom;
    elements.valZoom.textContent = state.zoom + '%';

    elements.inputSpacer.value = state.spacerRadius;
    elements.valSpacer.textContent = state.spacerRadius;

    elements.checkGuides.checked = state.showGuides;
    elements.checkLabels.checked = state.showLabels;
    elements.checkIndices.checked = state.showIndices;

    // Sync Tiers
    ['a', 'b', 'c'].forEach(t => {
        const tier = state.tiers[t];
        document.getElementById(`check-${t}`).checked = tier.visible;
        document.getElementById(`input-radius-${t}`).value = tier.radius;
        document.getElementById(`input-morph-${t}`).value = tier.morph;
        document.getElementById(`input-blur-${t}`).value = tier.shadowBlur;
        document.getElementById(`input-color-${t}`).value = tier.color;
    });

    // Stem Selector
    elements.stemSelector.value = state.selectedStem;
}

function setupDeselect() {
    // Click on Background Deselects
    // We attach listener to viewport or SVG, stopping prop from stems.

    // Since stems are children, we can check e.target.
    // If e.target is the SVG background or viewport, deselect.
    // Stems are paths. 

    // Click on Background Deselects
    // Use viewport to catch clicks outside SVG too
    elements.viewport.addEventListener('click', (e) => {
        // If clicking deeply nested UI controls, we shouldn't deselect.
        // If target is viewport or SVG root.
        if (e.target === elements.viewport || e.target === elements.svg) {
            // Just hide the highlight, keep the selection active for editing
            state.selectionHighlighted = false;
            update();
        }
    });

    // Note: Stems don't have explicit click listeners yet to SELECT them, 
    // relying on Selector mostly. But user might want to click stems to select.
    // That's a future enhancement if not requested. For now, Selector is primary. 
}

function setupInputs() {
    // 1. Global Zoom
    elements.inputZoom.addEventListener('input', (e) => {
        state.zoom = parseInt(e.target.value);
        elements.valZoom.textContent = state.zoom + '%';
        updateZoom();
    });

    // 1b. Spacer Radius
    elements.inputSpacer.addEventListener('input', (e) => {
        state.spacerRadius = parseInt(e.target.value);
        elements.valSpacer.textContent = state.spacerRadius;
        update();
    });

    // 2. Stem Selector
    elements.stemSelector.addEventListener('change', (e) => {
        state.selectedStem = parseInt(e.target.value);
        state.selectionHighlighted = true; // Highlighting on explicit selection
        updateStemUI();
        update(); // For selection highlight
    });

    // Un-highlight on blur (clicking elsewhere)
    elements.stemSelector.addEventListener('blur', () => {
        state.selectionHighlighted = false;
        update();
    });

    // Handle initial UI state
    // if (state.selectedStem === -1) ... removed

    // 3. Shape Properties (Per-Stem)
    const shapeInputs = [
        { el: elements.inputWidth, prop: 'width', num: true },
        { el: elements.inputFillColor, prop: 'fill' },
        { el: elements.inputStrokeWidth, prop: 'strokeWidth', num: true },
        { el: elements.inputStrokeColor, prop: 'strokeColor' },
        { el: elements.inputGlowBlur, prop: 'glowBlur', num: true },
        { el: elements.inputGlowColor, prop: 'glowColor' }
    ];

    shapeInputs.forEach(item => {
        item.el.addEventListener('input', (e) => {
            // if (state.selectedStem === -1) return; // Guard removed

            const val = item.num ? parseFloat(e.target.value) : e.target.value;
            state.stems[state.selectedStem][item.prop] = val;

            // Validation/UI update only
            if (item.prop === 'width') document.getElementById('val-width').textContent = val;
            if (item.prop === 'glowBlur') document.getElementById('val-glow-blur').textContent = val;
            if (item.prop === 'strokeWidth') document.getElementById('val-stroke').textContent = val;

            update();
        });
    });

    elements.checkStroke.addEventListener('change', (e) => {
        // if (state.selectedStem === -1) return;
        state.stems[state.selectedStem].strokeVisible = e.target.checked;
        update();
    });

    elements.checkGlow.addEventListener('change', (e) => {
        // if (state.selectedStem === -1) return;
        state.stems[state.selectedStem].glowVisible = e.target.checked;
        update();
    });


    // 4. Geometry (P1-P4)
    elements.pSliders.forEach((input, i) => {
        input.addEventListener('input', (e) => {
            // if (state.selectedStem === -1) return;
            updatePValues(i, parseFloat(e.target.value));
        });
    });

    elements.btnLink.addEventListener('click', () => {
        if (state.selectedStem === -1) return;
        const s = state.stems[state.selectedStem];
        s.linked = !s.linked;
        elements.btnLink.classList.toggle('active', s.linked);
    });

    // 5. Batch Actions
    elements.btnGroupAll.addEventListener('click', () => {
        if (state.selectedStem === -1) return;
        syncGroup([0, 1, 2, 3, 4, 5, 6, 7, 8]);
    });
    elements.btnGroupOuter.addEventListener('click', () => {
        if (state.selectedStem === -1) return;
        syncGroup([0, 2, 3, 5, 6, 8]);
    });
    elements.btnGroupCross.addEventListener('click', () => {
        if (state.selectedStem === -1) return;
        syncGroup([1, 4, 7]);
    });

    // 6. Container Controls (Tiers)
    // 6. Container Controls (Tiers)
    ['a', 'b', 'c'].forEach((t, index) => {
        // Add data-tier attribute for CSS styling
        const tierSection = document.querySelectorAll('.tier-sub-section')[index];
        if (tierSection) tierSection.setAttribute('data-tier', t);

        // Toggle
        document.getElementById(`check-${t}`).addEventListener('change', (e) => {
            state.tiers[t].visible = e.target.checked;
            update();
        });

        // Radius
        document.getElementById(`input-radius-${t}`).addEventListener('input', (e) => {
            const val = parseFloat(e.target.value);
            state.tiers[t].radius = val;

            // Sync legacy global radius for basic calculation needs (if consistent)
            if (t === 'a') state.innerRadius = val;
            if (t === 'b') state.middleRadius = val;
            if (t === 'c') state.outerRadius = val;

            update();
        });

        // Morph
        document.getElementById(`input-morph-${t}`).addEventListener('input', (e) => {
            state.tiers[t].morph = parseFloat(e.target.value);
            update();
        });

        // Shadow Blur
        document.getElementById(`input-blur-${t}`).addEventListener('input', (e) => {
            state.tiers[t].shadowBlur = parseFloat(e.target.value);
            update();
        });

        // Color
        document.getElementById(`input-color-${t}`).addEventListener('input', (e) => {
            state.tiers[t].color = e.target.value;
            update();
        });
    });
}

function setupViewToggles() {
    elements.checkGuides.addEventListener('change', (e) => {
        state.showGuides = e.target.checked;
        update();
    });
    elements.checkLabels.addEventListener('change', (e) => {
        state.showLabels = e.target.checked;
        update();
    });
    elements.checkIndices.addEventListener('change', (e) => {
        state.showIndices = e.target.checked;
        update();
    });
}

function updateStemUI() {
    // Always Enabled
    elements.shapesSection.classList.remove('disabled-section');
    const s = state.stems[state.selectedStem];

    // Label removed
    // elements.stemLabel.textContent = `STEM ${state.selectedStem + 1}`;

    // Shape Props
    elements.inputWidth.value = s.width;
    document.getElementById('val-width').textContent = s.width;

    elements.inputFillColor.value = s.fill;

    elements.checkStroke.checked = s.strokeVisible;
    elements.inputStrokeWidth.value = s.strokeWidth;
    document.getElementById('val-stroke').textContent = s.strokeWidth;
    elements.inputStrokeColor.value = s.strokeColor;

    elements.checkGlow.checked = s.glowVisible;
    elements.inputGlowBlur.value = s.glowBlur;
    document.getElementById('val-glow-blur').textContent = s.glowBlur;
    elements.inputGlowColor.value = s.glowColor;

    elements.inputGlowBlur.value = s.glowBlur;
    document.getElementById('val-glow-blur').textContent = s.glowBlur;
    elements.inputGlowColor.value = s.glowColor;

    // Geometry
    elements.pSliders[0].value = s.p1;
    elements.pSliders[1].value = s.p2;
    elements.pSliders[2].value = s.p3;
    elements.pSliders[3].value = s.p4;
    elements.btnLink.classList.toggle('active', s.linked);
}

function updatePValues(idx, val) {
    // if (state.selectedStem === -1) return;
    if (isNaN(val)) return;
    if (val < 0) val = 0;
    if (val > 120) val = 120; // Max 120 per requirements

    const s = state.stems[state.selectedStem];
    if (s.linked) {
        s.p1 = s.p2 = s.p3 = s.p4 = val;
        // Update all inputs
        elements.pSliders.forEach(el => el.value = val);
    } else {
        s[`p${idx + 1}`] = val;
    }
    update();
}

function syncGroup(indices) {
    // if (state.selectedStem === -1) return;
    const source = state.stems[state.selectedStem];
    // Deep copy properties
    indices.forEach(idx => {
        state.stems[idx] = JSON.parse(JSON.stringify(source));
    });
    update();
}

function updateZoom() {
    const size = 1000;
    const factor = state.zoom / 100;
    const newSize = size / factor;
    const offset = (size - newSize) / 2;

    elements.svg.setAttribute('viewBox', `${offset} ${offset} ${newSize} ${newSize}`);
}

function update() {
    elements.innerRef.setAttribute('r', state.innerRadius);
    elements.middleRef.setAttribute('r', state.middleRadius);
    elements.outerRef.setAttribute('r', state.outerRadius);

    updateBoundaries();
    drawSpacers();
    drawCharacters();
    drawTierLabels();
}


// --- Geometry & Drawing ---

function updateBoundaries() {
    const drawTier = (el, tierKey) => {
        const tier = state.tiers[tierKey];
        el.style.display = tier.visible ? 'block' : 'none';
        if (tier.visible) {
            // Path
            el.setAttribute('d', getNonagonPath(tier.radius, tier.morph));
            // Style
            el.style.stroke = tier.color;
            // Shadow Blur using drop-shadow
            if (tier.shadowBlur > 0) {
                el.style.filter = `drop-shadow(0 0 ${tier.shadowBlur}px ${tier.color})`;
            } else {
                el.style.filter = 'none';
            }

            // Update Dynamic UI Color
            document.documentElement.style.setProperty(`--tier-${tierKey}-color`, tier.color);
        }
    };

    drawTier(elements.tierOuter, 'c');
    drawTier(elements.tierMiddle, 'b');
    drawTier(elements.tierInner, 'a');
}

function drawCharacters() {
    elements.charW.innerHTML = '';
    elements.charE.innerHTML = '';
    elements.char3.innerHTML = '';
    elements.labels.innerHTML = '';

    renderChar(elements.charW, 'W', 0); // Start label count
    renderChar(elements.charE, 'E', 3);
    renderChar(elements.char3, '3', 6);
}

function renderChar(container, type, startIdx) {
    const radii = [state.innerRadius, state.middleRadius, state.outerRadius];
    const segments = CHAR_MAP[type];

    segments.forEach((seg, i) => {
        // const angle = getSlotAngle(seg.slot); // Legacy
        const stemIdx = startIdx + i;
        const angle = calculateStemAngle(stemIdx); // New logic
        const stemState = state.stems[stemIdx];

        // Use the morph value of the specific tier for each endpoint
        const tierStartKey = ['a', 'b', 'c'][seg.rStart];
        const tierEndKey = ['a', 'b', 'c'][seg.rEnd];
        const morph1 = state.tiers[tierStartKey].morph;
        const morph2 = state.tiers[tierEndKey].morph;

        const p1 = getPointOnTier(radii[seg.rStart], angle, morph1);
        const p2 = getPointOnTier(radii[seg.rEnd], angle, morph2);

        drawStem(container, p1.x, p1.y, p2.x, p2.y, stemState.width, stemIdx);

        // Add label at midpoint (if needed)
        const mx = (p1.x + p2.x) / 2;
        const my = (p1.y + p2.y) / 2;
        drawLabel(stemIdx + 1, mx, my);
    });
}
function drawStem(container, x1, y1, x2, y2, width, stemIdx) {
    const dx = x2 - x1;
    const dy = y2 - y1;
    const dist = Math.sqrt(dx * dx + dy * dy);
    if (dist === 0) return;

    // Unit tangent and normal vectors
    const tx = dx / dist;
    const ty = dy / dist;
    const nx = -ty;
    const ny = tx;

    const w2 = width / 2;
    const s = state.stems[stemIdx];

    // Canonical Corners & Vectors
    // P1 (TL input) -> Outer-Left (c3)
    // P2 (TR input) -> Outer-Right (c4)
    // P3 (BL input) -> Inner-Left (c2)
    // P4 (BR input) -> Inner-Right (c1)

    // Derived Corners in Local Space
    // c1 = Start + Normal (Right) => Start-Right
    const c1 = { x: x1 + nx * w2, y: y1 + ny * w2 }; // BR
    // c2 = Start - Normal (Left) => Start-Left
    const c2 = { x: x1 - nx * w2, y: y1 - ny * w2 }; // BL
    // c3 = End - Normal (Left) => End-Left
    const c3 = { x: x2 - nx * w2, y: y2 - ny * w2 }; // TL
    // c4 = End + Normal (Right) => End-Right
    const c4 = { x: x2 + nx * w2, y: y2 + ny * w2 }; // TR

    // STRICT Clamping
    const maxR = Math.min(w2, dist / 2);

    // Map P1..P4 to corners based on Petal Model
    const rTL = Math.min(s.p1, maxR); // Maps to c3 (End-Left)
    const rTR = Math.min(s.p2, maxR); // Maps to c4 (End-Right)
    const rBL = Math.min(s.p3, maxR); // Maps to c2 (Start-Left)
    const rBR = Math.min(s.p4, maxR); // Maps to c1 (Start-Right)

    const vRight = { x: nx, y: ny };
    const vDown = { x: -tx, y: -ty };
    const vLeft = { x: -nx, y: -ny };
    const vUp = { x: tx, y: ty };

    // Build Path Clockwise: TL(c3) -> TR(c4) -> BR(c1) -> BL(c2) -> TL(c3)
    const MIN_ARC = 0.5;

    // Start at Top Edge (after TL corner)
    let path = `M ${c3.x + vRight.x * rTL},${c3.y + vRight.y * rTL}`;

    // Top Edge -> TR (c4)
    path += ` L ${c4.x - vRight.x * rTR},${c4.y - vRight.y * rTR}`;
    if (rTR > MIN_ARC) path += ` A ${rTR},${rTR} 0 0 1 ${c4.x + vDown.x * rTR},${c4.y + vDown.y * rTR}`;
    else path += ` L ${c4.x},${c4.y}`;

    // Right Edge -> BR (c1)
    path += ` L ${c1.x - vDown.x * rBR},${c1.y - vDown.y * rBR}`;
    if (rBR > MIN_ARC) path += ` A ${rBR},${rBR} 0 0 1 ${c1.x + vLeft.x * rBR},${c1.y + vLeft.y * rBR}`;
    else path += ` L ${c1.x},${c1.y}`;

    // Bottom Edge -> BL (c2)
    path += ` L ${c2.x - vLeft.x * rBL},${c2.y - vLeft.y * rBL}`;
    if (rBL > MIN_ARC) path += ` A ${rBL},${rBL} 0 0 1 ${c2.x + vUp.x * rBL},${c2.y + vUp.y * rBL}`;
    else path += ` L ${c2.x},${c2.y}`;

    // Left Edge -> TL (c3)
    path += ` L ${c3.x - vUp.x * rTL},${c3.y - vUp.y * rTL}`;
    if (rTL > MIN_ARC) path += ` A ${rTL},${rTL} 0 0 1 ${c3.x + vRight.x * rTL},${c3.y + vRight.y * rTL}`;
    else path += ` L ${c3.x},${c3.y}`;

    path += ' Z';

    const el = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    el.setAttribute('d', path);
    // Apply Per-Stem Styles
    el.setAttribute('fill', s.fill);

    if (s.strokeVisible) {
        el.setAttribute('stroke', s.strokeColor);
        el.setAttribute('stroke-width', s.strokeWidth);
    } else {
        el.setAttribute('stroke', 'none');
    }

    // Apply Glow via drop-shadow
    // Apply Glow via drop-shadow
    if (s.glowVisible && s.glowBlur > 0) {
        el.style.filter = `drop-shadow(0 0 ${s.glowBlur}px ${s.glowColor})`;
    } else {
        el.style.filter = 'none';
    }

    if (state.selectedStem === stemIdx && state.selectedStem !== -1 && state.selectionHighlighted) {
        el.classList.add('selected-stem');
    }

    // Click-to-Select Logic
    el.style.cursor = 'pointer';
    el.addEventListener('click', (e) => {
        e.stopPropagation(); // Prevent background deselect
        state.selectedStem = stemIdx;
        state.selectionHighlighted = true;
        elements.stemSelector.value = stemIdx.toString();
        updateStemUI();
        update();
    });

    container.appendChild(el);
}

// Reused Maths
// Reused Maths

function calculateStemAngle(stemIdx) {
    // 9 stems total.
    // Groups: 0-2 (W), 3-5 (E), 6-8 (3).
    // Config:
    // - 3 Groups
    // - Gap between groups depends on spacerRadius.
    // - Internal gaps compress to fit.

    // Let's model this:
    // spacerRadius (0-45) -> Acts as the "extra" degrees of separation between groups.
    // Total 360 deg.
    // 3 * spacerAngle + 9 * internalStemSpace = 360? 
    // Wait, stems are points/lines effectively for the angle calc.
    // So we have 9 intervals? No, 9 stems.

    // Let's define:
    // gapBetweenGroups = standardGap + spacerRadiusAngle
    // gapInternal = standardGap - (spacerRadiusAngle / 3) -- to conserve 360?

    // Standard (Equal) Spacing:
    // 360 / 9 = 40 deg per stem step.

    // Algorithm:
    // 1. Calculate 'Spacer Angle' explicitly from slider (e.g., 1 unit = 0.5 degrees or just direct degrees).
    const spacerAngleDeg = state.spacerRadius * 2; // Multiplier to make it more visible

    // 2. We have 3 "Group Gaps" and 6 "Internal Gaps".
    // 3 Group Gaps + 6 Internal Gaps = 360?
    // Actually, we have 9 segments between the 9 stems if we go full circle.
    // (0->1, 1->2, 2->3(Gap), 3->4, 4->5, 5->6(Gap), 6->7, 7->8, 8->0(Gap))

    // Let I = Internal Gap Angle
    // Let G = Group Gap Angle = I + spacerAngleDeg
    // 6*I + 3*(I + spacerAngleDeg) = 360
    // 9*I + 3*spacerAngleDeg = 360
    // 9*I = 360 - 3*spacerAngleDeg
    // I = (360 - 3*spacerAngleDeg) / 9
    // I = 40 - spacerAngleDeg/3

    const internalGap = 40 - (spacerAngleDeg / 3);
    const groupGap = internalGap + spacerAngleDeg;

    // Starting Angle?
    // Standard Slot 1 (Top) was -90 deg.
    // Slot 0 was -130 deg. (-90 - 40)
    // Let's anchor Group W (0,1,2) centered around... where?
    // W (0,1,2) was centered at -90? No, Slot 1 is Top. Slot 0 is Left of Top. Slot 2 is Right.
    // So W is centered at -90.
    // Stem 1 is at -90.
    // Stem 0 is -90 - internalGap.
    // Stem 2 is -90 + internalGap.

    let angleDeg = 0;

    // Group W (0,1,2) Center: -90
    if (stemIdx === 0) angleDeg = -90 - internalGap;
    if (stemIdx === 1) angleDeg = -90;
    if (stemIdx === 2) angleDeg = -90 + internalGap;

    // Distance from W-End (2) to E-Start (3) is Group Gap.
    // Angle(3) = Angle(2) + groupGap.

    // Group E (3,4,5)
    // Center should be -90 + 120 (standard)? = 30 deg.
    // Let's calculate cumulatively to be safe.

    // Centers of groups in standard: -90, 30, 150. (120 deg apart)
    // With spacing, the centers should stay 120 deg apart to maintain symmetry?
    // Yes, usually we want to preserve the 120 deg symmetry of the 3 chars.

    // So:
    // Group W Center: -90
    // Group E Center: 30
    // Group 3 Center: 150

    // Defines offsets from group center: [-I, 0, +I]

    let groupCenter = 0;
    if (stemIdx >= 0 && stemIdx <= 2) groupCenter = -90;
    if (stemIdx >= 3 && stemIdx <= 5) groupCenter = 30;
    if (stemIdx >= 6 && stemIdx <= 8) groupCenter = 150;

    const offsetInGroup = (stemIdx % 3) - 1; // -1, 0, 1
    angleDeg = groupCenter + (offsetInGroup * internalGap);

    return angleDeg * (Math.PI / 180);
}

function drawSpacers() {
    // spacerRadius logic implies these are circles *between* the groups.
    // If showGuides is false, remove them.
    if (!state.showGuides) {
        elements.spacersGroup.innerHTML = '';
        return;
    }

    elements.spacersGroup.innerHTML = '';

    // We want spacers between (2,3), (5,6), (8,0).
    // Locations: Midpoint of the Group Gaps.
    // Group W ends at -90 + I. Group E starts at 30 - I.
    // Gap Midpoint = (-90 + I + 30 - I) / 2 ... wait.
    // (-90 + 30) / 2 = -30.
    // Standard midpoints: -30 (between W-E), 90 (between E-3), 210 (between 3-W).

    const midpoints = [-30, 90, 210]; // Degrees

    midpoints.forEach(deg => {
        const rad = deg * (Math.PI / 180);
        // Place at middle radius?
        const r = state.middleRadius;
        const cx = 500 + Math.cos(rad) * r;
        const cy = 500 + Math.sin(rad) * r;

        // Draw the Spacer Circle
        // Radius? User said "Spacer Radius".
        // Let's use `state.spacerRadius` (which is 0-45). 
        // Maybe purely visual for now? Or literally that radius.
        // User request: "increase a radius to effect the spacking... red circle"
        const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        circle.setAttribute('cx', cx);
        circle.setAttribute('cy', cy);
        circle.setAttribute('r', Math.max(5, state.spacerRadius * 4)); // Scale for visibility
        circle.setAttribute('fill', 'rgba(255, 0, 0, 0.3)');
        circle.setAttribute('stroke', 'red');
        circle.setAttribute('stroke-dasharray', '4 4');
        elements.spacersGroup.appendChild(circle);
    });
}


function getPointOnTier(radius, angle, morphValue) {
    const center = 500;
    const sides = 9;
    const morph = morphValue / 100;
    const sideAngle = (Math.PI * 2) / sides;
    const inRadius = radius * Math.cos(sideAngle / 2);
    const cx = center + Math.cos(angle) * radius;
    const cy = center + Math.sin(angle) * radius;
    const sideCenterAngle = Math.round((angle + Math.PI / 2) / sideAngle) * sideAngle - Math.PI / 2;
    const distFromSideCenter = angle - sideCenterAngle;
    const clampedDist = Math.max(-sideAngle / 2 + 0.001, Math.min(sideAngle / 2 - 0.001, distFromSideCenter));
    const nRadius = inRadius / Math.cos(clampedDist);
    const nx = center + Math.cos(angle) * nRadius;
    const ny = center + Math.sin(angle) * nRadius;
    return {
        x: nx * (1 - morph) + cx * morph,
        y: ny * (1 - morph) + cy * morph
    };
}

function getNonagonPath(radius, morphValue) {
    let path = '';
    const totalPoints = 180;
    for (let i = 0; i <= totalPoints; i++) {
        const angle = (i / totalPoints) * Math.PI * 2 - Math.PI / 2;
        const p = getPointOnTier(radius, angle, morphValue);
        path += (i === 0 ? 'M' : 'L') + `${p.x.toFixed(2)},${p.y.toFixed(2)}`;
    }
    return path + 'Z';
}

function drawLabel(num, x, y) {
    if (!state.showIndices) return;
    const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    text.setAttribute('x', x);
    text.setAttribute('y', y);
    text.setAttribute('class', 'segment-label');
    text.textContent = num;
    elements.labels.appendChild(text);
}

function drawTierLabels() {
    elements.tierLabels.innerHTML = '';
    const radii = [state.innerRadius, state.middleRadius, state.outerRadius];
    const letters = ['a', 'b', 'c'];
    const north = -Math.PI / 2;
    radii.forEach((r, i) => {
        const key = letters[i];
        if (!state.showLabels) return; // Hide A,B,C if Labels unchecked
        const tier = state.tiers[key];
        if (!tier.visible) return;
        const p = getPointOnTier(r, north, tier.morph);
        const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        text.setAttribute('x', p.x);
        text.setAttribute('y', p.y - 15);
        text.setAttribute('class', 'tier-label');
        text.textContent = key.toUpperCase();
        elements.tierLabels.appendChild(text);
    });
}

init();
