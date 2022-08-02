

const SearchSteps = function () {
    const searchField = '.search-form__input'
    const searchButton = '.search-form__submit'
    this.perform = (searchQuery) => {
        cy.get(searchField).type(searchQuery);
        cy.get(searchButton).type('{enter}');

    }
  
}
module.exports = SearchSteps;
