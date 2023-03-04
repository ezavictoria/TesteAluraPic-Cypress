describe('Realizar registro no Site AluraPic', () => {
    beforeEach(() => {
        cy.visit('https://alura-fotos.herokuapp.com/#/home')
    });
    it('Verificar mensagens de validação', () => {
        cy.contains('a', 'Register now').click();
        cy.contains('button', 'Register').click();
        cy.contains('ap-vmessage', 'Email is required!').should('be.visible');
        cy.contains('button', 'Register').click();
        cy.contains('ap-vmessage', 'Full name is required!').should('be.visible');
        cy.contains('ap-vmessage', 'User name is required!').should('be.visible');
        cy.contains('ap-vmessage', 'Password is required!').should('be.visible');
    });

    it('Verificar mensagem de e-mail inválido', () => {
        cy.contains('a', 'Register now').click();
        cy.get('input[formcontrolname="email"]').type('eza');
        cy.contains('button', 'Register').click();
        cy.contains('ap-vmessage', 'Invalid e-mail').should('be.visible');   
    });

    it('Verificar mensagem de nome com menos de 2 caracteres', () => {
        cy.contains('a', 'Register now').click();
        cy.get('input[formcontrolname="fullName"]').type('e');
        cy.contains('button', 'Register').click();
        cy.contains('ap-vmessage', 'Mininum length is 2').should('be.visible');   
    });

    it('Verificar mensagem de username com menos de 2 caracteres', () => {
        cy.contains('a', 'Register now').click();
        cy.get('input[formcontrolname="userName"]').type('e');
        cy.contains('button', 'Register').click();
        cy.contains('ap-vmessage', 'Mininum length is 2').should('be.visible');   
    });

    it('Verificar mensagem de senha com menos de 8 caracteres', () => {
        cy.contains('a', 'Register now').click();
        cy.get('input[formcontrolname="password"]').type('e');
        cy.contains('button', 'Register').click();
        cy.contains('ap-vmessage', 'Mininum length is 8').should('be.visible');   
    });

    it('Verificar mensagem de username e senha diferentes', () => {
        cy.contains('a', 'Register now').click();
        cy.get('input[formcontrolname="userName"]').type('e');
        cy.get('input[formcontrolname="password"]').type('e');
        cy.contains('button', 'Register').click();
        cy.contains('button', 'Register').click();
        cy.contains('ap-vmessage', 'Username and password must be different').should('be.visible');   
    });
    
    const usuarios = require('../fixtures/usuarios.json');
    usuarios.forEach(usuario =>{
        it(`Registro com dados válidos  ${usuario.userName}`, () => {
            cy.contains('a', 'Register now').click();
            cy.get('input[formcontrolname="email"]').type(usuario.email);
            cy.get('input[formcontrolname="fullName"]').type(usuario.fullName);
            cy.get('input[formcontrolname="userName"]').type(usuario.userName);
            cy.get('input[formcontrolname="password"]').type(usuario.password);
            cy.contains('button', 'Register').click(); 
        });
    })
    

});