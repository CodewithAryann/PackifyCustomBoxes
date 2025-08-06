const productData = {
  "makeup-boxes": {
    title: "Makeup Boxes",
    image: "Images/make up box.png",
    description: "Makeup Boxes designed for premium protection and stylish presentation of cosmetic products. These boxes are customizable with vibrant printing options and provide sturdy packaging that enhances your brand’s image."
  },
  "lip-balm-boxes": {
    title: "Lip Balm Boxes",
    image: "Images/lip balm bx.png",
    description: "Custom Lip Balm Boxes crafted to securely hold your lip care products. Featuring elegant designs and compact shapes, these boxes offer excellent shelf appeal and durable protection."
  },
  "custom-printed-cream-boxes": {
    title: "Custom Printed Cream Boxes",
    image: "Images/cream box make up.png",
    description: "High-quality Cream Boxes tailored with custom printing to provide a luxurious feel. Perfect for skincare creams, they protect product integrity while reinforcing brand identity."
  },
  "makeup-tool-boxes": {
    title: "Makeup Tool Boxes",
    image: "Images/make up tool box.png",
    description: "Makeup Tool Boxes designed for functional and attractive packaging of brushes, sponges, and other beauty tools. Customizable to fit your brand style and product needs."
  },
  "custom-serum-boxes": {
    title: "Custom Serum Boxes",
    image: "Images/custom serum box.png",
    description: "Serum Boxes crafted for premium skincare packaging. These boxes provide protection and sophistication to highlight the quality of your serums."
  },
  "custom-printed-cosmetic-display-boxes": {
    title: "Custom Printed Cosmetic Display Boxes",
    image: "Images/cosmetic display box.png",
    description: "Display Boxes designed to showcase your cosmetic products elegantly. Custom printed with eye-catching graphics, these are perfect for retail environments."
  },
  "hair-extension-boxes": {
    title: "Hair Extension Boxes",
    image: "Images/hair extension box.png",
    description: "Sturdy Hair Extension Boxes offering protection and style for your hair products. Customizable with your brand’s colors and logos for a professional look."
  },
  "cosmetic-labels": {
    title: "Cosmetic Labels",
    image: "Images/cosmetic lables.png",
    description: "Custom Cosmetic Labels to enhance product packaging with vibrant colors and lasting adhesive. Perfect for personalizing your cosmetics and maintaining brand consistency."
  },
  "lipstick-boxes": {
    title: "Lipstick Boxes",
    image: "Images/lipstick boxes.png",
    description: "Elegant Lipstick Boxes that protect your products and provide a luxurious unboxing experience. Custom printing available to showcase your brand identity."
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