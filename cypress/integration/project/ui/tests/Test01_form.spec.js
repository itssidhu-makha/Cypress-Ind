import Form from '../pageobjects/formObjects.spec'

describe('Practise Form Suite',()=>{

    before('Before All tests',()=>{  
        cy.fixture('form').then(($formData)=>{
            cy.visit($formData.url);
        })      
       
    })

    it('Fill Form Data',()=>{
         let Obj = new Form();
         Obj.inputFormData();       
       
    })


})