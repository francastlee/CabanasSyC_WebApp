function changeBackground(image){
    const background = document.getElementById('background');
    srcSave = background.src;
    background.src= image.src;
    image.src = srcSave;
}