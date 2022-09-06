export function copyOnClick(element: HTMLElement) {
    element.addEventListener('click', () => {
        const textarea = document.createElement('textarea')
        textarea.value = element.innerHTML
        document.body.appendChild(textarea)
        textarea.select()
        document.execCommand('copy')
        textarea.remove()

        const text = element.innerHTML
        element.innerHTML = "Copied!"
        setTimeout(() => {
            element.innerHTML = text
        }, 1000)
    })
}