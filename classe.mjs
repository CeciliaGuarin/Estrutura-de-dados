class FormaGeometrica {
    #base
    #altura
    #tipo

    constructor(base, altura, tipo) {

        if (typeof base !== 'number' || base <= 0) {
        throw new Error ('ERRO: base precisar ser numerica e maior que zero');
        }

        if (typeof altura !== 'number' || altura <= 0) {
            throw new Error ('ERRO: altura precisar ser numerica e maior que zero');
        }

        if (typeof tipo !== 'R' && tipo !== 'T' && tipo !== 'E') {
            throw new Error ('ERRO: tipo precisar ser : R, T, ou E');
        }

        this.#base = base;
        this.#altura = altura;
        this.#tipo = tipo;     
    }

    get base(){
        return this.#base;
    }
    get altura(){
        return this.#altura;
    }
    get tipo(){
        return this.#tipo;
    }
    calcularArea(){
        switch (this.tipo){
            case 'R':
                return this.base * this.altura;
            case 'T':
                return (this.base * this.altura) /2;
            case 'E':
                return (this.base /2) * (this.altura /2) * Math.PI;
        }
    }
}
    let forma1 = new FormaGeometrica(15, 16, 'T')

    console.log(forma1.base, forma1.altura, forma1.tipo);
