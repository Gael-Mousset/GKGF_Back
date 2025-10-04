#!/bin/sh

# echo "⏳ Attente de la base de données..."

# Attente active jusqu'à ce que la BDD soit prête
# until npx prisma db wait; do
#   echo "Base de données non disponible, nouvelle tentative dans 2s..."
#   sleep 2
# done

echo "✅ Base de données prête. Déploiement des migrations..."
npx prisma migrate deploy

echo "🚀 Lancement du serveur Node..."
npm run start:dev
