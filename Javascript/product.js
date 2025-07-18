// product.js

const data = [
{
  id: "mailer",
  title: "Custom Mailer Boxes",
  image: "Images/Custom-box.png",
  hoverImage: "Images/Custom-box-hover.jpg",
  description: "Offer secure, stylish packaging for e-commerce and subscription products. Designed for durability and brand impact, they enhance presentation and protect contents during transit."
},
{
  id: "folding",
  title: "Folding Cartons",
  image: "Images/Custom-box-1.png",
  hoverImage: "Images/Custom-box-1-hover.webp",
  description: "Offer secure, stylish packaging for e-commerce and subscription products. Designed for durability and brand impact, they enhance presentation and protect contents during transit."
},
{
  id: "rigid",
  title: "Custom Rigid Boxes",
  image: "Images/Custom-box-2.jpg",
  hoverImage: "Images/Custom-box-2-hover.jpg",
  description: "Premium, sturdy packaging solutions ideal for luxury products. With a high-end finish and solid structure, they deliver an exceptional unboxing experience and strong brand presence."
},
{
  id: "shipping",
  title: "Custom Shipping Boxes",
  image: "Images/Custom-box-3.png",
  hoverImage: "Images/Custom-box-3-hover.png",
  description: "Shipper, or Regular Slotted Carton (RSC), is the perfect box for packaging and delivering bulky items."
},
{
  id: "gift",
  title: "Gift Boxes",
  image: "Images/Custom-box-4.webp",
  hoverImage: "Images/Custom-box-4-hover.webp",
  description: "Elegant and customizable packaging options perfect for special occasions, retail, or corporate gifting. They enhance presentation and add a touch of sophistication to any product."
},
{
  id: "eco-friendly",
  title: "Eco-Friendly Boxes",
  image: "Images/Custom-box-5.webp",
  hoverImage: "Images/Custom-box-5-hover.webp",
  description: "Sustainable packaging made from recycled materials, combining durability with an environmentally conscious design. Ideal for brands focused on green practices without compromising quality."
},
{
  id: "sleeve",
  title: "Sleeve Boxes",
  image: "Images/Custom-box-6.png",
  hoverImage: "Images/Custom-box-6-hover.jpeg",
  description: "Feature a sliding cover design that adds style and protection to your products. They’re perfect for enhancing brand presentation with a sleek, premium look."
},
{
  id: "bottle",
  title: "Bottle Boxes",
  image: "Images/Custom-box-8.jpg",
  hoverImage: "Images/Custom-box-8-hover.jpg",
  description: "Designed to securely hold and showcase bottles, making them ideal for beverages, cosmetics, or fragrances. They offer both protection and a premium presentation."
},
{
  id: "pillow",
  title: "Pillow Boxes",
  image: "Images/Custom-box-9.jpg",
  hoverImage: "Images/custom-box-9-hover.jpg",
  description: "Curved design that's perfect for small, lightweight items like gifts, accessories, or cosmetics. Compact and stylish, they offer a simple yet elegant packaging solution."
},
{
  id: "gable",
  title: "Gable Boxes",
  image: "Images/Custom-box-10.webp",
  hoverImage: "Images/Custom-box-10-hover.webp",
  description: "Portability with their built-in handle and unique shape. Ideal for food, gifts, or events, they offer both function and visual appeal in one compact design."
},
{
  id: "corrugated-trays",
  title: "Corrugated Trays",
  image: "Images/Custom-box-11.webp",
  hoverImage: "Images/Custom-box-11-hover.jpg",
  description: "Sturdy, open-top packaging solutions ideal for displaying or transporting multiple items. Lightweight yet strong, they’re perfect for retail shelves, storage, and shipping efficiency."
},
{
  id: "book",
  title: "Custom Book Boxes",
  image: "Images/Custom-box-12.jpg",
  hoverImage: "Images/Custom-box-12-hover.jpg",
  description: "Protective packaging designed to resemble books, perfect for gifting, keepsakes, or premium product presentation. They combine durability with a unique, stylish appeal."
},
{
  id: "burger",
  title: "Burger Boxes",
  image: "Images/Custom-box-13.png",
  hoverImage: "Images/Custom-box-13-hover.png",
  description: "Designed to keep your burgers fresh, secure, and visually appealing. Perfect for dine-in, takeout, or delivery, they offer durability, insulation, and custom branding options."
},
{
  id: "magnetic",
  title: "Magnetic Closure",
  image: "Images/Custom-box-14.jpg",
  hoverImage: "Images/Custom-box-14-hover.jpg",
  description: "Premium unboxing experience with their sleek design and secure magnetic flap. Ideal for luxury products and gifts, they combine elegance with functionality."
},
{
  id: "bakery",
  title: "Custom Bakery Boxes",
  image: "Images/Custom-box-15.jpg",
  hoverImage: "Images/Custom-box-15-hover.jpg",
  description: "Keep baked goods fresh, protected, and beautifully presented. Perfect for cakes, pastries, and treats, they offer both charm and functionality for bakeries and events."
},
{
  id: "cosmetic",
  title: "Cosmetic Boxes",
  image: "Images/Custom-box-16.png",
  hoverImage: "Images/Custom-box-16-hover.png",
  description: "Enhance your brand’s image while securely packaging skincare and beauty products. Sleek, durable, and fully customizable, they’re perfect for both retail display and gifting."
}

];

// Utility function for smooth fade-in animation
function fadeIn(element) {
  element.style.opacity = 0;
  element.style.transition = "opacity 0.5s ease-in-out";
  requestAnimationFrame(() => {
    element.style.opacity = 1;
  });
}

// Get product ID from URL query string
const params = new URLSearchParams(window.location.search);
const productId = params.get("id");

// Select container element
const container = document.getElementById("product-container");

// Find product by ID
const product = data.find(item => item.id === productId);

if (product) {
  container.innerHTML = `
    <article class="max-w-3xl mx-auto text-gray-900">
      <header class="mb-6">
        <h1 class="text-4xl font-extrabold mb-2">${product.title}</h1>
        <button id="back-btn" 
          class="inline-block mb-4 text-orange-500 hover:text-orange-600 font-semibold focus:outline-none focus:ring-2 focus:ring-orange-400 rounded transition"
          aria-label="Go back to homepage">
          ← Back to Home
        </button>
      </header>

      <section class="relative w-full h-80 rounded-lg overflow-hidden shadow-lg mb-8">
        <img 
          src="${product.image}" 
          alt="${product.title} Image" 
          class="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 opacity-100 group-hover:opacity-0" 
          loading="lazy"
          onerror="this.src='Images/placeholder.png'; this.alt='Image not available';"
        />
        <img 
          src="${product.hoverImage}" 
          alt="${product.title} Hover Image" 
          class="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 opacity-0 group-hover:opacity-100" 
          loading="lazy"
          onerror="this.style.display='none';"
        />
      </section>

      <section>
        <p class="text-lg leading-relaxed">${product.description}</p>
      </section>
    </article>
  `;

  fadeIn(container);

  // Add event listener to back button
  document.getElementById("back-btn").addEventListener("click", () => {
    window.history.back();
  });

} else {
  container.innerHTML = `
    <p class="text-center text-red-600 text-lg font-semibold mt-20">
      Sorry, the product you are looking for was not found.
    </p>
    <div class="text-center mt-6">
      <a href="index.html" class="text-orange-500 hover:text-orange-600 underline font-semibold">
        ← Return to homepage
      </a>
    </div>
  `;
}
