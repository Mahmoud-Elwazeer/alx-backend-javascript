export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name === 'string' && typeof length === 'number' && Array.isArray(students)) {
      this._name = name;
      this._length = length;
      this._students = students;
    } else {
      console.error('Invalid Data');
    }
  }

  get name() {
    return this._name;
  }

  set name(value) {
    if (typeof value === 'string') {
      this._name = value;
    } else {
      console.error('Invalid name. Please provide a string.');
    }
  }

  get length() {
    return this._length;
  }

  set length(value) {
    if (typeof value === 'number') {
      this._length = value;
    } else {
      console.error('Invalid length. Please provide a number.');
    }
  }

  get students() {
    return this.students;
  }

  set students(value) {
    if (Array.isArray(value)) {
      this.students = value;
    } else {
      console.error('Invalid students. Please provide a array of string.');
    }
  }
}
