const nemo = ['Nemo'];
const everyone = ['Dory', 'Bruce', 'Marlin', 'Nemo', 'Gill', 'Bloat', 'Nigel',
'Squirt', 'Darla', 'Hank'];
const large = new Array(100000).fill('Nemo');


function findNemo(array){

    for(let i = 0; i < array.length; i++){
        if(array[i] === 'Nemo'){
            console.log('Found NEMO!!!');
        }
    }

}

findNemo(large);