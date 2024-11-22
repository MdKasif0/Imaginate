const stablediffusionlargeApiKey = "Hugging_Face_API_KEY";
const stablediffusionlargeModelUrl = "https://api-inference.huggingface.co/models/stabilityai/stable-diffusion-3.5-large";

async function queryStableDiffusionLarge(data) {
    const loadingElement = document.getElementById("loading");
    const preloaderVideo = document.getElementById("preloader-video");

    // Show loading text and preloader video
    loadingElement.style.display = "block";
    preloaderVideo.style.display = "block";

    const response = await fetch(stablediffusionlargeModelUrl, {
        headers: {
            Authorization: `Bearer ${stablediffusionlargeApiKey}`,
            "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(data),
    });
    const result = await response.blob();

    // Hide loading text and preloader video
    loadingElement.style.display = "none";
    preloaderVideo.style.display = "none";

    return result;
}
