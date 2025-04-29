import './HomeIntro.css';
import '../../assets/example.webp'
import exemploImg from '../../assets/example.webp';
import exampleImg2 from '../../assets/example2.webp';
import exampleImg3 from '../../assets/example3.webp';


function HomeIntro() {
  const mockAvaliacoes = [
    { nome: 'Espaço Encantado', nota: 4.9, comentario: 'Lugar incrível e equipe maravilhosa!' },
    { nome: 'Buffet Delícias', nota: 4.7, comentario: 'Comida excelente e bem servida!' },
    { nome: 'RecreaKids', nota: 5.0, comentario: 'As crianças amaram, super animado!' },
  ];

  const mockEspacos = [
    { nome: 'Casa de Festas Jardim', local: 'Recife, PE', nota: 4.9, avaliacoes: 102, preco: 'R$2.500', imagem: exemploImg },
    { nome: 'Villa Encanto', local: 'Olinda, PE', nota: 4.8, avaliacoes: 87, preco: 'R$3.000', imagem: exemploImg },
    { nome: 'Espaço Luar', local: 'Jaboatão, PE', nota: 5.0, avaliacoes: 110, preco: 'R$3.800', imagem: exemploImg },
    { nome: 'Celeiro Eventos', local: 'Guabiraba, PE', nota: 5.0, avaliacoes: 220, preco: 'R$5.000', imagem: exemploImg },
    { nome: 'Socorro Eventos', local: 'Jaboatão, PE', nota: 5.0, avaliacoes: 110, preco: 'R$3.800', imagem: exemploImg },
    { nome: 'Espaço Luar', local: 'Recife, PE', nota: 5.0, avaliacoes: 110, preco: 'R$3.800', imagem: exemploImg },
  ];

  const mockBuffets = [
    { nome: 'Buffet Sabor e Arte', local: 'Olinda, PE', nota: 4.8, avaliacoes: 67, preco: 'R$1.200', imagem: exampleImg2 },
    { nome: 'Delícias Nobres', local: 'Recife, PE', nota: 4.9, avaliacoes: 85, preco: 'R$1.500', imagem: exampleImg2 },
    { nome: 'Festou Buffet', local: 'Paulista, PE', nota: 4.7, avaliacoes: 50, preco: 'R$980', imagem: exampleImg2 },
  ];

  const mockRecreadores = [
    { nome: 'RecreaKids', tipo: 'Animação Infantil', nota: 5.0, imagem: exampleImg3 },
    { nome: 'Turma da Alegria', tipo: 'Personagens e brincadeiras', nota: 4.8, imagem: exampleImg3 },
    { nome: 'Show do Pipoca', tipo: 'Palhaço e mágica', nota: 4.7, imagem: exampleImg3 },
  ];

  return (
    <div className="home-intro">
      <div className="hero">
        <h1>Encontre tudo para seu evento especial</h1>
        <p>Buffets, espaços, recreadores e mais — tudo em um só lugar.</p>
        <div className="search-bar">
          <input type="text" placeholder="Busque por serviço ou fornecedor..." />
          <input type="text" placeholder="Cidade ou região..." />
          <button>Pesquisar</button>
        </div>
      </div>

      {/* SOBRE A EMPRESA */}
      <section className="sobre">
        <div className="sobre-texto">
          <h2>Quem somos</h2>
          <p>
            Somos apaixonados por tornar seus momentos inesquecíveis. Conectamos você aos melhores serviços
            para eventos, com praticidade, confiança e transparência.
          </p>
          <p>
            Nossa missão é simplificar o planejamento do seu evento, oferecendo uma plataforma intuitiva e repleta de fornecedores avaliados por clientes reais.
          </p>
        </div>
        <div className="sobre-imagem">
          <img src="/imgs/equipe.jpg" alt="Equipe" />
        </div>
      </section>

      {/* SERVIÇOS EM DESTAQUE */}
      <div className="servicos-destaque">
        <h2>Serviços em destaque</h2>
        <div className="cards-container">
          <div className="card">🎉 Espaços para festa</div>
          <div className="card">🍽️ Buffets e bebidas</div>
          <div className="card">🧸 Recreadores</div>
          <div className="card">📸 Fotografia & Filmagem</div>
        </div>
      </div>

      {/* ESPAÇOS EM DESTAQUE */}
      <section className="carrossel">
        <h2>Espaços para eventos</h2>
        <div className="rolagem-horizontal">
          {mockEspacos.map((espaco, i) => (
            <div className="card-listagem" key={i}>
              <img src={espaco.imagem} alt={espaco.nome} />
              <h3>{espaco.nome}</h3>
              <p>{espaco.local}</p>
              <p>⭐ {espaco.nota} ({espaco.avaliacoes} avaliações)</p>
              <p>A partir de {espaco.preco}</p>
            </div>
          ))}
        </div>
      </section>

      {/* BUFFETS EM DESTAQUE */}
      <section className="carrossel">
        <h2>Buffets recomendados</h2>
        <div className="rolagem-horizontal">
          {mockBuffets.map((buffet, i) => (
            <div className="card-listagem" key={i}>
              <img src={buffet.imagem} alt={buffet.nome} />
              <h3>{buffet.nome}</h3>
              <p>{buffet.local}</p>
              <p>⭐ {buffet.nota} ({buffet.avaliacoes} avaliações)</p>
              <p>A partir de {buffet.preco}</p>
            </div>
          ))}
        </div>
      </section>

      {/* RECREADORES EM DESTAQUE */}
      <section className="carrossel">
        <h2>Recreadores e animação</h2>
        <div className="rolagem-horizontal">
          {mockRecreadores.map((rec, i) => (
            <div className="card-listagem" key={i}>
              <img src={rec.imagem} alt={rec.nome} />
              <h3>{rec.nome}</h3>
              <p>{rec.tipo}</p>
              <p>⭐ {rec.nota}</p>
            </div>
          ))}
        </div>
      </section>

      {/* AVALIAÇÕES */}
      <div className="avaliacoes">
        <h2>O que estão dizendo</h2>
        <div className="avaliacoes-lista">
          {mockAvaliacoes.map((item, index) => (
            <div className="avaliacao" key={index}>
              <strong>{item.nome}</strong>
              <p className="nota">Nota: {item.nota} ⭐</p>
              <p className="comentario">"{item.comentario}"</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA FINAL */}
      <section className="cta-final">
        <h2>Planeje sua festa perfeita com a gente</h2>
        <p>Comece agora a buscar os melhores fornecedores para o seu evento.</p>
        <button className="btn-destaque">Começar agora</button>
      </section>
    </div>
  );
}

export default HomeIntro;
