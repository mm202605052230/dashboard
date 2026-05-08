# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Monorepo Structure

This repo contains two projects:

- `dashboard/` — Angular 21 frontend (TypeScript)
- `dashboard-api/` — Spring Boot 4.0.6 REST API (Java 25, packaged as WAR)

## Frontend (`dashboard/`)

```bash
cd dashboard
npm install          # install dependencies
npm start            # dev server at http://localhost:4200
npm run build        # production build → dist/
npm test             # run unit tests with Vitest
npm run watch        # dev build with watch mode
```

Run a single test file:
```bash
cd dashboard
npx vitest run src/app/app.spec.ts
```

Angular CLI scaffolding:
```bash
cd dashboard
npx ng generate component <name>
npx ng generate service <name>
```

**Key Angular patterns in use:**
- Standalone components (no NgModules)
- Angular Signals (`signal()`) for reactive state
- Router via `provideRouter(routes)` in `app.config.ts`

## Backend (`dashboard-api/`)

```bash
cd dashboard-api
./mvnw spring-boot:run          # start dev server (default port 8080)
./mvnw package                  # build WAR → target/
./mvnw test                     # run all tests
./mvnw test -Dtest=ClassName    # run a single test class
```

The API is packaged as a **WAR** for external Tomcat deployment (`ServletInitializer` extends `SpringBootServletInitializer`). The group ID is `dev.drgs`, base package is `dev.drgs.dashboard_api`.

Spring configuration lives in `src/main/resources/application.yaml`.
