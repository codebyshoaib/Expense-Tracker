import { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

function Balance() {
    const { transactions } = useContext(GlobalContext);
    const amounts = transactions.map(transaction => parseFloat(transaction.amount) || 0); // Ensure all amounts are numbers

    const total = amounts.reduce((acc, item) => acc + item, 0).toFixed(2); // Calculate total and fix to 2 decimal places
  
    return (
        <>
            <h4>Your Balance</h4>
            <h1>${total}</h1>
        </>
    );
}

export default Balance;
