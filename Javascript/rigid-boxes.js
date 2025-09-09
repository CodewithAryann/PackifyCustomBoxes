const productData = {
  "custom-magnetic-closure-boxes": {
    title: "Custom Magnetic Closure Boxes",
    image: "Images/magentic rigid box.webp",
    description: "Custom magnetic closure boxes combine luxury and functionality with built-in magnets that provide a smooth, secure closing mechanism. Perfect for premium products, these boxes offer an elegant unboxing experience while keeping contents protected and elegantly housed."
  },
  "die-cut-boxes": {
    title: "Die Cut Boxes",
    image: "Images/Die Cut Rigid Box.webp",
    description: "Die cut boxes feature custom shapes and windows created through precise cutting techniques. This allows for unique, eye-catching designs that showcase your product directly or add intricate details, making your packaging stand out on shelves and online."
  },
  "flip-top-boxes": {
    title: "Flip Top Boxes",
    image: "Images/Flip Top Rigid Box.webp",
    description: "Flip top boxes offer convenient access with a hinged lid that flips open easily. Popular for products needing frequent opening and closing, they’re perfect for cosmetics, electronics, and retail goods requiring sleek presentation and practicality."
  },
  "rigid-gift-boxes": {
    title: "Rigid Gift Boxes",
    image: "Images/Rigid Gift Box.webp",
    description: "Rigid gift boxes are crafted from thick, sturdy material that exudes quality and durability. Often used for luxury gifts and keepsakes, they provide a premium feel that reinforces the brand’s value and offers reliable protection."
  },
  "kraft-rigid-boxes": {
    title: "Kraft Rigid Boxes",
    image: "Images/Rigid Kraft Box.webp",
    description: "Kraft rigid boxes combine the robustness of rigid construction with the natural appeal of kraft paper. Eco-friendly and stylish, they deliver both sustainability and high-end packaging, ideal for brands that prioritize green solutions with a luxury touch."
  },
  "satin-lined-boxes": {
    title: "Satin Lined Boxes",
    image: "Images/Satin Lined Rigid Box.webp",
    description: "Satin lined boxes elevate presentation with a soft, luxurious satin fabric interior that cushions delicate products. Often chosen for jewelry, watches, and premium gifts, these boxes highlight sophistication and care."
  },
  "custom-two-piece-boxes": {
    title: "Custom Two Piece Boxes",
    image: "Images/Two Piece Rigid Box.webp",
    description: "Custom two piece boxes consist of a separate lid and base, offering a timeless design favored for premium packaging. Their sturdy structure and elegant look make them suitable for gifts, specialty products, and upscale retail packaging."
  },
  "slipcase-boxes": {
    title: "Slipcase Boxes",
    image: "Images/Slipcase Rigid Box.webp",
    description: "Slipcase boxes feature a sleeve that slides over a separate box or booklet, combining style and protection. This packaging style is excellent for books, luxury gift sets, or limited edition products that benefit from an added layer of design."
  },
  "custom-rigid-drawer-boxes": {
    title: "Custom Rigid Drawer Boxes",
    image: "Images/Rigid Drawer Box.webp",
    description: "Custom rigid drawer boxes consist of an outer shell with a drawer-style inner compartment that slides open smoothly. This unique packaging adds a tactile, premium experience and is popular for cosmetics, tech accessories, and luxury goods."
  },
  "sliding-boxes": {
    title: "Sliding Boxes",
    image: "Images/Rigid Sliding Box.webp",
    description: "Sliding boxes are designed with two parts — an outer sleeve and an inner tray that slides in and out. They offer strong protection and an impressive unboxing experience, making them a preferred choice for high-end gifts and retail products."
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