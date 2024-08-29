# CineMax 🎬

- [User Frontend](https://cine-max-bg33-git-main-hh440s-projects.vercel.app/)
- [Admin Frontend](https://admin-frontend-ln6cgy9nw-aasiflm10s-projects.vercel.app/)
- [Backend Deployment Link](https://cinemax-98lu.onrender.com/)


CineMax allows you to view your favorite movies and book them in your nearest theaters. You can browse through a wide selection of movies, check showtimes, and reserve your seats all in one place. Enjoy a seamless movie booking experience with CineMax!

## Features

- **Browse Movies**: Explore a wide selection of movies available in nearby theaters.
- **Book Tickets**: Reserve your seats in advance for your favorite shows.
- **Theater Information**: Get details about theaters, including location and available showtimes.
- **User Authentication**: Secure login and registration using NextAuth.
- **Responsive Design**: Enjoy a user-friendly experience across all devices.

## Tech Stack

### Backend

- **Node.js**: Handles server-side logic and API routes.
- **Express.js**: A web framework used to build the backend API.
- **JavaScript**: Core programming language for backend logic.
- **PostgreSQL**: Relational database management system used to store data.
- **Prisma ORM**: An Object-Relational Mapping (ORM) tool for managing database interactions.

### Frontend

- **Next.js**: A React framework used for server-side rendering and static site generation.
- **TypeScript**: Provides static typing for improved code quality and developer experience.
- **React.js**: JavaScript library used to build interactive user interfaces.
- **Tailwind CSS**: Utility-first CSS framework for styling the frontend.
- **NextAuth**: Authentication solution for handling user login and registration.


## Installation

### Prerequisites

Ensure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (v14 or later)
- [PostgreSQL](https://www.postgresql.org/) or [Docker](https://www.docker.com/)
- [Yarn](https://yarnpkg.com/) or [npm](https://www.npmjs.com/) (Note : We have used npm)

### Backend Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/Hh440/CineMax.git
  
2. To run backend:
    ```bash
    cd CineMax/backend
   ```
   2a : Create an .env file in backend and copy the contents from env.example
    ```js
    DATABASE_URL="Enter_your_database_url"
    ```
    Replace the DATABASE_URL with your database.
    
    2b: Once you are done with the above step. Run npm install : 
    ```bash
    npm install
    ```
    2c: Push schema.prisma to your database : 
    ```bash
    npx prisma migrate dev --name <Name_your_Migration>
    npx prisma generate
    ```
    
    2d: Run the backend 
    ```bash 
    node index.js
    ```
    

  
3. To run AdminFrontend:
    ```bash
    cd CineMax/frontadmin
   ```
   3a : Run npm install
    ```js
    npm install
    ```

    3b: Start  Admin frontend Server : 
    ```bash
    npm run dev
    ```

    3c: Now you can add and delete theatres, add movies ,create showtimes.
   ## ** NOTE : Admin username and password are as follows. Only use the following usernamme and password to access Adminfrontend : **
     -  username : admin 
      -  password : signin  



5. To run User Frontend:
    ```bash
    cd CineMax/frontend
   ```
   4a : Create an .env file in fronend and copy the contents from env.example from CineMax/frontend/env.example
    ```js
    NEXTAUTH_SECRET="Enter_your_Secret"
    ```
    Replace the DATABASE_URL with your database.
    
    4b: Once you are done with the above step. Run npm install : 
    ```bash
    npm install
    ```
    
    4c : Start the User_frontend server : 
    ```bash
    npm run dev
    ```
## Demo Video

Watch the demo of CineMax in action:

https://github.com/user-attachments/assets/17eeba03-e652-43c6-934e-e882ae71d651

    
**Cheers...
Regards Harsh and  Aasif 
:)**
