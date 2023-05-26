const { test } = require("@playwright/test");

test("Browser Context-Validating Error login", async ({ page }) => {
  //playwright code

  await page.goto("https://rahulshettyacademy.com/client/");
  //console.log(await page.title());
  const userEmail = page.locator("#userEmail");
  const passWord = page.locator("#userPassword");
  const signIn = page.locator("[value='Login']");
  await userEmail.fill("anshika@gmail.com");
  await passWord.fill("Iamking@000");
  await signIn.click();
  //wait until something is loaded
  await page.waitForLoadState("networkidle"); //comes to idle state wehn all the calls are successfully made

  const allTitles = await page.locator(".card-body b").allTextContents();
  console.log(allTitles);

  //creating containers
});
