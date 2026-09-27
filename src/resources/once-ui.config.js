import { home } from "./content";

// IMPORTANT: Replace with your own domain address - it's used for SEO in meta tags and schema
const baseURL = process.env.NEXT_PUBLIC_BASE_URL || process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000";

const routes = {
  "/": true,
  "/gallery": false,
  "/salud-prevencion-control-peso": true,
  "/nutricion-deporte-online": true,
  "/coaching-nutricional-personalizado": true,
  "/talleres-grupales-nutricion": true,
  "/preguntas-frecuentes": true,
};

const display = {
  location: true,
  time: true,
  themeSwitcher: true
};

// Set password in the .env file, refer to .env.example
const protectedRoutes = {};

// Import and set font for each variant
import { Instrument_Serif } from "next/font/google";
import { Inter } from "next/font/google";

const heading = Instrument_Serif({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});

const body = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

const label = Inter({
  variable: "--font-label",
  subsets: ["latin"],
  display: "swap",
});

const code = Inter({
  variable: "--font-code",
  subsets: ["latin"],
  display: "swap",
});

const fonts = {
  heading: heading,
  body: body,
  label: label,
  code: code,
};

const style = {
  theme: "light", // dark | light | system
  neutral: "sand", // sand | gray | slate | custom
  brand: "emerald", // blue | indigo | violet | magenta | pink | red | orange | yellow | moss | green | emerald | aqua | cyan | custom
  accent: "yellow", // blue | indigo | violet | magenta | pink | red | orange | yellow | moss | green | emerald | aqua | cyan | custom
  solid: "contrast", // color | contrast
  solidStyle: "flat", // flat | plastic
  border: "conservative", // rounded | playful | conservative
  surface: "filled", // filled | translucent
  transition: "all", // all | micro | macro
  scaling: "100", // 90 | 95 | 100 | 105 | 110
};

const dataStyle = {
  variant: "gradient", // flat | gradient | outline
  mode: "categorical", // categorical | divergent | sequential
  height: 24,
  axis: {
    stroke: "var(--neutral-alpha-weak)",
  },
  tick: {
    fill: "var(--neutral-on-background-weak)",
    fontSize: 11,
    line: false
  },
};

const effects = {
  mask: {
    cursor: false,
    x: 50,
    y: 0,
    radius: 100,
  },
  gradient: {
    display: true,
    opacity: 'page-strong',
    x: '50%',
    y: '0%',
    width: '150%',
    height: '80%',
    tilt: '-10deg',
    colorStart: 'brand-background-strong',
    colorEnd: 'static-transparent',
  },
  dots: {
    display: true,
  },
};

const mailchimp = {
  action: "https://url/subscribe/post?parameters",
  effects: {
    mask: {
      cursor: false,
      x: 50,
      y: 0,
      radius: 100,
    },
    gradient: {
      display: true,
      opacity: 'page-strong',
      x: '50%',
      y: '0%',
      width: '150%',
      height: '80%',
      tilt: '-10deg',
      colorStart: 'brand-background-strong',
      colorEnd: 'static-transparent',
    },
    dots: {
      display: true,
    },
  },
};

// default schema data
const schema = {
  logo: "",
  type: "Person",
  name: "Dario Moreno V.",
  description: home.description,
  email: "dario@example.com",
};

// social links
const sameAs = {
  // Add your social media links here
};

export { display, mailchimp, routes, protectedRoutes, baseURL, fonts, style, schema, sameAs, effects, dataStyle };
