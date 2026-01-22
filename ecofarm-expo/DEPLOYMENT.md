# 🚀 Depoyment Guide - Sisteminha EcoFarm (Expo Web)

Este guia explica como realizar o deploy do Sisteminha EcoFarm utilizando **Expo Router** e **EAS Hosting**.

## 📋 Pré-requisitos

- Node.js 18 ou superior
- Conta no [Expo](https://expo.dev)
- EAS CLI instalado globalmente:
  ```bash
  npm install -g eas-cli
  ```

## 🛠️ Configuração Inicial

1. Entre no diretório do projeto Expo:
   ```bash
   cd ecofarm-expo
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Faça login na sua conta Expo:
   ```bash
   eas login
   ```

## 💻 Desenvolvimento Local

Para rodar o projeto localmente no navegador:
```bash
npx expo start --web
```

## 🌐 Deployment (EAS Hosting)

### 1. Gerar o Build Estático
O comando abaixo compila o projeto para a pasta `/dist`:
```bash
npx expo export --platform web
```

### 2. Deploy para Preview
Use este comando para testar em uma URL temporária:
```bash
eas deploy --platform web
```

### 3. Deploy para Produção
Para atualizar a URL principal (**https://sisteminha-ecofarm.expo.app**):
```bash
eas deploy --platform web --prod
```

## 🔧 Troubleshooting

- **Erro de Tailwind**: Certifique-se de que o `global.css` está importado no `app/_layout.tsx`.
- **Variáveis de Ambiente**: A chave da API Gemini deve estar configurada como `EXPO_PUBLIC_API_KEY` no arquivo `.env`.
- **Portas**: Se a porta 8081 estiver ocupada, o Expo tentará a próxima disponível.

## 🤖 Integração com GitHub (CI/CD)

Para automatizar os deploys a cada push na `main`:

1. Vá para o [Dashboard do Expo](https://expo.dev).
2. Selecione seu projeto `sisteminha-ecofarm`.
3. Vá em **GitHub Service** e conecte seu repositório.
4. Configure para que o comando `eas deploy --platform web --prod` seja executado após builds de sucesso.

***

**Status**: ✅ Configuração completa!  
**Próximo passo**: Execute os comandos acima na sua máquina para fazer o primeiro deploy.
