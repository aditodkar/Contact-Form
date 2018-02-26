import React, { Component } from 'react';
import firebase from 'firebase';
import './contactform.css';

	const config = {
	apiKey: process.env.REACT_APP_FIREBASE_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_DOMAIN,
    databaseURL: process.env.REACT_APP_FIREBASE_DATABASE,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_SENDER_ID
	};
	firebase.initializeApp(config);

  let contentref = firebase.database().ref('contact');

class ContactForm extends Component {
  constructor(props){
  	super(props);
  	this.state = {
  		age:'',
  		gender:'',
      gendertext:'',
  		health:'',
      healthtext:'',
  		name:'',
  		email:'',
  		info:'',
  		fitness:''
  	};
  }

  setAge(checkedValue){
    console.log(checkedValue);
    this.setState({
    	age:checkedValue
    })
  }

  setGender(checkedValue){
    console.log(checkedValue);
    this.setState({
    	gender:checkedValue,
      gendertext:''
    })
  }

  onChangeTextBoxGender(event){
    this.setState({
      gendertext: event.target.value,
      gender: event.target.value
    })
  }

  setStatus(checkedValue){
    console.log(checkedValue);
    this.setState({
    	health:checkedValue,
      healthtext: ''
    })
  }

  onChangeTextBoxHealth(event){
    this.setState({
      healthtext: event.target.value,
      health: event.target.value
    })
  }

  getName(event){
  	this.setState({name: event.target.value})
  	//console.log(this.state.name)
  }

  getEmail(event){
  	this.setState({email: event.target.value})
  	//console.log(this.state.email)
  }

  getInfo(event){
  	this.setState({info: event.target.value})
    //console.log(this.state.info)
  }

  setFitness(checkedValue){
  	console.log(checkedValue);
    this.setState({
    	fitness:checkedValue
    })
  }

  savedata(age, gender, health, name, email, info, fitness){
  		let newcontent = contentref.push();

  		newcontent.set({
  			age:this.state.age,
  			gender:this.state.gender,
        gendertext:this.state.gendertext,
  			health:this.state.health,
        healthtext:this.state.healthtext,
  			name:this.state.name,
  			email:this.state.email,
  			info:this.state.info,
  			fitness:this.state.fitness
  		});

      alert('Form is submitted !');
  }

  reset(){
    this.setState({
      age:'',
      gender:'',
      gendertext:'',
      health:'',
      healthtext:'',
      name:'',
      email:'',
      info:'',
      fitness:''
    })
  }


  render() {

    return (
      <div>

        <div id="center">
          <form>

              <div className="form-group">
                <div className="col-sm-offset-2 col-sm-10">
                  <h3>[Test]Contact us Survey Form</h3>  
                </div>
              </div>
            
            <div id="agegroup" >
              <div className="form-group">
                <div className="col-sm-offset-2 col-sm-10">
                  <h4>What is your age group?</h4>  
                </div>
              </div>

              <div className="form-group">
                <div className="col-sm-offset-2 col-sm-10">
                  <div className="radio">
                    <label><input type="radio" name="age" checked={(this.state.age === '>=25 yrs')} onChange={this.setAge.bind(this,'>=25 yrs')}/> >=25 yrs</label>
                  </div>
                </div>
              </div>
              <div className="form-group">
                <div className="col-sm-offset-2 col-sm-10">
                  <div className="radio">
                    <label><input type="radio" name="age" checked={(this.state.age === '26-35 yrs')} onChange={this.setAge.bind(this,'26-35 yrs')}/> 26-35 yrs</label>
                  </div>
                </div>
              </div>
              <div className="form-group">
                <div className="col-sm-offset-2 col-sm-10">
                  <div className="radio">
                    <label><input type="radio" name="age" checked={(this.state.age === '36-50 yrs')} onChange={this.setAge.bind(this,'36-50 yrs')}/> 36-50 yrs</label>
                  </div>
                </div>
              </div>
              <div className="form-group">
                <div className="col-sm-offset-2 col-sm-10">
                  <div className="radio">
                    <label><input type="radio" name="age" checked={(this.state.age === '>50 yrs')} onChange={this.setAge.bind(this,'>50 yrs')}/> >50 yrs</label>
                  </div>
                </div>
              </div>
            </div>


            <div id="gender">
              <div className="form-group">
                <div className="col-sm-offset-2 col-sm-10">
                  <h4>What is your gender?</h4>  
                </div>
              </div>

              <div className="form-group">
                <div className="col-sm-offset-2 col-sm-10">
                  <div className="radio">
                    <label><input type="radio" name="gender" checked={(this.state.gender === 'Female')} onChange={this.setGender.bind(this,'Female')}/> Female</label>
                  </div>
                </div>
              </div>
              <div className="form-group">
                <div className="col-sm-offset-2 col-sm-10">
                  <div className="radio">
                    <label><input type="radio" name="gender" checked={(this.state.gender === 'Male')} onChange={this.setGender.bind(this,'Male')}/> Male</label>
                  </div>
                </div>
              </div>
              <div className="form-group">
                <div className="col-sm-offset-2 col-sm-10">
                  <div className="radio">
                    <label><input type="radio" name="gender" checked={(this.state.gender === 'Prefer not to say')} onChange={this.setGender.bind(this,'Prefer not to say')}/> Prefer not to say</label>
                  </div>
                </div>
              </div>

              <div className="form-group">
                <div className="col-sm-offset-2 col-sm-10">
                  <div className="radio">
                    <label><input type="radio" name="gender" checked={(this.state.gender === -1 || this.state.gendertext.length >0)} onChange={this.setGender.bind(this,-1)}/>Other</label>
                    <input type="text" class="form-inline" id="other1" value={this.state.gendertext} onChange={this.onChangeTextBoxGender.bind(this)}/>
                  </div>
                </div>
              </div>
            </div>

              <div className="form-group">
                <div className="col-sm-offset-2 col-sm-10">
                  <h4>How would you like your healthy life-style change care to be delivered? </h4>  
                </div>
              </div>

              <div className="form-group">
                <div className="col-sm-offset-2 col-sm-10">
                  <div className="radio">
                    <label><input type="radio" name="healthy" checked={(this.state.health === 'Mobile app')} onChange={this.setStatus.bind(this,'Mobile app')}/> Mobile app</label>
                  </div>
                </div>
              </div>
              <div className="form-group">
                <div className="col-sm-offset-2 col-sm-10">
                  <div className="radio">
                    <label><input type="radio" name="healthy" checked={(this.state.health === 'Personal instructor over a video call')} onChange={this.setStatus.bind(this,'Personal instructor over a video call')}/>Personal instructor over a video call</label>
                  </div>
                </div>
              </div>
              <div className="form-group">
                <div className="col-sm-offset-2 col-sm-10">
                  <div className="radio">
                    <label><input type="radio" name="healthy" checked={(this.state.health === 'personal instructor in person')} onChange={this.setStatus.bind(this,'personal instructor in person')}/> personal instructor in person</label>
                  </div>
                </div>
              </div>
              <div className="form-group">
                <div className="col-sm-offset-2 col-sm-10">
                  <div className="radio">
                    <label><input type="radio" name="healthy" checked={(this.state.health === 'virtual group sessions')} onChange={this.setStatus.bind(this,'virtual group sessions')}/> virtual group sessions</label>
                  </div>
                </div>
              </div>
              <div className="form-group">
                <div className="col-sm-offset-2 col-sm-10">
                  <div className="radio">
                    <label><input type="radio" name="healthy" checked={(this.state.health === 'in-person group sessions')} onChange={this.setStatus.bind(this,'in-person group sessions')}/> in-person group sessions</label>
                  </div>
                </div>
              </div>
              <div className="form-group">
                <div className="col-sm-offset-2 col-sm-10">
                  <div className="radio">
                    <label><input type="radio" name="healthy" checked={(this.state.health === -1 || this.state.healthtext.length >0)} onChange={this.setStatus.bind(this,-1)}/>Other</label>
                    <input type="text" className="form-inline" id="other2" value={this.state.healthtext} onChange={this.onChangeTextBoxHealth.bind(this)}/>
                  </div>
                </div>
              </div>


              <div className="form-group">
                <label for="usr" id="usr1">Name:</label>
                <input type="text" className="form-control" id="name" value={this.state.name} onChange={this.getName.bind(this)}/>
              </div>

               <div className="form-group">
                <label for="usr" id="usr2">Email:</label>
                <input type="text" className="form-control" id="email" value={this.state.email} onChange={this.getEmail.bind(this)}/>
              </div>

              <div className="form-group">
                <label id="usr3">Any thing else you want to specify:</label>
                <input type="text" className="form-control" id="anything" value={this.state.info} onChange={this.getInfo.bind(this)}/>
              </div>
              

              <div className="form-group">
                <div className="col-sm-offset-2 col-sm-10">
                  <h4>How comfortable are you with sharing your fitness information (in social media or focus groups) </h4>  
                </div>
              </div>

              <div className="form-group">
                <div className="col-sm-offset-2 col-sm-10">
                  <div className="radio">
                    <label><input type="radio" name="optradio" checked={(this.state.fitness === 'Not comfortable at all')} onChange={this.setFitness.bind(this,'Not comfortable at all')}/>Not comfortable at all</label>
                  </div>
                </div>
              </div>

              <div className="form-group">
                <div className="col-sm-offset-2 col-sm-10">
                  <div className="radio">
                    <label><input type="radio" name="optradio" checked={(this.state.fitness === 'Open to sharing some of it')} onChange={this.setFitness.bind(this,'Open to sharing some of it')}/>Open to sharing some of it</label>
                  </div>
                </div>
              </div>
              <div className="form-group">
                <div className="col-sm-offset-2 col-sm-10">
                  <div className="radio">
                    <label><input type="radio" name="optradio" checked={(this.state.fitness === 'Totally comfortable')} onChange={this.setFitness.bind(this,'Totally comfortable')}/>Totally comfortable</label>
                  </div>
                </div>
              </div>


              <button type="button" class="btn btn-success" onClick={this.savedata.bind(this)}>Submit</button>
              <button type="button" class="btn btn-danger" onClick={this.reset.bind(this)}>Clear input</button>

          </form>
        </div>
        
      </div>
    );
  }
}

export default ContactForm;