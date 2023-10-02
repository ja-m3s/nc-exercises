const checkUsernames = require('../katas/check-usernames.js')

describe("checkUsernames",() => {
    //First case
    test("returns false when passed empty array",() => { 
        expect(checkUsernames([])).toBe(false);
    })

    //2nd case - returns true if username is over five chars
    test("returns true when passed username over 5 chars",() => { 
        expect(checkUsernames(['jamiroqui'])).toBe(true);
    })

    //2.5 case - returns false if username is under 5 chars
    test("returns false when passed username under 5 chars",() => { 
        expect(checkUsernames(['jeff'])).toBe(false);
    })

    //3rd case - returns false if username is over 20 chars
    test("returns false when passed username over 20 chars",() => { 
        expect(checkUsernames(['jamiroqui fandabbidosa'])).toBe(false);
    })

    //4th case - multiple usernames
    test("returns false when passed usernames when one is too long",() => { 
            expect(checkUsernames(['jamiroqui fandabbidosa','jeffy'])).toBe(false);
    })

    //5th case - valid usernames (lowercase, numbers, _'s only) 
    test("returns true when passed usernames with valid characters",() => { 
            expect(checkUsernames(['jamiroqui_f0n'])).toBe(true);
    })

    //6th case - invalid usernames (lowercase, numbers, _'s only) 
        test("returns false when passed usernames with invalid  - uppercase",() => { 
            expect(checkUsernames(['JamiroquiolFandabbidosa'])).toBe(false);
    })

    //7th case - invalid usernames (lowercase, numbers, _'s only) 
    test("returns false when passed usernames with invalid  - symbols",() => { 
        expect(checkUsernames(['jamiroquiol--'])).toBe(false);
    })
})
