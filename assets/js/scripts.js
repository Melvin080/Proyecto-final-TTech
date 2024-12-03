//DOM
document.addEventListener('DOMContentLoaded', () => { 
    // Variables
    const baseDeDatos = [
        {
            id: 1,
            nombre: 'Betta Azul delta',
            precio: 10000,
            imagen: 'https://img.freepik.com/foto-gratis/hermoso-colorido-peces-betta-siameses_1150-9450.jpg?t=st=1733200316~exp=1733203916~hmac=f5ce5d2ffbad05390e145e71076790c1115177f55a01861aabf0bb72456cbc57&w=740',
            categoria: 'peces'
        },
        {
            id: 2,
            nombre: 'Betta Azul-Blanco delta',
            precio: 10000,
            imagen: 'https://img.freepik.com/foto-gratis/hermoso-colorido-peces-betta-siameses_1150-9280.jpg?t=st=1733200367~exp=1733203967~hmac=a85995b272977b6753996189520135ad08e227ef3b1fa19c7df75fe2ac806134&w=740',
            categoria: 'peces'
        },
        {
            id: 3,
            nombre: 'Betta Rojo delta',
            precio: 10000,
            imagen: 'https://img.freepik.com/foto-gratis/hermoso-colorido-peces-betta-siameses_1150-9256.jpg?t=st=1733200430~exp=1733204030~hmac=b427b79a3cb66e70cbe36ee8a78af284b5a914b9b084a42652d7b42a57827bd4&w=740',
            categoria: 'peces'
        },
        {
            id: 4,
            nombre: 'Betta siames',
            precio: 60000,
            imagen: 'https://img.freepik.com/foto-gratis/hermoso-colorido-peces-betta-siameses_1150-9467.jpg?t=st=1733200492~exp=1733204092~hmac=6be5bfd9f75d9c53abd6db7523d139e3488c858cc489d3e7b78f18ecebf73ae4&w=740',
            categoria: 'peces'
        },
        {
            id: 5,
            nombre: 'Betta Blaco delta',
            precio: 60000,
            imagen: 'https://img.freepik.com/foto-gratis/blanco-halfmoon-betta-fish_1357-199.jpg?t=st=1733200584~exp=1733204184~hmac=ee43b7ff401362bcc9df6abe92924fcc830ee1d78c31a37bd06639a81f8aa243&w=740',
            categoria: 'peces'
        },
        {
            id: 6,
            nombre: 'Disco Azul',
            precio: 100000,
            imagen: 'https://img.freepik.com/fotos-premium/primer-plano-peces-que-nadan-acuario_1048944-9863687.jpg?w=740',
            categoria: 'peces'
        },
        {
            id: 7,
            nombre: 'Flower Horn',
            precio: 500000,
            imagen: 'https://img.freepik.com/fotos-premium/primer-plano-peces-que-nadan-mar_1048944-7054301.jpg?w=740',
            categoria: 'peces'
        },
        {
            id: 8,
            nombre: 'Gamba Neocaridina orange unidad',
            precio: 10000,
            imagen: 'https://www.fishipedia.es/wp-content/uploads/2017/10/Neocaridina-davidi-orange-Sakura-725x483.jpg',
            categoria: 'peces'
        },
        {
            id: 9,
            nombre: 'Caracol manzana',
            precio: 10000,
            imagen: 'https://www.zooplus.es/magazine/wp-content/uploads/2022/08/Caracoles-manzana.jpg',
            categoria: 'peces'
        },
        {
            id: 10,
            nombre: 'Ambulia',
            precio: 2000,
            imagen: 'https://www.acuariosrtules.top/wp-content/uploads/2022/05/Limnophila-sessiliflora.jpg',
            categoria: 'plantas'
        },
        {
            id: 11,
            nombre: 'Cola de zorro',
            precio: 2000,
            imagen: 'https://www.acuariosrtules.top/wp-content/uploads/2022/05/cola-de-zorro.jpg',
            categoria: 'plantas'
        },
        {
            id: 12,
            nombre: 'Musgo de java',
            precio: 2000,
            imagen: 'https://www.acuariosrtules.top/wp-content/uploads/2020/05/musgo-de-java-gambario.jpg',
            categoria: 'plantas'
        },
        {
            id: 13,
            nombre: 'Anubia',
            precio: 5000,
            imagen: 'https://www.acuariosrtules.top/wp-content/uploads/2022/05/anubia-barteri.jpg',
            categoria: 'plantas'
        },
        {
            id: 14,
            nombre: 'Alimento en hojuelas',
            precio: 20000,
            imagen: 'https://verdecora.es/blog/wp-content/uploads/2019/06/comida-peces-acuario-alimento-seco.jpg.webp',
            categoria: 'alimento'
        },
        {
            id: 15,
            nombre: 'Alimento de Fondo',
            precio: 10000,
            imagen: 'https://verdecora.es/blog/wp-content/uploads/2019/06/comida-peces-acuario-necesidades.jpg.webp',
            categoria: 'alimento'
        },
        {
            id: 16,
            nombre: 'Pecera redonda',
            precio: 30000,
            imagen: 'https://img.freepik.com/fotos-premium/pecera-redonda-peces-colores_251317-2431.jpg?w=740',
            categoria: 'acuarios'
        },
        {
            id: 17,
            nombre: 'Pecera cubo acrilica',
            precio: 60000,
            imagen: 'https://img.freepik.com/fotos-premium/acuario-mascotas-hobby-casa-decoracion-diseno-pecera_42957-3795.jpg?w=740',
            categoria: 'acuarios'
        },
        {
            id: 18,
            nombre: 'Arena de silice blanca 1k',
            precio: 60000,
            imagen: 'https://img.freepik.com/fotos-premium/textura-sal-marina-patron-natural-fondo_508659-5834.jpg?w=740',
            categoria: 'sustratos'
        },
        {
            id: 19,
            nombre: 'Arena de silice marron 1k',
            precio: 60000,
            imagen: 'https://img.freepik.com/fotos-premium/fondo-textura-azucar-morena_49683-62.jpg?w=740',
            categoria: 'sustratos'
        },
        {
            id: 20,
            nombre: 'Gravilla marrón 1k',
            precio: 60000,
            imagen: 'https://img.freepik.com/foto-gratis/vista-alto-angulo-trigo-sarraceno-que-sale-cubo-tela-saco-horizontal_176474-2319.jpg?t=st=1733202287~exp=1733205887~hmac=d1a79d247d9bc4253e1cb080e89b3c4d46757e00c55bcb330f9b7249e67656c9&w=740',
            categoria: 'sustratos'
        },
        {
            id: 21,
            nombre: 'Filtro',
            precio: 50000,
            imagen: 'https://www.acuariosrtules.top/wp-content/uploads/2020/08/filtro-interno-para-acuario-con-burbujas.jpg',
            categoria: 'herramientas'
        },
        {
            id: 22,
            nombre: 'Rama para acuarios',
            precio: 40000,
            imagen: 'https://img.freepik.com/fotos-premium/corales-acuario_38678-4185.jpg?w=740',
            categoria: 'decoracion'
        },
    ];

    let carrito = [];
    const divisa = '$';
    const DOMitems = document.querySelector('#items');
    const DOMcarrito = document.querySelector('#carrito');
    const DOMtotal = document.querySelector('#total');
    const DOMbotonVaciar = document.querySelector('#boton-vaciar');
    const miLocalStorage = window.localStorage;
    const filtroSelect = document.getElementById("filtro");

    // Funciones

    function renderizarProductos() {
        DOMitems.innerHTML = "";

        const filtro = filtroSelect.value;
        const productosFiltrados = baseDeDatos.filter(producto => 
            filtro === "todas" || producto.categoria === filtro
        );

        productosFiltrados.forEach((info) => {
            const miNodo = document.createElement('div');
            miNodo.classList.add('card', 'col-sm-4');
            
            const miNodoCardBody = document.createElement('div');
            miNodoCardBody.classList.add('card-body');
            
            const miNodoTitle = document.createElement('h6');
            miNodoTitle.classList.add('card-title');
            miNodoTitle.textContent = info.nombre;
            
            const miNodoImagen = document.createElement('img');
            miNodoImagen.classList.add('img-fluid');
            miNodoImagen.setAttribute('src', info.imagen);
            
            const miNodoPrecio = document.createElement('p');
            miNodoPrecio.classList.add('card-text');
            miNodoPrecio.textContent = `${info.precio}${divisa}`;
            
            const miNodoBoton = document.createElement('button');
            miNodoBoton.classList.add('btn', 'btn-primary');
            miNodoBoton.textContent = 'Agregar';
            miNodoBoton.setAttribute('marcador', info.id);
            miNodoBoton.addEventListener('click', anadirProductoAlCarrito);

            miNodoCardBody.appendChild(miNodoImagen);
            miNodoCardBody.appendChild(miNodoTitle);
            miNodoCardBody.appendChild(miNodoPrecio);
            miNodoCardBody.appendChild(miNodoBoton);
            miNodo.appendChild(miNodoCardBody);
            DOMitems.appendChild(miNodo);
        });
    }

    // Obtén el contador del almacenamiento local
    let visitas = localStorage.getItem('contadorVisitas');

    // Si no hay visitas almacenadas, inicializa a 0
    if (!visitas) {
        visitas = 0;
    }

    // Incrementa el contador
    visitas++;

    // Guarda el nuevo contador en el almacenamiento local
    localStorage.setItem('contadorVisitas', visitas);

    // Muestra el contador en la página
    document.getElementById('contador').textContent = visitas;

    function anadirProductoAlCarrito(evento) {
        carrito.push(evento.target.getAttribute('marcador'));
        renderizarCarrito();
        guardarCarritoEnLocalStorage();
        handleCarritoValue(carrito.length);
    }

    function handleCarritoValue(value) {
        const carritoContainer = document.getElementById("carrito-value");
        carritoContainer.textContent = `${value}`;
    }

    function renderizarCarrito() {
        DOMcarrito.textContent = '';
        const carritoSinDuplicados = [...new Set(carrito)];

        carritoSinDuplicados.forEach((item) => {
            const miItem = baseDeDatos.filter((itemBaseDatos) => {
                return itemBaseDatos.id === parseInt(item);
            });

            const numeroUnidadesItem = carrito.reduce((total, itemId) => {
                return itemId === item ? total += 1 : total;
            }, 0);

            const miNodo = document.createElement('li');
            miNodo.classList.add('list-group-item', 'text-right', 'mx-2');
            miNodo.textContent = `${numeroUnidadesItem} x ${miItem[0].nombre} - ${miItem[0].precio}${divisa}`;
            
            const miBoton = document.createElement('button');
            miBoton.classList.add('btn', 'btn-danger', 'mx-5');
            miBoton.textContent = 'X';
            miBoton.style.marginLeft = '1rem';
            miBoton.dataset.item = item;
            miBoton.addEventListener('click', borrarItemCarrito);
            
            miNodo.appendChild(miBoton);
            DOMcarrito.appendChild(miNodo);
        });
        DOMtotal.textContent = calcularTotal();
    }

    function borrarItemCarrito(evento) {
        const id = evento.target.dataset.item;
        carrito = carrito.filter((carritoId) => {
            return carritoId !== id;
        });
        renderizarCarrito();
        guardarCarritoEnLocalStorage();
        handleCarritoValue(carrito.length);
    }

    function calcularTotal() {
        return carrito.reduce((total, item) => {
            const miItem = baseDeDatos.filter((itemBaseDatos) => {
                return itemBaseDatos.id === parseInt(item);
            });
            return total + miItem[0].precio;
        }, 0).toFixed(2);
    }

    function vaciarCarrito() {
        carrito = [];
        renderizarCarrito();
        localStorage.clear();
    }

    function guardarCarritoEnLocalStorage() {
        miLocalStorage.setItem('carrito', JSON.stringify(carrito));
    }

    function cargarCarritoDeLocalStorage() {
        if (miLocalStorage.getItem('carrito') !== null) {
            carrito = JSON.parse(miLocalStorage.getItem('carrito'));
            handleCarritoValue(carrito.length);
        }
    }

    // Eventos
    DOMbotonVaciar.addEventListener('click', vaciarCarrito);
    filtroSelect.addEventListener('change', renderizarProductos);

    // Inicio
    cargarCarritoDeLocalStorage();
    renderizarProductos();
    renderizarCarrito();
});