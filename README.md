# E-Commerce_LuisAndresMartinezBerraquero
# Primer commit

<!-- 
1 LOGIN => POST
http://localhost:3977/api/v1/usuario/login
{
    "Movil": "123456789",
    "Clave": "12345"
}

2 INSERTAR USUARIO => POST
http://localhost:3977/api/v1/usuario
{
    "Nombres": "PRS01",
    "Movil":"987654321",
    "Clave":"12345",
    "Email":"PRS01@GMAIL.COM",
    "Perfil":"6027b80f2e553fccaeb5560f",
    "UsuCrea":"6027f66a57ce93d65b089614"
}

3 Listar Perfiles => GET
http://localhost:3977/api/v1/perfil
Headers:
Authorization: token......

4 UPDATE USUARIO => PUT
http://localhost:3977/api/v1/usuario
Headers:
Authorization: token......
{
    "Nombres": "PRS03",
    "Movil":"987654323",
    "Clave":"11111",
    "Email":"PRS03@GMAIL.COM",
    "Perfil":"6027b80f2e553fccaeb5560f",
    "UsuActualiza":"6027f66a57ce93d65b089614"
}

5 INS Usuario => POST
http://localhost:3977/api/v1/producto
Headers:
Authorization: token......
{
    "Titulo": "Teclado",
    "Descripcion": "Teclado Marca Logitech",
    "Precio": 55,
    "Categoria":  "61ca84ae8278676464bf627c",
    "Vendedor":"61caecd1fee8ee46ec8837c7",
    "Vendido": 1,
    "UsuCrea":"6027f66a57ce93d65b089614"
}
6 DEL Producto => DEL
http://localhost:3977/api/v1/producto/61ca8d3c6be0a40585ca8228/6027f66a57ce93d65b089614
Headers:
Authorization: token......

7 UPD Producto => PUT
Headers:
Authorization: token......
{
    "Titulo": "Teclado PRSS02",
    "Descripcion": "Teclado Marca Logitech PRS02",
    "Precio": 85,
    "Categoria":  "61ca84ae8278676464bf627c",
    "Vendedor":"61caecd1fee8ee46ec8837c7",
    "Vendido": 2,
    "UsuActualiza":"6027f66a57ce93d65b089614"
}


8 List Productos => GET
http://localhost:3977/api/v1/producto
Headers:
Authorization: token......

9 Listo Productos Filtrados x +Vendidos | Precio | Titulo | Descripcion
http://localhost:3977/api/v1/producto/true/ / / 
http://localhost:3977/api/v1/producto/true/85/ / 
http://localhost:3977/api/v1/producto/true/ /tecla/ 
http://localhost:3977/api/v1/producto/true/ / /logi
http://localhost:3977/api/v1/producto/true/85/Teclado/Teclado
Headers:
Authorization: token......

10 List Productos by Vendedor => GET
http://localhost:3977/api/v1/producto/vendedor/61caecd1fee8ee46ec8837c7
Headers:
Authorization: token......

11 List Productos by Categoria => GET
http://localhost:3977/api/v1/producto/categoria/61ca84ae8278676464bf627c
Headers:
Authorization: token......

12 List Categorias => GET
http://localhost:3977/api/v1/categoria
Headers:
Authorization: token......

13 Ins Compra => INS
http://localhost:3977/api/v1/factura
Headers:
Authorization: token......
{
    "Serie": "003",
    "Cliente": "61cbece4254c73a56e26b051",
    "Direccion": "Calle Maestro Alonso 3",
    "NIF": "1111111A",
    "BaseImponible": 152.89,
    "IVA": 32.11,
    "Total": 185,
    "Detalle": [
        {
            "Producto": "61ca882b8278676464bf627f",
            "Cantidad": 3,
            "PrecioUnitario": 15,
            "PrecioTotal": 45
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

TOKEN: eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjYxYzliOGE5MTE3ZDRhMDA4OTFjYmQyYSIsIm5vbWJyZXMiOiJQUlMwMSIsIm1vdmlsIjoiOTg3NjU0MzIxIiwiZW1haWwiOiJwcnMwMUBnbWFpbC5jb20iLCJpYXQiOjE2NDA2MDk5NjEsImV4cCI6MTY0MDY5NjM2MX0.pex8v74AP7Fm0QhGpD21QXvPJxe82C5k4M0ZWgaTDyw
-->