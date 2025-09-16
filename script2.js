function toggleAI() {
  let aiBox = document.getElementById("aiBox");
  aiBox.style.display = (aiBox.style.display === "none" || aiBox.style.display === "") ? "block" : "none";
}

const chatInput = document.querySelector(".chat-input textarea");
const sendChatBtn = document.querySelector(".chat-input button");
const chatbox = document.querySelector(".chatbox");

const API_KEY = "AIzaSyAyyEQ2AoqqlmVOmHESuvZOozbK8tcA8OA"; // Ganti dengan API Key yang benar
const API_URL = `https://generativelanguage.googleapis.com/v1/models/gemini-pro:generateContent?key=${API_KEY}`;

const generateResponse = async (incomingChatLi) => {
  const messageElement = incomingChatLi.querySelector("p");
  const userMessage = chatInput.value.trim();

  const requestOptions = {
      method: "POST",
      headers: {
          "Content-Type": "application/json",
          "x-goog-api-key": API_KEY,
      },
      body: JSON.stringify({
          contents: [{ parts: [{ text: userMessage }]}],
          generation_config: {
              "temperature": 0,
              "max_output_tokens": 8192
          }
          
      }),
  };
  

  try {
      const response = await fetch(API_URL, requestOptions);
      if (!response.ok) throw new Error("Network response was not ok");

      const data = await response.json();
      console.log("API Response:", data);

      messageElement.textContent = data.candidates[0].content.parts[0].text;
  } catch (error) {
      messageElement.classList.add("error");
      messageElement.textContent = "Maaf, Server sedang maintenance. Coba lagi nanti.";
      console.error("Error generating response:", error);
  } finally {
      chatbox.scrollTo(0, chatbox.scrollHeight);
  }
};

const createChatLi = (message, className) => {
  const chatLi = document.createElement("li");
  chatLi.classList.add("chat", className);
  chatLi.innerHTML = `<p>${message}</p>`;
  return chatLi;
};

let isRequestInProgress = false;

const handleChat = () => {
  if (isRequestInProgress) {
      console.warn("Tunggu beberapa detik sebelum mengirim pesan lagi.");
      return;
  }

  let userMessage = chatInput.value.trim();
  if (!userMessage) return;

  const allowedKeywords = ["sehat", "kesehatan", "makanan", "minuman", "olahraga", "aktifitas", "dokter", "penyakit", "rumah sakit", "perawatan", "menjaga"];

  const isKeywordAllowed = (message) => {
      return allowedKeywords.some(keyword => message.toLowerCase().includes(keyword.toLowerCase()));
  };
  
  if (!isKeywordAllowed(userMessage)) {
      chatbox.appendChild(createChatLi("Maaf, hanya dapat menjawab pertanyaan tentang Kesehatan.", "chat-incoming"));
      chatbox.scrollTo(0, chatbox.scrollHeight);
      return;
  }

  chatbox.appendChild(createChatLi(userMessage, "chat-outgoing"));
  chatbox.scrollTo(0, chatbox.scrollHeight);

  setTimeout(() => {
      const incomingChatLi = createChatLi("Thinking...", "chat-incoming");
      chatbox.appendChild(incomingChatLi);
      chatbox.scrollTo(0, chatbox.scrollHeight);
      isRequestInProgress = true;

      generateResponse(incomingChatLi).finally(() => {
          setTimeout(() => isRequestInProgress = false, 3000);
      });
  }, 600);
};

sendChatBtn.addEventListener("click", handleChat);
chatInput.addEventListener("keydown", (e) => {
if (e.key === "Enter") {
  handleChat();
  chatInput.value = "";
}
});


// Event listener untuk tombol kirim
sendChatBtn.addEventListener("click", handleChat);

// Event listener untuk enter key
chatInput.addEventListener("keydown", (e) => {
if (e.key === "Enter") {
  handleChat();
  chatInput.value = "";
}
});

// Fungsi untuk menutup chatbot
function cancel() {
let chatbotcomplete = document.querySelector(".chatBot");
if (chatbotcomplete.style.display !== "none") {
  chatbotcomplete.style.display = "none";
  let lastMsg = document.createElement("p");
  lastMsg.textContent = "Terima kasih telah menggunakan Chatbot kami!";
  lastMsg.classList.add("lastMessage");
  document.body.appendChild(lastMsg);
}
}