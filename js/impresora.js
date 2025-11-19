import {Consola} from './consola.js';  

export class Impresora extends Consola {
    constructor() {
        super();
    }

    imprimirHelp() {
        const helpText = `Comandos disponibles:
        <span class="palabra-destacada">- help:</span> Muestra esta ayuda.
        <span class="palabra-destacada">- clear:</span> Limpia la consola. 
        <span class="palabra-destacada">- about:</span> Información sobre mí.
        <span class="palabra-destacada">- projects:</span> Muestra mis proyectos.
        <span class="palabra-destacada">- skills:</span> Muestra mis habilidades.
        <span class="palabra-destacada">- contact:</span> Información de contacto.
        `;
        this.crearShellOutput(helpText);
    }

    imprimirSkills() {
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
        this.crearShellOutput(skillsText);
    }

    imprimirAbout() {
        const aboutText = `¡Hola! Soy Nehuén Giacone, un desarrollador web apasionado por crear experiencias digitales atractivas y funcionales. 
        Con habilidades en HTML, CSS, JavaScript y más, me esfuerzo por transformar ideas en realidad a través del código. 
        ¡Explora mi portafolio para ver mis proyectos y habilidades!`;
        this.crearShellOutput(aboutText);
    }

    imprimirProjects() {
        const projectsText = `Proyectos destacados:
        <span class="palabra-destacada">- Portafolio Personal:</span> Un sitio web que muestra mis habilidades y proyectos. <a href="https://github.com/nehuengiacone/portafolio" target="_blank" class="enlace-destacado">Ver en GitHub</a>
        <span class="palabra-destacada">- CotizArg:</span> Aplicación de escritorio para visualizar en tiempo real la cotización del dolar en Argentina. Proyecto realizado en C# y WPF. <a href="https://github.com/nehuengiacone/CotizArg" target="_blank" class="enlace-destacado">Ver en GitHub</a>
        <span class="palabra-destacada">- Calculadora:</span> Aplicación de escritorio que simula una calculadora básica. Proyecto realizado en C# y WPF. <a href="https://github.com/nehuengiacone/CalculadoraCS" target="_blank" class="enlace-destacado">Ver en GitHub</a>
        <span class="palabra-destacada">- Gestor de Notas:</span> Una aplicación de escritorio para la gestión de notas. Proyecto realizado en Python y Tkinter. <a href="https://github.com/nehuengiacone/Gestor-de-Notas" target="_blank" class="enlace-destacado">Ver en GitHub</a>
        <span class="palabra-destacada">- Oro Inicial:</span> Aplicación de escritorio para la organización de colecciones y armado de mazos de Mitos y Leyendas. Proyecto realizado en Visual FoxPro. <a href="" target="_blank" class="enlace-destacado">Ver en GitHub</a>
        ¡Visita mi <a href="https://github.com/nehuengiacone/" target="_blank" class="enlace-destacado">GitHub</a> para ver más proyectos!`;
        this.crearShellOutput(projectsText);
    }

    imprimirError(input) {
        const errorText = `Comando no reconocido: "${input}". Escribe "help" para ver los comandos disponibles.`;
        this.crearShellOutput(errorText);
    }

    imprimirContact() {
        const contactText = `Puedes contactarme a través de:
        <span class="palabra-destacada">- Email: </span><a href="mailto:nehuengiacone@gmail.com" class="enlace-destacado">nehuengiacone@gmail.com</a>
        <span class="palabra-destacada">- LinkedIn: </span><a href="https://www.linkedin.com/in/nehuen-giacone/" target="_blank" class="enlace-destacado">linkedin.com/in/nehuen-giacone/</a>
        <span class="palabra-destacada">- GitHub: </span><a href="https://github.com/nehuengiacone" target="_blank" class="enlace-destacado">github.com/nehuengiacone</a>
        `
        this.crearShellOutput(contactText);
    }

}