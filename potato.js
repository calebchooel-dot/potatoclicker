let potato = 0;
let baby_farmer = 0;
let extra_clicker = 0;
let farmer = 0; 
let tractor = 0;
let potato_machine = 0;

function potatoClick() {
    potato += extra_clicker + 1;
    update();
}

function buy(item) {
    if (item == 1 && potato >= Math.round(10*1.25**baby_farmer)) {
        potato -= Math.round(10*1.25**baby_farmer);
        baby_farmer ++;   
    } else if (item == 2 && potato >= Math.round(80*1.27**farmer)) {
        potato -= Math.round(80*1.27**farmer);
        farmer ++;
    } else if (item == 3 && potato >= Math.round(900*1.29**tractor)) {
        potato -= Math.round(900*1.29**tractor);
        tractor ++;
    } else if (item == 4 && potato >= Math.round(10000*1.31**potato_machine)) {
        potato -= Math.round(10000*1.31**potato_machine);
        potato_machine ++;
    } else if (item == 5 && potato >= Math.round(10*1.35**extra_clicker)) {
        potato -= Math.round(10*1.35**extra_clicker);
        extra_clicker ++;
    } 
    update();
}

function sell() {
    let options = document.getElementsByName("item");
    for (let item = 0; item < options.length; item++) {
        if (options[item].checked) {
            let selected = options[item].value;
            let count = Number(document.getElementById("sellNum").value);

            if (selected == "babyFarmer" && baby_farmer >= count) {
                let amount = 0;
                for (let i = baby_farmer; i > baby_farmer - count; i --) {
                    amount += Math.round(0.75 * 10 * 1.25 ** i);
                }
                if (window.confirm(`Sell ${count} ${selected} for $${amount}?`)) {
                    baby_farmer -= count;
                    potato += amount;
                }
            } else if (selected == "farmer" && farmer >= count) {
                let amount = 0;
                for (let i = farmer; i > farmer - count; i --) {
                    amount += Math.round(0.75 * 80 * 1.27 ** i);
                }
                if (window.confirm(`Sell ${count} ${selected} for $${amount}?`)) {
                    farmer -= count;
                    potato += amount;
                }
            } else if (selected == "tractor" && tractor >= count) {
                let amount = 0;
                for (let i = tractor; i > tractor - count; i --) {
                    amount += Math.round(0.75 * 900 * 1.29 ** i);
                }
                if (window.confirm(`Sell ${count} ${selected} for $${amount}?`)) {
                    tractor -= count;
                    potato += amount;
                }
            } else if (selected == "potatoMachine" && potato_machine >= count) {
                    let amount = 0;
                    for (let i = potato_machine; i > potato_machine - count; i --) {
                        amount += Math.round(0.75 * 10000 * 1.31 ** i);
                    }
                    if (window.confirm(`Sell ${count} ${selected} for $${amount}?`)) {
                        potato_machine -= count;
                        potato += amount;
                    }
            } else if (selected == "extraClicker" && extra_clicker >= count) {
                let amount = 0;
                for (let i = extra_clicker; i > extra_clicker - count; i --) {
                    amount += Math.round(0.75 * 1000 * 1.35 ** i);
                }
                if (window.confirm(`Sell ${count} ${selected} for $${amount}?`)) {
                    extra_clicker -= count;
                    potato += amount;
                }
            } 
        }
    }
    update();
}


setInterval(function() {
    potato += baby_farmer * 0.2
    potato += farmer * 1;
    potato += tractor * 10;
    potato += potato_machine * 70;

    document.getElementById("potatoLabel").innerHTML =
    `Potatoes: ${potato}`;
}, 1000)


function update() {
    let total = baby_farmer * 0.2 + farmer * 1 + tractor * 10 + potato_machine * 70;
    document.getElementById("stats").innerHTML = 
    `Potatoes/sec: ${total}<br>Potato/click: ${extra_clicker + 1}`;

    document.getElementById("potatoLabel").innerHTML = 
    `Potatoes: ${potato}`;

    document.getElementById("babyFarmerLabel").innerHTML = 
        `Baby Farmers: ${baby_farmer}<br>+0.2 potato/sec`; 
    document.getElementById("babyFarmerButton").innerHTML = 
        `Buy Baby Farmer: $${Math.round(10*1.25**baby_farmer)}`;

    document.getElementById("farmerLabel").innerHTML = 
        "Farmers: " + farmer + "<br>+1 potato/sec";
    document.getElementById("farmerButton").innerHTML = 
        `Buy Farmer: $${Math.round(80*1.27**farmer)}`;

    document.getElementById("tractorLabel").innerHTML = 
        "Tractors: " + tractor + "<br>+8 potatos/sec";
    document.getElementById("tractorButton").innerHTML = 
        `Buy Tractor: $${Math.round(900*1.29**tractor)}`;

    document.getElementById("potatoMachineLabel").innerHTML = 
        "Potato Machines: " + potato_machine + "<br>+60 potatos/sec"; 
    document.getElementById("potatoMachineButton").innerHTML = 
        `Buy Potato Machine: $${Math.round(10000*1.31**potato_machine)}`;

    document.getElementById("extraClickerLabel").innerHTML = 
        "Extra Clickers: " + extra_clicker + "<br>+1 potatos/click"; 
    document.getElementById("extraClickerButton").innerHTML = 
        `Buy Extra Clicker: $${Math.round(1000*1.35**extra_clicker)}`;
}