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
    $('#btn').click(function() {
        for(let i=0; i<tab.length;i++) {
            for (let j = 0; j < tab.length; j++) {
                $('.row'+i + ' .case'+j).append(tab[i][j]);
            }
        }
    })

})




