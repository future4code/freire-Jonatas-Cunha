
```function calculaSalario(qtdeCarrosVendidos, valorTotalVendas) {```

  ```let salario = 2000```
  
  ```let beneficio = 100```
  
  ```let valorCarro = valorTotalVendas / qtdeCarrosVendidos```
  
  ```let porcentagem = (valorCarro * 0.05) * qtdeCarrosVendidos + (beneficio * qtdeCarrosVendidos)```
  
  ```if(qtdeCarrosVendidos === 0) return salario```
  
  ```return salario + porcentagem```

```}```