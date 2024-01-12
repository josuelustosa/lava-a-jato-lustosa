// constants
import { MENU_lINKS } from "../utils/constants/menu-links";

// components
import Header from "../components/Header";
import Title from "../components/Title";
import Services from "../layouts/Services";

export default function LandingPage() {
  const titleText = `Oferecendo serviços de lavagem e limpeza em automóveis, com qualidade, segurança e 5 estrelas em Manaus!`;

  return (
    <main>
      <Header menuLinks={MENU_lINKS} />
      <Title text={titleText} />
      <Services />
    </main>
  );
}
