export default function DocsPage() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-12">
      <div className="space-y-12">
        <div>
          <h1 className="text-3xl font-light tracking-tight mb-2">Documentation</h1>
          <p className="text-muted-foreground">Everything you need to get started</p>
        </div>

        <section className="space-y-4">
          <h2 className="text-xl font-medium">Quick Start</h2>
          <div className="space-y-4 text-sm text-muted-foreground">
            <div className="space-y-2">
              <h3 className="text-foreground font-medium">Installation</h3>
              <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                <code>pnpm install</code>
              </pre>
            </div>

            <div className="space-y-2">
              <h3 className="text-foreground font-medium">Database Setup</h3>
              <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                <code>pnpm db:push</code>
              </pre>
            </div>

            <div className="space-y-2">
              <h3 className="text-foreground font-medium">Run Development Server</h3>
              <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                <code>pnpm dev</code>
              </pre>
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-medium">Stack</h2>
          <div className="grid gap-4 text-sm">
            <div className="space-y-1">
              <div className="font-medium">Next.js</div>
              <div className="text-muted-foreground">Full-stack React framework</div>
            </div>
            <div className="space-y-1">
              <div className="font-medium">TypeScript</div>
              <div className="text-muted-foreground">Type-safe development</div>
            </div>
            <div className="space-y-1">
              <div className="font-medium">Prisma</div>
              <div className="text-muted-foreground">TypeScript ORM with PostgreSQL</div>
            </div>
            <div className="space-y-1">
              <div className="font-medium">Better Auth</div>
              <div className="text-muted-foreground">Authentication and user management</div>
            </div>
            <div className="space-y-1">
              <div className="font-medium">Tailwind CSS</div>
              <div className="text-muted-foreground">Utility-first styling</div>
            </div>
            <div className="space-y-1">
              <div className="font-medium">shadcn/ui</div>
              <div className="text-muted-foreground">Accessible component library</div>
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-medium">Project Structure</h2>
          <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
{`origyn/
├── apps/
│   └── web/         Fullstack application
├── packages/
│   ├── auth/        Authentication logic
│   └── db/          Database schema & queries`}
          </pre>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-medium">Available Commands</h2>
          <div className="space-y-3 text-sm">
            <div className="flex gap-4">
              <code className="bg-muted px-3 py-1 rounded">pnpm dev</code>
              <span className="text-muted-foreground">Start development server</span>
            </div>
            <div className="flex gap-4">
              <code className="bg-muted px-3 py-1 rounded">pnpm build</code>
              <span className="text-muted-foreground">Build for production</span>
            </div>
            <div className="flex gap-4">
              <code className="bg-muted px-3 py-1 rounded">pnpm db:push</code>
              <span className="text-muted-foreground">Sync database schema</span>
            </div>
            <div className="flex gap-4">
              <code className="bg-muted px-3 py-1 rounded">pnpm db:studio</code>
              <span className="text-muted-foreground">Open database studio</span>
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-medium">Authentication</h2>
          <div className="space-y-3 text-sm text-muted-foreground">
            <p>Built-in authentication with Better Auth includes:</p>
            <ul className="space-y-2 list-disc list-inside">
              <li>Email/password authentication</li>
              <li>Session management</li>
              <li>Protected routes</li>
              <li>User subscription handling</li>
            </ul>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-medium">Database</h2>
          <div className="space-y-3 text-sm text-muted-foreground">
            <p>Prisma with PostgreSQL provides:</p>
            <ul className="space-y-2 list-disc list-inside">
              <li>Type-safe database queries</li>
              <li>Auto-generated TypeScript types</li>
              <li>Migration management</li>
              <li>Database studio for visual editing</li>
            </ul>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-medium">Environment Variables</h2>
          <div className="space-y-3 text-sm text-muted-foreground">
            <p>Create a .env file in apps/web/ with:</p>
            <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
{`DATABASE_URL="postgresql://..."
BETTER_AUTH_SECRET="your-secret-key"
BETTER_AUTH_URL="http://localhost:3001"`}
            </pre>
          </div>
        </section>
      </div>
    </div>
  );
}
