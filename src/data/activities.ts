import { BrainCircuit, Mic, ToyBrick, Footprints, BookOpen, HeartPulse, Music, Salad, LucideIcon } from "lucide-react";

export interface Activity {
  title: string;
  description: string;
  materials: string;
}

export interface Demand {
  name: string;
  activities: Activity[];
}

export interface Diagnosis {
  name: string;
  icon: string;
  demands: Demand[];
}

export interface SpecialtyActivities {
  specialty: string;
  icon: LucideIcon;
  diagnoses: Diagnosis[];
}

export const activitiesData: SpecialtyActivities[] = [
  {
    specialty: "Psicologia",
    icon: BrainCircuit,
    diagnoses: [
      {
        name: "🧩 TEA – Transtorno do Espectro Autista",
        icon: "🧩",
        demands: [
          {
            name: "💬 Comunicação e Linguagem",
            activities: [
              { title: "Caixa de Iniciar Conversa", description: "Crie uma caixa com cartões contendo figuras ou palavras-chave (ex: 'brinquedo favorito', 'o que você comeu?'). A criança sorteia um cartão e é incentivada a iniciar uma conversa sobre o tema com o terapeuta.", materials: "Caixa, cartões com figuras ou palavras." },
              { title: "Eco com Sentido", description: "Quando a criança apresentar ecolalia (ex: repetir 'quer água?'), valide a comunicação dando a ela a água e modelando a resposta funcional: 'Ah, você quer água! Você pode dizer 'eu quero água''.", materials: "Objetos do contexto diário." },
              { title: "Diário Terapêutico com CAA", description: "Ao final da sessão, a criança usa seu sistema de CAA (figuras, tablet) para escolher 1 ou 2 figuras que representem o que ela mais gostou de fazer, construindo uma narrativa simples sobre a sessão.", materials: "Sistema de CAA, caderno." },
            ],
          },
          {
            name: "🧠 Cognição e Aprendizagem",
            activities: [
              { title: "Escada da Abstração", description: "Para ensinar um conceito (ex: 'cachorro'), comece com o concreto (um cachorro de brinquedo), passe para uma foto, depois um desenho estilizado e, por fim, a palavra escrita. Suba os 'degraus' da abstração gradualmente.", materials: "Objeto real ou miniatura, foto, desenho, palavra escrita." },
              { title: "Missão Generalização", description: "Após aprender uma habilidade (ex: pedir ajuda), crie uma 'missão' para a criança: 'Sua missão hoje é pedir ajuda para a mamãe para abrir um pote'. Isso transforma a generalização em um jogo.", materials: "Cartão de 'missão'." },
              { title: "Aprendizagem em Estações", description: "Organize a sala em 3 estações com atividades de diferentes níveis de dificuldade. Permita que a criança escolha a ordem e passe mais tempo na estação que a desafia na medida certa, respeitando seu ritmo.", materials: "Materiais para 3 atividades diferentes." },
            ],
          },
          {
            name: "💞 Socioemocional",
            activities: [
              { title: "Vídeo-Modelagem Social", description: "Assista a vídeos curtos de interações sociais (ex: crianças compartilhando um brinquedo). Pause o vídeo e pergunte: 'O que ele está sentindo? Como você sabe?'. Ajude a criança a identificar as pistas nas expressões faciais e linguagem corporal.", materials: "Tablet ou TV com vídeos curtos." },
              { title: "Quadro de Rotina Interativo", description: "Crie um quadro de rotina visual para a sessão ou para o dia. Use velcro para que a criança possa mover a figura da atividade concluída para uma caixa de 'terminado'. Isso oferece previsibilidade e uma sensação de controle.", materials: "Quadro, figuras de atividades com velcro." },
              { title: "Contador de Transição", description: "Use um timer visual (ampulheta, timer de cozinha) para mostrar quanto tempo falta para uma atividade acabar. Anuncie verbalmente: 'Em 5 minutos, vamos guardar a massinha'. Isso torna a transição previsível e menos ansiogênica.", materials: "Timer visual." },
            ],
          },
          {
            name: "👂 Sensorial e Motor",
            activities: [
              { title: "Kit de Ferramentas Sensoriais", description: "Crie junto com a criança uma 'caixa de calma' pessoal com itens que a ajudem a se regular (mordedor, fone abafador, massinha, objeto de textura preferida). Ensine-a a pegar o kit quando se sentir sobrecarregada.", materials: "Caixa, itens sensoriais variados." },
              { title: "Substituição Funcional da Estereotipia", description: "Observe a função da estereotipia (ex: balançar o corpo para se acalmar). Ofereça uma alternativa mais socialmente aceitável que cumpra a mesma função, como sentar-se em uma cadeira de balanço ou usar um balanço de rede.", materials: "Cadeira de balanço, balanço de rede, colete de peso." },
              { title: "Cantinho da Calma", description: "Designe um espaço na sala com poucos estímulos (uma cabana, um canto com almofadas e luz baixa) onde a criança pode ir voluntariamente para se regular quando o ambiente estiver muito estimulante.", materials: "Cabana de tecido, almofadas, luz suave." },
            ],
          },
        ],
      },
      {
        name: "⚡ TDAH – Transtorno de Déficit de Atenção e Hiperatividade",
        icon: "⚡",
        demands: [
          {
            name: "🧠 Atenção e Funções Executivas",
            activities: [
              { title: "Técnica do Pomodoro Kids", description: "Usar um timer visual para marcar períodos de foco (ex: 15 min) seguidos por uma pequena pausa recompensadora (ex: 5 min de massinha).", materials: "Timer visual (analógico ou digital), atividade de recompensa." },
              { title: "Checklist do Super-Herói", description: "Criar um checklist visual com os passos de uma tarefa (ex: lição de casa). A cada passo completado, a criança ganha um adesivo de super-herói.", materials: "Papel, caneta, adesivos." },
            ],
          },
          {
            name: "💬 Comportamento",
            activities: [
              { title: "Jogo do Semáforo", description: "Usar as cores do semáforo para ensinar o controle de impulsos: Vermelho (Pare e pense), Amarelo (Pense em soluções), Verde (Escolha a melhor e siga).", materials: "Círculos de papel nas cores vermelho, amarelo e verde." },
              { title: "Contrato de Comportamento", description: "Elaborar um 'contrato' simples com a criança, definindo 1 ou 2 comportamentos-alvo e as recompensas associadas, promovendo a autorregulação.", materials: "Papel, caneta, adesivos." },
            ],
          },
          {
            name: "💞 Socioemocional",
            activities: [
              { title: "Pote dos Elogios", description: "Manter um pote onde a família e o terapeuta depositam bilhetes com elogios e reconhecimento pelos esforços e conquistas da criança, para ser lido em momentos especiais.", materials: "Pote de vidro, pequenos papéis coloridos." },
              { title: "Roda das Soluções", description: "Criar uma roda com diferentes opções para lidar com a frustração (respirar fundo, pedir ajuda, tentar de novo, fazer uma pausa). Quando frustrada, a criança gira a roda e escolhe uma estratégia.", materials: "Prato de papelão, canetas, um clipe e um pino." },
            ],
          },
        ],
      },
      {
        name: "😤 TOD – Transtorno Opositivo-Desafiador",
        icon: "😤",
        demands: [
          {
            name: "💬 Comportamento",
            activities: [
              { title: "Jogo da Cooperação", description: "Utilizar jogos de tabuleiro ou de construção que exijam que os jogadores trabalhem juntos para um objetivo comum, em vez de competirem entre si.", materials: "Jogos cooperativos (ex: construir uma torre juntos)." },
              { title: "Escolha Guiada", description: "Em vez de dar uma ordem direta, oferecer duas opções aceitáveis. Ex: 'Você prefere guardar os blocos ou os carrinhos primeiro?'. Isso dá uma sensação de controle e aumenta a cooperação.", materials: "Nenhum." },
            ],
          },
          {
            name: "💞 Socioemocional",
            activities: [
              { title: "Detetive dos Sentimentos", description: "Ajudar a criança a identificar o sentimento por trás do comportamento de oposição. 'Eu vejo que você está com raiva. O que aconteceu que te deixou assim?'.", materials: "Cartas de emoções." },
              { title: "Tempo de Conexão", description: "Agendar um tempo curto (10-15 min) e diário de atenção exclusiva e positiva com a criança, fazendo uma atividade de sua escolha, para fortalecer o vínculo.", materials: "Atividade de escolha da criança." },
            ],
          },
        ],
      },
      {
        name: "🌱 DI – Deficiência Intelectual",
        icon: "🌱",
        demands: [
          {
            name: "🧠 Cognitivo e Aprendizagem",
            activities: [
              { title: "Quebra-Tarefa Visual", description: "Dividir uma tarefa em passos visuais muito pequenos. Use um quadro 'Primeiro-Depois' para mostrar a sequência (ex: 'Primeiro, guardar 3 blocos. Depois, massinha').", materials: "Cartões com figuras, quadro 'Primeiro-Depois'." },
              { title: "Economia de Fichas", description: "Usar um sistema de fichas para reforçar a conclusão de pequenas etapas de uma tarefa. Ao juntar um número de fichas, a criança troca por um prêmio.", materials: "Fichas (plásticas, de papel), quadro de fichas, reforçadores." },
            ],
          },
          {
            name: "💞 Socioemocional",
            activities: [
              { title: "Caixa de Conquistas", description: "Decorar uma caixa onde a criança guarda desenhos ou símbolos de coisas que ela aprendeu ou fez bem, reforçando a autoconfiança e a autoestima.", materials: "Caixa de sapatos, materiais de arte." },
              { title: "Jogo de Emoções Simplificado", description: "Usar cartas com expressões muito claras (feliz, triste) e associá-las a situações concretas e simples do dia a dia da criança.", materials: "Cartões com emoções básicas." },
            ],
          },
        ],
      },
    ],
  },
  {
    specialty: "Terapia Ocupacional",
    icon: ToyBrick,
    diagnoses: [
      {
        name: "🧩 TEA – Transtorno do Espectro Autista",
        icon: "🧩",
        demands: [
          {
            name: "💬 Comunicação e Linguagem",
            activities: [
              { title: "Circuito Motor com Pedidos (CAA)", description: "Em cada estação do circuito (pular, rolar), a criança deve usar seu sistema de CAA para pedir o próximo equipamento ou ação. A comunicação se torna a chave para avançar na brincadeira.", materials: "Equipamentos de circuito (cones, túnel), sistema de CAA." },
              { title: "Construção em Dupla com Comunicação", description: "Propor a construção de uma torre de blocos em dupla. Forneça um conjunto de blocos para cada um e um 'plano de construção' visual. Eles precisam se comunicar (verbalmente ou com CAA) para pedir os blocos um do outro e seguir o plano.", materials: "Blocos de montar, plano visual." },
              { title: "Lanche Terapêutico com Escolhas", description: "Ofereça opções de lanche através de um cardápio com figuras (PECS). A criança precisa montar a frase 'Eu quero...' usando as figuras para receber o alimento, trabalhando a iniciação e a estruturação da linguagem.", materials: "Cardápio com figuras (PECS), alimentos." },
            ],
          },
          {
            name: "🧠 Cognição e Aprendizagem",
            activities: [
              { title: "AVD em Diferentes Cenários", description: "Pratique uma habilidade de vida diária (ex: amarrar o cadarço) em diferentes contextos para promover a generalização: primeiro em um tênis grande de brinquedo, depois no tênis do terapeuta, e finalmente no próprio tênis.", materials: "Tênis de brinquedo, tênis reais." },
              { title: "Brincadeira de faz de conta com roteiro", description: "Estruture uma brincadeira (ex: ir ao supermercado) com um roteiro visual passo a passo. Isso ajuda a criança a entender a sequência de ações e o pensamento abstrato por trás da atividade.", materials: "Comida de brinquedo, caixa registradora, dinheiro de mentira." },
              { title: "Caixa Surpresa de Categorias", description: "Tenha caixas temáticas (ex: 'coisas macias', 'coisas que rolam'). A criança explora os objetos de uma caixa e ajuda a nomear a categoria, trabalhando o pensamento abstrato a partir da experiência sensorial.", materials: "Caixas, objetos variados." },
            ],
          },
          {
            name: "💞 Socioemocional",
            activities: [
              { title: "Jogo das Expressões no Espelho", description: "Faça uma expressão facial (alegre, triste) no espelho e peça para a criança imitar. Depois, associe a expressão a uma situação e a uma sensação corporal ('Quando estou feliz, meu corpo fica leve').", materials: "Espelho." },
              { title: "Calendário de Previsibilidade Semanal", description: "Crie um calendário visual da semana com as principais atividades (terapia, escola, parque). Se houver uma mudança, mova a figura junto com a criança, explicando a nova sequência. Isso dá segurança e ajuda a lidar com a ansiedade.", materials: "Calendário grande, figuras de atividades." },
              { title: "Termômetro de Regulação", description: "Use um 'termômetro' visual com cores (verde=calmo, amarelo=alerta, vermelho=nervoso). Ajude a criança a identificar em que 'cor' ela está e qual 'ferramenta' sensorial do seu kit pode ajudá-la a voltar para o verde.", materials: "Termômetro de emoções, kit sensorial." },
            ],
          },
          {
            name: "👂 Sensorial e Motor",
            activities: [
              { title: "Caminho Sensorial Tátil", description: "Crie um percurso para a criança andar descalça sobre diferentes texturas (tapetes, plástico bolha, grama sintética, almofadas). Isso ajuda a modular a sensibilidade tátil nos pés.", materials: "Materiais com diferentes texturas." },
              { title: "Balanço Regulatório", description: "Use um balanço de lycra ou rede para fornecer estímulos vestibulares e proprioceptivos. Movimentos lineares e lentos acalmam, enquanto movimentos mais rápidos e rotatórios alertam. Use de acordo com a necessidade da criança.", materials: "Balanço de lycra ou rede." },
              { title: "Paredes de Escalada ou 'Trabalho Pesado'", description: "Atividades que exigem força (escalar, empurrar caixas pesadas, carregar cestos) fornecem estímulos proprioceptivos intensos que ajudam a organizar o corpo e a diminuir a necessidade de estereotipias.", materials: "Pequena parede de escalada, caixas com peso." },
            ],
          },
        ],
      },
      {
        name: "⚡ TDAH – Transtorno de Déficit de Atenção e Hiperatividade",
        icon: "⚡",
        demands: [
          {
            name: "🧠 Atenção e Funções Executivas",
            activities: [
              { title: "Cozinha Terapêutica", description: "Seguir uma receita simples para trabalhar o sequenciamento de tarefas, a organização e a atenção sustentada de forma prática e motivadora.", materials: "Ingredientes para uma receita simples (ex: sanduíche, vitamina)." },
              { title: "Assento Adaptado", description: "Utilizar um disco inflável ou uma almofada de assento que permita micromovimentos, ajudando a criança a se manter sentada e focada por mais tempo.", materials: "Disco de equilíbrio (almofada de assento)." },
            ],
          },
          {
            name: "💬 Comportamento",
            activities: [
              { title: "Atividades de 'Trabalho Pesado'", description: "Antes de uma tarefa que exige foco, propor atividades que envolvam empurrar, puxar ou carregar objetos pesados (de forma segura) para ajudar a organizar o sistema nervoso e diminuir a inquietação.", materials: "Caixa com livros, fardos de garrafas pet." },
            ],
          },
        ],
      },
      {
        name: "😤 TOD – Transtorno Opositivo-Desafiador",
        icon: "😤",
        demands: [
          {
            name: "💬 Comportamento",
            activities: [
              { title: "Circuito da Cooperação", description: "Criar um circuito motor onde duas pessoas precisam colaborar para completar a tarefa, como carregar uma bola grande juntos sem deixar cair.", materials: "Bolas, cones, almofadas." },
              { title: "Projeto de Construção Conjunta", description: "Propor a construção de uma grande estrutura com blocos ou caixas, onde a negociação e a divisão de tarefas são essenciais para o sucesso.", materials: "Blocos de montar, caixas de papelão." },
            ],
          },
          {
            name: "💞 Socioemocional",
            activities: [
              { title: "Atividades de 'Trabalho Pesado' para Regulação", description: "Usar atividades proprioceptivas (empurrar uma parede, carregar uma cesta com peso) como estratégia para ajudar a criança a se regular antes que a frustração se instale.", materials: "Cesta, objetos com peso seguro." },
            ],
          },
        ],
      },
      {
        name: "🌱 DI – Deficiência Intelectual",
        icon: "🌱",
        demands: [
          {
            name: "🧠 Cognitivo e Aprendizagem",
            activities: [
              { title: "Análise de Tarefas para AVDs", description: "Dividir uma Atividade de Vida Diária (ex: escovar os dentes) em passos muito pequenos e visuais, ensinando um passo de cada vez até a criança dominar a sequência completa.", materials: "Quadro de rotina com figuras para cada passo." },
            ],
          },
          {
            name: "👂 Motor e Sensorial",
            activities: [
              { title: "Exploração de Texturas", description: "Criar um 'caminho sensorial' com diferentes texturas para a criança andar descalça, ou uma caixa com objetos de diferentes materiais para explorar com as mãos, estimulando a discriminação tátil.", materials: "Tapetes de texturas, bacias com grãos, esponjas, etc." },
            ],
          },
          {
            name: "💞 Socioemocional",
            activities: [
              { title: "Brincar Paralelo Guiado", description: "Facilitar a brincadeira ao lado de outro colega com objetos semelhantes para promover a tolerância e a observação social, um passo inicial para a interação.", materials: "Dois conjuntos de brinquedos iguais (ex: blocos, carrinhos)." },
            ],
          },
        ],
      },
    ],
  },
  {
    specialty: "Fonoaudiologia",
    icon: Mic,
    diagnoses: [
      {
        name: "🧩 TEA – Transtorno do Espectro Autista",
        icon: "🧩",
        demands: [
          {
            name: "💬 Comunicação e Linguagem",
            activities: [
              { title: "Cardápio de Brincadeiras com PECS/CAA", description: "Crie um 'cardápio' com figuras das brincadeiras disponíveis. A criança deve iniciar a interação entregando a figura da brincadeira que deseja, trabalhando a iniciação comunicativa.", materials: "Fichas com figuras (PECS), tablet com app de CAA." },
              { title: "Eco Expandido", description: "Quando a criança apresentar ecolalia, repita a frase dela (validando) e adicione uma nova informação. Criança: 'É um carro azul'. Fono: 'É um carro azul. O carro azul faz vrum vrum!'. Isso modela a expansão da linguagem.", materials: "Brinquedos variados." },
              { title: "Jogo do Repórter", description: "Use um microfone de brinquedo. Quem está com o microfone faz uma pergunta, e o outro responde. Troquem os papéis. Isso estrutura a troca de turnos e a manutenção do tópico conversacional.", materials: "Microfone de brinquedo." },
            ],
          },
          {
            name: "🧠 Cognição e Aprendizagem",
            activities: [
              { title: "O que não pertence?", description: "Apresente 3 figuras de uma categoria (ex: frutas) e uma que não pertence (ex: um carro). A criança deve identificar o intruso. Isso trabalha o pensamento abstrato de categorização.", materials: "Cartões com figuras." },
              { title: "Histórias com Sequência Lógica", description: "Use 3 ou 4 cartões com cenas de uma história simples. Peça para a criança colocar em ordem e depois contar o que aconteceu, trabalhando a noção de tempo e a estrutura narrativa.", materials: "Cartões de sequência lógica." },
              { title: "Leitura Compartilhada Adaptada", description: "Leia um livro com frases repetitivas, dando pausas para que a criança complete a frase. Use entonações variadas e aponte para as figuras para manter o engajamento, respeitando o ritmo da criança.", materials: "Livro infantil com frases repetitivas." },
            ],
          },
          {
            name: "💞 Socioemocional",
            activities: [
              { title: "Teatro de Fantoches e Emoções", description: "Use fantoches para representar pequenas cenas com emoções claras (um fantoche está triste porque perdeu a bola). Peça para a criança identificar a emoção e pensar em como ajudar o fantoche.", materials: "Fantoches." },
              { title: "Antecipação com Mini-Rotina", description: "Antes de cada atividade, mostre uma mini-rotina visual 'Primeiro-Depois' (ex: 'Primeiro, jogo da memória. Depois, massinha'). Isso cria previsibilidade e diminui a ansiedade com as transições.", materials: "Quadro 'Primeiro-Depois', figuras de atividades." },
              { title: "Caixa de Correio dos Sentimentos", description: "Tenha uma caixa de correio e figuras de emoções. A criança pode 'enviar uma carta' colocando a figura que representa como ela está se sentindo, sem a necessidade de falar.", materials: "Caixa de sapatos decorada, figuras de emoções." },
            ],
          },
          {
            name: "👂 Sensorial e Motor",
            activities: [
              { title: "Sons e Ações", description: "Associe sons a movimentos corporais (ex: som de tambor = bater os pés fortes; som de sino = andar na ponta dos pés). Isso ajuda a criança a processar estímulos auditivos e a organizar uma resposta motora.", materials: "Instrumentos musicais (tambor, sino)." },
              { title: "Massagem Oral e Brincadeiras", description: "Antes de trabalhar os sons da fala, faça brincadeiras com a boca (estalar a língua, vibrar os lábios) ou use massageadores orais para regular a sensibilidade e preparar a musculatura.", materials: "Massageadores orais, espelho." },
              { title: "Sussurros e Volumes", description: "Brinque de falar a mesma palavra em diferentes volumes (sussurrando, normal, alto). Isso ajuda a modular a hipersensibilidade auditiva e a trabalhar a prosódia (entonação).", materials: "Nenhum." },
            ],
          },
        ],
      },
      {
        name: "⚡ TDAH – Transtorno de Déficit de Atenção e Hiperatividade",
        icon: "⚡",
        demands: [
          {
            name: "🧠 Atenção e Funções Executivas",
            activities: [
              { title: "Jogo do Detetive de Sons", description: "A criança fecha os olhos e o terapeuta faz um som (ex: bater palmas, tocar um sino). A criança deve identificar o som. Aumente a complexidade com sequências de sons.", materials: "Sino, chocalho, objetos que fazem som." },
              { title: "História com Pausas", description: "Leia uma história curta e faça pausas estratégicas, pedindo para a criança prever o que vai acontecer. Isso trabalha a memória de trabalho e a atenção sustentada.", materials: "Livro infantil." },
            ],
          },
          {
            name: "💬 Comportamento",
            activities: [
              { title: "Bastão da Fala", description: "Em uma conversa ou jogo, apenas a pessoa que está segurando um objeto (o 'bastão da fala') pode falar. Isso ajuda a treinar o respeito aos turnos e o controle da impulsividade verbal.", materials: "Qualquer objeto fácil de segurar (caneta decorada, pequeno bastão)." },
            ],
          },
        ],
      },
      {
        name: "😤 TOD – Transtorno Opositivo-Desafiador",
        icon: "😤",
        demands: [
          {
            name: "💬 Comportamento",
            activities: [
              { title: "Jogo de Perguntas e Respostas", description: "Praticar como fazer perguntas e dar respostas de forma respeitosa, usando um tom de voz neutro. Pode ser feito com um jogo de tabuleiro simples como mediador.", materials: "Jogo de tabuleiro, cartas com perguntas." },
              { title: "Criação de Regras em Conjunto", description: "Antes de iniciar um jogo, crie 2 ou 3 regras junto com a criança. O envolvimento no processo aumenta a probabilidade de ela seguir as regras.", materials: "Papel, caneta." },
            ],
          },
        ],
      },
      {
        name: "🌱 DI – Deficiência Intelectual",
        icon: "🌱",
        demands: [
          {
            name: "💬 Comunicação",
            activities: [
              { title: "Álbum de Figuras Funcionais", description: "Criar um álbum com figuras de pessoas, objetos e ações importantes do dia a dia da criança para estimular a nomeação e a construção de frases simples.", materials: "Álbum de fotos, figuras impressas e plastificadas." },
              { title: "Música e Gestos", description: "Cantar músicas infantis que envolvam gestos (ex: 'Cabeça, Ombro, Joelho e Pé') para associar a palavra ao seu significado de forma lúdica e corporal.", materials: "Aparelho de som." },
            ],
          },
          {
            name: "🧠 Cognitivo e Aprendizagem",
            activities: [
              { title: "Jogo de Categorias com Objetos", description: "Use objetos concretos (frutas, animais de brinquedo) e peça para a criança agrupar por categoria, trabalhando o raciocínio e o vocabulário.", materials: "Miniaturas de objetos, caixas para separação." },
            ],
          },
        ],
      },
    ],
  },
  {
    specialty: "Psicomotricidade",
    icon: Footprints,
    diagnoses: [
      {
        name: "🧩 TEA – Transtorno do Espectro Autista",
        icon: "🧩",
        demands: [
          {
            name: "💬 Comunicação e Linguagem",
            activities: [
              { title: "Circuito com Comandos Verbais", description: "Crie um circuito motor onde a criança precisa seguir comandos verbais de 1 ou 2 etapas (ex: 'Primeiro pule no bambolê, depois role no colchonete'). Isso integra a compreensão da linguagem ao movimento.", materials: "Bambolês, colchonetes, cones." },
              { title: "Estátua com Partes do Corpo", description: "Na brincadeira de estátua, quando a música parar, o terapeuta diz uma parte do corpo (ex: 'mão no joelho!'). A criança deve fazer a estátua na posição indicada, trabalhando o vocabulário corporal e a compreensão.", materials: "Aparelho de som." },
              { title: "Brincadeira do 'Siga o Mestre' com CAA", description: "O 'mestre' (terapeuta ou a criança) escolhe uma figura de ação em um app de CAA (ex: 'pular', 'girar') e todos devem imitar o movimento, associando a figura à ação motora.", materials: "Tablet com app de CAA." },
            ],
          },
          {
            name: "🧠 Cognição e Aprendizagem",
            activities: [
              { title: "Jogo de Boliche com Conceitos", description: "Em cada pino de boliche, cole uma figura (ex: animais). Ao derrubar um pino, a criança deve nomear a figura. Varie com cores, formas ou letras para trabalhar diferentes conceitos de forma concreta.", materials: "Pinos de boliche de plástico, figuras." },
              { title: "Caça ao Tesouro Generalizada", description: "Esconda objetos iguais em locais diferentes da sala (ex: 3 bolas). A criança aprende a procurar o objeto em múltiplos contextos, treinando a generalização do conceito 'bola'.", materials: "Objetos idênticos." },
              { title: "Circuito 'Faça Você Mesmo'", description: "Apresente os materiais do circuito (arcos, túnel) e incentive a criança a montar seu próprio percurso. Isso respeita o ritmo dela e trabalha o planejamento motor e a iniciativa.", materials: "Arcos, túnel, cones, almofadas." },
            ],
          },
          {
            name: "💞 Socioemocional",
            activities: [
              { title: "Dança do Espelho Emocional", description: "Em frente a um espelho, o terapeuta faz um movimento e uma expressão facial (ex: pular de alegria, encolher-se de tristeza). A criança imita, conectando a emoção à expressão corporal.", materials: "Espelho." },
              { title: "Cabana da Calma", description: "Crie um 'ritual' para entrar e sair da cabana sensorial. Antes de entrar, mostre uma figura de 'pausa'. Isso cria previsibilidade para um momento de autorregulação.", materials: "Cabana de tecido, almofadas, figura de 'pausa'." },
              { title: "Jogo de 'O Chão é Lava' Cooperativo", description: "O objetivo é que todos atravessem a sala sem tocar no chão, usando almofadas e tapetes. É preciso ajudar uns aos outros, promovendo a interação e a resolução de problemas em um contexto de ansiedade controlada.", materials: "Almofadas, tapetes de EVA." },
            ],
          },
          {
            name: "👂 Sensorial e Motor",
            activities: [
              { title: "Dança da Estereotipia", description: "Observe o movimento repetitivo da criança (ex: balançar) e o incorpore em uma dança ou ritmo. Cante uma música enquanto balançam juntos. Isso dá um novo contexto, significado e controle ao movimento.", materials: "Música." },
              { title: "Massagem com Bolas e Rolos", description: "Use bolas de diferentes texturas ou rolos de espuma para fazer uma massagem de pressão profunda nos braços, pernas e costas da criança. Isso ajuda a regular o sistema tátil e proprioceptivo.", materials: "Bolas sensoriais, rolo de espuma." },
              { title: "Caixa de Areia Cinética", description: "Ofereça uma caixa com areia cinética e pequenos objetos para a criança esconder e encontrar. É uma atividade tátil com alta previsibilidade (a areia sempre se comporta da mesma forma), o que é calmante.", materials: "Areia cinética, caixa, pequenos brinquedos." },
            ],
          },
        ],
      },
      {
        name: "⚡ TDAH – Transtorno de Déficit de Atenção e Hiperatividade",
        icon: "⚡",
        demands: [
          {
            name: "💬 Comportamento",
            activities: [
              { title: "Corrida de Obstáculos", description: "Criar um percurso desafiador para que a criança possa gastar sua energia de forma direcionada e funcional, trabalhando agilidade e planejamento motor.", materials: "Cones, cordas, almofadas." },
              { title: "Yoga para Crianças", description: "Usar posturas de yoga que imitam animais para trabalhar o equilíbrio, a consciência corporal e a capacidade de se acalmar.", materials: "Tapete de yoga ou colchonete." },
            ],
          },
        ],
      },
      {
        name: "😤 TOD – Transtorno Opositivo-Desafiador",
        icon: "😤",
        demands: [
          {
            name: "💞 Socioemocional",
            activities: [
              { title: "Jogos Cooperativos com Bola", description: "O objetivo é manter uma bola de praia no ar o maior tempo possível, com todos tocando nela. O foco é no grupo, não na competição individual.", materials: "Bola de praia ou balão." },
            ],
          },
        ],
      },
      {
        name: "🌱 DI – Deficiência Intelectual",
        icon: "🌱",
        demands: [
          {
            name: "👂 Motor e Sensorial",
            activities: [
              { title: "Dança do Espelho", description: "O terapeuta faz um movimento simples e lento, e a criança imita, trabalhando esquema corporal e planejamento motor.", materials: "Música calma." },
              { title: "Pintura com os Pés", description: "Em um papel grande no chão, a criança pinta usando os pés, estimulando a consciência dos membros inferiores e a integração sensorial.", materials: "Papel pardo, tinta guache atóxica." },
            ],
          },
          {
            name: "💞 Socioemocional",
            activities: [
              { title: "Brincadeira de Roda", description: "Atividades em grupo simples que promovam o contato visual e a imitação de gestos, incentivando a participação social de forma estruturada.", materials: "Música." },
            ],
          },
        ],
      },
    ],
  },
  {
    specialty: "Psicopedagogia",
    icon: BookOpen,
    diagnoses: [
      {
        name: "🧩 TEA – Transtorno do Espectro Autista",
        icon: "🧩",
        demands: [
          {
            name: "💬 Comunicação e Linguagem",
            activities: [
              { title: "Leitura Compartilhada com Figuras", description: "Durante a leitura de um livro, forneça à criança figuras-chave da história. Peça que ela levante a figura correspondente quando a palavra aparecer no texto, promovendo a atenção compartilhada e a manutenção do tópico.", materials: "Livro infantil, figuras impressas." },
              { title: "Criação de Livro sobre Rotinas", description: "Crie um livro simples com a criança sobre uma rotina (ex: 'Como eu me preparo para a escola'). Use fotos ou desenhos e frases curtas. Isso dá função à linguagem escrita e trabalha a previsibilidade.", materials: "Folhas, grampeador, fotos ou desenhos." },
              { title: "Jogo da Memória com Ações", description: "Crie um jogo da memória onde os pares são uma figura de um objeto e uma figura da ação correspondente (ex: par de 'bola' é 'chutar'). Isso ajuda a expandir o vocabulário de verbos e a dar função aos substantivos.", materials: "Cartões de jogo da memória." },
            ],
          },
          {
            name: "🧠 Cognição e Aprendizagem",
            activities: [
              { title: "Aprendizagem baseada em Hiperfoco", description: "Utilize o tema de alto interesse da criança (ex: planetas) para ensinar conceitos acadêmicos. Ex: contar planetas (matemática), ler sobre Marte (leitura), escrever os nomes dos planetas (escrita).", materials: "Livros, brinquedos e materiais sobre o tema de interesse." },
              { title: "Mapa Mental Visual", description: "Para organizar ideias para uma redação ou estudar para uma prova, crie um mapa mental com um desenho central e 'braços' com as ideias secundárias. A estrutura visual é mais concreta que um texto linear.", materials: "Folha grande, canetas coloridas." },
              { title: "Ensino em Múltiplos Exemplos", description: "Para ensinar um conceito (ex: 'metade'), mostre-o de várias formas: uma maçã cortada ao meio, uma folha de papel dobrada, um copo com água pela metade. Isso ajuda na generalização.", materials: "Maçã, papel, copo com água." },
            ],
          },
          {
            name: "💞 Socioemocional",
            activities: [
              { title: "Role-play de Situações Escolares", description: "Use bonecos para encenar situações comuns na escola (ex: pedir um lápis emprestado, entrar numa brincadeira). Pratique as falas e as ações esperadas, oferecendo um roteiro seguro para a criança.", materials: "Bonecos, miniaturas de cenário escolar." },
              { title: "Horário Visual de Tarefas", description: "Crie um 'planner' visual para a lição de casa, com a ordem das matérias e um quadradinho para a criança dar 'check' ao terminar. Isso dá previsibilidade e a sensação de dever cumprido, diminuindo a ansiedade.", materials: "Quadro branco pequeno, canetas, apagador." },
              { title: "Jogo 'Como o colega se sentiria?'", description: "Apresente cartões com situações sociais simples (ex: 'Você pegou o brinquedo da mão dele'). Peça para a criança escolher, entre duas figuras de emoção, como o colega se sentiria. Isso treina a Teoria da Mente.", materials: "Cartões com situações, cartões com emoções." },
            ],
          },
          {
            name: "👂 Sensorial e Motor",
            activities: [
              { title: "Alfabeto Tátil", description: "Crie letras do alfabeto com diferentes texturas (lixa, algodão, barbante). A criança traça a letra com o dedo enquanto diz o som, associando o grafema a uma experiência tátil e auditiva.", materials: "Cartões, cola, lixa, algodão, barbante." },
              { title: "Pausas Motoras Estruturadas", description: "Entre as atividades acadêmicas, insira pausas curtas com atividades sensoriais que ajudam a regular (ex: 2 minutos pulando, 2 minutos apertando massinha). Isso melhora a atenção para a próxima tarefa.", materials: "Corda, massinha." },
              { title: "Adaptação de Materiais de Escrita", description: "Experimente diferentes adaptadores de lápis (grossos, triangulares, com peso) para encontrar o que oferece o melhor feedback proprioceptivo e melhora a caligrafia e a resistência à escrita.", materials: "Diferentes tipos de adaptadores de lápis." },
            ],
          },
        ],
      },
      {
        name: "⚡ TDAH – Transtorno de Déficit de Atenção e Hiperatividade",
        icon: "⚡",
        demands: [
          {
            name: "🧠 Atenção e Funções Executivas",
            activities: [
              { title: "Mapas Mentais para Estudo", description: "Ensinar a criança a organizar as informações de um texto ou aula em um mapa mental, usando cores e desenhos, o que ajuda na memorização e organização das ideias.", materials: "Folha grande, canetas coloridas." },
              { title: "Jogo de Organização de Materiais", description: "Transformar a arrumação da mochila ou do estojo em um jogo cronometrado, com um checklist visual, para treinar a organização de forma lúdica.", materials: "Mochila, estojo, material escolar, cronômetro." },
            ],
          },
        ],
      },
      {
        name: "😤 TOD – Transtorno Opositivo-Desafiador",
        icon: "😤",
        demands: [
          {
            name: "🧠 Cognitivo e Escolar",
            activities: [
              { title: "Projetos de Escolha do Aluno", description: "Permitir que o aluno escolha o tema de um pequeno projeto ou pesquisa (dentro das opções dadas pelo terapeuta/professor) para aumentar o engajamento e a sensação de autonomia.", materials: "Livros, acesso à internet supervisionado." },
            ],
          },
        ],
      },
      {
        name: "🌱 DI – Deficiência Intelectual",
        icon: "🌱",
        demands: [
          {
            name: "🧠 Cognitivo e Aprendizagem",
            activities: [
              { title: "Material Dourado Concreto", description: "Usar o material dourado para ensinar conceitos matemáticos de forma visual e tátil, facilitando a compreensão de quantidade e operações.", materials: "Material Dourado." },
              { title: "Alfabeto Sensorial", description: "Criar letras com lixa, algodão ou outros materiais para que a criança possa traçar com o dedo, associando a forma da letra a uma sensação tátil.", materials: "Letras de MDF, lixa, algodão, cola." },
            ],
          },
          {
            name: "💬 Comunicação",
            activities: [
              { title: "Sequenciamento de Histórias com Figuras", description: "Usar 3 ou 4 figuras para que a criança ordene e conte uma história simples, trabalhando a estrutura narrativa e a linguagem.", materials: "Cartões de sequência lógica." },
            ],
          },
        ],
      },
    ],
  },
  {
    specialty: "Nutrição",
    icon: Salad,
    diagnoses: [
      {
        name: "🧩 TEA – Transtorno do Espectro Autista",
        icon: "🧩",
        demands: [
          {
            name: "💬 Comunicação e Linguagem",
            activities: [
              { title: "Cardápio de Figuras (PECS)", description: "Crie um cardápio visual onde a criança pode usar figuras para montar seu prato ou escolher o lanche. Ela entrega a figura do que quer, trabalhando a iniciação da comunicação de forma funcional.", materials: "Fichas com fotos de alimentos, pasta com velcro." },
              { title: "Modelagem de Frases na Cozinha", description: "Durante o preparo de um lanche, modele frases curtas e funcionais. Se a criança aponta para a banana, diga 'Eu quero banana' e a incentive a imitar (mesmo que seja só o som inicial).", materials: "Ingredientes e utensílios de cozinha." },
              { title: "Livro de Receitas com CAA", description: "Crie um livro de receitas simples usando o sistema de CAA da criança. Cada passo da receita é uma figura. A criança 'lê' a receita apontando para as figuras, trabalhando a linguagem e a previsibilidade.", materials: "Sistema de CAA, ingredientes." },
            ],
          },
          {
            name: "🧠 Cognição e Aprendizagem",
            activities: [
              { title: "Jogo de Adivinhar a Fruta", description: "Coloque pedaços de frutas conhecidas em potes. A criança experimenta e deve apontar para a figura da fruta correspondente. Isso trabalha a associação do sabor (concreto) com a representação (abstrato).", materials: "Frutas, potes, figuras de frutas." },
              { title: "Generalizando o Alimento", description: "Apresente um alimento que a criança aceita (ex: batata frita) e, ao lado, o mesmo alimento em outro formato (ex: purê de batata). Apenas para ver, cheirar e talvez tocar. O objetivo é ajudá-la a generalizar que 'batata é batata'.", materials: "Batata em diferentes formatos." },
              { title: "Culinária Passo a Passo", description: "Siga uma receita visual com passos bem definidos. Respeite o tempo da criança para processar cada etapa, permitindo que ela participe no seu ritmo, seja apenas observando ou ajudando a misturar.", materials: "Receita visual, ingredientes." },
            ],
          },
          {
            name: "💞 Socioemocional",
            activities: [
              { title: "Prato das Emoções", description: "Use alimentos para montar carinhas que representem diferentes emoções no prato (ex: rodelas de banana para os olhos, um morango para a boca feliz). Converse sobre as emoções enquanto montam.", materials: "Alimentos variados." },
              { title: "Piquenique Estruturado", description: "Faça um piquenique na sala de terapia. Crie uma rotina visual para o piquenique: estender a toalha, arrumar os potes, comer, guardar. A previsibilidade do evento diminui a ansiedade social e alimentar.", materials: "Toalha, cesta, potes, alimentos." },
              { title: "Escala de 'Aceitação'", description: "Crie uma escala visual simples (ex: um rosto com nojo, um neutro, um feliz). Após interagir com um alimento novo (mesmo que só tocando), a criança pode apontar para a figura que representa sua sensação, validando seu sentimento.", materials: "Escala visual de emoções." },
            ],
          },
          {
            name: "👂 Sensorial e Motor",
            activities: [
              { title: "Hierarquia da Exposição Sensorial", description: "Siga os passos: 1. Tolerar o alimento no ambiente. 2. Tolerar no prato. 3. Tocar com um garfo. 4. Tocar com o dedo. 5. Cheirar. 6. Lamber. 7. Morder e cuspir. 8. Morder e engolir. Avance um passo de cada vez, sem pressão.", materials: "Um alimento novo." },
              { title: "Pintura com Iogurte", description: "Use iogurte com corante alimentício para a criança pintar em um prato ou plástico. É uma forma divertida de dessensibilizar ao toque de texturas pastosas e ao cheiro de alimentos.", materials: "Iogurte natural, corante alimentício, prato." },
              { title: "Caixa Sensorial de Grãos", description: "Tenha uma caixa com grãos (arroz, feijão) e brinquedos pequenos escondidos. A criança mergulha as mãos para encontrar os brinquedos, trabalhando a hipossensibilidade tátil e diminuindo a busca oral por estímulos.", materials: "Caixa, grãos, brinquedos." },
            ],
          },
        ],
      },
      {
        name: "⚡ TDAH – Transtorno de Déficit de Atenção e Hiperatividade",
        icon: "⚡",
        demands: [
          {
            name: "💬 Comportamento",
            activities: [
              { title: "Mindful Eating para Crianças", description: "Antes de comer, peça para a criança descrever o alimento usando os 5 sentidos. Isso ajuda a diminuir a impulsividade alimentar e aumenta a consciência sobre a comida.", materials: "Um alimento (ex: uma uva, um pedaço de chocolate)." },
            ],
          },
        ],
      },
      {
        name: "😤 TOD – Transtorno Opositivo-Desafiador",
        icon: "😤",
        demands: [
          {
            name: "💬 Comportamento",
            activities: [
              { title: "Cozinheiro Chefe por um Dia", description: "Deixe a criança escolher, entre duas opções saudáveis, o que será o lanche ou uma parte do jantar. Envolvê-la no processo de escolha e preparo pode diminuir a recusa.", materials: "Ingredientes e utensílios de cozinha." },
            ],
          },
        ],
      },
      {
        name: "🌱 DI – Deficiência Intelectual",
        icon: "🌱",
        demands: [
          {
            name: "👂 Motor e Sensorial",
            activities: [
              { title: "Cozinha Sensorial", description: "Preparar uma receita simples onde a criança possa amassar, misturar e sentir as texturas dos alimentos com as mãos, como fazer pão ou biscoitos.", materials: "Ingredientes e utensílios de cozinha seguros." },
            ],
          },
          {
            name: "🧠 Cognitivo e Aprendizagem",
            activities: [
              { title: "Supermercado de Brinquedo", description: "Brincar de comprar alimentos, nomeando-os e separando-os por grupos (frutas, legumes), trabalhando vocabulário e categorização.", materials: "Alimentos de brinquedo, cestinha." },
            ],
          },
        ],
      },
    ],
  },
  {
    specialty: "Musicoterapia",
    icon: Music,
    diagnoses: [
      {
        name: "🧩 TEA – Transtorno do Espectro Autista",
        icon: "🧩",
        demands: [
          {
            name: "💬 Comunicação e Linguagem",
            activities: [
              { title: "Canção de Pergunta e Resposta", description: "Crie uma música simples com uma estrutura de pergunta e resposta (ex: Terapeuta canta 'Como você está?', e a criança responde com um som ou palavra no ritmo), iniciando uma conversa musical.", materials: "Voz, instrumento harmônico." },
              { title: "Variações na Ecolalia Musical", description: "O terapeuta imita a vocalização da criança (ecolalia) e, em seguida, a repete com uma pequena variação de ritmo ou melodia, convidando a criança a imitar de volta e criando um diálogo.", materials: "Voz, instrumentos." },
              { title: "Escolha de Músicas com Figuras", description: "Apresentar cartões com figuras de músicas ou instrumentos para a criança escolher o que quer cantar/tocar, usando um sistema de comunicação alternativa para iniciar uma atividade.", materials: "Cartões com figuras (PECS), tablet com app de música." },
            ],
          },
          {
            name: "🧠 Cognição e Aprendizagem",
            activities: [
              { title: "Música e Sequência", description: "Crie uma sequência de 3 sons/instrumentos (ex: tambor, sino, chocalho). Toque a sequência e peça para a criança imitar. Comece com 2 sons e aumente gradualmente, trabalhando a memória de trabalho e o planejamento.", materials: "Instrumentos de percussão." },
              { title: "Canção da Generalização", description: "Crie uma canção sobre um conceito (ex: 'grande e pequeno'). Cante a música mostrando um objeto grande e um pequeno. Depois, peça para a criança encontrar outros objetos grandes e pequenos na sala enquanto cantam.", materials: "Objetos grandes e pequenos." },
              { title: "Improvisação Livre e Guiada", description: "Inicie com uma improvisação livre, permitindo que a criança explore os sons no seu ritmo. Aos poucos, o terapeuta introduz um ritmo simples e repetitivo, convidando a criança a entrar na estrutura musical, respeitando seu tempo.", materials: "Instrumentos variados." },
            ],
          },
          {
            name: "💞 Socioemocional",
            activities: [
              { title: "Playlist das Emoções", description: "Toque trechos de músicas com emoções claras (alegre, triste, calma, agitada). Use cartões de emoções para a criança associar a música ao sentimento. Isso ajuda a decodificar emoções de forma não-verbal.", materials: "Aparelho de som, cartões de emoções." },
              { title: "Canção da Rotina", description: "Crie pequenas canções para os momentos de transição da sessão (ex: 'Agora vamos guardar', 'É hora de dar tchau'). A música torna a rotina previsível e diminui a ansiedade com as mudanças.", materials: "Voz." },
              { title: "Improvisação de 'Espelho Sonoro'", description: "O terapeuta 'espelha' musicalmente o que a criança está fazendo: se ela bate rápido no tambor, o terapeuta toca algo rápido no teclado. Isso valida a expressão da criança e cria uma conexão segura.", materials: "Instrumentos variados." },
            ],
          },
          {
            name: "👂 Sensorial e Motor",
            activities: [
              { title: "Exploração de Vibrações", description: "Use instrumentos que produzem fortes vibrações, como um tambor oceânico ou um violão. Deixe a criança sentir a vibração na barriga, nas costas ou nas mãos. Ótimo para crianças hipossensíveis.", materials: "Tambor, violão." },
              { title: "Dança com Fitas e Lenços", description: "Coloque uma música e incentive a criança a dançar com fitas ou lenços coloridos. Isso pode dar uma nova função a estereotipias como o flapping das mãos, integrando o movimento em uma atividade com propósito.", materials: "Música, fitas de cetim, lenços." },
              { title: "Criação de um 'Cantinho do Silêncio'", description: "Dentro da sala, tenha um espaço com fones abafadores de ruído e talvez um instrumento muito suave (como um kalimba). Ensine a criança que ela pode ir para lá quando os sons estiverem muito altos, criando um ambiente adaptado.", materials: "Fones abafadores, instrumento suave." },
            ],
          },
        ],
      },
      {
        name: "⚡ TDAH – Transtorno de Déficit de Atenção e Hiperatividade",
        icon: "⚡",
        demands: [
          {
            name: "🧠 Atenção e Funções Executivas",
            activities: [
              { title: "Jogo de Ritmo e Memória", description: "O terapeuta toca uma sequência rítmica simples e a criança deve repeti-la. Aumente a complexidade gradualmente para treinar a memória de trabalho e a atenção.", materials: "Tambor ou palmas." },
            ],
          },
        ],
      },
      {
        name: "😤 TOD – Transtorno Opositivo-Desafiador",
        icon: "😤",
        demands: [
          {
            name: "💞 Socioemocional",
            activities: [
              { title: "Composição de 'Rap da Raiva'", description: "Usar um ritmo forte e repetitivo para que a criança possa criar letras (mesmo que sejam apenas palavras soltas) para expressar sua raiva ou frustração de forma construtiva.", materials: "Base rítmica (pode ser de um aplicativo), microfone de brinquedo." },
            ],
          },
        ],
      },
      {
        name: "🌱 DI – Deficiência Intelectual",
        icon: "🌱",
        demands: [
          {
            name: "💬 Comunicação",
            activities: [
              { title: "Canção de Chamado e Resposta", description: "Criar uma música simples onde o terapeuta canta uma frase (ex: 'Onde está o [nome da criança]?') e a criança é incentivada a responder com um som, gesto ou palavra.", materials: "Instrumento harmônico (violão, teclado)." },
            ],
          },
          {
            name: "👂 Motor e Sensorial",
            activities: [
              { title: "Exploração de Instrumentos", description: "Oferecer instrumentos de diferentes texturas, formas e sons (chocalho, tambor, pandeiro) para exploração livre, estimulando a integração sensorial e a coordenação motora.", materials: "Instrumentos de percussão variados." },
            ],
          },
        ],
      },
    ],
  },
  {
    specialty: "Fisioterapia",
    icon: HeartPulse,
    diagnoses: [
      {
        name: "🧩 TEA – Transtorno do Espectro Autista",
        icon: "🧩",
        demands: [
          {
            name: "💬 Comunicação e Linguagem",
            activities: [
              { title: "Circuito Comunicativo", description: "Montar um circuito onde a criança precisa usar uma palavra ou uma figura de CAA para pedir o próximo equipamento ('bola', 'pula-pula'), integrando a iniciação da comunicação ao movimento.", materials: "Equipamentos de fisioterapia, sistema de CAA." },
              { title: "Jogo Motor com Turnos", description: "Rolar uma bola um para o outro. A cada vez, o participante deve dizer 'minha vez' ou 'sua vez' (verbalmente ou com CAA), praticando a manutenção de uma interação com troca de turnos.", materials: "Bola suíça." },
              { title: "Eco Motor", description: "O terapeuta faz um som e um movimento (ex: diz 'Upa!' e levanta os braços). A criança imita (ecolalia + ecopraxia). O terapeuta então expande a brincadeira, dando função à repetição.", materials: "Colchonetes." },
            ],
          },
          {
            name: "🧠 Cognição e Aprendizagem",
            activities: [
              { title: "Sequência Motora com Cores", description: "Crie uma sequência de movimentos associada a cores (ex: 'azul = sentar na bola', 'vermelho = rolar no colchonete'). A criança deve seguir a sequência de cartões coloridos, trabalhando o planejamento motor e a abstração.", materials: "Cartões coloridos, equipamentos de fisioterapia." },
              { title: "Generalização de Habilidades Motoras", description: "Se a criança aprendeu a pular dentro de bambolês, generalize a habilidade pulando sobre uma corda no chão, depois pulando de um degrau baixo. Mostre que a mesma ação 'pular' pode ser usada em diferentes contextos.", materials: "Bambolês, corda, degrau de EVA." },
              { title: "Circuito com Estações de Descanso", description: "Monte um circuito com 2 ou 3 desafios motores e intercale com uma 'estação de descanso' (ex: deitar em um pufe). Isso respeita o ritmo da criança e ajuda a manter a motivação e a regulação.", materials: "Equipamentos de circuito, pufe ou almofada grande." },
            ],
          },
          {
            name: "💞 Socioemocional",
            activities: [
              { title: "Jogo de Imitação de Posturas de Animais", description: "Brinque de imitar animais (engatinhar como um urso, pular como um sapo). O terapeuta faz uma postura e a criança imita, trabalhando a interpretação de linguagem corporal de forma lúdica.", materials: "Colchonetes." },
              { title: "Circuito da Previsibilidade", description: "Tenha um quadro com a sequência de 3 ou 4 exercícios que serão feitos na sessão. À medida que cada um é completado, a criança move a figura para a caixa de 'terminado'. Isso cria uma rotina segura e previsível.", materials: "Quadro visual, figuras de exercícios." },
              { title: "Massagem de Pressão Profunda", description: "Use uma bola suíça para rolar suavemente sobre as pernas e costas da criança (com ela deitada de bruços). A pressão profunda é calmante e ajuda a diminuir a ansiedade e a organizar o corpo.", materials: "Bola suíça, colchonete." },
            ],
          },
          {
            name: "👂 Sensorial e Motor",
            activities: [
              { title: "Balanço de Lycra (Acalmar ou Alertar)", description: "Para crianças hipersensíveis ou ansiosas, use movimentos lentos e lineares no balanço. Para crianças hipossensíveis, use movimentos mais rápidos e com rotação para 'acordar' o sistema vestibular.", materials: "Balanço de lycra." },
              { title: "Abraço de Urso com Almofadas", description: "Faça um 'sanduíche' com a criança entre duas almofadas grandes e aplique uma pressão suave. Isso fornece um estímulo proprioceptivo intenso que pode substituir a necessidade de bater o corpo ou se jogar.", materials: "Almofadas grandes ou pufes." },
              { title: "Sala com Iluminação Adaptada", description: "Reduza a iluminação da sala, usando luz indireta ou colorida (pisca-pisca de Natal, projetor de estrelas). Um ambiente com menos estímulos visuais pode ajudar a criança a se concentrar melhor nos estímulos do próprio corpo.", materials: "Luzes indiretas, projetores." },
            ],
          },
        ],
      },
      {
        name: "⚡ TDAH – Transtorno de Déficit de Atenção e Hiperatividade",
        icon: "⚡",
        demands: [
          {
            name: "💬 Comportamento",
            activities: [
              { title: "Circuito de Agilidade", description: "Criar um circuito que exija mudanças rápidas de direção, saltos e corridas para canalizar a energia motora e trabalhar a coordenação e o planejamento.", materials: "Cones, arcos, pequenos obstáculos." },
            ],
          },
        ],
      },
      {
        name: "🌱 DI – Deficiência Intelectual",
        icon: "🌱",
        demands: [
          {
            name: "👂 Motor e Sensorial",
            activities: [
              { title: "Fortalecimento de Core com Brincadeiras", description: "Brincar de 'carrinho de mão', 'ponte' ou 'aviãozinho' para fortalecer a musculatura abdominal e das costas de forma lúdica.", materials: "Colchonete." },
              { title: "Treino de Equilíbrio em Superfícies Instáveis", description: "Andar sobre almofadas, discos de equilíbrio ou colchões para desafiar e aprimorar as reações de equilíbrio e a propriocepção.", materials: "Almofadas, discos de equilíbrio." },
            ],
          },
        ],
      },
    ],
  },
];