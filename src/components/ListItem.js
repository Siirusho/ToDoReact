import React from "react";

function ListItem(props ) {
    function onDelBtn() {
       props.delMe(props.items.id)
    }
    return(
    <div id='container'>
      <input id='checkbox' type='checkbox'/>
      <span id='listitem'> {props.items.text} </span>
      <button id='btn' onClick={onDelBtn}>X</button>
     </div>
    )
}
export default ListItem
    