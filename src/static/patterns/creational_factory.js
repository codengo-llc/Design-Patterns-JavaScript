const FACTORY = {
  id: 'factory',
  name: 'Factory',
  type: 'creational',
  hint: 'Creates an instance of several derived classes',
  description: `Gives an interface to build an object but let subclasses to decide which class to instantiate.`,
  use: `a class wants its subclasses to decide which object to create`,
  codeES5: `function teslaPattern(type) {
  if (type === 'ModelX') return new Tesla(type, 108000, 300);
  if (type === 'ModelS') return new Tesla(type, 111000, 320);
}

function Tesla(model, price, maxSpeed) {
  this.model = model;
  this.price = price;
  this.maxSpeed = maxSpeed;
}

module.exports = teslaPattern;`,
  codeES6: `class TeslaPattern {
  create(type) {
    if (type === 'ModelX') return new Tesla(type, 108000, 300);
    if (type === 'ModelS') return new Tesla(type, 111000, 320);
  }
}

class Tesla {
  constructor(model, price, maxSpeed) {
    this.model = model;
    this.price = price;
    this.maxSpeed = maxSpeed;
  }
}

export default TeslaPattern;`
};

export default FACTORY;
