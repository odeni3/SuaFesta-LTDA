import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="logo">SuaFesta</div>

        <nav className="nav">
          <ul className="nav-list">
            <li className="nav-item"><a href="#">Home</a></li>
            <li className="nav-item dropdown">
              <a href="#">Espaços</a>
              <div className="dropdown-content">
                <div className="dropdown-columns">
                  <ul>
                    <li><a href="#">Casa de Festa</a></li>
                    <li><a href="#">Parque</a></li>
                    <li><a href="#">Salão de Festas</a></li>
                    <li><a href="#">Espaços exclusivos</a></li>
                    <li><a href="#">Restaurante</a></li>
                    <li><a href="#">Sítio</a></li>
                  </ul>
                  <ul>
                    <li><a href="#">Exemplo 1</a></li>
                    <li><a href="#">Exemplo 2</a></li>
                    <li><a href="#">Exemplo 3</a></li>
                    <li><a href="#">Exemplo 4</a></li>
                    <li><a href="#">Exemplo 5</a></li>
                  </ul>
                </div>
              </div>
            </li>
            <li className="nav-item"><a href="#">Fornecedores</a></li>
            <li className="nav-item"><a href="#">Recreadores</a></li>
            <li className="nav-item"><a href="#">Avaliações</a></li>
          </ul>
        </nav>

        <div className="auth-links">
          <a href="#" className="btn btn-login">LOGIN</a>
          <a href="#" className="btn btn-signin">SIGN IN</a>
        </div>

      </div>
    </header>
  );
}

export default Header;
