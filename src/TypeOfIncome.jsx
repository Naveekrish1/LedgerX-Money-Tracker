import styles from "./TypeOfAmt.module.css"

function TypeOfIncome({
    income,
    handleIncome,
    handleIncomeAdd,
    handleIncomeFocus,
    incomeInputRef,
    handleSubmit,
    showInp,
    handleBackBtn
}) {
    return(
     <>
     <h1 className={styles.addAmt}>Add Your Income</h1>
     {showInp && (
      <div className={styles.incKeyboard}>
     <form onSubmit={handleSubmit}>
     <label className={styles.amtType}>
            {/* Income: */}
            <input
              ref={incomeInputRef}
              type="number"
              value={income}
              onChange={handleIncome}
              placeholder="Enter income..."
              onKeyDown={handleIncomeAdd}
            />
          </label>
     </form>
     </div>
     )}
   
     <form className={styles.amtFormInc}>
        <input type="button" value="Salary" onClick={() => handleIncomeFocus( "Salary")} />

        <input type="button" value="Bonus" onClick={() => handleIncomeFocus( "Bonus")} />

        <input type="button" value="Investment" onClick={() => handleIncomeFocus("Investment")} />

        <input type="button" value="Part-Time" onClick={() => handleIncomeFocus("Part-Time")} />
            </form>
            {/* <form className={styles.addBtn}>
            <button  type="button" onClick={handleIncomeAdd}>Add</button>
            </form> */}
            <button className={styles.backBtn} onClick={handleBackBtn}><i class="fa-solid fa-arrow-left"></i></button>
     </>

    );
}

export default TypeOfIncome