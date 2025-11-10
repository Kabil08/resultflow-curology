import { useState, useEffect } from "react";
import { UrgencyDialog } from "./UrgencyDialog";
import { SubscriptionDialog } from "./SubscriptionDialog";
import { SkinAnalysisDialog } from "./SkinAnalysisDialog";
import { Button } from "./ui/button";
import { ArrowLeft } from "lucide-react";

interface IframeLayoutProps {
  scenario: "urgency" | "subscription" | "skinanalysis";
}

export function IframeLayout({ scenario }: IframeLayoutProps) {
  const [dialogOpen, setDialogOpen] = useState(false);

  useEffect(() => {
    // Show dialog after 3 seconds
    const timer = setTimeout(() => {
      setDialogOpen(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleGoBack = () => {
    window.location.reload(); // Reload to go back to home page
  };

  return (
    <div className="relative w-full h-screen">
      {/* Back Button */}
      <Button
        onClick={handleGoBack}
        className="absolute top-2 left-2 sm:top-4 sm:left-4 z-40 bg-white/90 hover:bg-white text-gray-800 shadow-lg text-xs sm:text-sm"
        size="sm"
      >
        <ArrowLeft className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
        <span className="hidden xs:inline">Back to Home</span>
        <span className="inline xs:hidden">Back</span>
      </Button>

      {/* Iframe */}
      <iframe
        src="https://curology.com"
        className="w-full h-full border-none"
        title="Curology Website"
        sandbox="allow-same-origin allow-scripts allow-forms allow-popups allow-popups-to-escape-sandbox allow-top-navigation"
      />

      {/* Dialogs based on scenario */}
      {scenario === "urgency" && (
        <UrgencyDialog open={dialogOpen} onOpenChange={setDialogOpen} />
      )}
      {scenario === "subscription" && (
        <SubscriptionDialog open={dialogOpen} onOpenChange={setDialogOpen} />
      )}
      {scenario === "skinanalysis" && (
        <SkinAnalysisDialog open={dialogOpen} onOpenChange={setDialogOpen} />
      )}
    </div>
  );
}
