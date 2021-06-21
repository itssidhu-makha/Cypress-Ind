it('architecture video',()=>{
    cy.visit('https://demoqa.com/automation-practice-form')   
    
})

//robust retry-and-timeout logic
//When you want to skip the retry-and-timeout functionality entirely and perform traditional synchronous work, use Cypress.$.
//Cypress commands do not return their subjects, they yield them.
//Avoid loops
//Each Cypress command (and chain of commands) returns immediately, having only been appended to a queue of commands to be executed at a later time
//Commands Are Not Promises
//You cannot add a .catch error handler to a failed command
//Assertion
//Timeouts