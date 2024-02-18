let age = prompt('skilki rokiv?');
if (!isNaN(age) && age > 0) {
    if (age == 1) {
        console.log(age + ' рiк')
    } else if (age <= 4) {
        console.log(age + ' роки')
    } else {
        console.log(age + ' рокiв')
    }
} else if (age == null) {
    console.log('Действие отмененно')
} else {
    console.log('Введеное значение неверно')
}