describe('first suite',()=>{
        
    before('open a url',()=>{
        console.log('this is my before all tests')
    })

    beforeEach('read data',()=>{
        console.log('before each test')
    })

    it('first test',()=>{
        console.log('first test')
    })

    it('second test',()=>{
        console.log('second test')
    })

})
