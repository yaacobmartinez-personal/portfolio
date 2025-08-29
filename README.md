# Nuxt Minimal Starter

Look at the [Nuxt documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

## Email Configuration

The contact form uses nodemailer to send emails. To configure email functionality, add the following environment variables to your `.env` file:

```bash
# SMTP Configuration for Email
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password

# Contact Email (where you want to receive contact form emails)
CONTACT_EMAIL=your-email@gmail.com
```

### Gmail Setup
For Gmail, you'll need to:
1. Enable 2-factor authentication
2. Generate an App Password: https://myaccount.google.com/apppasswords
3. Use the App Password instead of your regular password

### API Endpoint
The contact form sends POST requests to `/api/contact` with the following body:
```json
{
  "name": "John Doe",
  "email": "john@example.com", 
  "message": "Hello, I'd like to discuss a project."
}
```
