import Header from "@/components/header";

export default function RootLayout({ children }) {
  return (
    <div className="max-w-[640px] m-auto min-h-screen bg-white">
      <div className="shadow-header">
        <Header></Header>
      </div>
      {children}
    </div>
  );
}
