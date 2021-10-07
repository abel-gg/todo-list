import Model from './model.js';
import View from './View.js';

/* Usando 'DOMContentLoaded' como parámetro nos permite 
tener todos los elementos del archivo html 
cargados para que no ocurran errores */
document.addEventListener('DOMContentLoaded', () => {
    const model = new Model();
    const view = new View();
    model.setView(view);
    view.setModel(model);

    view.render();
});