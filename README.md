# Portfolio Victor Silva

A modern, multilingual personal portfolio website built with React and FastAPI, featuring a sleek design and responsive user interface.

## 🚀 Overview

This is a full-stack personal portfolio application showcasing Victor Silva's work as a Frontend/Mobile Developer. The project demonstrates expertise in React, Vue.js, React Native, Flutter, and modern web development practices.

### ✨ Key Features

- **Multilingual Support**: Portuguese and English translations
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Modern UI Components**: Built with Radix UI and custom components
- **Backend API**: FastAPI with MongoDB integration
- **Performance Optimized**: Fast loading times and smooth animations
- **Accessibility**: WCAG compliant components

## 🛠️ Tech Stack

### Frontend
- **Framework**: React 19.0.0
- **Styling**: Tailwind CSS with custom configurations
- **UI Components**: Radix UI primitives
- **Icons**: Lucide React
- **Routing**: React Router DOM
- **State Management**: React Context API
- **Build Tool**: Create React App with CRACO

### Backend
- **Framework**: FastAPI
- **Database**: MongoDB with Motor (async driver)
- **Authentication**: JWT with PassLib
- **Environment**: Python-dotenv
- **Testing**: Pytest
- **Code Quality**: Black, isort, flake8, mypy

### Development Tools
- **Package Manager**: npm/pip
- **Linting**: ESLint, Prettier
- **Testing**: Jest, React Testing Library, Pytest
- **Version Control**: Git

## 📁 Project Structure

```
portifolio-victor/
├── frontend/                 # React application
│   ├── public/              # Static assets
│   ├── src/
│   │   ├── components/      # React components
│   │   │   ├── ui/         # Reusable UI components
│   │   │   ├── AboutSection.jsx
│   │   │   ├── ContactSection.jsx
│   │   │   ├── ExperienceSection.jsx
│   │   │   ├── HeroSection.jsx
│   │   │   ├── ProjectsSection.jsx
│   │   │   ├── SkillsSection.jsx
│   │   │   └── ...
│   │   ├── contexts/        # React contexts
│   │   ├── hooks/          # Custom hooks
│   │   ├── lib/            # Utility functions
│   │   └── translations/   # i18n translations
│   ├── package.json
│   └── tailwind.config.js
├── backend/                 # FastAPI application
│   ├── server.py           # Main server file
│   ├── requirements.txt    # Python dependencies
│   └── .env               # Environment variables
└── tests/                  # Test files
```

## 🚦 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- Python (v3.8 or higher)
- MongoDB instance
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/VictorSilva27/portifolio-victor.git
   cd portifolio-victor
   ```

2. **Backend Setup**
   ```bash
   cd backend
   
   # Create virtual environment
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   
   # Install dependencies
   pip install -r requirements.txt
   
   # Configure environment variables
   cp .env.example .env
   # Edit .env with your MongoDB connection string and other settings
   ```

3. **Frontend Setup**
   ```bash
   cd frontend
   
   # Install dependencies
   npm install
   ```

### Running the Application

1. **Start the Backend Server**
   ```bash
   cd backend
   source venv/bin/activate
   uvicorn server:app --reload --host 0.0.0.0 --port 8000
   ```

2. **Start the Frontend Development Server**
   ```bash
   cd frontend
   npm start
   ```

3. **Access the Application**
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:8000
   - API Documentation: http://localhost:8000/docs

## 🎨 Features Detail

### Multilingual Support
The application supports both Portuguese and English languages with:
- Dynamic language switching
- Persistent language preference in localStorage
- Comprehensive translations for all content

### Component Architecture
- **Header**: Navigation with language selector
- **Hero Section**: Introduction and call-to-action
- **About Section**: Personal information and highlights
- **Skills Section**: Technical skills showcase
- **Projects Section**: Portfolio projects with details
- **Experience Section**: Professional experience timeline
- **Testimonials Section**: Client feedback
- **Contact Section**: Contact form and information
- **Footer**: Additional links and information

### Backend API Endpoints
- `GET /api/`: Health check endpoint
- `POST /api/status`: Create status check entry
- `GET /api/status`: Retrieve status checks
- CORS enabled for cross-origin requests

## 🧪 Testing

### Frontend Testing
```bash
cd frontend
npm test
```

### Backend Testing
```bash
cd backend
pytest
```

## 📝 Environment Variables

Create a `.env` file in the backend directory:

```env
MONGO_URL=mongodb://localhost:27017
DB_NAME=portfolio_db
JWT_SECRET_KEY=your-secret-key
API_KEY=your-api-key
```

## 🚀 Deployment

### Frontend Deployment
```bash
cd frontend
npm run build
# Deploy the build folder to your hosting service
```

### Backend Deployment
The FastAPI application can be deployed using:
- Docker containers
- Cloud platforms (AWS, GCP, Azure)
- VPS with nginx and gunicorn

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 About the Developer

Victor Silva is a Frontend/Mobile Developer with expertise in:
- **Frontend**: React, Vue.js, JavaScript, TypeScript
- **Mobile**: React Native, Flutter
- **Backend**: Node.js, Python, FastAPI
- **Database**: MongoDB, PostgreSQL, MySQL
- **Tools**: Git, Docker, AWS, Firebase

## 📞 Contact

- **Email**: [victorsilva2@gmail.com](mailto:victorsilva2@gmail.com)
- **LinkedIn**: [Victor Silva](https://linkedin.com/in/victor-silva)
- **GitHub**: [VictorSilva27](https://github.com/VictorSilva27)
- **Portfolio**: [Live Demo](https://your-portfolio-url.com)

---

⭐ If you found this project helpful, please give it a star!
