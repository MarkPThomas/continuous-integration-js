describe("Hello", function(){
    it("says hello, name", function(){
        expect(sample.hello("Maarten"))
            .toEqual("Hello, Maarten");
    });
});

describe("Goodbye", function(){
    it("says goodbye, name", function(){
        expect(sample.goodbye("Maarten"))
            .toEqual("Goodbye, Maarten");
    });
});