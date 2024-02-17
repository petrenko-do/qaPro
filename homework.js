let age = prompt('skilki rokiv?');
if (!isNaN(age) && age >= 0) {

    if (age == 1) {
        console.log(age + ' рiк')
    } else if (age <= 4) {
        console.log(age + ' роки')
    } else {
        console.log(age + ' рокiв')
    }
}
else {
    console.log('не число')
}