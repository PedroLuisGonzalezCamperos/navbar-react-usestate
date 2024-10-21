const products = [
    {
        id: "1",
        name: "Laptop Acer Aspire",
        description: "Laptop Acer con 8GB de RAM y 256GB SSD.",
        price: 599.99,
        stock: 15,
        image: "/img/laptop-acer-aspire.jpg",
        category: "laptop"
    },
    {
        id: "2",
        name: "Laptop Dell XPS 13",
        description: "Laptop Dell con pantalla táctil y procesador Intel i7.",
        price: 1199.99,
        stock: 8,
        image: "/img/laptop-dell-xps.jpg",
        category: "laptop"
    },
    {
        id: "7",
        name: "Laptop HP Pavilion",
        description: "Laptop HP con procesador AMD Ryzen y 512GB SSD.",
        price: 749.99,
        stock: 18,
        image: "/img/laptop-hp-pavilion.jpg",
        category: "laptop"
    },
    {
        id: "3",
        name: "Router TP-Link Archer C6",
        description: "Router dual band con velocidad de hasta 1200Mbps.",
        price: 49.99,
        stock: 25,
        image: "/img/router-tplink-archer-c6.jpg",
        category: "routers"
    },
    {
        id: "4",
        name: "Router Netgear Nighthawk",
        description: "Router avanzado con WiFi 6 y cobertura amplia.",
        price: 199.99,
        stock: 10,
        image: "/img/router-netgear-nighthawk.jpg",
        category: "routers"
    },
    {
        id: "5",
        name: "Audífonos Sony WH-1000XM4",
        description: "Audífonos con cancelación de ruido y Bluetooth.",
        price: 349.99,
        stock: 20,
        image: "/img/AE-Audífonos-Sony-WH-1000XM4.jpg",
        category: "articulos electronicos"
    },
    {
        id: "6",
        name: "Smartwatch Apple Watch Series 6",
        description: "Smartwatch de Apple con monitoreo de salud y GPS.",
        price: 399.99,
        stock: 12,
        image: "/img/AE-Smartwatch-Apple-Watch-Series-6.jpg",
        category: "articulos electronicos"
    },

    {
        id: "10",
        name: "Teclado Mecánico Corsair K95",
        description: "Teclado mecánico con retroiluminación RGB.",
        price: 199.99,
        stock: 30,
        image: "/img/AE-Teclado-Mecánico-Corsair-K95.jpg",
        category: "articulos electronicos"
    },
    {
        id: "11",
        name: "Monitor Samsung 4K",
        description: "Monitor de 27 pulgadas con resolución 4K UHD.",
        price: 299.99,
        stock: 10,
        image: "/img/AE-Monitor-Samsung-4K.jpg",
        category: "articulos electronicos"
    },
 
    {
        id: "8",
        name: "PC Gaming Alienware Aurora",
        description: "PC Gaming con procesador Intel i9 y gráfica RTX 3080.",
        price: 2499.99,
        stock: 5,
        image: "/img/PC-PC-Gaming-Alienware-Aurora.jpg",
        category: "PC"
    },
    {
        id: "9",
        name: "PC HP Envy Desktop",
        description: "PC HP para uso doméstico y profesional.",
        price: 999.99,
        stock: 7,
        image: "/img/PC-PC-HP-Envy-Desktop.jpg",
        category: "PC"
    },
   
    {
        id: "12",
        name: "PC Lenovo ThinkCentre",
        description: "PC de escritorio Lenovo con procesador Intel i5.",
        price: 699.99,
        stock: 12,
        image: "/img/PC-PC-HP-Envy-Desktop.jpg",
        category: "PC"
    }
];

//Obtener productos
const getProducts = () => {
    return new Promise((resolve, reject) => {
      //Simulamos un retraso de red
      setTimeout( ()=>{
        resolve(products)
      }, 2000 )
    })
  }
  
  export { getProducts } //export nombrado porque estamos expontando un objeto

