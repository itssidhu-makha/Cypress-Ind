class Form{

    constructor(){
        cy.get('#firstName').as('Name')
        cy.get('#lastName').as('LastName')
        cy.get('#userEmail').as('Email')     
    }

    inputFormData(){
        cy.fixture('form').then(($formData)=>{
            cy.get('@Name').type($formData.firstName)
            cy.get('@LastName').type($formData.lastName)
            cy.get('@Email').type($formData.email) 
        })
    }


}

export default Form