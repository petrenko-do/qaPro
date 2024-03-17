
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
arr.sort(myFunc);
console.log('new arr ' + arr);

function myFunc(){
	return Math.random() - 0.5;
}



const company = {
	name: 'Велика Компанія',
	type:'Головна компанія',
	platform: 'Платформа для продажу квитків',
	sellsSolution: 'Рішення для продажу квитків',
	clients: [
		{
			name: 'Клієнт 1',
			type: 'subCompany',
			uses: 'ПО для продажу квитків',
			sells: 'Рішення для продажу квитків',
			partners: [
				{
					name: 'Клієнт 1.1',
					type: 'subSubCompany',
					uses: 'Рішення для продажу квитків',
					sells: 'Рішення для продажу квитків',
				},
				{
					name: 'Клієнт 1.2',
					type: 'subSubCompany',
					uses: 'Рішення для продажу квитків',
					sells: 'Рішення для продажу квитків',
					partners: [
						{
							name: 'Клієнт 1.2.3',
							type: 'subSubCompany',
							uses: 'Рішення для продажу квитків',
							sells: 'Рішення для продажу квитків',
						}
					]
				}
			]
		},
		{
			name: 'Клієнт 2',
			type: 'subCompany',
			uses: 'ПО для продажу квитків',
			sells: 'Рішення для продажу квитків'
		}
	]
};


function findClientByName(company, name) {
	
	if (company.clients && Array.isArray(company.clients)) {
		
		for (let key of company.clients) {
			
			if (key.name === name) {
				return key; 
			}
		}
	}
	return null; 
}

let clientName = 'Клієнт 2';
console.log(findClientByName(company, clientName));