let myFunctions = require('./function')

test("Return Two test", () => {
    expect(myFunctions.returnTwo()).toBe(2)
})

test("Greeting Test", () => {
    expect(myFunctions.greeting('James')).toBe('Hello James.')
})

test("Addition Test", () => {
    expect(myFunctions.add(11, 2)).toBe(13)
})
