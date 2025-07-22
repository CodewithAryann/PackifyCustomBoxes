
  let chatStep = 0;
  let userData = {
    type: "",
    quantity: "",
    name: "",
    email: ""
  };

  function toggleChat() {
    const chatBox = document.getElementById("chat-box");
    chatBox.classList.toggle("hidden");
    if (!chatBox.classList.contains("hidden") && chatStep === 0) {
      resetChat();
    }
  }

  function resetChat() {
    chatStep = 0;
    userData = { type: "", quantity: "", name: "", email: "" };
    document.getElementById("chat-content").innerHTML = "";
    document.getElementById("chat-input-area").innerHTML = `
      <button id="start-btn" onclick="startChat()" class="bg-orange-500 text-white px-4 py-2 rounded w-full hover:bg-orange-600 transition">Start</button>`;
  }

  function appendMessage(content, from = 'bot') {
    const container = document.getElementById("chat-content");
    const message = document.createElement("div");
    message.className = from === 'bot' ? "text-gray-800" : "text-right text-orange-500 font-medium";
    message.innerHTML = content;
    container.appendChild(message);
    container.scrollTop = container.scrollHeight;
  }

  function startChat() {
    const inputArea = document.getElementById("chat-input-area");
    inputArea.innerHTML = "";
    appendMessage("👋 Hi there! What type of box are you looking for?");
    setTimeout(() => {
      inputArea.innerHTML = `
        <div class="grid grid-cols-2 gap-2">
          <button type="button" onclick="selectOption('Mailer Box')" class="option-btn">Mailer Box</button>
          <button type="button" onclick="selectOption('Rigid Box')" class="option-btn">Rigid Box</button>
          <button type="button" onclick="selectOption('Folding Carton')" class="option-btn">Folding Carton</button>
          <button type="button" onclick="selectOption('Other')" class="option-btn">Other</button>
        </div>`;
    }, 400);
  }

  function selectOption(option) {
    appendMessage(option, 'user');
    if (chatStep === 0) {
      userData.type = option;
      chatStep++;
      appendMessage("How many boxes do you need?");
      document.getElementById("chat-input-area").innerHTML = `
        <input type="number" id="chat-quantity" placeholder="Enter quantity" class="input-style" min="1" />
        <button type="button" onclick="handleQuantity()" class="bg-orange-500 text-white px-4 py-2 mt-2 rounded w-full hover:bg-orange-600 transition">Next</button>`;
    }
  }

  function handleQuantity() {
    const qtyInput = document.getElementById("chat-quantity");
    const qty = qtyInput.value.trim();
    if (!qty || isNaN(qty) || Number(qty) <= 0) {
      alert("Please enter a valid quantity");
      qtyInput.focus();
      return;
    }
    userData.quantity = qty;
    appendMessage(qty, 'user');
    chatStep++;
    appendMessage("Your Name?");
    document.getElementById("chat-input-area").innerHTML = `
      <input type="text" id="chat-name" placeholder="Enter name" class="input-style" />
      <button type="button" onclick="handleName()" class="bg-orange-500 text-white px-4 py-2 mt-2 rounded w-full hover:bg-orange-600 transition">Next</button>`;
  }

  function handleName() {
    const nameInput = document.getElementById("chat-name");
    if (!nameInput) {
      console.error("Chat name input not found!");
      return;
    }
    const name = nameInput.value.trim();
    if (!name) {
      alert("Please enter your name");
      nameInput.focus();
      return;
    }

    userData.name = name;
    appendMessage(name, 'user');
    chatStep++;
    appendMessage("Your Email?");
    document.getElementById("chat-input-area").innerHTML = `
      <input type="email" id="chat-email" placeholder="Enter email" class="input-style" />
      <button type="button" onclick="handleEmail()" class="bg-orange-500 text-white px-4 py-2 mt-2 rounded w-full hover:bg-orange-600 transition">Submit</button>`;
  }

  function handleEmail() {
    const emailInput = document.getElementById("chat-email");
    const email = emailInput.value.trim();
    if (!email || !validateEmail(email)) {
      alert("Please enter a valid email");
      emailInput.focus();
      return;
    }
    userData.email = email;
    appendMessage(email, 'user');
    chatStep++;

    document.getElementById("chat-input-area").innerHTML = `<p class="text-center text-gray-500">Sending your request...</p>`;

    fetch("https://formspree.io/f/xnnznoev", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        type: userData.type,
        quantity: userData.quantity,
        name: userData.name,
        email: userData.email,
        message: `Box Type: ${userData.type}, Quantity: ${userData.quantity}`
      })
    }).then(response => {
      if (response.ok) {
        appendMessage("✅ Thank you! We'll get back to you shortly.");
        document.getElementById("chat-input-area").innerHTML = `
          <button type="button" onclick="toggleChat()" class="mt-4 bg-green-500 text-white px-4 py-2 rounded w-full hover:bg-green-600 transition">Close</button>`;
      } else {
        throw new Error('Network response was not ok.');
      }
    }).catch(() => {
      appendMessage("⚠️ Something went wrong. Please try again later.");
      document.getElementById("chat-input-area").innerHTML = `
        <button type="button" onclick="toggleChat()" class="mt-4 bg-red-500 text-white px-4 py-2 rounded w-full hover:bg-red-600 transition">Close</button>`;
    });
  }

  function validateEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }

  // Optional: reset when page loads
  window.addEventListener('DOMContentLoaded', resetChat);

function toggleChat() {
  const chatBox = document.getElementById("chat-box");
  chatBox.classList.toggle("hidden");

  // Hide notification badge
  const badge = document.getElementById("wa-badge");
  if (badge) {
    badge.style.display = "none";
  }

  // Optional: Reset chat on first open
  if (!chatBox.classList.contains("hidden") && chatStep === 0) {
    resetChat();
  }
}

document.getElementById('ai-chatbot').addEventListener('click', () => {
  const notif = document.getElementById('ai-notif');
  if (notif) {
    notif.style.display = 'none';
  }
});
