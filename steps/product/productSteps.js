
const ProductSteps = function () {
	const Properties = require('./properties.js')
    const properties = new Properties();
	  this.addToBasket=()=> { 
	const addToBasketSelector = '.buy-button__label'
	cy.get(addToBasketSelector).click()


	}
this.verifyProperties=(product)=> {
properties.open()
properties.verify(product)
}

}
module.exports=ProductSteps;