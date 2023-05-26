const { test, expect } = require("@playwright/test");

test.only("Browser Context Playwright Test", async ({ browser }) => {
  //playwright code:

  //open new instance of a browser
  const context = await browser.newContext();
  //open a new page when browser opens
  const page = await context.newPage();

  //create locator and store in variable
  const userName = page.locator("#username");
  const passWord = page.locator("#password");
  const cardTitles = page.locator(".card-body a");

  //go to preferred webPage
  await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
  console.log(await page.title());
  /*CSS */
  await page.locator("#username").type("rahulshetty");
  await page.locator("[type='password']").type("learning");
  await page.locator("[type='submit']").click();
  console.log(await page.locator("[style*='block']").textContent());
  await expect(await page.locator("[style*='block']")).toContainText(
    "Incorrect"
  );

  //erase exiting content in edit box using 'fill'
  await userName.fill("");
  await userName.type("rahulshettyacademy");
  await Promise.all([
    page.waitForNavigation(),
    page.locator("[type='submit']").click()
  ]);
  // console.log(await page.locator(".card-body a").nth(0).textContent());
  // console.log(await page.locator(".card-body a").first().textContent());
  const alltitles = await cardTitles.allTextContents();
  console.log(alltitles)
});

// anonymous functions {'async ()=> {}'}
//use {browser} instruction(fixture) to inject plugins/ cookies
//Use "test.only" to run only one test among all other tests in your file
//to identify edit boxes , use css selectors or xpath
//service based app (it means  there are api calls in the app) ; use waitForLoadState("networkidle")


test("Page Playwright Test", async ({ page }) => {
  //playwright code:

  //go to preferred webPage
  await page.goto("https://www.youtube.com/");
  //get page title -- assertion
  console.log(await page.title());
  await expect(page).toHaveTitle("YouTube");
});
