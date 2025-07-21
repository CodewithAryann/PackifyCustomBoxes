const productData = {
  "tuck-top-boxes": {
    title: "Tuck Top Boxes",
    image: "Images/kraft-tuck-top-boxes.jpg",
    description: "Tuck top boxes feature a simple folding design with a top flap that tucks securely into the front of the box. They’re easy to assemble and popular for retail packaging, offering a neat, streamlined appearance that’s ideal for a wide variety of products."
  },
  "auto-lock-boxes": {
    title: "Auto Lock Boxes",
    image: "Images/auto-lock-boxes-wholesale.webp",
    description: "Auto lock boxes are designed for effortless assembly, with a pre-glued bottom that pops into place automatically. This style offers unbeatable convenience and sturdy support, making them a favorite for products needing quick, secure packaging, especially in fast-paced e-commerce and retail settings."
  },
  "tuck-mailer-boxes": {
    title: "Tuck Mailer Boxes",
    image: "Images/tuck-top-mailer-packaging-boxes.webp",
    description: "Tuck mailer boxes blend sturdy construction with easy assembly. Their tuck-in flaps lock contents in place, providing reliable protection during shipping. This style is perfect for subscription shipments and promotional kits."
  },
  "straight-tuck-end-boxes": {
    title: "Straight Tuck End Boxes",
    image: "Images/reverse-tuck-boxes.webp",
    description: "Straight tuck end boxes feature flaps that tuck in from both the top and bottom on the same side, giving them a seamless, professional look. Their versatility suits everything from cosmetics to small electronics and retail products."
  },
  "kraft-tuck-top-boxes": {
    title: "Kraft Tuck Top Boxes",
    image: "Images/kraft-tuck-top-boxes (1).jpg",
    description: "Kraft tuck top boxes pair the eco-friendly appeal of kraft paper with the practical tuck top closure. Durable, recyclable, and naturally stylish, they appeal to environmentally-conscious brands and customers seeking minimalist, sustainable packaging."
  },
  "snap-lock-bottom-boxes": {
    title: "Snap Lock Bottom Boxes",
    image: "Images/Tuck-Top-Snap-Lock-Bottom.webp",
    description: "Snap lock bottom boxes have interlocking bottom flaps that snap securely together, providing extra reinforcement for heavier products. They’re ideal for goods that need added support, without sacrificing quick assembly."
  },
  "double-wall-tuck-top-boxes": {
    title: "Double Wall Tuck Top Boxes",
    image: "Images/images (2).jpg",
    description: "Double wall tuck top boxes include reinforced sidewalls and a sturdy tuck-in top for maximum protection. Their robust structure is perfect for heavier or fragile products, offering extra durability during handling and transit."
  },
  "cbd-tuck-boxes": {
    title: "CBD Tuck Boxes",
    image: "Images/customized-cbd-tuck-boxes.jpg",
    description: "CBD tuck boxes are custom-designed for CBD products, balancing secure packaging with space for regulatory labeling and branding. The tuck closure keeps items safe, while versatile sizing suits tinctures, edibles, and topicals."
  },
  "roll-end-tuck-boxes": {
    title: "Roll End Tuck Boxes",
    image: "Images/roll-end-front-tuck-mailer-02.png",
    description: "Roll end tuck boxes are built for strength, with extended flaps that roll over the edges and tuck into the sides for added stability. This design is ideal for shipping, providing extra cushioning and seamless opening for a smooth unboxing experience."
  },
  "reverse-tuck-end-boxes": {
    title: "Reverse Tuck End Boxes",
    image: "Images/reverse-tuck-end-boxes.webp",
    description: "Reverse tuck end boxes offer a unique closure, with the top and bottom flaps folding in opposite directions. This design is quick to assemble and easy to open, making it a popular choice for retail packaging, pharmaceuticals, and cosmetics."
  },
  "123-bottom-boxes": {
    title: "1-2-3 Bottom Boxes",
    image: "Images/Top-Tuck-1-2-3-Bottom-Box-e.webp",
    description: "1-2-3 bottom boxes are engineered for easy assembly, as the base snaps together in three simple steps. Their secure foundation supports heavier items and ensures the package won’t pop open, making them a dependable choice for substantial or bulky products."
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