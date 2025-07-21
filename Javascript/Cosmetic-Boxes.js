const productData = {
  "makeup-boxes": {
    title: "Makeup Boxes",
    image: "Images/1-Makeup-Boxes.webp",
    description: "Makeup Boxes designed for premium protection and stylish presentation of cosmetic products. These boxes are customizable with vibrant printing options and provide sturdy packaging that enhances your brand’s image."
  },
  "lip-balm-boxes": {
    title: "Lip Balm Boxes",
    image: "Images/2-Lip-Balm-Boxes.webp",
    description: "Custom Lip Balm Boxes crafted to securely hold your lip care products. Featuring elegant designs and compact shapes, these boxes offer excellent shelf appeal and durable protection."
  },
  "custom-printed-cream-boxes": {
    title: "Custom Printed Cream Boxes",
    image: "Images/3-Custom-Printed-Cream-Boxes.webp",
    description: "High-quality Cream Boxes tailored with custom printing to provide a luxurious feel. Perfect for skincare creams, they protect product integrity while reinforcing brand identity."
  },
  "makeup-tool-boxes": {
    title: "Makeup Tool Boxes",
    image: "Images/4-Makeup-Tool-Boxes.webp",
    description: "Makeup Tool Boxes designed for functional and attractive packaging of brushes, sponges, and other beauty tools. Customizable to fit your brand style and product needs."
  },
  "custom-serum-boxes": {
    title: "Custom Serum Boxes",
    image: "Images/5-Custom-Serum-Boxes.webp",
    description: "Serum Boxes crafted for premium skincare packaging. These boxes provide protection and sophistication to highlight the quality of your serums."
  },
  "custom-printed-cosmetic-display-boxes": {
    title: "Custom Printed Cosmetic Display Boxes",
    image: "Images/6-Custom-Printed-Cosmetic-Display-Boxes.webp",
    description: "Display Boxes designed to showcase your cosmetic products elegantly. Custom printed with eye-catching graphics, these are perfect for retail environments."
  },
  "hair-extension-boxes": {
    title: "Hair Extension Boxes",
    image: "Images/7-Hair-Extension-Boxes.webp",
    description: "Sturdy Hair Extension Boxes offering protection and style for your hair products. Customizable with your brand’s colors and logos for a professional look."
  },
  "cosmetic-labels": {
    title: "Cosmetic Labels",
    image: "Images/8-Cosmetic-Labels.webp",
    description: "Custom Cosmetic Labels to enhance product packaging with vibrant colors and lasting adhesive. Perfect for personalizing your cosmetics and maintaining brand consistency."
  },
  "lipstick-boxes": {
    title: "Lipstick Boxes",
    image: "Images/9-Lipstick-Boxes.webp",
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