# Persona AI Chat

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Welcome to Persona AI Chat! This project is a modern, web-based chat application designed to showcase the power of large language models (LLMs) in adopting specific personalities. Instead of a generic AI assistant, users can interact with distinct characters, each with a unique voice, style, and knowledge base defined by carefully crafted system prompts.

This application serves as a powerful demonstration of how prompt engineering can shape AI behavior, creating more engaging and specialized user experiences. It's built with a high-performance, modern web stack to ensure a smooth, fast, and responsive chat interface.

![Persona AI Chat](./public/diverse-user-avatars.png)

## ✨ Core Features

*   **Dynamic Persona Switching:** Instantly change the AI's personality. Chat with a friendly coding mentor one moment and a pragmatic full-stack developer the next.
*   **High-Speed, Real-time Chat:** Experience fluid, real-time conversations thanks to the Vercel AI SDK and the high-throughput Groq API.
*   **Themable & Responsive UI:** Enjoy a clean, modern interface with both light and dark modes, fully responsive for any device.
*   **Engaging UX:** A typewriter effect for incoming messages enhances the feeling of a live conversation.

## 🤔 How It Works

The application's architecture is designed for simplicity and performance, leveraging the strengths of the Next.js framework.

1.  **Frontend Interaction:** The user interface is built with **React** and components from **shadcn/ui**. When a user selects a persona and sends a message, the frontend, powered by the **Vercel AI SDK's `useChat` hook**, manages the chat state.
2.  **API Request:** The frontend sends a `POST` request to a Next.js API route (`/api/chat`). This request includes the current conversation history and the identifier for the selected persona (e.g., "hitesh").
3.  **Backend Processing:** The API route, running on the server, receives the request.
    *   It retrieves the detailed system prompt for the chosen persona from the `lib/prompts.ts` file. This prompt is the "brain" of the persona, instructing the AI on how to behave, what tone to use, and what topics it knows about.
    *   It uses the **Groq AI SDK** to make a request to the Groq API, sending both the system prompt and the user's message history.
4.  **AI Response Generation:** The **Groq API** processes the request at high speed and begins generating a response, adhering to the rules of the system prompt.
5.  **Streaming Back to Frontend:** The Next.js API route streams the response back to the frontend as it's being generated. The Vercel AI SDK handles this stream, allowing the message to appear token-by-token with a typewriter effect, creating a seamless real-time experience.

## 🎭 The Personas

The magic of this application lies in its personas, which are defined in `src/lib/prompts.ts`. Each persona is a detailed system prompt that gives the AI its character. The initial personas are:

*   **Hitesh Choudhary:** Based on the popular Indian coding educator. This persona is encouraging, uses Hinglish, and often explains complex topics with relatable analogies (like a cup of chai).
*   **Piyush Garg:** Based on the full-stack developer and educator. This persona is pragmatic, focuses on real-world project implementation, and often challenges the user to think like an industry professional.

You can easily extend the application by adding new persona definitions to the `prompts.ts` file.

## 🚀 Technology Choices

This project uses a curated set of modern technologies chosen for performance, developer experience, and scalability.

*   **Framework:** **Next.js** provides a robust foundation with file-based routing, server-side rendering, and integrated API routes.
*   **Language:** **TypeScript** ensures code quality and maintainability by adding static types to JavaScript.
*   **UI:** **React** is used for building the interactive user interface, with **shadcn/ui** providing a set of beautifully designed and accessible components.
*   **Styling:** **Tailwind CSS** allows for rapid, utility-first styling directly in the markup.
*   **AI Integration:**
    *   **Vercel AI SDK:** Simplifies building AI-powered user interfaces by handling chat state, streaming, and tool integration on the frontend.
    *   **Groq AI SDK:** Provides a simple interface to the Groq API, which is renowned for its extremely fast LLM inference speeds.

## ⚙️ Getting Started

Follow these instructions to get the project up and running on your local machine.

### Prerequisites

*   Node.js (v20.x or higher)
*   npm or a compatible package manager

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/persona-ai-chat.git
cd persona-ai-chat
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Set Up Environment Variables

The application requires an API key from Groq to function.

1.  Create a `.env.local` file in the root of your project by copying the example file:
    ```bash
    cp .env.example .env.local
    ```
2.  Add your Groq API key to the `.env.local` file:

    ```env
    GROQ_API_KEY=your_groq_api_key_here
    ```

    You can get your free API key from the [Groq Console](https://console.groq.com/keys).

### 4. Run the Development Server

```bash
npm run dev
```

The application will be available at [http://localhost:3000](http://localhost:3000).

## 📜 Available Scripts

*   `npm run dev`: Runs the app in development mode with Turbopack.
*   `npm run build`: Builds the app for production.
*   `npm run start`: Starts the production server.
*   `npm run lint`: Lints the code to check for errors and style issues.

## 📁 Project Structure

The project is organized with a clear and scalable structure:

```
.
├── src
│   ├── app
│   │   ├── api/chat/route.ts  # Backend API endpoint for chat
│   │   ├── chat/page.tsx      # The main chat page UI
│   │   └── page.tsx           # The landing page
│   ├── components
│   │   ├── ChatWindow.tsx     # Core chat interface component
│   │   ├── PersonaSwitch.tsx  # Component to switch AI personas
│   │   └── ui/                # Reusable UI components from shadcn/ui
│   └── lib
│       └── prompts.ts         # System prompts defining the AI personas
├── public/                    # Static assets
└── package.json               # Project dependencies and scripts
```

## 🤝 Contributing

Contributions are welcome! If you have suggestions for improvements or want to add new features, feel free to open an issue or submit a pull request.

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

## 📄 License

This project is licensed under the MIT License.
