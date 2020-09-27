function swap() {
    let barFoo = document.getElementById("foobar");
    if (barFoo.innerHTML === "Foo bar!") {
        barFoo.innerHTML = "Bar foo!";
    } else {
        barFoo.innerHTML = "Foo bar!";
    }
}
