export function convertDurationToTimeString(duration: number): string {
  // converte a duração de segundos para horas. (60 * 60 = 3600)
  const hours = Math.floor(duration / 3600);

  // pega o que "sobrou" das horas e divide por 60,
  // convertendo para minutos
  const minutes = Math.floor((duration % 3600) / 60);

  // pega o que "sobrou" dos minutos e divide por 60,
  // convertendo para segundos
  const seconds = duration % 60;

  // garante que os dados sempre tenham 2 caracteres. (01:06:04)
  const timeString = [hours, minutes, seconds]
    .map(unit => String(unit).padStart(2, '0'))
    .join(':');

  return timeString;
}