// Next declares `*.module.css` but not plain `*.css`, so a global stylesheet
// imported for its side effects has no type. Some TS versions error on that
// ("Cannot find module or type declarations for side-effect import").
declare module '*.css'
