function validator(key, value) {
    switch (key) {
      case "email":
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(value).toLowerCase());
      default:
        case "phone":
          const pattern = /\d{3}-\d{3}-\d{4}/
          console.log(value);
          
        return pattern.test(value)
    }
  }
  
  
  export default validator;
  