/// <reference types="@applitools/eyes-cypress" />
/// <reference types="cypress" />
describe('Oriahnn HCP', () => {
    beforeEach(() => {
        cy.eyesOpen({
            ignoreDisplacements: true,
            appName: 'Test',
            batchName: 'Test',
            browser: [
                { width: 1600, height: 900, name: 'chrome' }
            ]
        });
    });
    afterEach(() => {
        cy.eyesClose();
    });
    const url = 'https://www.libtayohcp.com/';

    it('Oriahnn HCP', function () {
        cy.visit(url);           
        cy.eyesCheckWindow('Home page');
              
    })
})
