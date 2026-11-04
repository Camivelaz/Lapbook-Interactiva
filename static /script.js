const informacion = {

    HTML: `
        <div class="contenido-tarjeta">
            <h3>¿Qué es HTML?</h3>
            <p>HTML significa HyperText Markup Language (Lenguaje de Marcado de Hipertexto). Es el lenguaje utilizado para crear la estructura de las páginas web.</p>

            <h3>¿Para qué sirve?</h3>
            <p>Permite organizar títulos, párrafos, imágenes, enlaces, listas y tablas dentro de una página web.</p>

            <h3>Características</h3>
            <ul>
                <li>Utiliza etiquetas para organizar el contenido.</li>
                <li>Permite insertar imágenes y enlaces.</li>
                <li>Trabaja junto con CSS y JavaScript.</li>
                <li>Es la base de la estructura de una página web.</li>
            </ul>

            <h3>Etiquetas principales</h3>
            <ul>
                <li><b>&lt;html&gt;:</b> inicia el documento.</li>
                <li><b>&lt;head&gt;:</b> contiene información de la página.</li>
                <li><b>&lt;title&gt;:</b> establece el título de la pestaña.</li>
                <li><b>&lt;body&gt;:</b> contiene el contenido visible.</li>
                <li><b>&lt;h1&gt;:</b> crea un título.</li>
                <li><b>&lt;p&gt;:</b> crea un párrafo.</li>
                <li><b>&lt;img&gt;:</b> agrega imágenes.</li>
                <li><b>&lt;a&gt;:</b> crea enlaces.</li>
            </ul>

            <h3>Ejemplo de código</h3>
            <pre><code>&lt;h1&gt;Hola mundo&lt;/h1&gt;
&lt;p&gt;Mi primera página web&lt;/p&gt;</code></pre>

            <h3>Importancia</h3>
            <p>HTML permite construir y organizar el contenido de los sitios web.</p>

            <div class="actividad">
                <h3>Actividad</h3>
                <p>¿Qué etiqueta se utiliza para crear un párrafo?</p>
                <button onclick="revisar(this, 'p')">&lt;p&gt;</button>
                <button onclick="revisar(this, 'h1')">&lt;h1&gt;</button>
                <button onclick="revisar(this, 'img')">&lt;img&gt;</button>
                <p class="resultado"></p>
            </div>
        </div>
    `,

    Jinja: `
        <div class="contenido-tarjeta">
            <h3>¿Qué es Jinja?</h3>
            <p>Jinja es un motor de plantillas que se utiliza con Python y Flask para mostrar información dinámica dentro de páginas HTML.</p>

            <h3>¿Para qué sirve?</h3>
            <p>Permite mostrar variables, crear condiciones y repetir elementos dentro de una plantilla.</p>

            <h3>Características</h3>
            <ul>
                <li>Se utiliza comúnmente con Flask.</li>
                <li>Permite recibir datos desde Python.</li>
                <li>Utiliza variables y expresiones.</li>
                <li>Permite crear ciclos y condiciones.</li>
                <li>Facilita la reutilización de plantillas.</li>
            </ul>

            <h3>Elementos principales</h3>
            <ul>
                <li><b>Variables:</b> muestran información.</li>
                <li><b>if:</b> establece condiciones.</li>
                <li><b>else:</b> indica qué ocurre si no se cumple una condición.</li>
                <li><b>for:</b> permite repetir instrucciones.</li>
                <li><b>Filtros:</b> modifican cómo se muestra un dato.</li>
            </ul>

            <h3>Ejemplo de sintaxis</h3>
            <pre><code>{{ '{{ nombre }}' }}

{% raw %}{% if edad >= 18 %}
    Mayor de edad
{% else %}
    Menor de edad
{% endif %}{% endraw %}</code></pre>

            <h3>Ejemplo con Flask</h3>
            <pre><code>return render_template(
    "index.html",
    nombre="Camila"
)</code></pre>

            <h3>Importancia</h3>
            <p>Jinja conecta la información que se trabaja en Python con las plantillas HTML.</p>

            <div class="actividad">
                <h3>Actividad</h3>
                <p>¿Qué instrucción permite repetir elementos?</p>
                <button onclick="revisar(this, 'for')">for</button>
                <button onclick="revisar(this, 'if')">if</button>
                <button onclick="revisar(this, 'else')">else</button>
                <p class="resultado"></p>
            </div>
        </div>
    `,

    CSS: `
        <div class="contenido-tarjeta">
            <h3>¿Qué es CSS?</h3>
            <p>CSS significa Cascading Style Sheets (Hojas de Estilo en Cascada). Es el lenguaje que permite dar diseño y apariencia a las páginas web.</p>

            <h3>¿Para qué sirve?</h3>
            <p>Permite cambiar colores, tamaños, fuentes, fondos, bordes y la distribución de los elementos.</p>

            <h3>Características</h3>
            <ul>
                <li>Mejora la apariencia de una página.</li>
                <li>Permite personalizar colores y letras.</li>
                <li>Organiza los elementos visuales.</li>
                <li>Puede adaptar páginas a celulares y computadoras.</li>
            </ul>

            <h3>Propiedades principales</h3>
            <ul>
                <li><b>color:</b> cambia el color del texto.</li>
                <li><b>background-color:</b> cambia el fondo.</li>
                <li><b>font-size:</b> cambia el tamaño de letra.</li>
                <li><b>font-family:</b> cambia el tipo de letra.</li>
                <li><b>margin:</b> establece espacios exteriores.</li>
                <li><b>padding:</b> establece espacios interiores.</li>
                <li><b>border:</b> agrega bordes.</li>
                <li><b>text-align:</b> alinea el texto.</li>
            </ul>

            <h3>Ejemplo de código</h3>
            <pre><code>body {
    background-color: lavender;
    font-family: Arial;
}

h1 {
    color: purple;
    text-align: center;
}</code></pre>

            <h3>Formas de utilizar CSS</h3>
            <ul>
                <li><b>En línea:</b> dentro de una etiqueta HTML.</li>
                <li><b>Interno:</b> dentro de la etiqueta style.</li>
                <li><b>Externo:</b> en un archivo CSS separado.</li>
            </ul>

            <h3>Importancia</h3>
            <p>CSS hace que las páginas web sean atractivas, ordenadas y fáciles de utilizar.</p>

            <div class="actividad">
                <h3>Actividad</h3>
                <p>¿Qué propiedad cambia el color del texto?</p>
                <button onclick="revisar(this, 'color')">color</button>
                <button onclick="revisar(this, 'margin')">margin</button>
                <button onclick="revisar(this, 'padding')">padding</button>
                <p class="resultado"></p>
            </div>
        </div>
    `,

    JavaScript: `
        <div class="contenido-tarjeta">
            <h3>¿Qué es JavaScript?</h3>
            <p>JavaScript es un lenguaje de programación que permite agregar interactividad y funciones a las páginas web.</p>

            <h3>¿Para qué sirve?</h3>
            <p>Permite crear botones interactivos, mostrar mensajes, validar formularios y modificar contenido.</p>

            <h3>Características</h3>
            <ul>
                <li>Responde a las acciones del usuario.</li>
                <li>Permite modificar elementos HTML.</li>
                <li>Puede trabajar con eventos como los clics.</li>
                <li>Se utiliza junto con HTML y CSS.</li>
            </ul>

            <h3>Elementos principales</h3>
            <ul>
                <li><b>let:</b> declara una variable.</li>
                <li><b>const:</b> declara una constante.</li>
                <li><b>function:</b> crea funciones.</li>
                <li><b>if:</b> establece condiciones.</li>
                <li><b>alert():</b> muestra mensajes.</li>
                <li><b>console.log():</b> muestra información.</li>
                <li><b>onclick:</b> ejecuta una acción al hacer clic.</li>
            </ul>

            <h3>Ejemplo de código</h3>
            <pre><code>function saludar() {
    alert("Hola, bienvenido");
}</code></pre>

            <h3>Ejemplo de botón</h3>
            <pre><code>&lt;button onclick="saludar()"&gt;
    Presióname
&lt;/button&gt;</code></pre>

            <h3>Importancia</h3>
            <p>JavaScript permite que las páginas web sean interactivas y respondan a las acciones de las personas.</p>

            <div class="actividad">
                <h3>Actividad</h3>
                <p>¿Qué palabra permite crear una función?</p>
                <button onclick="revisar(this, 'function')">function</button>
                <button onclick="revisar(this, 'style')">style</button>
                <button onclick="revisar(this, 'body')">body</button>
                <p class="resultado"></p>
            </div>
        </div>
    `,

    SQL: `
        <div class="contenido-tarjeta">
            <h3>¿Qué es SQL?</h3>
            <p>SQL significa Structured Query Language (Lenguaje de Consulta Estructurada). Es un lenguaje utilizado para trabajar con bases de datos relacionales.</p>

            <h3>¿Para qué sirve?</h3>
            <p>Permite crear tablas, guardar información, consultar datos, modificarlos y eliminarlos.</p>

            <h3>Características</h3>
            <ul>
                <li>Organiza información en tablas.</li>
                <li>Permite consultar registros.</li>
                <li>Facilita la modificación de datos.</li>
                <li>Permite relacionar diferentes tablas.</li>
            </ul>

            <h3>Comandos principales</h3>
            <ul>
                <li><b>CREATE:</b> crea tablas.</li>
                <li><b>INSERT INTO:</b> agrega registros.</li>
                <li><b>SELECT:</b> consulta información.</li>
                <li><b>UPDATE:</b> modifica registros.</li>
                <li><b>DELETE:</b> elimina registros.</li>
                <li><b>WHERE:</b> establece condiciones.</li>
                <li><b>ORDER BY:</b> ordena resultados.</li>
                <li><b>JOIN:</b> relaciona tablas.</li>
            </ul>

            <h3>Ejemplo para crear una tabla</h3>
            <pre><code>CREATE TABLE alumnos (
    id INTEGER PRIMARY KEY,
    nombre TEXT,
    grupo TEXT
);</code></pre>

            <h3>Ejemplo para insertar información</h3>
            <pre><code>INSERT INTO alumnos
(nombre, grupo)
VALUES
('Camila', '306');</code></pre>

            <h3>Ejemplo para consultar información</h3>
            <pre><code>SELECT * FROM alumnos;</code></pre>

            <h3>Importancia</h3>
            <p>SQL permite almacenar y administrar información de forma organizada, por ejemplo, los datos de alumnos, libros o productos.</p>

            <div class="actividad">
                <h3>Actividad</h3>
                <p>¿Qué comando se utiliza para consultar información?</p>
                <button onclick="revisar(this, 'SELECT')">SELECT</button>
                <button onclick="revisar(this, 'DELETE')">DELETE</button>
                <button onclick="revisar(this, 'CREATE')">CREATE</button>
                <p class="resultado"></p>
            </div>
        </div>
    `
};


// FUNCIONES DE NAVEGACION

function comenzar() {
    document.getElementById("portada").classList.add("oculto");
    document.getElementById("menu").classList.remove("oculto");
    document.getElementById("informacion").classList.add("oculto");
    window.scrollTo(0, 0);
}

function mostrarTema(nombre) {
    const contenido = informacion[nombre];

    if (!contenido) {
        alert("No se encontró la información de este tema.");
        return;
    }

    document.getElementById("portada").classList.add("oculto");
    document.getElementById("menu").classList.add("oculto");
    document.getElementById("informacion").classList.remove("oculto");

    document.getElementById("titulo-tema").textContent = nombre;
    document.getElementById("contenido-tema").innerHTML = contenido;

    window.scrollTo(0, 0);
}

function volverMenu() {
    document.getElementById("informacion").classList.add("oculto");
    document.getElementById("menu").classList.remove("oculto");
    window.scrollTo(0, 0);
}

function volverPortada() {
    document.getElementById("portada").classList.remove("oculto");
    document.getElementById("menu").classList.add("oculto");
    document.getElementById("informacion").classList.add("oculto");
    window.scrollTo(0, 0);
}


// FUNCION PARA LAS ACTIVIDADES

function revisar(boton, respuestaCorrecta) {
    const actividad = boton.closest(".actividad");
    const resultado = actividad.querySelector(".resultado");
    const botones = actividad.querySelectorAll("button");

    botones.forEach(function(b) {
        b.disabled = true;
    });

    if (boton.textContent.trim() === respuestaCorrecta) {
        resultado.textContent = "¡Correcto! Muy bien.";
        resultado.style.color = "green";
    } else {
        resultado.textContent =
            "Respuesta incorrecta. La respuesta correcta es: " + respuestaCorrecta;
        resultado.style.color = "red";
    }
}
