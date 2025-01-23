import { useState } from 'react';
import axios from 'axios';
import InputBox from './InputBox';
import './../styles/ChatBox.css';

const ChatBox = () => {
  const [messages, setMessages] = useState<{ user: string; bot: string }[]>([]);
  const [isLoading, setIsLoading] = useState(false); // Yükleme durumu için state

  const sendMessage = async (userMessage: string) => {
    setIsLoading(true); // API çağrısı öncesinde yükleme durumuna geç
    const botResponse = await fetchBotResponse(userMessage); // API çağrısı yap
    setMessages([...messages, { user: userMessage, bot: botResponse }]);
    setIsLoading(false); // Yükleme durumunu kapat
  };

  const fetchBotResponse = async (message: string) => {
    try {
      const response = await axios.post(
        'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=AIzaSyCTuBJbxeh865skR_oejcpW0fFpfAaR8ho',
        {
          contents: [
            {
              parts: [{ text: message }],
            },
          ],
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      // Yanıtı alın ve döndürün
      return response.data.candidates[0].content.parts[0].text;
    } catch (error) {
      console.error('API Hatası:', error);
      return 'Üzgünüm, bir hata oluştu.';
    }
  };

  return (
    <div className="chat-box">
      <div className="chat-messages">
        {messages.map((msg, index) => (
          <div key={index} className="message">
            <p>
              <strong>Siz:</strong> {msg.user}
            </p>
            <p>
              <strong>Botito:</strong> {msg.bot}
            </p>
          </div>
        ))}
        {isLoading && <p className="is-typing">Botito yazıyor...</p>}
      </div>
      <InputBox onSend={sendMessage} />
    </div>
  );
};

export default ChatBox;
