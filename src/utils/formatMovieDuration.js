export default function formatMovieDuration(durationInMins) {
  const hours = Math.floor(durationInMins / 60);
  const mins = durationInMins % 60;
  return (
    (hours > 0 ? `${hours} ч` : '') +
    (mins ? ' ' : '') +
    (mins > 0 ? `${mins} м` : '')
  );
}
