const temas = {
  "HTML": {
    titulo: "HTML - ¿Qué es? y Etiquetas",
    texto: `
    <p><b>¿Qué es?</b> Es el lenguaje de marcado que crea la estructura base de cualquier página web. Es lo que le dice al navegador que es un título, un párrafo, una imagen o un botón.</p>
    <p><b>Etiquetas principales:</b><br>
    &lt;html&gt; &lt;head&gt; &lt;body&gt; &lt;header&gt; &lt;footer&gt; &lt;main&gt; &lt;section&gt; &lt;div&gt; &lt;h1&gt; a &lt;h6&gt; &lt;p&gt; &lt;a&gt; &lt;img&gt; &lt;button&gt; &lt;ul&gt; &lt;li&gt;</p>
    `
  },
  "Jinja": {
    titulo: "Jinja - ¿Qué es?",
    texto: `
    <p><b>¿Qué es?</b> Es el motor de plantillas de Flask. Sirve para conectar Python con HTML sin tener que escribir todo el HTML a mano.</p>
    <p>Con Jinja puedes usar <b>{{ url_for('static', filename='...') }}</b> para cargar tu CSS, imágenes y JS, y usar {% raw %}{% for %}, {% if %}{% endraw %} para mostrar listas.</p>
    `
  },
  "CSS": {
    titulo: "CSS - ¿Qué es y sus atributos",
    texto: `
    <p><b>¿Qué es?</b> Son las hojas de estilo. Le dan color, tamaño, posición y diseño a la página.</p>
    <p><b>Atributos que usamos:</b><br>
    color, background-color, font-size, font-family, margin, padding, border, border-radius, display, width, height, text-align, box-shadow</p>
    `
  },
  "JavaScript": {
    titulo: "JavaScript - ¿Qué es? y Atributos",
    texto: `
    <p><b>¿Qué es?</b> Es el lenguaje que hace que tu lapbook sea interactiva. Gracias a JS funcionan los botones COMENZAR y los de los temas.</p>
    <p><b>Atributos y funciones que usamos:</b><br>
    onclick, getElementById(), querySelectorAll(), classList.add() / remove(), style.display, innerText, innerHTML</p>
    `
  },
  "SQL": {
    titulo: "SQL - ¿Qué es? y comandos",
    texto: `
    <p><b>¿Qué es?</b> Es el lenguaje para trabajar con bases de datos. Guarda y consulta información.</p>
    <p><b>Comandos principales:</b><br>
    SELECT (ver datos), INSERT INTO (agregar), UPDATE (actualizar), DELETE (borrar), CREATE TABLE (crear tabla), DROP TABLE (eliminar tabla), WHERE, FROM</p>
    `
  }
};

function comenzar(){
  document.getElementById('portada').classList.add('oculto');
  document.getElementById('menu').classList.remove('oculto');
  document.getElementById('informacion').classList.add('oculto');
}
function volverPortada(){
  document.getElementById('portada').classList.remove('oculto');
  document.getElementById('menu').classList.add('oculto');
  document.getElementById('informacion').classList.add('oculto');
}
function volverMenu(){
  document.getElementById('menu').classList.remove('oculto');
  document.getElementById('informacion').classList.add('oculto');
  document.getElementById('portada').classList.add('oculto');
}
function mostrarTema(nombre){
  const info = temas[nombre];
  document.getElementById('titulo-tema').innerText = info.titulo;
  document.getElementById('contenido-tema').innerHTML = info.texto;
  document.getElementById('menu').classList.add('oculto');
  document.getElementById('portada').classList.add('oculto');
  document.getElementById('informacion').classList.remove('oculto');
}
