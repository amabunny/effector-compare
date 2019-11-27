/// <reference types="react-scripts" />

declare module '*.module.css' {
  const classes: { [key: string]: string }
  export = classes
}

declare module '*.module.less' {
  const classes: { [key: string]: string }
  export = classes
}

declare module 'get-user-locale' {
  export function getUserLocale(): string;
  export function getUserLocales(): string[];
  export default getUserLocale;
}
