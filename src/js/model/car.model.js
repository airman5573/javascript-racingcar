class CarModel {
  constructor(name) {
    this.name = name;
    this.distance = 0;
  }

  moveForward() {
    this.distance += 1;
  }
}

export default CarModel;
