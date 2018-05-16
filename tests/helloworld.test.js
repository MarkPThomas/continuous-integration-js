HelloWorldTest = TestCase("HelloWorldTest");

HelloWorldTest.prototype.testHello = function(){
    let result = sample.hello("Maarten");
    assertEquals(result, "Hello, Maarten");
};

HelloWorldTest.prototype.testGoodbye = function(){
    let result = sample.goodbye("Maarten");
    assertEquals(result, "Goodbye, Maarten");
};