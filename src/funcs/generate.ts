export function generate() {
    if (window.location.href.includes('?p=')) {
        document.querySelector<HTMLDivElement>('.generate')!.style.display = 'none'
    }
    
    document.querySelector<HTMLButtonElement>('#generate')!.addEventListener('click', () => {
        window.location.href += '?p=' + document.querySelector<HTMLInputElement>('#param')!.value
    })
}