import Header from './components/Header'
import AllTapes from './pages/AllTapes';
import Footer from './components/Footer';

import a from './App.module.css';

function App() {

  return (
    <div className={a.app}>
      <Header />
      <AllTapes />
      <Footer />
    </div>
  )
}

export default App;
