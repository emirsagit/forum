import Errors from './errors.js';

class Form {
    constructor(data) {
        this.originalData = data;

        for(let field in data) {
          this[field] = data[field]
        }

        this.errors = new Errors();
    }

    data() {
      let data = {};

      for(let field in this.originalData) {
         data[field] = this[field]
      }

       return data;
    }

    submit(requestType, url) {
      return new Promise((resolve, reject) => {
        axios
            [requestType](url, this.data())
            .then((response) => {
              this.onSuccess(response.data);
              
              resolve(response.data);
            })
            .catch((error) => {
              this.onFail(error.response.data);

              reject(error.response.data);
            });
      })
    }

    onSuccess(data) {
      this.errors.clear();
    }

    onFail(data) {
      if(data.errors) {
        this.errors.record(data.errors)
      }
    }

    empty() {
        Object.keys(this.originalData).forEach(field => {
            this[field] = "";
        });
    }
}

export default Form;