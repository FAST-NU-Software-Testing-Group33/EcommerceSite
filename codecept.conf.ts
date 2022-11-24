import {
  setHeadlessWhen,
  setCommonPlugins
} from '@codeceptjs/configure';
// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

export const config: CodeceptJS.MainConfig = {
  tests: 'tests/*_test.ts',
  output: 'tests/output',
  helpers: {
    Playwright: {
      url: 'http://localhost:3000',
      show: true,
      browser: 'chromium'
    },
    REST: {
      endpoint: 'http://localhost:8000/api'
    },
    JSONResponse: {}
  },
  include: {
    "homePage": "./tests/pages/home.ts"
  },
  name: 'MERN_Stack_Project_Ecommerce_Hayroo-master'
}