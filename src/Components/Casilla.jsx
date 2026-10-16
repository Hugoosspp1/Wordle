function Casilla({ letra, estado = '', activa, onCambio, onBorrar }) {
  return (
    <input
      className={`casilla ${estado}`}
      value={letra}
      maxLength={1}
      disabled={!activa}
      onChange={onCambio}
      onKeyDown={onBorrar}
    />  
  )
}

export default Casilla
