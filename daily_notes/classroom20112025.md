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
