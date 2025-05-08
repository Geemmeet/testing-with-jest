const stack = require('../src/stack');

test('peek on empty stack returns undefined', () => {
    expect(stack.peek()).toBeUndefined();
});

test('peek on stack with one element returns that element', () => {
    stack.push(1);
    expect(stack.peek()).toBeDefined();
    expect(stack.peek()).toBe(1);
});

test('peek on stack with two or more elements returns the top element', () => {
    stack.push(1);
    stack.push("wow");
    stack.push(42);
    expect(stack.peek()).toBeDefined();
    expect(stack.peek()).toBe(42);
});

//Eget test
test('pop a stack four times with three elements where the value of each pop is returned and the last element is undefined', () => {
    stack.empty();
    stack.push(15)
    stack.push("ostkaka")
    stack.push("")
    expect(stack.pop()).toBe("");
    expect(stack.pop()).toBe("ostkaka");
    expect(stack.pop()).toBe(15);
    expect(stack.pop()).toBeUndefined();
});