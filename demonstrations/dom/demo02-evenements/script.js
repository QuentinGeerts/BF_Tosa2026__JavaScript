window.addEventListener("DOMContentLoaded", () => {

  const products = [
    {
      id: "c3a4412d-bd3e-4510-a6b5-80d75d8126dc",
      name: "Clavier mécanique rétroéclairé",
      price: 218.26,
      image: "https://tse4.mm.bing.net/th?id=OIP.zyGwi00UJ1svK5A4ahBPKgHaHa&pid=Api"
    },
    {
      id: "e8b73364-f77b-4758-b319-639c620be144",
      name: "Écouteurs sans fil",
      price: 264.53,
      image: "https://tse3.mm.bing.net/th?id=OIP.sJFcvCmFwScdC5rEXgBGQQHaHa&pid=Api"
    },
    {
      id: "a391d590-a765-421c-8288-41a628b26321",
      name: "Chaise ergonomique de bureau",
      price: 275.55,
      image: "https://tse4.mm.bing.net/th?id=OIP.333q5cjh6T17_OsBVR26WQHaHY&pid=Api"
    },
    {
      id: "358f6c6c-49f6-4f1c-822e-40d771e39a75",
      name: "Chargeur sans fil rapide",
      price: 159.5,
      image: "https://tse4.mm.bing.net/th?id=OIP.m_3HAS_jIeFP8GsgbrWmnAHaH0&pid=Api"
    },
    {
      id: "cc3ba870-41e4-4f09-8e35-a59f4f58e29d",
      name: "Sac à dos antivol",
      price: 89.15,
      image: "https://tse3.mm.bing.net/th?id=OIP.1K0i11C1SZMuNBPMRG81bwHaHe&pid=Api"
    },
    {
      id: "8aa86484-76ac-476d-bb78-d6cc2fe11837",
      name: "Montre connectée fitness",
      price: 242.4,
      image: "https://tse3.mm.bing.net/th?id=OIP.FM5nR9Se_V_dg9GlrjIe0QHaHr&pid=Api"
    },
    {
      id: "9b6aa54e-2ec0-4d8a-8162-98f50d7fd303",
      name: "Hub USB-C multifonction",
      price: 72.8,
      image: "https://tse4.mm.bing.net/th?id=OIP.L9utxli572cGfonDoip3ywHaJk&pid=Api"
    },
  ];

  const catalogue = document.getElementById("catalogue");
  const btnProductCreate = document.getElementById("btn-product-create");

  const search = document.getElementById("search");

  // Utiliser key... dans le cas où vous voulez utiliser les touches CTRL, ALT, ...
  // search.addEventListener("keyup", () => {
  //   console.log("Touche relâchée");
  // })

  search.addEventListener("keydown", (e) => {
    // if (e.key != "Enter") return;
    console.log("Touche appuyée:", e.key);
  })

  // search.addEventListener("keypress", () => {
  //   console.log("Touche pressée");
  // })

  // Utiliser input quand vous voulez utiliser uniquement les caractères
  search.addEventListener("input", (e) => {
    // console.log('e :>> ', e);
    // console.log("Input:", e.data);
    console.log('e.target.value :>> ', e.target.value);
    initCatalog(productFilter(e.target.value));
  })
  
  btnProductCreate.addEventListener("click", () => {
    const newProduct = handleForm();
    products.push(newProduct);
    catalogue.append(createCard(newProduct));
  });

  window.addEventListener("contextmenu", (e) => {
    e.preventDefault();
  })

  window.addEventListener("cut", (e) => {
    e.preventDefault();
  });

  window.addEventListener("copy", (e) => {
    e.preventDefault();
    console.log("Tu as voulu copié:",
      window.getSelection().toString()
    );
  });

  initCatalog(products);
  
  function initCatalog (products) {
    catalogue.textContent = "";
    if (products.length > 0) {
      for (const product of products) {
        catalogue.append(createCard(product))
      }
    }
    else {
      // ... 
    }
  }

  function createCard (product) {
    const productDiv = document.createElement("div");
    productDiv.classList.add("product");
    productDiv.id = product.id;
  
    const productImage = productDiv.appendChild(document.createElement("div"));
    productImage.classList.add("product-image");
  
    const image = productImage.appendChild(document.createElement("img"));
    image.src = product.image;
    image.alt = product.name;
  
    const productName = productDiv.appendChild(document.createElement("p"));
    productName.classList.add("product-name");
    productName.textContent = product.name;
  
    const productPrice = productDiv.appendChild(document.createElement("p"));
    productPrice.classList.add("product-price");
    productPrice.textContent = " €";
  
    const price = productPrice.insertAdjacentElement("afterbegin", document.createElement("span"));
    price.textContent = product.price;
    price.classList.add("price");

    // Ajout d'un evenement en survol
    productDiv.addEventListener("mouseenter", highlight);
    productDiv.addEventListener("mouseleave", highlight);
    
    return productDiv;
  }
  
  function handleForm() {
    const productName = document.getElementById("product-name");
    const productPrice = document.getElementById("product-price");
    const productImage = document.getElementById("product-image");  
    
    const newProduct = {
      id: crypto.randomUUID(),
      name: productName.value,
      price: productPrice.value,
      image: productImage.value
    };

    console.log("newProduct:", newProduct);

    return newProduct;
  }

  function highlight(event) {
    // console.log('event :>> ', event);
    // console.log('this :>> ', this);
    // event.target.classList.add('highlight')
    this.classList.toggle('highlight')
  }

  function productFilter(productName) {
    return products.filter(p => p.name.toLowerCase().includes(productName.toLowerCase()));
  }
});
