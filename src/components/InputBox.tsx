import React, { useState } from 'react';
import './../styles/InputBox.css';

interface InputBoxProps {
  onSend: (message: string) => void;
}

const InputBox: React.FC<InputBoxProps> = ({ onSend }) => {
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (input.trim()) {
      onSend(input);
      setInput('');
    }
  };

  return (
    <div className="input-box">
      <input
        type="text"
        placeholder="yapay zeka ile ilgili bir şey sor..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleSend}>Gönder</button>
    </div>
  );
};

export default InputBox;
