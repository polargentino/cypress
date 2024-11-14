describe('Algunos métodos', { testIsolation: false }, () => {

  it('Visitar la página y verificar el título de la página y la primera imagen', () => {
    cy.visit('https://automationintesting.online/');
    cy.title().should('eq', 'Restful-booker-platform demo');
    cy.get('img[src="/images/rbp-logo.jpg"]').should('be.visible');
    cy.get('img[src="/images/room2.jpg"]').should('be.visible');
  });

  it('Verifica que el párrafo de descripción del hotel esté presente y correcto', () => {
    cy.get('.row.hotel-description').within(() => {
      cy.get('.col-sm-10 > p').contains(
        'Welcome to Shady Meadows, a delightful Bed & Breakfast nestled in the hills on Newingtonfordburyshire. A place so beautiful you will never want to leave. All our rooms have comfortable beds and we provide breakfast from the locally sourced supermarket. It is a delightful place.'
      ).should('be.visible');
    });
  });

  it('Verifica que la información del hotel esté presente y correcta', () => {
    // Selecciona el contenedor que contiene los párrafos de información
    cy.get('.contact > :nth-child(3)').within(() => {
      // Verifica que el nombre del hotel esté presente y visible
      cy.get('p').eq(0).contains('Shady Meadows B&B').should('be.visible');
      
      // Verifica la dirección del hotel
      cy.get('p').eq(1).contains('The Old Farmhouse, Shady Street, Newfordburyshire, NE1 410S').should('be.visible');
      
      // Verifica el número de teléfono con el ícono correspondiente
      cy.get('p').eq(2).contains('012345678901').should('be.visible');
      cy.get('p').eq(2).find('.fa-phone').should('exist');
      
      // Verifica el correo electrónico con el ícono correspondiente
      cy.get('p').eq(3).contains('fake@fakeemail.com').should('be.visible');
      cy.get('p').eq(3).find('.fa-envelope').should('exist');
    });
  });

  it('Verifica que el formulario de contacto esté presente y funcional', () => {
    // Limita la búsqueda al contenedor específico si es necesario
    cy.get('.contact > :nth-child(2)').within(() => {
      
      // Verifica que el campo "Name" esté presente, visible y permite ingresar texto
      cy.get('[data-testid="ContactName"]').should('be.visible')
        .and('have.attr', 'placeholder', 'Name')
        .type('John Doe')
        .should('have.value', 'John Doe');

      // Verifica que el campo "Email" esté presente, visible y permite ingresar texto
      cy.get('[data-testid="ContactEmail"]').should('be.visible')
        .and('have.attr', 'placeholder', 'Email')
        .type('john.doe@example.com')
        .should('have.value', 'john.doe@example.com');

      // Verifica que el campo "Phone" esté presente, visible y permite ingresar texto
      cy.get('[data-testid="ContactPhone"]').should('be.visible')
        .and('have.attr', 'placeholder', 'Phone')
        .type('1234567890')
        .should('have.value', '1234567890');

      // Verifica que el campo "Subject" esté presente, visible y permite ingresar texto
      cy.get('[data-testid="ContactSubject"]').should('be.visible')
        .and('have.attr', 'placeholder', 'Subject')
        .type('Testing Contact Form')
        .should('have.value', 'Testing Contact Form');

      // Verifica que el campo "Message" esté presente, visible y permite ingresar texto
      cy.get('[data-testid="ContactDescription"]').should('be.visible')
        .type('This is a test message for the contact form.')
        .should('have.value', 'This is a test message for the contact form.');

      // Verifica el botón "Submit" y haz clic para enviar el formulario
      cy.get('#submitContact').should('be.visible')
        .and('contain', 'Submit')
        .click();

      
    });
  });
});



  
