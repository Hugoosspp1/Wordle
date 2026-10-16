const DESCRIPCIONES_ESTADO = {
  correcta: 'letra correcta',
  presente: 'letra presente en la palabra',
  ausente: 'letra ausente',
}

function Casilla({ letra, estado = '', fila, columna, activa, onCambio, onBorrar }) {
  const descripcionEstado = DESCRIPCIONES_ESTADO[estado]

  return (
    <input
      className={`casilla ${estado}`}
      aria-label={`Fila ${fila}, columna ${columna}${letra ? `, letra ${letra}` : ''}${descripcionEstado ? `, ${descripcionEstado}` : ''}`}
      value={letra}
      maxLength={1}
      disabled={!activa}
      onChange={onCambio}
      onKeyDown={onBorrar}
    />  
  )
}

export default Casilla
