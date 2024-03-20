export interface DevInterface {
  id: number;
  name: string;
  email: string;
  technologies: string;
}

export interface DevelopersInterface {
  developers: DevInterface[]
}
