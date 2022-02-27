(() => {
    type NumGenerator = () => number;
    function myFunc(numGenerator: NumGenerator | undefined) {
        // Object is possibly 'undefined'.(2532)
        // Cannot invoke an object which is possibly 'undefined'.(2722)
        const num1 = numGenerator();    //error
        const num2 = numGenerator!();
    };
})();
