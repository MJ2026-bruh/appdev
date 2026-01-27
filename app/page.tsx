import Features from "@/components/features-2";
import FooterSection from "@/components/footer";
import HeroSection from "@/components/hero-section";
import IntegrationsSection from "@/components/integrations-4";
import { ShaderAnimation } from "@/components/shader-animation";
import StatsSection from "@/components/stats-4";
import TeamSection from "@/components/team";



export default function Home() {
  return (
    <div>
      <div className="relative flex h-[650px] w-full flex-col items-center justify-center overflow-hidden rounded-xl border bg-blue-700">
      <ShaderAnimation/>
      <span className="absolute pointer-events-none z-10 text-center text-7xl leading-none font-semibold tracking-tighter whitespace-pre-wrap text-white">
        Shader Animation
      </span>
    </div>
     
    <Features></Features>
    <IntegrationsSection />  
    <StatsSection />
    <TeamSection />
    <FooterSection />
    </div>
  
  );
}

