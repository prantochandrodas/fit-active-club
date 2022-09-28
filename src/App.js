import logo from './logo.svg';
import './App.css';

import Main from './component/Main/Main';
import Header from './component/Header/Header';

function App() {
  return (
    <div className='app-bg'>
      <Header></Header>
      <Main></Main>
    </div>
  );
}

export default App;
