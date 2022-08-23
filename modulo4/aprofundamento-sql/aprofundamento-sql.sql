# 1
# A) APAGA A COLUNA SALARY DA TABELA ACTOR;
# B) ALTERAR A COLUNA GENDER NA TABELA ACTOR PARA SEX VARCHAR(6);
# C) ALTERAR A COLUNA GENDER NA TABELA ACTOR PARA ACEITAR 255 CARACTERES
# D) ALTER TABLE Actor CHANGE gender gender VARCHAR(100);


# 2
# A) UPDATE Actor SET name = "Moacyr Franco", birth_date  = "1975-05-10" WHERE id = "003";
# B) UPDATE Actor SET name = "JULIANA PAES" WHERE name = "Juliana Paes";
#	 UPDATE Actor SET name = "Juliana Paes" WHERE name = "JULIANA PAES";
# C)  UPDATE Actor
#		SET name = "Novo Nome",
#			salary = 15000,
#      		birth_date = "2022-06-02",
#      		gender = "male"
#		WHERE id = "005";
# D) PASSANDO UM ID QUE NÃO EXISTE ELE DA SUCESSO, MAS NÃO ALTERA NADA.
#	 PASSANDO UMA COLUNA QUE NÃO EXISTE ELE FALA QUE NÃO ENCONTROU
#	 PASSANDO VALOR COM O VALOR DIFERENTE DO ACENTO DA TABELA DA ERROR DE FORMATO INCORRETO


# 3
# A) DELETE FROM Actor WHERE name = "Fernanda Montenegro";
# B) DELETE FROM Actor WHERE gender = "male" AND salary > 1000000;


# 4
# A) select MAX(salary) AS maiorSalario FROM Actor;
# B) select MIN(salary) AS menorSalario FROM Actor WHERE gender = "female";
# C) SELECT COUNT(*) FROM Actor WHERE gender = "female"
# D) SELECT SUM(salary) FROM Actor;


# 5
# A) ELE CONTA QUANTAS PESSOAS TEM EM CADA GENDER E FAZ O AGRUPAMENTO
# B) SELECT id, name FROM Actor ORDER BY name DESC
# C) SELECT * FROM Actor ORDER BY salary DESC
# D) SELECT * FROM Actor ORDER BY salary DESC LIMIT 3
# E) SELECT AVG(salary) AS mediaSalario, gender FROM Actor GROUP BY gender;

# 6
# A) ALTER TABLE Movie ADD playing_limit_date DATE;
# B) ALTER TABLE Movie CHANGE avaliacao avaliacao FLOAT(11) NOT NULL;
# C) UPDATE Movie SET playing_limit_date = "2020-12-31" WHERE id = "001";
# D) DELETE FROM Movie WHERE id = "001";

# ------- DESAFIOS -------

# 7
# A) SELECT COUNT(*) FROM Movie WHERE avaliacao > 7.5;
# B) SELECT AVG(avaliacao) AS media FROM Movie
# C) SELECT COUNT(*) FROM Movie WHERE CURDATE() < playing_limit_date;
# D) SELECT COUNT(*) FROM Movie WHERE CURDATE() < data;
# E) SELECT MAX(avaliacao) FROM Movie;
# F) SELECT MIN(avaliacao) FROM Movie;

# 8
# A) SELECT * FROM Movie ORDER BY titulo ASC;
# B) SELECT * FROM Movie ORDER BY titulo DESC LIMIT 5
# C) SELECT * FROM Movie ORDER BY data DESC LIMIT 3
# D) SELECT * FROM Movie ORDER BY avaliacao DESC LIMIT 3













