# BlinkPay - Paytm Clone Frontend

A modern, responsive Paytm clone built with React, featuring secure money transfers, user authentication, and transaction history UI (feature yet to rollout).

## 🚀 Features

### Core Functionality

- **User Authentication**: Secure login/signup with email verification
- **Money Transfer**: Send money to other users with real-time balance updates
- **Balance Management**: View and manage account balance
- **Transaction History UI**: Ready interface for transaction tracking (feature yet to rollout)
- **User Search**: Find and transfer money to other users by name or email
- **Mobile Responsive**: Optimized for both desktop and mobile devices

### Technical Features

- **Modern UI**: Dark theme with Tailwind CSS styling
- **State Management**: Zustand for efficient state handling
- **Routing**: React Router for seamless navigation
- **API Integration**: Axios for backend communication
- **Real-time Updates**: Automatic balance refresh after transactions
- **Error Handling**: Comprehensive error management and user feedback

## 🛠️ Tech Stack

### Frontend

- **React 19.2.0** - Modern React with latest features
- **Vite** - Fast build tool and development server
- **Tailwind CSS 4.1.17** - Utility-first CSS framework
- **Zustand 5.0.9** - Lightweight state management
- **React Router 7.10.1** - Client-side routing
- **Axios 1.13.2** - HTTP client for API calls
- **React Spinners** - Loading indicators

### Development Tools

- **ESLint** - Code linting and formatting
- **Vite Plugin React** - React integration for Vite
- **TypeScript Types** - Type definitions for better development

## 📁 Project Structure

```
frontend/
├── src/
│   ├── components/
│   │   └── auth/
│   │       ├── signIn.jsx
│   │       └── signUp.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   └── TransactionHistory.jsx
│   ├── zustand/
│   │   └── authStore.js
│   ├── App.jsx
│   ├── main.jsx
│   ├── index.css
│   └── App.css
├── public/
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── README.md
```

## 🔧 Installation & Setup

### Prerequisites

- Node.js (v16 or higher)
- npm or pnpm
- Backend server running (see backend README)

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/xagar18/BlinkPay.git
   cd BlinkPay/frontend
   ```

2. **Install dependencies**

   ```bash
   # Using pnpm (recommended)
   pnpm install

   # Or using npm
   npm install
   ```

3. **Environment Setup**

   - Ensure backend is running on `http://localhost:3000`
   - Update API endpoints in `src/zustand/authStore.js` if needed

4. **Start development server**

   ```bash
   # Using pnpm
   pnpm dev

   # Or using npm
   npm run dev
   ```

5. **Build for production**

   ```bash
   # Using pnpm
   pnpm build

   # Or using npm
   npm run build
   ```

## 🎯 Key Components

### Authentication Store (`authStore.js`)

- User authentication state management
- API calls for login, signup, profile
- Money transfer functionality
- Balance fetching and updates

### Home Page (`Home.jsx`)

- Dashboard with balance display
- User search and money transfer interface
- Real-time balance updates after transactions
- Mobile-responsive design

### Transaction History (`TransactionHistory.jsx`)

- Transaction listing UI with sent/received indicators (feature yet to rollout)
- Date formatting and amount display components ready
- Loading states and empty states implemented
- Navigation back to home

### Authentication Components

- **SignIn**: User login with email/password
- **SignUp**: User registration with email verification
- Form validation and error handling

## 🔌 API Integration

### Authentication Endpoints

- `POST /api/v1/user/register` - User registration
- `POST /api/v1/user/login` - User login
- `GET /api/v1/user/profile` - Get user profile
- `GET /api/v1/user/logout` - User logout

### Payment Endpoints

- `GET /api/v1/payment/getPaymentDeatils/:email` - Get user balance
- `POST /api/v1/payment/moneyHandler/:senderEmail` - Send money
- `GET /api/v1/payment/getOtherUser/:email` - Get other users

## 🎨 UI/UX Features

### Design System

- **Dark Theme**: Modern dark color scheme
- **Responsive Design**: Mobile-first approach
- **Smooth Animations**: Hover effects and transitions
- **Loading States**: Spinners and skeleton screens
- **Error Handling**: User-friendly error messages

### Mobile Optimization

- Touch-friendly buttons and inputs
- Responsive typography and spacing
- Optimized modal dialogs
- Scrollable user lists
- Compact layouts for small screens

## 🚀 Deployment

### Build Process

```bash
# Create production build
npm run build

# Preview production build
npm run preview
```

### Environment Variables

Create a `.env` file for production:

```
VITE_API_BASE_URL=https://your-api-domain.com
```

## 🔒 Security Features

- **JWT Authentication**: Secure token-based auth
- **HTTP-Only Cookies**: Secure cookie storage
- **CORS Configuration**: Proper cross-origin handling
- **Input Validation**: Client-side form validation
- **Error Sanitization**: Safe error message display

## 📱 Mobile Responsiveness

The app is fully responsive with:

- Adaptive layouts for different screen sizes
- Touch-optimized interactions
- Readable typography scaling
- Optimized spacing and padding
- Mobile-specific UI adjustments

## 🐛 Troubleshooting

### Common Issues

1. **API Connection Issues**

   - Ensure backend is running on correct port
   - Check CORS configuration
   - Verify API endpoints in authStore.js

2. **Authentication Problems**

   - Clear browser cookies and localStorage
   - Check JWT token expiration
   - Verify user credentials

3. **Build Issues**
   - Clear node_modules and reinstall
   - Check Node.js version compatibility
   - Verify all dependencies are installed

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is private and proprietary.

## 👨‍💻 Developer

**Sagar** - [GitHub](https://github.com/xagar18)

---

**Note**: This is a frontend-only repository. The backend API must be running separately for full functionality.
