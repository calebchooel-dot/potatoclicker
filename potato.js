let potato = 0;
let baby_farmer = {count: 0, base: 25, mult: 1.25, generation: 1}; 
let farmer = {count: 0, base: 100, mult: 1.27, generation: 5}; 
let tractor = {count: 0, base: 600, mult: 1.29, generation: 20};
let potato_machine = {count: 0, base: 3000, mult: 1.31, generation: 100};
let extra_clicker = {count: 0, base: 200, mult: 1.4, generation: 1};
update();
check();

function potatoClick() {
    potato += extra_clicker.count + 1;
    check();
    update();
}

function buy(item) {
    if (item == 1 && potato >= Math.round((baby_farmer.base)*(baby_farmer.mult)**(baby_farmer.count))) {
        potato -= Math.round((baby_farmer.base)*(baby_farmer.mult)**(baby_farmer.count));
        baby_farmer.count ++;   
    } else if (item == 2 && potato >= Math.round((farmer.base)*(farmer.mult)**(farmer.count))) {
        potato -= Math.round((farmer.base)*(farmer.mult)**(farmer.count));
        farmer.count ++;
    } else if (item == 3 && potato >= Math.round((tractor.base)*(tractor.mult)**(tractor.count))) {
        potato -= Math.round((tractor.base)*(tractor.mult)**(tractor.count));
        tractor.count ++;
    } else if (item == 4 && potato >= Math.round((potato_machine.base)*(potato_machine.mult)**(potato_machine.count))) {
        potato -= Math.round((potato_machine.base)*(potato_machine.mult)**(potato_machine.count));
        potato_machine.count ++;
    } else if (item == 5 && potato >= Math.round((extra_clicker.base)*(extra_clicker.mult)**(extra_clicker.count))) {
        potato -= Math.round((extra_clicker.base)*(extra_clicker.mult)**(extra_clicker.count));
        extra_clicker.count ++;
    } 
    check();
    update();
}

function sell() {
    let options = document.getElementsByName("item");
    for (let item = 0; item < options.length; item++) {
        if (options[item].checked) {
            let selected = options[item].value;
            let count = Number(document.getElementById("sellNum").value);

            if (selected == "babyFarmer" && baby_farmer.count >= count) {
                let amount = 0;
                for (let i = baby_farmer.count - 1; i > baby_farmer.count - count; i --) {
                    amount += Math.round(0.75 * baby_farmer.base * baby_farmer.mult ** i);
                }
                if (window.confirm(`Sell ${count} ${selected} for $${amount}?`)) {
                    baby_farmer.count -= count;
                    potato += amount;
                }
            } else if (selected == "farmer" && farmer.count >= count) {
                let amount = 0;
                for (let i = farmer.count - 1; i > farmer.count - count; i --) {
                    amount += Math.round(0.75 * farmer.base * farmer.mult ** i);
                }
                if (window.confirm(`Sell ${count} ${selected} for $${amount}?`)) {
                    farmer.count -= count;
                    potato += amount;
                }
            } else if (selected == "tractor" && tractor.count >= count) {
                let amount = 0;
                for (let i = tractor.count - 1; i > tractor.count - count; i --) {
                    amount += Math.round(0.75 * tractor.base * tractor.mult ** i);
                }
                if (window.confirm(`Sell ${count} ${selected} for $${amount}?`)) {
                    tractor.count -= count;
                    potato += amount;
                }
            } else if (selected == "potatoMachine" && potato_machine.count >= count) {
                    let amount = 0;
                    for (let i = potato_machine.count - 1; i > potato_machine.count - count; i --) {
                        amount += Math.round(0.75 * potato_machine.base * potato_machine.mult ** i);
                    }
                    if (window.confirm(`Sell ${count} ${selected} for $${amount}?`)) {
                        potato_machine.count -= count;
                        potato += amount;
                    }
            } else if (selected == "extraClicker" && extra_clicker.count >= count) {
                let amount = 0;
                for (let i = extra_clicker.count - 1; i > extra_clicker.count - count; i --) {
                    amount += Math.round(0.75 * extra_clicker.base * extra_clicker.mult ** i);
                }
                if (window.confirm(`Sell ${count} ${selected} for $${amount}?`)) {
                    extra_clicker.count -= count;
                    potato += amount;
                }
            } 
        }
    }
    update();
}

function check() {
    if (potato >= Math.round(baby_farmer.base * baby_farmer.mult ** baby_farmer.count)) {
        document.getElementById("babyFarmerButton").classList.add("canBuy")
    } else {
        document.getElementById("babyFarmerButton").classList.remove("canBuy")
    } 
    if (potato >= Math.round(farmer.base * farmer.mult ** farmer.count)) {
        document.getElementById("farmerButton").classList.add("canBuy")
    } else {
        document.getElementById("farmerButton").classList.remove("canBuy")
    }
    if (potato >= Math.round(tractor.base * tractor.mult ** tractor.count)) {
        document.getElementById("tractorButton").classList.add("canBuy")
    } else {
        document.getElementById("tractorButton").classList.remove("canBuy")
    }
    if (potato >= Math.round(potato_machine.base * potato_machine.mult ** potato_machine.count)) {
        document.getElementById("potatoMachineButton").classList.add("canBuy")
    } else {
        document.getElementById("potatoMachineButton").classList.remove("canBuy")
    }
    if (potato >= Math.round(extra_clicker.base * extra_clicker.mult ** extra_clicker.count)) {
        document.getElementById("extraClickerButton").classList.add("canBuy")
    } else {
        document.getElementById("extraClickerButton").classList.remove("canBuy")
    } 
}

setInterval(function() {
    potato += baby_farmer.count * baby_farmer.generation
    potato += farmer.count * farmer.generation;
    potato += tractor.count * tractor.generation;
    potato += potato_machine.count * potato_machine.generation;

    document.getElementById("potatoLabel").innerHTML =
    `Potatoes: ${potato}`;
    check();
}, 1000)


function update() {
    let total = baby_farmer.count * baby_farmer.generation + farmer.count *  farmer.generation + tractor.count * tractor.generation + potato_machine.count * potato_machine.generation;
    document.getElementById("statsText").innerHTML = 
    `Potatoes/sec: ${total}<br>Potatoes/click: ${extra_clicker.count + 1}`;

    document.getElementById("potatoLabel").innerHTML = 
    `Potatoes: ${Math.round(potato)}`;

    document.getElementById("babyFarmerLabel").innerHTML = 
        `Baby Farmers: ${baby_farmer.count}<br>${baby_farmer.generation} potato/sec`; 
    document.getElementById("babyFarmerButton").innerHTML = 
        `Buy Baby Farmer: $${Math.round(baby_farmer.base * baby_farmer.mult ** baby_farmer.count)}`;

    document.getElementById("farmerLabel").innerHTML = 
        `Farmers:  ${farmer.count} <br>${farmer.generation} potato/sec`;
    document.getElementById("farmerButton").innerHTML = 
        `Buy Farmer: $${Math.round(farmer.base * farmer.mult ** farmer.count)}`;

    document.getElementById("tractorLabel").innerHTML = 
        `Tractors: ${tractor.count} <br>${tractor.generation} potato/sec`;
    document.getElementById("tractorButton").innerHTML = 
        `Buy Tractor: $${Math.round(tractor.base * tractor.mult ** tractor.count)}`;

    document.getElementById("potatoMachineLabel").innerHTML = 
        `Potato Machines: ${potato_machine.count} <br>${potato_machine.generation} potato/sec`; 
    document.getElementById("potatoMachineButton").innerHTML = 
        `Buy Potato Machine: $${Math.round(potato_machine.base * potato_machine.mult ** potato_machine.count)}`;

    document.getElementById("extraClickerLabel").innerHTML = 
        `Extra Clickers: ${extra_clicker.count} <br>${extra_clicker.generation} potato/click`; 
    document.getElementById("extraClickerButton").innerHTML = 
        `Buy Extra Clicker: $${Math.round(extra_clicker.base * extra_clicker.mult ** extra_clicker.count)}`;
}
