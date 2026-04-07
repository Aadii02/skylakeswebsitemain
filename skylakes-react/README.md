# SKYLX Aerospace Website

Production website for SKYLX Aerospace, built with React and Vite.

## Tech Stack

- React 19
- Vite 8
- Framer Motion
- Vanilla CSS

## Local Development

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

3. Build for production:

```bash
npm run build
```

4. Preview the production build:

```bash
npm run preview
```

5. Run lint checks:

```bash
npm run lint
```

## Environment Variables

Create a `.env` file in this folder and configure:

```env
VITE_CONTACT_FORM_ENDPOINT=https://your-api-endpoint.example.com/contact
```

- `VITE_CONTACT_FORM_ENDPOINT`: Backend endpoint that accepts `POST` JSON payload for contact signups.
- Expected request body:

```json
{
	"firstName": "Ada",
	"lastName": "Lovelace",
	"email": "ada@example.com"
}
```

If this variable is not set, the contact form will show a configuration error and will not fake a successful submission.
