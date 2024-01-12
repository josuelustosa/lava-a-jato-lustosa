import { SERVICES } from "@/src/utils/constants/services";

import Subtitle from "@/src/components/Subtitle";
import Card from "@/src/components/Card";

export default function Services() {
  return (
    <section>
      <Subtitle text="Conheça nossos serviços e especialidades" />

      <div className="container flex items-center mx-auto gap-3">
        <Card services={SERVICES} />
      </div>
    </section>
  );
}
