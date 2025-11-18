Entrevistas tecnicas son como conversaciones donde vas explicando cada 
una de tus acciones

#Diferencia entre Git y GitHub
Git es la herramienta para control de versiones de nuestros proyectos, y
GitHub es un espacio en internet para subir nuestros repositorios de Git.

#Como generar el repositorio vinculado a GitHub
Con git init inicializamos el repositorio, on git remote add origin 
"liga SSH o HTTP del repositorio creado en GitHub"
y con git push origin main o git push -u origin main para establecer un 
seguimiento mutuo entre ramas.

#Qué repositorio tengo
Usamos git remote -v para verificar nuestros repositorios vinculados

#Cómo descargar nuestros u otros repositorios
vamos a ejecutar git clone y lo traemos al repositorio local

#Cómo quitar repositorio
rm -r .git

#11:06 Como agregar colaboradores
En Settings > Collaborators podemos añadir a miembros de GitHub para que 
puedan trabajar en el repositorio asignado. Y con fork hacemos una copia
del repositorio para trabajarlo.

En sync fork podemos dar seguimiento a los cambios realizados en el
repositorio.

##CONTROL DE FLUJO 12:12
Que es control de flujo y como se puede manipular usando bucles e if

#Control de flujo
Es el orden en que se ejecutan las instrucciones.

Puede manipularse para ejecutar de manera condicional y repetitiva.

Bifurcación mediante if y repeticion mediante bucle for y while.

Utilizamos comparaciones lógicas para tomar decisiones en el control de
flujo.

#Operadores
Hay distintas asignaciones entre operadores, las mas importantes son:

#= y ==
El primero es asignar un valor a una variable, opera de derecha a izquierda.

== es un operador de igualda, compara entre variables o clases si son
iguales o no, segun lo que el lenguaje considere igual.

# operador modulo %
Obtiene el residuo de una division.

#Comparaiciones
Son operaciones logicas que evalua la relación entre dos valores.

Se utiliza en estructuras if y bucles, para determinar y limitar que
bloque de codigo se ejecutara.

#Declaracion IF
Estructura de control de flujo fundamental. Permite ejecutar un bloque
de codigo para toma de decisiones si una condicion especifica es
verdadera.

Se usa comparaciones para determinar el valor de verdad.

la sintaxis en JavaScript es: if (condicion {
}

#PROGRAMA
Se generó un programa en el IDE de Edge al cual se llamó:
Diagrama_a_programa

#Else
Con else podemos encadenar varias condiciones, a lo que llamamos
condiciones anidadas.

#Bucles
Son estructuras para ordenar a la computadora que ejecute un bloque de 
código varias veces.

Bucle while es una forma de escribir iteraciones, ejecutará el mismo 
fragmento de código una y otra vez mientras la comparación sea 
verdadera.

Los bucles For se utilizan cuando tenemos una lista que recorrer y 
también facilita la iteración a través de otras estructuras de datos.


