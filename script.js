

$(document).ready(onReady);

// State Variables can be declared outside of the onReady
// Feel free to make this to what you want!
// Example:
let fungusHP = 100;
let attackAP = 100;

function onReady() {
    
    // Make sure you check the index.html file! 
    // There are lots of buttons and things ready for you to hook into here!
    $('.arcane-sceptre').on('click', arcaneAttack);
    $('.entangle').on('click', entangleAttack);
    $('.dragon-blade').on('click', dragonBlade);
    $('.star-fire').on('click', starFire);
    
    // 🧠 Remember
    // - Handle events that ->
    // - Updates state which is ->
    // - Rendered to the DOM
}

function arcaneAttack() {
    attackAP -= 12;
    fungusHP -= 14;
    renderAttack();
    checker();
}
function entangleAttack() {
    attackAP -= 23;
    fungusHP -= 9;
    renderAttack();
    checker();
}

function dragonBlade() {
    attackAP -= 38;
    fungusHP -= 47;
    renderAttack();
    checker();
}

function starFire() {
    attackAP -= 33
    fungusHP -= 25
    renderAttack();
    checker();

}

function renderAttack() {
    $('.ap-text').html(`${attackAP} Attack AP`);

    $('.hp-text').html(`${fungusHP} Fungus HP`);

}
function win() {
    $('.freaky-fungus').removeClass('walk');
    $('.freaky-fungus').addClass('dead');
}
function iLose() {
    $('.freaky-fungus').removeClass('walk');
    $('.freaky-fungus').addClass('jump');
    
}
function checker() {
    if (fungusHP > 0 && attackAP < 0) {
        console.log('in checker');
        attackAP = 0;

        $('.ap-text').html(`${attackAP} Attack AP`);
        // iLose();disabled();
    } 
    if (attackAP > 0 && fungusHP < 0) {
        fungusHP = 0;
        $('.hp-text').html(`${fungusHP} Fungus HP`);
        win();
    }
}
// function disabled() {
//     if (iLose) {
//         $('.attack').prop('disabled', true);
//     }
// }
//I was not able to make the disable button work
//without the HP/AP count going below zero.