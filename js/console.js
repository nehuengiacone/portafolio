// (() => {
    let comandosIngresados = [];
    let indiceComandosIngresados = 0;
    let indiceComandosIngresadosTemp = 0;

    let shellInput = document.querySelector(".shell-input")
    const shellBox = document.getElementById("shell-box")

    const imprimirHelp = () => {
        const helpText = `Comandos disponibles:
        - help: Muestra esta ayuda.
        - clear: Limpia la consola. 
        - about: Información sobre mí.
        - projects: Muestra mis proyectos.
        - skills: Muestra mis habilidades.
        - contact: Información de contacto.
        `;
        crearShellOutput(helpText);
    }

    const imprimirSkills = () => {
        const skillsText = `Habilidades:
        - HTML
        - CSS / SASS
        - JavaScript
        - Python
        - Git / GitHub
        - Visual FoxPro
        - SQL
        - Bootstrap
        - C#
        `;
        crearShellOutput(skillsText);
    }

    const imprimirAbout = () => {
        const aboutText = `¡Hola! Soy Nehuén Giacone, un desarrollador web apasionado por crear experiencias digitales atractivas y funcionales. 
        Con habilidades en HTML, CSS, JavaScript y más, me esfuerzo por transformar ideas en realidad a través del código. 
        ¡Explora mi portafolio para ver mis proyectos y habilidades!`;
        crearShellOutput(aboutText);
    }

    const imprimirProjects = () => {
        const projectsText = `Proyectos destacados:
        <span class="palabra-destacada">- Portafolio Personal:</span> Un sitio web que muestra mis habilidades y proyectos.
        <span class="palabra-destacada">- DolarArg:</span> Aplicación de escritorio para visualizar en tiempo real la cotización del dolar en Argentina. Proyecto realizado en C# y WPF.
        <span class="palabra-destacada">- Gestor de Notas:</span> Una aplicación de escritorio para la gestión de notas. Proyecto realizado en Python y Tkinter.
        <span class="palabra-destacada">- Oro Inicial:</span> Aplicación de escritorio para la organización de colecciones y armado de mazos de Mitos y Leyendas. Proyecto realizado en Visual FoxPro.
        ¡Visita mi GitHub para ver más proyectos!`;
        crearShellOutput(projectsText);
    }

    const imprimirError = (input) => {
        const errorText = `Comando no reconocido: "${input}". Escribe "help" para ver los comandos disponibles.`;
        crearShellOutput(errorText);
    }

    const limpiarConsola = () => {
        const consolaOutputs = document.querySelectorAll(".shell-output");
        consolaOutputs.forEach(output => output.remove());
        const consolaOutputErrors = document.querySelectorAll(".shell-output-error");
        consolaOutputErrors.forEach(output => output.remove());
        const consolaOutputInputs = document.querySelectorAll("#shell-input-box");
        consolaOutputInputs.forEach(output => output.remove());

        comandosIngresados = [];
        indiceComandosIngresados = 0;
       
        shellInput = document.querySelector(".shell-input")
        shellInput.value = "";
        shellInput.id = "1";
        shellInput.disabled = false;
        shellInput.focus();
    }

    const crearShellOutput = (contenido) => {
        const consola = document.createElement("div");
        consola.className = "shell-output";
        consola.innerHTML += `<p>${contenido.replace(/\n/g, '<br>')}</p>`;
        if (contenido.includes("Comando no reconocido")) {
            consola.className = "shell-output-error";
        }
        shellBox.appendChild(consola);
    }

    const añadirNuevoShellInputBox = () => {
        const nuevoShellInputBox = document.createElement("div");
        nuevoShellInputBox.className = "shell-input-box";
        nuevoShellInputBox.id = "shell-input-box";
        nuevoShellInputBox.innerHTML = `
            <p>Nehuen-Giacone@Porfoil: ~$ </p>
            <input type="text" class="shell-input" id="1" autofocus autocomplete="off">
        `;

        blanquearShellInput();
        crearShellInput(nuevoShellInputBox);
    }

    const blanquearShellInput = () => {
        shellInput.id = "0";
        shellInput.disabled = true;
        shellInput.removeEventListener("keydown", function(event) {
            eventosPorTeclado(event);
        });
    }

    const crearShellInput = (nuevoShellInputBox) => {
        shellInput = nuevoShellInputBox;
        shellBox.appendChild(shellInput);
        shellInput = document.getElementById("1");
        shellInput.addEventListener("keydown", function(event) {
            eventosPorTeclado(event);
        });

        shellInput.focus();
    }

    const agregarComandosIngresados = (input) => {
        comandosIngresados.push(input);
        console.log(comandosIngresados);
        indiceComandosIngresados = comandosIngresados.length - 1;
        indiceComandosIngresadosTemp = indiceComandosIngresados;
    }

    const historialComandos = (key) => {
        if (comandosIngresados.length === 0) return;

        if (actualizarIndiceComandosIngresados(key) === undefined) return;

        if (key === "ArrowUp") {
            shellInput.value = comandosIngresados[indiceComandosIngresadosTemp];
        }

        if (key === "ArrowDown") {
            shellInput.value = comandosIngresados[indiceComandosIngresadosTemp];
        }

        return true;
    }

    const actualizarIndiceComandosIngresados = (key) => {
        switch (key) {
            case "ArrowUp":
                indiceComandosIngresadosTemp = indiceComandosIngresadosTemp - 1;
                break;
            case "ArrowDown":
                indiceComandosIngresadosTemp = indiceComandosIngresadosTemp + 1;
                break;
        }   

        if ((comandosIngresados[indiceComandosIngresadosTemp] === undefined) && (indiceComandosIngresadosTemp < 0)){
            indiceComandosIngresadosTemp = indiceComandosIngresados;
        }

        if ((comandosIngresados[indiceComandosIngresadosTemp] === undefined) && (indiceComandosIngresadosTemp > indiceComandosIngresados)){
            indiceComandosIngresadosTemp = 0;
        }

        return indiceComandosIngresadosTemp;
    }

    const eventosPorTeclado = (event) => {
        switch (event.key) {
            case "ArrowUp":
                historialComandos(event.key);
                break;
            case "ArrowDown":
                historialComandos(event.key);
                break;
            case "Enter":
                detectarComando();
                break;
            default:
                break;
        }
    }

    const detectarComando = () => {
        const input = shellInput.value.toLowerCase().trim();
        agregarComandosIngresados(input);

        switch (input) {
            case "help":
                imprimirHelp();
                break;
            case "clear":
                limpiarConsola();
                break;
            case "about":
                imprimirAbout();
                break;
            case "projects":
                imprimirProjects();
                break;
            case "skills":
                imprimirSkills();
                break;
            case "contact":
                imprimirContact();
                break;
            default:
                imprimirError(input);  
                break;
            }

            if (input != "clear") añadirNuevoShellInputBox();   
    }

    // Eventos de teclado
    shellInput.addEventListener("keydown", function(event) {
        eventosPorTeclado(event);
    });

// })();




