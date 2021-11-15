
let submit = document.getElementById("submit");
let name_output = $("#name_output");
let br = "<br>";
const allPersons = [];

async function pullFromApi() {  
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    for(let i=0; i< 10 ;i++){
        // consition: all person with appropriate address.(lat > 0)
        if(data[i].address.geo.lat > 0){
            allPersons.push(data[i].name + br);
            document.getElementById("App").innerHTML = allPersons;
        }
    }
}



const pullInfo = () => {
    pullFromApi();
}; 

submit.addEventListener('click', pullInfo);
