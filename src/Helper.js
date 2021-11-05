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