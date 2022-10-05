import './App.css';
import Header from './components/first/Header/Header';
import ReactText from './components/first/ReactTxt/ReactText';
import Resources from './components/first/Resources/Resources';
import Footer from './components/first/Footer/Footer';
import TodosInput from './components/second/TodosInput';

function App() {
  return (
    <div className="App">
     <section className='first-section'>
      <Header />
      <ReactText />
      <Resources />
      <Footer />
     </section>

     <section className="second-section">
      <TodosInput />
     </section>
    </div>
  );
}

export default App;
