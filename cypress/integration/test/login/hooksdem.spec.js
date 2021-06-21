describe('New suite',()=>{
        
    before('open a url',()=>{
        console.log('this is my before all tests-New Suite')
    })

    beforeEach('read data',()=>{
        console.log('before each test-New Suite')
    })

    it('first test',()=>{
        console.log('first test-New Suite')
    })

    it('second test',()=>{
        console.log('second test-New Suite')
    })

})
