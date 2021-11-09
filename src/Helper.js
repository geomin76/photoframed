export const PaintingType = () => {
    const types = [
        "Oil on canvas",
        "Watercolor on canvas",
        "Acrylic on canvas",
        "Pastel on paper",
        "Pastel on canvas",
        "Watercolor on wood",
        "Digital painting",
        "Gouache on paper"
    ]
    
    return types[Math.floor(Math.random() * types.length)]
}

export const Source = () => {
    const titles = [
        "Collection of ",
        "Gift of ",
        "Acquired through "
    ]

    const title = titles[Math.floor(Math.random() * titles.length)]

    return title + randomName() + ", " + randomIntFromInterval(1970, 2021).toString();
}


function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
}

const randomName = () => {
    const name = [
        "Levi Ackerman",
        "Izuku Midoriya",
        "Kakashi Hatake",
        "Gon Freecss",
        "Troy Bolton",
        "Captain Jack Sparrow",
        "Bruce Wayne",
        "Darth Vader",
        "Indiana Jones",
        "Tony Stark",
        "HAL 9000",
        "Edna Mode",
        "Optimus Prime",
        "The Minions",
        "Wallace & Gromit",
        "Harry Potter",
        "Bilbo Baggins",
        "Ace Ventura",
        "Vito Corleone",
        "Luke Skywalker",
        "Keyser Söze"
    ]

    return name[Math.floor(Math.random() * name.length)]
}