# BlinkPay - Full Stack Paytm Clone

A comprehensive Paytm clone built with modern web technologies, featuring secure user authentication, real-time money transfers, and transaction management.

## 📋 Project Overview

BlinkPay is a full-stack financial application that replicates Paytm's core functionality. Users can register, login, send money to other users, view their balance, and track transaction history.

## 🏗️ Architecture

### Tech Stack

#### Frontend

- **React 19.2.0** with Vite for fast development
- **Tailwind CSS 4.1.17** for modern UI design
- **Zustand** for state management
- **React Router** for navigation
- **Axios** for API communication

#### Backend

- **Node.js** with Express.js framework
- **MongoDB** for database (inferred from project structure)
- **JWT** for authentication
- **bcrypt** for password hashing
- **Nodemailer** for email services
- **Cookie-parser** for secure cookie handling

## 🚀 Features Implemented

### ✅ Completed Features

#### User Management

- User registration with email verification
- Secure login/logout system
- JWT-based authentication
- Password reset functionality
- User profile management

#### Payment System

- Real-time money transfers between users
- Balance management and display
- Transaction validation and security
- Payment history tracking

#### UI/UX

- Modern dark theme design
- Fully responsive (mobile + desktop)
- Smooth animations and transitions
- Loading states and error handling
- Search functionality for users

### 🔄 Current Status

#### Frontend ✅

- Complete user authentication flow
- Money transfer interface with real-time updates
- Transaction history page UI (feature yet to rollout)
- Mobile-responsive design
- State management with Zustand

#### Backend ✅

- RESTful API endpoints
- User authentication and authorization
- Payment processing logic
- Database integration
- Email services for verification

## 📁 Project Structure

```
BlinkPay/
├── backend/
│   ├── controller/
│   │   ├── payment.controller.js    # Payment logic
│   │   └── user.controller.js       # User management
│   ├── middleware/
│   │   └── auth.middleware.js       # JWT authentication
│   ├── model/
│   │   └── User.model.js           # User schema
│   ├── routes/
│   │   ├── payment.routes.js       # Payment endpoints
│   │   └── user.routes.js          # User endpoints
│   ├── services/
│   │   ├── addInitialMoney.js      # Initial balance setup
│   │   └── mailService.js          # Email functionality
│   ├── utils/
│   │   └── db.js                   # Database connection
│   ├── index.js                    # Main server file
│   └── package.json
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   └── auth/
│   │   │       ├── signIn.jsx      # Login component
│   │   │       └── signUp.jsx      # Registration component
│   │   ├── pages/
│   │   │   ├── Home.jsx            # Main dashboard
│   │   │   └── TransactionHistory.jsx # Transaction history
│   │   ├── zustand/
│   │   │   └── authStore.js        # State management
│   │   ├── App.jsx                 # Main app component
│   │   └── main.jsx                # App entry point
│   └── package.json
└── README.md
```

## 🔧 API Endpoints

### Authentication Routes (`/api/v1/user`)

- `POST /register` - User registration
- `GET /verify/:token` - Email verification
- `POST /login` - User login
- `GET /profile` - Get user profile (protected)
- `GET /logout` - User logout (protected)
- `POST /reset/:token` - Password reset

### Payment Routes (`/api/v1/payment`)

- `GET /getPaymentDeatils/:email` - Get user balance (protected)
- `POST /moneyHandler/:senderEmail` - Send money (protected)
- `GET /getOtherUser/:email` - Get other users (protected)

## 🛠️ Setup Instructions

### Prerequisites

- Node.js (v16+)
- MongoDB database
- Email service (for verification)

### Backend Setup

1. **Navigate to backend directory**

   ```bash
   cd backend
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   pnpm install
   ```

3. **Environment Configuration**
   Create `.env` file:

   ```env
   PORT=3000
   MONGODB_URI=mongodb://localhost:27017/blinkpay
   JWT_SECRET=your_jwt_secret
   BASEURL=http://localhost:5173
   EMAIL_USER=your_email@gmail.com
   EMAIL_PASS=your_app_password
   ```

4. **Start the server**
   ```bash
   npm start
   # or for development
   npm run dev
   ```

### Frontend Setup

1. **Navigate to frontend directory**

   ```bash
   cd frontend
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   pnpm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   # or
   pnpm dev
   ```

## 🔒 Security Features

- **JWT Authentication** with HTTP-only cookies
- **Password Hashing** using bcrypt
- **CORS Protection** with proper origin validation
- **Input Validation** on both client and server
- **Email Verification** for account activation
- **Protected Routes** with middleware authentication

## 📱 Responsive Design

The application is fully responsive with:

- Mobile-first approach
- Adaptive layouts for all screen sizes
- Touch-friendly interactions
- Optimized typography scaling
- Responsive modal dialogs

## 🎯 Key Achievements

### Technical Implementation

1. **Full-Stack Development**: Complete MERN stack application
2. **Real-time Updates**: Balance updates after transactions
3. **Secure Authentication**: JWT-based auth system
4. **Database Design**: Proper schema design for users and payments
5. **API Design**: RESTful API with proper error handling
6. **State Management**: Efficient client-side state handling
7. **UI/UX Design**: Modern, responsive interface

### Business Logic

1. **Payment Processing**: Secure money transfer system
2. **Balance Management**: Real-time balance tracking
3. **Transaction History**: Complete audit trail
4. **User Management**: Registration and authentication flow
5. **Email Integration**: Automated email verification

## 🚧 Future Enhancements

### Planned Features

- **Real Transaction History**: Backend integration for transaction data
- **Payment Methods**: Multiple payment options (UPI, cards, etc.)
- **Notifications**: Real-time transaction notifications
- **Admin Dashboard**: User and transaction management
- **Analytics**: Transaction analytics and insights
- **Multi-currency Support**: Support for different currencies
- **PWA Features**: Progressive Web App capabilities

### Technical Improvements

- **Unit Testing**: Comprehensive test coverage
- **API Documentation**: Swagger/OpenAPI documentation
- **Caching**: Redis for performance optimization
- **Rate Limiting**: API rate limiting for security
- **Logging**: Structured logging system
- **Monitoring**: Application performance monitoring

## 🐛 Known Issues & Fixes

### Current Issues

1. **Transaction History**: Currently uses dummy data, needs backend integration
2. **Error Handling**: Some edge cases need better error handling
3. **Loading States**: Some components lack loading indicators

### Recent Fixes

1. **Balance Updates**: Fixed real-time balance refresh after transactions
2. **Mobile Responsiveness**: Improved mobile layout and interactions
3. **User Fetching**: Fixed user list loading on navigation

## 📊 Database Schema

### User Model

```javascript
{
  name: String,
  email: String,
  password: String, // hashed
  isVerified: Boolean,
  balance: Number,
  createdAt: Date,
  updatedAt: Date
}
```

### Transaction Model (Future)

```javascript
{
  sender: ObjectId,
  receiver: ObjectId,
  amount: Number,
  type: String, // 'sent' | 'received'
  timestamp: Date,
  status: String // 'completed' | 'pending' | 'failed'
}
```

## 🚀 Deployment

### Production Checklist

- [ ] Environment variables configured
- [ ] Database connection established
- [ ] Email service configured
- [ ] SSL certificates for HTTPS
- [ ] CORS origins updated
- [ ] Build optimization completed
- [ ] Security audit performed

### Deployment Platforms

- **Frontend**: Vercel, Netlify, or AWS S3 + CloudFront
- **Backend**: Heroku, Railway, or AWS EC2
- **Database**: MongoDB Atlas or AWS DocumentDB

## 👨‍💻 Developer

**Sagar** - [GitHub](https://github.com/xagar18)

## 📄 License

This project is developed for educational and portfolio purposes.

---

**Status**: ✅ Core functionality complete | 🚧 Transaction history feature yet to rollout
