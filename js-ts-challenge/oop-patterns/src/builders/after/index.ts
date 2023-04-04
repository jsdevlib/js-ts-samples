
function clientCode(director: Director) {
    const builder = new ConcreteBuilder();
    director.setBuilder(builder);

    console.log('Standard basic product:');
    director.buildMinimalViableProduct();
    builder.getProduct().listParts();

    console.log('Standard full featured product:');
    director.buildFullFeaturedProduct();
    builder.getProduct().listParts();


    console.log('Custom product:');
    const customParts = ['part10', 'part3', 'part20', 'part5']
    builder.produceParts(customParts)
    builder.getProduct().listParts();
}

const director = new Director();
clientCode(director);
