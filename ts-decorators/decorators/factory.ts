function classDecorator(target: object) {
  console.log('Teacher class accessed');
}

function propertyDecorator(target: object, propertyKey: string) {
  console.log('Teacher skill property accessed');
}

function methodDecorator(target: object, propertyKey: string, descriptor: PropertyDescriptor) {
  console.log('Teacher research method accessed');
}

function parameterDecorator(target: object, propertyKey: string, parameterIndex: number) {
  console.log('Teacher research parameter method accessed');
}

const methodDecoratorFactory = (type: string) => {
  return (target: object, propertyKey: string, descriptot: PropertyDescriptor) => {
    console.log('Teacher research method accessed with type: ' + type);
  };
};

@classDecorator
class Teacher {
  @propertyDecorator
  _skill: string;
  constructor(readonly name: string) {}

  @methodDecorator
  research(@parameterDecorator topic: string) {
    console.log('Researching ' + topic);
  }

  @methodDecoratorFactory('5TA')
  salary(salary: number) {
    console.log('Salary: ' + salary.toString());
  }
}

export const Main = () => {
  const teacher = new Teacher('Beto');
  teacher._skill = 'JS';
  teacher.research('Decorators');
};
