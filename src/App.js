import './App.css';
import Header from "./header/Header"
import Sidebar from "./Sidebar/Sidebar"
import Feed from "./Feeds/Feed"

function App() {
  return (
    <div className="app">
      <Header />
    <div className="app-body">
      
      <Sidebar />
      <Feed />
      </div>
    </div>
  );
}

export default App;
