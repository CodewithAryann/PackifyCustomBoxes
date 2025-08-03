const productData = {
  "cbd-e-cigarette-boxes": {
    title: "CBD E-Cigarette Boxes",
    image: "Images/cbd-e-cigarette-boxes-wholesale.webp",
    description: "CBD E-Cigarette Boxes are custom-designed to provide secure, stylish, and compliant packaging for vape pens and cartridges. These boxes not only ensure the safety and freshness of your CBD products but also elevate brand appeal with premium printing and design options. Ideal for retail shelves and e-commerce, they offer child-resistant features, labeling space for legal compliance, and a sleek unboxing experience that enhances consumer trust and satisfaction."
  },
  "custom-vape-boxes": {
    title: "Custom Vape Boxes",
    image: "Images/vape-pods-boxes.webp",
    description: "Custom Vape Boxes are tailored to protect and promote vape products with a perfect blend of functionality and branding. Designed to fit vape pens, cartridges, and e-liquids, these boxes offer secure housing, tamper-proof options, and customizable finishes such as embossing, foil stamping, and matte or gloss lamination. Ideal for standing out in the competitive vape market, they deliver a professional, compliant, and stylish packaging solution for both retail and online sales."
  },
  "vape-cartridge-packaging": {
    title: "Vape Cartridge Packaging",
    image: "Images/custom-1ml-vape-cartridge-packaging.webp",
    description: "Vape Cartridge Packaging is crafted to securely hold and showcase vape cartridges while preserving product integrity and ensuring compliance with industry regulations. These boxes are designed with precision to prevent leaks and damage, featuring custom inserts, child-resistant closures, and ample space for branding and labeling. Whether for medical or recreational use, they provide a sleek, professional presentation that enhances product appeal and consumer trust."
  },
  "vape-pen-packaging": {
    title: "Vape Pen Packaging",
    image: "Images/vape-pen-boxes.jpg",
    description: "Vape Pen Packaging is designed to combine protection, convenience, and style for vape pens of all sizes. These custom boxes offer secure fit, tamper-evident features, and premium finishes to enhance brand visibility. Ideal for retail display and shipping, they come with options like foam inserts, magnetic closures, and child-resistant designs—ensuring your product arrives safely while delivering a premium unboxing experience that resonates with modern consumers."
  },
  "e-cigarette-boxes": {
    title: "E-Cigarette Boxes",
    image: "Images/images (3).jpg",
    description: "E-Cigarette Boxes are custom-designed to provide secure, sleek, and brand-focused packaging for electronic cigarettes. Built for durability and style, these boxes protect devices during transport while offering space for branding, health warnings, and compliance labels. With options like magnetic closures, window cutouts, and premium finishes, they enhance shelf appeal and deliver a refined unboxing experience tailored to both disposable and refillable e-cigarette products."
  },
  "custom-e-liquid-boxes": {
    title: "Custom E-Liquid Boxes",
    image: "Images/images (4).jpg",
    description: "Custom E-Liquid Boxes are tailored to safely package and promote vape juice bottles while reinforcing your brand identity. Designed for 10ml, 30ml, and other standard bottle sizes, these boxes offer secure fit, leak prevention, and compliance-ready labeling areas. With options like die-cut windows, UV coating, and foil stamping, they ensure your e-liquid products stand out on retail shelves and provide customers with a premium, trustworthy packaging experience."
  },
  "thc-vape-boxes": {
    title: "THC Vape Boxes",
    image: "Images/thc-vape-box.webp",
    description: "THC Vape Boxes are designed to deliver maximum product protection, compliance, and brand impact for cannabis vape cartridges and pens. These boxes feature secure locking mechanisms, child-resistant options, and space for legally required labeling. Customizable in size, shape, and finish, they offer premium features like matte lamination, foil accents, and embossed logos—ensuring your THC products are packaged safely and stylishly for both retail and dispensary environments."
  },
  "disposable-vape-boxes": {
    title: "Disposable Vape Boxes",
    image: "Images/disposable-vape-boxes.webp",
    description: "Disposable Vape Boxes are crafted to securely house and promote single-use vape devices with style and protection. Designed for convenience and shelf appeal, these boxes can include tamper-evident seals, window cutouts, and compliance-friendly labeling areas. With options for full-color printing, matte or gloss finishes, and custom inserts, they help brands stand out in a competitive market while ensuring safe, attractive packaging for disposable vape products."
  },
  "thc-e-cigarette-boxes": {
    title: "THC E-Cigarette Boxes",
    image: "Images/thc-cartridges-for-e-cig.webp",
    description: "THC E-Cigarette Boxes are specifically designed to package and protect THC-infused e-cigarettes with style, safety, and regulatory compliance. These boxes feature secure enclosures, child-resistant options, and ample space for legal disclaimers and product details. With premium customization options like embossing, foil stamping, and spot UV, they elevate your brand presence while ensuring your THC e-cigs reach customers in pristine condition and with a premium unboxing experience."
  },
  "vape-juice-boxes": {
    title: "Vape Juice Boxes",
    image: "Images/images (5).jpg",
    description: "Vape Juice Boxes are designed to securely hold and showcase e-liquid bottles while delivering strong shelf appeal and brand identity. These custom boxes offer precise sizing for various bottle capacities, tamper-evident features, and space for compliance labeling. With premium finishes like gloss, matte, or soft-touch lamination, along with vibrant printing and die-cut windows, they help your vape juice products stand out in both retail and online markets."
  },
  "juul-pod-packaging": {
    title: "Juul Pod Packaging",
    image: "Images/2-2.png",
    description: "Juul Pod Packaging is custom-built to securely house and protect refillable or disposable Juul pods while enhancing product presentation. Designed for precision fit and retail display, these boxes feature options like foam inserts, tamper-evident seals, and child-resistant closures. With space for compliance labels and brand elements, they offer a sleek, modern look that aligns with the premium feel of Juul products and appeals to both retail and direct-to-consumer markets."
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