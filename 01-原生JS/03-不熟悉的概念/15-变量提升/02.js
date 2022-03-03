function hoistFunction() {
    foo();
    function foo() {
        console.log('running...')
    }
}
hoistFunction(); // running... 

