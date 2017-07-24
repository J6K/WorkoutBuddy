export default class MessageQuerySelectors {

  getMessages(id) {
    return `SELECT * FROM MESSAGES WHERE id = ${id}`;
  }

  sendMessage(message) {
    return `INSERT INTO MESSAGES (msg) VALUES (${message})`;
  }
}
