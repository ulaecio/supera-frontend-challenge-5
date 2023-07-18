import './styles.css'
function Header() {
  return(
    <header>
        <div className="supera-logo-container">
            <img src="https://www.supera.com.br/wp-content/uploads/2020/11/nova-logo-supera-branca.svg" alt="supera" />
            <h1>Supera seletivo Java / React</h1>
            <p>
              Desenvolvido por
              <a href="https://www.linkedin.com/in/ulaecio"> @ulaecio</a>
            </p>
        </div>
    </header>
  )
}

export default Header
