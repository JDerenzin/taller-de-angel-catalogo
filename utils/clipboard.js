/**
 * Copia texto al portapapeles y devuelve una promesa.
 * @param {string} text - El resumen del pedido formateado.
 */
export async function copyToClipboard(text) {
    if (!navigator.clipboard) {
        // Fallback para navegadores muy antiguos
        return fallbackCopyTextToClipboard(text);
    }
    return await navigator.clipboard.writeText(text);
}

function fallbackCopyTextToClipboard(text) {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.select();
    try {
        document.execCommand('copy');
        document.body.removeChild(textArea);
        return Promise.resolve();
    } catch (err) {
        return Promise.reject(err);
    }
}