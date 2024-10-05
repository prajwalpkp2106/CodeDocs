# Pulazion-Web-and-App-CodeScriptors

## Landing Page

<img src="photos/Home.png" alt="Image Description">

## Documentation with custom prompt

<img src="photos/Documentation with custom prompt.png" alt="Image Description">

## Documentation Generated according to the custom prompt

<img src="photos/Documentation.png" alt="Image Description">

## Room creation collaborative IDE

<img src="photos/Room creation collabrative IDE.jpg" alt="Image Description">

## IDE With Code Generator

<img src="photos/IDE With Code Generator .jpg" alt="Image Description">

## CodeLabs

<img src="photos/codeLabs.jpg" alt="Image Description">

## Tutorials

<img src="photos/Tutorials.png" alt="Image Description">

## Flowchart

<img src="photos/flowchart.png" alt="Image Description">

### Setup to the project

1. **Add your Firebase server keys in frontend/.env**:
   ```bash
    CORS_ORIGIN=*
    VITE_FIREBASE_API_KEY=
    VITE_FIREBASE_AUTH_DOMAIN=
    VITE_FIREBASE_PROJECT_ID=
    VITE_FIREBASE_STORAGE_BUCKET=
    VITE_FIREBASE_MESSAGING_SENDER_ID=
    VITE_FIREBASE_APP_ID=
    VITE_FIREBASE_MEASUREMENT_ID=
    ```
2. **Add your Genai Api keys in flask_docs_generator/.env**:
   ```bash
    API_KEY=""
    ```
3. **Add your Genai Api keys in backend/.env**:
   ```bash
    JWT_SECRET_KEY=""
    MONGODB_CONNECTION_STRING=""
    GITLAB_TOKEN=""
    GITLAB_API_BASE_URL = ""
    ```
4. **Install dependencies**:
    ```bash
    npm i //in both frontend and backend
    pip install -r requirements.txt //in flask_docs_generator
    ```
5. **Run the application(Open Integrated Terminal in all folder)**:
    ```bash
    npm run dev //in frontend
    npm start //in backend
    python app.py //in flask_docs_generator
    ```