import { Services } from "@/src/utils/interfaces";

interface cardProps {
  services: Services[];
}

export default function Card({ services }: cardProps) {
  return services.map((service: any) => (
    <div
      className="max-w-sm bg-dark-blue bg-cover border-gray shadow h-60 w-400 max-w-400 flex items-center justify-center"
      key={service.id}
    >
      <img
        className="opacity-25 h-60 w-380 bg-cover absolute"
        src={service.imagePath}
        alt={service.title}
      />
      <div className="p-4 relative text-center">
        <h3 className="text-white text-2xl">{service.title}</h3>
        <a href="#" className="text-white">
          Saiba +
        </a>
      </div>
    </div>
  ));
}
