$(() => {
    $("body").prepend('<div id="nav-bar"></div>').append("<footer></footer>")
    $("#nav-bar").load("./menu/nav.html")
    $("footer").load("./menu/footer.html")
})