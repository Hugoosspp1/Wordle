const FILAS_TECLADO = ['QWERTYUIOP', 'ASDFGHJKLÑ', 'ZXCVBNM']

const DESCRIPCIONES_ESTADO = {
  correcta: 'letra correcta',
  presente: 'letra presente en la palabra',
  ausente: 'letra ausente',
}

function Teclado({ estadosLetras, onTecla }) {
  return (
    <div className="teclado" role="group" aria-label="Teclado en pantalla">
      {FILAS_TECLADO.map((fila, indice) => (
        <div className="fila-teclado" key={fila}>
          {[...fila].map((letra) => {
            const estado = estadosLetras[letra]

            return (
              <button
                key={letra}
                className={`tecla${estado ? ` ${estado}` : ''}`}
                type="button"
                aria-label={estado ? `${letra}, ${DESCRIPCIONES_ESTADO[estado]}` : letra}
                onClick={() => onTecla(letra)}
              >
                {letra}
              </button>
            )
          })}
          {indice === FILAS_TECLADO.length - 1 && (
            <button
              className="tecla tecla-borrar"
              type="button"
              aria-label="Borrar letra"
              onClick={() => onTecla('BORRAR')}
            >
              Borrar
            </button>
          )}
        </div>
      ))}
    </div>
  )
}

export default Teclado