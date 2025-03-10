class demoQa{
    constructor(){
        this.$elements=()=>$('//div[@class="card-body"]//h5[text()="Elements"]')
        this.$webtables=()=>$('//span[text()="Web Tables"]')
        this.$addbutton=()=>$('//button[@id="addNewRecordButton"]')
        this.$submitbutton=()=>$('//button[@id="submit"]')
        }

        async launchUrl(){
            await browser.url('https://demoqa.com/')
            await browser.maximizeWindow();
        }

        async clickElements(){
            await this.$elements().scrollIntoView({block:'center'})
            await this.$elements().click();
            
        }

        async clickWebtables(){
            await this.$webtables().scrollIntoView({block:'center'})
            await this.$webtables().click();
        }
        async clickonAdd(){
            await this.$addbutton().scrollIntoView({block:'center'})
            await this.$addbutton().click();
        }
        async enteruserDetails(){
            await $('//input[@id="firstName"]').setValue('Nithin');
            await $('//input[@id="lastName"]').setValue('Biju');
            await $('//input[@id="userEmail"]').setValue('abc@gmail.com');
            await $('//input[@id="age"]').setValue(24);
            await $('//input[@id="salary"]').setValue(25000);
            await $('//input[@id="department"]').setValue('QA');
            await this.$submitbutton().click();
        }
}
export default new demoQa();
