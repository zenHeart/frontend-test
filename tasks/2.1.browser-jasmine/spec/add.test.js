describe('class', function() { 
  describe('class.xx', function() { 
    it('两数相dff加返回和',function () {  
      let testData = {
        input:[1,2],
        expect:3
      }
      
     let res =  add.apply(this,testData.input)

      expect(res).toEqual(3);
    })
  
  })

  describe('class.xx', function() { 
    it('两数相加返回和',function () {  
      expect(add(1,2)).toEqual(3);
      expect(add(-1,-3)).toEqual(-4);
      expect(add(1,-4)).toEqual(-3);
    })
  
  })

})