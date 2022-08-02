import {vinylData} from "../../model/factory.js"
const Vinyl = require("../../model/product.js");
let vinyl = new Vinyl(vinylData);
const SearchSteps = require('../../steps/searchSteps')
const search = new SearchSteps();
const ProductSteps = require('../../steps/product/productSteps')
const product = new ProductSteps();
describe('testing Rozetka.com.ua', () => {

    beforeEach( () => {
        cy.visit('https://rozetka.com.ua/ua/')
     })
       it('search for the required product, adding to the basket and product conformity check', () => {
           cy.log('a', vinyl)
           search.perform(vinyl.title)
        
           cy.contains('Universal Music Queen Queen 180 Gram Heavyweight Black Vinyl Halfspeed Mastered LP 0602547202642').click();
           product.verifyProperties(vinyl)
           product.addToBasket()
           cy.get('.counter--green').should('be.visible');
           cy.get('.counter--green').type('{enter}');
           cy.get('.cart-product__title').should('contain', 'Universal Music Queen Queen 180 Gram Heavyweight Black Vinyl Halfspeed Mastered LP 0602547202642');   
           Cypress.on('uncaught:exception', (err, runnable) => {
               // returning false here prevents Cypress from
               // failing the test
               return false
           })
       }) 
  
      }) 