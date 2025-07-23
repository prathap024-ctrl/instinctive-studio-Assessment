**Deployment instrucments**

**Create a .env file:**
DATABASE_URL=postgresql://<user>:<password>@localhost:5432/<db_name>?schema=public

**Run Prisma Migrations and Seed**
npx prisma generate
npx prisma migrate dev --name init
npx prisma db seed

Note: You can modify the seed script in prisma/seed.js.

**Docker-compose**

services:
  db:
    image: postgres
    restart: always
    environment:
      POSTGRES_PASSWORD: 
      POSTGRES_USER: 
      POSTGRES_DB: 
    ports:
      - 5432:5432
    volumes:
      - pd_data:/var/lib/postgresql/data
    depends_on:
      - adminer

  adminer:
    image: adminer
    restart: always
    ports:
      - 8080:8080

volumes:
  pd_data:


**Start the App**
npm run dev


**Tech decisions**

**Frontend**	Next.js 15 App Router + Tailwind CSS	Modern React features
**Backend**	Prisma ORM + PostgreSQL	Type-safe DB access, easy seed/migrate


**If I had more time… (quick bullets for future improvements)**

Show incident metadata (camera, type, timestamp) in tooltip
Integrate user authentication and audit logs
Export or download incident reports as PDF/CSV
