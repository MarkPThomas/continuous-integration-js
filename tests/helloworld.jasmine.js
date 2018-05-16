describe("Hello", function(){
    it("says hello, name", function(){
        expect(sample.hello("Maarten"))
            .toEqual("Hello, Maarten");
    });
});