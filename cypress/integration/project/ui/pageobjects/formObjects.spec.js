class Form{

    constructor(){
        cy.get('#firstName').as('Name')
        cy.get('#lastName').as('LastName')
        cy.get('#userEmail').as('Email')  
        cy.get('#userNumber').as('Mobile')
        cy.get('#dateOfBirthInput').as('dob') 
        cy.get('.subjects-auto-complete__value-container').as('subject')  
        cy.get('#uploadPicture').as('uploadPic')   
        cy.get('#currentAddress').as('address') 
        cy.get('#react-select-3-input').as('state')
        cy.get('#react-select-4-input').as('city')
        cy.get('#submit').as('submit')
    }

    inputFormData(){
        cy.fixture('form').then(($formData)=>{
            cy.get('@Name').type($formData.firstName)
            cy.get('@LastName').type($formData.lastName)
            cy.get('@Email').type($formData.email) 
            cy.get(`input[name="gender"][value=${$formData.gender}]`).click({force:true})
            cy.get('@Mobile').type($formData.Mobile)
            this.enterDOB($formData.DOB)  
            this.enterSubject($formData.Subjects)
            this.enterHobbies($formData.Hobbies)
            cy.get('@uploadPic').attachFile($formData.filePath)
            cy.get('@address').type($formData.CurrentAddress)
            cy.get('@state').type($formData.State+'{enter}',{force:true})
            cy.get('@city').should('be.enabled').type($formData.City+'{enter}',{force:true})
            cy.get('@submit').click();     
        })
    }

    enterHobbies(hobbies){
        for(let hobby of hobbies){
            cy.contains('label',hobby.trim()).prev().click({force:true})
        }
    }

    enterSubject(subjects){
        for(let subject of subjects){
            cy.get('@subject').type(subject+'{enter}')
        }
    }

  
    enterDOB(dob){
        let month = dob.split(' ')[1]
        let year = dob.split(' ')[2]
        let date = dob.split(' ')[0]
        cy.get('@dob').click();
        cy.get('.react-datepicker__month-select').select(month)
        cy.get('.react-datepicker__year-select').select(year)
        cy.xpath(`//div[text()='${date}']`).eq(0).click();
    }

    


}

export default Form