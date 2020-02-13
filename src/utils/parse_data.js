import moment from 'moment'

export default function parseData(state = {}, ignoreNotRequiredField = false) {
  let requestData = {}

  for (var key in state) {
    if (ignoreNotRequiredField && !state[key].required) {
    } else if (state[key].type === 'date') {
      requestData[key] = moment(state[key].value, 'MM/DD/YYYY').format(
        'YYYY/MM/DD'
      )
    } else if (state[key].type === 'bool') {
      requestData[key] = state[key].value ? '1' : '0'
    } else {
      requestData[key] = state[key].value
    }
  }

  return requestData
}
