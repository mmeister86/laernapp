# CLAUDE.md - LaernApp Development Guide

## Projektübersicht
LaernApp: Gamifizierte Lernplattform für deutsche Schulkinder (Klasse 5-8)  
**Stack:** Next.js 15, React, TypeScript, Tailwind, Supabase, Zustand  
**Ziel:** MVP bis Ende November 2025

## Code-Prinzipien

### Dateigröße & Modularität
- **Max. 500 Zeilen pro Datei** - Bei Überschreitung aufteilen
- **Single Responsibility** - Klarer Zweck pro Datei/Komponente
- **Wiederverwendbarkeit** - Gemeinsame Logik extrahieren

### Verzeichnisstruktur
```
src/
├── app/                    # Next.js 15 App Router
│   ├── (auth)/            # Auth-Routen
│   ├── (student)/         # Schüler-Routen
│   ├── (parent)/          # Eltern-Routen
│   └── api/               # API Routes
├── components/
│   ├── ui/                # shadcn/ui + neobrutalism
│   └── features/          # Feature-Komponenten
├── lib/
│   ├── supabase/          # DB Client & Queries
│   ├── validation/        # Zod Schemas
│   ├── utils/             # Helper Functions
│   └── hooks/             # Custom Hooks
├── stores/                # Zustand State
└── types/                 # TypeScript Types
```

### Namenskonventionen
- Komponenten: `PascalCase.tsx`
- Utilities: `kebab-case.ts`
- Hooks: `use-feature-name.ts`
- Types: `feature.types.ts`

### TypeScript Best Practices
```typescript
// Explizite Typen
interface FlashCard {
  id: string;
  frontText: string;
  backText: string;
  difficulty: 'easy' | 'medium' | 'hard';
}

// Type Guards
function isFlashCard(item: unknown): item is FlashCard {
  return typeof item === 'object' && item !== null && 'id' in item;
}

// Keine any verwenden!
```

### API Routes & Validierung
```typescript
import { z } from 'zod';

const schema = z.object({
  userId: z.string().uuid(),
  score: z.number().min(0).max(100),
});

export async function POST(request: NextRequest) {
  const body = await request.json();
  const validatedData = schema.parse(body); // Wirft bei Fehler
  // ... DB-Operationen
}
```

## Development Workflow

### Feature-Entwicklung
```bash
# 1. Branch erstellen
git checkout -b feature/flashcard-animation

# 2. Entwicklung: Types → Schema → Komponente → Hook → API
# 3. Regelmäßige Commits
git commit -m "feat(flashcard): add flip animation"
```

### Commit-Konventionen
```bash
feat(scope): neue Funktion
fix(scope): Bug-Fix
docs: Dokumentation
style: CSS/Design
refactor: Code-Umstrukturierung
perf: Performance-Optimierung
```

### Code-Review Checklist
- [ ] TypeScript-Fehler behoben
- [ ] ESLint clean
- [ ] Dateien < 500 Zeilen
- [ ] Keine `any` Types
- [ ] Zod-Validierung für Input
- [ ] Responsive Design
- [ ] ARIA-Labels gesetzt

## Code-Dokumentation

### Komponenten
```typescript
/**
 * FlashCard mit Flip-Animation
 * 
 * @example
 * <FlashCard card={data} onFlip={() => {}} />
 */
export function FlashCard({ card, onFlip }: FlashCardProps) {
  // ...
}
```

### Utility-Funktionen
```typescript
/**
 * Berechnet XP basierend auf Quiz-Performance
 * @param correctAnswers - Richtige Antworten
 * @param totalQuestions - Gesamtzahl Fragen
 * @returns XP-Betrag
 */
export function calculateQuizXp(
  correctAnswers: number,
  totalQuestions: number
): number {
  return Math.floor((correctAnswers / totalQuestions) * 200);
}
```

## Tools & Best Practices

### Context7 MCP Server nutzen
Dokumentation abrufen für:
- Next.js 15 App Router
- React Server Components
- Tailwind CSS
- shadcn/ui
- Supabase JS Client

### Performance
- Server Components als Default
- `'use client'` nur wo nötig
- Dynamic Imports für Heavy Components
- Next.js Image-Optimierung
- React Query Caching (5min staleTime)

### Sicherheit
- Zod-Validierung client- & server-seitig
- Rate Limiting auf API-Routes
- Auth-Check vor geschützten Operationen
- Input-Sanitization
- CSRF-Protection

## Wichtige Befehle
```bash
npm run dev              # Dev-Server
npm run build            # Production Build
npm run type-check       # TypeScript prüfen
npm run lint             # ESLint
```
