const products = [{
  image : 'images/athletic-cotton-socks-6-pairs.jpg',
  name : 'Black and Gray Athletic Cotton Socks - 6 Pairs',
  rating:{
    stars : 4.5,
    count : 87
  },
  priceCents : 1090
},{
  image : 'images/intermediate-composite-basketball.jpg' ,
  name : 'Intermediate Size Basketball',
  rating : {
    stars : 4,
    count : 127
  },
  priceCents : 2095
},{
  image : 'images/adults-plain-cotton-tshirt-2-pack-teal.jpg',
  name : 'Adults Plain Cotton T-Shirt - 2 Pack',
  rating : {
    stars : 4.5,
    count : 56
  },
  priceCents : 799
},{
  image : 'images/black-2-slot-toaster.jpg',
  name : '  2 Slot Toaster - Black',
  rating :{
    stars : 5.0,
    count : 37
  },
  priceCents : 2067
},{
  image : 'images/6-piece-white-dinner-plate-set.jpg',
  name : '6 Piece White Dinner Plate Set',
  rating :{
    stars : 4,
    count : 37
  },
  priceCents : 2067
},{
  image : 'images/coffeemaker-with-glass-carafe-black.jpg',
  name : '   Coffeemaker with Glass Carafe and Reusable Filter',
  rating : {
    stars : 4.5,
    count : 1211
  },
  priceCents : 2250
}];

let productHTML = '' ;

products.forEach((product) =>{
  productHTML = productHTML +`
  <div class="product-container">
  <div class="product-image-container">
    <img src="${product.image}"
         class="product-image">
  </div>
  <div class="product-text">
    ${product.name}
  </div>
  <div class="product-star-container">
    <img src="images/rating-${product.rating.stars *10}.png"
         class="product-star">
         <div class="product-count-star">
          ${product.rating.count}
         </div>
  </div>
  <div class="product-price">
      $${(product.priceCents /100).toFixed(2)}
  </div>
  <div class="product-select">
    <select>
      <option selected value="1">1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
      <option>6</option>
      <option>7</option>
      <option>8</option>
      <option>9</option>
    </select>
  </div>
  <div class="product-spacer">

  </div>
  <div class="add-to-cart">
    <img src="images/checkmark.png ">
         Added
  </div>
  <button class="product-button-add js-add-button"
  data-product-name ="${product.name}">
    Add to cart
  </button>
</div>
`;

},);

document.querySelector('.js-product-grid').innerHTML = productHTML;

document.querySelectorAll('.js-add-button').forEach((button) =>{
  button.addEventListener('click' , () =>{
      const productName = button.dataset.productName;
      cart.push({
        productName : productName,
        quantity : 1
      });
      console.log(cart);
  });
});

