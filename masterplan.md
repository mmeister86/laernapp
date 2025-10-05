# LaernApp - Masterplan

## 1. Executive Summary

**LaernApp** ist eine gamifizierte Lernplattform für Schulkinder in Deutschland, die auf offiziellen Lehrplänen basiert und durch interaktive Lernkarten, Wissenskontrollen und Mini-Spiele das selbstständige Lernen fördert. Die Plattform kombiniert pädagogisch wertvolle Inhalte mit motivierenden Gamification-Elementen und bietet Eltern umfassende Einblicke in den Lernfortschritt ihrer Kinder.

**Projektziel:** MVP-Launch bis Ende November 2025 mit Test an einer sächsischen Schule.

---

## 2. Vision & Zielsetzung

### 2.1 Die Vision

LaernApp soll Kindern helfen, Freude am Lernen zu entwickeln und schulische Inhalte spielerisch zu vertiefen. Besonders Kinder, die beim Schulwechsel (zwischen Bundesländern, Schulformen) Schwierigkeiten haben, sollen durch die Plattform Lücken schließen und Selbstvertrauen aufbauen können.

### 2.2 Kernziele

- **Für Schüler:** Spaßiges, motivierendes Lernerlebnis mit sofortigem Feedback
- **Für Eltern:** Transparenter Einblick in Lernfortschritte und Kontrollmöglichkeiten
- **Für Entwickler:** Skalierbare, wartbare Plattform mit automatisierter Content-Erstellung
- **Langfristig:** Die führende Lernplattform für deutsche Schulkinder werden

---

## 3. Zielgruppe

### 3.1 Primäre Zielgruppe (MVP)

- **Schüler:** Klasse 5-8 (10-14 Jahre)
- **Schulform:** Gymnasium (später: alle Schulformen)
- **Region:** Sachsen (später: alle Bundesländer)
- **Besonderer Fokus:** MINT-Fächer, aber breites Fächerspektrum

### 3.2 Sekundäre Zielgruppe

- **Eltern:** Wünschen Lernunterstützung für ihre Kinder, Transparenz über Fortschritte
- **Lehrer:** Potenzielle spätere Nutzergruppe für Klassenintegration

### 3.3 Langfristige Expansion

- Grundschüler (Klasse 1-4)
- Oberstufe (Klasse 9-12)
- Alle Bundesländer und Schulformen
- Kinder mit besonderem Förderbedarf

---

## 4. Core Features

### 4.1 Lernkarten-System

**Beschreibung:**
Digitale Karteikarten im klassischen Format (Vorderseite/Rückseite) bilden die Grundlage für das Lernen neuer Inhalte.

**Features:**

- Klassische Karteikarten-Optik im Neobrutalismus-Design
- "Erkläre es mir"-Button für vertiefende Informationen (Modal/Slideout)
- Multimediale Inhalte: Texte, Bilder, Videos
- Spaced-Repetition-System für intelligente Wiederholungen
- Fortschrittsanzeige innerhalb eines Themenkomplexes

**Technische Umsetzung:**

- SVG-Animationen für Flip-Effekt
- Lazy Loading für Multimedia-Inhalte
- State Management mit Zustand für Kartenstapel

### 4.2 Quiz & Wissenskontrolle

**Beschreibung:**
Nach Durcharbeitung der Lernkarten testen Kinder ihr Wissen in einem Quiz, das XP und Fortschritt bringt.

**Features:**

- Multiple-Choice, True/False, Lückentext-Fragen
- Sofortiges Feedback (richtig/falsch)
- Erklärungen bei falschen Antworten
- Erfolgsquote und Statistiken
- Wiederholungsmöglichkeit bei schlechten Ergebnissen
- XP-Vergabe basierend auf Leistung

**Gamification-Aspekt:**

- Bonus-XP für fehlerfreie Quiz-Durchläufe
- Streak-Bonus für tägliche Teilnahme
- Leaderboard-Integration

### 4.3 Mini-Spiele

**Beschreibung:**
Spielerische Vertiefung des Gelernten und Belohnung für Fortschritte. Mini-Spiele werden durch Level-Aufstiege und Achievements freigeschaltet.

**Konzepte (Beispiele):**

- Memory-Spiele mit Fachbegriffen
- Wortspiele und Kreuzworträtsel
- Geschicklichkeitsspiele mit Bildungsbezug
- Strategie-Puzzles
- Thematisch passende Spiele (z.B. "Fisch-Teich" für Biologie)

**Technische Umsetzung:**

- Je nach Spiel: Canvas-basiert, HTML/CSS, oder leichtgewichtige Game Engines
- Progressives Freischalten neuer Spiele
- Zeitbegrenzung durch Eltern-Dashboard möglich

### 4.4 Gamification-System

**Beschreibung:**
Umfassendes Belohnungssystem, das Kinder motiviert, regelmäßig zu lernen und sich zu verbessern.

**Elemente:**

#### XP & Level-System

- XP durch abgeschlossene Quiz
- XP-Bonus für Streaks
- Level-Aufstiege schalten neue Inhalte frei (Spiele, Avatare, Zertifikate)

#### Streaks

- Tägliche Lern-Streaks (wie im Screenshot: 47 Tage)
- Visuelle Darstellung mit Streak-Kalender
- Erinnerungen vor Streak-Verlust

#### Achievements & Badges

- Themen-Meisterschaft (100% in einem Fach)
- Lernzeit-Meilensteine (z.B. "10 Stunden gelernt")
- Perfekte Quiz-Durchläufe
- Fächer-übergreifende Erfolge

#### Avatar-System

- Avatar-Creator mit DiceBear beim Onboarding
- Freischaltbare Avatar-Elemente durch Achievements
- Visuelle Upgrades als Belohnung

#### Leaderboards

- Themen-spezifische Ranglisten
- Fach-Ranglisten
- Regional (Schule, Stadt, Bundesland)
- Optional: Freunde-Vergleich

#### Zertifikate & Urkunden

- Druckbare/teilbare Zertifikate bei Themenkomplex-Abschluss
- Sammlungen im Profil
- Motivationale Belohnungen

### 4.5 Themenkomplex-Struktur

**Definition:**
Ein Themenkomplex behandelt ein spezifisches Thema innerhalb eines Fachs (z.B. "Fische" in Biologie, "Bruchrechnung" in Mathe).

**Aufbau:**

1. **Einführung:** Überblick über das Thema
2. **Lernkarten:** X Karten zum Durcharbeiten
3. **Wissenskontrolle:** Quiz mit Y Fragen
4. **Optional:** Thematisches Mini-Spiel

**Eigenschaften:**

- Flexible Länge (keine Zeitbegrenzung, sondern Anzahl Karten/Fragen)
- Aufeinander aufbauend, wo sinnvoll (Voraussetzungen)
- Freie Auswahl, aber empfohlene Reihenfolge nach Lehrplan
- Wiederholbar für bessere Ergebnisse

**MVP-Umfang:**

- 25 Themenkomplexe
- Breites Fächerspektrum (1-2 Themen pro Fach)
- Fokus auf Klasse 5-8, Sachsen, Gymnasium

### 4.6 Eltern-Dashboard

**Beschreibung:**
Separates Dashboard für Eltern mit Einblick in Lernaktivitäten und Kontrollmöglichkeiten.

**Features:**

#### Fortschrittsübersicht

- Welche Themenkomplexe wurden begonnen/abgeschlossen?
- Erfolgsquote bei Wissenskontrollen (Versuche, Prozentsatz)
- Grafische Darstellung mit Charts (z.B. Fortschritt pro Fach)
- Lernzeit-Statistiken

#### Kontrollmöglichkeiten

- Zeitbegrenzung für Mini-Spiele
- Themenbereiche priorisieren oder einschränken
- Benachrichtigungen bei Streak-Gefahr
- Optional: Lernziele setzen

#### Account-Verwaltung

- Abo-Verwaltung und Zahlungen (via LemonSqueezy)
- Mehrere Kinder-Profile verwalten (Familien-Abo)
- Datenschutz-Einstellungen

**Design:**

- Aufgeräumter, funktionaler Neobrutalismus-Stil
- Weniger verspielt als Kinder-UI, aber konsistent
- Mobile-optimiert für schnellen Zugriff unterwegs

### 4.7 Schüler-Dashboard

**Beschreibung:**
Haupt-Interface für Kinder nach dem Login.

**Elemente:**

- Großer Fortschrittsbalken (XP bis nächstes Level)
- Streak-Anzeige mit visuellem Kalender
- Aktuelles Level prominent dargestellt
- Übersicht verfügbarer Fächer als Kacheln
- "Weiter lernen"-Button für letzten Themenkomplex
- Achievements und neue Freischaltungen hervorheben
- Avatar-Anzeige mit Edit-Möglichkeit

**Navigation:**
Dashboard → Fach auswählen → Themenliste → Themenkomplex starten

### 4.8 Feedback-System

**MVP-Version:**

- Feedback-Button am Ende jedes Themenkomplexes
- Allgemeines Feedback-Formular (separate Route)
- Kategorien: Fehler melden, Verbesserungsvorschlag, Technisches Problem

**Spätere Versionen:**

- Direktes Feedback pro Lernkarte/Quiz-Frage
- Öffentliches Feedback-Display ("10 Nutzer fanden diese Frage unklar")
- Community-Voting für Verbesserungen

---

## 5. Technischer Stack

### 5.1 Frontend

| Technologie          | Zweck              | Begründung                              |
| -------------------- | ------------------ | --------------------------------------- |
| **Next.js 15**       | Framework          | App Router, SSR, optimierte Performance |
| **React**            | UI-Library         | Industry Standard, große Community      |
| **TypeScript**       | Typsicherheit      | Fehlerreduktion, bessere DX             |
| **Tailwind CSS**     | Styling            | Utility-First, schnelle Entwicklung     |
| **shadcn/ui**        | UI-Komponenten     | Hochwertig, anpassbar, zugänglich       |
| **neobrutalism.dev** | Design-Komponenten | Perfekt für den gewünschten Stil        |
| **Zustand**          | State Management   | Leichtgewichtig, einfache API           |
| **Zod**              | Validation         | Type-safe Schema-Validierung            |
| **DiceBear**         | Avatar-Generierung | SVG-Avatare, viele Styles               |

### 5.2 Backend & Database

| Technologie                | Zweck              | Begründung                                |
| -------------------------- | ------------------ | ----------------------------------------- |
| **Supabase (self-hosted)** | Database & Backend | PostgreSQL, Realtime, Storage, Auth-ready |
| **better-auth**            | Authentication     | Next.js-Integration, DSGVO-konform        |
| **Next.js API Routes**     | API-Endpunkte      | Native Integration, Type-safe mit Zod     |
| **PostgreSQL**             | Datenbank          | Relational, robust, mit Supabase          |

### 5.3 Infrastructure & DevOps

| Technologie     | Zweck             | Begründung                             |
| --------------- | ----------------- | -------------------------------------- |
| **Hetzner VPS** | Hosting           | Deutscher Standort (Nürnberg), DSGVO   |
| **Coolify**     | Deployment        | Self-hosted PaaS, Container-Management |
| **Cloudflare**  | CDN & DDoS-Schutz | Performance, Sicherheit                |
| **Docker**      | Containerisierung | Konsistente Environments               |

### 5.4 Services & Integrationen

| Service                             | Zweck               | Begründung                           |
| ----------------------------------- | ------------------- | ------------------------------------ |
| **n8n**                             | Workflow-Automation | Content-Pipeline, selbst hostbar     |
| **Perplexity / Deep Research APIs** | Content-Generierung | KI-gestützte Lerninhalt-Erstellung   |
| **LemonSqueezy**                    | Zahlungen           | DSGVO-freundlich, Merchant of Record |
| **Unsend**                          | E-Mail-Versand      | Self-hosted, Resend-Alternative      |
| **PostHog**                         | Analytics           | Self-hostbar, DSGVO-konform          |
| **Sentry** (empfohlen)              | Error-Tracking      | Produktions-Monitoring               |
| **Uptime Kuma** (empfohlen)         | Uptime-Monitoring   | Self-hosted, Service-Überwachung     |

### 5.5 Content-Quellen

- **KI-generierte Bilder** (DALL-E, Midjourney, Stable Diffusion)
- **FreePik Premium** (Subscription vorhanden)
- **Envato Elements** (Subscription vorhanden)
- **Offizielle Bildungspläne** der deutschen Bundesländer

---

## 6. Datenmodell (Konzeptionell)

### 6.1 User-Modell

```
User
├── id (UUID)
├── email
├── role (child, parent, admin)
├── profile
│   ├── avatar_config (DiceBear JSON)
│   ├── display_name
│   ├── class_level
│   ├── bundesland
│   ├── school_type
│   └── created_at
├── gamification
│   ├── xp
│   ├── level
│   ├── current_streak
│   ├── longest_streak
│   └── last_activity_date
└── relationships
    ├── parent_id (für Kind-Accounts)
    └── children_ids (für Eltern-Accounts)
```

### 6.2 Content-Modell

```
Themenkomplex
├── id
├── title
├── fach (Mathematik, Biologie, etc.)
├── class_level
├── bundesland (optional, später)
├── school_type (optional, später)
├── lehrplan_reference
├── order_index (Empfohlene Reihenfolge)
├── prerequisites (Array von Themenkomplex-IDs)
├── lernkarten (Array)
│   ├── id
│   ├── front_text
│   ├── back_text
│   ├── explanation (für "Erkläre es mir")
│   ├── media (Bilder, Videos)
│   └── difficulty
├── quiz
│   ├── questions (Array)
│   │   ├── id
│   │   ├── type (multiple_choice, true_false, fill_blank)
│   │   ├── question_text
│   │   ├── options
│   │   ├── correct_answer
│   │   ├── explanation
│   │   └── media
│   └── passing_score
├── minigame_reference (optional)
└── metadata
    ├── created_at
    ├── updated_at
    ├── created_by (admin_id)
    └── version
```

### 6.3 Progress-Modell

```
UserProgress
├── user_id
├── themenkomplex_id
├── status (not_started, in_progress, completed)
├── lernkarten_progress
│   ├── cards_seen
│   ├── cards_total
│   └── repetition_schedule (Spaced Repetition)
├── quiz_attempts
│   ├── attempt_number
│   ├── score
│   ├── questions_correct
│   ├── questions_total
│   ├── time_spent
│   └── completed_at
├── minigame_stats
│   ├── games_played
│   └── time_spent
├── started_at
└── completed_at
```

### 6.4 Gamification-Modell

```
Achievements
├── id
├── title
├── description
├── icon
├── type (themen_master, streak_warrior, quiz_perfectionist)
├── requirements (JSON)
└── reward (XP, Avatar-Item, etc.)

UserAchievements
├── user_id
├── achievement_id
├── unlocked_at
└── progress (für mehrstufige Achievements)

Leaderboard
├── user_id
├── category (theme, subject, region)
├── category_id
├── score
├── rank
└── updated_at
```

### 6.5 Subscription-Modell

```
Subscription
├── id
├── user_id (Eltern-Account)
├── tier (free, basic, family)
├── status (active, cancelled, expired)
├── lemon_squeezy_subscription_id
├── current_period_start
├── current_period_end
└── child_limit (1 für free/basic, unbegrenzt für family)
```

### 6.6 Feedback-Modell

```
Feedback
├── id
├── user_id
├── type (bug, content_error, improvement, general)
├── related_to (themenkomplex_id, question_id, etc.)
├── message
├── status (new, in_review, resolved)
├── admin_notes
├── created_at
└── resolved_at
```

### 6.7 Drizzle-Schema (Themenkomplex & Progress)

```typescript
// packages/database/src/schema/themenkomplex.ts
import {
  pgTable,
  uuid,
  varchar,
  integer,
  jsonb,
  timestamp,
} from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";
import { users } from "./users";
import { userProgress } from "./progress";

export const themenkomplexe = pgTable("themenkomplexe", {
  id: uuid("id").primaryKey().defaultRandom(),
  title: varchar("title", { length: 200 }).notNull(),
  fach: varchar("fach", { length: 50 }).notNull(),
  classLevel: integer("class_level").notNull(),
  bundesland: varchar("bundesland", { length: 50 }),
  schoolType: varchar("school_type", { length: 50 }),
  lehrplanReference: varchar("lehrplan_reference", { length: 500 }),
  orderIndex: integer("order_index"),

  // Content stored as JSONB for flexibility
  lernkarten: jsonb("lernkarten")
    .$type<
      Array<{
        id: string;
        frontText: string;
        backText: string;
        explanation: string;
        media?: { type: "image" | "video"; url: string };
        difficulty: "easy" | "medium" | "hard";
      }>
    >()
    .notNull(),

  quiz: jsonb("quiz")
    .$type<{
      passingScore: number;
      questions: Array<{
        id: string;
        type: "multiple_choice" | "true_false" | "fill_blank";
        questionText: string;
        options?: string[];
        correctAnswer: string;
        explanation: string;
        media?: { type: "image" | "video"; url: string };
      }>;
    }>()
    .notNull(),

  minigameReference: varchar("minigame_reference", { length: 100 }),

  // Metadata
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
  createdBy: uuid("created_by").references(() => users.id),
  version: integer("version").default(1).notNull(),
});

export const themenkomplexeRelations = relations(
  themenkomplexe,
  ({ many }) => ({
    progress: many(userProgress),
  })
);
```

```typescript
// packages/database/src/schema/progress.ts
import {
  pgTable,
  uuid,
  varchar,
  integer,
  jsonb,
  timestamp,
} from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";
import { users } from "./users";
import { themenkomplexe } from "./themenkomplex";

export const userProgress = pgTable("user_progress", {
  id: uuid("id").primaryKey().defaultRandom(),
  userId: uuid("user_id")
    .references(() => users.id)
    .notNull(),
  themenkomplexId: uuid("themenkomplex_id")
    .references(() => themenkomplexe.id)
    .notNull(),
  status: varchar("status", { length: 20 }).notNull().default("not_started"), // 'not_started', 'in_progress', 'completed'

  // Lernkarten Progress
  cardsSeen: integer("cards_seen").default(0).notNull(),
  cardsTotal: integer("cards_total").notNull(),
  repetitionSchedule: jsonb("repetition_schedule").$type<
    Record<string, string>
  >(), // cardId -> next review date

  // Quiz Attempts
  quizAttempts: jsonb("quiz_attempts")
    .$type<
      Array<{
        attemptNumber: number;
        score: number;
        questionsCorrect: number;
        questionsTotal: number;
        timeSpent: number;
        completedAt: string;
      }>
    >()
    .default([]),

  // Minigame Stats
  minigameStats: jsonb("minigame_stats").$type<{
    gamesPlayed: number;
    timeSpent: number;
  }>(),

  // Timestamps
  startedAt: timestamp("started_at"),
  completedAt: timestamp("completed_at"),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const userProgressRelations = relations(userProgress, ({ one }) => ({
  user: one(users, {
    fields: [userProgress.userId],
    references: [users.id],
  }),
  themenkomplex: one(themenkomplexe, {
    fields: [userProgress.themenkomplexId],
    references: [themenkomplexe.id],
  }),
}));
```

### 6.8 Drizzle-Client und Relationen-Query (Beispiel)

```typescript
// packages/database/src/client.ts
import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import * as schema from "./schema";

const connectionString = process.env.DATABASE_URL!;

const client = postgres(connectionString);
export const db = drizzle(client, { schema });

// Type-safe queries with relations
export async function getUserWithProgress(userId: string) {
  return db.query.users.findFirst({
    where: (users, { eq }) => eq(users.id, userId),
    with: {
      progress: {
        with: {
          themenkomplex: true,
        },
      },
      achievements: true,
    },
  });
}
```

---

## 7. Content-Pipeline mit n8n

### 7.1 Workflow-Übersicht

```
1. Admin triggert Content-Erstellung im Dashboard
   ↓
2. n8n Workflow startet
   ↓
3. Perplexity/Deep Research API
   - Recherchiert Thema basierend auf Lehrplan
   - Erstellt verständliche Zusammenfassung
   ↓
4. KI generiert strukturierte Inhalte:
   - X Lernkarten (Front/Back/Erklärung)
   - Y Quiz-Fragen mit Antworten
   - Vorschläge für Mini-Spiel-Konzepte
   ↓
5. Optional: Bild-Generierung oder Auswahl
   ↓
6. Inhalte landen als "Entwurf" im Admin-Dashboard
   ↓
7. Manuelle Überprüfung durch Admin (2-3 pro Tag)
   ↓
8. Admin approved → Push zu Supabase
   ↓
9. Themenkomplex ist live
```

### 7.2 Qualitätssicherung

- **Automatische Checks:** Formatierung, Vollständigkeit, Textlänge
- **Manuelle Review:** Fachliche Korrektheit, Verständlichkeit, Angemessenheit
- **Feedback-Loop:** Nutzerfeedback fließt zurück in Content-Pipeline
- **Versionierung:** Änderungen werden getrackt

### 7.3 Migrations Workflow

**Drizzle Config (packages/database/drizzle.config.ts):**

```typescript
import type { Config } from "drizzle-kit";

export default {
  schema: "./src/schema/index.ts",
  out: "./src/migrations",
  driver: "pg",
  dbCredentials: {
    connectionString: process.env.DATABASE_URL!,
  },
} satisfies Config;
```

**Migration Commands:**

```bash
# Schema ändern, dann:
cd packages/database

# Migration generieren
pnpm drizzle-kit generate:pg

# Migration anwenden
pnpm drizzle-kit migrate

# Drizzle Studio öffnen (DB GUI)
pnpm drizzle-kit studio
```

### 7.4 Content-Kategorisierung

- Fach
- Klassenstufe
- Bundesland (später)
- Schulform (später)
- Lehrplan-Referenz
- Schwierigkeitsgrad
- Voraussetzungen

---

## 8. UI/UX-Design-Prinzipien

### 8.1 Neobrutalismus-Stil

**Charakteristika:**

- Dicke, schwarze Borders
- Kräftige, kontrastierende Farben
- Schatteneffekte (oft mehrfarbig)
- Klare geometrische Formen
- Spielerisch, aber nicht kindisch
- Hohe Lesbarkeit durch Kontraste

**Farbpalette:**

- Primärfarbe: Leuchtendes Orange (#FF6B35)
- Sekundärfarben: Gelb, Türkis, Rosa
- Neutral: Schwarz, Weiß, Hellgrau
- Erfolg: Grün
- Warnung: Rot

**Typografie:**

- Headlines: Bold, Sans-Serif (z.B. "Space Grotesk", "Montserrat Bold")
- Body: Lesbare Sans-Serif (z.B. "Inter", "DM Sans")
- Große Schriftgrößen für Lesbarkeit bei Kindern

### 8.2 Interface-Elemente

**Buttons:**

- Große, gut klickbare Flächen
- Hover-Effekte (z.B. Schatten-Verschiebung)
- Klares visuelles Feedback

**Cards:**

- Dicke Borders, mehrfarbige Schatten
- Informationen gut strukturiert
- CTA-Buttons prominent

**Forms:**

- Große Input-Fields
- Klare Labels
- Inline-Validierung mit Zod
- Freundliche Error-Messages

**Icons:**

- Lucide React Icons (konsistent mit shadcn/ui)
- Große, erkennbare Icons
- Farbig zur Kategorisierung

### 8.3 Responsivität

- **Mobile First:** Smartphone-Nutzung prioritär
- **Tablet-optimiert:** Gute Nutzbarkeit auf iPads/Android-Tablets
- **Desktop:** Volles Feature-Set, aber nicht primärer Fokus

### 8.4 Accessibility

- **WCAG 2.1 AA-konform:** Kontraste, Schriftgrößen, Keyboard-Navigation
- **Screen-Reader-freundlich:** Semantic HTML, ARIA-Labels
- **Klare Sprache:** Einfach verständlich für 10-14-Jährige
- **Fehlertoleranz:** Großzügige Klickflächen, Undo-Optionen

### 8.5 Animationen & Micro-Interactions

- **Lernkarten-Flip:** Smooth 3D-Transform
- **XP-Gain:** Animierte Zahl mit Konfetti bei Level-Up
- **Streak-Feuer:** Pulsierende Animation
- **Button-Feedback:** Bounce oder Scale auf Klick
- **Loading-States:** Playful Skeletons oder Custom Loader

**Performance-Regel:** Animationen nur dort, wo sie Wert stiften, nie auf Kosten der Performance.

---

## 9. Sicherheit & Datenschutz

### 9.1 DSGVO-Konformität

**Maßnahmen:**

- Self-Hosting in Deutschland (Hetzner Nürnberg)
- Minimale Datensammlung (Privacy by Design)
- Klare Datenschutzerklärung
- Cookie-Consent (nur essentielle Cookies im Free-Tier)
- Datenexport-Funktion für Nutzer
- Löschfunktion für Accounts
- AVV mit allen Drittanbietern

**Besondere Anforderungen für Minderjährige:**

- Eltern-Zustimmung für Accounts unter 16 (oder Einbindung von LernSax-Accounts)
- Keine Third-Party-Tracking ohne Consent
- Transparente Datennutzung

### 9.2 Authentication & Authorization

- **better-auth** mit Supabase
- Password-Hashing (bcrypt/argon2)
- Two-Factor-Auth (später)
- Session-Management
- Role-Based Access Control (RBAC):
  - Child: Zugriff auf eigene Daten, Lerninhalte
  - Parent: Zugriff auf eigene Kinder-Daten, Zahlungen
  - Admin: Vollzugriff, Content-Management

### 9.3 Input-Validierung

- **Client-seitig:** Zod-Schemas für alle Forms
- **Server-seitig:** Double-Validation in API Routes
- **Sanitization:** Alle User-Inputs bereinigen
- **Rate-Limiting:** API-Endpunkte schützen

### 9.4 XSS & CSRF Protection

- Next.js-Standard-Protections nutzen
- Content Security Policy (CSP) Headers
- CSRF-Tokens für sensible Actions
- Input-Sanitization (DOMPurify)

### 9.5 Zahlungsdaten

- **Keine eigene Speicherung:** LemonSqueezy als Merchant of Record
- **PCI-DSS-konform:** Durch LemonSqueezy
- **Webhooks sichern:** Signature-Verifizierung

### 9.6 Monitoring & Incident Response

- **Error-Tracking:** Sentry für Production-Errors
- **Uptime-Monitoring:** Uptime Kuma
- **Log-Aggregation:** Strukturierte Logs (Winston/Pino)
- **Backup-Strategie:**
  - Tägliche automatische DB-Backups (Hetzner Storage Box)
  - Point-in-Time-Recovery für PostgreSQL
  - 30 Tage Retention

---

## 10. Entwicklungsphasen & Milestones

### Phase 1: Fundament & Monorepo-Setup (Wochen 1-2)

**Ziel:** Technisches Grundgerüst und Monorepo aufbauen

**Tasks:**

- [ ] **Hetzner VPS aufsetzen**, Coolify installieren
- [ ] **Supabase (self-hosted) deployen** via Coolify
- [ ] **Monorepo initialisieren:**
  - [ ] Turborepo Setup mit pnpm
  - [ ] Verzeichnisstruktur erstellen (apps/, packages/)
  - [ ] Root package.json konfigurieren
  - [ ] pnpm-workspace.yaml erstellen
  - [ ] turbo.json konfigurieren
- [ ] **Shared Packages erstellen:**
  - [ ] @laernapp/config (Tailwind, ESLint, TypeScript)
  - [ ] @laernapp/ui (shadcn/ui + neobrutalism)
  - [ ] @laernapp/types (Shared TypeScript Types)
  - [ ] @laernapp/database (Drizzle Schema)
  - [ ] @laernapp/auth (better-auth Setup)
- [ ] **Landing App initialisieren:**
  - [ ] Next.js 15 Projekt in apps/landing
  - [ ] Tailwind + shadcn/ui einrichten
  - [ ] Basic Homepage mit Neobrutalismus-Design
- [ ] **Web App initialisieren:**
  - [ ] Next.js 15 Projekt in apps/web
  - [ ] Tailwind + shadcn/ui einrichten
  - [ ] Route-Gruppen erstellen ((auth), (dashboard), etc.)
- [ ] **Database Setup:**
  - [ ] Drizzle Schema definieren (User, Themenkomplex, Progress)
  - [ ] Erste Migrations generieren und anwenden
  - [ ] Seed-Daten für Development
- [ ] **Auth Setup:**
  - [ ] better-auth mit Drizzle Adapter konfigurieren
  - [ ] Cookie-Domain für Subdomain-Sharing setzen
  - [ ] Login/Register Forms in apps/web
- [ ] **Deployment:**
  - [ ] Landing App auf Coolify deployen → laernapp.de
  - [ ] Web App auf Coolify deployen → app.laernapp.de
  - [ ] DNS in Cloudflare konfigurieren

**Deliverable:** Lauffähiges Monorepo mit zwei deployed Apps, funktionierendem Auth-System

---

### Phase 2: Core Learning Loop (Wochen 3-5)

**Ziel:** Herzstück der App – Lernkarten und Quiz

**Tasks:**

- [ ] **Lernkarten-System:**
  - [ ] Lernkarten-Komponente mit Flip-Animation
  - [ ] "Erkläre es mir"-Modal
  - [ ] Navigation durch Kartenstapel (Zustand)
  - [ ] Fortschrittsanzeige
  - [ ] Spaced-Repetition-Logik (Backend)
- [ ] **Quiz-System:**
  - [ ] Quiz-Komponente bauen
  - [ ] Multiple-Choice UI
  - [ ] True/False UI
  - [ ] Lückentext UI
  - [ ] Sofortiges Feedback bei Antworten
  - [ ] Score-Berechnung
  - [ ] Erklärungen bei falschen Antworten
- [ ] **Themenkomplex-Flow:**
  - [ ] Themenkomplex-Übersichtsseite
  - [ ] Themenkomplex-Detailseite
  - [ ] Flow: Lernkarten → Quiz → Abschluss
  - [ ] Progress-Tracking in DB (Drizzle)
- [ ] **API Routes:**
  - [ ] GET /api/themenkomplex/[id]
  - [ ] POST /api/progress/card-seen
  - [ ] POST /api/progress/quiz-submit
  - [ ] GET /api/progress/user
- [ ] **Content:**
  - [ ] Erste 5 Themenkomplexe manuell erstellen (Seed-Daten)
  - [ ] Bilder aus FreePik/Envato integrieren
- [ ] **Dashboard (Basic):**
  - [ ] Schüler-Dashboard mit Fächer-Übersicht
  - [ ] "Weiter lernen"-Button
  - [ ] XP und Level anzeigen (statisch noch)

**Deliverable:** Kinder können Themenkomplexe durcharbeiten und Quiz machen

---

### Phase 3: Gamification (Wochen 6-7)

**Ziel:** Motivationssystem implementieren

**Tasks:**

- [ ] **XP-System:**
  - [ ] XP-Vergabe bei Quiz-Completion (Backend-Logik)
  - [ ] Level-Berechnung basierend auf XP
  - [ ] XP-Bar im UI (animiert)
  - [ ] Level-Up-Animation mit Konfetti
- [ ] **Streak-System:**
  - [ ] Tägliche Aktivität tracken (Cron-Job oder bei Login)
  - [ ] Streak-Kalender-Visualisierung
  - [ ] Streak-Benachrichtigungen (Email via Unsend)
  - [ ] Streak-Bonus XP
- [ ] **Achievement-System:**
  - [ ] Achievement-Definitionen in DB
  - [ ] Unlock-Logik (Backend)
  - [ ] Achievement-Showcase im Profil
  - [ ] Achievement-Unlocked-Animation
- [ ] **Avatar-System:**
  - [ ] DiceBear-Integration
  - [ ] Avatar-Creator beim Onboarding
  - [ ] Avatar-Anzeige im Dashboard
  - [ ] Freischaltbare Avatar-Elemente (später)
- [ ] **Leaderboards:**
  - [ ] Leaderboard-Schema in DB
  - [ ] Top 10 pro Fach/Thema
  - [ ] Leaderboard-Seite im UI
  - [ ] Optional: Regionale Leaderboards

**Deliverable:** Vollständiges Gamification-Erlebnis

---

### Phase 4: Content-Pipeline (Wochen 8-9)

**Ziel:** Automatisierte Content-Generierung

**Tasks:**

- [ ] **n8n Setup:**
  - [ ] n8n (self-hosted) auf Coolify deployen
  - [ ] Workflow-Template erstellen
- [ ] **KI-Integration:**
  - [ ] Perplexity API-Key einrichten
  - [ ] Workflow: Lehrplan-Input → Recherche → Lernkarten
  - [ ] Workflow: Quiz-Fragen-Generierung
  - [ ] Prompt-Engineering für konsistente Qualität
- [ ] **Admin-Dashboard:**
  - [ ] Content-Review-Interface bauen
  - [ ] Entwurf-Ansicht (Preview von Lernkarten/Quiz)
  - [ ] Approve/Reject-Buttons
  - [ ] Edit-Möglichkeit vor Approval
  - [ ] Push zu Supabase via API
- [ ] **Content-Generierung:**
  - [ ] 20 weitere Themenkomplexe generieren (Gesamt: 25)
  - [ ] Manuelle Review (2-3 pro Tag)
  - [ ] Bilder zuordnen/generieren
- [ ] **Qualitätssicherung:**
  - [ ] Automatische Formatprüfung
  - [ ] Textlängen-Validation
  - [ ] Feedback-Loop für Content-Verbesserungen

**Deliverable:** 25 Themenkomplexe verfügbar, Content-Pipeline funktionsfähig

---

### Phase 5: Eltern-Dashboard (Wochen 10-11)

**Ziel:** Eltern-Features implementieren

**Tasks:**

- [ ] **Eltern-Dashboard UI:**
  - [ ] Separates Dashboard-Layout
  - [ ] Kinder-Übersicht (für Familien-Accounts)
  - [ ] Kind auswählen → Fortschritt anzeigen
- [ ] **Fortschritts-Charts:**
  - [ ] Recharts-Library integrieren
  - [ ] Themenkomplex-Completion-Chart
  - [ ] Quiz-Performance über Zeit
  - [ ] Lernzeit-Statistiken pro Woche/Monat
  - [ ] Fach-Vergleich
- [ ] **Kontrollfeatures:**
  - [ ] Minispiel-Zeitlimit setzen (UI + DB)
  - [ ] Themenbereiche priorisieren
  - [ ] Benachrichtigungen konfigurieren
  - [ ] Lernziele setzen (optional)
- [ ] **LemonSqueezy-Integration:**
  - [ ] LemonSqueezy Account einrichten
  - [ ] Produkte erstellen (Free, Basic, Family)
  - [ ] Checkout-Flow implementieren
  - [ ] Webhook-Handler für Subscription-Events
  - [ ] Subscription-Status in DB synchronisieren
- [ ] **Tier-System:**
  - [ ] Feature-Gates implementieren
  - [ ] Free-Tier: 3 Themenkomplexe/Tag Limit
  - [ ] Basic-Tier: Unbegrenzte Themenkomplexe, 1 Kind
  - [ ] Family-Tier: Unbegrenzt Kinder
  - [ ] Upgrade-Flow im UI
- [ ] **Account-Verwaltung:**
  - [ ] Mehrere Kinder-Profile anlegen
  - [ ] Kinder-Account zu Eltern-Account verknüpfen
  - [ ] Abo-Verwaltung (Kündigung, Upgrade)

**Deliverable:** Funktionierendes Eltern-Dashboard mit Zahlungen

---

### Phase 6: Polish & Testing (Wochen 12-13)

**Ziel:** MVP finalisieren für School-Launch

**Tasks:**

- [ ] **Feedback-System:**
  - [ ] Feedback-Button nach jedem Themenkomplex
  - [ ] Feedback-Formular (separate Route)
  - [ ] Feedback-Kategorien (Bug, Content, Feature)
  - [ ] Admin-View für Feedback-Review
- [ ] **Responsivität:**
  - [ ] Mobile-Optimierung aller Seiten
  - [ ] Tablet-Optimierung
  - [ ] Desktop-Ansicht verfeinern
  - [ ] Cross-Browser-Testing (Chrome, Safari, Firefox)
- [ ] **Performance-Optimierung:**
  - [ ] Image-Optimierung (Next.js Image)
  - [ ] Code-Splitting optimieren
  - [ ] Lazy Loading für Komponenten
  - [ ] Caching-Strategien (Cloudflare)
  - [ ] Lighthouse-Score > 90
- [ ] **SEO (Landing Page):**
  - [ ] Meta-Tags optimieren
  - [ ] Sitemap generieren
  - [ ] robots.txt
  - [ ] Open Graph Tags
  - [ ] Structured Data (JSON-LD)
- [ ] **Error-Handling:**
  - [ ] Error-Boundaries implementieren
  - [ ] User-freundliche Error-Messages
  - [ ] Fallback-UI bei Fehlern
  - [ ] Sentry-Integration für Error-Tracking
- [ ] **Onboarding-Flow:**
  - [ ] Willkommens-Tutorial für Kinder
  - [ ] Avatar-Erstellung beim ersten Login
  - [ ] Profil-Setup (Klasse, Bundesland)
  - [ ] Feature-Highlights zeigen
- [ ] **DSGVO-Compliance:**
  - [ ] Datenschutzerklärung schreiben
  - [ ] Impressum erstellen
  - [ ] AGB verfassen
  - [ ] Cookie-Consent-Banner (nur essentiell im Free-Tier)
  - [ ] Datenexport-Funktion
  - [ ] Account-Löschung-Funktion
- [ ] **Testing:**
  - [ ] Alpha-Testing mit Sohn
  - [ ] Beta-Testing mit Familie/Freunden
  - [ ] Bug-Fixing basierend auf Feedback
  - [ ] Load-Testing (k6 oder Artillery)
  - [ ] Security-Audit (OWASP Top 10)

**Deliverable:** Produktionsreifer MVP

---

### Phase 7: School Launch (Woche 14+)

**Ziel:** Test an sächsischer Schule

**Tasks:**

- [ ] **Schul-Vorbereitung:**
  - [ ] Lehrer/Schulleitung Präsentation
  - [ ] Informationsmaterial für Eltern erstellen
  - [ ] Registrierungs-Codes generieren
  - [ ] Support-Prozess definieren
- [ ] **Launch:**
  - [ ] Pilot-Klasse auswählen (5-8)
  - [ ] Codes an Schüler verteilen
  - [ ] Onboarding-Session in der Schule (optional)
- [ ] **Monitoring:**
  - [ ] Uptime Kuma Alerts einrichten
  - [ ] PostHog Dashboards für KPIs
  - [ ] Daily Checks: Fehlerrate, Performance
  - [ ] User-Feedback aktiv einholen
- [ ] **Support:**
  - [ ] Support-Email einrichten (support@laernapp.de)
  - [ ] FAQ-Seite erstellen
  - [ ] Schnelle Response auf Probleme
- [ ] **Feedback-Sammlung:**
  - [ ] Schüler-Interviews (Was gefällt? Was nicht?)
  - [ ] Eltern-Befragung
  - [ ] Lehrer-Feedback
  - [ ] Quantitative Metriken analysieren
- [ ] **Iteration:**
  - [ ] Bugs fixen (höchste Priorität)
  - [ ] Quick Wins umsetzen
  - [ ] Roadmap für Phase 2 Features

**Deliverable:** Validiertes MVP mit echtem Nutzer-Feedback, Learnings für Skalierung

---

## 11. Potenzielle Herausforderungen & Lösungen

### 11.1 Content-Qualität

**Herausforderung:**
KI-generierte Inhalte könnten fachlich fehlerhaft oder unverständlich sein.

**Lösungen:**

- Manuelle Review jedes Themenkomplexes vor Veröffentlichung (2-3 pro Tag)
- Klare Prompts für KI mit Lehrplan-Referenzen
- Feedback-System für Nutzer zum Melden von Fehlern
- Spätere Einbindung von Fachlehrern als Content-Reviewer
- Versionierung und schnelle Korrekturmöglichkeit

### 11.2 Motivation langfristig aufrechterhalten

**Herausforderung:**
Gamification funktioniert anfangs, aber Kinder verlieren Interesse.

**Lösungen:**

- Regelmäßig neue Mini-Spiele freischalten
- Zeitlich begrenzte Events/Challenges
- Soziale Features (Freunde, Klassen-Leaderboards)
- Personalisierte Lernempfehlungen
- Abwechslungsreiche Content-Formate
- Eltern-Einbindung zur Unterstützung

### 11.3 Skalierung der Infrastruktur

**Herausforderung:**
Erfolgreicher Launch führt zu mehr Nutzern als erwartet, VPS kommt an Grenzen.

**Lösungen:**

- Cloudflare Caching reduziert Last erheblich
- Statische Inhalte (Lernkarten, Quiz) sind hochgradig cachebar
- Database Query-Optimierung (Indexing, Connection Pooling)
- Bei Bedarf: Upgrade auf größeren Hetzner-Server oder Load-Balancing
- Monitoring (Uptime Kuma, Sentry) für frühzeitiges Erkennen
- Notfallplan: Temporäre Registrierungssperre, Warteliste

### 11.4 DSGVO-Compliance bei Minderjährigen

**Herausforderung:**
Rechtliche Unsicherheiten bei Datenverarbeitung von Kindern.

**Lösungen:**

- Rechtsberatung vor offiziellem Launch
- Eltern-Consent-Mechanismus
- LernSax-Integration (vertrauenswürdige Schul-Accounts)
- Minimale Datensammlung (Privacy by Design)
- Transparente Dokumentation aller Datenflüsse
- Opt-In für alle nicht-essentiellen Features

### 11.5 Content-Localization (Bundesländer)

**Herausforderung:**
Lehrpläne unterscheiden sich teilweise erheblich zwischen Bundesländern.

**Lösungen:**

- Für MVP: Fokus auf Sachsen
- Datenmodell von Anfang an mit bundesland-Feld
- Themenkomplexe können mehreren Bundesländern zugeordnet werden
- Schrittweise Expansion: Ein Bundesland nach dem anderen
- Community-Feedback nutzen: Lehrer aus anderen Bundesländern können Anpassungen vorschlagen

### 11.6 Zahlungsabwicklung & Chargebacks

**Herausforderung:**
Eltern könnten Zahlungen zurückfordern, nachdem Kinder Inhalte genutzt haben.

**Lösungen:**

- LemonSqueezy als Merchant of Record übernimmt viel Risiko
- Klare Abobedingungen und Kündigungsfristen
- Kostenloser Tier als "Testversion"
- Zufriedenheits-Garantie (z.B. 14 Tage Geld-zurück)
- Proaktive Kommunikation bei Problemen
- Exzellenter Support reduziert Chargebacks

### 11.7 Konkurrenzsituation

**Herausforderung:**
Etablierte Anbieter (Sofatutor, Scoyo, Anton) mit großem Marketing-Budget.

**Lösungen:**

- **Differenzierung:** Gamification-First, Neobrutalismus-Design, bundeslandspezifisch
- **Nische zuerst:** Start in Sachsen, dann organisches Wachstum
- **Community-Building:** Schul-Partnerschaften, Mund-zu-Mund-Propaganda
- **Qualität über Quantität:** Lieber 25 exzellente Themenkomplexe als 100 mittelmäßige
- **Agiles Vorgehen:** Schnelle Iteration basierend auf Nutzer-Feedback
- **Persönliche Story:** Entwickelt von Vater für seinen Sohn – authentisch

### 11.8 Content-Pipeline-Abhängigkeit

**Herausforderung:**
KI-APIs (Perplexity) könnten ausfallen, teurer werden, oder eingestellt werden.

**Lösungen:**

- Mehrere KI-Provider als Fallback (OpenAI, Anthropic Claude)
- Generierte Inhalte werden persistent gespeichert (nicht on-the-fly)
- Manuelle Content-Erstellung als Alternative immer möglich
- Langfristig: Eigene KI-Modelle fine-tunen für Lerninhalt-Erstellung

---

## 12. Zukünftige Features & Expansion

### 12.1 Phase 2 Features (nach MVP)

**Kurzfristig (Q1 2026):**

- Mehr Themenkomplexe (Ziel: 100+)
- Erste Mini-Spiele implementieren
- Granulares Feedback (pro Karte/Frage)
- Adaptive Lernsysteme (Schwierigkeitsanpassung)
- Freunde-System und privates Duell
- Push-Benachrichtigungen (Streak-Reminder)
- Progressive Web App (PWA) für App-ähnliches Erlebnis

**Mittelfristig (Q2-Q3 2026):**

- Bundesland-Expansion (Brandenburg, Berlin, Thüringen)
- Schulform-Differenzierung (Realschule, Gesamtschule)
- Klassenraum-Feature für Lehrer
  - Lehrer kann Klasse anlegen
  - Schüler beitreten lassen
  - Klassen-Leaderboard
  - Hausaufgaben zuweisen
- Erweiterte Analytics im Eltern-Dashboard
- Lernplan-Generator (KI-gestützt)

**Langfristig (2027+):**

- Native Mobile Apps (React Native / Expo)
- Expansion auf Grundschule (Klasse 1-4)
- Oberstufe (Klasse 9-12)
- Inklusives Lernen (Barrierefreiheit, Förderschulen)
- Internationalisierung (Österreich, Schweiz)
- Video-Tutorials und interaktive Erklärvideos
- Live-Tutoring oder Community-Hilfe
- Eltern-Kind-Challenges
- Schul-Lizenzen (B2B-Modell)

### 12.2 Technologische Evolution

**Datenbank:**

- Bei starkem Wachstum: Übergang zu verteilten Systemen (PostgreSQL Clustering)
- Redis für Caching und Session-Management
- Elasticsearch für fortgeschrittene Suche

**Frontend:**

- Server Components für noch bessere Performance
- Partial Prerendering in Next.js
- Edge-Computing für globale Nutzer (falls internationale Expansion)

**KI & ML:**

- Eigene ML-Modelle für Content-Generierung
- Personalisierte Lernempfehlungen (Collaborative Filtering)
- Automatische Schwierigkeitsanpassung
- Sprach- und Handschrifterkennung

**Analytics:**

- Erweiterte Learning Analytics
- Predictive Models (Dropout-Prävention)
- A/B-Testing-Framework

### 12.3 Geschäftsmodell-Erweiterung

**Zusätzliche Revenue-Streams:**

- **B2B:** Schul-Lizenzen (Flatrate für ganze Schulen)
- **B2G:** Kooperationen mit Bildungsministerien
- **Premium+:** Höheres Tier mit 1-on-1-Tutoring
- **Whitelabel:** Lizenzierung der Plattform an andere Bildungsanbieter
- **Affiliate:** Lehrbücher, Lernmaterialien

**Kooperationen:**

- Schulbuchverlage (offizieller Content)
- Bildungsstiftungen
- Nachhilfe-Institute
- EdTech-Startups (Integrations)

---

## 13. Erfolgskriterien & KPIs

### 13.1 MVP-Phase (School Launch)

**Ziel:** Proof of Concept

- **Registrierungen:** 50+ aktive Schüler-Accounts
- **Engagement:** Durchschnittlich 3+ Login-Tage/Woche
- **Retention:** 60%+ kommen nach erster Woche zurück
- **Completion-Rate:** 40%+ der gestarteten Themenkomplexe werden abgeschlossen
- **Feedback:** 70%+ positive Rückmeldungen
- **Technische Stabilität:** 99%+ Uptime
- **Conversions:** 10%+ von Free zu Paid

### 13.2 Wachstumsphase (6 Monate nach Launch)

**Ziel:** Marktvalidierung

- **Nutzer:** 500+ aktive Schüler
- **Paying Customers:** 50+ Abo-Zahlungen
- **MRR (Monthly Recurring Revenue):** 500€+
- **Content:** 50+ Themenkomplexe
- **NPS (Net Promoter Score):** 40+
- **Churn-Rate:** <10% monatlich

### 13.3 Skalierungsphase (12 Monate nach Launch)

**Ziel:** Regionale Dominanz (Sachsen)

- **Nutzer:** 5.000+ aktive Schüler
- **Paying Customers:** 500+
- **MRR:** 5.000€+
- **Schools:** 10+ Schulen nutzen aktiv
- **Content:** 100+ Themenkomplexe
- **Bundesländer:** Expansion in 2-3 weitere gestartet

### 13.4 Metriken-Dashboard

**Tracking (PostHog / Custom):**

- Daily/Weekly/Monthly Active Users (DAU/WAU/MAU)
- Session-Dauer
- Themenkomplexe pro Nutzer
- Quiz-Success-Rate
- Streak-Retention
- Funnel-Analyse (Registration → First Theme → Paid)
- Feature-Nutzung (welche Features werden wie oft genutzt?)

---

## 14. Risikomanagement

### 14.1 Technische Risiken

| Risiko                       | Wahrscheinlichkeit | Impact    | Mitigation                                     |
| ---------------------------- | ------------------ | --------- | ---------------------------------------------- |
| Server-Ausfall               | Mittel             | Hoch      | Monitoring, Backups, schneller Support-Prozess |
| Datenbank-Korruption         | Niedrig            | Sehr hoch | Tägliche Backups, Point-in-Time-Recovery       |
| API-Ausfall (Perplexity)     | Mittel             | Mittel    | Fallback-Provider, Content vorproduzieren      |
| DDoS-Attacke                 | Niedrig            | Mittel    | Cloudflare Protection                          |
| Kritischer Bug in Production | Mittel             | Hoch      | Sentry Monitoring, Rollback-Strategie          |

### 14.2 Business-Risiken

| Risiko                     | Wahrscheinlichkeit | Impact    | Mitigation                                 |
| -------------------------- | ------------------ | --------- | ------------------------------------------ |
| Geringe User-Adoption      | Mittel             | Sehr hoch | Iteratives Testing, Feedback-Loops, Pivots |
| DSGVO-Verstoß              | Niedrig            | Sehr hoch | Rechtsberatung, Privacy by Design          |
| Konkurrenz kopiert Konzept | Hoch               | Mittel    | Schnell iterieren, Community aufbauen      |
| Zahlungs-Probleme          | Niedrig            | Mittel    | LemonSqueezy als zuverlässiger Partner     |
| Budget-Überschreitung      | Mittel             | Mittel    | Laufende Kosten tracken, günstige Services |

### 14.3 Inhaltliche Risiken

| Risiko                        | Wahrscheinlichkeit | Impact    | Mitigation                                  |
| ----------------------------- | ------------------ | --------- | ------------------------------------------- |
| Fehlerhafte Lerninhalte       | Mittel             | Hoch      | Manuelle Review, Feedback-System            |
| Unpassende Inhalte für Kinder | Niedrig            | Sehr hoch | Content-Filter, manuelle Checks             |
| Lehrplan-Änderungen           | Niedrig            | Mittel    | Flexible Content-Struktur, schnelle Updates |

---

## 15. Team & Ressourcen

### 15.1 Aktuelles Team

**Entwickler/Founder (Du):**

- Full-Stack-Development
- DevOps & Infrastructure
- Product Management
- Content-Review

**Beta-Tester/Advisor (Dein Sohn):**

- User-Testing
- Feature-Feedback
- Zielgruppen-Insights

**KI-Assistenten:**

- Claude Code (Coding-Support)
- Cursor (IDE-Integration)
- Perplexity (Content-Research)

### 15.2 Zukünftige Team-Erweiterung

**Priorität 1 (nach MVP-Erfolg):**

- **Content-Manager:** Überprüfung und Erstellung von Lerninhalten
- **UX-Designer:** Verfeinerung des Interfaces, neue Features

**Priorität 2 (nach Skalierung):**

- **Full-Stack-Developer:** Shared Development-Last
- **Marketing-Manager:** Growth, Schul-Akquise
- **Customer-Support:** Nutzer- und Lehrer-Support

**Priorität 3 (bei weiterer Expansion):**

- **Pädagogen/Fachlehrer:** Inhaltliche Beratung pro Fach
- **DevOps-Engineer:** Infrastructure bei hoher Last
- **Data-Analyst:** Learning Analytics, Optimierung

### 15.3 Externe Ressourcen

**Dienstleister:**

- **Rechtsanwalt (Medienrecht/Datenschutz):** DSGVO-Compliance, AGB
- **Steuerberater:** Gewerbeanmeldung, Buchhaltung
- **Grafiker (optional):** Custom-Illustrationen für Special-Events

**Communities:**

- **r/webdev, r/nextjs:** Technischer Austausch
- **EdTech-Foren:** Bildungs-spezifische Insights
- **Lokale Startup-Community:** Networking, Mentoring

---

## 16. Budget & Kosten (Monatlich)

### 16.1 Fixkosten

| Kategorie          | Service                       | Kosten (ca.)        |
| ------------------ | ----------------------------- | ------------------- |
| **Hosting**        | Hetzner VPS (CX41)            | 15€                 |
| **Backup Storage** | Hetzner Storage Box           | 5€                  |
| **Domain**         | .de Domain                    | 1€                  |
| **CDN/Security**   | Cloudflare (Free Plan)        | 0€                  |
| **Zahlungen**      | LemonSqueezy (nur bei Umsatz) | 0€\*                |
| **Analytics**      | PostHog (self-hosted)         | 0€                  |
| **Monitoring**     | Sentry (Developer Plan)       | 0€                  |
| **E-Mail**         | Unsend (self-hosted)          | 0€                  |
| **Bilder**         | FreePik Premium               | (bereits vorhanden) |
| **Bilder**         | Envato Elements               | (bereits vorhanden) |
|                    | **Total**                     | **~21€/Monat**      |

\*LemonSqueezy: 5% + Zahlungsgebühren nur bei Verkäufen

### 16.2 Variable Kosten

| Kategorie           | Service                             | Kosten (ca.)                            |
| ------------------- | ----------------------------------- | --------------------------------------- |
| **KI-APIs**         | Perplexity/Deep Research            | 20-50€ (für 20-30 Themenkomplexe/Monat) |
| **Bildgenerierung** | DALL-E / Midjourney (falls genutzt) | 0-30€                                   |
| **Skalierung**      | Bei Wachstum: größerer Server       | +10-50€                                 |

**Total MVP-Phase:** ~50-100€/Monat

### 16.3 Umsatzprognose (konservativ)

**MVP-Phase (Monat 1-3):**

- Free-Tier-Nutzer: 50
- Paid-Nutzer (9€): 5
- Family-Nutzer (19€): 0
- **MRR:** 45€

**Wachstumsphase (Monat 6):**

- Free-Tier-Nutzer: 400
- Paid-Nutzer (9€): 40
- Family-Nutzer (19€): 5
- **MRR:** 455€

**Skalierungsphase (Monat 12):**

- Free-Tier-Nutzer: 4.000
- Paid-Nutzer (9€): 400
- Family-Nutzer (19€): 50
- **MRR:** 4.550€

**Break-Even:** Voraussichtlich Monat 6-8 (abhängig von Conversion-Rate)

---

## 17. Legal & Compliance

### 17.1 Notwendige Dokumente

- [ ] **Impressum** (Pflicht in Deutschland)
- [ ] **Datenschutzerklärung** (DSGVO-konform)
- [ ] **Allgemeine Geschäftsbedingungen (AGB)**
- [ ] **Nutzungsbedingungen**
- [ ] **Cookie-Richtlinie**
- [ ] **Einwilligungserklärung Eltern** (für Minderjährige)

### 17.2 Rechtliche Struktur

**Gewerbeanmeldung:**

- Einzelunternehmen oder UG (haftungsbeschränkt)?
- Gewerbeanmeldung beim zuständigen Gewerbeamt
- Finanzamt-Anmeldung (Steuernummer)

**Versicherungen:**

- Berufshaftpflicht (empfohlen)
- Cyber-Versicherung (bei Skalierung)

### 17.3 Content-Rechte

**Urheberrecht:**

- KI-generierte Texte: Keine Urheberrechts-Probleme (solange nicht kopiert)
- Bilder: FreePik/Envato-Lizenzen beachten (Commercial Use erlaubt?)
- Videos: Lizenzierung klären

**Lehrpläne:**

- Öffentlich zugänglich, Nutzung für Bildungszwecke meist erlaubt
- Bei Unsicherheit: Bildungsministerien kontaktieren

---

## 18. Marketing & Go-to-Market

### 18.1 Launch-Strategie (MVP)

**Soft-Launch:**

1. **Family & Friends:** Erste Tester (Woche 1-2)
2. **Schule des Sohnes:** Pilot-Klasse (Woche 3-4)
3. **Feedback sammeln & iterieren** (Woche 5-6)
4. **Weitere Klassen** derselben Schule (Woche 7-8)

**Kanäle:**

- **Word-of-Mouth:** Eltern erzählen Eltern
- **Schulleitung:** Offizielle Empfehlung
- **Elternabende:** Präsentation der App

### 18.2 Wachstumsphase

**Online:**

- **Landing Page:** SEO-optimiert für "Lernapp Sachsen", "Gymnasium 5. Klasse lernen"
- **Social Media:** Instagram/Facebook für Eltern (Erfolgsgeschichten, Tipps)
- **Content-Marketing:** Blog mit Lern-Tipps, Lehrplan-Guides
- **Google Ads:** Gezielt für Sachsen (kleines Budget)

**Offline:**

- **Flyer an Schulen:** In Zusammenarbeit mit Schulleitungen
- **Bildungsmessen:** Sächsische Bildungsmessen besuchen
- **Partnerschaften:** Nachhilfe-Institute, Buchhandlungen

### 18.3 Referral-Programm (später)

- Eltern werben Eltern: 1 Monat gratis für beide
- Lehrer werben Lehrer: Klassen-Lizenzen vergünstigt

---

## 19. Erfolgsstory-Vision

**In 12 Monaten:**
LaernApp ist die bevorzugte Lernplattform an 10+ Schulen in Sachsen. Hunderte von Schülern nutzen täglich die App, verbessern ihre Noten und haben Spaß beim Lernen. Eltern schätzen die Transparenz und Kontrollmöglichkeiten. Lehrer empfehlen die App als Ergänzung zum Unterricht.

**In 3 Jahren:**
LaernApp hat sich in mehreren Bundesländern etabliert. Tausende Schüler lernen mit der Plattform. Das Unternehmen ist profitabel, beschäftigt ein kleines Team, und arbeitet mit Bildungsministerien zusammen. Die Plattform deckt alle Klassenstufen ab und ist bekannt für exzellente Inhalte und motivierendes Design.

**In 5 Jahren:**
LaernApp ist eine der führenden Lernplattformen in Deutschland. Kooperationen mit Schulbuchverlagen bringen offiziellen Content. Die Plattform expandiert in den DACH-Raum. Native Apps bieten noch besseres User-Experience. Das Unternehmen setzt Maßstäbe in EdTech mit innovativen Features wie adaptiven Lernsystemen und KI-Tutoren.

---

## 20. Nächste Schritte (Action Items)

### Sofort (Diese Woche)

1. **VPS bestellen:** Hetzner CX41, Standort Nürnberg
2. **Domains registrieren:** laernapp.de, alternativ laern.app
3. **Monorepo initialisieren:**
   ```bash
   mkdir laernapp && cd laernapp
   pnpm init
   pnpm add -D turbo
   mkdir -p apps/landing apps/web packages/{ui,config,auth,database,types}
   ```
4. **Landing App erstellen:**
   ```bash
   cd apps/landing
   pnpm create next-app@latest . --typescript --tailwind --app
   ```
5. **Web App erstellen:**
   ```bash
   cd apps/web
   pnpm create next-app@latest . --typescript --tailwind --app
   ```

### Woche 1-2

6. **Shared Packages setup:**
   - @laernapp/ui mit shadcn/ui
   - @laernapp/config mit Tailwind-Config
   - @laernapp/types mit Zod-Schemas
7. **Coolify deployen:** Auf Hetzner VPS
8. **Supabase installieren:** Via Coolify
9. **Drizzle Setup:**
   ```bash
   cd packages/database
   pnpm add drizzle-orm postgres
   pnpm add -D drizzle-kit
   ```
10. **better-auth konfigurieren:**
    ```bash
    cd packages/auth
    pnpm add better-auth
    ```
11. **Database-Schema erstellen:** User, Themenkomplex, Progress mit Drizzle
12. **Erste Deployment:** Landing + Web auf Coolify
13. **DNS konfigurieren:** Cloudflare → laernapp.de, app.laernapp.de

### Woche 3-4

14. **Lernkarten-Komponente:** Flip-Animation, Navigation
15. **Quiz-Komponente:** Multiple-Choice, Feedback
16. **Erste 5 Themenkomplexe:** Manuell erstellen als Seed
17. **Basic Dashboard:** XP, Level, Themenliste
18. **API Routes:** Themenkomplex-CRUD, Progress-Tracking

### Parallel (fortlaufend)

19. **Rechtliche Grundlagen:** Gewerbeanmeldung, Datenschutzerklärung
20. **n8n aufsetzen:** Content-Pipeline vorbereiten
21. **Feedback mit Sohn:** Regelmäßige Tests, UI/UX-Feedback
22. **Code-Review:** Regelmäßige Refactoring-Sessions

---

## 21. Schlusswort

LaernApp hat das Potenzial, vielen Kindern beim Lernen zu helfen und dabei Spaß zu machen. Mit einem klaren Plan, realistischen Meilensteinen und dem Mut, schnell zu iterieren, ist der MVP bis Ende November machbar.

**Die wichtigsten Erfolgsfaktoren:**

- **Fokus:** Nicht zu viel auf einmal, sondern ein funktionierender Core
- **Qualität:** Lieber weniger, aber bessere Inhalte
- **Feedback:** Früh und oft von echten Nutzern (Sohn, Schule)
- **Iteration:** Schnell lernen, anpassen, verbessern
- **Durchhaltevermögen:** Erste Nutzer zu gewinnen ist hart, aber lohnt sich

**Dein größter Vorteil:** Du baust nicht für einen anonymen Markt, sondern für deinen Sohn und Kinder wie ihn. Diese persönliche Verbindung wird in jedem Feature spürbar sein – und das macht den Unterschied.

Viel Erfolg bei der Umsetzung! 🚀📚✨

---

**Dokument-Version:** 1.1 (Aktualisiert)
**Erstellt am:** 04. Oktober 2025
**Aktualisiert am:** 05. Oktober 2025
**Nächstes Review:** Nach Phase 1 Abschluss (ca. 2 Wochen)
