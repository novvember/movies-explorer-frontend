export default function countGridColumns(gridElement) {
  const gridComputedStyle = window.getComputedStyle(gridElement);
  return gridComputedStyle.getPropertyValue('grid-template-columns').split(' ')
    .length;
}
