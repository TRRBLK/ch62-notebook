##INTERACTUANDO CON APIs WEB
9:56
Que es una API y su importancia. 

Application Programming Interface (Interfaz de Programación de Aplicaciones) 

Conjunto de reglas y protocolos para comunicación entre aplicaciones. Permite 
exponer datos y funcionalidades.

Actúa como una capa de conexión (como un mesero que toma tu "solicitud" y te 
trae lo que ordenaste como "respuesta" sin que necesites saber como funciona 
la cocina "sistema interno").

El front-end es la parte estetica de la aplicación, pero el proceso interno 
se accede mediante APIs para ir generando respuestas de acuerdo a la 
interacción del usuario en la web.

Una interfaz es un puente que facilita la comunicación e intercambio entre 
dos partes.

#API como contrato y ejemplo practico
Los APIs abstraen la complejidad. No necesita saber cómo un sistema 
calcula un dato, solo necesita saber como pedirlo. 

La documentación de una API funciona como un contrato: "Si me envias 
una solicitud con esta estructura especifica, yo me comprometo a responderte 
de esta manera"

Por ejemplo el automovil, si se enciende el foco que señala el aceite, 
alertando al usuario y en el manual aparece que significa segun el color del 
foco.

En aplicaciones como KAYAK, obtienen precios de vuelos casi al instante sin 
acceder a aerolineas. Utilizan una API que les devuelve el resultado sin 
indagar que metodo de ordenamiento utilizar, simplemente te da el resultado.

#TIPOS POPULARES DE WEB APIs: SOAP y REST
SOAP (Protocolo Simple de Acceso a Objetos): 
- Un protocolo muy estricto y estandar.
- Utiliza XML para estructurar datos.
- rigido y verboso.

REST (Transferencia de estado Representacional):
- Un conjunto de principios de arquitectura.
- Utiliza JSON para datos. Más ligero y más fácil de leer.
- API RESTful. Muy popular.

Las respuestas de JSON empiezan con corchetes y dentro del mismo se conoce 
como arreglo, y cada objeto va separado por ;

* CONOCER JSON Y SINTAXIS

#cURL
Es una herramienta de linea de comandos...
- COMPLETAR

#UX/UI
Los desarrolladores de Front-End tienen la tarea de interpretar los datos 
obtenidos y estilizarlos para mostrarlos al usuario final. UX corresponde 
a User eXperience, y UI a User Interface.

Vimos ejemplo de una API que en el siguiente enlace: 
https://api.open-meteo.com/v1/forecast?latitude=25.679&longitude=-100.283&current_weather=true

/*PRACTICA*/
Hemos utilizado en Git Bash el comando curl "enlace" y agregamos 
&current_weather=true para ver la temperatura actual.

nota: agregar -k para ignorar el certificado SSL/TLS de Windows
se añade | json_pp (formato REST para ver la informacion e imprimirla)

Se recomienda aprender a utilizar JSON y usarlo en nuestras aplicaciones

Pasos para consumir una API en código
- Importar una libreria para hacer peticiones HTTP (requests en Python, 
HttpClient en Java, fetch en JavaScript).

- Realizar una petición GET a la URL de la API.
- Recibir la respuesta JSON como una cadena de texto
- Parsear o deserializar
* POR TERMINAR

#PREGUNTAS DE API
- Beneficios de API
- Que utilidad tienen
- Que APIs se te ocurren que exista

#FUNCION SINCRONA
Se ejecuta una función primero y después otra, y asincrona significa que las 
funciones se ejecutan al mismo tiempo.


Al posicionar el cursor sobre el código aparece un atributo llamado Promise. 
coloquemos <await> para que la función permanezca esperando hasta que se cumpla 
una condición.

Para convertir funciones en funciones asincronas usamos <async>

#DESARROLLO DE UNA API DE CLIMA
onclick invoca funciones propias de JavaScript. Vimos como hacer referencias 
y tomar elementos del html para trabajarlo en JS y mostrarlo nuevamente en 
html mediante punteros y referencias.

#LINUX
#QUE ES UN SISTEMA OPERATIVO
Intermediario entre el hardware y el usuario.
Ejecuta programas
Gestiona recursos para optimo rendimiento.

Entre ellos está macOS, Windows, Android.

Imagina que los programas debían saber cómo hablar con cada pieza de 
hardware directamente. Se tenia que modelar impresora, pantalla o ratón.

#Ventajas
Solo necesita que funcione en el OS, y el OS se encarga del resto.

Para los fabricantes, crear hardware compatible con OS es más facil y 
funcionará muy bien con multiples programas.

Se puede realizar multitarea, interfaz grafica y optimizacion.

#El kernel, corazón de todo sistema operativo.
Parte central, puente de comunicación entre el software y el hardware.

#LINUX
Es un kernel, creado en 1991 como un nucleo libre y abierto que 
revolucionó el software.

#Distribuciones de linux
Es lo que convierte a linux en OS. Combina el nucleo con software adicional. 
Incluye gestores de paquetes, entornos de escritorio y herramientas.

Las distribuciones facilitan la instalación y gestión del sistema. 

Ejemplos serían: Ubuntu, Fedora y Debian. Se recomienda empezar por Ubuntu o 
Debian.

#Motores y coches
Linux es como el motor de un coche. Pero no hace nada sin ninguna otra parte 
mecanica. Una distribución otorga estos atributos como el chasis, las ruedas, 
el volante, etc.

Y la versatilidad del motor puede hacerse un coche deportivo, sedán o lo que 
se requiera.

OS: admin. general de la computadora.

Kernel: nucleo del OS que comunica soft y hard

Distribución: combinación del kernel Linux ocn otras herramientas para 
crear un OS completo y usable.

#El misterio de Linux

¿A quien pertenece Linux?

Cuando "compras" software, compras una LICENCIA. No puedes copiarlo, 
modificarlo, revenderlo y se conoce como privativo o cerrado.

El codigo abierto usa una licencia especial que da libertad de:
- Estudiar, viendo el codigo fuente completo y aprender como funciona.
- Modificar, adaptando el codigo a tus necesidades.
-POR TERMINAR

Miles de personas desarrollan Linux, cada contribuidor es dueño de una 
pequeña parte, al hacerlo, acepta la licencia de código abierto, 
beneficiandose todos.

Empresas como Google, Samsung, se benefician.

#INSTALACION DE SOFTWARE
Las distribuciones están listas usando paquetes y repositorios ya revisados 
listos para su instalación con un solo clic.

En linux, para descargar software, se encuentra en el Gestor de Software, 
o a partir de la Terminal.

La herramienta más potente de Linux. Permite instalar, actualizar y eliminar 
software con comandos precisos.

Cada distribucion usa su familia de comandos.

#NGINX
Es un servidor web de alto rendimiento. Su principal función es recibir las 
peteciones de los visitante y entregar el contenido en un sitio web de forma 
segura y eficiente. Usada por Netflix, Airbnb y Dropbox.

Para actualizar lista de software, en APT se usan comandos distintos.


#COMUNICACION
Eciste comunicación verbal fuerte y debil, además de no verbal. Hay que 
trabajar esta habilidad para poder comunicarnos de manera correcta y 
efectiva para la mutua colaboración sin generar conflictos o malos 
entendidos, y formentando la colaboración para llegar juntos a un resultado.


