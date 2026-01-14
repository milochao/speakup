# The Commitment Engine

A high-stakes, 4-stage digital workshop that forces executives to move from "Dreaming Big" to "Irreversible Commitment."

## The 4 Rooms

### Room 1: The Detox
**AI Persona: The Prosecutor** (Skeptical, forensic, destabilizing)

Break your confidence in the status quo. Extract:
- **The Lie**: What industry "best practice" is actually nonsense?
- **The Sacred Cow**: What internal project would cause a revolt if touched?
- **The Pre-Mortem**: It's 2028. You failed. Why?

### Room 2: The Elevation
**AI Persona: The Story Architect** (Curious, provocative, "Yes, and...")

Radical expansion of scope. Discover:
- **The Envy**: Which brand (any industry) are you jealous of?
- **The Unfair Advantage**: What asset do you own that competitors can't buy?
- **The Category Leap**: Your 2-sentence vision combining envy + advantage

### Room 3: The Leverage Map
**AI Persona: The Operator** (Precise, demanding, constraints-focused)

Translate vibes into mechanics:
- **Customer Change**: What specific behavior changes?
- **Mechanism**: What forces that change?
- **Moat**: Why is it hard to copy?
- **Trade-off**: What do we stop doing?

### Room 4: The Commitment
**AI Persona: The Board Member** (Serious, bottom-line, decision-forcing)

Irreversible resource reallocation:
- **One-Way Door**: Pricing Lock, Policy Lock, or Distribution Lock
- **The Kill List**: 3 projects that stop TODAY
- **Budget Token**: Specific resources being moved

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Copy environment variables:
```bash
cp .env.example .env.local
```

3. Add your API key (Anthropic or OpenAI) to `.env.local`

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000)

## Tech Stack

- **Frontend**: Next.js 15 + Tailwind CSS
- **AI**: Vercel AI SDK (supports Anthropic Claude or OpenAI GPT-4o)
- **State**: React Context + LocalStorage persistence
- **Output**: Downloadable Decision Memo (Markdown)

## The Final Artifact

At the end of Room 4, generate a downloadable "Decision Memo" containing:
- Headline (10 words max)
- The Threat (from Room 1)
- The Vision (from Room 2)
- The Mechanics (from Room 3)
- The Blood Price (from Room 4)

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

---

*"McKinsey meets Black Mirror"*
