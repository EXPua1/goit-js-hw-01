function getElementWidth(content, padding, border) {
    let contentWidth = parseFloat(content);
    let paddingWidth = parseFloat(padding);
    let borderWidth = parseFloat(border);
   
    let totalWidth = contentWidth + (paddingWidth * 2) + (borderWidth * 2)
    return totalWidth;
}