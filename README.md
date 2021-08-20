# Verduleria

# Clonar el proyecto

```
git clone git@github.com:NilsonKr/Verduleria-interview.git

cd Verduleria-interview
```

# Correr el proyecto

Primero que todo se debe instalar dependencias

Ejecutando

```
yarn install
npm installl
```

## Levantar servidor API

```
yarn server
yarn server:dev

o

npm run server
npm run server:dev

```

### La api estara disponible en `http://localhost:3000`

## Correr Front end

```
yarn dev

o

npm run dev
```

### La aplicacion estara disponible en `http://localhost:8080`

# Extras

El proyecto utiliza una bases de datos remota proveida por https://remotemysql.com/, sin embargo en la carpeta `api/schema/` podra encontrar el archivo sql para montar la base de datos

Ademas utiliza webpack como empaquetador para correr el frontend y algunas imagenes SVG tomadas de https://www.flaticon.com/
