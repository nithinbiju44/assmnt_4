class homePage{
    constructor(){
        this.$clickonLaptop=()=>$('//a[text()="Laptops"]')
        this.$selectedlaptop=()=>$('//a[@href="prod.html?idp_=8"]')
        this.$viewlaptoptitle=()=>$('//h2[text()="Sony vaio i5"]')
    }
    async selectLaptop(){
        await this.$clickonLaptop().click();
    }
    async clickLaptop(){
        await this.$selectedlaptop().click();
        
    }
}
export default new homePage();