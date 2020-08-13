class Teacher extends PersonCls{
    constructor(name, degree)
    {
        super(name);
        this.degree = degree;
    }
    teach() {
        console.log(`teach ${this.degree}`);
    }
}