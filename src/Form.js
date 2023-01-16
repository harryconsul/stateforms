import React,{useState} from "react";// dinamismo interno

// component is the unit of bulding of react  -- Component driven library UI Building library
// Vanilla JS is everything without a framework  ( React , Vue js , svelt , next )
// props - mundo exterior

// state - mundo interior
export const Form = (props)=>{
    const a = (5 +2) * 5 ;
    //const {la,le} = objeto;
    //const la = objeto.la;
    //const le = objeto.le;

    const [name,setName] = useState("Isis"); 

    const [namesList,setNamesList] = useState([]);

    const addName = (event) => {
     
        event.preventDefault();
        // add current name on the list
        
        
        //tmpList.push(name); is not necessary and replace ,name

        /*const newList = [];
        namesList.forEach(currentItem=>{
            console.log('cloning list on ' + currentItem);
            newList.push(currentItem);
        })

        newList.push(name);

        setNamesList(newList);*/
        
        
        setNamesList([...namesList,name]);
        
      
        
        // clearing the name state 
        setName('');
        

    }
    //how many states vars can a component have ? as many as you need
    // destructuras primer elemento la variable state, 2do la fn que permite cambiar el state
    // name="miguel"; you can not alter an state directly forbidden 

    const removeName = (index) => {
       
        setNamesList([...namesList].filter((currentItem,filterIndex)=>filterIndex!==index));
    }

    return ( /* parenthesis are for grouping things */
        <form >
            <input id="name" onChange={(event)=>setName(event.currentTarget.value)} value={name} />
            
            <button onClick={addName}>Add Name</button>
            <div>
                {
                    namesList.map((currentItem, index) => {
                        return (
                            <span key={index} style={{display:"block"}} onClick={()=>removeName(index)}> {/*cuando la fn tiene un parametro que no es el event y necesita algo especial se declara 1 arrow fn que ejecute la fn pasandole como parametro lo que requiere */}
                                {currentItem}
                                {console.log("this is a current:" , currentItem)}
                            </span>
                        )

                    })
                }


            </div>
            

        </form>
    )
}

export default Form;

const funf = ()=> ({ a:5 })

/* 
    types of code blocks
    function () {

    }

    ()=>{

    }
    if(){

    }

    for(){

    }
    while(){

    }

    switch(){

    }
*/