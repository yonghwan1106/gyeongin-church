import Hero from "@/components/Hero";
import PartnerLink from "@/components/PartnerLink";
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
      <PartnerLink />
      <MiracleStats />
      <EducationPrograms />
      <OutreachOverview />
      <PastorGreeting />
      <EducationCTA />
      <LocationPreview />
    </>
  );
}
