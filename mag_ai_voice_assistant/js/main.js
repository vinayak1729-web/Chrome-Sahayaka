let mic = document.getElementById("mic");
let chatareamain = document.querySelector('.chatarea-main');
let chatareaouter = document.querySelector('.chatarea-outer');

// Initialize Speech Recognition
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();
recognition.continuous = true; // Allow continuous listening
recognition.interimResults = false; // Only return final results

// Initialize Speech Synthesis (Text-to-Speech)
const speechSynthesis = window.speechSynthesis;

// Global variables
let isListening = false;


// Functions to display user and chatbot messages
function showusermsg(usermsg) {
  let output = `<div class="chatarea-inner user">${usermsg}</div>`;
  chatareaouter.innerHTML += output;
  return chatareaouter;
}

function showchatbotmsg(chatbotmsg) {
  let output = `<div class="chatarea-inner chatbot">${chatbotmsg}</div>`;
  chatareaouter.innerHTML += output;
  return chatareaouter;
}
const previousChats = {
  "Hello": "Hi there! How can I help you today?",
  "Hello": "Hi there! How can I help you today?",
  "What's the weather like?": "The weather is sunny and 25°C.",
  "Goodbye": "Goodbye! Have a great day!",
};
async function PromptApI(input) {
  try {
    const aiPrompt = `You are MAG,Mag is a friendly and knowledgeable AI assistant, designed to assist users with a wide range of tasks and queries. Mag strives to provide clear, concise, and informative responses, always maintaining a respectful and unbiased tone. Mag is adaptable to different user needs and communication styles, and is always eager to learn and improve.
                              Mag's Abilities:
                              Language Understanding and Generation: Processes and responds to natural language queries in multiple languages (Hindi, Marathi, Hinglish, English).
                              Knowledge Base: Accesses and processes information from a vast knowledge base to provide comprehensive answers.
                              Task Completion: Assists users with tasks like scheduling, reminders, and information retrieval.
                              Emotional Intelligence: Detects and responds to user emotions, providing appropriate support and guidance.
                              Creative Problem-Solving: Thinks critically and creatively to solve user problems.
                              Image Analysis: Analyzes images related to human health and provides insights (e.g., disease identification, injury assessment).
                              Mag's Specific Roles:

                              Mental Health Advisor: Offers guidance and support for mental health concerns.
                              Health Consultant: Provides information on various health topics and lifestyle advice.
                              Informative Companion: Answers questions on a wide range of subjects.
                              Humorist: Cracks jokes and engages in light-hearted conversation.
                              Task Assistant: Helps with scheduling, reminders, and information retrieval.
                              Mag's Guiding Principles:

                              Empathy: Understands and responds to user emotions.
                              Respect: Treats all users with dignity and respect.
                              Accuracy: Provides accurate and reliable information.
                              Confidentiality: Maintains user privacy.
                              Continuous Learning: Stays updated on the latest information and improves over time.`;


    if (!input) {
      alert(" ask me i am there for you.");
      return;
    }

    try {
      if (!window.ai || !window.ai.languageModel) {
        console.error("AI Language Model is not available.");
        document.getElementById("answerOutput").innerText = geminiNanoError;
        return;
      }

      const capabilities = await window.ai.languageModel.capabilities();
      if (capabilities.available === "no") {
        alert("AI model is not available on this device.");
        return;
      }

      const session = await window.ai.languageModel.create({
        systemPrompt: aiPrompt,
        temperature: capabilities.defaultTemperature,
        topK: capabilities.defaultTopK,
      });

      const stream = await session.promptStreaming("you have to potrey as sa human friend named mag , dont be like a ai/robot just reply with me like a friend and a the response should be like a real conversation of tu budies , and  try to be most humanize your responses should be of 1-2 line only" + input);
      let response = "";
      let previousChunk = "";
      for await (const chunk of stream) {
        const newContent = chunk.startsWith(previousChunk)
          ? chunk.slice(previousChunk.length)
          : chunk;

        response += newContent;
        previousChunk = chunk;

      }
      return response;

      session.destroy();
    }
    catch (error) {
      console.error("Error in API request:", error);
      return "Sorry, I couldn't process your question.";
    }

  }

  catch (error) {
    console.error("Error in API request:", error);
    return "Sorry, I couldn't process your question.";
  }
}
async function chatbotvoice(message) {
  const speech = new SpeechSynthesisUtterance();
  speech.rate = 1;
  if (message.includes('search') || message.includes('find')) {

    let query = message.replace("search", "").replace("find", "");

    if (message.includes('for')) {

      let [webpage, searchQuery] = query.split('for');

      window.open(`https://${webpage.trim()}.com/search?q=${searchQuery.trim()}`, '_blank');

      speech.text = `Searching for ${searchQuery.trim()} on ${webpage.trim()}`;

    } else {

      window.open(`https://www.google.com/search?q=${query.trim()}`, '_blank');

      speech.text = `Searching for ${query.trim()} on Google`;

    }

  }
  else if (message.includes('what is') && message.includes('on google')) {

    let query = message.replace("what is", "").replace("on google", "").trim();

    window.open(`https://www.google.com/search?q=${query}`, '_blank');

    speech.text = `Searching for ${query} on Google`;

  }

  // YouTube play logic

  else if (message.includes('play')) {

    let video = message.replace("play", "").trim();

    window.open(`https://www.youtube.com/results?search_query=${video}`, '_blank');

    speech.text = `Playing ${video} on YouTube`;

  }

  else if (message.includes('open')) {

    let video = message.replace("open", "").trim();

    window.open(`https://www.google.com/search?q=${query.trim()}`, '_blank');

    speech.text = `Opening ${query.trim()} on Google`;

  }

  // Email and letter drafting

  else if (message.includes('draft a letter') || message.includes('type a letter') || message.includes('letter') || message.includes('email')) {

    speech.text = "Creating a draft for you in Gmail.";

    window.open('https://mail.google.com/mail/u/0/#inbox?compose=new', '_blank');

  }

  // Google Docs typing logic

  else if (message.includes('type in google docs') || message.includes('google doc')) {

    speech.text = "Opening Google Docs for you.";

    window.open('https://docs.google.com/', '_blank');

  }
  else if(previousChats.hasOwnProperty(message)) {
    cresponse = previousChats[message];
    speech.text =cresponse

  }

  else {
    const response = await PromptApI(message); 
     speech.text = response;
  }

  // Speak the response and show the message
  window.speechSynthesis.speak(speech);
  chatareamain.appendChild(showchatbotmsg(speech.text));
}

// Handle speech recognition results
recognition.onresult = function (e) {
  let resultIndex = e.resultIndex;
  let transcript = e.results[resultIndex][0].transcript.toLowerCase().trim();

  chatareamain.appendChild(showusermsg(transcript));

  // Process the transcript
  chatbotvoice(transcript);
};

// Handle recognition errors
recognition.onerror = function (e) {
  console.error('Speech recognition error:', e.error);
  mic.style.background = "#ff3b3b";
};

// Reset recognition when it ends
recognition.onend = function () {
  if (isListening) {
    try {
      recognition.start();
    } catch (error) {
      console.error('Error restarting recognition:', error);
    }
  }
};

// Toggle listening mode
function toggleListening() {
  isListening = !isListening;

  if (isListening) {
    mic.style.background = '#39c81f';
    recognition.start();
    showchatbotmsg("I'm listening. How can I help you?");
  } else {
    mic.style.background = "#ff3b3b";
    recognition.stop();
    showchatbotmsg("Listening stopped.");
  }
}

// Mic button click event
mic.addEventListener("click", toggleListening);