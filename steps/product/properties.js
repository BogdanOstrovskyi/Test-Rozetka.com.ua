

const Properties = function () {
	  this.open=()=> { 
		  cy.wait(10000)
cy.get('li:nth-of-type(2) >.tabs__link').click()


	}
	this.verify=(product)=>{
	cy.contains(product.title).should('be.visible')
	}
}
module.exports=Properties;