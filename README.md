# 📦 Parcel Management Website

![Homepage Screenshot](https://i.ibb.co.com/fYkgp9Dg/Screenshot-2025-02-05-160359.png)

## 🚀 Project Overview
**Parcel Management** is a modern, role-based system designed to streamline parcel bookings and deliveries. The platform supports three user roles:
- **User:** Can book parcels.
- **Admin:** Manages all bookings, assigns delivery personnel.
- **Delivery Man:** Delivers assigned parcels.

Built using **React, Vite, Tailwind CSS, Firebase, and TanStack Query**, this platform provides an optimized and interactive experience.

## 🛠 Technologies Used
This project utilizes the latest web technologies:
- **Frontend Framework:** React with Vite
- **Styling:** Tailwind CSS, DaisyUI
- **Routing:** React Router DOM
- **State Management & Data Fetching:** TanStack Query, Axios
- **UI Enhancements:** Lucide React, React Icons, React Spinners
- **Charts & Visualization:** Recharts, React ApexCharts
- **Date & Maps:** React Date Picker, React Leaflet, Leaflet, React Map GL
- **Animations:** Lottie React
- **Backend Services:** Firebase for authentication and database management
- **Payment Processing:** Stripe (React Stripe JS)

## 🌟 Core Features
✅ **User Role Management:** Separate dashboards for users, admins, and delivery personnel.  
✅ **Parcel Booking System:** Users can book and track parcels in real time.  
✅ **Admin Control Panel:** Admins manage parcel bookings and assign delivery personnel.  
✅ **Delivery Tracking:** Integration with Leaflet and React Map GL for tracking deliveries.  
✅ **Secure Authentication:** Firebase authentication for seamless user login and registration.  
✅ **Data Visualization:** Recharts and React ApexCharts for insightful analytics.  
✅ **Smooth Animations:** Lottie React and Tailwind CSS for a better user experience.  
✅ **Payment Integration:** Stripe for secure online payments.  

## 📦 Dependencies
The project includes the following dependencies:
```json
{
  "@headlessui/react": "^2.2.0",
  "@radix-ui/react-dialog": "^1.1.4",
  "@tanstack/react-query": "^5.62.11",
  "axios": "^1.7.9",
  "daisyui": "^4.12.23",
  "firebase": "^11.1.0",
  "leaflet": "^1.9.4",
  "lottie-react": "^2.4.0",
  "react": "^18.3.1",
  "react-dom": "^18.3.1",
  "react-icons": "^5.4.0",
  "react-leaflet": "^5.0.0",
  "react-router-dom": "^6.23.0",
  "recharts": "^2.15.0",
  "tailwindcss": "^3.4.17"
}
```

## 🏗 How to Run the Project Locally
Follow these steps to run the project on your local machine:

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/your-username/parcel-management.git
cd parcel-management
```

### 2️⃣ Install Dependencies
Ensure you have Node.js installed, then run:
```bash
npm install
```

### 3️⃣ Configure Environment Variables
Create a `.env` file in the root directory and add your Firebase and API configurations:
```env
VITE_apiKey=your_firebase_api_key
VITE_authDomain=your_project_authDomain
VITE_projectId=your_project_id
VITE_storageBucket=your_storage_bucket
VITE_messagingSenderId=your_messaging_sender_id
VITE_appId=your_app_id
VITE_API_URL=http://localhost:5000
```

### 4️⃣ Start the Development Server
```bash
npm run dev
```
The application will be available at `http://localhost:5173`.

### 5️⃣ Build for Production
To create a production-ready build:
```bash
npm run build
npm run preview
```

## 🖥️ Local Machine Run Overview
After running the project locally, you will experience:
✅ A dashboard with role-based access (User, Admin, Delivery Man).  
✅ Parcel booking functionality.  
✅ Admin panel for managing deliveries.  
✅ Real-time tracking using Leaflet and Map GL.  
✅ Secure authentication via Firebase.  

## 🌍 Live Website
Experience the website live at:  
🔗 [Parcel Management Live Site](https://dropdesk-1212b.web.app/)

## 📚 Additional Resources
- [React Documentation](https://react.dev/)
- [Vite Documentation](https://vitejs.dev/)
- [Firebase Documentation](https://firebase.google.com/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
