import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'pt' | 'es';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const translations = {
  pt: {
    // Header
    welcome: 'Bem-vindo à Operação Acolhida',
    appTitle: 'integrar | Operação Acolhida',
    
    // Navigation
    knowOperation: 'Conheça a Operação Acolhida',
    migrantArea: 'Área do Migrante e Refugiado',
    successStories: 'Casos de Sucesso',
    announcements: 'Avisos',
    
    // About
    aboutTitle: 'Sobre a Operação Acolhida',
    aboutText1: 'A Operação Acolhida é uma resposta humanitária do Governo Federal para o fluxo migratório intenso de venezuelanos na fronteira entre os dois países. Criada em 2018, com o objetivo de garantir atendimento aos refugiados e migrantes venezuelanos, a Operação Acolhida consiste na realocação voluntária, segura, ordenada e gratuita dessas pessoas, em situação de vulnerabilidade, dos municípios de Roraima para outras cidades do Brasil.',
    aboutText2: 'Esta realocação, conhecida como interiorização, visa permitir que as pessoas beneficiadas tenham melhores oportunidades de integração social, econômica e cultural, bem como reduzir a pressão sobre os serviços públicos atualmente existente principalmente em Roraima, localizado na fronteira norte do Brasil com a Venezuela.',
    aboutText3: 'A ação envolve o Governo Federal, estados, municípios, as Forças Armadas, órgãos do Judiciário, organizações internacionais e mais de 100 organizações da sociedade civil.',
    aboutText4: 'Pela estratégia, os entes federados que recebem migrantes na estratégia da interiorização podem solicitar apoio da União, por meio de repasse financeiro. O repasse é feito quando grupos de migrantes e refugiados venezuelanos se encontram em situação de grave vulnerabilidade social, vivenciando situação de rua, habitações precárias ou outras condições de risco social.',
    aboutLegislation: 'Legislação',
    aboutText5: 'A Operação Acolhida foi criada pela Medida Provisória nº 820/2018, convertida pelo Congresso Nacional na Lei nº 13.684/2018, que trata das ações de assistência emergencial para acolhimento a pessoas em situação de vulnerabilidade decorrente de fluxo migratório provocado por crise humanitária, e institui o Comitê Federal de Assistência Emergencial regulado pelo Decreto nº 9.970 de 2019.',
    aboutGovernance: 'Governança',
    aboutText6: 'O Comitê Federal de Assistência Emergencial é presidido pela Casa Civil da Presidência da República e é encarregado de coordenar o trabalho intersetorial da resposta humanitária.',
    aboutText7: 'O Ministério do Desenvolvimento e Assistência Social, Família e Combate à Fome (MDS) é o coordenador do Subcomitê Federal para Acolhimento e Interiorização de Imigrantes em Situação de Vulnerabilidade.',
    aboutText8: 'O Subcomitê articula a cooperação no atendimento realizado nos abrigos em Roraima e na estratégia de interiorização organizada junto aos órgãos parceiros, estados e municípios de todo o país.',
    aboutText9: 'O MDS coordena ainda, o grupo de trabalho denominado Grupo de Discussão Indígena, que visa estabelecer diálogo e estratégias que fortaleçam ações voltadas ao público indígena migrante e refugiado.',
    aboutText10: 'As Forças Armadas (Marinha, Exército e Aeronáutica) prestam apoio logístico à operação com ações em infraestrutura, transporte, saúde e administração, junto a Agências da ONU e entidades da sociedade civil.',
    aboutText11: 'Órgãos envolvidos: Casa Civil, MDS, Ministério da Defesa por meio das Forças Armadas, Ministério do Trabalho, Ministério da Educação, Polícia Federal, Receita Federal, Defensoria Pública da União (DPU), Tribunal de Justiça de Roraima, Agência das Nações Unidas para as Migrações (OIM), Agência das Nações Unidas para Refugiados (ACNUR), Fundo das Nações Unidas para a Infância (UNICEF), Fundo de População das Nações Unidas (UNFPA), ONU Mulheres e Comitê Internacional da Cruz Vermelha.',
    aboutAxesTitle: 'Eixos e modalidades',
    aboutText12: 'A Operação Acolhida é baseada no tripé:',
    aboutAxis1: 'Controle da fronteira – os imigrantes chegam ao posto de triagem e acessam os trâmites para regularização migratória;',
    aboutAxis2: 'Os migrantes requisitam acolhimento em abrigos emergenciais de gestão federal, coordenados pelo MDS por meio de Acordo de Cooperação Técnica com o ACNUR;',
    aboutAxis3: 'Eles têm a opção de se deslocarem para vários municípios em busca de novas oportunidades de vida e inclusão socioeconômica pela estratégia de interiorização, que também está sob a coordenação do MDS, com o apoio da OIM por meio de Acordo de Cooperação Técnica.',
    aboutModalitiesTitle: 'As modalidades de interiorização são:',
    aboutModality1Title: 'Institucional',
    aboutModality1: 'Saída de abrigos em Roraima para abrigos em uma das cidades de destino (Governamental ou sociedade civil parceira).',
    aboutModality2Title: 'Reunificação Familiar',
    aboutModality2: 'Migrantes que desejam reunir-se com seus familiares que residem regularmente em outras regiões do país, estejam dispostos e tenham condições de oferecer apoio e moradia.',
    aboutModality3Title: 'Reunião Social',
    aboutModality3: 'Migrantes que desejam reunir-se com indivíduos com quem possuam vínculo de amizade, ou afetividade, ou familiares cujo vínculo não possa ser comprovado por meio de documentação. Os receptores devem ter condições de garantir o sustento e a moradia dos acolhidos.',
    aboutModality4Title: 'Vaga de Emprego Sinalizada (VES)',
    aboutModality4: 'Deslocamento de migrantes e refugiados que receberam sinalização de oportunidade de trabalho por empresas brasileiras de todas as regiões do país. Os migrantes selecionados são apoiados pela Operação Acolhida para o deslocamento até o município onde serão contratados. São verificados os antecedentes das empresas para prevenir situações de exploração laboral. Também recebem um apoio social tanto da empresa como de agências da ONU e entidades da sociedade civil parceiras por até três meses.',
    
    // Migrant Area
    training: 'Capacitação',
    jobs: 'Vagas de Emprego',
    cce: 'CCE',
    cci: 'CCI',
    ptrig: 'PTRIG - Posto de Triagem',
    health: 'Saúde',
    interiorization: 'Interiorização',
    migrantAreaWelcome: 'Bem-vindo! Aqui você encontra informações importantes sobre cada etapa do processo de acolhimento. Este espaço foi criado para ajudar você a se orientar, conhecer TUDO QUE A OPERAÇÃO ACOLHIDA, pode te oferecer, aqui você pode acessar serviços e descobrir oportunidades. Navegue pelo aplicativo e conheça tudo o que a Operação Acolhida oferece para apoiar sua nova caminhada no Brasil. Seu recomeço começa aqui!',
    citiesWithJobs: 'Cidades com Vagas de Emprego',
    citiesWithJobsDescription: 'As cidades abaixo são onde se encontram as vagas de emprego disponíveis. Clique em cada cidade para conhecer mais sobre ela através de vídeos informativos.',
    watchVideo: 'Veja o Vídeo',
    
    // Training
    trainingTitle: 'Capacitação',
    portugueseCourse: 'Curso de Português Intermediário',
    electricianCourse: 'Curso de Auxiliar de Eletricista',
    cceTitle: 'CCE - Centro de Capacitação e Educação',
    cceDescription: 'O CCE é uma iniciativa da Operação Acolhida que oferece cursos e capacitação para promover autonomia, emprego e renda a migrantes e refugiados, facilitando sua integração social e cultural no Brasil.',
    
    // Jobs
    jobsTitle: 'Vagas de Emprego',
    jobsIntro: 'Os interessados podem comparecer ao CCI | Av. Gen. Sampaio, 260 - Treze de Setembro, Boa Vista - RR, 69308-505, e dar o primeiro passo rumo a um futuro de conquistas e dignidade. O seu novo começo começa agora, aproveite esta oportunidade!\n\nSe você está buscando uma oportunidade para transformar sua vida e garantir um futuro melhor para você e sua família, este é o momento de agir! As vagas de emprego abaixo representam muito mais que simples postos de trabalho: são portas abertas para um novo começo, estabilidade e crescimento pessoal.\n\nCada oportunidade é um passo em direção a uma nova realidade, construída com esforço, coragem e determinação.',
    jobsFooter: 'Os interessados podem comparecer ao CCI | Av. Gen. Sampaio, 260 - Treze de Setembro, Boa Vista - RR, 69308-505, e dar o primeiro passo rumo a um futuro de conquistas e dignidade. O seu novo começo começa agora, aproveite esta oportunidade!',
    retailOperator: 'Operador de Atacarejo',
    retailVacancies: '40 vagas, até 50 anos, destino Vila Velha',
    seamstress: 'Costureiro(a)',
    seamstressVacancies: '20 a 45 anos, destino Parelhas/RN',
    address: 'Endereço',
    phone: 'Telefone',
    
    // CCI
    cciTitle: 'CCI - Centro de Coordenação de Interiorização',
    cciDescription: 'O CCI coordena a realocação voluntária de migrantes e refugiados de Roraima para outras cidades do Brasil, oferecendo suporte para capacitação, emprego e integração social e cultural.',
    cciProcessTitle: 'Processo de Interiorização',
    cciProcessDescription: 'A interiorização é um dos eixos da Operação Acolhida, iniciada em 2018 para realocar voluntária e gratuitamente venezuelanos em situação de vulnerabilidade, saindo de Roraima para outras cidades brasileiras. As cidades de destino são selecionadas com base em diversas modalidades de apoio:',
    cciReunionFamily: 'Reunião Familiar',
    cciReunionFamilyDesc: 'Refugiados e migrantes são levados para perto de seus familiares que já residem no Brasil.',
    cciReunionSocial: 'Reunião Social',
    cciReunionSocialDesc: 'Pessoas se deslocam para se reunir com amigos ou familiares que comprovadamente podem oferecer apoio e moradia.',
    cciJobOffer: 'Vaga de Emprego Sinalizada (VES)',
    cciJobOfferDesc: 'Empresas de diversas regiões do país oferecem oportunidades de trabalho, viabilizando a realocação para essas cidades.',
    
    // PTRIG
    ptrigTitle: 'PTRIG - Posto de Triagem e Interiorização',
    ptrigMainTitle: 'PTRIG – Posto de Triagem de Boa Vista (RR)',
    ptrigAttention: 'Atenção, migrantes e refugiados em Roraima! A Operação Acolhida tem uma mensagem para você ser atendido, leia com atenção!',
    ptrigText1: 'No PTrig de Boa Vista, o segredo para ser atendido é com senha: Para um atendimento seguro e de qualidade, venha buscar sua senha presencial para ser atendido na fila 1, no dia seguinte. É a sua garantia de atendimento.',
    ptrigText2: 'A distribuição de senha é apenas para a fila de primeira vez, fila 1, para os beneficiários que desejam fazer a documentação Brasileira de imigração. Não pague nada, pois todos os serviços são gratuitos. Cuidado com golpes! Se pedirem dinheiro ou favores, é fraude. Menores ou incapazes devem estar com responsável. Só você pode usar a senha! Ela é intransferível!',
    ptrigText3: 'Para retire a senha: De segunda a sexta, das 09h às 17h. A senha para FILA é ÚNICA, e o mais importante É SUA.',
    ptrigText4: 'Quem for acima de 70 anos, PCDs, gestantes, famílias com crianças menores de até dois anos e menores desacompanhados entram na fila preferencial, fila número 8. Está fila não necessita de senha. Basta chegar às 06:40 da manhã que todos serão atendidos.',
    ptrigText5: 'TODOS que retirarem a senha serão atendidos NO DIA SEGUINTE! É proibido e desnecessário formar filas durante a noite. Seu atendimento é garantido e seguro durante o dia!',
    ptrigText6: 'Relembro, Nenhuma fila deverá ser feita à noite e a fila 1, de primeira vez, é formada por meio de senha que é distribuída de segunda a sexta de 09 às 17 horas.',
    ptrigText7: 'Operação Acolhida: uma resposta do Governo Federal com segurança e qualidade no atendimento pra você!',
    ptrigDescription: 'O PTRIG realiza triagem, identificação e atendimento social, jurídico e de saúde. Oferece apoio à documentação, acolhimento psicossocial, atividades educativas e encaminhamentos de saúde.',
    location: 'Localização',
    
    // Resume
    resumeTitle: 'Cadastre seu Currículo',
    resumeDescription: 'Cadastre seu currículo e permita que as empresas interessadas conheçam seu perfil, valorizem suas habilidades e entrem em contato com você. Sua experiência e talento podem abrir novas oportunidades.',
    registerResumeButton: 'CADASTRE SEU CURRÍCULO AQUI',
    
    // Health
    healthTitle: 'Saúde',
    agsusDescription: 'A saúde nos abrigos da Operação Acolhida é de responsabilidade da AGSUS. Em caso de necessidade, procure diretamente os representantes da AGSUS no abrigo para receber o atendimento adequado.',
    hygieneTitle: 'Higiene e Limpeza',
    hygiene1: 'Mantenha o local limpo e organizado.',
    hygiene2: 'Evite levar comida para as casas e barracas.',
    hygiene3: 'Não jogue lixo no chão — use as lixeiras.',
    hygiene4: 'Após usar o banheiro, limpe e lave as mãos.',
    healthCareTitle: 'Cuidados com a Saúde',
    healthCare1: 'Fique atento a sintomas como dor, febre, tosse ou espirro.',
    healthCare2: 'Procure a equipe de saúde do abrigo assim que sentir-se mal.',
    healthCare3: 'Evite bebidas alcoólicas em excesso.',
    recommendationsTitle: 'Recomendações Gerais',
    recommendation1: 'Se sentir-se mal durante o dia, procure a unidade de saúde — não espere anoitecer.',
    recommendation2: 'Evite aglomerações e mantenha distância de pessoas doentes.',
    recommendation3: 'Hidrate-se e mantenha boa alimentação.',
    recommendation4: 'Siga as orientações das equipes de saúde.',
    
    // Success Stories
    successTitle: 'Casos de Sucesso',
    successIntro: 'Conheça histórias inspiradoras de pessoas que transformaram suas vidas através da Operação Acolhida.',
    story1Title: 'Do Abrigo à Seleção Brasileira',
    story1Text: 'Um refugiado venezuelano que chegou ao Brasil em situação de vulnerabilidade encontrou no esporte uma oportunidade de recomeço. Após receber apoio da Operação Acolhida, desenvolveu suas habilidades e hoje é técnico da seleção brasileira de beisebol, inspirando outros migrantes a perseguirem seus sonhos.',
    story2Title: 'Integração e Conquista',
    story2Text: 'Um indígena venezuelano chegou ao Brasil sem falar português e com poucas perspectivas. Após participar dos cursos de capacitação oferecidos pela Operação Acolhida, aprendeu o idioma, desenvolveu novas habilidades profissionais e conquistou um emprego formal. Hoje vive com dignidade e ajuda outros recém-chegados em sua jornada de integração.',
    
    // Announcements
    announcementsTitle: 'Avisos Importantes',
    announcementsIntro: 'Fique atento às orientações e comunicados oficiais nos abrigos.',
    announcement1: 'Siga as regras e horários estabelecidos.',
    announcement2: 'Ouça as instruções dos militares e agências humanitárias.',
    announcement3: 'Veja os murais e avisos sonoros sobre serviços, campanhas e oportunidades.',
    announcementFooter: 'Manter-se informado ajuda na convivência e fortalece a comunidade acolhida.',
    
    // Interiorization
    interiorizationTitle: 'Interiorização',
    whatIsInteriorization: 'O que é Interiorização',
    interiorizationDescription: 'A interiorização é a realocação voluntária e gratuita de migrantes e refugiados venezuelanos da fronteira de Roraima para outras cidades do Brasil, dentro da Operação Acolhida. O objetivo é oferecer novas oportunidades de integração social, econômica e cultural, além de aliviar a pressão sobre os serviços públicos em Roraima. O programa é coordenado pelo Governo Federal, com o apoio de diversas organizações, e garante que essas pessoas tenham um recomeço seguro no país.',
    howItWorks: 'Como funciona',
    voluntaryRelocation: 'Realocação voluntária',
    voluntaryRelocationDesc: 'As pessoas, em especial as que vivem em situação de vulnerabilidade em Roraima, têm a opção de serem transferidas para outras cidades do Brasil.',
    humanitarianProcess: 'Processo humanitário',
    humanitarianProcessDesc: 'A interiorização é uma etapa da Operação Acolhida, uma resposta humanitária que inclui o recebimento, identificação, triagem, imunização e abrigo de migrantes.',
    supportActions: 'Ações de apoio',
    supportActionsDesc: 'O processo envolve apoio logístico, como passagens aéreas e terrestres, e auxílio na busca por emprego e capacitação em novos locais.',
    partnership: 'Parceria',
    partnershipDesc: 'A estratégia é uma iniciativa conjunta do Governo Federal, estados, municípios, Forças Armadas, agências da ONU e organizações da sociedade civil.',
    interiorizationModalities: 'Modalidades de Interiorização',
    institutional: 'Institucional',
    institutionalDesc: 'Saída de abrigos em Roraima para abrigos em uma das cidades de destino (Governamental ou sociedade civil parceira).',
    familyReunification: 'Reunificação Familiar',
    familyReunificationDesc: 'Migrantes que desejam reunir-se com seus familiares que residem regularmente em outras regiões do país, estejam dispostos e tenham condições de oferecer apoio e moradia.',
    socialReunion: 'Reunião Social',
    socialReunionDesc: 'Migrantes que desejam reunir-se com indivíduos com quem possuam vínculo de amizade, ou afetividade, ou familiares cujo vínculo não possa ser comprovado por meio de documentação. Os receptores devem ter condições de garantir o sustento e a moradia dos acolhidos.',
    ves: 'Vaga de Emprego Sinalizada (VES)',
    vesDesc: 'Deslocamento de migrantes e refugiados que receberam sinalização de oportunidade de trabalho por empresas brasileiras de todas as regiões do país. Os migrantes selecionados são apoiados pela Operação Acolhida para o deslocamento até o município onde serão contratados. São verificados os antecedentes das empresas para prevenir situações de exploração laboral. Também recebem um apoio social tanto da empresa como de agências da ONU e entidades da sociedade civil parceiras por até três meses.',
    
    // Registration Form
    registrationFormTitle: 'Formulário de Cadastro',
    registrationFormDescription: 'Para acessar a Área do Migrante, preencha os dados abaixo. Isso nos ajuda a entender melhor quem você é e como podemos apoiá-lo.',
    fullName: 'Nome Completo',
    birthDate: 'Data de Nascimento',
    nationality: 'Nacionalidade',
    nationalityPlaceholder: 'Ex: Venezuelano, Colombiano, etc.',
    cpf: 'CPF',
    optional: 'opcional',
    cancel: 'Cancelar',
    submit: 'Enviar',
    saving: 'Salvando...',
    formError: 'Erro no formulário',
    formErrorFullName: 'Nome completo deve ter pelo menos 3 caracteres',
    formErrorBirthDate: 'Data de nascimento não pode ser futura',
    formErrorNationality: 'Nacionalidade deve ter pelo menos 2 caracteres',
    registrationSuccess: 'Cadastro realizado!',
    registrationSuccessDescription: 'Seus dados foram registrados com sucesso.',
    errorTitle: 'Erro',
    errorDescription: 'Ocorreu um erro ao registrar seus dados. Tente novamente.',
    errorLoadingData: 'Erro ao carregar dados.',
    updateRegistration: 'Atualizar meu cadastro',
    
    // Analysis Page
    registrationsAnalysisTitle: 'Análise de Cadastros',
    registrationsAnalysisDescription: 'Visualize e analise os dados dos cadastros realizados na Área do Migrante.',
    totalRegistrations: 'Total de Cadastros',
    thisMonth: 'Este Mês',
    topNationality: 'Nacionalidade Mais Comum',
    withCPF: 'Com CPF',
    filters: 'Filtros',
    filterDescription: 'Use os filtros abaixo para refinar sua busca.',
    searchByName: 'Buscar por nome ou CPF...',
    filterByNationality: 'Filtrar por nacionalidade',
    allNationalities: 'Todas as nacionalidades',
    registrationsList: 'Lista de Cadastros',
    showingResults: 'Mostrando {{count}} resultado(s)',
    age: 'Idade',
    registrationDate: 'Data de Cadastro',
    years: 'anos',
    noResults: 'Nenhum resultado encontrado',
    loading: 'Carregando...',
    
    // Shelters
    sheltersTitle: 'Abrigos',
    sheltersMainTitle: 'ABRIGOS DA OPERAÇÃO ACOLHIDA',
    sheltersIntro: 'A Operação Acolhida é uma estratégia do Governo Federal do Brasil que coordena ações humanitárias destinadas a receber migrantes e refugiados que chegam ao país pela fronteira norte. A iniciativa garante um atendimento digno, organizado e solidário para quem busca reconstruir suas vidas em território brasileiro.',
    sheltersText1: 'Como parte dessa estratégia, os abrigos da Operação Acolhida funcionam como espaços temporais de acolhimento, criados para oferecer refúgio seguro, alimentação, atendimento básico e proteção. Nas cidades de Boa Vista e Pacaraima, esses espaços estão organizados para responder às necessidades imediatas dos migrantes, promovendo a dignidade, a higiene e a convivência respeitosa entre todos.',
    sheltersText2: 'A permanência nos abrigos é temporária, representando uma etapa de transição antes do deslocamento para novas oportunidades em outras regiões do país. Clique nos botões abaixo para conhecer mais sobre cada abrigo e compreender o papel fundamental que desempenham dentro da Operação Acolhida.',
    knowSheltersButton: 'CONHEÇA OS ABRIGOS',
    sheltersHealthButton: 'SAÚDE',
    sheltersRulesButton: 'REGRAS DE CONVIVÊNCIA',
    
    // Common
    backHome: 'Voltar ao Início',
    learnMore: 'Saiba Mais',
  },
  es: {
    // Header
    welcome: 'Bienvenido a la Operación Acogida',
    appTitle: 'integrar | Operación Acogida',
    
    // Navigation
    knowOperation: 'Conozca la Operación Acogida',
    migrantArea: 'Área del Migrante y Refugiado',
    successStories: 'Casos de Éxito',
    announcements: 'Avisos',
    
    // About
    aboutTitle: 'Sobre la Operación Acogida',
    aboutText1: 'La Operación Acogida es una respuesta humanitaria del Gobierno Federal para el flujo migratorio intenso de venezolanos en la frontera entre los dos países. Creada en 2018, con el objetivo de garantizar atención a los refugiados y migrantes venezolanos, la Operación Acogida consiste en la reubicación voluntaria, segura, ordenada y gratuita de estas personas, en situación de vulnerabilidad, de los municipios de Roraima hacia otras ciudades de Brasil.',
    aboutText2: 'Esta reubicación, conocida como interiorización, tiene como objetivo permitir que las personas beneficiadas tengan mejores oportunidades de integración social, económica y cultural, así como reducir la presión sobre los servicios públicos existentes principalmente en Roraima, ubicado en la frontera norte de Brasil con Venezuela.',
    aboutText3: 'La acción involucra al Gobierno Federal, estados, municipios, las Fuerzas Armadas, órganos del Poder Judicial, organizaciones internacionales y más de 100 organizaciones de la sociedad civil.',
    aboutText4: 'Por la estrategia, los entes federados que reciben migrantes en la estrategia de interiorización pueden solicitar apoyo de la Unión, a través de transferencia financiera. La transferencia se realiza cuando grupos de migrantes y refugiados venezolanos se encuentran en situación de grave vulnerabilidad social, viviendo en situación de calle, viviendas precarias u otras condiciones de riesgo social.',
    aboutLegislation: 'Legislación',
    aboutText5: 'La Operación Acogida fue creada por la Medida Provisional nº 820/2018, convertida por el Congreso Nacional en la Ley nº 13.684/2018, que trata de las acciones de asistencia emergencial para acogida de personas en situación de vulnerabilidad derivada de flujo migratorio provocado por crisis humanitaria, e instituye el Comité Federal de Asistencia Emergencial regulado por el Decreto nº 9.970 de 2019.',
    aboutGovernance: 'Gobernanza',
    aboutText6: 'El Comité Federal de Asistencia Emergencial es presidido por la Casa Civil de la Presidencia de la República y está encargado de coordinar el trabajo intersectorial de la respuesta humanitaria.',
    aboutText7: 'El Ministerio de Desarrollo y Asistencia Social, Familia y Combate al Hambre (MDS) es el coordinador del Subcomité Federal para Acogida e Interiorización de Inmigrantes en Situación de Vulnerabilidad.',
    aboutText8: 'El Subcomité articula la cooperación en la atención realizada en los refugios en Roraima y en la estrategia de interiorización organizada junto a los órganos asociados, estados y municipios de todo el país.',
    aboutText9: 'El MDS coordina también el grupo de trabajo denominado Grupo de Discusión Indígena, que busca establecer diálogo y estrategias que fortalezcan acciones dirigidas al público indígena migrante y refugiado.',
    aboutText10: 'Las Fuerzas Armadas (Marina, Ejército y Aeronáutica) prestan apoyo logístico a la operación con acciones en infraestructura, transporte, salud y administración, junto a Agencias de la ONU y entidades de la sociedad civil.',
    aboutText11: 'Órganos involucrados: Casa Civil, MDS, Ministerio de Defensa a través de las Fuerzas Armadas, Ministerio del Trabajo, Ministerio de Educación, Policía Federal, Receita Federal, Defensoría Pública de la Unión (DPU), Tribunal de Justicia de Roraima, Agencia de las Naciones Unidas para las Migraciones (OIM), Agencia de las Naciones Unidas para Refugiados (ACNUR), Fondo de las Naciones Unidas para la Infancia (UNICEF), Fondo de Población de las Naciones Unidas (UNFPA), ONU Mujeres y Comité Internacional de la Cruz Roja.',
    aboutAxesTitle: 'Ejes y modalidades',
    aboutText12: 'La Operación Acogida se basa en el trípode:',
    aboutAxis1: 'Control de la frontera – los inmigrantes llegan al puesto de triaje y acceden a los trámites para regularización migratoria;',
    aboutAxis2: 'Los migrantes solicitan acogida en refugios emergenciales de gestión federal, coordinados por el MDS a través de Acuerdo de Cooperación Técnica con ACNUR;',
    aboutAxis3: 'Tienen la opción de desplazarse a varios municipios en busca de nuevas oportunidades de vida e inclusión socioeconómica por la estrategia de interiorización, que también está bajo la coordinación del MDS, con el apoyo de la OIM a través de Acuerdo de Cooperación Técnica.',
    aboutModalitiesTitle: 'Las modalidades de interiorización son:',
    aboutModality1Title: 'Institucional',
    aboutModality1: 'Salida de refugios en Roraima hacia refugios en una de las ciudades de destino (Gubernamental o sociedad civil asociada).',
    aboutModality2Title: 'Reunificación Familiar',
    aboutModality2: 'Migrantes que desean reunirse con sus familiares que residen regularmente en otras regiones del país, estén dispuestos y tengan condiciones de ofrecer apoyo y vivienda.',
    aboutModality3Title: 'Reunión Social',
    aboutModality3: 'Migrantes que desean reunirse con individuos con quienes posean vínculo de amistad, o afectividad, o familiares cuyo vínculo no pueda ser comprobado por medio de documentación. Los receptores deben tener condiciones de garantizar el sustento y la vivienda de los acogidos.',
    aboutModality4Title: 'Vacante de Empleo Señalizada (VES)',
    aboutModality4: 'Desplazamiento de migrantes y refugiados que recibieron señalización de oportunidad de trabajo por empresas brasileñas de todas las regiones del país. Los migrantes seleccionados son apoyados por la Operación Acogida para el desplazamiento hasta el municipio donde serán contratados. Se verifican los antecedentes de las empresas para prevenir situaciones de explotación laboral. También reciben apoyo social tanto de la empresa como de agencias de la ONU y entidades de la sociedad civil asociadas por hasta tres meses.',
    
    // Migrant Area
    training: 'Capacitación',
    jobs: 'Ofertas de Empleo',
    cce: 'CCE',
    cci: 'CCI',
    ptrig: 'PTRIG - Puesto de Triaje',
    health: 'Salud',
    interiorization: 'Interiorización',
    migrantAreaWelcome: '¡Bienvenido! Aquí encuentra información importante sobre cada etapa del proceso de acogida. Este espacio fue creado para ayudarle a orientarse, conocer TODO LO QUE LA OPERACIÓN ACOGIDA puede ofrecerle, aquí puede acceder a servicios y descubrir oportunidades. Navegue por la aplicación y conozca todo lo que la Operación Acogida ofrece para apoyar su nuevo camino en Brasil. ¡Su nuevo comienzo empieza aquí!',
    citiesWithJobs: 'Ciudades con Ofertas de Empleo',
    citiesWithJobsDescription: 'Las ciudades a continuación son donde se encuentran las ofertas de empleo disponibles. Haga clic en cada ciudad para conocer más sobre ella a través de videos informativos.',
    watchVideo: 'Ver el Video',
    
    // Training
    trainingTitle: 'Capacitación',
    portugueseCourse: 'Curso de Portugués Intermedio',
    electricianCourse: 'Curso de Auxiliar de Electricista',
    cceTitle: 'CCE - Centro de Capacitación y Educación',
    cceDescription: 'El CCE es una iniciativa de la Operación Acogida que ofrece cursos y capacitación para promover autonomía, empleo e ingresos a migrantes y refugiados, facilitando su integración social y cultural en Brasil.',
    
    // Jobs
    jobsTitle: 'Ofertas de Empleo',
    jobsIntro: 'Los interesados pueden acudir al CCI | Av. Gen. Sampaio, 260 - Treze de Setembro, Boa Vista - RR, 69308-505, y dar el primer paso hacia un futuro de logros y dignidad. ¡Tu nuevo comienzo empieza ahora, aprovecha esta oportunidad!\n\nSi estás buscando una oportunidad para transformar tu vida y garantizar un futuro mejor para ti y tu familia, ¡este es el momento de actuar! Las vacantes de empleo a continuación representan mucho más que simples puestos de trabajo: son puertas abiertas hacia un nuevo comienzo, estabilidad y crecimiento personal.\n\nCada oportunidad es un paso hacia una nueva realidad, construida con esfuerzo, valentía y determinación.',
    jobsFooter: 'Los interesados pueden acudir al CCI | Av. Gen. Sampaio, 260 - Treze de Setembro, Boa Vista - RR, 69308-505, y dar el primer paso hacia un futuro de logros y dignidad. ¡Tu nuevo comienzo empieza ahora, aprovecha esta oportunidad!',
    retailOperator: 'Operador de Mayorista',
    retailVacancies: '40 vacantes, hasta 50 años, destino Vila Velha',
    seamstress: 'Costurero(a)',
    seamstressVacancies: '20 a 45 años, destino Parelhas/RN',
    address: 'Dirección',
    phone: 'Teléfono',
    
    // CCI
    cciTitle: 'CCI - Centro de Coordinación de Interiorización',
    cciDescription: 'El CCI coordina la reubicación voluntaria de migrantes y refugiados desde Roraima hacia otras ciudades de Brasil, ofreciendo apoyo para capacitación, empleo e integración social y cultural.',
    cciProcessTitle: 'Proceso de Interiorización',
    cciProcessDescription: 'La interiorización es uno de los ejes de la Operación Acogida, iniciada en 2018 para reubicar voluntaria y gratuitamente a venezolanos en situación de vulnerabilidad, saliendo de Roraima hacia otras ciudades brasileñas. Las ciudades de destino son seleccionadas con base en diversas modalidades de apoyo:',
    cciReunionFamily: 'Reunión Familiar',
    cciReunionFamilyDesc: 'Refugiados y migrantes son llevados cerca de sus familiares que ya residen en Brasil.',
    cciReunionSocial: 'Reunión Social',
    cciReunionSocialDesc: 'Las personas se desplazan para reunirse con amigos o familiares que comprobadamente pueden ofrecer apoyo y vivienda.',
    cciJobOffer: 'Vacante de Empleo Señalizada (VES)',
    cciJobOfferDesc: 'Empresas de diversas regiones del país ofrecen oportunidades de trabajo, viabilizando la reubicación hacia esas ciudades.',
    
    // PTRIG
    ptrigTitle: 'PTRIG - Puesto de Triaje e Interiorización',
    ptrigMainTitle: 'PTRIG – Puesto de Triaje de Boa Vista (RR)',
    ptrigAttention: '¡Atención, migrantes y refugiados en Roraima! La Operación Acogida tiene un mensaje para que usted sea atendido, ¡lea con atención!',
    ptrigText1: 'En el PTrig de Boa Vista, el secreto para ser atendido es con contraseña: Para una atención segura y de calidad, venga a buscar su contraseña presencial para ser atendido en la fila 1, al día siguiente. Es su garantía de atención.',
    ptrigText2: 'La distribución de contraseña es solo para la fila de primera vez, fila 1, para los beneficiarios que desean hacer la documentación Brasileña de inmigración. No pague nada, pues todos los servicios son gratuitos. ¡Cuidado con estafas! Si piden dinero o favores, es fraude. Menores o incapaces deben estar con responsable. ¡Solo usted puede usar la contraseña! ¡Es intransferible!',
    ptrigText3: 'Para retirar la contraseña: De lunes a viernes, de 09h a 17h. La contraseña para FILA es ÚNICA, y lo más importante ES SUYA.',
    ptrigText4: 'Quienes tengan más de 70 años, PCDs, embarazadas, familias con niños menores de hasta dos años y menores no acompañados entran en la fila preferencial, fila número 8. Esta fila no necesita contraseña. Basta llegar a las 06:40 de la mañana que todos serán atendidos.',
    ptrigText5: '¡TODOS los que retiren la contraseña serán atendidos AL DÍA SIGUIENTE! Está prohibido e innecesario formar filas durante la noche. ¡Su atención está garantizada y es segura durante el día!',
    ptrigText6: 'Recuerdo, Ninguna fila deberá ser hecha por la noche y la fila 1, de primera vez, se forma por medio de contraseña que se distribuye de lunes a viernes de 09 a 17 horas.',
    ptrigText7: '¡Operación Acogida: una respuesta del Gobierno Federal con seguridad y calidad en la atención para usted!',
    ptrigDescription: 'El PTRIG realiza triaje, identificación y atención social, jurídica y de salud. Ofrece apoyo a la documentación, acogida psicosocial, actividades educativas y derivaciones de salud.',
    location: 'Ubicación',
    
    // Resume
    resumeTitle: 'Registre su Currículum',
    resumeDescription: 'Registre su currículum y permita que las empresas interesadas conozcan su perfil, valoren sus habilidades y entren en contacto con usted. Su experiencia y talento pueden abrir nuevas oportunidades.',
    registerResumeButton: 'REGISTRE SU CURRÍCULUM AQUÍ',
    
    // Health
    healthTitle: 'Salud',
    agsusDescription: 'La salud en los refugios de la Operación Acogida es responsabilidad de AGSUS. En caso de necesidad, busque directamente a los representantes de AGSUS en el refugio para recibir la atención adecuada.',
    hygieneTitle: 'Higiene y Limpieza',
    hygiene1: 'Mantenga el lugar limpio y organizado.',
    hygiene2: 'Evite llevar comida a las casas y carpas.',
    hygiene3: 'No tire basura al suelo — use los basureros.',
    hygiene4: 'Después de usar el baño, limpie y lávese las manos.',
    healthCareTitle: 'Cuidados con la Salud',
    healthCare1: 'Esté atento a síntomas como dolor, fiebre, tos o estornudos.',
    healthCare2: 'Busque al equipo de salud del refugio tan pronto como se sienta mal.',
    healthCare3: 'Evite bebidas alcohólicas en exceso.',
    recommendationsTitle: 'Recomendaciones Generales',
    recommendation1: 'Si se siente mal durante el día, busque la unidad de salud — no espere hasta la noche.',
    recommendation2: 'Evite aglomeraciones y mantenga distancia de personas enfermas.',
    recommendation3: 'Hidrátese y mantenga una buena alimentación.',
    recommendation4: 'Siga las orientaciones de los equipos de salud.',
    
    // Success Stories
    successTitle: 'Casos de Éxito',
    successIntro: 'Conozca historias inspiradoras de personas que transformaron sus vidas a través de la Operación Acogida.',
    story1Title: 'Del Refugio a la Selección Brasileña',
    story1Text: 'Un refugiado venezolano que llegó a Brasil en situación de vulnerabilidad encontró en el deporte una oportunidad para comenzar de nuevo. Después de recibir apoyo de la Operación Acogida, desarrolló sus habilidades y hoy es entrenador de la selección brasileña de béisbol, inspirando a otros migrantes a perseguir sus sueños.',
    story2Title: 'Integración y Conquista',
    story2Text: 'Un indígena venezolano llegó a Brasil sin hablar portugués y con pocas perspectivas. Después de participar en los cursos de capacitación ofrecidos por la Operación Acogida, aprendió el idioma, desarrolló nuevas habilidades profesionales y consiguió un empleo formal. Hoy vive con dignidad y ayuda a otros recién llegados en su trayectoria de integración.',
    
    // Announcements
    announcementsTitle: 'Avisos Importantes',
    announcementsIntro: 'Preste atención a las orientaciones y comunicados oficiales en los refugios.',
    announcement1: 'Siga las reglas y horarios establecidos.',
    announcement2: 'Escuche las instrucciones de los militares y agencias humanitarias.',
    announcement3: 'Vea los murales y avisos sonoros sobre servicios, campañas y oportunidades.',
    announcementFooter: 'Mantenerse informado ayuda en la convivencia y fortalece la comunidad acogida.',
    
    // Interiorization
    interiorizationTitle: 'Interiorización',
    whatIsInteriorization: 'Qué es la Interiorización',
    interiorizationDescription: 'La interiorización es la reubicación voluntaria y gratuita de migrantes y refugiados venezolanos desde la frontera de Roraima hacia otras ciudades de Brasil, dentro de la Operación Acogida. El objetivo es ofrecer nuevas oportunidades de integración social, económica y cultural, además de aliviar la presión sobre los servicios públicos en Roraima. El programa es coordinado por el Gobierno Federal, con el apoyo de diversas organizaciones, y garantiza que estas personas tengan un reinicio seguro en el país.',
    howItWorks: 'Cómo funciona',
    voluntaryRelocation: 'Reubicación voluntaria',
    voluntaryRelocationDesc: 'Las personas, especialmente las que viven en situación de vulnerabilidad en Roraima, tienen la opción de ser transferidas a otras ciudades de Brasil.',
    humanitarianProcess: 'Proceso humanitario',
    humanitarianProcessDesc: 'La interiorización es una etapa de la Operación Acogida, una respuesta humanitaria que incluye la recepción, identificación, triaje, inmunización y refugio de migrantes.',
    supportActions: 'Acciones de apoyo',
    supportActionsDesc: 'El proceso involucra apoyo logístico, como pasajes aéreos y terrestres, y ayuda en la búsqueda de empleo y capacitación en nuevos lugares.',
    partnership: 'Asociación',
    partnershipDesc: 'La estrategia es una iniciativa conjunta del Gobierno Federal, estados, municipios, Fuerzas Armadas, agencias de la ONU y organizaciones de la sociedad civil.',
    interiorizationModalities: 'Modalidades de Interiorización',
    institutional: 'Institucional',
    institutionalDesc: 'Salida de refugios en Roraima hacia refugios en una de las ciudades de destino (Gubernamental o sociedad civil asociada).',
    familyReunification: 'Reunificación Familiar',
    familyReunificationDesc: 'Migrantes que desean reunirse con sus familiares que residen regularmente en otras regiones del país, estén dispuestos y tengan condiciones de ofrecer apoyo y vivienda.',
    socialReunion: 'Reunión Social',
    socialReunionDesc: 'Migrantes que desean reunirse con individuos con quienes tengan vínculo de amistad, o afectividad, o familiares cuyo vínculo no pueda ser comprobado por medio de documentación. Los receptores deben tener condiciones de garantizar el sustento y la vivienda de los acogidos.',
    ves: 'Vacante de Empleo Señalizada (VES)',
    vesDesc: 'Desplazamiento de migrantes y refugiados que recibieron señalización de oportunidad de trabajo por empresas brasileñas de todas las regiones del país. Los migrantes seleccionados son apoyados por la Operación Acogida para el desplazamiento hasta el municipio donde serán contratados. Se verifican los antecedentes de las empresas para prevenir situaciones de explotación laboral. También reciben apoyo social tanto de la empresa como de agencias de la ONU y entidades de la sociedad civil asociadas por hasta tres meses.',
    
    // Registration Form
    registrationFormTitle: 'Formulario de Registro',
    registrationFormDescription: 'Para acceder al Área del Migrante, complete los datos a continuación. Esto nos ayuda a entender mejor quién es usted y cómo podemos apoyarlo.',
    fullName: 'Nombre Completo',
    birthDate: 'Fecha de Nacimiento',
    nationality: 'Nacionalidad',
    nationalityPlaceholder: 'Ej: Venezolano, Colombiano, etc.',
    cpf: 'CPF',
    optional: 'opcional',
    cancel: 'Cancelar',
    submit: 'Enviar',
    saving: 'Guardando...',
    formError: 'Error en el formulario',
    formErrorFullName: 'El nombre completo debe tener al menos 3 caracteres',
    formErrorBirthDate: 'La fecha de nacimiento no puede ser futura',
    formErrorNationality: 'La nacionalidad debe tener al menos 2 caracteres',
    registrationSuccess: '¡Registro completado!',
    registrationSuccessDescription: 'Sus datos han sido registrados con éxito.',
    errorTitle: 'Error',
    errorDescription: 'Ocurrió un error al registrar sus datos. Inténtelo de nuevo.',
    errorLoadingData: 'Error al cargar datos.',
    updateRegistration: 'Actualizar mi registro',
    
    // Analysis Page
    registrationsAnalysisTitle: 'Análisis de Registros',
    registrationsAnalysisDescription: 'Visualice y analice los datos de los registros realizados en el Área del Migrante.',
    totalRegistrations: 'Total de Registros',
    thisMonth: 'Este Mes',
    topNationality: 'Nacionalidad Más Común',
    withCPF: 'Con CPF',
    filters: 'Filtros',
    filterDescription: 'Use los filtros a continuación para refinar su búsqueda.',
    searchByName: 'Buscar por nombre o CPF...',
    filterByNationality: 'Filtrar por nacionalidad',
    allNationalities: 'Todas las nacionalidades',
    registrationsList: 'Lista de Registros',
    showingResults: 'Mostrando {{count}} resultado(s)',
    age: 'Edad',
    registrationDate: 'Fecha de Registro',
    years: 'años',
    noResults: 'No se encontraron resultados',
    loading: 'Cargando...',
    
    // Shelters
    sheltersTitle: 'Albergues',
    sheltersMainTitle: 'ALBERGUES DE LA OPERACIÓN ACOGIDA',
    sheltersIntro: 'La Operación Acogida es una estrategia del Gobierno Federal de Brasil que coordina acciones humanitarias destinadas a recibir a migrantes y refugiados que llegan al país por la frontera norte. La iniciativa garantiza una atención digna, organizada y solidaria para quienes buscan reconstruir sus vidas en territorio brasileño.',
    sheltersText1: 'Como parte de esta estrategia, los albergues de la Operación Acogida funcionan como espacios temporales de alojamiento, creados para ofrecer refugio seguro, alimentación, atención básica y protección. En las ciudades de Boa Vista y Pacaraima, estos espacios están organizados para responder a las necesidades inmediatas de los migrantes, promoviendo la dignidad, la higiene y la convivencia respetuosa entre todos.',
    sheltersText2: 'La estadía en los albergues es temporal, representando una etapa de transición antes del traslado hacia nuevas oportunidades en otras regiones del país. Haga clic en los botones a continuación para conocer más sobre cada albergue y comprender el papel fundamental que desempeñan dentro de la Operación Acogida.',
    knowSheltersButton: 'CONHEÇA OS ABRIGOS',
    sheltersHealthButton: 'SAÚDE',
    sheltersRulesButton: 'REGRAS DE CONVIVÊNCIA',
    
    // Common
    backHome: 'Volver al Inicio',
    learnMore: 'Saber Más',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('es');

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'pt' ? 'es' : 'pt'));
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.pt] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
};
