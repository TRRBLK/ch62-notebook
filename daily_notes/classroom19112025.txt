##LABORATORIO DE PROGRAMACION
Si le pedimos a la IA, puede hacerlo, pero se recomienda construir y aprendeŕ 
lógica de programación y explicar el código de manera detallada sin depender 
de la IA.

TIFC1-PF-2-3 Control de flujo: LAB FizzBuzz
https://generation.instructure.com/courses/4219/assignments/295457

Entregaremos mediante repositorio en GitHub el pequeño proyecto.

#FUNCIONES Y ALGORITMOS DE PROGRAMACION
Realizar operaciones aritmeticas basicas, escribiendo y llamando funciones 
en un programa.

#BODMAS
Brackets, Orders, Division, Multiplication, Adittion and Substraction. Es 
el orden en que se ejecutan las operaciones dentro de la programación. 

Ejemplo: 
result1 = 3 + 5 * 8 = 43
result2 = 12 - (6 / 3) = 12 - 2 = 10

#FUNCIONES
Conjunto de instrucciones agrupadas para lograr un resultado. Permite 
escribir un fragmento de codigo una sola vez sin necesidad de repetirlo 
en varias partes del programa, lo que permite reutilizarlo cuantas veces
se requiera.

Los valores pueden pasarse a una función como <argumentos>, permitiendo
realizar una acción, devolver valores u ambas cosas.

su sintaxis se sigue con el nombre reservado <function>
<nombre de la funcion>(<parametros separados por comas si es más de uno>) {
<cuerpo de la funcion donde se define mediante lineas de codigo lo que hace>	

}

Ejemplo:

function cuadratica(numero) {

return numero * numero

}

una funcion de un sola variable que permite calcular el cuadrado de un 
numero.

De hecho, si no tienen un parametro a evaluar, se considera como una 
función vacía que realiza solo acciones según se defina en su cuerpo.

#DIFERENCIA ENTRE IMPRIMIR CONSOLE.LOG Y RETURN
No son lo mismo, <console.log> muestra información en la consola y sirve 
para depurar él código, no devuelve ningún valor, la computadora olvida
este dato de inmediato.

El <return> devuelve el resultado para ser utilizado en otra parte del 
código. Se utiliza cuando necesitas guardar ese dato en una variable o 
usarlo en otras operaciones. La función termina en <return>.

la documentación se encuentra en el siguiente enlace: 
https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Functions

#PUNTOS IMPORTANTES
Puede tener el mismo nombre la variable global (fuera de una función) y 
la variable local (dentro de una función).

Puntos importantes: Evita usar lo más posible variables globales. 

Evita realizar funciones impuras, estas son aquellas que modifican el 
valor de una variables global.

#FUNCIONES INCORPORADAS (BUILT-IN)
Los lenguajes de programación tienen funciones incorporadas, por ejemplo
console.log().

Nos permiten acceder a las funciones más habituales sin necesidad de 
escribir código adicional.

No es necesario memorizarlas, solo comprobar si lo que se desea 
hacer se puede hacer con una función integrada. 

Documentación de console.log() se puede ver en el siguiente enlace: 
https://developer.mozilla.org/es/docs/Web/API/console/log_static

```bash
hay que leerlo
```

#BIBLIOTECAS
Son colección de código ya escrito que puede incluirse en un proyecto. 
Su programación es ḿodular. Nos ayuda a reducir tiempo y esfuerzo 
necesarios para resolver problemas que otros ya han resuelto.

El uso de funciones y bibliotecas integradas nos permiten utilizar 
código existente para obtener los resultados que deseamos.

Por ejemplo en JavaScript podemos utilizar la biblioteca Math para 
llamar funciones matemáticas específicas como Math.asinh(x) 

Se recomienda leer también la documentación de Objetos globales: 
https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects

#PROYECTO CALCULADORA
Vamos a crear una calculadora en dos partes generando un MVP (Minimo 
producto viable).

https://generation.instructure.com/courses/4219/assignments/295466

**MIS PENDIENTES**
- Checar por qué no me sirvió crear mi página de FizzBuzz en GitHub
- Crear mi repositorio y hacer commits para calculadora
	- Generar initial commit
	- Adaptar index.html
	- adaptar .js
	- subir proyecto
