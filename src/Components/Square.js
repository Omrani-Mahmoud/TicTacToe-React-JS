import React from "react";
import Button from '@material-ui/core/Button';
function Square(props){
    
    const [value,setValue]=React.useState();
    const [clicked,setClicked]=React.useState(false);
   

    const PutValue=(i)=>{
        if(!clicked){
      setValue(props.currentPlayer);
      setClicked(true);
      props.put(i);
      props.changePlayer();
    }
    //winner=calculateWinner();
}


    //className="sqr" 

    return(
        <div className="square">
            
            <Button variant="contained" color="primary" className="sqr" onClick={()=>PutValue(props.index)}>{value}</Button>
        </div>
    )
}

export default Square;