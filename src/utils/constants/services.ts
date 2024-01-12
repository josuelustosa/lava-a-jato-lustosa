import { Services } from "../interfaces";

const imagePath =
  "https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2FyJTIwd2FzaHxlbnwwfHwwfHx8MA%3D%3D";

export const SERVICES: Services[] = [
  {
    id: 1,
    title: "Lavagem Simples",
    imagePath: imagePath,
    description:
      "Lataria, caixa de rodas, limpeza e aspiração interna e aplicação de pinguimento nos pneus.",
    prices: {
      standard: 35,
      app: 25,
    },
  },
  {
    id: 2,
    title: "Lavagem Completa",
    imagePath: imagePath,
    description:
      "Lataria, caixa de rodas, limpeza e aspiração interna e aplicação de pinguimento nos pneus.",
    prices: {
      standard: 45,
      app: 35,
    },
  },
];
