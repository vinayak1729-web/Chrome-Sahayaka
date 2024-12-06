
# 🚀 **ChromeSAHAYAK** - Your Personal AI Tutor & Fun Zone Extension 🌟
<div align="center">

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Chrome](https://img.shields.io/badge/Chrome--Dev%2FCanary-v128.0.6545.0%2B-green.svg)
![Platform](https://img.shields.io/badge/platform-Windows%20|%20MacOS%20|%20Linux-lightgrey)
![Status](https://img.shields.io/badge/status-beta-orange)



> ⚠️ **Important**: This extension requires Chrome Dev or Canary channel (≥ 128.0.6545.0) to function properly.

</div>



**ChromeSAHAYAK** is a web app and Chrome extension that transforms learning and entertainment. Powered by cutting-edge AI technologies like Prompt API and Speech Recognition, it offers personalized tutoring, hands-free browsing, interactive games, and mental health support. 🎓🎉  

---

## Images

### **1. Ask the AI Learner**

Engage directly with the AI Learner by asking questions or seeking information. The intelligent system provides accurate, tailored responses to enhance your understanding of complex topics.
<br>

<img width="958" alt="ai_learner_ask" src="https://github.com/user-attachments/assets/ce477ebb-c3b5-4a52-8ca6-961b511a1cee">

---

### **2. Lesson Conversion**

Simplify learning with AI Learner’s lesson conversion feature. It breaks down complex topics into structured, digestible lessons, making it easier for users to grasp even the most challenging concepts.
<br>

<img width="959" alt="ai_learner_convert_to_lesson" src="https://github.com/user-attachments/assets/76ee028f-938e-4c49-87b0-9636084928c2">


---

### **3. AI Voice Assistant Emotion Detection**

Leverage the AI voice assistant’s ability to detect emotions during interactions. By understanding the user’s emotional state, AI Learner adapts its responses to provide a supportive and empathetic learning experience.
<br>

<img width="959" alt="ai_magVoice_assistant_detect_Emotion" src="https://github.com/user-attachments/assets/a6e1eca1-8738-4a6e-83ad-a3e686be7b86">


---

### **4. AI Voice Assistant for Learning**

Experience hands-free learning with the AI voice assistant. It offers seamless voice-based navigation, personalized suggestions, and interactive support, ensuring a convenient and user-friendly educational journey.
<br>

<img width="959" alt="ai_magVoice_assistant" src="https://github.com/user-attachments/assets/bcbee17d-b7df-475a-b8c8-a3ace8dfede1">



---

## ✨ **Key Features**  

### 🌐 **1. AI-Powered Learning**  
- 🧠 **Customizable Answers**:  
  - Adjust answers by **difficulty level** (Simple ➡️ Advanced).  
  - Control the **length** (Short ➡️ Detailed).  
- 🛠️ **Interactive Features**:  
  - Use the **"Ask"** button for instant explanations.  
  - **Save answers to PDF** for future reference.  
  - **Create Structured Lessons**: Generate a structured lesson plan for in-depth study.  
  - **Audio Classes**: Learn with AI-generated audio explanations.  
- 🔄 **Real-Time Interaction**: Follow-up questions supported for dynamic learning.  

### 🎙️ **2. Voice Assistance**  
- 🗣️ **Hands-Free Learning & Navigation**:  
  - Use voice commands to interact with AI effortlessly.  
  - Perform tasks like opening tabs, searching queries, and interacting with lessons.  
- 🌍 **Conversational AI**:  
  - Engage in natural conversations.  
  - Includes **mental health support**: Acts as a friendly **consoler** or **psychiatrist** to help users feel better during tough times.  

### 📺 **3. YouTube Video Transcription**  
- 🎧 **Audio to Text**: Convert YouTube audio into accurate text using `yt-dlp` and Google Speech API.  
- 📝 **Multilingual Support**: Understand content in multiple languages.  
- 🎵 **Mood-Based Recommendations**: Suggests resources or playlists based on context.  

### 🎭 **4. Interactive Fun Zone**  
- ❓ **Trivia & Quizzes**: Fun, engaging games to test knowledge.  
- ✨ **Storytelling Mode**: AI-generated stories based on your prompts.  
- 😂 **Joke Generator**: Enjoy light-hearted jokes, riddles, and humor.  
- 🎨 **Voice-Driven Doodles**: Create sketches with simple verbal descriptions.  
- 🎧 **AI-Curated Music**: Get personalized playlists based on detected mood.  
- 🖼️ **AI Memes**: Generate witty, captioned memes.  
- 🔮 **Fortune Teller**: Playful AI-powered horoscopes and fortunes.  
- 🌍 **Language Games**: Challenge vocabulary and translation skills.  
- 🎮 **Chat Games**: Play "20 Questions," "Would You Rather," and more.  

---

## 🛠️ **System Requirements**  

| **Component**   | **Minimum Requirement**                      |  
|------------------|----------------------------------------------|  
| **Browser**      | Chrome Dev/Canary (≥ 128.0.6545.0) REQUIRED  |  
| **Operating System** | Windows 10+, macOS 13+, or Linux           |  
| **CPU**          | Multi-core processor (Intel/AMD)            |  
| **GPU/VRAM**     | GPU with 4GB+ VRAM supporting FP16          |  
| **Storage**      | 24GB free space (22GB Gemini Nano, 2GB Moondream2) |  

### **Browser Setup**  
1. Download [Chrome Dev](https://www.google.com/chrome/dev/) or [Chrome Canary](https://www.google.com/chrome/canary/).  
2. Verify version ≥ 128.0.6545.0 at `chrome://settings/help`.  

### **Required Chrome Flags**  
Enable the following Chrome flags:  

| **Category**      | **Flag**                                     | **Setting**             |  
|--------------------|----------------------------------------------|-------------------------|  
| WebGPU            | `chrome://flags/#enable-webgpu-developer-features` | Enabled                |  
| Gemini Nano       | `chrome://flags/#optimization-guide-on-device-model` | Enabled BypassPerfRequirement |  
| Prompt API        | `chrome://flags/#prompt-api-for-gemini-nano` | Enabled                |  

**Restart Chrome** after enabling these flags to apply changes.  

---

## 🔧 **Built-in AI Model (Gemini Nano) Setup**  

### **Step 1: Model Initialization**  
1. Open the [Prompt API Playground](https://chrome.dev/web-ai-demos/prompt-api-playground/).  
2. Launch the **DevTools Console** (`F12`).  
3. Execute:  
   ```javascript
   (await ai.languageModel.capabilities()).available;
   ```  
4. If the return value is `"after-download"`:  
   - Go to **chrome://components**.  
   - Verify **Optimization Guide On Device Model** version ≥ 2024.5.21.1031.  
   - If outdated, click **"Check for update"**.  

5. If the return value is `"no"`:  
   - Run in the Console:  
     ```javascript
     await ai.languageModel.create();
     ```  
   - If it fails (expected), relaunch Chrome and retry the earlier command.  

---

### **Step 2: Verify Gemini Nano**  
1. Execute in **DevTools Console**:  
   ```javascript
   (await ai.languageModel.capabilities()).available;
   ```  
2. Ensure return value is `"after-download"`.  
3. Confirm **Optimization Guide On Device Model** is updated under `chrome://components`.  

---

## 🏁 **How to Run the Code**  

### **Clone the Repository**  
1. Open your terminal or command prompt.  
2. Run:  
   ```bash
   git clone https://github.com/vinayak1729-web/Chrome-Sahayaka.git
   ```  

### **Launch the Application**  
1. Navigate to the project directory:  
   ```bash
   cd Chrome-Sahayaka
   ```  
2. Open `index.html` in your browser:  
   - Double-click on the `index.html` file.  
   - Or, right-click > "Open with..." > Select Chrome.  

### **Start Exploring**  
Enjoy exploring the interactive features like AI tutoring, Fun Zone, and mental health support.  

--- 

**Important:** After modifying Chrome flags, **restart Chrome** to ensure settings are activated correctly.  

--- 


## 🧰 **APIs and Technologies Used**  

- **Chrome AI APIs**:  
  - 🧾 **Prompt API**: Enables content generation.    
  - 🎙️ **Speech Recognition API**: Supports voice commands.  
- **Google Cloud Speech API**: Transcribes audio.  
- **yt-dlp**: Downloads YouTube videos and extracts audio.  
- **Flask Backend**: Powers server-side operations.  

---

## 🎓 **How to Use**  

### ✏️ **AI Learning Assistant**  
1. Type your question in the input field.  
2. Adjust **difficulty** and **length** settings.  
3. Use:  
   - **"Ask"** for instant answers.  
   - **"Save to PDF"** to save your query for future use.  
   - **"Create Lesson"** for a structured AI-generated lesson plan.  
   - **"Audio Class"** to listen to explanations through AI-generated voice.  

### 🎤 **Voice Commands**  
1. Activate the microphone icon.  
2. Speak naturally for queries or navigation.  
3. Let AI open tabs, search, and interact seamlessly.  

### 🎬 **YouTube Transcriptions**  
1. Paste a YouTube video URL.  
2. Click "Transcribe" to get detailed, multilingual text.  

### 🎮 **Fun Zone**  
1. Explore engaging games and creative tools.  
2. Use voice commands to create doodles, jokes, and more.  

---

## 🌈 **Future Enhancements**  
- 🌐 AR-powered immersive learning.  
- 🔋 Offline functionality for uninterrupted learning.  
- 💡 Enhanced interactivity with advanced AI models.  

---

## 🤝 **Contributing**  

We ❤️ contributions! Help us improve by:  
- Suggesting new features 🌟  
- Reporting bugs 🐞  
- Submitting pull requests 🚀  

---

## 👩‍💻 **Developers & Credits**  

Developed with 💖 by [Vinayak Shinde](https://github.com/vinayak1729-web), [Vishal Mishra](https://github.com/vishalmishra369),  [Chelsea Singla](https://github.com/Chelseasingla1),
and [Swasthika Devadiga](https://github.com/SwasthikaDev).

📫 **Contact**: Have questions? Drop an issue in the repo!  

🌟 **Star this repo** if you find it helpful.  

---

## 📜 **License**

This project is licensed under the [MIT License](https://www.notion.so/LICENSE).

---

### **MIT License**

```
MIT License

Copyright (c) 2024 Vinayak Shinde

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

```

---
