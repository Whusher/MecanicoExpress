//Validación para horarios en citas
export function validateTime(time) {
    const re = /^(0[9-9]|1[0-5]):[0-5][0-9]$/;
    return re.test(time);
}
