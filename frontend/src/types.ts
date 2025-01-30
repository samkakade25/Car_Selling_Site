export interface Car {
  id: number;
  name: string;
  image: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}
