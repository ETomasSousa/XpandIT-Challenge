# XpandIT-Challenge
Frontend Xpand IT Challenge

## How to Run the Application

1. **Clone the Repository**
   ```bash
   git clone https://github.com/ETomasSousa/XpandIT-Challenge.git
   cd xpandIT_challenge
   ```

2. **Install Dependencies**
   (Node.js and npm must be installed)
   ```bash
   npm install
   ```

3. **Start the Server**
   ```bash
   npm run dev
   ```

4. **Open your Browser**
	Navigate to `https://localhost:5173` to view the app

## Features Implemented

### Persona: Mark
Mark is a movie enthusiast, and the application is designed to fulfill the following requirements to make him happy:

| Requirement ID | Description | Priority  |
|----------------|-------------|-----------|
| RQ001          | Mark wants to see a list of all movies, using infinite scroll he may scroll down and have the list filled with more movies until the end of the list. | MUST HAVE |
| RQ002          | Mark wants to check particular movie details in a popup that is triggered by a click on a movie in the movies list. | MUST HAVE |
| RQ003          | Mark wants to see Top 10 movies by revenue and also see Top 10 movies by revenue for a particular year. | MUST HAVE |

## Additional Features
- **User-Friendly Interface**: Easy navigation and a clean layout to enhance user experience.
- **Loading States**: Ghost loading elements provide feedback while movies are being fetched.
- **Year Filter Dropdown**: Allows Mark to filter movies by year to see the Top 10 movies for a selected year.
- **Back To Top Button**: Helps the user get back on top of the page instantaneously instead of scrolling all the way back to the top.
- **Error Component**: Gives feedback to the user about some errors that occurred in the system.
- **Custom hooks & utils**: Assisted in the development and organization of the codebase
