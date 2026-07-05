# 🌊 Gudam

Inventory and order management system with a FastAPI backend and Next.js frontend.

## 🚀 Getting Started

### Prerequisites

- Docker and Docker Compose installed.

---

## 🛠️ Development Environment

In development, we use `docker-compose.override.yml` to enable hot-reloading for both the backend (FastAPI) and frontend (Next.js).

1. **Start the environment:**

   ```bash
   docker compose up --build
   ```

   _Note: Docker Compose automatically merges `docker-compose.yml` and `docker-compose.override.yml`._

### 💡 Local IDE Setup (IntelliSense)

To get IntelliSense and fix linting errors in your IDE, create a local virtual environment for the backend:

```bash
cd api
python3 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
```

### 🌐 Frontend Local Setup (IntelliSense)

To get IntelliSense and fix linting errors for Next.js, install dependencies locally:

```bash
cd web
npm install
```

2. **Access the services:**
   - Backend API: http://localhost:8000
   - Frontend App: http://localhost:3000
   - Glitchtip: http://localhost:8001

### 📦 Installing New Frontend Packages

To install a new npm package (including shadcn components) in the `web` service:

1. Install the package inside the running container:

   ```bash
   docker compose exec web npm install <package-name>
   ```

   For shadcn components, use the CLI instead:

   ```bash
   docker compose exec web npx shadcn@latest add badge -y
   ```

2. Then install it locally for IDE IntelliSense:

   ```bash
   cd web
   npm install
   ```

To uninstall a frontend package:

```bash
docker compose exec web npm uninstall <package-name>
cd web
npm uninstall <package-name>
```

### 🐍 Installing Backend Packages

To install a new Python package in the `api` service:

1. Install the package inside the running container:

   ```bash
   docker compose exec api pip install <package-name>
   ```

2. Then install it locally for IDE IntelliSense:

   ```bash
   cd api
   pip install <package-name>
   ```

To uninstall a backend package:

```bash
docker compose exec api pip uninstall <package-name>
cd api
pip uninstall <package-name>
```

---

## 🗄️ Database Migrations

All migration commands are executed inside the running container using `docker compose run api`.

### Apply Migrations

After starting the environment, apply migrations to the database:

```bash
docker compose run api alembic upgrade head
```

### Create a Migration

After modifying models, generate a new migration:

```bash
docker compose run api alembic revision --autogenerate -m "description"
```

Then apply it:

```bash
docker compose run api alembic upgrade head
```

### Rollback Migrations

To rollback the last migration:

```bash
docker compose run api alembic downgrade -1
```

To rollback all migrations:

```bash
docker compose run api alembic downgrade base
```

---

## 🏗️ Production Environment

The production setup uses `docker-compose.prod.yml`. It disables hot-reloading, uses Gunicorn as a process manager for the API, and enforces health checks for all services.

1. **Start the production stack:**

   ```bash
   docker compose -f docker-compose.yml -f docker-compose.prod.yml up -d
   ```

2. **Key differences in Production:**
   - **Backend:** Runs via Gunicorn with 4 worker threads.
   - **Restart Policy:** Containers are set to `always` restart on failure.
   - **Volumes:** Code is baked into the images; local host volumes are not mounted.
