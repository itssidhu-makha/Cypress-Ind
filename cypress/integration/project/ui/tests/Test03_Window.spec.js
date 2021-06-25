describe('Window Handles',()=>{

    before('visit url',()=>{
        cy.visit('https://demoqa.com/browser-windows')
    })

    it('Switch to new window',()=>{
        cy.window().then(win=>{
            cy.stub(win,'open')
        })
        cy.get('#windowButton').click()
        cy.window().then(win=>{
            win.location.href='https://demoqa.com/sample';
            cy.get('#sampleHeading').invoke('text').then(text=>{
                cy.log(`Text from new window is ${text}`)
            })
        })
    })
})