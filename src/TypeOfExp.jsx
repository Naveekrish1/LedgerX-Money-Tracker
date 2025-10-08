import styles from "./TypeOfAmt.module.css"

function TypeOfExp  ({
  expences,
  handleExpences,
  handleExpenceAdd,
  handleExpFocus,
  expInputRef,
  handleSubmit
}){
    return(
        <>
        <h1 className={styles.addAmt}>Add Your Expences</h1>
        <form onSubmit={handleSubmit}>
          <label className={styles.amtType}>
            Expences:
            <input
              ref={expInputRef}
              type="number"
              value={expences}
              onChange={handleExpences}
              placeholder="enter expense..."
            />
          </label>
          
        </form>
        <form className={styles.amtForm}>
         <input type="button" value="Shopping" onClick={() => handleExpFocus("Shopping")} />
 
         <input type="button" value="Food" onClick={() => handleExpFocus("Food")} />
 
         <input type="button" value="Education" onClick={() => handleExpFocus("Education")} />
 
         <input type="button" value="Travel" onClick={() => handleExpFocus("Travel")} />

         <input type="button" value="Phone" onClick={() => handleExpFocus("Phone")} />

         <input type="button" value="Sports" onClick={() => handleExpFocus("Sports")} />
   </form>
   <form className={styles.addBtn}>
   <button  type="button" onClick={handleExpenceAdd}>Add</button>
   </form>
        </>
    );
}

export default TypeOfExp 