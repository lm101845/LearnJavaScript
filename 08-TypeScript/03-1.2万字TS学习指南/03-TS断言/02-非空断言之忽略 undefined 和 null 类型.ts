function myFunc(maybeString: string | undefined | null) {
    // Type 'string | null | undefined' is not assignable to type 'string'.
    // Type 'undefined' is not assignable to type 'string'.
    const onlyString: string = maybeString;  //error
    const ignoreUndefinedAndNull: string = maybeString!;   //ok
}
