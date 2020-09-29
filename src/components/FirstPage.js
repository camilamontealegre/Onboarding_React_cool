import React, {Component} from 'react';
import welcome from './welcome.png';
import './FirstPage.css'

class FirstPage extends Component {
    constructor(props){
        super(props)
        this.state = {
            fullName: null
         }
    }

handleSubmit = (event)=>{
 event.preventDefault() //este se pone para evitar recargar la página
 this.props.guardarNombre(this.state.fullName)
}

handleInputChange =(event)=>{
this.setState({[event.target.name]: event.target.value})
}

render(){
  const {fullName} = this.state
  const {goToSecondPage} = this.props
    return(
      <div className = "contenedor">
        <img src={welcome} alt="welcome" className='welcome'/> 
        <form onSubmit={this.handleSubmit}>
        <input 
        className='input_position'
        type ='text' 
        placeholder='Your name' 
        value={fullName} name='fullName' 
        onChange={this.handleInputChange}
        ></input>
        <button type='submit'>Save</button>
        </form>
        <div>
        <button className='posicion_btn'onClick={goToSecondPage}>Next</button>
      </div>
     </div>
    )  
 }

}
    
export default FirstPage


