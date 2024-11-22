const counterfeitApiKey = "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";
const counterfeitModelUrl = "https://api-inference.huggingface.co/models/gsdf/Counterfeit-V2.5";

async function queryCounterfeit(data) {
    const loadingElement = document.getElementById("loading");
    const preloaderVideo = document.getElementById("preloader-video");

    // Show loading text and preloader video
    loadingElement.style.display = "block";
    preloaderVideo.style.display = "block";

    const response = await fetch(counterfeitModelUrl, {
        headers: {
            Authorization: `Bearer ${counterfeitApiKey}`,
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