
// :(

this.foo = 42;
this.bar = seeminglyComplexCalculation(this.foo);

// :)

this.foo = 42;

this.seeminglyComplexCalculation = function () {
    return compute(... this.foo ...);
};
