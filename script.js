document.addEventListener("DOMContentLoaded", function () {
  const openChat = document.getElementById("openChat");
  const chatSidebar = document.getElementById("chatSidebar");
  const closeChat = document.getElementById("closeChat");
  const chatForm = document.getElementById("chatForm");
  const chatBox = document.getElementById("chatBox");
  const userInput = document.getElementById("userInput");

  // 1. Open Sidebar
  if (openChat) {
    openChat.addEventListener("click", function (e) {
      e.preventDefault();
      chatSidebar.classList.add("active");
    });
  }

  // 2. Close Sidebar
  if (closeChat) {
    closeChat.addEventListener("click", function () {
      chatSidebar.classList.remove("active");
    });
  }

  // 3. Handle Messaging
  if (chatForm) {
    chatForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const text = userInput.value.trim();
      if (!text) return;

      // Add User Message
      appendMessage("user-message", text);
      userInput.value = "";

      // Bot Response Logic (Simulated delay for realism)
      setTimeout(() => {
        const lowerText = text.toLowerCase();
        let response = "Thank you! Our team will get back to you soon.";

        if (lowerText.includes("price") || lowerText.includes("cost")) {
          response = "Our repair services start at ₹499. Diagnostics are free!";
        } else if (lowerText.includes("location") || lowerText.includes("where")) {
          response = "We are located in Haveli, Pune. We also offer home pickup!";
        } else if (lowerText.includes("service")) {
          response = "We repair Laptops, Desktops, and MacBooks.";
        } else if (lowerText.includes("contact") || lowerText.includes("number")) {
          response = "You can call us at +91-9876543210.";
        }

        appendMessage("bot-message", response);
      }, 600);
    });
  }

  // Helper function to add messages to the UI
  function appendMessage(className, text) {
    const msgDiv = document.createElement("div");
    msgDiv.className = className;
    msgDiv.textContent = text;
    chatBox.appendChild(msgDiv);
    chatBox.scrollTop = chatBox.scrollHeight; // Auto-scroll to bottom
  }
});
