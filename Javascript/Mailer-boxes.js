const productData = {
  "bubble-mailer": {
    title: "Custom Bubble",
    image: "Images/Custom Bubble Mailers.webp",
    description: "Protect your shipments with our bubble mailers featuring a padded, bubble-lined interior for cushioning and a sturdy custom-printed exterior that resists punctures and moisture. Perfect for ensuring your products arrive safely and professionally."
  },
  "vinyl-box": {
    title: "Vinyl Record Mailers",
    image: "Images/Vinyl Record Mailer Box.webp",
    description: "Safeguard valuable records with specialized vinyl record mailers. Engineered with reinforced cardboard and tailored inserts, these mailers prevent scratches and bending during transit—delighting collectors and retailers who demand pristine delivery."
  },
  "corrugated-mailer-boxes": {
    title: "Corrugated Mailer Boxes",
    image: "Images/Corrugated Mailer Box.webp",
    description: "Trust our robust corrugated mailer boxes to keep your items secure during shipping. Known for their strength and customizability, these boxes are a top choice for brands aiming to protect products while enhancing unboxing experiences."
  },
  "white-mailer-boxes": {
    title: "White Mailer Boxes",
    image: "Images/White Mailer Box.webp",
    description: "Choose white mailer boxes for a clean, minimalistic look. Versatile and cost-effective, they’re perfect for everyday shipments and give your packaging a fresh, professional appearance."
  },
  "kraft-mailer-boxes": {
    title: "Kraft Mailer Boxes",
    image: "Images/Kraft Mailer Box.webp",
    description: "Elevate your brand with kraft mailer boxes. Their earthy, organic look appeals to eco-conscious customers, while options like custom labeling and unique lock designs support creative branding for e-commerce and boutique businesses."
  },
  "black-mailer-boxes": {
    title: "Black Mailer Boxes",
    image: "Images/Black Mailer Box.webp",
    description: "Black mailer boxes create immediate shelf impact and premium perception. Available with various sizes and finishes, they highlight your product with modern elegance and unmistakable visibility."
  },
  "colored-mailer-boxes": {
    title: "Colored Mailer Boxes",
    image: "Images/Colored Mailer Box.webp",
    description: "Make your deliveries memorable with colored mailer boxes, available in custom shades to match your brand. Add logos or artwork for instant recognition and a polished marketing touch."
  },
  "tuck-top-mailer-boxes": {
    title: "Tuck Top Mailer Boxes",
    image: "Images/Tuck Top Box.webp",
    description: "Tuck top mailer boxes feature a secure closing design for easy assembly. Their streamlined style offers both convenience in packaging and protection for a wide range of goods."
  },
  "literature-mailer-boxes": {
    title: "Literature Mailers",
    image: "Images/Literature Mailer Box.webp",
    description: "Engineered to protect documents, catalogs, and brochures, literature mailers offer a snug fit and prevent creasing, making them ideal for businesses sending printed materials."
  },
  "pink-mailer-boxes": {
    title: "Pink Mailer Boxes",
    image: "Images/Pink Mailer Box.webp",
    description: "Stand out with playful, vibrant pink mailer boxes. Perfect for gift sets, subscription packs, or brands seeking a bold and cheerful unboxing experience."
  },
  "cardboard-mailers": {
    title: "Cardboard Mailers",
    image: "Images/Cardboard Mailer.webp",
    description: "Lightweight and sturdy, cardboard mailers provide reliable protection for documents, books, and small merchandise—suiting both business and personal use."
  },
  "mailer-gift-boxes": {
    title: "Mailer Gift Boxes",
    image: "Images/Gift Mailer Box.webp",
    description: "Transform gifting with stylish mailer gift boxes. They combine durability with elegant presentation, ensuring contents are both secure and beautifully displayed upon arrival."
  },
  "decorative-mailers": {
    title: "Decorative Mailers",
    image: "Images/Decorative Mailer Box.webp",
    description: "Decorative mailers feature eye-catching designs and finishes, ideal for special occasions, promotional campaigns, or subscription boxes looking to create a lasting impression."
  },
  "holiday-mailer-boxes": {
    title: "Holiday Mailer Boxes",
    image: "Images/Holiday Mailer Box.webp",
    description: "Celebrate the season with custom holiday mailer boxes. Incorporate festive graphics and colors to enhance the excitement and anticipation of your shipments."
  },
  "book-mailers": {
    title: "Book Mailers",
    image: "Images/Book Mailer Box.webp",
    description: "Designed specifically for books, these mailers shield contents from bending or corner damage, keeping your reading materials safe from warehouse to doorstep."
  },
  "ear-lock-mailer-box": {
    title: "Ear Lock Mailer Box",
    image: "Images/Ear Lock Mailer Box.webp",
    description: "The ear lock design secures the lid in place, providing extra protection against accidental opening and making it ideal for more delicate or valuable contents."
  },
  "cbd-mailer-boxes": {
    title: "CBD Mailer Boxes",
    image: "Images/CBD Mailer Box.webp",
    description: "Safely deliver wellness products with custom CBD mailer boxes, manufactured to meet industry regulations and branding requirements for supplements and oils."
  },
  "ecommerce-mailers": {
    title: "Ecommerce Mailers",
    image: "Images/Ecomerce Mailer Box.webp",
    description: "Streamline online orders with eCommerce mailers that combine secure protection, easy assembly, and efficient branding for direct-to-consumer shipments."
  },
  "sleeved-mailer-boxes": {
    title: "Sleeved Mailer Boxes",
    image: "Images/Sleeved Mailer Box.webp",
    description: "These boxes feature an additional sleeve exterior, giving an upscale touch and added layer of design and protection, perfect for premium products."
  },
  "mailer-shipping-boxes": {
    title: "Mailer Shipping Boxes",
    image: "Images/Mailer shipping box.webp",
    description: "Durable and customizable, mailer shipping boxes are tailored for logistics. They ensure damage-free delivery and can be printed for consistent brand identity."
  },
  "custom-mailer-boxes-with-tear-strip": {
    title: "Custom Mailer Boxes With Tear Strip",
    image: "Images/Tear Strip Mailer Box.webp",
    description: "Increase customer satisfaction with mailers featuring a tear strip, allowing easy and frustration-free opening while maintaining package security."
  },
  "candle-shipping-boxes": {
    title: "Candle Shipping Boxes",
    image: "Images/Candle Mailer Boxes.webp",
    description: "Protect scented candles with snug-fitting boxes designed to keep fragile glass and wax items safe during transit and storage."
  },
  "tab-lock-boxes": {
    title: "Tab Lock Boxes",
    image: "Images/Tab Lock Mailer Box.webp",
    description: "Tab lock designs help securely close the box without tape or glue, ensuring tamper resistance and neat presentation—ideal for retail packaging."
  }
};


function openModalById(id) {
  const product = productData[id];
  if (!product) return;

  document.getElementById("modalTitle").innerText = product.title;
  document.getElementById("modalImage").src = product.image;
  document.getElementById("modalDesc").innerText = product.description;

  const modal = document.getElementById("productModal");
  modal.classList.remove("hidden");
  modal.classList.add("flex");
}

function closeModal() {
  const modal = document.getElementById("productModal");
  modal.classList.add("hidden");
  modal.classList.remove("flex");
}