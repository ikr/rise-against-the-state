     ________________________
    < Rise against the state >
     ------------------------
            \   ^__^
             \  (oo)\_______
                (__)\  λ    )\/\
                    ||----w |
                    ||     ||

    @ikr - Ivan Krechetov

Problem: Software crisis

- Complexity
    - Essential? (Brooks)
    - Accidental! (Moseley, Marks)

- Main reason: state management


Place-oriented programming

- Heritage of 70's; now irrelevant
- Not how the real world works
    - Facts, not fact placeholders


Solution: functional programming

- Places: bad; values: good
- Referential transparency

Start small...

***

    // :(

    return $.extend(o, {foo: "bar"});

    // :)

    return $.extend({}, o, {foo: "bar"});

***

    // :(

    someDate.add(2, "months");
    return someDate;

    // :)

    return someDate.aNewDateIn(2, "months");

***


    // :(

    function pluck(objArray, propertyName) {
        var result = [];

        for (i = 0; i < objArray.length; i++) {
            result.push(objArray[i][propertyName]);
        }

        return result;
    }

    // :)

    function pluck(objArray, propertyName) {
        return objArray.map(function (obj) {
            return obj[propertName];
        });
    }

***

    // :(

    this.foo = 42;
    this.bar = seeminglyComplexCalculation(this.foo);

    // :)

    this.foo = 42;

    this.seeminglyComplexCalculation = function () {
        return compute(... this.foo ...);
    };

...read/watch up

* [Fred Brooks - Mythical man-month](http://www.amazon.com/The-Mythical-Man-Month-Engineering-ebook/dp/B000OZ0N6M)

* [Out of the tar pit](http://shaffner.us/cs/papers/tarpit.pdf)

* [On state](http://clojure.org/state)

* [Value of values](http://www.infoq.com/presentations/Value-Values)

* [Simple made easy](http://www.infoq.com/presentations/Simple-Made-Easy)

The video of the talk

[http://www.ustream.tv/recorded/25240687](http://www.ustream.tv/recorded/25240687)
