const params = new URLSearchParams(window.location.search);

const paramId = params.get('id');

document.addEventListener('DOMContentLoaded', async ()=>{
    const res = await fetch ('../db.json');
    const data = await res.json();
    const product = data.menu.find((item)=> item.id == paramId);
    renderPage(product);
});
const outlet = document.getElementById('outlet');

function renderPage(product){
    outlet.innerHTML =  `
    <!-- ÜST KISIM -->
    <div class="d-flex justify-content-between fs-5">
      <a href="/">
        <img width="40px" src="/images/home.png" />
      </a>

      <p>anasayfa / ${
        product.category
      } / ${product.title.toLowerCase()}</p>
    </div>

    <!-- İÇERİK KISMI -->
    <h1 class="text-center my-3">${product.title}</h1>

    <img
      src="${product.img}"
      class="rounded object-fit-cover shadow"
      alt="oreo"
    />

    <h3 class="mt-4">
      <span>Ürünün Kategorisi:</span>
      <span class="text-success">${product.category}</span>
    </h3>

    <h3 class="mt-4">
      <span>Ürünün Fiyatı:</span>
      <span class="text-success">${(product.price * 30).toFixed(
        2
      )} ₺</span>
    </h3>

    <p class="lead">
      ${product.desc}
    </p>    
  `;
}