class ConcreteBuilder implements Builder {
    private product!: Product;

    constructor() {
        this.reset();
    }


    public reset(): void {
        this.product = new Product();
    }

    produceParts(parts: string[]): void {
        parts.forEach(part => this.product.parts.push(part));
    }

    public getProduct(): Product {
        const result = this.product
        this.reset();
        return result;
    }
}