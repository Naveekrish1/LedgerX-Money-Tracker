import {FaWallet} from "react-icons/fa";
import TypeOfIncome from "./TypeOfIncome";
import TypeOfExp from "./TypeOfExp";
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';

function IncomeExpenseForm({
    income,
    expences,
    handleIncome,
    handleIncomeAdd,
    handleExpences,
    handleExpenceAdd,
    handleIncomeFocus,
    handleExpFocus,
    incomeInputRef,
    expInputRef,
    handleSubmit
  }) {
    return (
      <BrowserRouter basename="/LedgerX-Money-Tracker">
      <nav className="navbar">
        <NavLink to="/" className={({isActive}) => isActive ? "incomeLink active": "incomeLink"}><span className="incomeTitle">Income</span></NavLink> 
        <NavLink to="/exp" className={({isActive}) => isActive ? "expLink active" : "expLink"}><span className="expTitle">Expences</span></NavLink>
      </nav>
      <Routes>
        <Route path="/" element={ <TypeOfIncome
              income={income}
              handleIncome={handleIncome}
              handleIncomeAdd={handleIncomeAdd}
              handleIncomeFocus={handleIncomeFocus}
              incomeInputRef={incomeInputRef}
              handleSubmit={handleSubmit}
          />}
          />
          <Route path="/exp" element={ 
              <TypeOfExp
                  expences={expences}
                  handleExpences={handleExpences}
                  handleExpenceAdd={handleExpenceAdd}
                  handleExpFocus={handleExpFocus}
                  expInputRef={expInputRef}
                  handleSubmit={handleSubmit}
              />}
          />
           <Route path="*" element={ <TypeOfIncome
              income={income}
              handleIncome={handleIncome}
              handleIncomeAdd={handleIncomeAdd}
              handleIncomeFocus={handleIncomeFocus}
              incomeInputRef={incomeInputRef}
              handleSubmit={handleSubmit}
          />}
          />
      </Routes>
      </BrowserRouter>
    );
  }
  
  export default IncomeExpenseForm;