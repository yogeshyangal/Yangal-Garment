# Hostinger Deployment Guide

This guide provides step-by-step instructions for deploying the Yangal Garment website to Hostinger Premium Web Hosting.

## Prerequisites

- Hostinger Premium Web Hosting account
- SSH access (if available) or FTP/SFTP access
- MySQL database created in Hostinger panel
- PHP 8.2 or higher
- Composer installed locally
- Node.js and npm installed locally

## Step 1: Build Frontend Assets Locally

Before uploading to Hostinger, build the production assets:

```bash
cd yangal-garment
npm install
npm run build
```

This will create the `public/build/` directory with compiled CSS and JavaScript.

## Step 2: Configure Production Environment

Copy `.env.example` to `.env` and configure for production:

```bash
cp .env.example .env
```

Edit `.env` with your production settings:

```env
APP_NAME="Yangal Garment"
APP_ENV=production
APP_KEY=your-generated-key
APP_DEBUG=false
APP_URL=https://yourdomain.com

DB_CONNECTION=mysql
DB_HOST=localhost
DB_PORT=3306
DB_DATABASE=your_database_name
DB_USERNAME=your_database_user
DB_PASSWORD=your_database_password

MAIL_MAILER=smtp
MAIL_HOST=smtp.hostinger.com
MAIL_PORT=587
MAIL_USERNAME=your-email@yourdomain.com
MAIL_PASSWORD=your-email-password
MAIL_ENCRYPTION=tls
MAIL_FROM_ADDRESS=info@yourdomain.com
MAIL_FROM_NAME="${APP_NAME}"

FILESYSTEM_DISK=public
```

**Important:** Never commit `.env` to version control.

## Step 3: Generate Application Key

```bash
php artisan key:generate
```

## Step 4: Upload Files to Hostinger

### Option A: Using File Manager (Hostinger Panel)

1. Log in to Hostinger panel
2. Go to File Manager
3. Navigate to `public_html` (or your domain folder)
4. Upload all files EXCEPT:
   - `node_modules/`
   - `.git/`
   - `.env.local`
   - `vendor/` (will be installed on server)

### Option B: Using SFTP/FTP

Use FileZilla or similar SFTP client:

```
Host: your-server.hostinger.com
Username: your-ftp-username
Password: your-ftp-password
Port: 21 (FTP) or 22 (SFTP)
```

Upload all files to `public_html` or your domain folder.

## Step 5: Install Composer Dependencies on Server

### Via SSH (Recommended)

```bash
ssh your-username@your-server.hostinger.com
cd public_html
composer install --no-dev --optimize-autoloader
```

### Via File Manager/FTP

If SSH is not available, you may need to:
1. Run `composer install --no-dev` locally
2. Upload the `vendor/` folder to the server

## Step 6: Create MySQL Database

1. Log in to Hostinger panel
2. Go to Databases → MySQL Databases
3. Create a new database:
   - Database name: `yangal_garment`
   - Username: `yangal_user`
   - Password: [generate strong password]
4. Note down the database credentials

## Step 7: Run Database Migrations

### Via SSH

```bash
cd public_html
php artisan migrate --force
```

### Alternative: Import SQL Export

If SSH is not available:
1. Export your local database: `php artisan migrate --force` locally
2. Use phpMyAdmin in Hostinger panel to import the SQL file

## Step 8: Set File Permissions

### Via SSH

```bash
cd public_html
chmod -R 755 storage
chmod -R 755 bootstrap/cache
chown -R www-data:www-data storage
chown -R www-data:www-data bootstrap/cache
```

### Via File Manager

1. Right-click on `storage` folder → Permissions → 755
2. Right-click on `bootstrap/cache` folder → Permissions → 755

## Step 9: Configure Document Root

1. Go to Hostinger panel → Domains
2. Select your domain
3. Set document root to `/public_html/public` (not `/public_html`)

This ensures the public folder is the web root for security.

## Step 10: Configure HTTPS

1. Go to Hostinger panel → Domains
2. Select your domain
3. Enable Let's Encrypt SSL (free)
4. Force HTTPS redirect

## Step 11: Run Production Optimizations

```bash
php artisan config:cache
php artisan route:cache
php artisan view:cache
```

## Step 12: Create Admin Account

### Via Tinker (SSH)

```bash
php artisan tinker
```

```php
use App\Models\User;
use App\Models\Role;

$user = User::create([
    'name' => 'Admin',
    'email' => 'admin@yourdomain.com',
    'password' => bcrypt('your_secure_password')
]);

$role = Role::firstOrCreate(['slug' => 'super-admin'], [
    'name' => 'Super Admin',
    'slug' => 'super-admin'
]);

$user->roles()->attach($role);
exit
```

### Alternative: Via Database

1. Go to phpMyAdmin
2. Insert into `users` table with hashed password
3. Insert into `roles` table for super-admin
4. Insert into `role_user` table to link user and role

## Step 13: Test the Website

1. Visit `https://yourdomain.com`
2. Check homepage loads correctly
3. Test mobile responsiveness
4. Test product pages
5. Test quote form (without submitting)
6. Visit `https://yourdomain.com/admin`
7. Test admin login
8. Test admin dashboard

## Step 14: Test Email Configuration

1. Go to admin panel → Settings
2. Configure SMTP settings
3. Send a test email
4. Verify email is received

## Step 15: Configure Storage Link (if needed)

If you're storing files in storage/app/public:

```bash
php artisan storage:link
```

This creates a symbolic link from `public/storage` to `storage/app/public`.

## Troubleshooting

### 500 Internal Server Error

- Check `.env` file exists and is configured correctly
- Check file permissions on `storage` and `bootstrap/cache`
- Check PHP version is 8.2 or higher
- Check error logs in `storage/logs/laravel.log`

### Database Connection Error

- Verify database credentials in `.env`
- Verify database exists in Hostinger panel
- Check MySQL is running
- Try `php artisan config:clear` and `php artisan cache:clear`

### Assets Not Loading

- Ensure `npm run build` was run locally
- Check `public/build/` directory exists
- Verify `public/build/manifest.json` exists
- Clear browser cache

### Admin Login Not Working

- Verify admin user exists in database
- Check password is correctly hashed
- Try resetting password via tinker
- Check session configuration

## Security Checklist

- [ ] `APP_DEBUG=false` in production `.env`
- [ ] Strong database password
- [ ] Strong admin password
- [ ] HTTPS enabled
- [ ] Document root set to `/public` folder
- [ ] File permissions set correctly (755 for storage)
- [ ] `.env` file not accessible via web
- [ ] `.git` directory not uploaded
- [ ] `node_modules` not uploaded
- [ ] API routes protected with authentication
- [ ] Rate limiting enabled
- [ ] CSRF protection enabled
- [ ] SQL injection protection (via Eloquent)

## Performance Optimization

- [ ] Config cache enabled (`php artisan config:cache`)
- [ ] Route cache enabled (`php artisan route:cache`)
- [ ] View cache enabled (`php artisan view:cache`)
- [ ] Images optimized
- [ ] Gzip compression enabled (via .htaccess)
- [ ] Browser caching enabled (via .htaccess)

## Backup Strategy

Hostinger provides automatic backups. Additionally:

1. Regular database exports via phpMyAdmin
2. Download backups to local storage
3. Keep copies of `.env` file (without passwords)
4. Document any custom configurations

## Required PHP Extensions

Ensure these extensions are enabled in Hostinger PHP configuration:

- OpenSSL
- PDO
- Mbstring
- Tokenizer
- XML
- Ctype
- JSON
- BCMath
- Fileinfo
- GD (for image processing)

## Required Composer Packages

The project requires these packages (installed via `composer install`):

- `laravel/framework`
- `laravel/tinker`
- `laravel/vite-plugin`

## Required NPM Packages

The project requires these packages (installed via `npm install`):

- `react`
- `react-dom`
- `@vitejs/plugin-react`
- `tailwindcss`
- `autoprefixer`
- `postcss`

## Support

For issues specific to Hostinger:
- Hostinger Knowledge Base: https://support.hostinger.com
- Hostinger Live Chat: Available in panel

For Laravel-specific issues:
- Laravel Documentation: https://laravel.com/docs

## Maintenance

### Regular Tasks

1. Monitor disk usage (especially storage/uploads)
2. Check error logs regularly
3. Update Laravel security patches
4. Backup database before major changes
5. Monitor SSL certificate expiry

### Updating the Application

1. Test changes locally
2. Run `npm run build` locally
3. Upload changed files via SFTP
4. Run migrations: `php artisan migrate --force`
5. Clear caches: `php artisan cache:clear`
6. Test thoroughly

## Contact

For deployment issues or questions, contact the development team.
