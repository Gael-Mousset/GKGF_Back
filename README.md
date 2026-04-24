# 🎮 GKGF — Game Keep, Game Flip · Back-end

> API REST du projet GKGF — gère la persistance de ta collection de jeux vidéo en base de données.  
> Expose les endpoints consommés par le [front-end React](https://github.com/Gael-Mousset/GKGF_Front).

---

## 📖 Présentation

**GKGF Back** est le serveur d'API de l'application Game Keep, Game Flip. Il est responsable de :

- La gestion CRUD de la collection de jeux vidéo
- La persistance des données via une base de données relationnelle
- L'upload et le stockage des images de jaquettes
- L'exposition d'une API REST consommée par le front-end

---

## 🛠️ Stack technique

| Catégorie | Technologie |
|---|---|
| Framework | NestJS 11 |
| Langage | TypeScript 5.7 |
| ORM | Prisma 6 |
| Validation | class-validator + class-transformer |
| Upload fichiers | Multer 2 |
| Tests | Jest 29 + Supertest |
| Linting / Format | ESLint 9 + Prettier |
| Déploiement | Docker |

---

## 🚀 Démarrage rapide

### Prérequis

- Node.js ≥ 20
- npm ≥ 9
- Une base de données compatible Prisma (PostgreSQL, MySQL, SQLite…)

### Installation

```bash
git clone https://github.com/Gael-Mousset/GKGF_Back.git
cd GKGF_Back
npm install
```

### Variables d'environnement

Crée un fichier `.env` à la racine :

```env
DATABASE_URL="postgresql://user:password@localhost:5432/gkgf"
PORT=3000
```

> ⚠️ Ne commit jamais ton `.env` — il est dans le `.gitignore`.

### Migration de la base de données

```bash
# Appliquer les migrations Prisma
npx prisma migrate dev

# (Optionnel) Seeder la base avec des données de test
npm run seed
```

### Lancement en développement

```bash
npm run start:dev
```

L'API sera disponible sur [http://localhost:3000](http://localhost:3000).

---

## 📦 Scripts disponibles

| Commande | Description |
|---|---|
| `npm run start` | Lance le serveur en mode normal |
| `npm run start:dev` | Lance en mode watch (hot reload) |
| `npm run start:prod` | Lance le build de production |
| `npm run build` | Compile le projet |
| `npm run seed` | Injecte des données de test via Faker |
| `npm run test` | Lance les tests unitaires |
| `npm run test:e2e` | Lance les tests end-to-end |
| `npm run test:cov` | Lance les tests avec rapport de couverture |
| `npm run lint` | Analyse et corrige le code avec ESLint |
| `npm run format` | Formate le code avec Prettier |

---

## 🗂️ Structure du projet

```
GKGF_Back/
├── prisma/
│   ├── schema.prisma      # Schéma de la base de données
│   └── seed.ts            # Script de seed (Faker.js)
├── src/
│   ├── games/             # Module jeux (controller, service, dto)
│   ├── uploads/           # Gestion des uploads d'images (Multer)
│   └── main.ts            # Point d'entrée NestJS
├── test/                  # Tests e2e
├── uploads/               # Dossier local des fichiers uploadés
├── dockerfile
├── entrypoint.sh
└── package.json
```

---

## 🔌 Endpoints principaux

> Base URL : `http://localhost:3000`

| Méthode | Route | Description |
|---|---|---|
| `GET` | `/games` | Récupère toute la collection |
| `GET` | `/games/:id` | Récupère un jeu par son ID |
| `POST` | `/games` | Ajoute un jeu |
| `PATCH` | `/games/:id` | Modifie un jeu |
| `DELETE` | `/games/:id` | Supprime un jeu |
| `POST` | `/games/:id/image` | Upload la jaquette d'un jeu |

> ⚠️ Les routes exactes dépendent de l'implémentation dans `src/`. Ajuster si besoin.

---

## 🐳 Déploiement avec Docker

```bash
# Build de l'image
docker build -t gkgf-back .

# Lancer le conteneur
docker run -p 3000:3000 --env-file .env gkgf-back
```

Le script `entrypoint.sh` s'occupe de lancer les migrations Prisma automatiquement au démarrage du conteneur.

---

## 🔗 Lien avec le front-end

Ce back-end est conçu pour fonctionner avec le front-end GKGF :  
👉 [github.com/Gael-Mousset/GKGF_Front](https://github.com/Gael-Mousset/GKGF_Front)

---

## 🗺️ Roadmap

- [x] CRUD jeux vidéo
- [x] Upload d'images (Multer)
- [x] Seed de données de test (Faker.js)
- [ ] Authentification utilisateur (JWT)
- [ ] Système Keep / Flip par jeu
- [ ] Pagination et filtres avancés
- [ ] Documentation Swagger

---

## 👤 Auteur

**Gaël Mousset** — [github.com/Gael-Mousset](https://github.com/Gael-Mousset)
