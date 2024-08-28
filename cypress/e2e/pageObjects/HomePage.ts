import 'cypress-xpath';

export default class HomePage {


    elements = {
        searchBox: () => cy.get(".DocSearch-Button-Placeholder"),
        searchInput: () => cy.get("#docsearch-input"),
        firstResult: () => cy.xpath("(//span[normalize-space()='setValue'])[1]"),
        headingSearchResult: (searchResultText: any) => cy.contains(`${searchResultText}`),
        waitForSearchResult: () => cy.contains(`addValue`),

    };

    open() {
        cy.visit(Cypress.config('baseUrl'));
    }

    searchValue(searchText: string) {
        this.elements.searchBox().click();
        this.elements.searchInput().clear().type(searchText);
       
    }

    clickOnFirstResult(){
        this.elements.firstResult().click();
    }

    validateSearchResult(searchResultText:string){
        this.elements.waitForSearchResult().should('be.visible')
        this.elements.headingSearchResult(searchResultText).should('contain',searchResultText)
    }
}
