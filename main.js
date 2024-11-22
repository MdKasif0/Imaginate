let selectedModel = "stable_diffusion_xl_base_1.0";

// Dropdown setup
const dropdown = document.getElementById("model-dropdown");

dropdown.addEventListener("change", (event) => {
    selectedModel = event.target.value;

    // Display selected model in chat container
    const chatContainer = document.getElementById("chat-container");
    const modelMessage = document.createElement("div");
    modelMessage.classList.add("message");
    modelMessage.textContent = `Selected Model: ${
        selectedModel === "stable_diffusion_3.5_large" ? "Stable Diffusion 3.5 Large" :
        selectedModel === "FLUX.1_schnell" ? "Black Forest Labs" :
        selectedModel === "FLUX.1_dev" ? "XLabs-AI" :
        selectedModel === "Counterfeit_V2.5" ? "Counterfeit-V2.5" :
        "Stable Diffusion"
    }`;
    chatContainer.appendChild(modelMessage);
});

async function query(data) {
    if (selectedModel === "stable_diffusion_3.5_large") {
        return queryStableDiffusionLarge(data);
    } else if (selectedModel === "FLUX.1_schnell") {
        return queryBlackForestLabs(data);
    } else if (selectedModel === "FLUX.1_dev") {
        return queryXLabs(data);
    } else if (selectedModel === "Counterfeit_V2.5") {
        return queryCounterfeit(data);
    } else {
        return queryStableDiffusion(data); // Defaulting to stable-diffusion-xl-base-1.0
    }
}

// Event listener for image generation
document.getElementById("generate-button").addEventListener("click", async () => {
    const prompt = document.getElementById("prompt-input").value;
    if (!prompt.trim()) {
        // Show the modal for empty prompt
        document.getElementById("empty-prompt-modal").style.display = "block";
        return;
    }

    // Clear input field
    document.getElementById("prompt-input").value = "";

    // Display user prompt in chat container
    const chatContainer = document.getElementById("chat-container");
    const userMessage = document.createElement("div");
    userMessage.classList.add("user-input");
    userMessage.textContent = prompt;
    chatContainer.appendChild(userMessage);

    // Generate image from prompt based on selected model
    const imageBlob = await query({ inputs: prompt });
    const imageUrl = URL.createObjectURL(imageBlob);

    // Create AI response with image
    const aiResponse = document.createElement("div");
    aiResponse.classList.add("ai-response");

    // Add logo icon
    const logoIcon = document.createElement("img");
    logoIcon.src = "logo.png";
    logoIcon.classList.add("logo-icon");
    aiResponse.appendChild(logoIcon);

    // Add generated image
    const outputImage = document.createElement("img");
    outputImage.src = imageUrl;
    aiResponse.appendChild(outputImage);

    chatContainer.appendChild(aiResponse);
});

// Modal functionality
const modal = document.getElementById("empty-prompt-modal");
const closeModalButton = document.getElementById("close-modal");

closeModalButton.addEventListener("click", () => {
    modal.style.display = "none";
});
