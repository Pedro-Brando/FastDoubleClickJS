let startBtn = document.getElementById('start');
let stopBtn = document.getElementById('stop');
let resetBtn = document.getElementById('reset');
let saveBtn = document.getElementById('save');
  
let hora = 00;
let minuto = 00;
let segundo = 00;
let cont = 00;
  
startBtn.addEventListener('click', function () {
    timer = true;
    ligarCronometro();
});
  
stopBtn.addEventListener('click', function () {
    timer = false;
});
  
  
resetBtn.addEventListener('click', function () {
    timer = false;
    hora = 0;
    minuto = 0;
    segundo = 0;
    cont = 0;
    document.getElementById('hr').innerHTML = "00";
    document.getElementById('min').innerHTML = "00";
    document.getElementById('seg').innerHTML = "00";
    document.getElementById('cont').innerHTML = "00";
});
  
function ligarCronometro() {
    if (timer) {
        cont++;
  
        if (cont == 100) {
            segundo++;
            cont = 0;
        }
  
        if (segundo == 60) {
            minuto++;
            segundo = 0;
        }
  
        if (minuto == 60) {
            hora++;
            minuto = 0;
            segundo = 0;
        }
  
        let hrString = hora;
        let minString = minuto;
        let segString = segundo;
        let contString = cont;
  
        if (hora < 10) {
            hrString = "0" + hrString;
        }
  
        if (minuto < 10) {
            minString = "0" + minString;
        }
  
        if (segundo < 10) {
            segString = "0" + segString;
        }
  
        if (cont < 10) {
            contString = "0" + contString;
        }
  
        document.getElementById('hr').innerHTML = hrString;
        document.getElementById('min').innerHTML = minString;
        document.getElementById('seg').innerHTML = segString;
        document.getElementById('cont').innerHTML = contString;
        setTimeout(ligarCronometro, 10);
    }
}