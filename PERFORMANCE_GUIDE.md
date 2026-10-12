# Performance Optimization Guide

This guide provides performance optimization strategies for the Yangal Garment website.

## Database Optimization

### Indexes

Database migrations already include appropriate indexes:
- Foreign key columns are indexed
- Unique columns have unique constraints
- Frequently queried columns should be indexed

### Query Optimization

Use eager loading to prevent N+1 queries:

```php
// Bad - N+1 queries
$products = Product::all();
foreach ($products as $product) {
    echo $product->category->name;
}

// Good - Single query with eager loading
$products = Product::with('category')->get();
foreach ($products as $product) {
    echo $product->category->name;
}
```

### Query Caching

Cache frequently accessed data:

```php
$products = Cache::remember('products', 86400, function () {
    return Product::with('category', 'images')->get();
});
```

## Frontend Optimization

### Image Optimization

1. **Use WebP format** where supported
2. **Lazy load images** below the fold
3. **Compress images** before upload
4. **Use responsive images** with srcset

### CSS/JS Optimization

Vite automatically:
- Minifies CSS and JavaScript in production
- Bundles assets efficiently
- Tree-shakes unused code

### Browser Caching

The `.htaccess` file includes browser caching rules:
- Images: 1 year
- CSS/JS: 1 month

## Caching Strategy

### Laravel Cache

Configure cache in `.env`:

```env
CACHE_DRIVER=database
CACHE_ENABLED=true
```

Cache frequently accessed data:
- Products: 24 hours
- Categories: 24 hours
- Settings: 24 hours
- Blogs: 1 hour

### HTTP Caching

Use ETags and Last-Modified headers:

```php
$response->header('Cache-Control', 'public, max-age=3600');
$response->header('ETag', md5($content));
```

## Server Optimization

### PHP Optimization

Ensure OPcache is enabled in php.ini:

```ini
opcache.enable=1
opcache.memory_consumption=128
opcache.max_accelerated_files=4000
opcache.revalidate_freq=60
```

### Gzip Compression

Already configured in `.htaccess`:
- Compresses HTML, CSS, JavaScript, JSON
- Reduces bandwidth usage

### HTTP/2

Enable HTTP/2 on Hostinger for:
- Multiplexing
- Server push
- Header compression

## Database Connection Pooling

For high traffic, consider:
- Connection pooling
- Read replicas
- Database caching layer

## CDN Integration (Optional)

If using a CDN:

```env
CDN_ENABLED=true
CDN_URL=https://cdn.yourdomain.com
CDN_ASSETS_URL=https://cdn.yourdomain.com/assets
```

## Monitoring Performance

### Key Metrics to Monitor

- Page load time (< 3 seconds)
- Time to First Byte (< 1 second)
- First Contentful Paint (< 1.5 seconds)
- Time to Interactive (< 3.5 seconds)
- Database query time
- Memory usage

### Tools

- Laravel Telescope (development)
- Laravel Debugbar (development)
- New Relic (production)
- Google PageSpeed Insights
- GTmetrix

## Optimization Commands

### Clear All Caches

```bash
php artisan cache:clear
php artisan config:clear
php artisan route:clear
php artisan view:clear
```

### Optimize for Production

```bash
php artisan config:cache
php artisan route:cache
php artisan view:cache
php artisan optimize
```

### Database Optimization

```bash
php artisan db:optimize
```

## Image Optimization Tips

1. **Before Upload**:
   - Compress images using tools like TinyPNG
   - Use appropriate dimensions (max 1920x1080)
   - Save in WebP format when possible

2. **In Code**:
   - Use lazy loading: `loading="lazy"`
   - Use responsive images with srcset
   - Serve WebP with fallback to JPEG/PNG

3. **Storage**:
   - Store images in optimized format
   - Consider using image CDN like Cloudinary

## API Optimization

### Pagination

Always paginate large datasets:

```php
$products = Product::paginate(15);
```

### Select Only Needed Columns

```php
// Bad - Selects all columns
$products = Product::all();

// Good - Selects only needed columns
$products = Product::select('id', 'name', 'slug', 'price_min')->get();
```

### Chunk Large Operations

```php
Product::chunk(100, function ($products) {
    foreach ($products as $product) {
        // Process product
    }
});
```

## Queue Heavy Operations

For operations that take time:
- Email sending
- Image processing
- Data exports
- Large imports

Use Laravel queues:

```env
QUEUE_CONNECTION=database
```

## Hostinger-Specific Optimization

### PHP Configuration

In Hostinger panel:
- Enable OPcache
- Increase memory_limit to 256M
- Set max_execution_time to 300
- Enable zlib.output_compression

### MySQL Configuration

- Optimize tables regularly
- Use InnoDB engine
- Enable query cache
- Configure proper indexes

### File Permissions

Ensure correct permissions:
- storage: 755
- bootstrap/cache: 755
- public/uploads: 755

## Regular Maintenance

### Weekly
- Clear cache
- Check slow queries
- Monitor disk usage
- Review error logs

### Monthly
- Optimize database tables
- Review and update indexes
- Analyze performance metrics
- Update dependencies

### Quarterly
- Full performance audit
- Database optimization
- Review caching strategy
- Update PHP version if available

## Troubleshooting

### Slow Page Loads

1. Check database queries (Laravel Telescope)
2. Enable query logging
3. Check for N+1 queries
4. Review cache hit rate
5. Check server resources

### High Memory Usage

1. Check for memory leaks
2. Review large datasets
3. Check query results
4. Optimize eager loading
5. Increase PHP memory limit

### Database Slowdowns

1. Check query execution time
2. Review slow query log
3. Add missing indexes
4. Optimize complex queries
5. Consider query caching

## References

- Laravel Performance: https://laravel.com/docs/performance
- Web.dev Performance: https://web.dev/performance/
- PHP OPcache: https://www.php.net/manual/en/book.opcache.php
- MySQL Optimization: https://dev.mysql.com/doc/refman/8.0/en/optimization.html
