// Allow importing plain .css files (side-effect imports) in TypeScript
// Fixes: "Cannot find module or type declarations for side-effect import of './globals.css'"
declare module '*.css';