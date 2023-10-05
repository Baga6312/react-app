function ListGroup() { 
    const items = [
      'New York', 
      'San Francisco',
      'tokyo',
      'london',
      'paris'
    ]

    return(<>
    <h1>List Group</h1>
    <ul className="list-group">
      {items.map(item => <li key ={item} className="list-group-item">{item}</li>)}
    </ul>
    </>);
}

export default ListGroup;