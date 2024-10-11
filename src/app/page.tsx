import React from 'react';
import Chart from "./Chart";

const Header: React.FC = () => (
  <header className="bg-blue-600 text-white p-4">
    <h1 className="text-2xl font-bold">Force Directed Tree Visualization</h1>
  </header>
);

const Footer: React.FC = () => (
  <footer className="bg-gray-200 text-center p-4">
    <p>&copy; 2024 ka-horikawa. All rights reserved.</p>
  </footer>
);

export default function Home() {
  return (
    <div className="flex flex-col">
      <Header />
      <main className="p-6 bg-gray-100">
        <Chart />
      </main>
      <Footer />
    </div>
  );
}