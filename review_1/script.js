const btn = document.getElementById("rbc");

btn.addEventListener('click', function(){
    let red = Math.floor(Math.random()*256);
    let green = Math.floor(Math.random()*256);
    let blue = Math.floor(Math.random()*256);

    let body_color = document.body;
    body_color.style.backgroundColor = `rgb(${red},${green},${blue}`;
})