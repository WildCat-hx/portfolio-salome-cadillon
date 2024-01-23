import './navbar.css';

export const NavComponent = () => {
    return(
      <div className="navbar">
        <div className="container">
          <div className="site-name">
            <h1>Salomé Cadillon</h1>
          </div>
          <div className="navigation">
            <nav role="navigation">
              <ul>
                <li>Acceuil</li>
                <li>Profil</li>
                <li>Compétences</li>
                <li>Portfolio</li>
                <li>Contact</li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    )
  }