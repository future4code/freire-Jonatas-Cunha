CREATE TABLE Actor (  # CRIAR TABELA DE ATORES
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR (255) NOT NULL,
    salary FLOAT NOT NULL,
    birth_date DATE NOT NULL,
    gender VARCHAR(6) NOT NULL
);

SHOW DATABASES;
DESCRIBE Actor;
SELECT * FROM Actor;

INSERT INTO Actor (id, name, salary, birth_date, gender)
	VALUES("001", "Tony Ramos", 400000, "1948-08-25", "male");

INSERT INTO Actor (id, name, salary)
	VALUES("003", "Fernanda Montenegro", 300000, "1929-10-19", "female");
    
INSERT INTO Actor (id, salary, birth_date, gender)
	VALUES("004", 400000, "1949-04-18", "male");
    
INSERT INTO Actor (id, name, salary, birth_date, gender)
	VALUES	("005", "Juliana Paes", 719333.33, 1979-03-26, "female");
            
INSERT INTO Actor (id, name, salary, birth_date, gender)
	VALUES	("004", "Antônio Fagundes",400000,"1949-04-18", "male");
            

# 1
# A) O SALARIO É DO TIPO FLOAT E NÃO PODE SER NULO
# B) SHOW DATABASES - MOSTRA TODOS OS BANCOS E SHOW TABLES - MOSTRA TODAS TABELAS DO BANCO
# C) MOSTRA AS CARACTERISRICAS DE CADA COLUNA
# 		ID É DO TIPO STRING, NÃO PODE SER NULO E É PRIMARIO
#		NAME [E DO TIPO STRING, NÃO PODE SER NULO...

# 2
# A) INSERT INTO Actor (id, name, salary, birth_date, gender)
#		VALUES("002", "Glória Pires", 1200000, "1963-08-23", "female");
# B) Código do erro: 1062. Duplicado entrada '002' para chave 'PRIMARY' 0,172 seg
#		DEU ERRO POS A CHAVE PRIMARIA DEVE SER UNICA PARA CADA ITEM
# C) Código de erro: 1136. A contagem de colunas não corresponde à contagem de valores na linha 1
# 		DEU ERRO POS ESTOU PASSANDO MAIS ITENS QUE COLUNAS
# D) Código de erro: 1364. O campo 'nome' não tem um valor padrão
#		DEU ERRO POS O CAMPO NOME NÃO PODE SER NULL E NÃO TEM NENHUM VALOR DEFAULT DEFINIDO
# E) Código de erro: 1292. Valor de data incorreto: '1950' para a coluna 'birth_date' na linha 1
#		DEU ERRO POS A DATA DE SER PASSADA COM "" DA MESMA FORMA COMO UMA STRING "YYYY-MM-DD"

# 3
# A) SELECT * FROM Actor
#		WHERE gender = "female";
# B) SELECT salary FROM Actor
#		WHERE name = "Tony Ramos";
# C) SELECT gender FROM Actor
#		WHERE gender = "invalid";
#	VAI SER VAZIO POS NÃO TEM NINGUEM COM O GENERO INVALID
# D) SELECT id, name, salary FROM Actor
#		WHERE salary <= 500000;
# E) SELECT id, n from Actor WHERE id = "002"
#		Código de erro: 1054. Coluna desconhecida 'nome' na 'lista de campos'
# DA ERRO POS A TABELA NÃO POSSUI A COLUNA NOME E SIM NAME

# 4
# A) ELE PEGAS OS ATORES QUE COMEÇAM COM A OU J COM SALARIO MAIOR QUE 300000
# B) SELECT * FROM Actor WHERE name NOT LIKE "A%" AND salary > 350000;
# C) SELECT * FROM Actor WHERE name LIKE "%G%" OR name LIKE "%g%";
# D) SELECT * FROM Actor 
#		WHERE (name LIKE "%a%" OR name LIKE "%A%" OR name LIKE "%g%" OR name LIKE "%G%")
#   	AND salary BETWEEN 50000 AND 900000;

# 5
# A)
CREATE TABLE Movie (
	id VARCHAR(255) PRIMARY KEY,
	titulo VARCHAR(255) NOT NULL UNIQUE,
    sinopse TEXT NOT NULL,
    data DATE NOT NULL,
    avaliacao INT NOT NULL
);

# B)
INSERT INTO Movie (id, titulo, sinopse, data, avaliacao)
	VALUES (
		"001",
		"Se Eu Fosse Você",
		"Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos",
		"2016-01-06",
		7
    );
    
# C)
INSERT INTO Movie (id, titulo, sinopse, data, avaliacao)
	VALUES (
		"002",
        "Doce de mãe",
        "Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela",
        "2012-12-27",
        10
    );
    
# D)
INSERT INTO Movie (id, titulo, sinopse, data, avaliacao)
	VALUES (
		"003",
        "Dona Flor e Seus Dois Maridos",
        "Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.",
        "2017-11-02",
        8
    );
    
# E)
INSERT INTO Movie (id, titulo, sinopse, data, avaliacao)
	VALUES (
		"004",
        "Tropa de Elite",
        "Em 1997, o capitão Nascimento tem que encontrar seu substituto enquanto luta contra os narcotraficantes e criminais antes da chegada do Papa ao Rio de Janeiro, Brasil.",
        "2007-10-05",
        8
    );

# 5)
# A) SELECT id, titulo, avaliacao FROM Movie WHERE id = "004"
# B) SELECT * FROM Movie WHERE titulo = "tropa de elite";
# D) SELECT id, titulo, sinopse FROM Movie WHERE avaliacao >= 7

# 6)
# A) SELECT * FROM Movie WHERE titulo LIKE "%vida%";
# B) SELECT * FROM Movie
#		WHERE titulo LIKE "%VIDA%" OR
#      	 sinopse LIKE "%VIDA%";
# C) SELECT * FROM Movie WHERE data < CURDATE(); - CURDATE() PEGA A DATA ATUAL
# D) SELECT * FROM Movie WHERE data < CURDATE() AND 
#      	(titulo LIKE "%vida%" OR
#    	 sinopse LIKE "%vida%") AND avaliacao > 7;

















