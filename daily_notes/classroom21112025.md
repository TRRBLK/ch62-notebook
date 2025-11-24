##LINUX ESTA EN TU CASA
Busca un dispositivo inteligente que tengas cerca:
- Smart TV
- Android Smartphone
- Steam Deck
- etc

Steam OS es el sistema operativo de la Steam Deck, una distribución de Linux. 
Nuestros módems también usan Linux junto a BusyBox

#El dinero en codigo abierto
¿Como hacen las empresas y desarrolladores para generar dinero con Open 
Source?

Se gana vendiendo servicios, soporte, hardware especializado y donaciones o 
inversión para continuar desarrollando.

#SERVIDORES
El primer servidor web de la historia es una computadora que no debe apagarse. 
El CERN.

Veamos un software que depende de ellos, WORDPRESS.

What's WORDPRESS?

A software yo build our own website and publish it in the net
CMS CONTENT MANAGEMENT SYSTEM
30% of internet
It is free
Thousand of developers work on it contributing to make it better
it has thousands of themes and styles.
More than 55k plugins.

How does it works?
It takes what you need to make your website personalized and tweak the code 
for you

You can upload your page but can't do many things and ca be shut down 
any time.

if you make a self-hosted website, it doesn't has the cons that usually 
free publishing does.

#La pila de Software LAMP
Para que WordPress funcione, necesita una pila de software trabajando en 
conjunto, la más famosa es LAMP.

LINUX APACHE (servidor web) MYSQL (base de datos) PHP/PERL/PYTHON (cont. 
dinamico)

Pensemos que un servidor es como un vehiculo de reparto.

Los servidores son computadoras con un chasis llamado RACK para apilarlo uno 
sobre otro.

Tiene ventiladores grandes y ruidosos, la refrigeración es prioritaria.

Doble fuente de poder. Si una falla, la otra puede seguir funcionando.

Se administran a distancia. Normalmente no tienen perifericos conectados.

Podemos convertir una computadora casera en un servidor.

Crea una carpeta nueva, ponemos index.html con hola mundo.

Abre el archivo en VSC. Le damos en Open with Live Server.

Tanto Live Server como APACHE/NGINX escuchan peticiones y sirven archivos.

Live Server
- Uso principal: Desarrollo y pruebas locales
- Rendimiento: Basico para un solo usuario
- Funcion: Servir archivos estaticos
- Analogia: Una bicicleta de reparto, pefecta para un mandado en la calle

APACHE/NGINX
- Sitios web en produccion (internet)
- Seguridad, gestion de trafico, balanceo de carga entre multiples servidores 
y distribucion de peticiones para que todos los servidores tengan la misma 
carga de trabajo.
- Una flota de camiones de reparto.

#Terminal (CLI)
Los servidores no tienen perifericos. La forma de conversar con los 
servidores es por la Interfaz de Linea de Comandos (CLI) tambien conocida 
como la Terminal.

Sus ventajas es que es precisa y potente. Usa solo el teclado para escribir 
los comandos. Es muy eficiente y rapida. Ideal para automatizar tareas y 
administrar servidores.

#Maquina Virtual 
Elastic Computer Cloud (EC2) es un servicio AWS que te permite alquilar una 
computadora virtual en la nube.

Puedes elegir su potencia, memoria, etc pagando solo por lo que se usa y el 
tiempo

Amazon Linux es una distro. Optimizada para funcionar en el entorno de AWS, 
ofreciendo alto rendimiento y seguridad. Es como la marca de la casa de Linux 
para la nube de Amazon.

#Conexion segura a EC2 con SSH y llave PEM
Usamos un par de llaves criptograficas para conectarnos a un servidor EC2

La llave .pem es nuestra llave privada y secreta. El servidor de AWS tiene 
la cerradura pública. Solo la llave privada puede abrirla. 

- Permisos de llave privada: la .pem debe ser privada. SSH no dejara 
conectarse si tus permisos son demasiados abiertos.

chmod 400 "ruta de llave .pem"

4 significa leer, 0, escribir para modificar, 0 ejecutar nadie puede 
ejecutarla.

En Reinvent AWS podemos alquilar los servicios. Vamos a la pagina, nos 
registramos y en RED Y SEGURIDAD EN PARES DE CLAVES, podemos generar 
la instancia .pem con nuestra llave privada.

Para más detalles: 
https://aws.amazon.com/es/education/awseducate/

Hay que rentar el servidor más cercano donde hostear para disminuir la 
latencia. Hay que escoger dos regiones para establecer el enlace.

Se va generar un grupo de seguridad en varias instancias. Haciendo una 
analogia, en un fraccionamiento todas pueden tener camaras de seguridad. 
Los inquilinos pueden usar la casa que quieran. 

A esto se le llama <Politicas de Seguridad>

Tienen IPs publicas para poder conectarse. Cada instancia es una puerta 
donde se procesan las peticiones.

Hicimos un ejercicio usando los comandos
* COMPLETAR CON SEGUNDA TERMINAL

APACHE HHTP
Poderoso y flexible, Arquitectura basada en modulos le permite hacer casi 
cualquier cosa.

APACHE VS NGINX
Vamos a desplegar una página estática (Deploy)

Enfoquemonos en entender el proceso.

Vamos a instalar el servidor web Apache (httpd) en la distro Amazon Linux

Iniciar un servidor de Apache en Amazon Linux

Creamos un index.html simple.

Deploy: Mover el archivo html al directorio web correcto para que Apache 
pueda encontrarlo y servirlo.

Verificación: Comprobar que nuestra pagina web es visible en un navegador 
usando la IP publica del servidor.

* COMPLETAR CON GIT BASH

#AUTO APRENDIZAJE (AUTODIDACTA)
Es la habilidad que nos permite a aprender a aprender, y desarrollar nuevas 
habilidades y conocimientos que nos permiten mejorar varios aspectos de 
nuestras vidas. Esbozas tu propio camino de aprendizaje y pones tus 
propias metas.


- REALIZAR ENTREGABLE

#COMUNICACION NO VIOLENTA
Hay que diferenciar de los hechos observables e interpretaciones. Es violencia 
cuando: 

- Cohersion en vez de negociacion.
- Juicios morales.
- Critica no constructiva.
- Manipulación.
- Exigencias.
- Uso de la posición de poder.
- "Humor" sexista.
- No contestar tus preguntas.
- Criticar tu persona.
- Ignorar
- Responsabilidades debajo de las capacidades.
- Exponer errores en publico.
- Aislamiento.
- Grupos laborales por error.
- invadir espacio personal.

#Rutas no violentas de comunicacion.
OBSERVACIONES SENTIMIENTOS NECESIDADES PROPUESTAS

Primero, hay que ser responsables de nuestros sentimientos y no atacar a 
la persona que nos provocó el sentir. Ser concientes de nosotros mismos 
nos permiten actuar más acorde a la situación y no ser reactivos.

Identifiquemos las necesidades de los involucrados. Pueden ser variadas.

Haremos ahora peticiones especificas:
- Estarías dispuesto a...
- Podrías...

Cuando ocurre <hecho> me siento <de esta manera> y lo que necesito <esto> 
así que te propongo que...

Expandir nuestro vocabulario respecto a nuestros sentimientos ayuda 
a tener un enfoque y formar estrategias de interaccion. Más detalles en: 
https://docs.google.com/document/d/1JrD_ibXf3omv6C0JnTP3mLgATrXOgPbhDy1DWx0X7So/edit?tab=t.0
