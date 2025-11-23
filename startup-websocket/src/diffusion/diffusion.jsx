import React from 'react';
import { Button } from 'react-bootstrap';
import './diffusion.css';

export function Diffusion() {
  const [prompt, setPrompt] = React.useState('');
  const [imageUrl, setImageUrl] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState('');

  async function generateImage() {
    if (!prompt.trim()) {
      setError('Please enter a prompt');
      return;
    }

    setLoading(true);
    setError('');
    setImageUrl('');

    try {
      // Using Hugging Face Inference API with a public model
      const response = await fetch(
        'https://api-inference.huggingface.co/models/stabilityai/stable-diffusion-2-1',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ inputs: prompt }),
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to generate image');
      }

      // Get the image blob
      const blob = await response.blob();
      const url = URL.createObjectURL(blob);
      setImageUrl(url);
    } catch (err) {
      console.error('Error generating image:', err);
      setError(err.message || 'Failed to generate image. Please try again.');
    } finally {
      setLoading(false);
    }
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !loading) {
      generateImage();
    }
  };

  return (
    <main className="diffusion-container">
      <div className="diffusion-content">
        <h1 className="text-center mb-4">AI Image Generation Lab</h1>
        <p className="text-center text-muted mb-4">
          Create images using AI diffusion models. Enter a text description and watch the magic happen!
        </p>

        <div className="input-section">
          <div className="form-group mb-3">
            <label htmlFor="prompt" className="form-label">
              Image Prompt
            </label>
            <input
              type="text"
              className="form-control"
              id="prompt"
              placeholder="e.g., A majestic cougar in the mountains at sunset"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              onKeyPress={handleKeyPress}
              disabled={loading}
            />
          </div>

          <Button
            variant="primary"
            onClick={generateImage}
            disabled={loading || !prompt.trim()}
            className="w-100 mb-3"
          >
            {loading ? 'Generating...' : 'Generate Image'}
          </Button>
        </div>

        {error && (
          <div className="alert alert-danger" role="alert">
            {error}
          </div>
        )}

        {loading && (
          <div className="loading-section text-center">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
            <p className="mt-3">Creating your image... This may take a few moments.</p>
          </div>
        )}

        {imageUrl && !loading && (
          <div className="image-section">
            <h3 className="text-center mb-3">Generated Image</h3>
            <div className="generated-image-container">
              <img src={imageUrl} alt="Generated artwork" className="generated-image" />
            </div>
            <div className="image-actions mt-3">
              <Button
                variant="secondary"
                onClick={() => {
                  const link = document.createElement('a');
                  link.href = imageUrl;
                  link.download = `generated-${Date.now()}.png`;
                  link.click();
                }}
                className="me-2"
              >
                Download Image
              </Button>
              <Button
                variant="outline-primary"
                onClick={() => {
                  setImageUrl('');
                  setPrompt('');
                }}
              >
                Create Another
              </Button>
            </div>
          </div>
        )}

        <div className="info-section mt-4">
          <h4>How it works</h4>
          <p>
            This lab uses Stable Diffusion, a state-of-the-art text-to-image model, to generate images
            based on your text descriptions. The AI has been trained on millions of images and can create
            unique artwork in various styles.
          </p>
          <h5>Tips for better results:</h5>
          <ul>
            <li>Be specific about what you want to see</li>
            <li>Include details about style, colors, and mood</li>
            <li>Mention the setting or background</li>
            <li>Try different artistic styles (e.g., "oil painting", "digital art", "photograph")</li>
          </ul>
        </div>
      </div>
    </main>
  );
}
