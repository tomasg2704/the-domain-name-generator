let pronoun = ['the','our'];
let adj = ['great', 'big' ];
let noun = ['jogger','racoon'];
let extentions = ['.com', '.es', '.net'];
let concata = [];
let combination = "";

const mostrarCombinaciones = (arr1, arr2, arr3, arr4) => {
    for(let i = 0; i < arr1.length; i++){
        let param1 = arr1[i];
        for(let j = 0; j < arr2.length; j++){
            let param2 = arr2[j];
            for(let k = 0; k < arr3.length; k++){
                let param3 = arr3[k];
                for(let v = 0; v < arr4.length; v++){
                    let param4 = arr4[v];
                    concata.push(param1+param2+param3+param4);
                }
            }
        }
    }

    return console.log(concata);

}

console.log(mostrarCombinaciones(pronoun, adj, noun, extentions));