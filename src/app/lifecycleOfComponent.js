import React, {Component} from 'react';
import axios from 'axios';

class TodoItem extends Component {
    
    componentDidUpdate(prevProps, prevState){
        console.log('componentDidUpdate todoitem')
    }

    shouldComponentUpdate(nextProps, nextState, prevProps, prevState){
        if(this.props.title !== nextProps.title){
            console.log('shouldComponentUpdate todoitem')
            return true
        }
        else{
            console.log('prevent render todoitem')
            return false
        }
    }

    componentDidMount(){
        console.log('componentDidMount todoitem')
    }

    render(){
        const { title } = this.props
        return (<div>
                {title}
            </div>)
    }
}

class LifeCycleOfReactComponent extends Component {
    // step 0
    constructor(props){
        super()

        this.state = {
            todos:[],
            imBusy:true
        }
        // this will invoke after component was called
        // here you can bind(this) method with "this" inside
        
        // Don't call this.setState() here!
        // Don't use props as default state values
        // Avoid to coping props into state

        this.onChangeFirstTodo = this.onChangeFirstTodo.bind(this)
    }

    // step 3
    componentDidMount(){
        console.log('componentDidMount')

        const getTodosUrl = 'http://195.181.210.249:3000/todo/'
        
        axios.get(getTodosUrl)
            .then((response) => {
                console.log(response.data)
                this.setState({
                    todos:response.data,
                    imBusy:false
                })
            })

        // this will invoke after render
        // you can call this.setState here
        // use if you have ajax, fetched data, when-user-can-see changes

    }

    onChangeFirstTodo(ev){
        const _todos = this.state.todos
        const {value} = ev.target

        _todos[0].title = value

        this.setState({
            'todos':_todos
        })

    }

    // step 2
    render(){
        const {todos, imBusy} = this.state

        if(imBusy){
            return (<div>
                <small>loading</small>
                </div>)
        }
        else{

            return (<div>

                <input value={todos[0].title} 
                onChange={this.onChangeFirstTodo}
                />

                {todos.map((element, key)=>{
                    return (<TodoItem key={key} 
                        title={element.title}/>)
                })}
                </div>)
        }

    }


    componentDidUpdate(prevProps, prevState, snapshot){
        console.log('componentDidUpdate todolist')

        // this will invoke after components updates
        // this will not call for initial render
        // use to compare props or state with previous props or previous state
        
    }

    shouldComponentUpdate(nextProps, nextState, prevProps, prevState){
        console.log('shouldComponentUpdate todolist')
        // if this method returns true then component will rerender
        // probably you could never use it
        return true
    }
   
    componentWillUnmount(){
        console.log('componentWillUnmount todolist')
    }


}

export default LifeCycleOfReactComponent
