// Function to open popup
function openPopup() {
    document.getElementById("popup").style.display = "flex";
}

// Function to close popup
function closePopup() {
    document.getElementById("popup").style.display = "none";
}

// Function to open popup
function openPopup2() {
    document.getElementById("popup2").style.display = "flex";
}

// Function to close popup
function closePopup2() {
    document.getElementById("popup2").style.display = "none";
}

// Function to open popup
function openPopup3() {
    document.getElementById("popup3").style.display = "flex";
}

// Function to close popup
function closePopup3() {
    document.getElementById("popup3").style.display = "none";
}

// Function to open popup
function openPopup4() {
    document.getElementById("popup4").style.display = "flex";
}

// Function to close popup
function closePopup4() {
    document.getElementById("popup4").style.display = "none";
}


function openPopup5() {
    document.getElementById("popup5").style.display = "flex";
}

// Function to close popup
function closePopup5() {
    document.getElementById("popup5").style.display = "none";
}

function openPopup6() {
    document.getElementById("popup6").style.display = "flex";
}

// Function to close popup
function closePopup6() {
    document.getElementById("popup6").style.display = "none";
}

function openPopup7() {
    document.getElementById("popup7").style.display = "flex";
}

// Function to close popup
function closePopup7() {
    document.getElementById("popup7").style.display = "none";
}

function openPopup8() {
    document.getElementById("popup8").style.display = "flex";
}

// Function to close popup
function closePopup8() {
    document.getElementById("popup8").style.display = "none";
}

function openPopup9() {
    document.getElementById("popup9").style.display = "flex";
}

// Function to close popup
function closePopup9() {
    document.getElementById("popup9").style.display = "none";
}

function openPopup10() {
    document.getElementById("popup10").style.display = "flex";
}

// Function to close popup
function closePopup10() {
    document.getElementById("popup10").style.display = "none";
}

function openPopup11() {
    document.getElementById("popup11").style.display = "flex";
}

// Function to close popup
function closePopup11() {
    document.getElementById("popup11").style.display = "none";
}

function openPopup12() {
    document.getElementById("popup12").style.display = "flex";
}

// Function to close popup
function closePopup12() {
    document.getElementById("popup12").style.display = "none";
}

function openPopup13() {
    document.getElementById("popup13").style.display = "flex";
}

// Function to close popup
function closePopup13() {
    document.getElementById("popup13").style.display = "none";
}

function openPopup14() {
    document.getElementById("popup14").style.display = "flex";
}

// Function to close popup
function closePopup14() {
    document.getElementById("popup14").style.display = "none";
}

function openPopup15() {
    document.getElementById("popup15").style.display = "flex";
}

// Function to close popup
function closePopup15() {
    document.getElementById("popup15").style.display = "none";
}

function openPopup16() {
    document.getElementById("popup16").style.display = "flex";
}

// Function to close popup
function closePopup16() {
    document.getElementById("popup16").style.display = "none";
}

function openPopup17() {
    document.getElementById("popup17").style.display = "flex";
}

// Function to close popup
function closePopup17() {
    document.getElementById("popup17").style.display = "none";
}

function openPopup18() {
    document.getElementById("popup18").style.display = "flex";
}

// Function to close popup
function closePopup18() {
    document.getElementById("popup18").style.display = "none";
}
function openPopup19() {
    document.getElementById("popup19").style.display = "flex";
}

// Function to close popup
function closePopup19() {
    document.getElementById("popup19").style.display = "none";
}
function openPopup20() {
    document.getElementById("popup20").style.display = "flex";
}

// Function to close popup
function closePopup20() {
    document.getElementById("popup20").style.display = "none";
}

function openPopup21() {
    document.getElementById("popup21").style.display = "flex";
}

// Function to close popup
function closePopup21() {
    document.getElementById("popup21").style.display = "none";
}

function openPopup22() {
    document.getElementById("popup22").style.display = "flex";
}

// Function to close popup
function closePopup22() {
    document.getElementById("popup22").style.display = "none";
}

function openPopup23() {
    document.getElementById("popup23").style.display = "flex";
}

// Function to close popup
function closePopup23() {
    document.getElementById("popup23").style.display = "none";
}

function openPopup24() {
    document.getElementById("popup24").style.display = "flex";
}

// Function to close popup
function closePopup24() {
    document.getElementById("popup24").style.display = "none";
    document.getElementById("popup4").style.display = "none";
}

function toggleAI() {
    let aiBox = document.getElementById("aiBox");

    if (aiBox.classList.contains("show")) {
        aiBox.classList.remove("show");
        aiBox.classList.add("hide");

        // Setelah animasi selesai, sembunyikan elemen secara penuh
        setTimeout(() => {
            aiBox.style.display = "none";
        }, 400);
    } else {
        aiBox.style.display = "block";
        aiBox.classList.remove("hide");
        aiBox.classList.add("show");
    }
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