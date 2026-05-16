import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import HomeExperience from "@/components/sections/HomeExperience";
import { contactDetails, navigation, panels, partners, products } from "@/data/siteContent";

export default function HomePage() {
  return (
    <>
      <SiteHeader navigation={navigation} />
      <HomeExperience panels={panels} partners={partners} products={products} />
      <SiteFooter contact={contactDetails} navigation={navigation} />
    </>
  );
}
