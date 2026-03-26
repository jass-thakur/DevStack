import { useState } from "react";
import { useApiKey } from "@/context/ApiKeyContext";
import { Key, Save } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function OnboardingModal() {
  const { isConfigured, setApiKey } = useApiKey();
  const [value, setValue] = useState("");

  if (isConfigured) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (value.trim()) {
      setApiKey(value.trim());
    }
  };

  return (
    <Dialog open={!isConfigured}>
      <DialogContent className="sm:max-w-md bg-background/95 backdrop-blur-xl border-primary/20">
        <DialogHeader className="flex flex-col items-center gap-4 py-4">
          <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
            <Key className="h-6 w-6" />
          </div>
          <div className="text-center space-y-2">
            <DialogTitle className="text-2xl font-bold tracking-tight">Connect Your Gemini API Key to Get Started</DialogTitle>
            <DialogDescription className="text-muted-foreground">
              We use your Google Gemini API key to fetch real-time tool data. Your key is stored locally and never shared.
            </DialogDescription>
          </div>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 py-4">
          <div className="space-y-2">
            <Input
              type="password"
              placeholder="Enter your Gemini API Key..."
              value={value}
              onChange={(e) => setValue(e.target.value)}
              className="bg-muted/50 border-primary/10 focus:border-primary/30 h-11"
              required
            />
          </div>
          <Button type="submit" className="w-full h-11 gradient-button font-medium">
            Save & Continue <Save className="ml-2 h-4 w-4" />
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
