/* ===== Conversation Scene ===== */

const conversation = [
  {
    sender: "Ani",
    text: "Hi cheamu, valentines day is nearing and I had a question to ask you...",
  },
  { sender: "Cheams", text: "OOO ikk, what was the question" },
  { sender: "Ani", text: "umm, what do you wanna eat?" },
  { sender: "Cheams", text: "BRUH" },
  {
    sender: "Ani",
    text: "LMAOO JK, okay hit next and you will see the question!",
  },
];

const BUBBLE_DELAY = 1500; // ms between each bubble

function playConversation() {
  const chatContainer = document.getElementById("chatContainer");
  const nextButton = document.getElementById("nextButton");

  conversation.forEach((msg, index) => {
    setTimeout(() => {
      const bubble = document.createElement("div");
      bubble.classList.add("chat-bubble", msg.sender);

      const label = document.createElement("span");
      label.classList.add("sender-label");
      label.textContent = msg.sender === "him" ? "Him" : "Her";

      const text = document.createElement("span");
      text.textContent = msg.text;

      bubble.appendChild(label);
      bubble.appendChild(text);
      chatContainer.appendChild(bubble);

      // Auto-scroll to latest bubble
      chatContainer.scrollTop = chatContainer.scrollHeight;

      // Show Next button after the last message
      if (index === conversation.length - 1) {
        setTimeout(() => {
          nextButton.classList.add("visible");
        }, 800);
      }
    }, index * BUBBLE_DELAY);
  });
}

// Start the conversation when the page loads
document.addEventListener("DOMContentLoaded", playConversation);

/* ===== Scene Transition ===== */

function handleNextClick() {
  const convoSection = document.getElementById("conversation");
  const questionSection = document.getElementById("question");

  // Fade out conversation
  convoSection.classList.add("fade-out");

  // After fade-out completes, show the question
  setTimeout(() => {
    convoSection.style.display = "none";
    questionSection.style.display = "block";

    // Trigger reflow so the transition plays
    void questionSection.offsetWidth;
    questionSection.classList.add("fade-in");
  }, 600);
}

/* ===== Question Scene (Yes / No) ===== */

const noMessages = [
  "Are you sure?",
  "Really sure??",
  "Are you positive?",
  "Pookie please...",
  "Just think about it!",
  "If you say no, I will be really sad...",
  "I will be very sad...",
  "I will be very very very sad...",
  "Ok fine, I will stop asking...",
  "Just kidding, say yes please! ❤️",
];

let messageIndex = 0;

function handleNoClick() {
  const noButton = document.querySelector(".no-button");
  const yesButton = document.querySelector(".yes-button");
  noButton.textContent = noMessages[messageIndex];
  messageIndex = (messageIndex + 1) % noMessages.length;
  const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
  yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
  window.location.href = "yes_page.html";
}
