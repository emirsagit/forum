# Laravel Forum Website

> This forum has been built for Turkey's Parkinson Desiess patients. It's a non-profit organization. Patients and patients' caregivers can share their comments, ideas, happiness.

## Built With

- HTML, CSS, PHP, JavaScript
- Laravel, Vue.js, Tailwind

## Features

- **Users can create threads**
- **Users can reply threads**
- **Thread owner can mark a thread as a best reply**
- **Admin can do CRUD operations on threads and replies**
- **Admin can add categories for threads**
- **Admin can lock threads**
- **Threads can be filtered by categories, popular, newest, not-replied**
- **Admin can block users**
- **CMS**: Thanks to editor.js, block-styled editor.

## Live Demo

[Live Demo Link](https://www.parkinsonnedir.com/)

## What I learned

- Designing database
- It's the first project I used Laravel and Vue together. It helps me to understand Vue.
- If I create this project in today's knowledge, I definitely separate API and frontend.
- Better understanding of Laravel
- Understand polymorphic relationships
- Better understanding relational database

## Getting Started

Follow the steps below in order to run the project.

1. Run the following commands from the terminal.

`git clone https://github.com/emirsagit/forum.git`

`cd forum`

`composer install`

`npm install`

`php artisan key:generate`

`cp .env.exemple .env`

2. Open the .env file. Enter your database information correctly.

3. Run `php artisan migrate --seed`.

4. Run `php artisan serve`.

5. Go to config/admin.php and add your email to array.

6. Go to /register page and register yourself according to admin email settings.

7. Go to /admin page and manage your site.

## Authors

👤 **Emir Sağıt**

- GitHub: [@emirsagit](https://github.com/emirsagit)
- Twitter: [@emirsagit](https://twitter.com/emirsagit)
- LinkedIn: [Emir Sağıt](https://www.linkedin.com/in/emir-sa%C4%9F%C4%B1t-633035188/)

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

Feel free to check the [issues page](../../issues/).

## Show your support

Give a ⭐️ if you like this project!

## 📝 License

This project is [MIT](./MIT.md) licensed.
