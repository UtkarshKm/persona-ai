
# Project: Persona AI Chat

## Project Overview

This is a Next.js application that provides a web-based chat interface allowing users to interact with different AI personas. The application is built with a modern web stack, including React, TypeScript, and Tailwind CSS. It leverages the Vercel AI SDK for the frontend and the Groq AI SDK for the backend to provide a seamless and interactive chat experience.

The core feature of this application is the ability to switch between different AI personas, each with a unique personality and knowledge base. The personas are defined by a set of prompts that guide the AI's responses.

## Key Technologies

*   **Framework:** [Next.js](https://nextjs.org/)
*   **UI Library:** [React](https://react.dev/)
*   **Language:** [TypeScript](https://www.typescriptlang.org/)
*   **Styling:** [Tailwind CSS](https://tailwindcss.com/)
*   **AI SDKs:**
    *   [Vercel AI SDK](https://sdk.vercel.ai/docs)
    *   [Groq AI SDK](https://console.groq.com/docs/sdks)
*   **UI Components:** [shadcn/ui](https://ui.shadcn.com/)

## Building and Running

To get the application running locally, follow these steps:

1.  **Install Dependencies:**
    ```bash
    npm install
    ```

2.  **Run the Development Server:**
    ```bash
    npm run dev
    ```

3.  **Open in Browser:**
    Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

### Other Commands

*   **Build for Production:**
    ```bash
    npm run build
    ```

*   **Start Production Server:**
    ```bash
    npm run start
    ```

*   **Lint the Code:**
    ```bash
    npm run lint
    ```

## Development Conventions

*   **Code Style:** The project follows the standard Next.js and React coding conventions. The code is formatted using Prettier and linted with ESLint.
*   **File Structure:** The project is organized into the following directories:
    *   `src/app`: Contains the main application pages and API routes.
    *   `src/components`: Contains the reusable React components.
    *   `src/lib`: Contains the utility functions and prompts for the AI personas.
    *   `public`: Contains the static assets, such as images and fonts.
*   **API:** The chat API is located at `src/app/api/chat/route.ts`. It uses the Groq AI SDK to generate responses from the AI model.
*   **Personas:** The AI personas are defined in `lib/prompts.ts`. Each persona has a unique prompt that guides the AI's responses.
