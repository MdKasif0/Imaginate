const xlabsApiKey = "Hugging_Face_API_KEY";
const xlabsModelUrl = "https://api-inference.huggingface.co/models/black-forest-labs/FLUX.1-dev";

async function queryXLabs(data) {
    const loadingElement = document.getElementById("loading");
    const preloaderVideo = document.getElementById("preloader-video");

    // Show loading text and preloader video
    loadingElement.style.display = "block";
    preloaderVideo.style.display = "block";

    const response = await fetch(xlabsModelUrl, {
        headers: {
            Authorization: `Bearer ${xlabsApiKey}`,
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
