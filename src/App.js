import React, { useState } from "react"

const App = () =>{
    return (
      <div id="main-container">
        <div id="page-header">
            <h1>CN Week 5 Handin</h1>
            <h2>To Do List</h2>
        </div>
        <div id="page-content"><ToDoList /></div>
        <div id="page-footer"></div>

    </div>
    )
}

const ToDoList = () =>{
  // the input
  const [list, setList] = useState([]);
  const [inputText, setInputText] = useState('');
  // the list
  

  const submitList = (event) => {
    event.preventDefault();
    let newListItem = [...list];
    newListItem.push(inputText)
    setList(newListItem)
    
  };

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
                <input type="text" d
                  placeholder="Add to Do item" 
                  required value={inputText} 
                  onChange={(event) => setInputText(event.target.value)}> 
                </input> 
                <div id="button-div">
                <button>Submit</button>
                </div>
          </form>
          </div>
            <div id="div-line">{list.map((list, index) => { 
              return (
              <div id="lineItem">
              
              <div>
                <p>{list}</p>
              </div>
                
              <div className="boxFlex"> 
                <button onClick={() => removeListItem(index)} 
                key={index}>remove item</button>
              </div>
              
            </div>)} )}
          </div>
        <div>

        </div>
      </div>
  )
}



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



export default App;