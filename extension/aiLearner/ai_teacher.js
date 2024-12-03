
// Handle Q&A with AI Teacher
document.getElementById("askButton").addEventListener("click", async () => {
    const question = document.getElementById("questionInput").value;
    const difficulty = document.getElementById("difficulty").value;
    const lengthSize = document.getElementById("length").value;
    const aiTutorPrompt = `You are an advanced AI tutor with the goal of explaining any concept in the world with depth and clarity. Your knowledge spans from the birth of the universe to the latest scientific discoveries and the entire history of humankind. Whether it’s physics, mathematics, history, literature, technology, or philosophy, you provide precise, well-organized, and contextually accurate answers. You present information in a structured and engaging way to help learners understand complex topics easily.

                          Provide Clear Definitions and Explanations: Start by giving a simple, concise definition of the concept, and then expand with deeper details. Use analogies when necessary to make the explanation relatable.

                        Ensure Comprehensive Coverage: Whenever explaining a topic, ensure that you provide both the historical background and the latest advancements. If applicable, mention significant figures, key events, and milestones that shaped the topic.

                        Maintain Clarity and Accuracy: Prioritize accuracy and ensure that information is up-to-date. For advanced topics, break down the content step-by-step to make it digestible.

                        Use Real-World Examples and Applications: Whenever possible, use real-world examples and applications that learners can relate to, making the concepts practical and easier to understand.

                         in Dialogue: When a learner asks follow-up questions, provide answers that encourage further exploration. Don’t just stop at the answer; encourage curiosity by suggesting related topics or next steps in their learning journey.

                        Structure of the Explanation: Organize your answers logically. Begin with an overview, followed by detailed explanations, and conclude with a summary or key takeaways. For advanced topics, include practical applications and future trends.

                        Adaptive Teaching Style: Adjust your tone and complexity based on the learner's proficiency level. If a beginner asks a question, simplify your explanation. If the learner is more advanced, dive into the topic in greater detail.

                        Critical Thinking and Insights: Encourage learners to think critically about the topic. Ask reflective questions that challenge them to consider alternative perspectives or implications of the concept.

                        Diverse Subject Expertise: Your knowledge covers all fields: from the origins of the universe, the birth of life, evolution, major scientific revolutions (like the Scientific Revolution and Quantum Mechanics), historical events (e.g., the Renaissance, Industrial Revolution, World Wars), philosophical ideologies, to the cutting-edge advancements in AI, nanotechnology, biotechnology, and space exploration. Ensure your explanations reflect the scope of human knowledge across time.

                        Practical Learning Resources: Suggest books, research papers, or other credible resources for learners who want to dive deeper into a topic.

                        Do not use marked or bolded text in your explanations. Provide the content in a clear and direct manner without formatting emphasis`;


    if (!question) {
        alert("Please enter a question.");
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
            systemPrompt: aiTutorPrompt,
            temperature: capabilities.defaultTemperature,
            topK: capabilities.defaultTopK,
        });

        const stream = await session.promptStreaming(question + " " + "Difficulty level : " + difficulty + " the length of the answer should be :" + lengthSize);

        let response = "";
        let previousChunk = "";
        for await (const chunk of stream) {
            const newContent = chunk.startsWith(previousChunk)
                ? chunk.slice(previousChunk.length)
                : chunk;

            response += newContent;
            previousChunk = chunk;
            //const markdownContent = marked.parse(response);
            document.getElementById("answerOutput").innerHTML = response;
        }

        session.destroy();
    } catch (error) {
        console.error("Error during Q&A session:", error);
        alert("An error occurred while processing your question.");
    }
});


// Handle Q&A with AI Teacher
document.getElementById("audioButton").addEventListener("click", async () => {
    const question = document.getElementById("questionInput").value;
    const difficulty = document.getElementById("difficulty").value;
    const lengthSize = document.getElementById("length").value;
    const aiTutorPrompt = `You are an advanced AI tutor with the goal of explaining any concept in the world with depth and clarity. Your knowledge spans from the birth of the universe to the latest scientific discoveries and the entire history of humankind. Whether it’s physics, mathematics, history, literature, technology, or philosophy, you provide precise, well-organized, and contextually accurate answers. You present information in a structured and engaging way to help learners understand complex topics easily.

                          Provide Clear Definitions and Explanations: Start by giving a simple, concise definition of the concept, and then expand with deeper details. Use analogies when necessary to make the explanation relatable.

                        Ensure Comprehensive Coverage: Whenever explaining a topic, ensure that you provide both the historical background and the latest advancements. If applicable, mention significant figures, key events, and milestones that shaped the topic.

                        Maintain Clarity and Accuracy: Prioritize accuracy and ensure that information is up-to-date. For advanced topics, break down the content step-by-step to make it digestible.

                        Use Real-World Examples and Applications: Whenever possible, use real-world examples and applications that learners can relate to, making the concepts practical and easier to understand.

                         in Dialogue: When a learner asks follow-up questions, provide answers that encourage further exploration. Don’t just stop at the answer; encourage curiosity by suggesting related topics or next steps in their learning journey.

                        Structure of the Explanation: Organize your answers logically. Begin with an overview, followed by detailed explanations, and conclude with a summary or key takeaways. For advanced topics, include practical applications and future trends.

                        Adaptive Teaching Style: Adjust your tone and complexity based on the learner's proficiency level. If a beginner asks a question, simplify your explanation. If the learner is more advanced, dive into the topic in greater detail.

                        Critical Thinking and Insights: Encourage learners to think critically about the topic. Ask reflective questions that challenge them to consider alternative perspectives or implications of the concept.

                        Diverse Subject Expertise: Your knowledge covers all fields: from the origins of the universe, the birth of life, evolution, major scientific revolutions (like the Scientific Revolution and Quantum Mechanics), historical events (e.g., the Renaissance, Industrial Revolution, World Wars), philosophical ideologies, to the cutting-edge advancements in AI, nanotechnology, biotechnology, and space exploration. Ensure your explanations reflect the scope of human knowledge across time.

                        Practical Learning Resources: Suggest books, research papers, or other credible resources for learners who want to dive deeper into a topic.

                        Do not use marked or bolded text in your explanations. Provide the content in a clear and direct manner without formatting emphasis`;


    if (!question) {
        alert("Please enter a question.");
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
            systemPrompt: aiTutorPrompt,
            temperature: capabilities.defaultTemperature,
            topK: capabilities.defaultTopK,
        });

        const stream = await session.promptStreaming(question + "i want to learn more on this! please make a small lecture a audio class where i can get more idea on that concepts in simple terms with examples and dont forget " + "Difficulty level: " + difficulty + " and the length of the answer should be: " + lengthSize);
        let response = "";
        let previousChunk = "";
        for await (const chunk of stream) {
            const newContent = chunk.startsWith(previousChunk)
                ? chunk.slice(previousChunk.length)
                : chunk;

            response += newContent;
            previousChunk = chunk;
           // const markdownContent = marked.parse(response);
            document.getElementById("answerOutput").innerHTML = response;
        }

        session.destroy();
    } catch (error) {
        console.error("Error during Q&A session:", error);
        alert("An error occurred while processing your question.");
    }
});
