// MENU NAV ------------------------------------
export interface MenuLink {
  title: string;
  url: string;
}


// SERVICES ------------------------------------
export interface Services {
  id: number;
  title: string;
  imagePath: any;
  description: string;
  prices: ServicesPrices;
}

export interface ServicesPrices {
  standard: number;
  app: number;
}
