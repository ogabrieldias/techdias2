// 🧠 Mapeamento de ícones Font Awesome para cada tecnologia
const techIconMap = {
    "JavaScript": "fab fa-js",
    "Python": "fab fa-python",
    "Flask": "bx bxl-flask",
    "HTML": "fab fa-html5",
    "CSS": "fab fa-css3-alt",
    "Node.js": "fab fa-node-js",
    "React.js": "fab fa-react",
    "MongoDB": "fas fa-database",
    "AWS S3": "fab fa-aws",
    "Chatbot IA": "fas fa-robot",
    "OTP por Email": "fas fa-envelope",
    "Vue.js": "fab fa-vuejs",
    "Supabase": "fas fa-database",
    "TailwindCSS": "fas fa-wind",
    "Dark Mode": "fas fa-adjust"
};

// 🎨 Mapeamento de cores personalizadas para cada tecnologia
const techColorMap = {
  "Node.js": "#68a063",
  "React.js": "#61dafb",
  "MongoDB": "#47a248",
  "AWS S3": "#ff9900",
  "Chatbot IA": "#9f7aea",
  "OTP por Email": "#f59e0b",
  "Vue.js": "#42b883",
  "Supabase": "#3ecf8e",
  "TailwindCSS": "#38bdf8",
  "Dark Mode": "#facc15"
};

// 🔍 Seleciona todos os elementos de projeto na página
const projects = document.querySelectorAll('.project');

// 🎯 Seleciona os elementos onde os dados do projeto serão exibidos
const titleEl = document.getElementById('projectTitle');       // Título do projeto
const paragraphEl = document.getElementById('projectParagraph'); // Descrição do projeto
const iconsEl = document.getElementById('projectIcons');       // Container dos ícones

// 👁️ Cria um observer para detectar quando um projeto entra na tela
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    // Só executa se o projeto estiver visível (60% ou mais)
    if (entry.isIntersecting) {
      // 📝 Pega os dados do projeto diretamente dos atributos HTML
      const title = entry.target.getAttribute('data-title');
      const paragraph = entry.target.getAttribute('data-paragraph');
      const tools = entry.target.getAttribute('data-tools');

      // 🧾 Atualiza o título e parágrafo na interface
      titleEl.textContent = title;
      paragraphEl.textContent = paragraph;

      // 🧹 Limpa os ícones anteriores
      iconsEl.innerHTML = '';

      // 🔄 Para cada tecnologia, cria um ícone com cor personalizada
      tools.split(',').forEach(tool => {
        const tech = tool.trim(); // Remove espaços extras
        const iconClass = techIconMap[tech] || 'fas fa-tools'; // Ícone padrão se não encontrado
        const iconColor = techColorMap[tech] || '#00ffcc';     // Cor padrão se não encontrado

        // 🔲 Cria um container circular para o ícone
        const iconDiv = document.createElement('div');
        iconDiv.style.width = '50px';
        iconDiv.style.height = '50px';
        iconDiv.style.borderRadius = '50%';
        iconDiv.style.backgroundColor = '#374151'; // Fundo escuro
        iconDiv.style.display = 'flex';
        iconDiv.style.alignItems = 'center';
        iconDiv.style.justifyContent = 'center';
        iconDiv.style.boxShadow = '0 0 10px rgba(0,0,0,0.3)';
        iconDiv.style.margin = '5px';

        // ⭐ Cria o ícone com a classe e cor correspondente
        const icon = document.createElement('i');
        icon.className = iconClass;
        icon.style.color = iconColor;
        icon.style.fontSize = '22px';

        // 📦 Adiciona o ícone ao container e o container à interface
        iconDiv.appendChild(icon);
        iconsEl.appendChild(iconDiv);
      });
    }
  });
}, {
  threshold: .65 // Ativa quando 60% do projeto estiver visível
});

// 📡 Ativa o observer para cada projeto da página
projects.forEach(project => observer.observe(project));
