setInterval(animacao,1000);

function animacao(){
    let data = new Date();

    const segDiv = document.getElementById('seg');
    let seg = data.getSeconds()/60;
    segDiv.style.transform = "rotate("+(seg*360) + "deg)";

    const minDiv = document.getElementById('min');
    let min = (data.getMinutes() +seg)/60;
    minDiv.style.transform = "rotate("+(min*360)+"deg)";

    const horaDiv = document.getElementById('hora');
    let hora = (data.getHours()+min)/12;
    horaDiv.style.transform = "rotate("+ (hora * 360)+"deg)";
}

animacao();