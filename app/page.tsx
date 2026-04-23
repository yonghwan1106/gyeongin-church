import Hero from "@/components/Hero";
import MiracleStats from "@/components/MiracleStats";
import EducationPrograms from "@/components/EducationPrograms";
import OutreachOverview from "@/components/OutreachOverview";
import PastorGreeting from "@/components/PastorGreeting";
import EducationCTA from "@/components/EducationCTA";
import LocationPreview from "@/components/LocationPreview";

export default function Home() {
  return (
    <>
      <Hero />
      <MiracleStats />
      <EducationPrograms />
      <OutreachOverview />
      <PastorGreeting />
      <EducationCTA />
      <LocationPreview />
    </>
  );
}
