import React, { useState } from "react";
import { Controlled as CodeMirror } from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const Index = () => {
  const [code, setCode] = useState("// Write your code here");

  const handleRunCode = () => {
    try {
      // eslint-disable-next-line no-eval
      eval(code);
      toast("Code executed successfully!", {
        description: "Your code ran without errors.",
      });
    } catch (error) {
      toast("Error executing code", {
        description: error.message,
      });
    }
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
        <CodeMirror
          value={code}
          height="200px"
          extensions={[javascript()]}
          onChange={(value) => setCode(value)}
          className="border rounded-md"
        />
        <Button onClick={handleRunCode} className="mt-4">
          Run Code
        </Button>
      </div>
    </div>
  );
};

export default Index;