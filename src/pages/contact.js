import React from 'react';
import  Form  from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import emailjs from 'emailjs-com';

class Contact extends React.Component{
  constructor(props){
    super(props);
    this.state={
      name:"",
      email:"",
      message:"",
      disabled:false,
      messageSent:null
    }
  }

handleChange=(event)=>{
 const target = event.target;
 const value = target.type === "checkbox"? target.checked : target.value;
 const name = target.name;

 this.setState({
   [name]:value
 })
}

handleSubmit=(event)=>{
  event.preventDefault();
  this.setState({
    disabled: true,
    
  });

  emailjs.sendForm('service_0088v4w', 'template_v10p6mp', event.target, 'user_VoojL50FEVuEWtLMxuITL')
      .then((result) => {
          window.location.reload()  
          this.setState({
            disabled: false,
            emailSent: true
        });//This is if you still want the page to reload (since e.preventDefault() cancelled that behavior) 
      }, (error) => {
          console.log(error.text);
          this.setState({
            disabled: false,
            emailSent: false
        });
      });

 

}

  render(){
    return(
      <div class="row">
      <div class="col-md-9 mb-md-0 mb-5" style={{marginLeft:'200px'}}>
        <h2 class="h1-responsive font-weight-bold text-center my-4">Contact Me</h2>
      <Form id="contact-form" onSubmit={this.handleSubmit} method="POST">

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control type="name" placeholder="Enter Name" name="name" value={this.state.name} onChange={this.handleChange}/>
        </Form.Group>
       

        {/* <div className="form-group">
          <label htmlFor="name">Name</label>
          <input name="name" type="text" className="form-control" value={this.state.name} onChange={this.handleChange} />
        </div> */}
        {/* <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input name="email" type="email" className="form-control" aria-describedby="emailHelp" value={this.state.email} onChange={this.handleChange} />
        </div> */}
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter mail" name="email" value={this.state.email} onChange={this.handleChange}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail" >
        <Form.Label>Message</Form.Label>
          <textarea name="message" className="form-control" placeholder="Write message" rows="5" value={this.state.message} onChange={this.handleChange} />
        </Form.Group>
        <Button className='d-inline-block ' type='submit' style={{background:'#01bf71'}}>Send</Button>
        {this.state.emailSent === true && <p className="d-inline success-msg">Email sent!</p>}
         {this.state.emailSent === false && <p className="d-inline err-msg">Email not sent!</p>}
      </Form>
      <p style={{marginLeft:'550px',fontWeight:'bold'}}>jumanakj23@gmail.com</p>
      </div>
      
  </div>
  );
  }
  
}

export default Contact;