describe("Handling Multiple Windows switching to child window and then switching to parent window back", () => {
    it("should make switching from parent to child and child to parent window", async () => {
      browser.url("https://www.booking.com/");
      await browser.maximizeWindow();
  
      let parentWindow = await browser.getWindowHandle();
      await browser.pause(5000);
  
      // Make switch to window dynamic
      
      (await $(`//ul[@aria-label="Quick and easy trip planner"]//li[@role="group"][1]`)).waitForClickable();
       await $(`//ul[@aria-label="Quick and easy trip planner"]//li[@role="group"][1]`).scrollIntoView();
       await $(`//ul[@aria-label="Quick and easy trip planner"]//li[@role="group"][1]`).click();
      (await $(`//ul[@aria-label="Quick and easy trip planner"]//li[@role="group"][2]`)).waitForClickable();
       await $(`//ul[@aria-label="Quick and easy trip planner"]//li[@role="group"][2]`).scrollIntoView();
       await $(`//ul[@aria-label="Quick and easy trip planner"]//li[@role="group"][2]`).click();
      (await $(`//ul[@aria-label="Quick and easy trip planner"]//li[@role="group"][3]`)).waitForClickable();
       await $(`//ul[@aria-label="Quick and easy trip planner"]//li[@role="group"][3]`).scrollIntoView();
       await $(`//ul[@aria-label="Quick and easy trip planner"]//li[@role="group"][3]`).click();
      
      
      
      let ID = await browser.getWindowHandles();
      for (let i = 0; i < ID.length; i++) {
        if (ID[i] != parentWindow) {
          await browser.switchToWindow(ID[i]);
          await browser.pause(5000);
          await browser.closeWindow();
        }
      }
      await browser.switchToWindow(parentWindow);
      await browser.pause(5000);
    });
  
    it("New Window", async () => {
      await browser.newWindow("https://www.google.com/");
      await browser.pause(5000);
    });
  });