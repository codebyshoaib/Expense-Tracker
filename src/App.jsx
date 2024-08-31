import './App.css'
import Header from './Components/Header'
import Balance from './Components/Balance'
import IncomeExpense from './Components/IncomeExpenses'
import { TransactionList } from './Components/TransactionList'
import { AddTransaction } from './Components/AddTransaction'
import { GlobalProvider } from './context/GlobalState'
function App() {
  
  return (
    <GlobalProvider>
      <Header/>
      <div className="container">
        <Balance/>
        <IncomeExpense/>
        <TransactionList/>
        <AddTransaction/>
      </div>
      <div className="footer">
        <h5>Made with ❤️ By <span><a href="https://www.linkedin.com/in/shoaibbb/">Shoaib</a></span> </h5>
      </div>
    </GlobalProvider>
  )
}

export default App
