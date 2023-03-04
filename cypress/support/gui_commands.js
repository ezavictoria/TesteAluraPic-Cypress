Cypress.Commands.add('login', (username, password) => { 
    cy.get('input[formcontrolname="userName"]').type(username);
    cy.get('input[formcontrolname="password"]').type(password, {log: false});
    cy.get('button[type="submit"]').click();
 })