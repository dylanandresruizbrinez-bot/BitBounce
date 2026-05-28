let energy = 10;

setInterval(() => {

    if(energy < 10){
        energy++;
    }

    document.querySelector(".energy-text")
    .innerText = `${energy} / 10`;

}, 2000);
