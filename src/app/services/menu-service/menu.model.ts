export class Menu {

    path: string;
    name: string;
    colorR: number;
    colorG: number;
    colorA: number;
    colorHex: string;
    isDefault: boolean;

    constructor(path: string, name: string, colorR: number, colorG: number,
        colorA: number, colorHex: string, isDefault: boolean) {

        this.path = path;
        this.name = name;
        this.colorR = colorR;
        this.colorG = colorG;
        this.colorA = colorA;
        this.colorHex = colorHex;
        this.isDefault = isDefault;

    }

    getColorRGB(transparency: number) {
        return `rgba()`;
    }

}
