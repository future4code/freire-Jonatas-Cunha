# 1
# A) CHAVE ESTRANGEIRA REFERENCIA UMA PRIMARY KEY DE OUTRA TABELA
;
# B) 
CREATE TABLE Rating (
	id VARCHAR(255) PRIMARY KEY,
    comment TEXT NOT NULL,
	rate FLOAT NOT NULL,
    movie_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Movie(id)
);

INSERT INTO Rating (id, comment, rate, movie_id) VALUES ('1', 'Bom filme', '10', '001');

# C) NÃO PERMITE POIS A FOREIGN KEY PRECISA QUE A PRIMARY KEY EXISTA
;
# D)
ALTER TABLE Movie DROP COLUMN avaliacao;

# E) NÃO É POSSIVEL POIS ANTES DE DELETAR O FILME É NECESSÁRIO DELETAR OS RATINGS POR CONTA DA CHAVE ESTRANGEIRA
;

# 2
# A) ELA FAZ A LIGAÇÃO ENTRE AS TABELAS FILME E ATOR
;
# B)
CREATE TABLE MovieCast (
	movie_id VARCHAR(255),
	actor_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Movie(id),
    FOREIGN KEY (actor_id) REFERENCES Actor(id)
);

INSERT INTO MovieCast (movie_id, actor_id) 
    VALUES  ('001', '002'), ('001', '004'), ('001', '002'), ('001', '004'), ('001', '002'), ('001', '002');

# C) NÃO É POSSIVEL POIS A CHAVE ESTRANGEIRA PRECISA QUE A PRIMARY KEY EXISTA
;
# D) NÃO É POSSIVEL POIS É PRECISA DELETAR A TABELA MovieCast PARA DELETAR A TABELA DE Movie
;
# 3
SELECT * FROM Movie 
    INNER JOIN Rating ON Movie.id = Rating.movie_id;
# A) Retorna uma lista de filmes e seus respectivos ratings (APENAS DOS QUE POSSUEM RATING)
;

SELECT Movie.id, titulo, rate FROM Movie 
    INNER JOIN Rating ON Movie.id = Rating.movie_id;

# ------------------------ DESAFIOS ----------------------------- #
;

# 4
# A)
SELECT Movie.id, titulo, rate, comment FROM Movie 
    LEFT JOIN Rating ON Movie.id = Rating.movie_id;
# B)
SELECT Movie.id, titulo, Actor.id as actor_id FROM Movie 
    JOIN MovieCast ON Movie.id = MovieCast.movie_id
    JOIN Actor ON actor_id = Actor.id;

# C)
SELECT AVG(rate), movie_id FROM Movie 
    LEFT JOIN Rating ON Movie.id = Rating.movie_id
    GROUP BY movie_id;

# 5
# A) ELA PEGA OS DADOS DO FILME PROCURA O ATOR E PUXA OS DADOS DO ATOR
;
# B)
SELECT Movie.id as movie_id, titulo as movie_titulo, actor_id, name as actor_name FROM Movie
LEFT JOIN MovieCast ON Movie.id = MovieCast.movie_id
JOIN Actor ON Actor.id = MovieCast.actor_id;
# C) Error Code: 1054. Unknown column 'm' in 'field list' ELE NÃO ENCONTRA A COLUNA m
SELECT m.id as movie_id, m,title, a.id as actor_id, a.name FROM Movie m
LEFT JOIN MovieCast mc ON m.id = mc.movie_id
JOIN Actor a ON a.id = mc.actor_id;
