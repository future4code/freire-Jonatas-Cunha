function exercicio6 (num1:number, num2:number):void{
        const soma:number = num1 + num2;
        const subtracao:number = num1 - num2;
        const multiplicacao:number = num1 * num2;
        const maior:number = Math.max(num1, num2);

        console.log(`Soma: ${soma}`);
        console.log(`Subtração: ${subtracao}`);
        console.log(`Multiplicação: ${multiplicacao}`);
        console.log(`Maior: ${maior}`);

}

exercicio6(10, 5);