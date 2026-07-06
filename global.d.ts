// Allow importing CSS (and some other static assets) in TypeScript files
// This file is matched by tsconfig.json include ("**/*.d.ts")

declare module '*.css';
declare module '*.scss';
declare module '*.sass';
declare module '*.less';

declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.gif';

declare module '*.svg' {
  const content: string;
  export default content;
}