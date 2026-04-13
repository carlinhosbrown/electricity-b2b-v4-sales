# Electricity B2B v4 Sales

Aplicación SaaS B2B para brokers y consultoras energéticas en España.

## Incluye
- Login con Auth.js
- Roles: `SUPERADMIN`, `BROKER_MANAGER`, `BROKER_AGENT`, `ANALYST`, `CLIENT_VIEWER`
- Panel de brokers y clientes
- Pipeline comercial por etapas
- Propuestas en PDF
- Emails transaccionales con Resend
- Almacenamiento de documentos en Vercel Blob o S3
- Cron diario para sincronización de tarifas

## Arranque local
```bash
npm install
cp .env.example .env
npx prisma generate
npx prisma db push
npm run seed
npm run dev
```

## Usuario demo
- Email: `admin@brokerpro.es`
- Password: `broker1234`
