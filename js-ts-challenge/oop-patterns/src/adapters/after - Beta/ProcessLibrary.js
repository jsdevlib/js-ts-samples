class ProcessLibrary {
  process(data) {
    this.validateData(data);
    //TODO
  }

  validateData(data) {
    if (data.includes('xml')) {
      console.log('XML file is ok');
    } else {
      console.log('there are an issues');
    }
  }
}

module.exports = ProcessLibrary;
