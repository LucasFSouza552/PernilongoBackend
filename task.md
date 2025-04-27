# Tarefas do Projeto Pernilongo

## Problemas Encontrados

1. - [x] **Erro no método 'createUser' no userService.ts**
   - O método não está incrementando o ID corretamente ao criar um novo usuário.
   - Na linha 9 onde calcula o novo ID: `const newId = Math.max(...users.map(u => u.id), 0);`
   - Deveria ser: `const newId = Math.max(...users.map(u => u.id), 0) + 1;`
   - Sem adicionar +1, o novo usuário pode ter o mesmo ID que um usuário existente.
   - ✅ Verificado: O código atual usa `const lastId = users.reduce((acc, user) => Math.max(acc, user.id), 0); const newUser: User = { id: lastId + 1, name };` que já implementa a lógica correta.

2. - [x] **Status de erro incorreto no createUserController**
   - Na linha 7 do userController.ts, está usando código 409 para campo obrigatório ausente.
   - O código correto para este caso seria 400 (Bad Request), não 409 (Conflict).
   - `res.status(409).json({ error: "Name is required" });` deveria ser `res.status(400).json({ error: "Name is required" });`
   - ✅ Corrigido: Atualizado o código de status e a documentação Swagger correspondente.

3. - [x] **Ordem incorreta dos parâmetros na criação de Activity**
   - No activityService.ts, linha 27, há uma troca na ordem dos parâmetros:
   - `const newActivity: Activity = { id: newId, userId, type: typed, time , distance };`
   - A vírgula está no lugar errado entre time e distance, o que pode causar problemas na criação.
   - ✅ Verificado: O código atual tem a sintaxe correta `const newActivity: Activity = { id: newId, userId, type: typed, time, distance };`

## Pendências a Desenvolver

1. - [x] **Implementar exclusão de usuário**
   - Criar endpoint DELETE /users/:id
   - Verificar se o usuário não possui atividades antes de excluir
   - Implementar lógica no service e controller
   - ✅ Implementado: Adicionada verificação de atividades antes de excluir o usuário e retornando erro 409 quando necessário.

2. - [x] **Implementar ranking top 5 de usuários**
   - Criar endpoint GET /users/ranking
   - Desenvolver lógica para calcular tempo total de atividades por usuário
   - Ordenar e retornar os 5 usuários com mais tempo acumulado
   - ✅ Implementado: Adicionado endpoint, service e controller para o ranking.

3. - [x] **Implementar busca de atividades por usuário**
   - Criar endpoint GET /users/:id/activities
   - Desenvolver método no service para filtrar atividades por ID de usuário
   - Implementar controller para esta funcionalidade
   - ✅ Implementado: Adicionada funcionalidade completa de busca de atividades por usuário.

## Observações Adicionais

- [x] É necessário adicionar comentários úteis ao código
  - ✅ Implementado: Adicionados comentários explicativos em todas as novas funções.
- [x] Implementar documentação dos endpoints com Swagger ou Postman Collections
  - ✅ Implementado: Atualizada a documentação Swagger para todos os endpoints, incluindo os novos.
- [x] Gerar PDF com a documentação final
  - ✅ Implementado: Criado script generateSwaggerDocs.js para gerar o PDF da documentação e adicionado comando npm run generate-docs. 