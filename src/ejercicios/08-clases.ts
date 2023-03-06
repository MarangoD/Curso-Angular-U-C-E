/*
    ===== Código de TypeScript =====
*/


class NormalPerson {
    name: string;
    address: string;

    constructor(name: string, address: string) {
        this.name = name;
        this.address = address;
    }
}
class Hero extends NormalPerson {
    constructor(
        public alterEgo: string,
        public edad: number,
        public realName: string,
        address: string
    ) {
        super(realName, address);
    }

}

const ironman = new Hero('Ironman', 45, 'Tony Stark', 'New York, USA');

console.log(ironman);