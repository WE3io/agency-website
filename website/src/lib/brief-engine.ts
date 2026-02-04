/**
 * WE3 Brief Engine
 * Client-side rules-based logic for the Brief Builder
 *
 * This engine handles:
 * - Prompt flow with conditional logic
 * - Gap detection (missing budget, vague success criteria, etc.)
 * - Fit check mapping (budget/scope/urgency → crew shape + cost band)
 */

// Types
export interface BriefStep {
  id: string;
  question: string;
  type: 'text' | 'textarea' | 'select' | 'multiselect' | 'budget';
  placeholder?: string;
  options?: Array<{ value: string; label: string }>;
  required?: boolean;
  helpText?: string;
}

export interface BriefResponse {
  stepId: string;
  value: string | string[];
}

export interface BriefData {
  problem: string;
  users: string;
  successCriteria: string;
  constraints: string;
  budgetRange: string;
  timeline: string;
}

export interface GapCheck {
  type: 'warning' | 'critical';
  field: string;
  message: string;
  suggestion: string;
}

export interface FitCheckResult {
  engagement: 'consulting' | 'co-building' | 'venture' | 'community';
  crewShape: {
    core: string[];
    fractional: string[];
    apprentices: boolean;
  };
  costBand: {
    label: string;
    range: string;
    duration: string;
  };
  confidence: 'high' | 'medium' | 'low';
  notes: string[];
}

// Brief Steps Definition
export const BRIEF_STEPS: BriefStep[] = [
  {
    id: 'problem',
    question: "What problem are you trying to solve?",
    type: 'textarea',
    placeholder: "Describe the challenge you're facing. What's not working? What opportunity are you trying to capture?",
    required: true,
    helpText: "Be specific about the pain points and their impact on your business.",
  },
  {
    id: 'users',
    question: "Who are the users or stakeholders?",
    type: 'textarea',
    placeholder: "Who will use this solution? Who cares about the outcome? Who has influence over decisions?",
    required: true,
    helpText: "Understanding your users helps us design the right solution.",
  },
  {
    id: 'successCriteria',
    question: "What does success look like?",
    type: 'textarea',
    placeholder: "How will you know this worked? What metrics matter? What's the ideal outcome in 6-12 months?",
    required: true,
    helpText: "Clear success criteria help us stay focused on what matters.",
  },
  {
    id: 'constraints',
    question: "What constraints should we know about?",
    type: 'textarea',
    placeholder: "Technical requirements, compliance needs, existing systems, team capacity, political realities...",
    required: false,
    helpText: "No constraint is too small to mention. They often shape the solution.",
  },
  {
    id: 'budgetRange',
    question: "What's your budget range?",
    type: 'select',
    options: [
      { value: 'exploring', label: "Just exploring (< $25k)" },
      { value: 'small', label: "Small project ($25k - $75k)" },
      { value: 'medium', label: "Medium engagement ($75k - $200k)" },
      { value: 'large', label: "Large engagement ($200k - $500k)" },
      { value: 'enterprise', label: "Enterprise ($500k+)" },
      { value: 'equity', label: "Equity/revenue share (co-building)" },
      { value: 'unsure', label: "Not sure yet" },
    ],
    required: true,
    helpText: "This helps us recommend the right engagement model.",
  },
  {
    id: 'timeline',
    question: "What's your timeline?",
    type: 'select',
    options: [
      { value: 'urgent', label: "Urgent (< 4 weeks)" },
      { value: 'soon', label: "Soon (1-3 months)" },
      { value: 'planned', label: "Planned (3-6 months)" },
      { value: 'flexible', label: "Flexible (6+ months)" },
      { value: 'unsure', label: "Not sure yet" },
    ],
    required: true,
    helpText: "Timeline affects team composition and engagement structure.",
  },
];

// Gap Detection Rules
export function detectGaps(data: Partial<BriefData>): GapCheck[] {
  const gaps: GapCheck[] = [];

  // Problem clarity
  if (data.problem && data.problem.length < 50) {
    gaps.push({
      type: 'warning',
      field: 'problem',
      message: "Your problem description seems brief.",
      suggestion: "Try to add more context about the business impact and root causes.",
    });
  }

  // Vague success criteria
  if (data.successCriteria) {
    const hasMetrics = /\d+|%|increase|decrease|reduce|improve|grow|metric/i.test(data.successCriteria);
    if (!hasMetrics && data.successCriteria.length > 0) {
      gaps.push({
        type: 'warning',
        field: 'successCriteria',
        message: "Success criteria could be more specific.",
        suggestion: "Consider adding measurable outcomes (e.g., 'increase conversion by 20%' or 'reduce support tickets by 50%').",
      });
    }
  }

  // Missing users
  if (data.users && data.users.length < 30) {
    gaps.push({
      type: 'warning',
      field: 'users',
      message: "User/stakeholder description seems light.",
      suggestion: "Who are the primary users? Who are the decision-makers? Who might resist change?",
    });
  }

  // Budget uncertainty
  if (data.budgetRange === 'unsure') {
    gaps.push({
      type: 'warning',
      field: 'budgetRange',
      message: "Budget range is uncertain.",
      suggestion: "Having a rough budget range helps us recommend the right engagement model. We can discuss options.",
    });
  }

  // Timeline + budget mismatch
  if (data.timeline === 'urgent' && (data.budgetRange === 'exploring' || data.budgetRange === 'small')) {
    gaps.push({
      type: 'critical',
      field: 'timeline',
      message: "Urgent timeline with limited budget may be challenging.",
      suggestion: "Consider either extending the timeline or increasing budget for the best outcomes.",
    });
  }

  return gaps;
}

// Fit Check Logic
export function calculateFitCheck(data: BriefData): FitCheckResult {
  const notes: string[] = [];

  // Determine engagement type
  let engagement: FitCheckResult['engagement'] = 'consulting';

  if (data.budgetRange === 'equity') {
    engagement = 'co-building';
    notes.push("Equity-based engagement suggests a co-building partnership.");
  } else if (data.budgetRange === 'exploring') {
    engagement = 'community';
    notes.push("For exploration-stage projects, we recommend starting with our free resources.");
  } else if (data.budgetRange === 'enterprise' || data.budgetRange === 'large') {
    engagement = 'consulting';
    notes.push("Enterprise-scale engagement typically involves strategic consulting.");
  }

  // Determine crew shape based on budget and timeline
  const crewShape: FitCheckResult['crewShape'] = {
    core: ['Product Strategist'],
    fractional: [],
    apprentices: false,
  };

  if (data.budgetRange === 'medium' || data.budgetRange === 'large' || data.budgetRange === 'enterprise') {
    crewShape.core = ['Product Strategist', 'Design Lead', 'Engineering Lead'];
    crewShape.apprentices = true;
  } else if (data.budgetRange === 'small') {
    crewShape.core = ['Product Strategist', 'Design Lead'];
  }

  // Add fractional specialists based on problem keywords
  const problemLower = data.problem.toLowerCase();
  if (problemLower.includes('data') || problemLower.includes('analytics')) {
    crewShape.fractional.push('Data Specialist');
  }
  if (problemLower.includes('mobile') || problemLower.includes('app')) {
    crewShape.fractional.push('Mobile Developer');
  }
  if (problemLower.includes('ai') || problemLower.includes('ml') || problemLower.includes('machine learning')) {
    crewShape.fractional.push('ML Engineer');
  }
  if (problemLower.includes('security') || problemLower.includes('compliance')) {
    crewShape.fractional.push('Security Specialist');
  }

  // Determine cost band
  let costBand: FitCheckResult['costBand'];

  switch (data.budgetRange) {
    case 'exploring':
      costBand = {
        label: 'Discovery',
        range: '< $25k',
        duration: '2-4 weeks',
      };
      break;
    case 'small':
      costBand = {
        label: 'Sprint',
        range: '$25k - $75k',
        duration: '4-8 weeks',
      };
      break;
    case 'medium':
      costBand = {
        label: 'Build',
        range: '$75k - $200k',
        duration: '2-4 months',
      };
      break;
    case 'large':
      costBand = {
        label: 'Program',
        range: '$200k - $500k',
        duration: '4-8 months',
      };
      break;
    case 'enterprise':
      costBand = {
        label: 'Enterprise',
        range: '$500k+',
        duration: '6-12+ months',
      };
      break;
    case 'equity':
      costBand = {
        label: 'Partnership',
        range: 'Equity/Revenue Share',
        duration: '3-12+ months',
      };
      break;
    default:
      costBand = {
        label: 'To Be Determined',
        range: 'Let\'s discuss',
        duration: 'Varies',
      };
  }

  // Calculate confidence based on completeness
  const gaps = detectGaps(data);
  let confidence: FitCheckResult['confidence'] = 'high';
  if (gaps.some(g => g.type === 'critical')) {
    confidence = 'low';
  } else if (gaps.length > 2) {
    confidence = 'medium';
  }

  return {
    engagement,
    crewShape,
    costBand,
    confidence,
    notes,
  };
}

// Export brief as Markdown
export function exportAsMarkdown(data: BriefData, fitCheck: FitCheckResult): string {
  const gaps = detectGaps(data);

  let md = `# Project Brief

## Problem Statement
${data.problem}

## Users & Stakeholders
${data.users}

## Success Criteria
${data.successCriteria}

## Constraints
${data.constraints || 'None specified'}

## Budget Range
${BRIEF_STEPS.find(s => s.id === 'budgetRange')?.options?.find(o => o.value === data.budgetRange)?.label || data.budgetRange}

## Timeline
${BRIEF_STEPS.find(s => s.id === 'timeline')?.options?.find(o => o.value === data.timeline)?.label || data.timeline}

---

## Fit Check Summary

**Recommended Engagement:** ${fitCheck.engagement.charAt(0).toUpperCase() + fitCheck.engagement.slice(1)}

**Suggested Team:**
- Core: ${fitCheck.crewShape.core.join(', ')}
${fitCheck.crewShape.fractional.length > 0 ? `- Fractional: ${fitCheck.crewShape.fractional.join(', ')}` : ''}
${fitCheck.crewShape.apprentices ? '- Apprentice support included' : ''}

**Cost Band:** ${fitCheck.costBand.label} (${fitCheck.costBand.range}, ${fitCheck.costBand.duration})

**Confidence:** ${fitCheck.confidence.charAt(0).toUpperCase() + fitCheck.confidence.slice(1)}

${fitCheck.notes.length > 0 ? `**Notes:**\n${fitCheck.notes.map(n => `- ${n}`).join('\n')}` : ''}

${gaps.length > 0 ? `\n**Areas to Clarify:**\n${gaps.map(g => `- ${g.message} ${g.suggestion}`).join('\n')}` : ''}

---
Generated by WE3 Brief Builder
`;

  return md;
}

// Export brief as JSON
export function exportAsJSON(data: BriefData, fitCheck: FitCheckResult): string {
  return JSON.stringify({
    brief: data,
    fitCheck,
    gaps: detectGaps(data),
    generatedAt: new Date().toISOString(),
    source: 'WE3 Brief Builder',
  }, null, 2);
}
