describe('Alerts Suite',()=>{

    before('Launch Alerts Url',()=>{
        cy.visit('https://demoqa.com/alerts')
    })
    it('Handle Immediate Alert',()=>{
        cy.get('#alertButton').click()
        cy.on('window:alert',(text)=>{
            cy.log(`From immediate alert == ${text}`)
        })
    })

    it('Handle Delayed Alert',()=>{
        cy.get('#timerAlertButton').click()
        cy.wait(5000)
        cy.on('window:alert',(text)=>{
            cy.log(`From Delayed alert == ${text}`)
        })
    })

    it('Handle Prompt - Input some value, click OK',()=>{
        cy.window().then(($win)=>{
            cy.stub($win,'prompt').returns('Stubbed text');
            cy.get('#promtButton').click()
        })
        cy.get('#promptResult').contains('You entered Stubbed text')
    })
})
