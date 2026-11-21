function isEditable(target) {
  return target instanceof Element && Boolean(target.closest('input, textarea, [contenteditable="true"], [contenteditable=""]'))
}

export function preventStaticCopy(event) {
  if (!isEditable(event.target)) event.preventDefault()
}

export function preventStaticContextMenu(event) {
  if (!isEditable(event.target)) event.preventDefault()
}

export function preventDragging(event) {
  event.preventDefault()
}
