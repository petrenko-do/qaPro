let obj = {
    name: 'Huan',
    age: 53,
    sex: 'male',
    isWork: true,
    get addNewValue(){
         this.name;
    },
    set addNewValue(value){
        this.name = value
    },
    getInfo: function(){
       if(this.hasOwnProperty('name' )) {
        return console.log(this.name);
       }
       else {
         this;
       }
    }
}

obj.addNewValue = "Pedro";
obj.getInfo();
console.log(obj)






var services = {

    "стрижка": '60 грн',

    "гоління": '80 грн',

    "Миття голови": '100 грн',

    newService: function (key, value) {
        this[key] = value;

        console.log(`Вы додали услугу "${key}" по цене "${value}"`);
    },

    sumPrice: function () {
        let sum = 0;
        for (let key in this) {
            if (typeof this[key] === 'string') {
                sum += parseInt(this[key]);
            }
        }
        console.log("Общая сумма прайса: " + sum);

    },
    minPrice: function () {
        let min = Infinity; 
        for (let key in this) {
            if (typeof this[key] === 'string') {
                let price = parseInt(this[key]); 
                if (!isNaN(price)) { 
                    min = Math.min(min, price); 
                }
            }
        }
        console.log("Минимальная цена в прайсе: " + min);
    },

    maxPrice : function(){
        let max = -Infinity;
        for(let key in this){
             if ( typeof this[key] === 'string'){
                let price = parseInt(this[key]);
                if (!isNaN(price)) {
                    max = Math.max(max, price)
                }
             }
        }
        console.log("Максимальная цена в прайсе: " + max)
    }

};


services.newService('Рассказать стих', '20 грн');
services.newService('Поговорить о космосе', '80 грн');
services['Розбити скло'] = "10 грн";


services.sumPrice();
services.maxPrice();
services.minPrice();
console.log(services);
