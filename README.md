# Equipo Michelle Navia - Cristian Olivares

App Mini ToDo con Rutas

- Se crearon rutas con React Router para las distintas paginas
- Formulario para ingreso de tareas
- Tabla renderización de tareas
- Manejo de localStorage
- UseEffect

## Compotentes
- Task
- NewTask
## Páginas
 - Home
 - NewTask
 - Task
 

 # Laboratorio 6 – Mini Todo con Docker

## Imagen publicada en Docker Hub

Repositorio público en Docker Hub:  
https://hub.docker.com/r/criss205/mini-todo-con-rutas

### Comando para descargar la imagen

```bash
docker pull criss205/mini-todo-con-rutas:mn
```

## Repositorio público en GitHub

Repositorio del código fuente del laboratorio:  
https://github.com/Criss205/lab6-mini-todo-docker

---

## Script automático para build y push

En el archivo package.json se agregó el siguiente script para automatizar el proceso de construir y publicar la imagen:

```json
"docker:publish": "docker build -t laboratorio-6:mn . && docker tag laboratorio-6:mn criss205/mini-todo-con-rutas:mn && docker push criss205/mini-todo-con-rutas:mn"
```
