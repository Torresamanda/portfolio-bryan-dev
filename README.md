# Portfólio de Bryan Lima

Portfólio pessoal com projetos, experiência, formação e canais de contato. Desenvolvido com Next.js, TypeScript e Tailwind CSS.

## Como executar

É necessário ter o **Node.js 20.9 ou superior** e o npm instalados.

```bash
npm install
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) no navegador.

Para verificar o código e gerar uma versão de produção:

```bash
npm run lint
npm run build
```

## Projetos do GitHub

Para exibir um repositório público no portfólio, adicione o tópico `portfolio-destaque` no GitHub. Use também `portfolio-ordem-1`, `portfolio-ordem-2` e assim por diante para definir a ordem. A descrição, o endereço em Website e os demais tópicos vêm do repositório; as alterações podem levar até uma hora para aparecer.

Se não houver projetos marcados ou o GitHub estiver indisponível, o site usa a seleção salva em `app/data/portfolio.ts`. Em caso de falha na consulta, o visitante também verá um aviso. A rota `/api/projects` informa a origem em `source` e o motivo da alternativa em `reason`.

## Direitos reservados

© Bryan Lima. Todos os direitos reservados.
