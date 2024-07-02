import CodeEditor from "@/components/CodeEditor";

const Index = () => {
  const handleSaveCode = (code) => {
    console.log("Saved code:", code);
  };

  return (
    <div className="text-center">
      <h1 className="text-3xl font-bold">Welcome to Code Learning Platform</h1>
      <p className="mt-4 text-lg">
        Your one-stop destination to learn coding from scratch to advanced levels.
      </p>
      <p className="mt-2">
        Navigate through our courses and start your coding journey today!
      </p>
      <div className="mt-8">
        <h2 className="text-2xl font-semibold">Try Our Code Editor</h2>
        <CodeEditor initialCode="// Write your code here" onSave={handleSaveCode} />
      </div>
    </div>
  );
};

export default Index;