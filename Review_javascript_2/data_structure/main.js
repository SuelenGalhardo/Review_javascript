const patients = [
  {
    name: "Suelen",
    age: 38,
    weight: 70,
    height: 163,
  },
  {
    name: "Alexandra",
    age: 27,
    weight: 70,
    height: 170,
  },
  {
    name: "Carlos",
    age: 42,
    weight: 90,
    height: 180,
  },
];

let patientsName = [];

/*for(let index = 0; index < patients.length; index++ ){
    patientsName[index] = patients[index].name 

}*/
//for of -  mais moderno

for (let patient of patients) {
    patientsName.push(
    `${patient.name} tem 
    ${patient.age} anos, pesa 
    ${patient.weight} kilos e tem 
    ${patient.height} de altura. `
  );
}
alert(patientsName);

//alert(patients[0].name)
//const patientsName
