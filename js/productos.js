if (!localStorage.getItem("logged")) 
{                                        
    window.location.replace("../index.html");
};
  const catalogo =  //Declaración de objetos
  [{
      id:1,
      marca:'Samsung',
      modelo:'QLED Q60T 55" HD',
      imagen:'../img/SamsungQ60T.jpg',
      descripcion:'QLED y Dual LED. Procesador de imagen Quantum Processor Lite. Panel de 60 Hz . Sistema operativo Tizen. Procesador Quad Core. Asistentes de voz integrados: Alexa, Bixby y Google (próxima actualización). Mando con control por voz incluido. Ambient Mode. Sintonizador de satélite. Conexiones: 3 HDMI, 2 USB, 1 entrada de video compuesto, 1 salida de audio óptica. Pulgadas 55',
      precio: 250000
    },
  {
      id:2,
      marca:'LG',
      modelo:'QLED OLED CX 65" HD',
      imagen:'../img/TVLG65.jpg',
      descripcion:'QLED y Dual LED. Procesador de imagen Quantum Processor Lite. Panel de 60 Hz . Sistema operativo Tizen. Procesador Quad Core. Asistentes de voz integrados: Alexa, Bixby y Google (próxima actualización). Mando con control por voz incluido. Ambient Mode. Sintonizador de satélite. Conexiones: 3 HDMI, 2 USB, 1 entrada de video compuesto, 1 salida de audio óptica. Pulgadas 55',
      precio: 400000
    },
  {
      id:3,
      marca:'Sony',
      modelo:'QLED BRAVIA XR 75"',
      imagen:'../img/Sony QLED BRAVIA XR 75.jpg',
      descripcion:'QLED y Dual LED. Procesador de imagen Quantum Processor Lite. Panel de 60 Hz . Sistema operativo Tizen. Procesador Quad Core. Asistentes de voz integrados: Alexa, Bixby y Google (próxima actualización). Mando con control por voz incluido. Ambient Mode. Sintonizador de satélite. Conexiones: 3 HDMI, 2 USB, 1 entrada de video compuesto, 1 salida de audio óptica. Pulgadas 55',
      precio: 700000
    },
  {
      id:4,
      marca:'Hisense',
      modelo:'U8QF 65"',
      imagen:'../img/Hisense U8QF 65.png',
      descripcion:'QLED y Dual LED. Procesador de imagen Quantum Processor Lite. Panel de 60 Hz . Sistema operativo Tizen. Procesador Quad Core. Asistentes de voz integrados: Alexa, Bixby y Google (próxima actualización). Mando con control por voz incluido. Ambient Mode. Sintonizador de satélite. Conexiones: 3 HDMI, 2 USB, 1 entrada de video compuesto, 1 salida de audio óptica. Pulgadas 55',
      precio: 200000
    },
  {
      id:5,
      marca:'Philips',
      modelo:'50PUD7406/77 50"',
      imagen:'../img/Philips 50PUD74067750.png',
      descripcion:'QLED y Dual LED. Procesador de imagen Quantum Processor Lite. Panel de 60 Hz . Sistema operativo Tizen. Procesador Quad Core. Asistentes de voz integrados: Alexa, Bixby y Google (próxima actualización). Mando con control por voz incluido. Ambient Mode. Sintonizador de satélite. Conexiones: 3 HDMI, 2 USB, 1 entrada de video compuesto, 1 salida de audio óptica. Pulgadas 55',
      precio: 120000
    },
  {
      id:6,
      marca:'Lenovo',
      modelo:'Legion 5 Pro',
      imagen:'../img/LENOVO-Legion-5-15IMH05H-1-2.jpg',
      descripcion:'Procesador: Intel Core i5. Gpu: NVIDIA® GeForce RTX™ 3060 6GB. Memoria RAM:16GB ,disco: SSD 512GB. Pantalla de 16 pulgadas',
      precio: 450000
  },
  {
      id:7,
      marca:'Aiwa',
      modelo:'CA141-C-W11H',
      imagen:'../img/D_NQ_NP_2X_714285-MLA52451122836_112022-F.jpg',
      descripcion:'Procesador: Intel Celeron. Gpu: Gráfica Integrada. Memoria RAM: 4GB. Disco: SSD 128GB. Pantalla de 14 pulgadas',
      precio: 90000
  },
  {
      id:8,
      marca:'Asus',
      modelo:'FA506IHRB-HN083W',
      imagen:'../img/FA506IHRB-HN083W.jpg',
      descripcion:'Procesador: AMD Ryzen 5. GPU: Nvidia Geforce GTX 1650. Memoria RAM: 16GB. Disco: SSD 512GB. Pantalla de 15 pulgadas',
      precio: 320000
  },
  {
      id:9,
      marca:'Dell',
      modelo:'Inspiron 15 I3511 TJ13D',
      imagen:'../img/D_NQ_NP_2X_915641-MLA54275191236_032023-F.jpg',
      descripcion:'Procesador: Intel Core i3. GPU: Gráfica Integrada. Memoria RAM: 16GB. Disco: SSD 256GB. Pantalla de 15 pulgadas',
      precio: 180000
  },
  {
      id:10,
      marca:'HP',
      modelo:'GAMER OMEN 16-B0507LA',
      imagen:'../img/hero-final-resena-omen16-ar.jpg',
      descripcion:'Procesador: Intel Core i5. GPU: NVIDIA® GeForce RTX™ 3050 6GB. Memoria RAM: 8GB. Disco: SSD 512GB. Pantalla de 16 pulgadas',
      precio: 450000
  },
  {
      id:11,
      marca:'Nintendo Switch',
      modelo:'OLED',
      imagen:'../img/oled-model-photo-01.jpg',
      descripcion:'Almacenamiento: 64GB',
      precio: 260000,
  },
  {
      id:12,
      marca:'PlayStation',
      modelo:'4',
      imagen:'../img/play4.jpg',
      descripcion:' Almacenamiento: "500GB',
      precio: 180000
  },
  {
      id:13,
      marca:'PlayStation',
      modelo:'5',
      imagen:'../img/play5.jpg',
      descripcion:'Almacenamiento: 825GB',
      precio: 300000
  },
  {
      id:14,
      marca:'Xbox ',
      modelo:'Series S',
      imagen:'../img/0b2854b9-a7e7-47dd-b4f8-a371567854b2.png',
      descripcion:'Almacenamiento: 65GB',
      precio: 165000
  },
  {
      id:15,
      marca:'Xbox',
      modelo:'Series X',
      imagen:'../img/fbd2cb56-5c25-414d-9f46-e6a164cdf5be.png',
      descripcion:'Almacenamiento: 1TB',
      precio: 270000
  }];
  //Creación de HTML desde JS usando los objetos antes mencionados
 
  let contenedorProductos = document.querySelector('#contenedorProductos');
  for(const producto of catalogo)
  {
    let Producto = document.createElement('div');
    Producto.className = 'producto';
    Producto.id =  `${producto.id}`;
    Producto.innerHTML = `<h4 class="cardheader">${producto.marca}: ${producto.modelo}</h4>
    <img src="${producto.imagen}" class="ImgProducto">
    <div class="card-body">
        <p class="card-text">${producto.descripcion}</p>
        <span class="resaltado" id="precio">$ ${producto.precio}</span>
      </div>
      <div class="card-footer">
          <a href="../paginas/calculodecuotas.html"  target="_blank" class="btncuotas">Calcular cuotas</a>
      </div>`;
      contenedorProductos.append(Producto)  
  };


const logoutbttn = document.querySelector("#logoutbttn");
logoutbttn.addEventListener("click", () => {localStorage.removeItem("logged"); window.location.href = "/index.html";});
