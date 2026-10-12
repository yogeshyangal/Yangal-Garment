# Yangal Garment Website

A complete B2B garment manufacturing website for Yangal Garment, built with Laravel, React, Vite, and Tailwind CSS.

## Technology Stack

- **Backend**: PHP 8.2+, Laravel 11
- **Frontend**: React, Vite, Tailwind CSS
- **Database**: MySQL
- **Authentication**: Laravel Auth with Role-Based Access Control

## Features

### Public Website
- Responsive homepage with hero section
- Product categories and catalog
- Custom printing information
- Bulk order enquiry form with file uploads
- Blog system
- Contact information
- Mobile-first design

### Admin Panel
- Dashboard with analytics
- Product management (CRUD)
- Category management
- Bulk pricing tiers
- Enquiry management with status tracking
- Customer management
- Blog CMS
- Website settings management
- Role-based access control (Super Admin, Product Manager, Content Manager, Sales Manager)

## Installation Instructions

### Prerequisites
- PHP 8.2 or higher
- Composer
- Node.js and npm
- MySQL
- Git

### Step 1: Install Dependencies

```bash
# Install PHP dependencies
composer install

# Install Node dependencies
npm install
```

### Step 2: Environment Configuration

```bash
# Copy environment file
cp .env.example .env

# Generate application key
php artisan key:generate
```

Configure your `.env` file with your database credentials:

```env
APP_NAME="Yangal Garment"
APP_ENV=local
APP_KEY=
APP_DEBUG=true
APP_URL=http://localhost

DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=yangal_garment
DB_USERNAME=your_username
DB_PASSWORD=your_password

MAIL_MAILER=smtp
MAIL_HOST=smtp.mailtrap.io
MAIL_PORT=2525
MAIL_USERNAME=null
MAIL_PASSWORD=null
MAIL_ENCRYPTION=null
MAIL_FROM_ADDRESS="info@yangalgarment.com"
MAIL_FROM_NAME="${APP_NAME}"
```

### Step 3: Database Setup

```bash
# Create database
mysql -u root -p
CREATE DATABASE yangal_garment;
exit;

# Run migrations
php artisan migrate

# Seed database (optional)
php artisan db:seed
```

### Step 4: Build Frontend Assets

```bash
# Development
npm run dev

# Production build
npm run build
```

### Step 5: Start Development Server

```bash
php artisan serve
```

Visit `http://localhost:8000` in your browser.

## Database Schema

### Tables Created

- `users` - Admin users with authentication
- `roles` - User roles (Super Admin, Product Manager, Content Manager, Sales Manager)
- `role_user` - Many-to-many relationship between users and roles
- `permissions` - System permissions
- `categories` - Product categories
- `products` - Product catalog
- `product_images` - Product image gallery
- `pricing_tiers` - Quantity-based pricing tiers
- `customers` - Customer information
- `enquiries` - Bulk order enquiries
- `enquiry_files` - Uploaded files for enquiries
- `blog_categories` - Blog categories
- `blogs` - Blog posts
- `settings` - Website configuration settings

## Security Features

- CSRF protection
- XSS protection
- SQL injection protection (via Eloquent ORM)
- Secure password hashing
- File upload validation
- Role-based access control
- Rate limiting
- Secure session management

## Deployment on Hostinger Premium

### Pre-deployment Checklist

1. **Build frontend assets locally:**
   ```bash
   npm run build
   ```

2. **Configure production `.env`:**
   ```env
   APP_ENV=production
   APP_DEBUG=false
   ```

3. **Upload files:**
   - Upload all files via SFTP or File Manager
   - Exclude: `node_modules`, `.git`, `.env.local`

4. **Set permissions:**
   ```bash
   chmod 755 storage
   chmod 755 bootstrap/cache
   ```

5. **Import database:**
   - Create MySQL database in Hostinger panel
   - Import SQL export from local

6. **Run optimizations:**
   ```bash
   php artisan config:cache
   php artisan route:cache
   php artisan view:cache
   ```

7. **Configure document root:**
   - Set to `/public` directory

## Admin Access

After installation, create an admin user:

```bash
php artisan tinker
```

```php
use App\Models\User;
use App\Models\Role;

$user = User::create([
    'name' => 'Admin',
    'email' => 'admin@yangalgarment.com',
    'password' => bcrypt('your_secure_password')
]);

$role = Role::firstOrCreate(['slug' => 'super-admin'], [
    'name' => 'Super Admin',
    'slug' => 'super-admin'
]);

$user->roles()->attach($role);
```

Access admin panel at: `/admin`

## Development Status

### Completed
- ✅ Project architecture (Laravel + React + Vite)
- ✅ Database schema and migrations
- ✅ Database models
- ✅ Homepage UI components (Navbar, Hero, Trust Indicators, Product Categories, Who We Serve, How It Works, Why Choose Us, Bulk Quote CTA, Footer)

### In Progress
- 🔄 Product system implementation
- 🔄 Enquiry system with file uploads
- 🔄 Authentication and authorization
- 🔄 Admin panel
- 🔄 Email notifications

### Pending
- ⏳ Product management (admin)
- 📋 Enquiry management (admin)
- 📋 Blog CMS
- 📋 Website settings
- 📋 Security hardening
- 📋 Performance optimization
- 📋 Deployment documentation

## Support

For issues or questions, please contact the development team.

## License

Proprietary - All rights reserved to Yangal Garment.
