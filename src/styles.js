import styled from '@emotion/styled';

export const Container = styled.div`
  position: relative;
  z-index: 2;
  width: 90%;
  max-width: 800px;
  padding: 2rem;
  background: rgba(16, 33, 65, 0.9);
  border-radius: 20px;
  backdrop-filter: blur(10px);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
`;

export const Title = styled.h1`
  color: #64ffda;
  text-align: center;
  margin-bottom: 2rem;
  font-size: 2.5rem;
  text-shadow: 0 0 10px rgba(100, 255, 218, 0.3);
`;

export const TextArea = styled.textarea`
  width: 100%;
  padding: 1rem;
  border: 2px solid #233554;
  border-radius: 10px;
  background: rgba(16, 33, 65, 0.8);
  color: #fff;
  font-size: 1rem;
  resize: vertical;
  min-height: 150px;
  transition: all 0.3s ease;
  line-height: 1.5;
  font-family: 'Consolas', 'Monaco', 'Courier New', monospace;

  &:focus {
    outline: none;
    border-color: #64ffda;
    box-shadow: 0 0 15px rgba(100, 255, 218, 0.2);
  }
`;

export const Button = styled.button`
  display: block;
  width: 100%;
  padding: 1rem;
  background: #64ffda;
  border: none;
  border-radius: 10px;
  color: #0a192f;
  font-size: 1.1rem;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: #4ad8b9;
    transform: translateY(-2px);
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
    transform: none;
  }
`;

export const EnhancedOutput = styled.div`
  margin-top: 1.5rem;
  padding: 1.5rem;
  background: rgba(35, 53, 84, 0.8);
  border-radius: 10px;
  color: #fff;
  display: ${props => props.visible ? 'block' : 'none'};
  font-family: 'Consolas', 'Monaco', 'Courier New', monospace;
  line-height: 1.6;
  font-size: 0.95rem;
  border: 1px solid rgba(100, 255, 218, 0.2);
  position: relative;

  h1 {
    color: #64ffda;
    margin: 1.5rem 0 1rem;
    font-size: 1.8rem;
    border-bottom: 1px solid rgba(100, 255, 218, 0.2);
    padding-bottom: 0.5rem;
  }

  h2 {
    color: #64ffda;
    margin: 1.2rem 0 0.8rem;
    font-size: 1.4rem;
  }

  h3, h4, h5, h6 {
    color: #64ffda;
    margin: 1rem 0 0.6rem;
  }

  p {
    margin: 0.8rem 0;
  }

  ul, ol {
    margin: 0.8rem 0;
    padding-left: 1.5rem;
  }

  li {
    margin: 0.4rem 0;
  }

  strong, b {
    color: #64ffda;
    font-weight: bold;
  }

  em, i {
    color: #8892b0;
    font-style: italic;
  }

  code {
    background: rgba(16, 33, 65, 0.6);
    padding: 0.2rem 0.4rem;
    border-radius: 4px;
    font-size: 0.9em;
    font-family: 'Consolas', 'Monaco', 'Courier New', monospace;
  }

  pre {
    background: rgba(16, 33, 65, 0.6);
    padding: 1rem;
    border-radius: 8px;
    overflow-x: auto;
    margin: 1rem 0;

    code {
      background: none;
      padding: 0;
      border-radius: 0;
    }
  }

  blockquote {
    border-left: 3px solid #64ffda;
    margin: 1rem 0;
    padding-left: 1rem;
    color: #8892b0;
  }

  hr {
    border: none;
    border-top: 1px solid rgba(100, 255, 218, 0.2);
    margin: 1.5rem 0;
  }

  a {
    color: #64ffda;
    text-decoration: none;
    border-bottom: 1px dashed #64ffda;
    transition: all 0.3s ease;

    &:hover {
      border-bottom-style: solid;
    }
  }

  table {
    width: 100%;
    border-collapse: collapse;
    margin: 1rem 0;
  }

  th, td {
    border: 1px solid rgba(100, 255, 218, 0.2);
    padding: 0.5rem;
    text-align: left;
  }

  th {
    background: rgba(16, 33, 65, 0.6);
    color: #64ffda;
  }
`;

export const CopyButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: rgba(100, 255, 218, 0.1);
  border: 1px solid rgba(100, 255, 218, 0.3);
  border-radius: 6px;
  color: #64ffda;
  padding: 0.5rem 1rem;
  font-size: 0.9rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(100, 255, 218, 0.2);
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
  }

  svg {
    width: 16px;
    height: 16px;
  }
`;
