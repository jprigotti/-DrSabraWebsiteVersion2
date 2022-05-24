
// eventlistenes for Desktop
let clinicaMedica = document.querySelector(".clinicaMedica");
clinicaMedica.addEventListener("mouseenter", enterButton);
clinicaMedica.addEventListener("mouseout", leaveButton);
// clinicaMedica.addEventListener("click", enterButton);
let terapiaIntensiva = document.querySelector(".terapiaIntensiva");
terapiaIntensiva.addEventListener("mouseenter", enterButton);
terapiaIntensiva.addEventListener("mouseleave", leaveButton);
// terapiaIntensiva.addEventListener("click", enterButton);
let cardiologiaChagas = document.querySelector(".cardiologiaChagas");
cardiologiaChagas.addEventListener("mouseenter", enterButton);
cardiologiaChagas.addEventListener("mouseleave", leaveButton);
// cardiologiaChagas.addEventListener("click", enterButton);
let medicoLegista = document.querySelector(".medicoLegista");
medicoLegista.addEventListener("mouseenter", enterButton);
medicoLegista.addEventListener("mouseleave", leaveButton);
// medicoLegista.addEventListener("click", enterButton);


function enterButton(evento){
    console.log(evento);
    let clase = evento.target.className;
    let elemento = document.querySelector(`.${clase}`);
    elemento.style.backgroundColor ="rgba(233, 236, 239,0.5)";
    //elemento.style.backgroundColor ="rgba(32, 201, 151, 0.1)";
    
    elemento.style.transform ="scale(0.97)";
    switch (clase){
        case "clinicaMedica":
        vm.especialidad = "Clinica Médica";
        break;
        case "terapiaIntensiva":
        vm.especialidad = "Terapia Intensiva";
        break;
        case "cardiologiaChagas":
        vm.especialidad = "Cardiología Chagas";
        break;
        case "medicoLegista":
        vm.especialidad = "Médico Legista";
        break;


    }
    
}

function leaveButton(evento){
    let clase = evento.target.className;
    let elemento = document.querySelector(`.${clase}`);
    elemento.style.backgroundColor ="transparent";
    elemento.style.transform ="scale(1)";
    vm.especialidad = "Especialidades"
}


// Vue.createApp({
    const vm = Vue.createApp({
        data() {
            return {
                especialidad : "Especialidades",
            };
        },
        methods: {
            input1(e) {
                this.p1Text = e.target.value;
            },
            input2(e) {
                this.p2Text = e.target.value;
            }
        },
        //directiva de interpolacion de texto v-text
        // template: `<div v-html="mensaje"></div>
        //             <img class="imgClass" v-bind:[imgAttr]="imgSrc">
        //             <br>
        //             <input type="text" v-bind:placeholder="input1Text" v-on:change="input1">
        //             <input type="text" :placeholder="input2Text" @input="input2" >
        //             <input id="input3" type="text" placeholder="Type something">
        //             <input type="text" placeholder="Type something" v-model="p4Text">
    
    
        //             <p>Input 1 - You entered: {{p1Text}}</p>
        //             <p>Input 2 - You entered: {{p2Text}}</p>
        //             <p id="p3">Input 3 - You entered: </p>
        //             <p>Input 4 - You entered: {{p4Text}}</p>
        //             `
    
    }).mount('#app');