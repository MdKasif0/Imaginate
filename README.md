# Imaginate

A web application that generates images using various Hugging Face models.

## Features

- Image generation based on user prompts.
- Selection from multiple image generation models:
    - Stable Diffusion
    - Stable Diffusion 3.5 Large
    - Black Forest Labs
    - XLabs-AI
    - Counterfeit-V2.5
- Simple and intuitive user interface.

## How to Use

1.  Select your desired model from the dropdown menu at the top of the page.
2.  Type your image generation prompt in the input field at the bottom.
3.  Click the send button (arrow icon) to generate the image.
4.  Your prompt and the generated image will appear in the chat area.

## Technologies Used

- HTML
- CSS
- JavaScript
- Hugging Face Inference API

## Important: API Key Configuration

This application requires a Hugging Face API Key to function.

You will need to replace the placeholder `"Hugging_Face_API_KEY"` (or `" Hugging_Face_API_KEY"` with a leading space) with your actual Hugging Face API key in the following JavaScript files:

-   `Stable Diffusion.js`
-   `Stable Diffusion 3.5 Large.js`
-   `Black Forest Labs.js`
-   `XLabs-AI.js`
-   `Counterfeit-V2.5.js`

**Example (in each of the JS files mentioned above):**

Find a line similar to:

`const someModelApiKey = "Hugging_Face_API_KEY";`

And replace it with your key:

`const someModelApiKey = "your_actual_hugging_face_api_key_here";`

**Note:** The variable name (e.g., `stablediffusionApiKey`, `xlabsApiKey`) will differ between files, but the placeholder string `"Hugging_Face_API_KEY"` is consistent (sometimes with a leading space). Ensure you replace this placeholder in all listed JavaScript files.
