describe("pow", function() {

<<<<<<< HEAD
    it("2 raised to power 3 is 8", function() {
      assert.equal(pow(2, 3), 8);
    });
  
    it("3 raised to power 4 is 81", function() {
      assert.equal(pow(3, 4), 81);
    });
  
=======
    // it("주어진 숫자의 n 제곱", function() {
    //   assert.equal(pow(2, 3), 8);
    //   assert.equal(pow(3, 4), 81);
    // });
    
    // it("2를 세 번 곱하면 8입니다.", function() {
    //     assert.equal(pow(2, 3), 8);
    // });

    // it("3을 네 번 곱하면 81입니다.", function() {
    // assert.equal(pow(3, 4), 81);
    // });

    function makeTest(x) {
        let expected = x * x * x;
        it(`${x}을/를 세 번 곱하면 ${expected}입니다.`, function() {
          assert.equal(pow(x, 3), expected);
        });
      }
    
      for (let x = 1; x <= 5; x++) {
        makeTest(x);
      }
    

>>>>>>> d118425b597c7485cfbeddf98a0d68da254cae7f
  });