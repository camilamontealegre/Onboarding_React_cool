import React, {Component} from 'react';
import welcome from './welcome.png';
import './FirstPage.css';
import {withRouter} from 'react-router-dom';

class FirstPage extends Component {
    constructor(props){
        super(props)
        this.state = {
            fullName: null
        }
    }

handleSubmit = (event) => {
  event.preventDefault() //este se pone para evitar recargar la página
  this.props.guardarNombre(this.state.fullName)
}

handleInputChange = (event) => {
  this.setState({[event.target.name]: event.target.value})
}

render(){
  console.log(this.props)
  const {fullName} = this.state

    return(
      <div className="contiene">
        <h1 className="greet">So excited to have you on board!</h1>
        <img src={welcome} alt="welcome" className='welcome'/> 
        <form onSubmit={this.handleSubmit}>
          <input 
            className='input'
            type ='text' 
            placeholder='Your name' 
            value={fullName} name='fullName' 
            onChange={this.handleInputChange}
            ></input>
          <button type='submit' className="save_btn">Save</button>
          <button className='posicion_next'onClick={()=>{
            this.props.history.push("/letsimagine")
          }}>Next</button>
        </form>
      </div>
    )  
 }

}
    
export default withRouter ( FirstPage )


