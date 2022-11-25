![HenryLogo](https://d31uz8lwfmyn8g.cloudfront.net/Assets/logo-henry-white-lg.png)

# Individual Project - Henry Dogs

<img height="200" src="./dog.png" />

Aplicación en la cual se puede ver distintas razas de perro junto con información relevante de las mismas utilizando la api externa [the dog api](https://thedogapi.com/) y a partir de ella se puede, entre otras cosas:

- Buscar perros
- Filtrarlos / Ordenarlos
- Agregar nuevos perros

#### Tecnologías utilizadas

- [ ] React
- [ ] Redux
- [ ] Express
- [ ] Sequelize - Postgres

## Frontend

Aplicación de React/Redux que contiene las siguientes pantallas/rutas.

__Pagina inicial__: landing page con

- [ ] Imagen de fondo representativa
- [ ] Botón para ingresar al home (`Ruta principal`)

__Ruta principal__: contiene

- [ ] Input de búsqueda para encontrar razas de perros por nombre
- [ ] Área donde se verá el listado de razas de perros. Deberá mostrar su:
  - Imagen
  - Nombre
  - Temperamento
  - Peso
- [ ] Botones/Opciones para filtrar por:
  - Grupo
  - Temperamento
  - Raza existente (es decir las que vienen de la API) o agregada por nosotros (creadas mediante el form)
- [ ] Botones/Opciones para ordenar tanto ascendentemente como descendentemente las razas de perro por:
  - Orden alfabético
  - Peso
- [ ] Paginado para ir buscando y mostrando las siguientes razas, mostrando 8 razas por página.

__Ruta de detalle de raza de perro__: contiene

- [ ] Los campos mostrados en la ruta principal para cada raza (imagen, nombre y temperamento)
- [ ] Altura
- [ ] Peso
- [ ] Años de vida

__Ruta de creación de raza de perro__: contiene

- [ ] Un formulario __controlado con JavaScript__ con los siguientes campos:
  - Nombre
  - Altura (Diferenciar entre altura mínima y máxima)
  - Peso (Diferenciar entre peso mínimo y máximo)
  - Años de vida
- [ ] Posibilidad de seleccionar/agregar uno o más temperamentos
- [ ] Botón/Opción para crear una nueva raza de perro

> Formulario de creación esta validado con JavaScript y no sólo con validaciones HTML. 

## Base de datos

El modelo de la base de datos tiene las siguientes entidades :

- [ ] Raza con las siguientes propiedades:
  - ID *
  - Nombre *
  - Altura *
  - Peso *
  - Años de vida
- [ ] Temperamento con las siguientes propiedades:
  - ID
  - Nombre

## Backend

Servidor en Node/Express con las siguientes rutas:

- [ ] __GET /dogs__:
  - Obtiene un listado de las razas de perro
  - Devuelve solo los datos necesarios para la ruta principal
- [ ] __GET /dogs?name="..."__:
  - Obtiene un listado de las razas de perro que contengan la palabra ingresada como query parameter
  - Si no existe ninguna raza de perro muestra un mensaje adecuado
- [ ] __GET /dogs/{idRaza}__:
  - Obtiene el detalle de una raza de perro en particular
  - Trae solo los datos pedidos en la ruta de detalle de raza de perro
  - Incluye los temperamentos asociados
- [ ] __POST /dogs__:
  - Recibe los datos recolectados desde el formulario controlado de la ruta de creación de raza de perro por body
  - Crea una raza de perro en la base de datos relacionada con sus temperamentos
- [ ] __GET /temperaments__:
  - Obtiene todos los temperamentos posibles
  - En una primera instancia  los obtiene desde la API externa y guarda en la base de datos y luego ya los utiliza desde allí
