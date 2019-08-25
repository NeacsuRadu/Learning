export { ExportInterface };
export { ExportClassSecond as exps };

interface ExportInterface {
    name: string;
    age: number;
}

export class ExportClass {
    func(): void {
        console.log("Hello, there!!");
    }
}

console.log("there there")

class ExportClassSecond {
    function(): void {
        console.log("second class exported");
    }
}
