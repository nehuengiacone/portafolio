//DOM
/*const pipeTag = document.createElement('p');
pipeTag.id= "pipe";*/
const presentacion = document.querySelector('#presentacion');
const consola = document.querySelector("#consola");
const inputTag = document.createElement('input');



let mensaje_presentacion = `Mi nombre es Nehuen Giacone, soy desarrollador y este es mi humilde portafolio.\nTe invito a que navegues en él. Para ello, escribe el comando <<help>>.`;
const fecha = new Date();
console.log(fecha);

const comandos = {
	surprise: (msg) => {
		const surprise = document.createElement("p");
		/*surprise.innerText = `/> Listado de COMANDOS aplicables
		set.config background-color [color]        Cambiar color de background
		get.config background-color 			   Obtiene el color de background`;*/
		msg = `/> Listado de COMANDOS aplicables
		set.config background-color [color]        Cambiar color de background\nget.config background-color 			   Obtiene el color de background`;
		letrasAnimacion(msg, surprise);
		consola.appendChild(surprise);
		inputTag.value = "";
		consola.appendChild(inputTag);
	},

	help : (msg) => {
		const helpMsg = document.createElement("p");
		msg = `/> Listado de COMANDOS aplicables
		view.profile        Ver mi Perfil.\nget.experience 			   Ver mi experiencia laboral\nclear 			   Limpiar consola`;
		letrasAnimacion(msg, helpMsg);
		consola.appendChild(helpMsg);
		inputTag.value = "";
		consola.appendChild(inputTag);
	},

	clear : () => {
		let washing = consola.querySelectorAll("p");
		for(let e in washing){
			try{
				washing[e].remove();				
			}
			catch(err){
				console.warn("El array está vacio");
			}
		}
		inputTag.value = "";
		consola.appendChild(inputTag);
	},

	errorMsg: (msg) => {
		const errorMsg = document.createElement("p");
		/*errorMsg.innerText = `/> ErrorException: ( ${inputTag.value} )
		Response: No es un comando aplicable.`;*/
		msg = `/> ErrorException: ( ${inputTag.value} )
		Response: No es un comando aplicable.`;
		letrasAnimacion(msg, errorMsg);
		errorMsg.classList.toggle("error");
		consola.appendChild(errorMsg);
		inputTag.value = "";
		consola.appendChild(inputTag);
	}
}


// Atributos de input
const setearPropInput = (tipo="hidden") => {
	inputTag.id = "comando";
	inputTag.type = tipo;
	inputTag.autofocus = true;
	inputTag.placeholder = "/> ";
	inputTag.type = "text";
}

// Animación de mensaje
const letrasAnimacion = (mensaje, tagHTML) => {
	let i = 0;
	
	const intervalo = setInterval(() => {
		if(i === mensaje.length){
        	/*document.querySelector("#consola").append(pipeTag);
			pipeTag.innerText = "|";*/
			setearPropInput();
			consola.append(inputTag);

			clearInterval(intervalo);
		}
		else{
			if(mensaje.charAt(i) === '\n'){
				tagHTML.innerHTML += "<br>";
			}
			else{
				tagHTML.innerHTML = tagHTML.innerHTML + mensaje.charAt(i);
			}

		}
		i++;
	}, 10);	//50
}






// Eventos

// Validar entrada
inputTag.addEventListener("keypress", () => {
	let msg ="";
	let inputUser = document.createElement("p");

	if(event.key == "Enter"){
		stackInput.push(inputTag.value);
		inputUser.innerText = inputTag.value;
		consola.appendChild(inputUser);
		
		if(inputTag.value === "surprise"){
			comandos.surprise(msg);
		}
		else if(inputTag.value === "help") {
			comandos.help(msg);
		}
		else if(inputTag.value === "clear"){
			comandos.clear();
		}
		else{
			comandos.errorMsg(msg);
		}
	}
});








// Historia de inputs
let stackInput = [];
let stackUp = 1;
let stackDown = 0;
inputTag.addEventListener("keydown", ()=>{

	let stackMemo;

	if(event.key == "ArrowUp"){

		stackMemo = stackInput.length - stackUp;
		if(stackMemo < 0){
			if(stackInput[stackMemo] === undefined){
				inputTag.value = "";
			}
			else{
				inputTag.value = stackInput[0];				
			}
			stackUp = 1;
		}
		else{
			inputTag.value = stackInput[stackMemo];
			stackUp++;	
		}

	}
	else if(event.key == "ArrowDown"){
		if(stackDown > (stackInput.length - 1)){
			if(stackInput[stackDown] === undefined){
				inputTag.value = "";
			}
			else{
				inputTag.value = stackInput[stackInput.length - 1];
			}
			stackDown = 0;
		}
		else{
			inputTag.value = stackInput[stackDown];
			stackDown++;	
		}
	}
});



letrasAnimacion(mensaje_presentacion, presentacion);



/*
//animación del pipe
setInterval(()=>{
	pipeTag.classList.toggle("parpadeo");
},600);
*/
