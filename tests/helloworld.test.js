HelloWorldTest = TestCase("HelloWorldTest");

HelloWorldTest.prototype.testHello = function(){
    let result = sample.hello("Maarten");
    assertEquals(result, "Hello, Maarten");
};