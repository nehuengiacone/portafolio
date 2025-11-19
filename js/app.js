import {Consola} from './consola.js';  
import {Impresora} from './impresora.js';

(() => {
    
    const ConsolaPortfoil = new Consola();
    const impresoraConsola = new Impresora();
    ConsolaPortfoil.setImpresora(impresoraConsola);
    ConsolaPortfoil.initEventosPorTeclado();
})();




