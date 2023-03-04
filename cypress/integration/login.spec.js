describe('Realizar login no AluraPic', () => {
    beforeEach(() => {
        cy.visit('https://alura-fotos.herokuapp.com/#/home')
    });

    it('Fazer login com usuário válido', () => {
        cy.login(Cypress.env('userName'),Cypress.env('password'));
        cy.contains('a', '(Logout)').should('be.visible');
    });

    it('Fazer login com usuário inválido', () => {
        cy.login('ezateste','eza123');
        cy.on('window:alert', (str) => {
            expect(str).to.equal('Invalid user name or password')
        })
    });

});