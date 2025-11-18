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
