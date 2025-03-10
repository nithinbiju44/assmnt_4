describe("Working with frames", () => {
    it('should find the text "Middle" in the bottom middle frame', async () => {
      await browser.url(
        "https://www.lambdatest.com/selenium-playground/nested-frames/"
      );
      await browser.maximizeWindow();
  
      // Switch to the bottom frame
      const bottomFrame = await $('frame[name="frame-bottom"]');
      await browser.switchFrame(bottomFrame);
  
      // Switch to the middle frame within the bottom frame
      const middleFrame = await $('frame[name="frame-middle"]');
      await browser.switchFrame(middleFrame);
  
      // Find the text "Middle" in the bottom middle frame
      let text = await $("body").getText();
      expect(text).toBe("Middle");
  
      // Switch to default frame
      await browser.switchFrame(null);
  
      const topFrame = await $('frame[name="frame-top"]');
      await browser.switchFrame(topFrame);
  
      // Find the text "Top" in the top frame
      text = await $("body").getText();
      expect(text).toBe("Top");
    });
  
    it("should click a menu item within an iframe", async () => {
      await browser.url("https://practice-automation.com/iframes/");
  
      // Switch to the top iframe
      const topIframe = await $("#iframe-1");
      await browser.switchFrame(topIframe);
      await browser.pause(5000);
  
      // Click 'Docs'
      const docs = await $('//a[text()="Docs"]');
      docs.click();
  
      // Verify title
      const title = await $('h2[id="introduction"]').getText();
      expect(title).toBe("Introduction");
    });
  });