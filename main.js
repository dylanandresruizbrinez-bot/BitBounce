```javascript
let elixir = 5;
let maxElixir = 10;

const elixirFill = document.getElementById("elixirFill");

function updateElixir(){
    const percent = (elixir / maxElixir) * 100;
    elixirFill.style.width = percent + "%";
}

function regenerateElixir(){
    setInterval(() => {
        if(elixir < maxElixir){
            elixir += 0.1;
            elixir = Math.min(elixir, maxElixir);
            updateElixir();
        }
    }, 100);
}

function startGame(){
    regenerateElixir();
}

document.getElementById("startBtn")
.addEventListener("click", startGame);

updateElixir();
```
