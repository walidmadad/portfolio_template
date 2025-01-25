# My Portfolio Template

A personal portfolio website showcasing my projects, skills, and experiences. Built using **React.js**, styled with **Tailwind CSS**, and includes an integrated email server for contact forms.

## Features
- **Interactive UI**: A clean and responsive design.
- **Home Section**: A hero section with a brief introduction.
- **About Section**: Details about my skills, education, and background.
- **Projects Section**: Displays my projects, including detailed views for specific projects.
- **Contact Section**: A functional contact form that uses a PHP backend (`send_email.php`) to handle email submissions.
- **Custom Assets**: Icons and images tailored to my personal branding.

## Tech Stack
- **Frontend**: React.js, Tailwind CSS
- **Email Integration**: PHP (`send_email.php`)
- **Icons**: Custom icons located in the `src/assets/icons` folder
- **Deployment**: Ready to deploy on platforms like Netlify, Vercel, or your custom server.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/react-portfolio.git](https://github.com/walidmadad/portfolio_template.git
   cd portfolio_template
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bsah
   npm start
   ```
  The application will run on http://localhost:3000.

## File Structure
   ```php
   portfolio/
├── public/
│   ├── favicon.webp       # Favicon for the website
│   ├── index.html         # Main HTML file
│   ├── manifest.json      # PWA configuration
│   └── robots.txt         # SEO settings
├── src/
│   ├── assets/            # Static assets like icons and images
│   │   ├── icons/         # Icon files and assets.js
│   │   └── myImg.png      # Personal image
│   ├── components/        # React components for various sections
│   │   ├── About.jsx      # About section
│   │   ├── AndroidGames.jsx  # Projects specific to Android games
│   │   ├── Contact.jsx    # Contact form section
│   │   ├── Footer.jsx     # Footer component
│   │   ├── Hero.jsx       # Hero section
│   │   ├── Navbar.jsx     # Navigation bar
│   │   ├── ProjectDetail1.jsx # Details for project 1
│   │   ├── ProjectDetail2.jsx # Details for project 2
│   │   ├── Projects.jsx   # Projects overview
│   │   └── Technologies.jsx # Technologies section
│   ├── App.js             # Main React application component
│   ├── index.js           # React entry point
│   ├── style.css          # Global CSS styles
│   ├── index.css          # Tailwind CSS configuration
│   ├── send_email.php     # PHP backend for contact form
│   └── tailwind.config.js # Tailwind configuration file
├── .gitignore             # Ignored files and folders
├── package.json           # Project dependencies and scripts
├── README.md              # Project documentation
└── build/                 # Production-ready build
   ```

## Deployment
To deploy the app, run:
   ```bash
   npm run build
   ```
This will generate a production-ready build in the build folder. You can upload this to any hosting service.

## Contact Form Integration
The contact form is handled using a PHP script (`send_email.php`). Ensure your server supports PHP, and configure the script as needed to send emails.

## Customization
- **Navbar**: Update links in `Navbar.jsx`.
- **Hero Section**: Modify introduction text in `Hero.jsx`.
- **Projects**: Add or edit projects in `Projects.jsx` and `ProjectDetail*.jsx`.
- **Contact Form**: Update backend email logic in `send_email.php`.

## Contributing
If you'd like to contribute, feel free to submit a pull request or open an issue.

## License
This project is licensed under the MIT License.

## Author
**Your Name**

- **GitHub**: [walidmadad](https://github.com/walidmadad)
- **LinkedIn**: [walid madad](https://www.linkedin.com/in/walid-madad-610828200/)
- **Portfolio**: [walid-madad.com](https://walid-madad.com/)
