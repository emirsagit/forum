class Errors {
    constructor() {
        this.errors = {};
    }

    record(errors) {
        this.errors = errors;
    }

    get(field) {
        if (this.errors[field]) return this.errors[field][0];
    }

    clear(field) {
      if (field) {
        delete this.errors[field];
        return;
      }
      this.errors = {};
    }

    has(field = null) {
        if (field) {
            return this.errors[field] ? true : false;
        }
        return Object.keys(this.errors).length > 0;
    }
}

export default Errors;