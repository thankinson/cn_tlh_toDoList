import React, { useState } from "react"


const App = () =>{
    return (
      <div id="main-container">
        <div id="page-header">
            <h1>CN Week 5 Coursework</h1>
            <h2>To Do List</h2>
        </div>
        <div id="page-content"><ToDoList /></div>
        <div id="page-footer"><h4>CN Week 5 Handin To Do List || Tom Hankinson</h4></div>

    </div>
    )
}

const ToDoList = () =>{
  // empty list for input to be held
  const [list, setList] = useState([]);
  // input stored here
  const [inputText, setInputText] = useState('');


  const [disable, setDisable] =useState(true);
  // const checkBoxTick = () => {
  //   setDisable(!disable)
  // }
 
  
  // this submits the item
  const submitList = (event) => {
    event.preventDefault();
    let newListItem = [...list];
    newListItem.push(inputText)
    setList(newListItem)
    
  };
    // this removes the item
    const removeListItem = (index) =>{
      let ListItem = [...list]
      ListItem.splice(index, 1)
      setList(ListItem)
    }
 
  return (
      <div id="the-list">
        
        <div id="list-Input">
        <h3>The List</h3>
        <form onSubmit={submitList}>
                <input type="text" 
                  placeholder="Add to Do item" 
                  required value={inputText} 
                  onChange={(event) => setInputText(event.target.value)}> 
                </input> 
                <div id="button-div">
                <button>Submit</button>
                </div>
          </form>
          </div>
          
          <div id="div-line"></div>
            
            <div id="lineItem">{list.map((list, index) => { 
              return (
              <div id="lineItem">
              
                <div id="listedItems">
                  <p>{list}</p>
                </div>
                  
                <div id="button-list-div"> 
                    
                    <label for="chekBox">Tick if done</label><input type="checkbox" id="checkBox" onChange={()=> setDisable(!disable) } />
                    <button disabled={disable} onClick={() => removeListItem(index)} key={index}>Remove Item</button>
                </div>
                <div id="div-line"></div>
              </div>)})}

                
            </div>
  
  </div>
  )}

export default App;




  // const MyToDoList = () =>{
  //   return ( 
  //     <div>
  //     {list.map((doList, index) =>{  
  //     return <list doList={doList} key={index} />
  //   })}
  //   </div>
  //   )
  // }
// const myList = (list) => {
//   return (
//     <div>
//       {list.map}
//     </div>
//   )

// }
