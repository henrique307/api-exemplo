export function today() {
    const today = new Date();

    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const yyyy = today.getFullYear();

    return `${dd}/${mm}/${yyyy}`;
}

export function now() {
    const brazilTime = new Date().toLocaleString('en-US', { timeZone: 'America/Sao_Paulo' });
    const [_, timePart] = brazilTime.split(' ');

    return timePart.substring(0, 5);

}