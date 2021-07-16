export interface Person {
  name?: string;
  age?: number;
  gender?: string;
  interests?: string[];
  id: number;
}

export interface Pc {
  id: number;
  isLaptop: Boolean;
  ram?: number[];
  cpu?: string;
  brand?: string;
  motherboard?: string;
  storage?: string[];
  ports?: string[];
  release?: Date;
}

export interface Program {
  storageNeededMB?: number;
  name?: string;
  creators?: string[];
  version?: number[] // e.g. ["1", "0", "0"]
}