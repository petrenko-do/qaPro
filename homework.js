function checkProbabilityTheory(count) {
    let pair_number = 0;
    let odd_number = 0;
  
    for (let i = 0; i < count; i++) {
        let rand = Math.floor(Math.random() * (1000 - 100 + 1)) + 100;

        if (rand % 2 === 0) {
            pair_number++
        }else {
            odd_number++
        }
    } 

    console.log('Количество сгенерированных чисел: ' + (pair_number + odd_number))
    console.log('Количество парных чисел: ' + pair_number);
    console.log('Количество не парных чисел: ' + odd_number);
    console.log('Процент парных к не парным: ' + ((pair_number/odd_number)*100).toFixed(2) + ' %');
}
checkProbabilityTheory(9999)


function myIsNaN(value){
    
    if(typeof value !== 'number' ){
        return true
    }
    
    return value !== value
 
}