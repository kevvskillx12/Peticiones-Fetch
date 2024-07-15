document.getElementById('botonBuscar').addEventListener('click', function() {
    const query = document.getElementById('buscarProducto').value; 
    const url = `https://api.mercadolibre.com/sites/MLA/search?q=${query}`; 

    fetch(url) 
        .then(response => response.json()) 
        .then(data => {
            const listaProductos = document.getElementById('listaProductos');
            listaProductos.innerHTML = '';
      
            data.results.forEach(producto => {
                const productoTarjeta = `
                    <div class="columnas">
                        <div class="cart">
                            <img src="${producto.thumbnail}" class="carta" alt="${producto.title}">
                            <div class="bodycar">
                                <h5 class="cartatitulo">${producto.title}</h5>
                                <p class="textocar">$${producto.price}</p>
                                <a href="${producto.permalink}" target="_blank" class="botonprimario">Ver Producto</a>
                            </div>
                        </div>
                    </div>
                `;
                listaProductos.insertAdjacentHTML('beforeend', productoTarjeta); 
            });
        })
        .catch(error => console.error('Error:', error)); 
});
