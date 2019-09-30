import React Component from 'react'; 


class RegistrationFrom extends Component 






const cwiczenie = () => {
    return ( 
        <div className='app-cwiczenie'><center>
        <h1>
            Lorem Ipsum
            </h1>
            <h3>
            Lorem Ipsum jest tekstem stosowanym jako przykładowy wypełniacz w przemyśle poligraficznym. Został po raz pierwszy użyty w XV w. przez nieznanego drukarza do wypełnienia tekstem próbnej książki. 
            </h3>
            </center>
        </div>
    )

}

// jsx element 
const Small = (<small>mały tekst</small>); // zadeklarowane wyrazenie - to oznacza zwróć / dla dodawania ikon

const Strong = ()=>{
    return (<strong>Jakiś pogrubiony tekst</strong>)
}
const todoList = ['todo1','todo2','todo3']

const forEach = (listOfElems, callback=()=>{})=>{
     for (const element of listOfElems){
         callback(element)
     }
     for (const idx in listOfElems){
         const element = listOfElems[idx]
         callback(element)
     }
 }

 const map = (listOfElems, callback=()=>{})=>{

     const newArray = []

     for (const element of listOfElems){
         const modifiedElement = callback(element)
         newArray.push(modifiedElement)
     }

//     return newArray
// }



const ToDo = ({text, index, onEdit, onDelete}) => {

    let classes = ['todo-item'].join(' ')

    return (<li>
            <div className={classes}>
                {text}{' '}
                <button >Edit</button>{' '}
                <button >Delete</button> 
            </div>
        </li>)
}

const TodoList = ({list = todoList}) => {
    return (<ul>
            {list.map((el, key)=>{
                return (
                    <ToDo text={el} index={key} key={key} onEdit={()=>{}} onDelete={()=>{}}/> 
                )
            })}
        </ul>)
}

const ComponentWithData = ({list, imBusy=false, imWithError=false}) =>{

    if(imBusy){
        return (<small>loading</small>)
    }
    else{
        if(imWithError){
            return (<small>error</small>)
        }
        else{
            return (
                <TodoList list={list}/>
            )
        }
    }

}




// jsx component - 95%
const Header = (props) => {
    return (
        <div className='app-header'>
            <ComponentWithData/>
        </div>
    )
}


export default Header