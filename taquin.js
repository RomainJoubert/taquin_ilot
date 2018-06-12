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
                console.log(permuter(i+1,j,i,j));
            })

        }
    }

});
function dessiner () {
    for(let i=0; i<tab.length;i++) {
        for (let j = 0; j < tab.length; j++) {
            $('.row'+i + ' .case'+j).html(tab[i][j]);
        }
    }
}
function vide (i,j) {
    let v;
    if(tab[i][j] === ""){
        v = true;
    }else{
        v= false;
    }
    return v;
}
function existe (i,j) {
    let e;
    if (i> 0 && i<= 3 && j>0 && j<=3) {
        e = true;
    }else {
        e = false;
    }
    return e;
}
function permutable (i,j) {
    let p;
    if(existe(i,j-1) && vide(i,j-1) || existe(i,j+1) && vide(i,j+1) || existe(i-1,j) && vide(i-1,j) || existe(i+1,j) && vide(i+1,j)) {
            p = true;
    }else {
           p = false;
    }
    return p;
}

function permuter (i1,j1,i2,j2) {
    let vide = tab[i1][j1];
    let nonVide = tab[i2][j2];


    if(permutable(i2,j2) === true) {
        tab[i1][j1] = nonVide;
        tab[i2][j2] = vide;
        dessiner();
    }

    return tab;
}

