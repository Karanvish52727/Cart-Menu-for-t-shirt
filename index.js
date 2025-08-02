document.addEventListener('DOMContentLoaded', () => {
  const swatches = document.querySelectorAll('.swatch');
  const productImage = document.getElementById('mainImage');
  const productPrice = document.getElementById('product-price');

  swatches.forEach(swatch => {
    //Make the click and function Active in Data And price
    swatch.addEventListener('click', () => {
      const newImage = swatch.getAttribute('data-image');
      const newPrice = swatch.getAttribute('data-price');

      //to Fetch the original price and Image in current time 
      productImage.src = newImage;
      productPrice.textContent = newPrice;

      // Update and Remove the actice class
      swatches.forEach(s => s.classList.remove('active'));

      //update and make the active Class 
      swatch.classList.add('active');
    });
  });
});
