CREATE TABLE users (
id uuid PRIMARY KEY NOT NULL,
name VARCHAR(128),
age INTEGER,
cpf VARCHAR(64) UNIQUE,
gender VARCHAR(16),
email VARCHAR(64) UNIQUE NOT NULL,
zipcode VARCHAR(64),
address VARCHAR(128),
address_number VARCHAR(16),
address_neighborhood VARCHAR(64),
address_city VARCHAR(64),
address_state VARCHAR(64),
);


INSERT INTO "users" VALUES
('5bdc1019-793e-4361-a7e3-061394f26ff3', 'Melissa Sarah Monteiro', 21, '215.884.326-88', 'feminino','melissa.sarah.monteiro@acquire.com.br', '49087-630', 'Rua Zênia Bonfim', '457', 'Santos Dumont', 'Aracaju', 'SE')
('21035a53-bee3-4c76-b8dd-a194e644ffef', 'Pietro Kauê Caio Rocha', 27, '502.200.893-96', 'masculino', 'pietro-rocha99@zipmail.com','69309-405', 'Rua dos Ipês', '778', 'Pricumã','Boa Vista', 'RR')
('e8a0aa13-dd19-4f0b-966d-022c716e7c3e', 'Sebastiana Alana Josefa Cavalcanti', 49, '970.845.428-17', 'feminino', 'sebastianaalanacavalcanti@daruma.com.br', '60820-630', 'Rua 9', '498', 'Jardim das Oliveiras', 'Fortaleza', 'CE')
('74d9d7e9-eeb4-4255-9ca4-42f497a7c5ce', 'Levi Noah Guilherme Caldeira', 66, '591.519.951-82', 'masculino', 'levi_noah_caldeira@credendio.com.br', '37700-480', 'Rua Nova Resende','601', 'Jardim Esmeralda', 'Poços de Caldas', 'MG')
('d7cf433c-7a09-4e08-9526-c631e7bea1b8', 'Amanda Sônia Ana Corte Real', 48, '481.935.471-01', 'feminino', 'amanda_cortereal@huggoromano.com', '65070-883', 'Rua X', '930', 'Boa Morada', 'São Luís', 'MA')

