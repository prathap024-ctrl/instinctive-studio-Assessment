**Deployment instrucments**

**Create a .env file:**
**Supabase**

# Connect to Supabase via connection pooling
DATABASE_URL=

# Direct connection to the database. Used for migrations
DIRECT_URL=


**Run Prisma Migrations and Seed**
npx prisma generate
npx prisma migrate dev --name init
npx prisma db seed

Note: You can modify the seed script in prisma/seed.js.


**Start the App**
npm run dev


**Tech decisions**

**Frontend**	Next.js 15 App Router + Tailwind CSS	Modern React features
**Backend**	Prisma ORM + PostgreSQL	Type-safe DB access, easy seed/migrate


**If I had more time… (quick bullets for future improvements)**

Show incident metadata (camera, type, timestamp) in tooltip
Integrate user authentication and audit logs
Export or download incident reports as PDF/CSV
