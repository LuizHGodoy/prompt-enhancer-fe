import { useState, useCallback } from 'react';
import axios from 'axios';
import { Container, Title, TextArea, Button, EnhancedOutput, CopyButton } from './styles';
import { loadSlim } from "tsparticles-slim";
import Particles from "react-tsparticles";
import ReactMarkdown from 'react-markdown';

function App() {
  const [prompt, setPrompt] = useState('');
  const [enhancedPrompt, setEnhancedPrompt] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [copyStatus, setCopyStatus] = useState('');

  const particlesInit = useCallback(async engine => {
    await loadSlim(engine);
  }, []);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(enhancedPrompt);
      setCopyStatus('Copiado!');
      setTimeout(() => setCopyStatus(''), 2000);
    } catch (err) {
      console.error('Erro ao copiar:', err);
      setCopyStatus('Erro ao copiar');
    }
  };

  const particlesConfig = {
    particles: {
      number: { value: 80, density: { enable: true, value_area: 800 } },
      color: { value: '#64ffda' },
      shape: { type: 'circle' },
      opacity: {
        value: 0.5,
        random: false,
        anim: { enable: false }
      },
      size: {
        value: 3,
        random: true,
        anim: { enable: false }
      },
      links: {
        enable: true,
        distance: 150,
        color: '#64ffda',
        opacity: 0.4,
        width: 1
      },
      move: {
        enable: true,
        speed: 2,
        direction: 'none',
        random: false,
        straight: false,
        outModes: { default: 'out' },
        attract: { enable: true, rotateX: 600, rotateY: 1200 }
      }
    },
    interactivity: {
      detectsOn: 'canvas',
      events: {
        onHover: { enable: true, mode: 'repulse' },
        onClick: { enable: true, mode: 'push' },
        resize: true
      },
      modes: {
        repulse: { distance: 100, duration: 0.4 },
        push: { particles_nb: 4 }
      }
    },
    retina_detect: true
  };

  const enhancePrompt = async () => {
    if (!prompt.trim()) {
      setEnhancedPrompt('Por favor, insira um prompt para aprimorar.');
      return;
    }

    setIsLoading(true);
    try {
      const response = await axios.post(`${import.meta.env.VITE_API_BASE_URL}/enhance-prompt`, {
        prompt: prompt.trim()
      });
      setEnhancedPrompt(response.data.enhancedPrompt);
    } catch (error) {
      setEnhancedPrompt('Erro ao aprimorar o prompt. Por favor, tente novamente.');
      console.error('Erro:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div style={{
      background: '#0a192f',
      minHeight: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      overflow: 'hidden',
      position: 'relative'
    }}>
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={particlesConfig}
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          zIndex: 1
        }}
      />
      <Container>
        <Title>✨ Prompt Enhancer</Title>
        <div style={{ marginBottom: '1rem' }}>
          <TextArea
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Digite seu prompt aqui..."
          />
        </div>
        <Button 
          onClick={enhancePrompt}
          disabled={isLoading}
        >
          {isLoading ? 'Aprimorando...' : 'Aprimorar Prompt'}
        </Button>
        <EnhancedOutput visible={enhancedPrompt !== ''}>
          {enhancedPrompt && (
            <CopyButton onClick={handleCopy}>
              {copyStatus || (
                <>
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                    aria-labelledby="copyIconTitle"
                    role="img"
                  >
                    <title id="copyIconTitle">Ícone de copiar</title>
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" 
                    />
                  </svg>
                  Copiar
                </>
              )}
            </CopyButton>
          )}
          <ReactMarkdown>{enhancedPrompt}</ReactMarkdown>
        </EnhancedOutput>
      </Container>
    </div>
  );
}

export default App;
