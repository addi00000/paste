export function updateParam(element: HTMLElement, param: string) {
    const url = new URL(window.location.href)
    element.innerHTML = url.searchParams.get(param) || ''
}