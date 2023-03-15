function greet(name: string | null | undefined) {
    if (name)
        console.log(name.toUpperCase());
    else
        console.log('Hola!');
}

greet(null); //disable in config if need to work with nulls (not advisable)
greet(undefined)