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
- **Resumo da manhã**: num horário escolhido (padrão 06:30), o alarme toca e uma voz
  diz "Bom dia, Henrico! Hoje você tem: ..." com as tarefas e horários do dia.
  Nome e horário ficam em Tarefas → Resumo da manhã.
- **🏃 Condicionamento físico** (categoria própria, integrada às abas):
  - Seg: treino de resistência com passos da etapa atual + treino guiado com voz.
  - Ter 15h / Qui 17h: aviso do treino no Democrata (16h / 18h).
  - Qua: recuperação muscular (nada intenso). Sáb: caminhada leve opcional. Dom: descanso.
  - Alarme com Feito / Lembrar em 10 min / Pular; histórico de treinos e evolução semanal.
  - 4 etapas de evolução (adaptação → corrida contínua de 15–20 min); avançar é sempre
    escolha do usuário, com sugestão baseada em "Como foi?" (fácil/na medida/difícil).
  - Os treinos são adicionados uma única vez aos dados existentes, sem alterar
    nenhum lembrete já cadastrado.
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
