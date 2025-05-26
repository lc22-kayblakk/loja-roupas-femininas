import React, { useState, useEffect } from 'react';
import { ShoppingBag, Menu, X, Heart, Search, User, ChevronDown } from 'lucide-react';
import './App.css';

// Definição das categorias
const categorias = [
  { id: 'vestidos', nome: 'Vestidos' },
  { id: 'blusas', nome: 'Blusas' },
  { id: 'calcas', nome: 'Calças' },
  { id: 'saias', nome: 'Saias' },
  { id: 'conjuntos', nome: 'Conjuntos' },
  { id: 'acessorios', nome: 'Acessórios' }
];

// Produtos de exemplo para cada categoria
const produtosPorCategoria = {
  vestidos: [
    { id: 1, nome: 'Vestido Longo Floral', preco: 189.90, imagem: '/vestido-longo.jpg', tamanhos: ['P', 'M', 'G'] },
    { id: 2, nome: 'Vestido Midi Elegante', preco: 159.90, imagem: '/vestido-midi.jpg', tamanhos: ['P', 'M', 'G'] },
    { id: 3, nome: 'Vestido Curto Casual', preco: 129.90, imagem: '/vestido-curto.jpg', tamanhos: ['P', 'M', 'G'] },
    { id: 4, nome: 'Vestido Festa Premium', preco: 249.90, imagem: '/vestido-festa.jpg', tamanhos: ['P', 'M', 'G'] },
  ],
  blusas: [
    { id: 5, nome: 'Blusa Manga Bufante', preco: 89.90, imagem: '/blusa-bufante.jpg', tamanhos: ['P', 'M', 'G'] },
    { id: 6, nome: 'Blusa Cropped Moderna', preco: 69.90, imagem: '/blusa-cropped.jpg', tamanhos: ['P', 'M', 'G'] },
    { id: 7, nome: 'Camisa Social Feminina', preco: 119.90, imagem: '/camisa-social.jpg', tamanhos: ['P', 'M', 'G'] },
    { id: 8, nome: 'Blusa Ombro a Ombro', preco: 79.90, imagem: '/blusa-ombro.jpg', tamanhos: ['P', 'M', 'G'] },
  ],
  calcas: [
    { id: 9, nome: 'Calça Jeans Skinny', preco: 149.90, imagem: '/calca-skinny.jpg', tamanhos: ['36', '38', '40', '42'] },
    { id: 10, nome: 'Calça Pantalona', preco: 159.90, imagem: '/calca-pantalona.jpg', tamanhos: ['36', '38', '40', '42'] },
    { id: 11, nome: 'Calça Alfaiataria', preco: 179.90, imagem: '/calca-alfaiataria.jpg', tamanhos: ['36', '38', '40', '42'] },
    { id: 12, nome: 'Calça Legging Premium', preco: 99.90, imagem: '/calca-legging.jpg', tamanhos: ['P', 'M', 'G'] },
  ],
  saias: [
    { id: 13, nome: 'Saia Midi Plissada', preco: 119.90, imagem: '/saia-plissada.jpg', tamanhos: ['P', 'M', 'G'] },
    { id: 14, nome: 'Saia Longa Estampada', preco: 139.90, imagem: '/saia-longa.jpg', tamanhos: ['P', 'M', 'G'] },
    { id: 15, nome: 'Saia Jeans Curta', preco: 99.90, imagem: '/saia-jeans.jpg', tamanhos: ['36', '38', '40', '42'] },
    { id: 16, nome: 'Saia Envelope', preco: 109.90, imagem: '/saia-envelope.jpg', tamanhos: ['P', 'M', 'G'] },
  ],
  conjuntos: [
    { id: 17, nome: 'Conjunto Blazer e Calça', preco: 299.90, imagem: '/conjunto-blazer.jpg', tamanhos: ['P', 'M', 'G'] },
    { id: 18, nome: 'Conjunto Top e Saia', preco: 189.90, imagem: '/conjunto-top.jpg', tamanhos: ['P', 'M', 'G'] },
    { id: 19, nome: 'Conjunto Moletom Elegante', preco: 219.90, imagem: '/conjunto-moletom.jpg', tamanhos: ['P', 'M', 'G'] },
    { id: 20, nome: 'Conjunto Alfaiataria', preco: 259.90, imagem: '/conjunto-alfaiataria.jpg', tamanhos: ['P', 'M', 'G'] },
  ],
  acessorios: [
    { id: 21, nome: 'Bolsa Estruturada', preco: 159.90, imagem: '/bolsa-estruturada.jpg', tamanhos: ['Único'] },
    { id: 22, nome: 'Colar Elegante', preco: 79.90, imagem: '/colar.jpg', tamanhos: ['Único'] },
    { id: 23, nome: 'Lenço de Seda', preco: 69.90, imagem: '/lenco.jpg', tamanhos: ['Único'] },
    { id: 24, nome: 'Cinto Fino Feminino', preco: 59.90, imagem: '/cinto.jpg', tamanhos: ['P', 'M', 'G'] },
  ],
};

function App() {
  const [categoriaAtiva, setCategoriaAtiva] = useState('vestidos');
  const [menuAberto, setMenuAberto] = useState(false);
  const [carrinho, setCarrinho] = useState([]);
  const [tamanhoSelecionado, setTamanhoSelecionado] = useState({});

  // Função para adicionar produto ao carrinho
  const adicionarAoCarrinho = (produto) => {
    const tamanho = tamanhoSelecionado[produto.id];
    if (!tamanho) {
      alert('Por favor, selecione um tamanho');
      return;
    }
    
    const itemExistente = carrinho.find(
      item => item.id === produto.id && item.tamanho === tamanho
    );

    if (itemExistente) {
      setCarrinho(
        carrinho.map(item =>
          item.id === produto.id && item.tamanho === tamanho
            ? { ...item, quantidade: item.quantidade + 1 }
            : item
        )
      );
    } else {
      setCarrinho([...carrinho, { ...produto, quantidade: 1, tamanho }]);
    }
  };

  // Função para remover produto do carrinho
  const removerDoCarrinho = (id, tamanho) => {
    setCarrinho(carrinho.filter(item => !(item.id === id && item.tamanho === tamanho)));
  };

  // Função para atualizar quantidade de um produto no carrinho
  const atualizarQuantidade = (id, tamanho, novaQuantidade) => {
    if (novaQuantidade < 1) {
      removerDoCarrinho(id, tamanho);
      return;
    }
    
    setCarrinho(
      carrinho.map(item =>
        item.id === id && item.tamanho === tamanho
          ? { ...item, quantidade: novaQuantidade }
          : item
      )
    );
  };

  // Função para enviar pedido para o WhatsApp
  const enviarParaWhatsApp = () => {
    if (carrinho.length === 0) {
      alert('Seu carrinho está vazio');
      return;
    }

    let mensagem = 'Olá! Gostaria de fazer um pedido:\n\n';
    
    carrinho.forEach(item => {
      mensagem += `*${item.nome}*\n`;
      mensagem += `Tamanho: ${item.tamanho}\n`;
      mensagem += `Quantidade: ${item.quantidade}\n`;
      mensagem += `Preço unitário: R$ ${item.preco.toFixed(2)}\n`;
      mensagem += `Subtotal: R$ ${(item.preco * item.quantidade).toFixed(2)}\n\n`;
    });
    
    const total = carrinho.reduce(
      (soma, item) => soma + item.preco * item.quantidade, 0
    );
    
    mensagem += `*Total do pedido: R$ ${total.toFixed(2)}*`;
    
    // Número de telefone da loja (substitua pelo número real)
    const numeroWhatsApp = '5511999999999';
    
    // Codifica a mensagem para URL
    const mensagemCodificada = encodeURIComponent(mensagem);
    
    // Cria o link do WhatsApp
    const linkWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${mensagemCodificada}`;
    
    // Abre o link em uma nova aba
    window.open(linkWhatsApp, '_blank');
  };

  // Função para selecionar tamanho de um produto
  const selecionarTamanho = (produtoId, tamanho) => {
    setTamanhoSelecionado({
      ...tamanhoSelecionado,
      [produtoId]: tamanho
    });
  };

  // Calcular total de itens no carrinho
  const totalItensCarrinho = carrinho.reduce(
    (total, item) => total + item.quantidade, 0
  );

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="py-4 border-b border-[hsl(var(--border))] elegant-shadow">
        <div className="container-custom">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="logo-text text-2xl text-[hsl(var(--primary))]">Boutique Elegance</div>
            
            {/* Menu para desktop */}
            <nav className="hidden md:flex space-x-8">
              {categorias.map(categoria => (
                <button
                  key={categoria.id}
                  className={`category-tab text-[hsl(var(--secondary-foreground))] hover:text-[hsl(var(--primary))] ${
                    categoriaAtiva === categoria.id ? 'active' : ''
                  }`}
                  onClick={() => setCategoriaAtiva(categoria.id)}
                >
                  {categoria.nome}
                </button>
              ))}
            </nav>
            
            {/* Ícones */}
            <div className="flex items-center space-x-4">
              <button className="p-2 text-[hsl(var(--primary))]">
                <Search size={20} />
              </button>
              <button className="p-2 text-[hsl(var(--primary))]">
                <User size={20} />
              </button>
              <button className="p-2 text-[hsl(var(--primary))] relative">
                <ShoppingBag size={20} />
                {totalItensCarrinho > 0 && (
                  <span className="cart-badge">{totalItensCarrinho}</span>
                )}
              </button>
              
              {/* Botão do menu mobile */}
              <button 
                className="md:hidden p-2 text-[hsl(var(--primary))]"
                onClick={() => setMenuAberto(!menuAberto)}
              >
                {menuAberto ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
          
          {/* Menu mobile */}
          {menuAberto && (
            <div className="md:hidden mt-4 pb-2">
              <div className="flex flex-col space-y-4">
                {categorias.map(categoria => (
                  <button
                    key={categoria.id}
                    className={`text-left py-2 px-4 rounded-md ${
                      categoriaAtiva === categoria.id 
                        ? 'bg-[hsl(var(--accent))] text-[hsl(var(--accent-foreground))]' 
                        : 'text-[hsl(var(--secondary-foreground))]'
                    }`}
                    onClick={() => {
                      setCategoriaAtiva(categoria.id);
                      setMenuAberto(false);
                    }}
                  >
                    {categoria.nome}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </header>
      
      {/* Conteúdo principal */}
      <main className="flex-grow py-8">
        <div className="container-custom">
          {/* Título da categoria */}
          <h1 className="text-3xl font-semibold mb-8 text-[hsl(var(--primary))]">
            {categorias.find(cat => cat.id === categoriaAtiva)?.nome}
          </h1>
          
          {/* Grid de produtos */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {produtosPorCategoria[categoriaAtiva].map(produto => (
              <div key={produto.id} className="product-card bg-white rounded-lg overflow-hidden elegant-shadow">
                {/* Imagem do produto (placeholder) */}
                <div className="aspect-square bg-[hsl(var(--muted))] relative">
                  <div className="absolute inset-0 flex items-center justify-center text-[hsl(var(--muted-foreground))]">
                    Imagem do Produto
                  </div>
                  <button className="absolute top-2 right-2 p-2 bg-white rounded-full text-[hsl(var(--primary))] shadow-sm">
                    <Heart size={18} />
                  </button>
                </div>
                
                {/* Informações do produto */}
                <div className="p-4">
                  <h3 className="font-medium text-[hsl(var(--primary))]">{produto.nome}</h3>
                  <p className="text-[hsl(var(--secondary-foreground))] mt-1">
                    R$ {produto.preco.toFixed(2)}
                  </p>
                  
                  {/* Seleção de tamanho */}
                  <div className="mt-3">
                    <p className="text-sm text-[hsl(var(--muted-foreground))] mb-2">Tamanho:</p>
                    <div className="flex flex-wrap gap-2">
                      {produto.tamanhos.map(tamanho => (
                        <button
                          key={tamanho}
                          className={`min-w-[40px] h-8 px-2 rounded border ${
                            tamanhoSelecionado[produto.id] === tamanho
                              ? 'bg-[hsl(var(--accent))] text-[hsl(var(--accent-foreground))] border-[hsl(var(--accent))]'
                              : 'border-[hsl(var(--border))] text-[hsl(var(--secondary-foreground))]'
                          }`}
                          onClick={() => selecionarTamanho(produto.id, tamanho)}
                        >
                          {tamanho}
                        </button>
                      ))}
                    </div>
                  </div>
                  
                  {/* Botão de adicionar ao carrinho */}
                  <button
                    className="w-full mt-4 py-2 bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] rounded-md hover:opacity-90 transition-opacity"
                    onClick={() => adicionarAoCarrinho(produto)}
                  >
                    Adicionar ao Carrinho
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      
      {/* Carrinho flutuante */}
      {carrinho.length > 0 && (
        <div className="fixed bottom-4 right-4 z-50">
          <button
            onClick={enviarParaWhatsApp}
            className="whatsapp-button px-4 py-3 rounded-full shadow-lg flex items-center space-x-2"
          >
            <ShoppingBag size={20} />
            <span>Finalizar Pedido ({totalItensCarrinho})</span>
          </button>
        </div>
      )}
      
      {/* Footer */}
      <footer className="bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] py-8">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 logo-text">Boutique Elegance</h3>
              <p className="text-sm opacity-80">
                Sua loja de roupas femininas com estilo e elegância para todas as ocasiões.
              </p>
            </div>
            
            <div>
              <h4 className="font-medium mb-4">Categorias</h4>
              <ul className="space-y-2 text-sm opacity-80">
                {categorias.map(categoria => (
                  <li key={categoria.id}>
                    <button 
                      className="hover:underline"
                      onClick={() => setCategoriaAtiva(categoria.id)}
                    >
                      {categoria.nome}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="font-medium mb-4">Contato</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li>WhatsApp: (11) 99999-9999</li>
                <li>Email: contato@boutiqueelegance.com.br</li>
                <li>Instagram: @boutiqueelegance</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-8 pt-6 border-t border-white/20 text-center text-sm opacity-70">
            <p>© {new Date().getFullYear()} Boutique Elegance. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
