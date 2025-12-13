# StoryBox UX Design Specification

## Executive Summary

StoryBox transforms how marketers find authentic stories for campaigns. Instead of guessing what resonates, we mine real community discussions to find stories that have already proven they connect with people.

This document outlines the complete user experience—from first visit to deliverable output.

---

## Part 1: Information Architecture

### Core User Flows

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                           STORYBOX USER JOURNEY                             │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  DISCOVERY          ONBOARDING           CORE EXPERIENCE        OUTPUT      │
│                                                                             │
│  Landing Page  →  Account Setup  →  Audience Definition  →  Story Hunt     │
│       │                │                     │                    │         │
│       │                │                     │                    ↓         │
│       │                │                     │              Story Craft     │
│       │                │                     │                    │         │
│       │                │                     │                    ↓         │
│       │                │                     │              Story Proof     │
│       │                │                     │                    │         │
│       │                │                     │                    ↓         │
│       ↓                ↓                     ↓              Story Blueprint │
│                                                                             │
│  [Free Trial]  →  [16-Factor Setup]  →  [Mining Config]  →  [Deliverable]  │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

### Navigation Structure

```
Main Navigation (Logged In)
├── Dashboard (Home)
│   ├── Active Projects
│   ├── Recent Blueprints
│   └── Quick Stats
├── Audiences
│   ├── My Audiences
│   ├── Create New
│   └── Shared (Team only)
├── Story Library
│   ├── All Stories
│   ├── By Audience
│   ├── By Score
│   └── Archived
├── Blueprints
│   ├── Completed
│   ├── In Progress
│   └── Templates
└── Settings
    ├── Account
    ├── Team (Team only)
    ├── Billing
    └── Integrations
```

---

## Part 2: Onboarding Experience

### Step 0: Landing Page CTA Interaction

**Trigger:** User clicks "Build Your First Story — Free"

**Modal appears with two paths:**

```
┌────────────────────────────────────────────────────────────────┐
│                                                                │
│     How would you like to start?                               │
│                                                                │
│  ┌─────────────────────┐    ┌─────────────────────┐           │
│  │                     │    │                     │           │
│  │   Quick Start       │    │   Full Setup        │           │
│  │                     │    │                     │           │
│  │   See StoryBox in   │    │   Build your        │           │
│  │   action with a     │    │   audience from     │           │
│  │   sample audience   │    │   scratch           │           │
│  │                     │    │                     │           │
│  │   ~2 minutes        │    │   ~10 minutes       │           │
│  │                     │    │                     │           │
│  │   [Try Demo]        │    │   [Start Building]  │           │
│  │                     │    │                     │           │
│  └─────────────────────┘    └─────────────────────┘           │
│                                                                │
│            Already have an account? Sign in                    │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

---

### Step 1: Account Creation (Minimal Friction)

**Design Principle:** Get to value fast. Collect only what's necessary.

```
┌────────────────────────────────────────────────────────────────┐
│                                                                │
│  STORYBOX                                                      │
│                                                                │
│  ─────────────────────────────────────────────────────────    │
│                                                                │
│  Create your account                                           │
│                                                                │
│  ┌──────────────────────────────────────────────────────┐     │
│  │  Work email                                          │     │
│  └──────────────────────────────────────────────────────┘     │
│                                                                │
│  ┌──────────────────────────────────────────────────────┐     │
│  │  Password                                            │     │
│  └──────────────────────────────────────────────────────┘     │
│                                                                │
│  [Continue with Email]                                         │
│                                                                │
│  ─── or ───                                                    │
│                                                                │
│  [Continue with Google]                                        │
│                                                                │
│  By continuing, you agree to our Terms & Privacy Policy        │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

---

### Step 2: Quick Context (30 seconds)

**Purpose:** Personalize the experience, set expectations

```
┌────────────────────────────────────────────────────────────────┐
│                                                                │
│  Let's personalize your experience                             │
│  Step 1 of 2                                                   │
│                                                                │
│  What's your role?                                             │
│                                                                │
│  ○ Brand / Marketing Lead                                      │
│  ○ Creative Director / Strategist                              │
│  ○ Agency — serving clients                                    │
│  ○ Founder / Small business                                    │
│  ○ Other                                                       │
│                                                                │
│  ─────────────────────────────────────────────────────────    │
│                                                                │
│  What industry are you in?                                     │
│                                                                │
│  [Select industry                                    ▼]        │
│                                                                │
│  ─────────────────────────────────────────────────────────    │
│                                                                │
│                                    [Continue →]                │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

---

### Step 3: The 16-Factor Persona Framework (Core Onboarding)

**This is where StoryBox differentiates.** The onboarding IS the product experience.

**Design Approach:** Progressive disclosure. Don't overwhelm. Guide with intelligence.

#### Framework Categories:

```
The 16 Factors (grouped into 4 pillars):

IDENTITY (Who they are)
├── 1. Demographics — Age, gender, location, family status
├── 2. Life Stage — Career phase, major transitions
├── 3. Identity Markers — How they describe themselves
└── 4. Cultural Context — Background, community ties

PSYCHOLOGY (How they think)
├── 5. Core Values — What matters most
├── 6. Fear Landscape — What keeps them up at night
├── 7. Aspiration Map — Where they want to be
└── 8. Decision Patterns — How they make choices

CIRCUMSTANCES (What shapes their day)
├── 9. Resource Constraints — Time, money, energy
├── 10. Information Diet — Where they learn, who they trust
├── 11. Influence Network — Who shapes their opinions
└── 12. Daily Friction — Recurring pain points

BEHAVIOR (What they do)
├── 13. Platform Behavior — Where they spend time online
├── 14. Content Engagement — What they consume, share
├── 15. Purchase Patterns — How they buy
└── 16. Community Participation — Where they contribute
```

#### Onboarding Interface for 16-Factor:

```
┌────────────────────────────────────────────────────────────────┐
│                                                                │
│  Build Your Audience Portrait                                  │
│                                                                │
│  ┌────────┬────────┬────────┬────────┐                        │
│  │IDENTITY│PSYCHO- │CIRCUM- │BEHAVIOR│  ← Progress tabs       │
│  │   ●●●○ │  LOGY  │STANCES │        │                        │
│  └────────┴────────┴────────┴────────┘                        │
│                                                                │
│  ─────────────────────────────────────────────────────────    │
│                                                                │
│  IDENTITY: Demographics                        Factor 1 of 16  │
│                                                                │
│  Who are you trying to reach?                                  │
│                                                                │
│  Age range                                                     │
│  ┌─────────────────────────────────────────────────────────┐  │
│  │  25-34  ■■■■■■■■■░░░░░░░░░░  35-44                      │  │
│  └─────────────────────────────────────────────────────────┘  │
│                                                                │
│  Primary gender                                                │
│  ○ Women   ○ Men   ○ All genders   ○ Non-binary focus         │
│                                                                │
│  Location                                                      │
│  [United States — Urban/Suburban                      ▼]       │
│                                                                │
│  ┌─────────────────────────────────────────────────────────┐  │
│  │ 💡 TIP: Be specific. "Working mothers 35-44 in suburbs" │  │
│  │ yields better stories than "women 25-55"                │  │
│  └─────────────────────────────────────────────────────────┘  │
│                                                                │
│                        [Skip] [Continue →]                     │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

#### Smart Assistance Throughout:

Each factor has:
1. **Plain-language question** (not jargon)
2. **Examples** that click to auto-fill
3. **"I'm not sure" option** → triggers guided interview
4. **AI assist** → "Describe your audience and we'll suggest"

```
┌────────────────────────────────────────────────────────────────┐
│                                                                │
│  PSYCHOLOGY: Fear Landscape                    Factor 6 of 16  │
│                                                                │
│  What keeps your audience up at night?                         │
│                                                                │
│  ┌─────────────────────────────────────────────────────────┐  │
│  │                                                         │  │
│  │  Type fears or select from suggestions...               │  │
│  │                                                         │  │
│  └─────────────────────────────────────────────────────────┘  │
│                                                                │
│  Common fears for your demographic:                            │
│                                                                │
│  [Financial instability]  [Health of loved ones]               │
│  [Career stagnation]  [Missing out on life]                    │
│  [Not being a good parent]  [Losing independence]              │
│                                                                │
│  ┌─────────────────────────────────────────────────────────┐  │
│  │  🤖 Not sure? Describe your audience and I'll suggest   │  │
│  │                                                         │  │
│  │  "Small business owners worried about..."               │  │
│  │                                                         │  │
│  │  [Generate Suggestions]                                 │  │
│  └─────────────────────────────────────────────────────────┘  │
│                                                                │
│                        [← Back] [Continue →]                   │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

#### Quick-Fill Option (For users who know their audience):

```
┌────────────────────────────────────────────────────────────────┐
│                                                                │
│  Have existing persona docs?                                   │
│                                                                │
│  ┌─────────────────────────────────────────────────────────┐  │
│  │                                                         │  │
│  │     📄 Drop your persona document here                  │  │
│  │                                                         │  │
│  │     PDF, DOCX, or paste text                            │  │
│  │                                                         │  │
│  └─────────────────────────────────────────────────────────┘  │
│                                                                │
│  We'll extract what we can and ask you to confirm.             │
│                                                                │
│  Or paste a description:                                       │
│  ┌─────────────────────────────────────────────────────────┐  │
│  │ "Mid-career professionals, mostly women 30-45, working  │  │
│  │ in corporate jobs but feeling unfulfilled. They have    │  │
│  │ disposable income but no time. They scroll Instagram    │  │
│  │ for escape and Pinterest for aspiration..."             │  │
│  └─────────────────────────────────────────────────────────┘  │
│                                                                │
│  [Parse & Auto-Fill →]                                         │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

---

### Step 4: Audience Confirmation & Data Sources

After completing the 16 factors, show the synthesized portrait:

```
┌────────────────────────────────────────────────────────────────┐
│                                                                │
│  Your Audience Portrait                                        │
│                                                                │
│  ┌─────────────────────────────────────────────────────────┐  │
│  │                                                         │  │
│  │  "The Overwhelmed Optimizer"                            │  │
│  │                                                         │  │
│  │  Women 30-44, suburban, dual-income households.         │  │
│  │  Career-driven but questioning if it's worth it.        │  │
│  │  Fear: Being a "bad mom" while chasing ambition.        │  │
│  │  Aspiration: "Having it all" without burning out.       │  │
│  │                                                         │  │
│  │  Primary platforms: Instagram, Reddit (r/workingmoms),  │  │
│  │  Facebook groups, Pinterest                             │  │
│  │                                                         │  │
│  │  Decision style: Research-heavy, seeks social proof     │  │
│  │                                                         │  │
│  └─────────────────────────────────────────────────────────┘  │
│                                                                │
│  Data confidence:                                              │
│                                                                │
│  Demographics      ████████████░░  High (Census + Pew)         │
│  Psychology        ████████░░░░░░  Medium (Inferred)           │
│  Platform behavior ██████████████  High (Platform data)        │
│  Purchase patterns ██████░░░░░░░░  Low (Limited data)          │
│                                                                │
│  ┌─────────────────────────────────────────────────────────┐  │
│  │ ⚠️ We have low confidence on purchase patterns. The     │  │
│  │ stories we find may not reflect buying behavior.        │  │
│  │ [Add more context] or [Proceed anyway]                  │  │
│  └─────────────────────────────────────────────────────────┘  │
│                                                                │
│                   [Edit Portrait] [Start Story Hunt →]         │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

---

## Part 3: Core Product Experience

### The Dashboard (Home State)

```
┌────────────────────────────────────────────────────────────────────────────┐
│  STORYBOX                         [Audiences ▼] [Library] [?] [Avatar ▼]   │
├────────────────────────────────────────────────────────────────────────────┤
│                                                                            │
│  Good morning, Sarah                                                       │
│                                                                            │
│  ┌─────────────────────────────────────┬──────────────────────────────┐   │
│  │                                     │                              │   │
│  │  ACTIVE HUNTS                       │  QUICK ACTIONS               │   │
│  │                                     │                              │   │
│  │  ┌───────────────────────────────┐  │  [+ New Audience]            │   │
│  │  │ "Overwhelmed Optimizer"       │  │                              │   │
│  │  │ ████████████░░░░ 73%          │  │  [+ New Story Hunt]          │   │
│  │  │ 47 stories found              │  │                              │   │
│  │  │ 12 high-resonance             │  │  [Browse Story Library]      │   │
│  │  │ ETA: ~2 hours                 │  │                              │   │
│  │  └───────────────────────────────┘  │                              │   │
│  │                                     │                              │   │
│  │  ┌───────────────────────────────┐  │                              │   │
│  │  │ "First-Time Homebuyer"        │  │                              │   │
│  │  │ ████████████████ Complete     │  │                              │   │
│  │  │ 89 stories found              │  │                              │   │
│  │  │ 23 high-resonance             │  │                              │   │
│  │  │ [View Stories →]              │  │                              │   │
│  │  └───────────────────────────────┘  │                              │   │
│  │                                     │                              │   │
│  └─────────────────────────────────────┴──────────────────────────────┘   │
│                                                                            │
│  ─────────────────────────────────────────────────────────────────────    │
│                                                                            │
│  RECENT BLUEPRINTS                                                         │
│                                                                            │
│  ┌────────────────┐ ┌────────────────┐ ┌────────────────┐                 │
│  │ "The Choice"   │ │ "Starting Over"│ │ "The Moment I  │                 │
│  │                │ │                │ │  Knew"         │                 │
│  │ Insurance      │ │ Career Change  │ │ Healthcare     │                 │
│  │ Campaign       │ │ Platform       │ │                │                 │
│  │                │ │                │ │                │                 │
│  │ Resonance: 94  │ │ Resonance: 87  │ │ Resonance: 91  │                 │
│  │                │ │                │ │                │                 │
│  │ [Open →]       │ │ [Open →]       │ │ [Open →]       │                 │
│  └────────────────┘ └────────────────┘ └────────────────┘                 │
│                                                                            │
└────────────────────────────────────────────────────────────────────────────┘
```

---

### The Story Hunt Interface

**Phase 1: Configure the Hunt**

```
┌────────────────────────────────────────────────────────────────────────────┐
│  ← Back to Dashboard                                                       │
│                                                                            │
│  NEW STORY HUNT                                                            │
│  for "The Overwhelmed Optimizer"                                           │
│                                                                            │
│  ─────────────────────────────────────────────────────────────────────    │
│                                                                            │
│  Where should we look?                                                     │
│                                                                            │
│  Based on your audience, we recommend:                                     │
│                                                                            │
│  ☑️ Reddit                                                                 │
│     └── r/workingmoms, r/Mommit, r/beyondthebump,                         │
│         r/careerguidance, r/antiwork                                       │
│         [+ Add subreddits]                                                 │
│                                                                            │
│  ☑️ Quora                                                                  │
│     └── Topics: Work-life balance, Career women, Modern motherhood        │
│                                                                            │
│  ☐ Facebook Groups (requires connection)                                   │
│     └── [Connect Facebook →]                                               │
│                                                                            │
│  ☐ Twitter/X                                                               │
│     └── Limited story depth—recommended for trend validation only          │
│                                                                            │
│  ─────────────────────────────────────────────────────────────────────    │
│                                                                            │
│  What tensions are you exploring?                                          │
│                                                                            │
│  [Ambition vs. presence]  [Self-care vs. sacrifice]                        │
│  [Career vs. family]  [Expectations vs. reality]                           │
│  [+ Add custom tension]                                                    │
│                                                                            │
│  ─────────────────────────────────────────────────────────────────────    │
│                                                                            │
│  Time range:  ○ Last 30 days  ● Last 6 months  ○ Last year  ○ All time   │
│                                                                            │
│  Minimum engagement:  ○ Any  ● 50+ upvotes  ○ 200+ upvotes  ○ 500+        │
│                                                                            │
│                                            [Cancel] [Start Hunt →]         │
│                                                                            │
└────────────────────────────────────────────────────────────────────────────┘
```

**Phase 2: Hunt in Progress (Background Process)**

```
┌────────────────────────────────────────────────────────────────────────────┐
│                                                                            │
│  STORY HUNT IN PROGRESS                                                    │
│  "The Overwhelmed Optimizer"                                               │
│                                                                            │
│  ┌────────────────────────────────────────────────────────────────────┐   │
│  │                                                                    │   │
│  │  ████████████████████░░░░░░░░░░░░░░░░░░░░  47%                    │   │
│  │                                                                    │   │
│  │  Currently scanning: r/workingmoms                                 │   │
│  │                                                                    │   │
│  └────────────────────────────────────────────────────────────────────┘   │
│                                                                            │
│  Live feed:                                                                │
│                                                                            │
│  ┌────────────────────────────────────────────────────────────────────┐   │
│  │                                                                    │   │
│  │  🔍 Found: "I quit my dream job to be present for my kids"        │   │
│  │     r/workingmoms • 847 upvotes • High resonance                  │   │
│  │     [Preview]                                                      │   │
│  │                                                                    │   │
│  │  🔍 Found: "The guilt of being a working mom never goes away"     │   │
│  │     r/Mommit • 1.2k upvotes • High resonance                      │   │
│  │     [Preview]                                                      │   │
│  │                                                                    │   │
│  │  🔍 Found: "My husband doesn't understand why I'm exhausted"      │   │
│  │     r/beyondthebump • 432 upvotes • Medium resonance              │   │
│  │     [Preview]                                                      │   │
│  │                                                                    │   │
│  │  ... scanning ...                                                  │   │
│  │                                                                    │   │
│  └────────────────────────────────────────────────────────────────────┘   │
│                                                                            │
│  Stats so far:                                                             │
│  • 2,847 posts scanned                                                     │
│  • 47 stories identified                                                   │
│  • 12 high-resonance matches                                               │
│                                                                            │
│  You can leave this page. We'll email you when the hunt is complete.       │
│                                                                            │
│                                      [Pause Hunt] [Cancel Hunt]            │
│                                                                            │
└────────────────────────────────────────────────────────────────────────────┘
```

---

### Story Library Interface

**The core browse experience after a hunt completes:**

```
┌────────────────────────────────────────────────────────────────────────────┐
│  STORY LIBRARY                                                             │
│  "The Overwhelmed Optimizer" • 89 stories                                  │
│                                                                            │
│  ┌──────────────────────────────────────────────────────────────────────┐ │
│  │ Filter: [All Sources ▼] [All Tensions ▼] [High Resonance ▼] [Search]│ │
│  └──────────────────────────────────────────────────────────────────────┘ │
│                                                                            │
│  Sort by: ● Resonance Score  ○ Recency  ○ Engagement  ○ Uniqueness        │
│                                                                            │
│  ─────────────────────────────────────────────────────────────────────    │
│                                                                            │
│  ┌────────────────────────────────────────────────────────────────────┐   │
│  │                                                                    │   │
│  │  ★ HIGH RESONANCE                                                  │   │
│  │                                                                    │   │
│  │  "I realized I was missing my daughter's childhood for            │   │
│  │   a job that would replace me in two weeks"                       │   │
│  │                                                                    │   │
│  │  r/workingmoms • 2.1k upvotes • 347 comments • 3 weeks ago        │   │
│  │                                                                    │   │
│  │  Tension: Career sacrifice vs. presence                           │   │
│  │  Structure: Revelation moment → Life change                        │   │
│  │                                                                    │   │
│  │  ┌──────────────────────────────────────────────────────────┐     │   │
│  │  │ SCORES                                                   │     │   │
│  │  │ Resonance: ████████████████░░ 94                        │     │   │
│  │  │ Uniqueness: ████████████░░░░░░ 78                        │     │   │
│  │  │ Brand Fit: ████████████████░░ 91  (for: Family services)│     │   │
│  │  └──────────────────────────────────────────────────────────┘     │   │
│  │                                                                    │   │
│  │  [Read Full Story]  [Create Blueprint →]  [Save to Collection]    │   │
│  │                                                                    │   │
│  └────────────────────────────────────────────────────────────────────┘   │
│                                                                            │
│  ┌────────────────────────────────────────────────────────────────────┐   │
│  │                                                                    │   │
│  │  ★ HIGH RESONANCE                                                  │   │
│  │                                                                    │   │
│  │  "My boss told me 'You can't have it all' and I finally           │   │
│  │   stopped trying to prove her wrong"                              │   │
│  │                                                                    │   │
│  │  r/careerguidance • 1.8k upvotes • 412 comments • 1 month ago     │   │
│  │                                                                    │   │
│  │  ...                                                               │   │
│  │                                                                    │   │
│  └────────────────────────────────────────────────────────────────────┘   │
│                                                                            │
└────────────────────────────────────────────────────────────────────────────┘
```

---

### Story Detail View (The Craft)

When a user clicks into a story:

```
┌────────────────────────────────────────────────────────────────────────────┐
│  ← Back to Library                                    [Create Blueprint →] │
│                                                                            │
│  ┌────────────────────────────────────────────────────────────────────┐   │
│  │                                                                    │   │
│  │  ORIGINAL STORY                               SOURCE METADATA      │   │
│  │                                                                    │   │
│  │  "I realized I was missing my daughter's      r/workingmoms        │   │
│  │   childhood for a job that would replace      Posted 3 weeks ago   │   │
│  │   me in two weeks"                            2.1k ↑ • 347 💬      │   │
│  │                                                                    │   │
│  │  ─────────────────────────────────────────    [View Original →]    │   │
│  │                                                                    │   │
│  │  I've been at my company for 8 years.                              │   │
│  │  Senior Director. 180k salary. The whole                           │   │
│  │  "I made it" package.                                              │   │
│  │                                                                    │   │
│  │  Last Tuesday, my daughter had her first                           │   │
│  │  dance recital. I missed it because of a                           │   │
│  │  "critical" meeting that turned out to be                          │   │
│  │  my CEO rambling about Q3 projections for                          │   │
│  │  two hours.                                                        │   │
│  │                                                                    │   │
│  │  When I got home, my daughter wouldn't                             │   │
│  │  look at me. She just said "It's fine,                             │   │
│  │  mommy. Work is important."                                        │   │
│  │                                                                    │   │
│  │  She's SIX. And she already knows work                             │   │
│  │  comes before her.                                                 │   │
│  │                                                                    │   │
│  │  That night I looked up how long it takes                          │   │
│  │  to replace a Senior Director. Industry                            │   │
│  │  average: 2-3 weeks.                                               │   │
│  │                                                                    │   │
│  │  My daughter will never have another first                         │   │
│  │  dance recital. That moment is gone forever.                       │   │
│  │                                                                    │   │
│  │  I handed in my notice yesterday.                                  │   │
│  │                                                                    │   │
│  └────────────────────────────────────────────────────────────────────┘   │
│                                                                            │
│  ─────────────────────────────────────────────────────────────────────    │
│                                                                            │
│  STORYBOX ANALYSIS                                                         │
│                                                                            │
│  ┌─────────────────────┬─────────────────────┬─────────────────────┐      │
│  │                     │                     │                     │      │
│  │  CORE TRUTH         │  TENSION            │  STRUCTURE          │      │
│  │                     │                     │                     │      │
│  │  Career success is  │  Ambition vs.       │  Hero's Journey:    │      │
│  │  replaceable.       │  Irreplaceable      │  Ordinary World →   │      │
│  │  Childhood moments  │  moments            │  Call (recital) →   │      │
│  │  are not.           │                     │  Revelation →       │      │
│  │                     │  Professional       │  Transformation     │      │
│  │                     │  identity vs.       │  (resignation)      │      │
│  │                     │  Maternal identity  │                     │      │
│  │                     │                     │                     │      │
│  └─────────────────────┴─────────────────────┴─────────────────────┘      │
│                                                                            │
│  ┌────────────────────────────────────────────────────────────────────┐   │
│  │                                                                    │   │
│  │  COMMENT ANALYSIS (What resonated)                                 │   │
│  │                                                                    │   │
│  │  Top themes in 347 comments:                                       │   │
│  │                                                                    │   │
│  │  "I felt this" moments:     127 comments (37%)                     │   │
│  │  ├── "This is me right now"                                        │   │
│  │  ├── "I'm crying reading this"                                     │   │
│  │  └── "Screenshot for my husband"                                   │   │
│  │                                                                    │   │
│  │  Debate/tension:            89 comments (26%)                      │   │
│  │  ├── "But what about financial security?"                          │   │
│  │  └── "Not everyone has this privilege"                             │   │
│  │                                                                    │   │
│  │  Shared experiences:        94 comments (27%)                      │   │
│  │  ├── Similar stories of missed moments                             │   │
│  │  └── "I did this 5 years ago and..."                               │   │
│  │                                                                    │   │
│  └────────────────────────────────────────────────────────────────────┘   │
│                                                                            │
│                                                      [Create Blueprint →]  │
│                                                                            │
└────────────────────────────────────────────────────────────────────────────┘
```

---

### The Story Proof (Validation Step)

Before creating a Blueprint, users can validate:

```
┌────────────────────────────────────────────────────────────────────────────┐
│                                                                            │
│  VALIDATE THIS STORY                                                       │
│  Before you commit budget, let's test it.                                  │
│                                                                            │
│  ─────────────────────────────────────────────────────────────────────    │
│                                                                            │
│  ENGAGEMENT PROOF                                          ✓ STRONG        │
│                                                                            │
│  ┌────────────────────────────────────────────────────────────────────┐   │
│  │                                                                    │   │
│  │  Original post:        2.1k upvotes (top 0.3% for this subreddit) │   │
│  │  Comment depth:        347 comments, avg 3.2 reply threads        │   │
│  │  Emotion markers:      127 "I felt this" responses                │   │
│  │  Share indicators:     23 cross-posts to other communities        │   │
│  │                                                                    │   │
│  └────────────────────────────────────────────────────────────────────┘   │
│                                                                            │
│  ─────────────────────────────────────────────────────────────────────    │
│                                                                            │
│  AI FOCUS PANEL (Optional)                                 [Run Panel →]   │
│                                                                            │
│  Test this story against a simulated panel of your persona.               │
│                                                                            │
│  We'll generate 5 synthetic "Overwhelmed Optimizers" and have them        │
│  react to this story, surfacing potential skepticism and engagement.       │
│                                                                            │
│  ┌────────────────────────────────────────────────────────────────────┐   │
│  │                                                                    │   │
│  │  Panel Member 1: "Sarah, 38, Marketing VP"                        │   │
│  │  Reaction: STRONG RESONANCE                                       │   │
│  │  "This is literally my life. I missed my son's soccer game        │   │
│  │  yesterday for a meeting that could have been an email."          │   │
│  │                                                                    │   │
│  │  Panel Member 2: "Jennifer, 42, Operations Director"              │   │
│  │  Reaction: MIXED                                                  │   │
│  │  "I feel this but also — I'm the breadwinner. I can't just        │   │
│  │  quit. This feels like a luxury take."                            │   │
│  │                                                                    │   │
│  │  Panel Member 3: "Amanda, 35, Product Manager"                    │   │
│  │  Reaction: STRONG RESONANCE                                       │   │
│  │  "The '2-3 weeks to replace' stat hit hard. I never thought       │   │
│  │  about it that way."                                              │   │
│  │                                                                    │   │
│  │  ...                                                               │   │
│  │                                                                    │   │
│  └────────────────────────────────────────────────────────────────────┘   │
│                                                                            │
│  Panel Summary:                                                            │
│  • 4/5 showed strong resonance                                            │
│  • Key skepticism: "Not everyone can afford to quit"                       │
│  • Suggested adaptation: Acknowledge financial reality                     │
│                                                                            │
│                                                      [Create Blueprint →]  │
│                                                                            │
└────────────────────────────────────────────────────────────────────────────┘
```

---

## Part 4: The Output — Story Blueprint

### Blueprint View (The Deliverable)

```
┌────────────────────────────────────────────────────────────────────────────┐
│                                                                            │
│  STORY BLUEPRINT                                                           │
│  "The Replaceable Director"                                                │
│                                                                            │
│  Audience: The Overwhelmed Optimizer                                       │
│  Created: December 13, 2024                                                │
│  Confidence: HIGH (94/100)                                                 │
│                                                                            │
│  [Export PDF]  [Export DOCX]  [Share with Team]  [Edit]                   │
│                                                                            │
│  ═══════════════════════════════════════════════════════════════════════  │
│                                                                            │
│  ┌────────────────────────────────────────────────────────────────────┐   │
│  │                                                                    │   │
│  │  1. THE CORE TRUTH                                                 │   │
│  │  ─────────────────                                                 │   │
│  │                                                                    │   │
│  │  Your job will replace you in weeks.                               │   │
│  │  Your child's milestones are unrepeatable.                         │   │
│  │                                                                    │   │
│  │  This truth resonates because it reframes a familiar tension       │   │
│  │  (work vs. family) with a concrete, visceral comparison.           │   │
│  │  It's not abstract guilt — it's math.                              │   │
│  │                                                                    │   │
│  │  Why it works:                                                     │   │
│  │  • Forces a comparison that can't be ignored                       │   │
│  │  • Validates feelings without preaching                            │   │
│  │  • Creates urgency without fear-mongering                          │   │
│  │                                                                    │   │
│  └────────────────────────────────────────────────────────────────────┘   │
│                                                                            │
│  ┌────────────────────────────────────────────────────────────────────┐   │
│  │                                                                    │   │
│  │  2. THE TENSION & RESOLUTION                                       │   │
│  │  ───────────────────────────                                       │   │
│  │                                                                    │   │
│  │  TENSION:                                                          │   │
│  │  Professional identity vs. Maternal identity                       │   │
│  │  What you've built vs. What you're missing                         │   │
│  │  Replaceability (work) vs. Irreplaceability (family)               │   │
│  │                                                                    │   │
│  │  STAKES:                                                           │   │
│  │  • Career: 8 years of advancement, financial security, identity    │   │
│  │  • Personal: Daughter's childhood, relationship, presence          │   │
│  │  • Emotional: The moment the child "understood" mom's priorities   │   │
│  │                                                                    │   │
│  │  THE BREAKING POINT:                                               │   │
│  │  "She's SIX. And she already knows work comes before her."         │   │
│  │  This line carries the story. It's the moment of revelation.       │   │
│  │                                                                    │   │
│  │  RESOLUTION:                                                       │   │
│  │  Action (resignation) rather than continued compromise.            │   │
│  │  Note: Not all audiences will relate to this resolution —          │   │
│  │  the tension is universal, the resolution is aspirational.         │   │
│  │                                                                    │   │
│  └────────────────────────────────────────────────────────────────────┘   │
│                                                                            │
│  ┌────────────────────────────────────────────────────────────────────┐   │
│  │                                                                    │   │
│  │  3. THE STRUCTURE                                                  │   │
│  │  ────────────────                                                  │   │
│  │                                                                    │   │
│  │  Framework: Modified Hero's Journey                                │   │
│  │                                                                    │   │
│  │  ┌─────────────────────────────────────────────────────────────┐  │   │
│  │  │                                                             │  │   │
│  │  │   ORDINARY      THE CALL     REVELATION    TRANSFORMATION   │  │   │
│  │  │    WORLD                                                    │  │   │
│  │  │      │             │              │              │          │  │   │
│  │  │      ▼             ▼              ▼              ▼          │  │   │
│  │  │  "I made it"  → Missed    → "Work comes → Resignation       │  │   │
│  │  │   180k job      recital      before her"                    │  │   │
│  │  │   8 years       Daughter's   Replaceable                    │  │   │
│  │  │                 reaction     vs. not                        │  │   │
│  │  │                                                             │  │   │
│  │  └─────────────────────────────────────────────────────────────┘  │   │
│  │                                                                    │   │
│  │  Why this structure works for this audience:                       │   │
│  │  • Starts with success (validates their achievements)              │   │
│  │  • Small incident (relatable, not extreme trauma)                  │   │
│  │  • Child as mirror (powerful for parent audiences)                 │   │
│  │  • Data point creates intellectual + emotional impact              │   │
│  │  • Clear action — not just venting                                 │   │
│  │                                                                    │   │
│  └────────────────────────────────────────────────────────────────────┘   │
│                                                                            │
│  ┌────────────────────────────────────────────────────────────────────┐   │
│  │                                                                    │   │
│  │  4. THE LINE                                                       │   │
│  │  ───────────                                                       │   │
│  │                                                                    │   │
│  │  The message that emerges naturally from this truth:               │   │
│  │                                                                    │   │
│  │  ┌─────────────────────────────────────────────────────────────┐  │   │
│  │  │                                                             │  │   │
│  │  │   "Some things can be replaced. Some can't.                 │  │   │
│  │  │    Know the difference."                                    │  │   │
│  │  │                                                             │  │   │
│  │  └─────────────────────────────────────────────────────────────┘  │   │
│  │                                                                    │   │
│  │  Alternative lines tested against your persona:                    │   │
│  │                                                                    │   │
│  │  • "Your job will replace you. Will you replace this moment?"     │   │
│  │    → Scored 87/100 — slightly aggressive                          │   │
│  │                                                                    │   │
│  │  • "They'll fill your desk in two weeks. They can't fill          │   │
│  │    your seat at the dinner table."                                │   │
│  │    → Scored 91/100 — concrete, visual                             │   │
│  │                                                                    │   │
│  │  • "The meeting could've been an email. The recital couldn't."    │   │
│  │    → Scored 89/100 — lighter tone, meme-adjacent                  │   │
│  │                                                                    │   │
│  └────────────────────────────────────────────────────────────────────┘   │
│                                                                            │
│  ┌────────────────────────────────────────────────────────────────────┐   │
│  │                                                                    │   │
│  │  5. CREATIVE SPRINGBOARDS                                          │   │
│  │  ────────────────────────                                          │   │
│  │                                                                    │   │
│  │  These are starting points for your creative team — not scripts.  │   │
│  │                                                                    │   │
│  │  VIDEO/FILM:                                                       │   │
│  │  • Split screen: Empty office desk vs. saved seat at recital     │   │
│  │  • Calendar invite declining vs. daughter's "you came!" reaction  │   │
│  │  • Job posting "We're hiring a replacement" → Child's voice       │   │
│  │    "You can't replace my mommy"                                   │   │
│  │                                                                    │   │
│  │  PRINT/STATIC:                                                     │   │
│  │  • Resume vs. Crayon drawing — "Which one would you frame?"       │   │
│  │  • Office hours (9-5) vs. Childhood hours (ages 0-18)             │   │
│  │  • LinkedIn notification vs. Daughter's text "Are you coming?"    │   │
│  │                                                                    │   │
│  │  SOCIAL:                                                           │   │
│  │  • "POV: You just looked up how long it takes to replace you"     │   │
│  │  • Share the math: 2-3 weeks to fill your job. 18 years of        │   │
│  │    childhood. Which is finite?                                    │   │
│  │                                                                    │   │
│  └────────────────────────────────────────────────────────────────────┘   │
│                                                                            │
│  ┌────────────────────────────────────────────────────────────────────┐   │
│  │                                                                    │   │
│  │  6. CAUTIONS & CONSIDERATIONS                                      │   │
│  │  ────────────────────────────                                      │   │
│  │                                                                    │   │
│  │  ⚠️ WATCH FOR:                                                     │   │
│  │                                                                    │   │
│  │  • Privilege blindness: Not everyone can quit. 42% of comments    │   │
│  │    raised this. Acknowledge financial reality or risk backlash.   │   │
│  │                                                                    │   │
│  │  • Gender dynamics: This story is told by a mother. Using it      │   │
│  │    for a gender-neutral or father-focused campaign needs          │   │
│  │    adaptation.                                                     │   │
│  │                                                                    │   │
│  │  • Tone: The original is personal and vulnerable. Over-           │   │
│  │    production could make it feel exploitative.                    │   │
│  │                                                                    │   │
│  │  ✓ THIS STORY IS BEST FOR:                                        │   │
│  │  • Family-forward brands                                          │   │
│  │  • Flexible work / remote work products                           │   │
│  │  • Financial planning (reframe: "So you can make that choice")    │   │
│  │  • Life insurance (protect what's irreplaceable)                  │   │
│  │                                                                    │   │
│  │  ✗ AVOID IF:                                                       │   │
│  │  • Your audience is primarily non-parents                         │   │
│  │  • Your brand is associated with "hustle culture"                 │   │
│  │  • You can't authentically support work-life balance              │   │
│  │                                                                    │   │
│  └────────────────────────────────────────────────────────────────────┘   │
│                                                                            │
│  ═══════════════════════════════════════════════════════════════════════  │
│                                                                            │
│  PROVENANCE & METHODOLOGY                                                  │
│                                                                            │
│  Source: Reddit r/workingmoms                                             │
│  Original engagement: 2.1k upvotes, 347 comments                          │
│  Data confidence: HIGH (direct platform data)                             │
│  AI panel validation: 4/5 strong resonance                                │
│                                                                            │
│  This blueprint was generated using StoryBox's methodology:               │
│  Story Hunt (89 candidates) → Resonance Scoring → Craft Analysis →        │
│  Panel Validation → Blueprint Generation                                   │
│                                                                            │
│  [View Methodology Details]                                                │
│                                                                            │
└────────────────────────────────────────────────────────────────────────────┘
```

---

## Part 5: Additional Interface States

### Empty States

**No audiences yet:**
```
┌────────────────────────────────────────────────────────────────┐
│                                                                │
│  Your story library is waiting.                                │
│                                                                │
│  ┌─────────────────────────────────────────────────────────┐  │
│  │                                                         │  │
│  │           [illustration: empty library]                 │  │
│  │                                                         │  │
│  │   Stories don't write themselves.                       │  │
│  │   But they do tell themselves.                          │  │
│  │                                                         │  │
│  │   Define your first audience, and we'll find            │  │
│  │   the stories they're already sharing.                  │  │
│  │                                                         │  │
│  │   [Create Your First Audience →]                        │  │
│  │                                                         │  │
│  └─────────────────────────────────────────────────────────┘  │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

**Hunt returned no high-resonance stories:**
```
┌────────────────────────────────────────────────────────────────┐
│                                                                │
│  We didn't find high-resonance stories.                        │
│  But that's still useful data.                                 │
│                                                                │
│  This might mean:                                              │
│                                                                │
│  • Your audience isn't actively sharing on these platforms     │
│    → Try: Add different sources or adjust platform mix         │
│                                                                │
│  • The tensions you specified aren't sparking conversation     │
│    → Try: Broaden or change tension themes                     │
│                                                                │
│  • The time range is too narrow                                │
│    → Try: Expand to 6 months or all time                       │
│                                                                │
│  We found 12 medium-resonance stories you can still review.    │
│                                                                │
│  [View Medium Stories] [Adjust Hunt Settings] [Try New Hunt]   │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

---

### Mobile Considerations

The core experience is desktop-first (marketers working), but mobile serves:

1. **Notifications:** Hunt complete, Blueprint ready
2. **Quick review:** Browse stories, read Blueprints
3. **Sharing:** Send Blueprints to team
4. **Not mobile:** Audience creation, detailed configuration

```
Mobile Nav (Bottom):
[Home] [Library] [Blueprints] [More]
```

---

## Part 6: Micro-interactions & Delight

### Loading States

**During Story Hunt:**
- Real-time feed of discovered stories
- Animated "scanning" indicator
- Confidence meter building as data accumulates

**During Blueprint Generation:**
```
Extracting core truth...
Mapping tension architecture...
Analyzing comment sentiment...
Generating creative springboards...
```

### Success Moments

**High-resonance story found:**
Brief highlight animation, distinct visual treatment

**Blueprint complete:**
Satisfying completion animation, celebration moment before presenting deliverable

### Transparency Moments

Throughout the experience, always show:
- Confidence levels on data
- Source attribution
- Methodology links
- "Why we're showing you this"

---

## Part 7: Pricing Flow

### Free → Pro Conversion

**Trigger points:**
1. After first audience — show preview of full results
2. When trying to create second audience
3. When accessing export features

**Conversion modal:**
```
┌────────────────────────────────────────────────────────────────┐
│                                                                │
│  You've found 23 high-resonance stories.                       │
│                                                                │
│  With Starter, you can:                                        │
│  ✓ View 5 stories in detail                                    │
│  ✓ Create 1 Blueprint                                          │
│                                                                │
│  With Pro ($149/mo), you can:                                  │
│  ✓ View all 23 stories                                         │
│  ✓ Create unlimited Blueprints                                 │
│  ✓ Run AI focus panels                                         │
│  ✓ Export in all formats                                       │
│  ✓ Create unlimited audiences                                  │
│                                                                │
│  [Continue with Starter] [Start Pro Trial — 14 days free]      │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

---

## Summary: The StoryBox UX Philosophy

1. **Value before registration:** Show them stories exist before asking for signup
2. **Onboarding IS the product:** The 16-Factor framework is both setup and differentiator
3. **Transparency builds trust:** Always show confidence, sources, methodology
4. **Process creates ownership:** Users understand why their Blueprint works
5. **Strategic, not creative:** Clear positioning — we give you the truth, you build the ad

The experience should feel like having a brilliant research partner who does the deep work, then hands you a clear brief that makes your creative team say "now I know what to build."
