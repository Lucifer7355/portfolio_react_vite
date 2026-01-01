# Custom Domain Setup Guide for GitHub Pages

## Step 1: Purchase a Domain

Recommended domain registrars:
- **Namecheap** (https://www.namecheap.com) - Good prices, easy to use
- **Google Domains** (https://domains.google) - Simple interface
- **Cloudflare** (https://www.cloudflare.com/products/registrar/) - Free privacy protection
- **GoDaddy** (https://www.godaddy.com) - Popular option

## Step 2: Configure DNS Records

After purchasing your domain, configure these DNS records:

### For Root Domain (e.g., `ankitsrivastava.dev`):

**A Records** - Point to GitHub Pages IPs:
```
Type: A
Name: @
Value: 185.199.108.153
TTL: 3600

Type: A
Name: @
Value: 185.199.109.153
TTL: 3600

Type: A
Name: @
Value: 185.199.110.153
TTL: 3600

Type: A
Name: @
Value: 185.199.111.153
TTL: 3600
```

**CNAME Record** - For www subdomain:
```
Type: CNAME
Name: www
Value: lucifer7355.github.io
TTL: 3600
```

### For Subdomain (e.g., `portfolio.ankitsrivastava.dev`):

**CNAME Record**:
```
Type: CNAME
Name: portfolio (or @ if using root)
Value: lucifer7355.github.io
TTL: 3600
```

## Step 3: Configure GitHub Pages

1. Go to your repository: https://github.com/Lucifer7355/portfolio_react_vite
2. Click **Settings** → **Pages**
3. Under **Custom domain**, enter your domain (e.g., `ankitsrivastava.dev`)
4. Check **Enforce HTTPS** (recommended)
5. Click **Save**

## Step 4: Update Vite Configuration

If using a **root domain** (e.g., `ankitsrivastava.dev`):
- Change `base: '/portfolio_react_vite/'` to `base: '/'` in `vite.config.js`

If using a **subdomain** (e.g., `portfolio.ankitsrivastava.dev`):
- Keep `base: '/portfolio_react_vite/'` or change to match your subdomain path

## Step 5: Create CNAME File

GitHub will automatically create a `CNAME` file in your repository. This file should contain your domain name.

If it doesn't create automatically, create it manually:
1. Create a file named `CNAME` (no extension) in the `public` folder
2. Add your domain name inside (e.g., `ankitsrivastava.dev`)
3. Commit and push the changes

## Step 6: Update and Redeploy

After configuring the domain:

```bash
# Update vite.config.js if needed (change base path)
# Then commit and deploy:
git add .
git commit -m "Configure custom domain"
git push
npm run deploy
```

## Step 7: Wait for DNS Propagation

DNS changes can take 24-48 hours to propagate, but usually happen within a few hours.

Check DNS propagation: https://www.whatsmydns.net

## Troubleshooting

- **Domain not working?** Wait 24-48 hours for DNS propagation
- **HTTPS not working?** Make sure "Enforce HTTPS" is enabled in GitHub Pages settings
- **Images not loading?** Check that `vite.config.js` base path matches your domain setup
- **404 errors?** Verify the CNAME file exists and contains the correct domain

## Recommended Domain Names

Based on your name (Ankit Kumar Srivastava):
- `ankitsrivastava.dev` ⭐ (Professional)
- `ankitkumar.dev` ⭐ (Short & memorable)
- `ankitdev.io` (Tech-focused)
- `ankitportfolio.dev` (Clear purpose)
- `ankitcodes.dev` (Developer-focused)

