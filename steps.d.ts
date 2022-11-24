/// <reference types='codeceptjs' />
type homePage = typeof import('./tests/pages/home');

declare namespace CodeceptJS {
  interface SupportObject { I: I, current: any }
  interface SupportObject { I: I, homePage: homePage }
  interface Methods extends Playwright, REST, JSONResponse {}
  interface I extends WithTranslation<Methods> {}
  namespace Translation {
    interface Actions {}
  }
}
