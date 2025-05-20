export const recipes = {
    cafe : [
        {
            id : 0,
            nome : 'Pão com ovo',
            urlImage : require('../assets/images/pao.jpg'),
            descricao : 'Pão com ovo facil para ser feito no microondas',
            isFavorito : true,
            ingredientes : [
                '1 Ovo', 
                '1 Fatia de Pão', 
                'Sal e Pimenta a gosto'
            ],
            modoPreparo : 'Quebre o ovo numa caneca ou pote, tempere com sal e pimenta, leve ao micro-ondas por 30-40 segundos, coloque o ovo sobre o pão e pronto!'
        },
        {
            id : 1,
            nome : 'Iogurte com Frutas e Granola',
            urlImage : require('../assets/images/iogurte.jpeg'),
            descricao : 'Café da manha saudavel pra você que busca saúde',
            isFavorito : false,
            ingredientes : [
                '1 Copo de Iogurte Natural', 
                '200g de Frutas Picadas', 
                '2 colheres de sopa de granola'
            ],
            modoPreparo : 'Coloque o Iogurte numa caneca, despeje as frutas e finalize com a granola'
        },
        {
            id : 2,
            nome : 'Vitamina de Banana',
            urlImage : require('../assets/images/vitamina.webp'),
            descricao : 'Vitamina Saborosa com muito calcio',
            isFavorito : false,
            ingredientes : [
                '1 Banana', 
                '1 Xicara de Leite', 
                '1 Colher de sopa de Aveia', 
                'Mel a gosto'
            ],
            modoPreparo : 'Bata tudo no liquidificador até ficar cremoso e sirva gelado'
        },
    ],
    almoco : [
        {
            id : 3,
            nome : 'Camarão Alho e Óleo',
            urlImage : require('../assets/images/camarao.webp'),
            descricao : 'Camarão de saboroso grelhado no óleo saborizado com alho',
            isFavorito : true,
            ingredientes : [
                '200g de Camarão', 
                '1 Colher de Sopa de Óleo', 
                'Sal a gosto', 
                '2 Dentes de Alho'
            ],
            modoPreparo : 'Leve o camarão para refogar com os temperos de sua preferencia, descasque e quebre os dentes de alho de modo que o sabor e o aroma possa penetra o os ingredientes que já estão na panela, regue o camarão com óleo saborizado com o alho e pronto'
        },
        {
            id : 4,
            nome: 'Frango Grelhado com Arroz e Salada',
            urlImage : require('../assets/images/frango.jpg'),
            descricao: 'Refeição completa que vai te deixar bem saciado por muito tempo',
            isFavorito: true,
            ingredientes: [
                '1 filé de peito de frango',
                '1 xícara de arroz branco ou integral',
                'Alface a gosto',
                '1 tomate picado',
                'Cenoura ralada a gosto',
                'Azeite, sal, pimenta, limão e alho a gosto'
            ],
            modoPreparo: 'Tempere o frango com sal, pimenta, alho e limão. Cozinhe o arroz normalmente. Grelhe o frango na frigideira até dourar dos dois lados. Monte a salada com alface, tomate e cenoura, e tempere com azeite, sal e limão. Sirva tudo junto e aproveite!'
        },
        {
            id : 5,
            nome: 'Arroz de Forno Simples',
            urlImage : require('../assets/images/Arroz.webp'),
            descricao: 'Receita prática e deliciosa para aproveitar sobras de arroz com queijo e presunto.',
            isFavorito: false,
            ingredientes: [
                '2 xícaras de arroz cozido',
                '150g de presunto picado',
                '150g de queijo muçarela picado ou ralado',
                '1 tomate picado',
                '1/2 cebola picada',
                'Orégano a gosto',
                'Sal e pimenta a gosto'
            ],
            modoPreparo: 'Misture o arroz, presunto, queijo, tomate e cebola em um refratário. Tempere com sal, pimenta e orégano. Cubra com mais queijo por cima se quiser. Leve ao forno preaquecido a 180°C por cerca de 15 minutos ou até o queijo derreter. Sirva em seguida.'
        }
    ], 
    jantar : [

    ]
}