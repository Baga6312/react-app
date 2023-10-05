import { useState } from "react";

function ListGroup() { 
    
  let items = [
      'New York', 
      'San Francisco',
      'tokyo',
      'london',
      'paris' 
    ]

  const [selectedIndex , setSelectedIndex] = useState (-1);
    
    return(<>
    <h1>List Group</h1>
    <ul className="list-group">
      {items.length ===0 && <p>no item found</p>}
      {items.map((item , index) => <li key ={item} onClick={()=>setSelectedIndex(index)} className={selectedIndex == index ? 'list-group-item active' : 'list-group-item'}>{item}</li>)}
    </ul>
    </>);
}

export default ListGroup;