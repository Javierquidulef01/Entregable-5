export abstract class  Persona {
    private nombre: string;
    private apellido: string

    constructor(nombre: string, apellido: string) {
        this.nombre = nombre;
        this.apellido = apellido;
    }

    public getNombre(): string{
        return this.nombre;
    }

    public setNombre(nombre: string): void {
        this.nombre = nombre;
    }
    
    public getApellido(): string{
        return this.apellido;
    }

    public setApellido(apellido: string): void {
        this.apellido = apellido;
    }
}
