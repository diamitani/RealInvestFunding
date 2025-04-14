export type ChatStep = "intro" | "dealType" | "options" | "leadCapture" | "valueAdd" | "complete";

export interface ChatOption {
  label: string;
  value: string;
  primary: boolean;
}

export interface Message {
  text: string;
  isUser: boolean;
  options?: ChatOption[];
}

export interface LeadFormData {
  fullName: string;
  email: string;
  phone: string;
  investmentType: string;
  propertyAddress?: string;
  loanAmount?: string;
  message?: string;
}
