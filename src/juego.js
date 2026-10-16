export function estadoDe(letra, columna, solucion) {
  if (solucion[columna] === letra) return "correcta";
  if (solucion.includes(letra)) return "presente";
  return "ausente";
}