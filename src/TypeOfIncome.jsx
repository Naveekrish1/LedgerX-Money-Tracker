import styles from "./TypeOfAmt.module.css"

function TypeOfIncome({
    income,
    handleIncome,
    handleIncomeAdd,
    handleIncomeFocus,
    incomeInputRef,
    handleSubmit
}) {
    return(
     <>
     <h1 className={styles.addAmt}>Add Your Income</h1>
     <form onSubmit={handleSubmit}>
     <label className={styles.amtType}>
            Income:
            <input
              ref={incomeInputRef}
              type="number"
              value={income}
              onChange={handleIncome}
              placeholder="Enter income..."
            />
          </label>
     </form>
     <form className={styles.amtFormInc}>
        <input type="button" value="Salary" onClick={() => handleIncomeFocus( "Salary")} />

        <input type="button" value="Bonus" onClick={() => handleIncomeFocus( "Bonus")} />

        <input type="button" value="Investment" onClick={() => handleIncomeFocus("Investment")} />

        <input type="button" value="Part-Time" onClick={() => handleIncomeFocus("Part-Time")} />
            </form>
            <form className={styles.addBtn}>
            <button  type="button" onClick={handleIncomeAdd}>Add</button>
            </form>
     </>

    );
}

export default TypeOfIncome