export const validateTimeInput = (value: string) => {
  if (value.length === 5) {
    const [hours, minutes] = value.split(':')
    if (parseInt(hours) > 23) value = '23:' + minutes
    if (parseInt(minutes) > 59) value = hours + ':59'
  }
}
