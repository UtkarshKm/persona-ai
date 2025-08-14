import ChatWindow from "../../components/ChatWindow";

export default function HomePage() {
  return (
    <div style={{ 
      margin: 0, 
      padding: 0,
      minHeight: '100vh',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'
    }}>
      <ChatWindow />
    </div>
  );
}