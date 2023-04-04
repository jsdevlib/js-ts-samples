class Director {
    private builder!: Builder;


    public setBuilder(builder: Builder): void {
        this.builder = builder;
    }


    public buildMinimalViableProduct(): void {
        this.builder?.produceParts(['part1'])
    }

    public buildFullFeaturedProduct(): void {
        this.builder?.produceParts(['part1', 'part2', 'part3']);
    }
}