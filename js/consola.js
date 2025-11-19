export class Consola {
    constructor() {
        this.comandosIngresados = [];
        this.indiceComandosIngresados = 0;
        this.indiceComandosIngresadosTemp = 0;
        this.shellInput = document.querySelector(".shell-input");
        this.shellBox = document.getElementById("shell-box");
        this.impresoraConsola;
    }

    crearShellOutput(contenido) {
        const consola = document.createElement("div");
        consola.className = "shell-output";
        consola.innerHTML += `<p>${contenido.replace(/\n/g, '<br>')}</p>`;
        if (contenido.includes("Comando no reconocido")) {
            consola.className = "shell-output-error";
        }
        this.shellBox.appendChild(consola);
    }

    blanquearShellOutput() {
        this.comandosIngresados = [];
        this.indiceComandosIngresados = 0;
       
        this.shellInput = document.getElementsByClassName("shell-input-disabled")[0];
        this.shellInput.className = "shell-input";
        this.shellInput.value = "";
        this.shellInput.id = "1";
        this.shellInput.disabled = false;
        this.shellInput.addEventListener("keydown", this.eventosPorTeclado);
        this.shellInput.focus();
    }

    limpiarConsola() {
        const consolaOutputs = document.querySelectorAll(".shell-output");
        consolaOutputs.forEach(output => output.remove());

        const consolaOutputErrors = document.querySelectorAll(".shell-output-error");
        consolaOutputErrors.forEach(output => output.remove());

        const consolaOutputInputs = document.querySelectorAll("#shell-input-box");
        consolaOutputInputs.forEach(output => output.remove());

        this.blanquearShellOutput();
    }

    añadirNuevoShellInputBox() {
        const nuevoShellInputBox = document.createElement("div");
        nuevoShellInputBox.className = "shell-input-box";
        nuevoShellInputBox.id = "shell-input-box";
        nuevoShellInputBox.innerHTML = `
            <p>Nehuen-Giacone@Porfoil: ~$ </p>
            <input type="text" class="shell-input" id="1" autofocus autocomplete="off">
        `;

        this.inhabilitarShellInput();
        this.crearShellInput(nuevoShellInputBox);
    }

    inhabilitarShellInput() {
        this.shellInput.id = "0";
        this.shellInput.disabled = true;
        this.shellInput.classList.toggle("shell-input");
        this.shellInput.classList.add("shell-input-disabled");
        this.shellInput.removeEventListener("keydown", this.eventosPorTeclado);
    }

    crearShellInput(nuevoShellInputBox) {
        this.shellInput = nuevoShellInputBox;
        this.shellBox.appendChild(this.shellInput);
        this.shellInput = document.getElementById("1");
        this.shellInput.addEventListener("keydown",this.eventosPorTeclado);

        this.shellInput.focus();
        this.shellInput.scrollIntoView();
    }

    agregarComandosIngresados(input) {
        this.comandosIngresados.push(input);
        console.log(this.comandosIngresados);
        this.indiceComandosIngresados = this.comandosIngresados.length - 1;
        this.indiceComandosIngresadosTemp = this.indiceComandosIngresados;
    }

    historialComandos(key) {
        if (this.comandosIngresados.length === 0) return;

        if (this.actualizarIndiceComandosIngresados(key) === undefined) return;

        if (key === "ArrowUp") {
            this.shellInput.value = this.comandosIngresados[this.indiceComandosIngresadosTemp];
        }

        if (key === "ArrowDown") {
            this.shellInput.value = this.comandosIngresados[this.indiceComandosIngresadosTemp];
        }

        return true;
    }

    actualizarIndiceComandosIngresados(key) {
        switch (key) {
            case "ArrowUp":
                this.indiceComandosIngresadosTemp = this.indiceComandosIngresadosTemp - 1;
                break;
            case "ArrowDown":
                this.indiceComandosIngresadosTemp = this.indiceComandosIngresadosTemp + 1;
                break;
        }   

        if ((this.comandosIngresados[this.indiceComandosIngresadosTemp] === undefined) && (this.indiceComandosIngresadosTemp < 0)){
            this.indiceComandosIngresadosTemp = this.indiceComandosIngresados;
        }

        if ((this.comandosIngresados[this.indiceComandosIngresadosTemp] === undefined) && (this.indiceComandosIngresadosTemp > this.indiceComandosIngresados)){
            this.indiceComandosIngresadosTemp = 0;
        }

        return this.indiceComandosIngresadosTemp;
    }

    eventosPorTeclado = (event) => {
        switch (event.key) {
            case "ArrowUp":
                this.historialComandos(event.key);
                break;
            case "ArrowDown":
                this.historialComandos(event.key);
                break;
            case "Enter":
                this.detectarComando();
                break;
            default:
                break;
        }
    }

    detectarComando() {
        const input = this.shellInput.value.toLowerCase().trim();
        this.agregarComandosIngresados(input);

        switch (input) {
            case "help":
                this.impresoraConsola.imprimirHelp();
                break;
            case "clear":
                this.limpiarConsola();
                break;
            case "about":
                this.impresoraConsola.imprimirAbout();
                break;
            case "projects":
                this.impresoraConsola.imprimirProjects();
                break;
            case "skills":
                this.impresoraConsola.imprimirSkills();
                break;
            case "contact":
                this.impresoraConsola.imprimirContact();
                break;
            default:
                this.impresoraConsola.imprimirError(input);  
                break;
            }

            if (input != "clear") this.añadirNuevoShellInputBox();
    }

    //set
    setImpresora(objetoImpresora) {
        this.impresoraConsola = objetoImpresora;
    }

    initEventosPorTeclado() {
        // Eventos de teclado
        this.shellInput.addEventListener("keydown", this.eventosPorTeclado);
    }
}

// export class Impresora extends Consola {
//     constructor() {
//         super();
//     }

//     imprimirHelp() {
//         const helpText = `Comandos disponibles:
//         <span class="palabra-destacada">- help:</span> Muestra esta ayuda.
//         <span class="palabra-destacada">- clear:</span> Limpia la consola. 
//         <span class="palabra-destacada">- about:</span> Información sobre mí.
//         <span class="palabra-destacada">- projects:</span> Muestra mis proyectos.
//         <span class="palabra-destacada">- skills:</span> Muestra mis habilidades.
//         <span class="palabra-destacada">- contact:</span> Información de contacto.
//         `;
//         this.crearShellOutput(helpText);
//     }

//     imprimirSkills() {
//         const skillsText = `Habilidades:
//         - HTML
//         - CSS / SASS
//         - JavaScript
//         - Python
//         - Git / GitHub
//         - Visual FoxPro
//         - SQL
//         - Bootstrap
//         - C#
//         `;
//         this.crearShellOutput(skillsText);
//     }

//     imprimirAbout() {
//         const aboutText = `¡Hola! Soy Nehuén Giacone, un desarrollador web apasionado por crear experiencias digitales atractivas y funcionales. 
//         Con habilidades en HTML, CSS, JavaScript y más, me esfuerzo por transformar ideas en realidad a través del código. 
//         ¡Explora mi portafolio para ver mis proyectos y habilidades!`;
//         this.crearShellOutput(aboutText);
//     }

//     imprimirProjects() {
//         const projectsText = `Proyectos destacados:
//         <span class="palabra-destacada">- Portafolio Personal:</span> Un sitio web que muestra mis habilidades y proyectos. <a href="https://github.com/nehuengiacone/portafolio" target="_blank" class="enlace-destacado">Ver en GitHub</a>
//         <span class="palabra-destacada">- CotizArg:</span> Aplicación de escritorio para visualizar en tiempo real la cotización del dolar en Argentina. Proyecto realizado en C# y WPF. <a href="https://github.com/nehuengiacone/CotizArg" target="_blank" class="enlace-destacado">Ver en GitHub</a>
//         <span class="palabra-destacada">- Calculadora:</span> Aplicación de escritorio que simula una calculadora básica. Proyecto realizado en C# y WPF. <a href="https://github.com/nehuengiacone/CalculadoraCS" target="_blank" class="enlace-destacado">Ver en GitHub</a>
//         <span class="palabra-destacada">- Gestor de Notas:</span> Una aplicación de escritorio para la gestión de notas. Proyecto realizado en Python y Tkinter. <a href="https://github.com/nehuengiacone/Gestor-de-Notas" target="_blank" class="enlace-destacado">Ver en GitHub</a>
//         <span class="palabra-destacada">- Oro Inicial:</span> Aplicación de escritorio para la organización de colecciones y armado de mazos de Mitos y Leyendas. Proyecto realizado en Visual FoxPro. <a href="" target="_blank" class="enlace-destacado">Ver en GitHub</a>
//         ¡Visita mi <a href="https://github.com/nehuengiacone/" target="_blank" class="enlace-destacado">GitHub</a> para ver más proyectos!`;
//         this.crearShellOutput(projectsText);
//     }

//     imprimirError(input) {
//         const errorText = `Comando no reconocido: "${input}". Escribe "help" para ver los comandos disponibles.`;
//         this.crearShellOutput(errorText);
//     }

//     imprimirContact() {
//         const contactText = `Puedes contactarme a través de:
//         <span class="palabra-destacada">- Email: </span><a href="mailto:nehuengiacone@gmail.com" class="enlace-destacado">nehuengiacone@gmail.com</a>
//         <span class="palabra-destacada">- LinkedIn: </span><a href="https://www.linkedin.com/in/nehuen-giacone/" target="_blank" class="enlace-destacado">linkedin.com/in/nehuen-giacone/</a>
//         <span class="palabra-destacada">- GitHub: </span><a href="https://github.com/nehuengiacone" target="_blank" class="enlace-destacado">github.com/nehuengiacone</a>
//         `
//         this.crearShellOutput(contactText);
//     }

// }