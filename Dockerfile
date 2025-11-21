FROM php:8.2-apache

# Install MySQL extension
RUN docker-php-ext-install mysqli

# Enable Apache rewrite (optional)
RUN a2enmod rewrite

# Copy all project files to Apache root
COPY . /var/www/html/

# Set correct permissions
RUN chown -R www-data:www-data /var/www/html

# Expose port 80
EXPOSE 80
