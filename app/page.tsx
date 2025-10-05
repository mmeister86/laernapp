"use client";

import React from "react";
import { HeroSection } from "@/components/hero-section";
import { FeatureSection } from "@/components/feature-section";
import {
  ContributionGraph,
  ContributionGraphCalendar,
  ContributionGraphBlock,
  ContributionGraphFooter,
  ContributionGraphTotalCount,
  ContributionGraphLegend,
  type Activity,
} from "@/components/kibo-ui/contribution-graph";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

/**
 * Generiert Mock-Daten für die Contribution Graph
 * Simuliert Lernaktivitäten eines Schülers über die letzten 52 Wochen
 */
const generateMockData = (): Activity[] => {
  const data: Activity[] = [];
  const today = new Date();
  const startDate = new Date(today);
  startDate.setDate(today.getDate() - 365); // 52 Wochen zurück

  for (let i = 0; i < 365; i++) {
    const currentDate = new Date(startDate);
    currentDate.setDate(startDate.getDate() + i);
    const dateString = currentDate.toISOString().split("T")[0] as string;

    // Simuliere realistisches Lernmuster
    const dayOfWeek = currentDate.getDay();
    const isWeekend = dayOfWeek === 0 || dayOfWeek === 6;
    const isSchoolDay = !isWeekend;

    // Weniger Aktivität am Wochenende
    const baseChance = isSchoolDay ? 0.75 : 0.3;
    const shouldHaveActivity = Math.random() < baseChance;

    if (shouldHaveActivity) {
      // Mehr Aktivität an Schultagen (1-15 Aufgaben)
      // Weniger am Wochenende (1-5 Aufgaben)
      const maxCount = isSchoolDay ? 15 : 5;
      const count = Math.floor(Math.random() * maxCount) + 1;

      // Level basierend auf count (0-4)
      let level = 0;
      if (count >= 12) level = 4;
      else if (count >= 8) level = 3;
      else if (count >= 5) level = 2;
      else if (count >= 2) level = 1;

      data.push({
        date: dateString,
        count,
        level,
      });
    } else {
      // Keine Aktivität
      data.push({
        date: dateString,
        count: 0,
        level: 0,
      });
    }
  }

  return data;
};

/**
 * Homepage - Die Hauptseite mit Hero und Features
 * Zusätzlicher Inhalt kann hier hinzugefügt werden
 */
const page = () => {
  const mockData = generateMockData();

  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <FeatureSection />
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-extrabold mb-8 text-center">
            Deine Lernaktivität
          </h2>
          <div className="bg-white border-4 border-black rounded-[15px] shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] p-6">
            <ContributionGraph data={mockData}>
              <ContributionGraphCalendar>
                {({ activity, dayIndex, weekIndex }) => (
                  <ContributionGraphBlock
                    activity={activity}
                    dayIndex={dayIndex}
                    weekIndex={weekIndex}
                  />
                )}
              </ContributionGraphCalendar>
              <ContributionGraphFooter>
                <ContributionGraphTotalCount />
                <ContributionGraphLegend />
              </ContributionGraphFooter>
            </ContributionGraph>
          </div>
        </div>
      </section>
      <Footer />
      {/* Zusätzlicher Inhalt kann hier hinzugefügt werden */}
    </div>
  );
};

export default page;
