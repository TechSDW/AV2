# Guia para desenvolvimento

## Primeiros passos
  Instale as dependências necessárias antes de inicializar a aplicação

  - npm install

  Com as dependências necessárias, rode o seguinte comando para inicializar a aplicação

  - npm run dev

  Ele irá abrir a aplicação automaticamente, sem necessidade de clicar na URL do local host

## Organização de pastas e arquivos
  -- src:
  - Contem os arquivos principais da aplicação, como componentes reutilizáveis, a tela inicial e o CSS utilizado para estilização
  --- src/components:
  -- Componentes React utilizados na construção do projeto, eles contêm as páginas principais que consomem os arquivos da UI.
  ---- src/components/ui:
  --- Componentes reutilizáveis em qualquer página
  --- src/styles:
  -- Estilização das páginas utilizando CSS
  --- src/App.tsx:
  -- Seleciona a página para exibir, gerencia as rotas
  --- src/main.tsx:
  -- Primeiro arquivo executado pelo navegador que renderiza o App.tsx
  --- src/index.css:
  -- Aplica os estilos globais

## Rotas e funcionalidades
  O arquivo src/components/Home.tsx representa a landing page, ela fornece acesso às funcionalidades do site. Cada botão contido nele troca o conteúdo para seu respectivo.

  Login.tsx -> Home.tsx

  Home.tsx -> Aeronaves.tsx
           -> Funcionarios.tsx
           -> Relatorios.tsx
           -> ImportarExportar.tsx

  Também é possível retornar ao Home.tsx através do botão "Voltar" dentro de cada arquivo.

### Aeronaves.tsx:
Usando hover em cada botão, abre um pequeno menu para escolher qual das alternativas você deseja realizar a ação. Por exemplo, se colocar o mouse acima do botão "Cadastrar" e depois em "Aeronave" você pode criar uma nova aeronave.

### Funcionarios.tsx:
É parecido com o Aeronaves.tsx, mas não possui o pequeno menu, pois não existem outras opções.

### Relatórios.tsx:
No botão de aeronaves ou funcionários, uma tela é aberta ao clicar neles, essa tela contém vários checkboxes para selecionar as informações que serão exibidas ao gerar o relatório.

### ImportarExportar.tsx:
É possível inserir um arquivo .txt para importar informações caso já tenha utilizado o site antes. Esse arquivo segue um modelo específico para que seja possível ler as informações. O modelo atual é simples e precisa ser elaborado de uma maneira certa. Primeiro as informações da aeronave, separados por " "(espaço) e para as outras, por exemplo, funcionários, coloca-se duas quebras de linha (\n\n).
