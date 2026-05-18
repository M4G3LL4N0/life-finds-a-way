import { HomeMain } from "@/components/marketing/home-page";
import { TrustStrip } from "@/components/TrustStrip";
import { MarketingGraphicsStack } from "@/components/MarketingGraphicsStack";
import { ProcessFlowSection } from "@/components/ProcessFlowSection";
import { MarketingLayout } from "@/components/marketing/marketing-layout";

export default function Page() {
  return (
        <div className="mx-auto max-w-6xl px-4 py-4 sm:px-6">
          <TrustStrip />
        </div>
        <MarketingGraphicsStack />
    <MarketingLayout>
      <HomeMain />
    </MarketingLayout>
  );
}
