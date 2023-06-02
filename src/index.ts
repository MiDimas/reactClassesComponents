function hello () {
    const element = document.createElement('div');
    element.innerText = "Hello World";

    return element;
}
document.getElementById('root').append(hello());