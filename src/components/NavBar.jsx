import CartWidget from './CartWidget'

const NavBar = () => {
  return (
    <nav style={styles.nav}>
      <h2 style={styles.logo}>Reina Moda</h2>
      <ul style={styles.links}>
        <li><a href="#">Inicio</a></li>
        <li><a href="#">Productos</a></li>
        <li><a href="#">Contacto</a></li>
      </ul>
      <CartWidget />
    </nav>
  )
}

const styles = {
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
    padding: '10px 20px',
    boxShadow: '0px 2px 5px rgba(0,0,0,0.1)'
  },
  logo: {
    margin: 0
  },
  links: {
    listStyle: 'none',
    display: 'flex',
    gap: '20px',
    margin: 0
  }
}

export default NavBar
