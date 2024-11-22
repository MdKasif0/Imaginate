const stablediffusionApiKey = "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";
const stablediffusionModelUrl = "https://api-inference.huggingface.co/models/stabilityai/stable-diffusion-xl-base-1.0";

async function queryStableDiffusion(data) {
    const loadingElement = document.getElementById("loading");
    const preloaderVideo = document.getElementById("preloader-video");

    loadingElement.style.display = "block";
    preloaderVideo.style.display = "block";

    const response = await fetch(stablediffusionModelUrl, {
        headers: {
            Authorization: `Bearer ${stablediffusionApiKey}`,
            "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(data),
    });
    const result = await response.blob();

    loadingElement.style.display = "none";
    preloaderVideo.style.display = "none";

    return result;
}
