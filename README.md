# GUIDE LINE

## DOWNLOAD PROJECT
`
    git clone https://github.com/HoangVu22/Capstone_2-C2SE.20-CJB.git
`

## TO START TESTING FRONTEND

- Install extension `Live Server` for VSCode
- Open a file .html and right click on it, choose `Open With Live Server`

## TO START BACKEND MAKE SURE THAT YOU HAVE PHP AND COMPOSER
<a href="https://www.apachefriends.org/download_success.html">PHP</a>, 
<a href="https://getcomposer.org/">COMPOSER</a> 

In xampp start Apache and Mysql <br>
Go to /Capstone_2_C2SE.20-CJB by terminal and run:

```bash
cd BackEnd
```

```bash
composer update
```

```bash
cp .env.example .env
```

```bash
php artisan key:generate
```

```bash
php artisan migrate:refresh --seed
```

```bash
php artisan serve
```
