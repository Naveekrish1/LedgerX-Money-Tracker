import { useEffect } from "react";
import {FaTrash, FaWallet} from "react-icons/fa";
import {MdAttachMoney} from "react-icons/md";
import styles from "./SummaryList.module.css"


function SummaryList({  expenceAdd, balance, setBalance, incomeList, incomeType, expList, expType, onAddClick, onDeleteIncome, onDeleteExp, handleRemove, records, onDeleteRecords}) {
    const finalIncome = records.filter((r) => r.type === 'income').reduce((sum, item) => sum + Number(item.amount), 0)

    const finalExp = records.filter((r) => r.type === 'expense').reduce((sum, item) => sum + Number(item.amount), 0)
    const bal = finalIncome - finalExp;

    useEffect(() =>{
      setBalance(bal);
    }, [bal, setBalance])

    return (
      <>
      <div className={styles.main}>
      <div className={styles.mainHeader}>
      <div className={styles.header}>
        <h1 className={styles.logo}>LedgerX</h1>
        <span className={styles.icon}><i className="fa-regular fa-user"></i></span>

      </div>
      
      <h5 className={styles.name}>Money Tracker</h5>
      <div className={styles.tracker}>
        <ul>
            <li className={styles.inc}>Income</li>
            <li className={styles.incAmt}>{finalIncome}</li>
        </ul>
        <ul>
            <li className={styles.blns}>Balance</li>
            <li className={styles.blnsAmt}>{balance}</li>
        </ul>
        <ul>
            <li className={styles.exp}>Expenses</li>
            <li className={styles.expAmt}>{finalExp}</li>
        </ul>
      </div>
      </div>
  {records.length > 0 ? (    
  <div className={styles.lists} onClick={handleRemove}>
        
   <ul>
  {records.map((record, i) => (
    <li key={i} className={styles.records}>
      <span className={styles.amtType}>{record.label}</span>
      <span
        className={styles.amount}
        style={{ color: record.type === 'income' ? '#3ddc97' : '#e74c3c' }}
      >
        {record.type === 'income' ? `+${record.amount}` : `-${record.amount}`}
      </span>
      <button onClick={() => onDeleteRecords(i)}>
        <i className="fa-solid fa-trash"></i>
      </button>
    </li>
  ))}
</ul>
           
  </div>
  
  ) : (<p className={styles.empty}>No Records Yet</p>)}
 

      <div className={styles.plus}><button onClick={onAddClick}><i className="fa-solid fa-plus"></i></button></div>

  
     
     
      </div>
      </>
    );
  }
  
  export default SummaryList;