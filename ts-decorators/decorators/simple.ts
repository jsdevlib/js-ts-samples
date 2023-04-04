function classDecorator(target: object) {
  console.log('Teacher class accessed');
}

function propertyDecorator(target: object, propertyKey: string) {
  console.log('Teacher skill property accessed');
}

function methodDecorator(target: object, propertyKey: string, descriptot: PropertyDescriptor) {
  console.log('Teacher research method accessed');
}

function parameterDecorator(target: object, propertyKey: string, parameterIndex: number) {
  console.log('Teacher research parameter method accessed');
}

@classDecorator
class Teacher {
  @propertyDecorator
  _skill: string;
  constructor(readonly name: string) {}

  @methodDecorator
  research(@parameterDecorator topic: string) {
    console.log('Researching ' + topic);
  }

  @methodDecorator
  salary(@parameterDecorator topic: string) {
    console.log('Researching ' + topic);
  }
}

export const Main = () => {
  const teacher = new Teacher('Beto');
  teacher._skill = 'JS';
  teacher.research('Decorators');
};
