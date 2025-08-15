
# 🤖 AI Persona Chat

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A modern **AI-powered chat application** where users can talk with multiple distinct personas.  
Features a cinematic landing page, persona switching, and a fully responsive, interactive chat experience.

---

## 📌 Features

### 🎨 UI & Design
- **Cinematic Landing Page** – Glassmorphism hero, floating avatars, and animated gradients.
- **Persona Showcase** – Interactive cards with hover effects and personality hints.
- **Responsive Design** – Optimized for mobile, tablet, and desktop.
- **Aurora Backgrounds** – Smooth animated gradient visuals.
- **Micro-interactions** – Subtle hover, scroll, and click animations.

### 💬 Chat System
- **Multiple Personas** – Switch between personas like *Hitesh Choudhary* and *Piyush Garg* instantly.
- **Real-time Conversations** – Text-based chat with AI.
- **Persona Avatars in Chat** – See who you’re talking to visually.
- **Context-Aware Responses** – AI replies tailored to the selected persona.

---

## 🛠️ Tech Stack

- **Framework** – [Next.js 14+](https://nextjs.org/)
- **Frontend** – [React 18+](https://react.dev/)
- **Styling** – [Tailwind CSS (v4, CSS-first)](https://tailwindcss.com/)
- **Fonts** – [Space Grotesk](https://fonts.google.com/specimen/Space+Grotesk) & [Inter](https://fonts.google.com/specimen/Inter)
- **Language** – TypeScript
- **AI Backend** – LLM API integration (e.g., Groq, OpenAI, Gemini — configurable)

---

## 📂 Project Structure

```

src/
├── app/
│   ├── api/
│   │   └── chat/
│   │       └── route.ts
│   ├── chat/
│   │   └── page.tsx
│   ├── favicon.ico
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── ChatWindow\.tsx
│   ├── landing/
│   │   ├── About.tsx
│   │   ├── Features.tsx
│   │   ├── FinalCTA.tsx
│   │   ├── Hero.tsx
│   │   ├── HowItWorks.tsx
│   │   ├── PersonaCard.tsx
│   │   └── PersonaShowcase.tsx
│   ├── layout/
│   │   └── Footer.tsx
│   ├── PersonaSwitch.tsx
│   ├── ThemeToggle.tsx
│   └── ui/
│       ├── avatar.tsx
│       ├── button.tsx
│       ├── card.tsx
│       ├── input.tsx
│       └── TypewriterEffect.tsx
├── lib/
│   ├── prompts.ts
│   └── utils.ts
├── public/
│   ├── hitesh.webp
│   ├── piyush.webp
│   └── ...
├── tsconfig.json
└── types/
└── chat.ts

```

---

## 🚀 Getting Started

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/UtkarshKm/persona-ai.git
cd persona-ai
````



### 2️⃣ Install Dependencies

```bash
npm install
# or
# pnpm install
# yarn
```

### 3️⃣ Environment Setup

Create a `.env` file in the project root and add the required secrets.

**Recommended variables (example):**

```env
# Server-side secret 
GROQ_API_KEY=your_groq_api_key_here

```

* Put provider-specific keys (Groq, OpenAI, Google, etc.) as server-side env vars and read them only from the API route to keep them secret.
* If you use a different LLM provider, replace `GROQ_API_KEY` with the appropriate key name.

### 4️⃣ Run the Development Server

```bash
npm run dev
# or
# pnpm dev
# yarn dev
```

Open: [http://localhost:3000](http://localhost:3000)

---

## 🎯 Usage

1. Open the landing page (`/`) and explore the personas.
2. Click **Start Chat** or the persona-specific CTA to go to `/chat`.
3. On the chat page, pick a persona (if not preselected) and start typing.
4. The backend will generate persona-specific responses according to `src/lib/prompts.ts`.

---

## 🔧 Scripts

* `npm run dev` — Start dev server
* `npm run build` — Build for production
* `npm run start` — Start the production server
* `npm run lint` — Run linter (if configured)

*(Adjust the above if you use pnpm or yarn)*

---



## 🤝 Contributing

Contributions are welcome!

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/awesome`
3. Commit changes: `git commit -m "Add awesome feature"`
4. Push: `git push origin feature/awesome`
5. Open a Pull Request

Please include a clear description of changes, and run linters/tests if applicable.

---

## 📄 License

This project is licensed under the **MIT License**. See the [LICENSE](./LICENSE) file for details.

---

## 📬 Contact

* **Author:** Utkarsh Kumawat
* **LinkedIn:** [https://www.linkedin.com/in/utkarshkm](https://www.linkedin.com/in/utkarshkm)
* **X (Twitter):** [https://x.com/UtkKumawat](https://x.com/UtkKumawat)

---
