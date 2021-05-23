export interface person {
  name?: string;
  age?: number;
  gender?: string;
  interests?: string[];
  id: number;
}

export interface pc {
  id: number;
  isLaptop: Boolean;
  ram?: number;
  brand?: string;
  motherboard?: string;
  storage?: string[];
  ports?: string[];
  release?: Date;
}
