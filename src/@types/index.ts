export interface TimeAllocation {
  sleep: number;
  work: number;
  mobile: number;
  play: number;
  quran: number;
  prayer: number;
}

export type Category = keyof TimeAllocation;

export interface ValidationResult {
  isValid: boolean;
  message: string;
  type: "warning" | "error" | "success";
}
