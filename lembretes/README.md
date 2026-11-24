# Meu Dia — app de lembretes/alarme

App para celular (PWA) que lembra das tarefas do dia: passear com o cachorro,
lavar a louça, academia, treino etc.

## Como funciona
- **Hoje**: tarefas do dia com horário; toque no círculo para marcar como feita.
- **Semana**: o que vem nos próximos 7 dias.
- **Tarefas**: criar/editar/excluir. Repetição por dias da semana, a cada X dias
  (rodízio, ex.: louça dia sim, dia não) ou uma vez só. Vários horários por tarefa.
- **Alarme**: no horário, tela cheia com som + vibração + notificação.
  Botões "Feito", "Lembrar em 10 min" e "Só parar o som".
- **Exportar para o calendário**: gera um `.ics` com as tarefas repetidas e
  alarme, para o calendário do celular tocar mesmo com o app fechado.
- Os dados ficam salvos no próprio celular (sem login, sem servidor).

## Limitação importante
Um app web só consegue tocar o alarme **enquanto está aberto** (ou em segundo
plano recente). Para garantia total com o celular bloqueado, use o botão
"Exportar para o calendário".

## Como colocar no celular
1. Hospede a pasta `lembretes/` em qualquer site estático com HTTPS
   (Vercel, Netlify, GitHub Pages).
2. Abra o link no celular:
   - Android (Chrome): menu ⋮ → "Adicionar à tela inicial / Instalar app".
   - iPhone (Safari): botão Compartilhar → "Adicionar à Tela de Início".
3. Abra pelo ícone e toque em "Ativar" notificações.

Para testar no computador: `npx serve lembretes` e abra o endereço mostrado.
