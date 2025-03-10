class addToCart{
    constructor(){
        this.$addtCart=()=>$('//a[@class="btn btn-success btn-lg"]')
        this.$viewCart=()=>$('//a[@class="nav-link" and text()="Cart"]')
        this.$deletecart=()=>$('//a[@href="#" and text()="Delete"]')
    }

    async clickaddtoCart(){
        await this.$addtCart().click();
    }
  async viewcart(){
    await this.$viewCart().click();
  }
  async delecart(){
    await this.$deletecart().click();
  }

}
export default new addToCart();