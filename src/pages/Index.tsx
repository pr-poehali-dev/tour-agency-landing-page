import Header from "@/components/Header";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-6 text-gray-800 font-montserrat">
            Добро пожаловать в мир путешествий! ✈️
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Откройте для себя удивительные места по всему миру с нашими
            экспертно подобранными турами
          </p>
        </div>
      </main>
    </div>
  );
};

export default Index;
