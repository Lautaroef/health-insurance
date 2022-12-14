import urlFirstShield from "./../images/first-shield.svg";
import urlSecondShield from "./../images/second-shield.svg";

export interface Plan {
  name: string;
  text: string;
  maxCovered: string;
  price: number;
  urlShield: string;
  isLocalCountry: boolean;
  isThirtyClinics: boolean;
  hasHomeDoctor: boolean;
  hasPreventiveCheck: boolean;
  hasNationalRefund: boolean;
  hasInternationalRefund: boolean;
}

const PLANS: Plan[] = [
  {
    name: "basic",
    text: "BÁSICO",
    price: 160,
    maxCovered: "S/ 1MM",
    isLocalCountry: true,
    urlShield: urlFirstShield,
    isThirtyClinics: true,
    hasHomeDoctor: false,
    hasPreventiveCheck: false,
    hasNationalRefund: false,
    hasInternationalRefund: false,
  },
  {
    name: "advanced",
    text: "AVANZADO",
    price: 200,
    maxCovered: "S/ 2MM",
    isLocalCountry: true,
    urlShield: urlSecondShield,
    isThirtyClinics: true,
    hasHomeDoctor: true,
    hasPreventiveCheck: false,
    hasNationalRefund: false,
    hasInternationalRefund: false,
  },
  {
    name: "premium",
    text: "PREMIUM",
    price: 250,
    maxCovered: "S/ 3MM",
    isLocalCountry: true,
    urlShield: urlSecondShield,
    isThirtyClinics: true,
    hasHomeDoctor: true,
    hasPreventiveCheck: true,
    hasNationalRefund: true,
    hasInternationalRefund: false,
  },
  {
    name: "full",
    text: "FULL",
    price: 500,
    maxCovered: "S/ 4MM",
    isLocalCountry: true,
    urlShield: urlSecondShield,
    isThirtyClinics: true,
    hasHomeDoctor: true,
    hasPreventiveCheck: true,
    hasNationalRefund: true,
    hasInternationalRefund: true,
  },
];

export { PLANS };
