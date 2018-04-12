const state = {
  rows: [],
  html: '',
};
const setHtml = () => {
  state.html = '';
  for (const row of state.rows) {
    state.html += `<input type='text' size='${row.size}' placeholder='${row.placeholder}' />\r\n`;
  }
};
export default {
  state,
  setHtml,
};
