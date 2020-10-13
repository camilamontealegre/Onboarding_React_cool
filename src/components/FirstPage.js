import React, {Component} from 'react';
import welcome from './welcome.png';
import './FirstPage.css';
import {withRouter} from 'react-router-dom';
import { Button } from 'react-bootstrap';


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
  const divStyle = {
    paddingBottom: '30px',
    backgroundColor: '#37b051',
    borderColor: 'transparent'
  }
    return(
      <div className="contiene">
        <h2 className="greet">So excited to have you on board!</h2>
        <img src={welcome} alt="welcome" className='welcome'/> 
        <form onSubmit={this.handleSubmit}>
          <input 
            className='input'
            type ='text' 
            placeholder='Your name' 
            value={fullName} name='fullName' 
            onChange={this.handleInputChange}
            ></input>
          <Button type='submit' style={divStyle} className="save_btn">Save</Button>
          <Button className='posicion_next' style={divStyle} onClick={()=>{
            this.props.history.push("/letsimagine")
          }}>Next</Button>
        </form>
      </div>
    )  
 }

}
    
export default withRouter ( FirstPage )


