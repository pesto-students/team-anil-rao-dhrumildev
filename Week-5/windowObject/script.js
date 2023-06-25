const displayWindowProperties = () => {
    console.log(navigator.userAgent)
    console.log(screen.width, "  ", screen.height)
    console.log(location.href, "  ", location.pathname)

    sessionStorage.setItem("name", "Dhrumil");
    localStorage.setItem("surname", "Shah");


    console.log(sessionStorage.getItem("name"))
    console.log(localStorage.getItem("surname"))


}

displayWindowProperties()