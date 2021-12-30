# Reto Final. E-Commerce
PDF [aquí](https://firebasestorage.googleapis.com/v0/b/ecommerce-ebc59.appspot.com/o/Reto%20Final%20Backend%20E-Commerce%20-%20BTC%20Backend%20(1).pdf?alt=media&token=281498dc-75ba-4035-a0bc-9f7a943f718c)
## Tecnologías usadas:
* NodeJS
* Express
* Mongoose
* Git (Git-flow)

# Feature 1 : Gestión Usuario
* Validación por Token
* Endpoint de Login *(1)*
* Endpoint de Registro *(2)*
* Endpoint de Perfil (Datos de Usuario) *(3)*

### Extra points:
* Roles Administrador / Usuario / Vendedor
* Endpoints modificar datos de Usuario *(4)*

# Feature 2 : Gestión Product
* Endpoints añadir *(5)*, eliminar *(6)*, modificar producto (vendedor) *(7)*.
* Endpoint muestra all products *(8)*
* Endpoints productos filtro (más vendidos, precio, título…) *(9)*

### Extra points:
* Endpoint de productos por vendedor. *(10)*
* Endpoint de productos por categoría. *(11, 12)*

# Feature 3 : Gestión Compras
* Endpoint de añadir compra. *(13)*
* Endpoint muestra todas las compras. *(14)*
* Endpoint de compras por usuario. (modo factura) *(15)*

### Extra points:
* Endpoint modificación datos factura. (modificación hecha por el vendedor). *(16)*

## Al descargar el proyecto:
Para instalar las librerías:
```
npm i
```

## MongoDB - Tablas:
* categoria
* factura
* facturaDetalle
* perfil
* producto
* usuario
* vendedor
![](https://firebasestorage.googleapis.com/v0/b/ecommerce-ebc59.appspot.com/o/MongoDB.png?alt=media&token=19b744c2-7dca-4c2c-b6c3-ad7a303ffad0)

## Estructura del proyecto:
![](https://firebasestorage.googleapis.com/v0/b/ecommerce-ebc59.appspot.com/o/Estructura%20Code.png?alt=media&token=6511289e-9e0d-404e-938f-8434bd6a6ef1)

## Git-Flow:
* Se hicieron Commits por método terminado
* Se hicieron Push por Feature terminado
![](https://firebasestorage.googleapis.com/v0/b/ecommerce-ebc59.appspot.com/o/GitFlow.jpeg?alt=media&token=814fc64a-914f-4fcc-8104-3302114d1a18)




## POSTMAN:
Proyecto [aquí](https://firebasestorage.googleapis.com/v0/b/ecommerce-ebc59.appspot.com/o/Ecom.postman_collection.json?alt=media&token=3e8ae1e1-4183-4ef2-9faf-a330b9dd53e0)
* Endpoint de Login *(1)*
```
POST: http://localhost:3977/api/v1/usuario/login
{
    "Movil": "123456789",
    "Clave": "12345"
}
```

![](https://firebasestorage.googleapis.com/v0/b/ecommerce-ebc59.appspot.com/o/01.png?alt=media&token=a43b6500-d5d9-432c-bab0-6c4f58a0edbb)

* Endpoint de Registro *(2)*
```
POST: http://localhost:3977/api/v1/usuario
{
    "Nombres": "Usuario 05",
    "Movil":"222222225",
    "Clave":"12345",
    "Email":"PRS01u1@GMAIL.COM",
    "Perfil":"6027b80f2e553fccaeb5560d",
    "UsuCrea":"6027f66a57ce93d65b089614"
}
```

![](https://firebasestorage.googleapis.com/v0/b/ecommerce-ebc59.appspot.com/o/02.png?alt=media&token=3682fe8c-2dfd-42b3-bdcc-ca039883e7a9)

* Endpoint de Perfil (Datos de Usuario) *(3)*
```
GET: http://localhost:3977/api/v1/perfil
HEADER: Authorization: {{token}}
```
No token:
![](https://firebasestorage.googleapis.com/v0/b/ecommerce-ebc59.appspot.com/o/03%20No%20token.png?alt=media&token=9ae753a9-1352-4ede-aca0-9ff6ef0cef25)
Con token válido:
![](https://firebasestorage.googleapis.com/v0/b/ecommerce-ebc59.appspot.com/o/03.png?alt=media&token=29f341a3-4d94-445d-8074-0accb2589224)

* Endpoints modificar datos de Usuario *(4)*
```
PUT: http://localhost:3977/api/v1/usuario/61c9b8a9117d4a00891cbd2a
HEADER: Authorization: {{token}}
{
    "Nombres": "PRS03",
    "Movil":"987654323",
    "Clave":"11111",
    "Email":"PRS03@GMAIL.COM",
    "Perfil":"6027b80f2e553fccaeb5560f",
    "UsuActualiza":"6027f66a57ce93d65b089614"
}
```

![](https://firebasestorage.googleapis.com/v0/b/ecommerce-ebc59.appspot.com/o/04.png?alt=media&token=e868ee78-2d4c-418e-99c2-da83d2c8224a)
* Endpoints añadir *(5)*, eliminar *(6)*, modificar producto (vendedor) *(7)*.
```
Añadir (5)
POST: http://localhost:3977/api/v1/producto
HEADER: Authorization: {{token}}
{
    "Titulo": "Teclado inalámbrico",
    "Descripcion": "Teclado Marca Logitech",
    "Precio": 95,
    "Categoria":  "61ca84ae8278676464bf627c",
    "Vendedor":"61caecd1fee8ee46ec8837c8",
    "Vendido": 1,
    "UsuCrea":"6027f66a57ce93d65b089614"
}
```
![](https://firebasestorage.googleapis.com/v0/b/ecommerce-ebc59.appspot.com/o/05%20INS%20Producto.png?alt=media&token=bf9e193e-b2f0-40a8-82ae-9b900b42cc54)
```
Eliminar (6)
DELETE: http://localhost:3977/api/v1/producto/61cd2d10de24ef1935c059ca/6027f66a57ce93d65b089614
HEADER: Authorization: {{token}}
```
![](https://firebasestorage.googleapis.com/v0/b/ecommerce-ebc59.appspot.com/o/06%20DEL%20Producto.png?alt=media&token=2ce426e2-b5ba-4cd2-a4cf-7c3f86f4b47d)
```
Modificar (7)
PUT: http://localhost:3977/api/v1/producto/61cd2d10de24ef1935c059ca
HEADER: Authorization: {{token}}
{
    "Titulo": "Teclado Mecánico",
    "Descripcion": "Teclado Mecánico Marca Logitech PRS02",
    "Precio": 65,
    "Categoria":  "61ca84ae8278676464bf627c",
    "Vendedor":"61caecd1fee8ee46ec8837c7",    
    "Vendido": 2,
    "UsuActualiza":"6027f66a57ce93d65b089614"
}
```
![](https://firebasestorage.googleapis.com/v0/b/ecommerce-ebc59.appspot.com/o/07%20UPD%20Producto.png?alt=media&token=6dfc5ad4-d41a-40c9-97e4-c899bb37fd87)

* Endpoint muestra all products *(8)*

```
GET: http://localhost:3977/api/v1/producto
HEADER: Authorization: {{token}}
```
![](https://firebasestorage.googleapis.com/v0/b/ecommerce-ebc59.appspot.com/o/08%20LIST%20Producto.png?alt=media&token=d21e7767-57b8-4393-92b8-071e48223557)

* Endpoints productos filtro (más vendidos, precio, título…) *(9)*
```
GET: "http://localhost:3977/api/v1/producto/true/ /tecla/ "
HEADER: Authorization: {{token}}
```
![](https://firebasestorage.googleapis.com/v0/b/ecommerce-ebc59.appspot.com/o/09%20LIST%20Producto%20Filters.png?alt=media&token=baf68c85-2180-46c1-8a86-61f8251320a0)

* Endpoint de productos por vendedor. *(10)*
```
GET: http://localhost:3977/api/v1/producto/vendedor/61caecd1fee8ee46ec8837c8
HEADER: Authorization: {{token}}
```
![](https://firebasestorage.googleapis.com/v0/b/ecommerce-ebc59.appspot.com/o/10%20List%20Producto%20by%20Vendedor.png?alt=media&token=5e799fe8-c8f6-4bd9-a5b1-e41861a60fe0)

* Endpoint de productos por categoría. *(11, 12)*
```
Productos por categoría (11)
GET: http://localhost:3977/api/v1/categoria
HEADER: Authorization: {{token}}
```
![](https://firebasestorage.googleapis.com/v0/b/ecommerce-ebc59.appspot.com/o/11%20LIST%20Producto%20by%20Categoria.png?alt=media&token=feb65fc2-5906-4ded-a5e4-33abfb75eaba)

```
Lista de categorías (12)
GET: http://localhost:3977/api/v1/categoria
HEADER: Authorization: {{token}}
```
![](https://firebasestorage.googleapis.com/v0/b/ecommerce-ebc59.appspot.com/o/12%20LIST%20Categoria.png?alt=media&token=d795e1c1-647e-4e6c-9fa2-0c3a6a1fa929)

* Endpoint de añadir compra. *(13)*
```
POST: http://localhost:3977/api/v1/factura
HEADER: Authorization: {{token}}
{
    "Serie": "003",
    "Cliente": "61cc4f6f9de7e86d738728c5",
    "Direccion": "Calle Maestro Alonso 2",
    "NIF": "1111112A",
    "BaseImponible": 140.5,
    "IVA": 29.5,
    "Total": 170,
    "Detalle": [
        {
            "Producto": "61ca882b8278676464bf627f",
            "Cantidad": 2,
            "PrecioUnitario": 15,
            "PrecioTotal": 30
        },
        {
            "Producto": "61ca8d3c6be0a40585ca8228",
            "Cantidad": 1,
            "PrecioUnitario": 85,
            "PrecioTotal": 85
        },
        {
            "Producto": "61caf2131b13cbe694353c8e",
            "Cantidad": 1,
            "PrecioUnitario": 55,
            "PrecioTotal": 55
        }
    ]
}
```

![](https://firebasestorage.googleapis.com/v0/b/ecommerce-ebc59.appspot.com/o/13%20INS%20Factura.png?alt=media&token=22815ec9-6bac-49a7-820f-4e14e590aeea)
* Endpoint muestra todas las compras. *(14)*
```
GET: http://localhost:3977/api/v1/factura-detalle
HEADER: Authorization: {{token}}
```

![](https://firebasestorage.googleapis.com/v0/b/ecommerce-ebc59.appspot.com/o/14%20LIST%20Factura%20Detalle.png?alt=media&token=74c9fe50-ee34-4250-9b11-fda8762e4016)

* Endpoint de compras por usuario. (modo factura) *(15)*

```
GET: http://localhost:3977/api/v1/factura/61cc4f6f9de7e86d738728c5
HEADER: Authorization: {{token}}
```

![](https://firebasestorage.googleapis.com/v0/b/ecommerce-ebc59.appspot.com/o/15%20LIST%20Factura%20x%20Cliente.png?alt=media&token=72585729-714f-4121-8660-3919d2e05be3)

* Endpoint modificación datos factura. (modificación hecha por el vendedor). *(16)*
```
POST: http://localhost:3977/api/v1/factura
HEADER: Authorization: {{token}}
{
    "Id":"61cbf9e893cc91b0931db670",
    "Serie": "004",
    "Cliente": "61cbece4254c73a56e26b051",
    "Direccion": "Calle Maestro Alonso 3",
    "NIF": "1111111A",
    "BaseImponible": 152.89,
    "IVA": 32.11,
    "Total": 185,
    "Detalle": [
        {
            "Id":"61cbf9e993cc91b0931db672",
            "Producto": "61ca882b8278676464bf627f",
            "Cantidad": 3,
            "PrecioUnitario": 15,
            "PrecioTotal": 45,
            "Estado": true
        },
        {
            "Id":"61cbf9e993cc91b0931db674",
            "Producto": "61ca8d3c6be0a40585ca8228",
            "Cantidad": 1,
            "PrecioUnitario": 85,
            "PrecioTotal": 85,
            "Estado": true
        },
        {
            "Id":"61cbf9e993cc91b0931db676",
            "Producto": "61caf2131b13cbe694353c8e",
            "Cantidad": 1,
            "PrecioUnitario": 55,
            "PrecioTotal": 55,
            "Estado": true
        }
    ]
}
```

![](https://firebasestorage.googleapis.com/v0/b/ecommerce-ebc59.appspot.com/o/16%20Upd%20Factura%20-%20Factura%20Detalle.png?alt=media&token=f5b602af-9bf5-46bb-ab6e-171d101d7fe5)

