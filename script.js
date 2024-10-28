document.addEventListener('DOMContentLoaded', function() {
    const colorBox = document.getElementById("color-box")
    const changeColorBtn = document.getElementById("change-color-btn")

    changeColorBtn.addEventListener('click',()=>{
        colorBox.style.backgroundColor = getRandomColor()
    })
    

function getRandomColor() {
    r=Math.floor(Math.random() * 255);
    g=Math.floor(Math.random() * 255);
    b=Math.floor(Math.random() * 255);

    return `rgb(${r},${g},${b})`;
}
});