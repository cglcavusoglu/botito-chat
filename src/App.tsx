import Header from './components/Header';
import ChatBox from './components/ChatBox';
import './styles/App.css';

const App = () => {
  return (
    <div className="app-container">
      <Header />
      <ChatBox />
    </div>
  );
};

export default App;
