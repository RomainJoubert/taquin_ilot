let tab= [];
tab[0] = [1,2,3,4];
tab[1] = [5,6,7,8];
tab[2] = [9,10,11,12];
tab[3] = [13,14,15,""];

let up =  -1;
let down = 1;
let left = -1;
let right = 1;

$(document).ready(function() {
    for(let i=0; i<tab.length;i++) {
        for (let j = 0; j < tab.length; j++) {
            $('.row'+i + ' .case'+j).append(tab[i][j]);
        }
    }

    for(let i=0; i<tab.length;i++) {
        for (let j = 0; j < tab.length; j++) {
             $('.row'+i + ' .case'+j).click(function(){
                 if(existe(i+1,j) && vide(i+1,j)){
                     permuter(i + down,j,i,j);
                 }else if(existe(i -1,j) && vide(i-1,j)) {
                     permuter(i + up,j,i,j);
                 }else if (existe(i,j+1) && vide(i,j+1)) {
                     permuter(i,j + right,i,j);
                 }else if(existe(i,j-1) && vide(i,j-1)) {
                     permuter(i,j + left,i,j);
                 }else {
                     console.log("error");
                 }
            });
        }
    }
    $('#btn').click(function() {
        melanger();

    });
});

function dessiner (tableau) {
    if(tableau.length === 4) {
        for (let i = 0; i < tableau.length; i++) {
            for (let j = 0; j < tableau.length; j++) {
                $('.row' + i + ' .case' + j).html(tableau[i][j]);
            }
        }
    }else {
        for (let i = 0; i < tableau.length; i++) {
            $('#case' + i).html(tableau[i]);
        }
    }
}

function vide(i,j) {
    let v;
    if(tab[i][j] === ""){
        v = true;
    }else{
        v= false;
    }
    return v;
}

function existe(i,j) {
    let e;
    if (i>= 0 && i<= 3 && j>=0 && j<=3) {
        e = true;
    }else {
        e = false;
    }
    return e;
}

function permuter (i1,j1,i2,j2) {
        let v = tab[i1][j1]; // v = ""
        let nonVide = tab[i2][j2]; // nonVide = 12

        tab[i1][j1] = nonVide; // "" = 12
        tab[i2][j2] = v; // 12 = ""

        dessiner(tab);// redessine le tableau
        return tab;
}

function tabsimple() {
    let test = [];
    for(let i=0; i<tab.length;i++) {
        for (let j = 0; j < tab.length; j++) {
            test.push(tab[i][j]);
        }
    }
    return test;
}

function melanger () {

    tableau = tabsimple();
    for (let i = tableau.length-1; i>=1;i--) {
        let hi = Math.floor(Math.random() * (i + 1));
        let si = tableau[i];
        tableau[i] = tableau[hi];
        tableau[hi] = si;
    }
    dessiner(tableau);
}