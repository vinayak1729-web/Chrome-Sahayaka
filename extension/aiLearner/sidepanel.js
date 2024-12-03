const geminiNanoError = "⚠️ Error: Gemini Nano not available. <br/>Make sure you follow <a href='https://github.com/gigaArpit/AI-Summarizer/blob/main/docs/extension-welcome.md' target='_blank'>these steps</a> to enable the Gemini Nano in your browser.";

const updateSummary = (text) => {
    document.getElementById('summary').innerHTML = text;
};

async function summarizeText(inputText) {
    if (!window.ai || !window.ai.summarizer) {
        console.error("AI Summarizer is not available.");
        return false;
    }
    
    try {
        // Check capabilities first
        const capabilities = await window.ai.summarizer.capabilities();
        if (capabilities.available !== "readily" && capabilities.available !== "after-download") {
            console.warn("Summarizer is not supported or unavailable.");
            return false;
        }
        
        document.getElementById('summary').innerHTML = "Summarizing...";
        
        // Create a summarizer instance
        const summarizer = await window.ai.summarizer.create({
            type: 'key-points',
            format: 'plain-text',
            length: 'medium',
        });
        
        const stream = await summarizer.summarizeStreaming(inputText);
        
        let result = '';
        let previousLength = 0;
        for await (const segment of stream) {
            const newContent = segment.slice(previousLength);
            console.log(newContent);
            previousLength = segment.length;  
            result += newContent;
            updateSummary(result);
        }
        
        summarizer.destroy();
        await chrome.storage.local.clear(() => {
            if (chrome.runtime.lastError) {
                console.error('Error clearing storage:', chrome.runtime.lastError);
            } else {
                console.log('Storage cleared successfully.');
            }
        });
        
        return true;
    } catch (error) {
        console.error("Error during summarization:", error);
        return false;
    }
}

chrome.storage.local.get('selectedText', async ({ selectedText  }) => {
    if(selectedText === undefined) {
        updateSummary("Select some text, and use extension's context menu option to see result here.");
    } else {
        if (!window.ai || !window.ai.summarizer) {
            console.error("AI Summarizer is not available.");
            updateSummary(geminiNanoError);
        }
        
        else {
            let summary = await summarizeText(selectedText);
            if (!summary) {
                updateSummary("Gemini Nano failed to generate a summary. Please try again later.");
            }
        }
        
    };
});

chrome.storage.onChanged.addListener((changes, namespace) => {
    if (namespace === 'local' && changes.selectedText && changes.selectedText.newValue !== undefined) {
        if (!window.ai || !window.ai.summarizer) {
            console.error("AI Summarizer is not available.");
            updateSummary(geminiNanoError);
        } else summarizeText(changes.selectedText.newValue).then((summary) => {
            if (!summary) {
                updateSummary("Gemini Nano failed to generate a summary. Please try again later.");
            }
        });
    }
});

const port = chrome.runtime.connect({ name: 'sidePanelPort' });