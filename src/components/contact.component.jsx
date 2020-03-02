import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faKey, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import validator from './validator';

/**
  * @desc the login/ signup page
  * 
*/
class Contact extends Component {
    state={
        data: {
          name: {
            value: ''
          },
          email: {
            validated: false,
            value: '',
            focused:false
          },
          phone: {
            validated: false,
            value: '',
            focused:false

          },
          message: {
            value: '',
            },
          },
        imageFile:""

    }

    onChangeHandler = (e) =>{
      const {name, value} = e.target;
      this.setState((prevState)=>({
          ...prevState,
          data: {
          ...prevState.data,
          [name]: ({
            ...prevState.data[name],
            value: value,
            validated: validator(name, value)
            })
          }
      })
    )
  }

  onFocusHandler = (e) =>{
    const {name} = e.target
    this.setState((prevState)=>({
      validation: {
        ...prevState.validation,
        [name]: ({
          ...prevState.validation[name],
          focused: true
          })
        }
      })
    )
  }

  onBlurHandler = (e) =>{
    const {name} = e.target
    this.setState((prevState)=>({
      validation: {
        ...prevState.validation,
        [name]: ({
          ...prevState.validation[name],
          focused: false
          })
        }
      })
    )
  }


    onImageUploadHandler = () =>{
      let fileUpload = document.querySelector(".image-upload__input");
      let filePath = document.querySelector(".image-upload__message");
      fileUpload.click()
      fileUpload.onchange =  () => {
        let fileName = fileUpload.value.split('\\')[fileUpload.value.split('\\').length - 1];
        filePath.value = fileName
        this.setState((prevState, props) => ({
          ...prevState,
            imageFile:fileUpload.files[0]
          })
        )  
      };
    }


  render() {
  
    let {data} = this.state
    return (
      <section className="contact-section" id="contact">
      <div className="u-center-text u-margin-bottom-big">
        <h2 className="heading-secondary ">Contact us </h2>
      </div>
        <form className="form" >        
            <div className="form__component">
              <i className="form__group__icon"><FontAwesomeIcon icon={faUser}/></i>
              <div className="form__group">
                <input 
                  type="text" 
                  name="name" 
                  onChange={this.onChangeHandler} 
                  value={data.name.value}
                  className="form__input" required/>
                <label htmlFor="name" className="form__label">
                  Name
                </label>
              </div>
            </div>
            <div className="form__component">
              <i className="form__group__icon">
                <FontAwesomeIcon icon={faEnvelope}/>
              </i>
              <div className="form__group">
                <input 
                  type="email"  
                  onChange={this.onChangeHandler}
                  value={data.email.value}
                  style={{color : data.email.validated ? "black" : "red"}}
                  name="email" 
                  className="form__input" required/>
                <label htmlFor="email" className="form__label">Email</label>
              </div>
            </div>
           <div className="form__component">
              <i className="form__group__icon"><FontAwesomeIcon icon={faKey}/></i>
              <div className="form__group">
              <input 
                type="tel" 
                id="phone" 
                name="phone" 
                onChange={this.onChangeHandler} 
                value={data.phone.value}
                placeholder="(Area Code)-000-0000" 
                style={{color : data.phone.validated ? "black" : "red"}}
                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required/>
                <label htmlFor="phone" className="form__label">
                  <span>Phone Number</span>
                  </label>
              </div>
            </div>
            <div className="form__component">
            <div className="form__group">
            <textarea className="form__textarea"></textarea>
            <label htmlFor="message" className="form__label">Message</label>
          </div>
        </div>
        <div className="form__group-image">
          <input type="file" 
            className="image-upload__input" 
            name="image" 
            onChange={this.url}  accept="image/*"/>
          <input type="text" 
            className="image-upload__message" 
            disabled placeholder="Upload Your Dog's Image"/>
          <button 
            className="image-upload__button" 
            onClick={this.onImageUploadHandler}
            type="button"> Browse
          </button>
        </div>
        <input type="submit" className="form-submit-button" value="Submit"/>
      </form>
        
      </section>
        
    )
  }
}

export default Contact;
