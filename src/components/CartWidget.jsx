const CartWidget = () => {
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      🛒
      <span style={{
        backgroundColor: 'red',
        color: 'white',
        borderRadius: '50%',
        padding: '2px 6px',
        fontSize: '0.8rem',
        marginLeft: '5px'
      }}>
        3
      </span>
    </div>
  )
}

export default CartWidget
