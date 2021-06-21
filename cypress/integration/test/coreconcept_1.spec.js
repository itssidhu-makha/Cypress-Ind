describe('Core concept suite',()=>{

before('initialise data',()=>{
    
    cy.visit('https://demoqa.com/automation-practice-form')   
    
   cy.on('uncaught:exception',()=>{
       return false
   })
})

beforeEach('initialise test data',()=>{
    cy.get('#lastName').as('MyLastName')
    cy.get('#firstName').as('firstname',{timeout:3000})
    
})

it('test one',()=>{
       
    cy.get('@firstname').type('first name').then(($ele)=>{
        cy.wrap($ele).clear().type('new value')
        expect($ele).to.be.visible        
    })     
})

it('test2',()=>{
    cy.get('@MyLastName').type('Last name').should('be.visible').and('have.length','1')
    cy.get('@MyLastName').invoke('attr','class').then((height)=>{
        cy.log(height)
    })
    
    cy.get('@MyLastName').its('length').then((length)=>{
        cy.log(length)
    })
     


    //BDD = explicit = expect and implicit = should
    //TDD = assert               
    // function sum(a,b,c){
    //     return a+b+c;
    // }
    //invoke
    //sum.invoke()
    //cy.wrap({sum}).invoke('sum',2,4,6).should('be.lt',20).should('be.gt',10)



})

})
