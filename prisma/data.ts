class Class {
  #name;

  constructor(name: string) {
    this.#name = name;
  }

  get getName() {
    return { name: this.#name };
  }
}

class Gender {
  #name;

  constructor(name: string) {
    this.#name = name.toUpperCase();
  }

  getId(id: number){
    return {
        id
    }
  }

  get getName() {
    return {
      name: this.#name,
    };
  }
}

class Student {
  #name;
  #email;
  #gender_id;
  #class_id;

  constructor(
    name: string,
    email: string,
    gender_id: number,
    class_id: number
  ) {
    (this.#name = name),
      (this.#email = email),
      (this.#gender_id = gender_id),
      (this.#class_id = class_id);
  }

  get getEmail() {
    return {
      email: this.#email,
    };
  }

  get getDetail() {
    return {
      name: this.#name,
      email: this.#email,
      gender_id: this.#gender_id,
      class_id: this.#class_id,
    };
  }
}

class Schema {
  #where;
  #update;
  #create;

  constructor(where: object, create: object) {
    this.#where = where;
    this.#update = {};
    this.#create = create;
  }

  get data() {
    return {
      where: this.#where,
      update: this.#update,
      create: this.#create,
    };
  }
}

class arr {
  #arrResult: Array<object>;

  constructor() {
    this.#arrResult = [];
  }

  setArrResult(objResult: object) {
    this.#arrResult.push(objResult);
  }

  get result() {
    return this.#arrResult;
  }
}

// Insert into class
const dataClass = new arr();
const arrClasses = [new Class("A-1"), new Class("B-1"), new Class("C-1")];
for (let Class of arrClasses) {
  const schemaClass = new Schema(Class.getName, Class.getName);
  dataClass.setArrResult(schemaClass.data);
}

// Insert into gender
const dataGender = new arr();
const arrGender = [new Gender("Male"), new Gender("Female")];
arrGender.map((gender, index) => {
  const schemaGender = new Schema(gender.getId(++index), gender.getName);
  dataGender.setArrResult(schemaGender.data);
});

// Insert into student
const dataStudent = new arr();
const arrStudent = [
  new Student("Ahmad Kun", "ahmad@gmail.com", 1, 1),
  new Student("Tuti Chan", "tuti@gmail.com", 2, 3),
];
arrStudent.map((student) => {
  const schemaStudent = new Schema(student.getEmail, student.getDetail);
  dataStudent.setArrResult(schemaStudent.data);
});

console.log(dataClass.result);
console.log(dataGender.result);
console.log(dataStudent.result);

export { dataClass, dataGender, dataStudent };
