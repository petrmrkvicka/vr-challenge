custChangeAttributes = (themeName) => {
    let activeTheme
    allThemes.forEach(theme => {
        theme.name === themeName && (activeTheme = theme)
    })

    sky.setAttribute("animation__color", "property: components.material.material.color; type: color; dir: alternate; dur: " + duration + "; easing: easeInSine; loop: false; to: " + activeTheme.colors.sky)
    // plane.setAttribute("animation__color", "property: components.material.material.color; type: color; dir: alternate; dur: "+ duration +"; easing: easeInSine; loop: false; to: " + activeTheme.colors.plane)
}

flickerLights = () => {
    setInterval(() => {
        let random = Math.random() * 0.25
        document.getElementById("cartLight").setAttribute("light", "type: spot; intensity: " + random + 0.5 + "; distance: 0; decay: 2; angle: 30")
    }, 20)
}






init = () => {

    // set default colors
    custChangeAttributes("default")
    // flicker lights
    flickerLights()

    // change colors after 40 s
    setTimeout(() => {
        custChangeAttributes("horror")
    }, 40000)



    


}

init()


