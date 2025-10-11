import React, { useState, useRef, useEffect } from "react";
import IncExp from "./IncExp";
import SummaryList from "./SummaryList";
import {FaWallet} from "react-icons/fa";


function App() {
  const [income, setIncome] = useState("");
  const [total, setTotal] = useState(0);
  const [expences, setExpences] = useState("");
  const [expenceAdd, setExpenceAdd] = useState(0);
  const [balance, setBalance] = useState(0);

  const [incomeList, setIncomeList] = useState([]);
  const [expList, setExpList] = useState([]);
  const [incomeType, setIncomeType] = useState([]);
  const [expType, setExpType] = useState([]);
  const [showInp, setShowInp] = useState(false);
  const [showForm, setShowForm] = useState(false); // 👉 toggle state
 const [records, setRecords] = useState([]);
  const incomeInputRef = useRef(null);
  const expInputRef = useRef(null);

 

  // ✅ Income logic
  const handleIncome = (e) => setIncome(Number(e.target.value));
  const handleIncomeAdd = () => {
    const totalIncome = total + income;
    setTotal(totalIncome);

    if (income !== "") {
      setIncomeList([...incomeList, income]);
      setRecords([...records, {type: "income", label: incomeType[incomeType.length-1], amount:income }])
      setIncome("");
    }

     if(income === ""|| income === 0){
       alert("Please Enter Valid Income")
       return;
     }

    setShowForm(false); // 👉 return to Summary
  };


  // ✅ Expense logic
  const handleExpences = (e) => setExpences(Number(e.target.value));
  const handleExpenceAdd = () => {
    const totalExp = expences + expenceAdd;
    setExpenceAdd(totalExp);
    const bal = total - totalExp;
    setBalance(bal);

    if (expences !== "") {
      setExpList([...expList, expences]);
      setRecords([...records, {type: "expense", label: expType[expType.length-1],amount:expences }])
      setExpences("");
    }

    if(expences === ""|| expences === 0){
      alert("Please Enter Valid Expences")
      return;
    }

    setShowForm(false); // 👉 return to Summary
  };

  // ✅ Category focus logic
  const handleIncomeFocus = ( incValue) => {
   setTimeout(() => incomeInputRef.current?.focus(), 1000) 
    setIncomeType((prev) => [ ...prev, incValue]);
    setShowInp(true);
  };
  const handleExpFocus = (expValue) => {
    expInputRef.current.focus();
    setExpType((prev) => [ ...prev ,expValue]);
  };

  const handleSubmit = (e) =>{
    e.preventDefault();
}



const handleDeleteRecords = (index) =>{
  setRecords(records.filter((_, i) => i !== index));
}

// const handleDeleteIncome = (index) =>{
//      const updatedItem = incomeList.filter((_, i) => i !== index);
//       setIncomeList(updatedItem);
// }

// const handleDeleteExp = (index) =>{
//      const updatedItem = expList.filter((_, i) => i !== index);
//       setExpList(updatedItem);
// }




  return (
    <>
      {!showForm ? (
        <SummaryList
          total={total}
          expenceAdd={expenceAdd}
          balance={balance}
          setBalance={setBalance}
          incomeList={incomeList}
          incomeType={incomeType}
          expList={expList}
          expType={expType}
          onAddClick={() => setShowForm(true)} // 👉 open form when + clicked
          // onDeleteIncome={handleDeleteIncome}
          // onDeleteExp={handleDeleteExp}
          onDeleteRecords={handleDeleteRecords}
          records={records}
        />
      ) : (
        <IncExp
          income={income}
          expences={expences}
          handleIncome={handleIncome}
          handleIncomeAdd={handleIncomeAdd}
          handleExpences={handleExpences}
          handleExpenceAdd={handleExpenceAdd}
          handleIncomeFocus={handleIncomeFocus}
          handleExpFocus={handleExpFocus}
          incomeInputRef={incomeInputRef}
          expInputRef={expInputRef}
          handleSubmit={handleSubmit}
          showInp={showInp}
        />
      )}
    </>
  );
}

export default App;