# Boutique Elegance - Site Vitrine de Roupas Femininas

Este é um site vitrine moderno e sofisticado para uma loja de roupas femininas, desenvolvido com React e Tailwind CSS. O site permite que os clientes naveguem por diferentes categorias de produtos, selecionem itens e tamanhos, e finalizem o pedido diretamente pelo WhatsApp.

## Características

- Design moderno e sofisticado com paleta de cores elegante (rosa clarinho, marrom claro e preto)
- Layout totalmente responsivo para desktop e dispositivos móveis
- Navegação por categorias de produtos (Vestidos, Blusas, Calças, Saias, Conjuntos, Acessórios)
- Seleção de tamanhos para cada produto
- Carrinho de compras com contagem de itens
- Redirecionamento para WhatsApp com detalhes do pedido
- Interface intuitiva e amigável

## Tecnologias Utilizadas

- React
- TypeScript
- Tailwind CSS
- Lucide Icons
- Google Fonts (Montserrat e Playfair Display)

## Como Usar

### Requisitos

- Node.js (versão 16 ou superior)
- npm ou pnpm

### Instalação

1. Clone este repositório:
   ```
   git clone https://github.com/seu-usuario/boutique-elegance.git
   cd boutique-elegance
   ```

2. Instale as dependências:
   ```
   npm install
   ```
   ou
   ```
   pnpm install
   ```

3. Inicie o servidor de desenvolvimento:
   ```
   npm run dev
   ```
   ou
   ```
   pnpm run dev
   ```

4. Acesse o site em seu navegador:
   ```
   http://localhost:5173
   ```

### Personalização

- **Produtos**: Edite o objeto `produtosPorCategoria` no arquivo `src/App.tsx` para adicionar, remover ou modificar produtos.
- **Categorias**: Modifique o array `categorias` no arquivo `src/App.tsx` para alterar as categorias disponíveis.
- **Número do WhatsApp**: Atualize a variável `numeroWhatsApp` no método `enviarParaWhatsApp` para o número correto da loja.
- **Cores e Estilos**: Personalize as cores e estilos no arquivo `src/index.css`.

## Implantação

Para implantar o site em produção:

1. Construa a versão de produção:
   ```
   npm run build
   ```
   ou
   ```
   pnpm run build
   ```

2. O diretório `dist` conterá os arquivos otimizados para produção, que podem ser hospedados em qualquer serviço de hospedagem estática como GitHub Pages, Netlify, Vercel, etc.

## Estrutura do Projeto

```
boutique-elegance/
├── public/
│   ├── images/       # Imagens dos produtos
│   └── index.html    # Arquivo HTML principal
├── src/
│   ├── assets/       # Recursos estáticos
│   ├── components/   # Componentes React
│   ├── App.tsx       # Componente principal
│   ├── index.css     # Estilos globais
│   └── main.tsx      # Ponto de entrada
└── README.md         # Documentação
```

## Licença

Este projeto está licenciado sob a licença MIT.

## Contato

Para suporte ou dúvidas, entre em contato através do WhatsApp ou e-mail da loja.
