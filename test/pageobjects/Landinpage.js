class Landingpage{
async LaunchURL(){
    await browser.url('https://demoblaze.com/')
    await browser.maximizeWindow();
    await expect(browser).toHaveTitle('demoblaze')
}
}
export default new Landingpage