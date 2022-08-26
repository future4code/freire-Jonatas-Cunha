-- Active: 1661428809584@@35.226.146.116@3306@freire-jonatas-cunha

INSERT INTO tdUsers (id, name, nickname, email) 
    VALUES  ('990ebc6d-7596-4f13-9e49-3f65fe76839c', 'Jonatas Freire', 'jonatasfreire', 'jon@labenu.com'),
            ('220eb55d-7596-4f13-9e49-3f65fe76822c', 'Jose Freire', 'josefreire', 'jose@labenu.com'),
            ('990ebc6d-7596-4f13-9e49-3f23fe76839c', 'Henrique Freire', 'henriquefreire', 'henrique@labenu.com'),
            ('990ebasd-7596-4bg3-9e49-3f65fe76839c', 'Paulo Freire', 'paulofreire', 'paulo@labenu.com'),
            ('990ebc6d-7596-af63-9e49-3f21fe76839c', 'Andre Freire', 'andrefreire', 'andre@labenu.com');

INSERT INTO tdTasks (id, title, description, limit_date, creator_user_id)
    VALUES  ("b9d00a41-58d3-40b9-b97a-7adafbf9fd8e", "Limpar a casa", "Limpar a casa toda.", "2022-05-22", "220eb55d-7596-4f13-9e49-3f65fe76822c"),
            ("b9d00a41-58d3-40b9-b98a-7adafbf9fd8e", "Fazer o almoço", "Fazer o almoço todo.", "2023-01-01", "990ebasd-7596-4bg3-9e49-3f65fe76839c"),
            ("b9d00a41-58d3-40b9-b96a-7adafbf9fd8e", "Fazer o jantar", "Fazer o jantar todo.", "2022-10-01", "990ebc6d-7596-4f13-9e49-3f65fe76839c"),
            ("b9d00a41-58d3-40b9-b95a-7adafbf9fd8e", "Fazer o café", "Fazer o café todo.", "2023-09-01", "990ebc6d-7596-4f13-9e49-3f65fe76839c"),
            ("b9d00a41-58d3-40b9-b94a-7adafbf9fd8e", "Lavar os pratos", "Limpar todos os pratos.", "2023-04-01", "990ebc6d-7596-4f13-9e49-3f23fe76839c"),
            ("b9d00a41-58d3-40b9-b93a-7adafbf9fd8e", "Comprar pão", "Ir a padaria e compra 5 reais de pão.", "2023-05-01", "990ebc6d-7596-4f13-9e49-3f65fe76839c");
