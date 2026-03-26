import { useState } from "react";
import { useApiKey, AVAILABLE_MODELS } from "@/context/ApiKeyContext";
import { Settings, Save, ExternalLink, Shield, Zap, Info } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface SettingsModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function SettingsModal({ open, onOpenChange }: SettingsModalProps) {
  const { apiKey, setApiKey, selectedModel, setSelectedModel, isGlobal } = useApiKey();
  const [tempKey, setTempKey] = useState(apiKey || "");

  const handleSave = () => {
    if (!isGlobal) {
      setApiKey(tempKey.trim());
    }
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-lg bg-[#13161C] border-white/10 text-white shadow-2xl">
        <DialogHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
              <Settings className="h-5 w-5" />
            </div>
            <div>
              <DialogTitle className="text-xl font-bold">Project Settings</DialogTitle>
              <DialogDescription className="text-muted-foreground text-xs">
                Configure your Gemini API and model preferences.
              </DialogDescription>
            </div>
          </div>
        </DialogHeader>

        <div className="space-y-6 py-4 max-h-[60vh] overflow-y-auto pr-2 custom-scrollbar">


          {/* Model Selector */}
          <div className="space-y-4">
            <label className="text-sm font-semibold flex items-center gap-2">
              <Zap className="h-4 w-4 text-accent" />
              AI Reasoning Model
            </label>
            <div className="grid grid-cols-1 gap-2">
              {AVAILABLE_MODELS.map((model) => (
                <button
                  key={model.id}
                  onClick={() => setSelectedModel(model.id)}
                  className={cn(
                    "flex items-center justify-between p-3 rounded-xl border transition-all text-left group",
                    selectedModel === model.id
                      ? "bg-primary/10 border-primary/40"
                      : "bg-white/5 border-white/5 hover:border-white/20"
                  )}
                >
                  <div className="flex flex-col">
                    <span className={cn("text-sm font-bold", selectedModel === model.id ? "text-primary" : "text-white")}>
                      {model.label}
                    </span>
                    <span className="text-[10px] text-muted-foreground group-hover:text-muted-foreground/80">
                      {model.description}
                    </span>
                  </div>
                  {selectedModel === model.id && (
                    <div className="h-2 w-2 rounded-full bg-primary animate-pulse" />
                  )}
                </button>
              ))}
            </div>
            <div className="p-3 bg-amber-500/5 border border-amber-500/10 rounded-lg">
              <p className="text-[10px] text-amber-200/70 leading-relaxed">
                <span className="font-bold text-amber-500 uppercase mr-1">Note:</span> 
                Free tier models (Flash) have a 20 request/minute limit. Use 1.5 Flash for higher search volume.
              </p>
            </div>
          </div>
        </div>

        <div className="pt-2 flex gap-3">
          <Button 
            variant="ghost" 
            onClick={() => onOpenChange(false)}
            className="flex-1 border border-white/10 hover:bg-white/5"
          >
            Cancel
          </Button>
          <Button 
            onClick={handleSave}
            className="flex-1 gradient-button font-bold"
          >
            Save Changes <Save className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
