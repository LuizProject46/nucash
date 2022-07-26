
import { useState } from 'react';
import './App.css';
import Form from './components/Form';
import Header from './components/Header';
import List from './components/List';



function App() {
  const [listTransactions, setListTransactions] = useState([
    
  ])

  return (
    <div>
      <Header/>
      <main>
        <section className="content-form">
          <Form 
            listTransactions={listTransactions} 
            setListTransasctions={setListTransactions}
          />
         
          <List 
            listTransactions={listTransactions}
          />
        </section>
      </main>
    </div>
  );
}


export default App;
