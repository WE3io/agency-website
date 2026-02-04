# Deploy Claude website to Vercel

Deploy the **Claude variant** to this existing Vercel project:

**Project ID:** `prj_qMaO25HySr1GMffwdFINukueXcYi`

---

## Fix 404 NOT_FOUND (required)

The app lives in **`website/`**. Vercel must build from that folder.

1. Open **https://vercel.com** → your project (**agency-website-jet-five**).
2. Go to **Settings** → **General**.
3. Under **Root Directory**, click **Edit**.
4. Set to **`website`** (only that folder, no leading slash).
5. Save.
6. Go to **Deployments** → open the **⋯** on the latest deployment → **Redeploy** (or push a new commit).

After a successful deploy:
- **https://agency-website-jet-five.vercel.app/** → redirects to **/claude**
- **https://agency-website-jet-five.vercel.app/claude** → Claude variant (same as localhost:4321/claude)

---

## Deploy from your machine (CLI)

### One-time setup

1. **Log in to Vercel** (if needed):
   ```bash
   vercel login
   ```

2. **Link this app to the project** (from `website/`):
   ```bash
   cd website
   vercel link --project prj_qMaO25HySr1GMffwdFINukueXcYi
   ```
   When prompted, pick the right scope/team and confirm.

### Deploy to production

From the **`website`** directory:

```bash
cd website
npm run deploy
```

Or:

```bash
cd website
vercel deploy --prod
```

That builds the site and deploys it to the project above.

---

## After deploy

- **Production URL:** your project’s URL (e.g. `https://<project-name>.vercel.app`)
- **Claude variant:** **`/claude`** (e.g. `https://<project-name>.vercel.app/claude`)

---

## Build locally (same as Vercel)

```bash
cd website
npm install
npm run build
npm run preview
```

Output is in `website/dist/`.

---

## Summary

| Item           | Value        |
|----------------|--------------|
| Vercel project | `prj_qMaO25HySr1GMffwdFINukueXcYi` |
| Root for deploy | `website`   |
| Build          | `npm run build` |
| Output         | `dist`      |
| Claude path    | `/claude`   |
