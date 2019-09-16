import React, {Component} from 'react';





class ToDoList extends Component {

    constructor(props){
        super(props) // to nie jest istotne teraz ale musi byc
        
        this.state = {
            list: ['todo1','todo2','todo3']
        }
    }

    render(){
        const { list } = this.state
            return (
                <div>
                    <ul>
                    </ul>
                </div>
            )
       
    }
}

export default ToDoList