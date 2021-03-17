import './App.css';
import Footer from './components/Page/Footer/Footer';
import Header from './components/Page/Header/Header';
import Wrapper from './components/Page/Wrapper/Wrapper';



function App() {
  return (
    <div className='Page'>
        <Header/>
        <Wrapper/>
        <Footer/>
    </div>
  );
}

export default App;
