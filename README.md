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
    "Vendido": 2,
    "UsuActualiza":"6027f66a57ce93d65b089614"
}


8 List Productos => GET
http://localhost:3977/api/v1/producto
Headers:
Authorization: token......

11 List Productos by Categoria => GET
http://localhost:3977/api/v1/producto/61ca84ae8278676464bf627c
Headers:
Authorization: token......

12 List Categorias => GET
http://localhost:3977/api/v1/categoria
Headers:
Authorization: token......

TOKEN: eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjYxYzliOGE5MTE3ZDRhMDA4OTFjYmQyYSIsIm5vbWJyZXMiOiJQUlMwMSIsIm1vdmlsIjoiOTg3NjU0MzIxIiwiZW1haWwiOiJwcnMwMUBnbWFpbC5jb20iLCJpYXQiOjE2NDA2MDk5NjEsImV4cCI6MTY0MDY5NjM2MX0.pex8v74AP7Fm0QhGpD21QXvPJxe82C5k4M0ZWgaTDyw
-->