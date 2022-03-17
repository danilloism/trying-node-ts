import express = require('express');
let mensagemDoDia = require('./mensagemDoDia');

const app = express();
const PORT = 8080;

const data = new Date();
const dia = data.getDate();

const mensagem: string = mensagemDoDia.retornarMensagemDoDia(dia);

app.get('/', (req: express.Request, res: express.Response) => {
  return res.json({ mensagem: mensagem });
});

app.listen(PORT, () => {
  console.log(`[server]: running at https://localhost:${PORT}`);
  console.log(`[server]: started at ${data}`);
});