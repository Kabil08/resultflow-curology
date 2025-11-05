import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import { Button } from "./ui/button";
import { RefreshCcw, CheckCircle2, Calendar, Heart } from "lucide-react";
import confetti from "canvas-confetti";

interface SubscriptionDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function SubscriptionDialog({
  open,
  onOpenChange,
}: SubscriptionDialogProps) {
  const triggerConfetti = () => {
    // Heart-shaped confetti burst
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ["#ec4899", "#f472b6", "#3b82f6", "#8b5cf6", "#10b981"],
      shapes: ["circle", "square"],
    });

    // Additional celebration bursts
    setTimeout(() => {
      confetti({
        particleCount: 50,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ["#ec4899", "#f472b6", "#8b5cf6"],
      });
    }, 150);

    setTimeout(() => {
      confetti({
        particleCount: 50,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ["#3b82f6", "#10b981", "#8b5cf6"],
      });
    }, 300);
  };

  const handleResubscribe = () => {
    triggerConfetti();
    console.log("Resubscribed to Custom Formula Rx");

    // Close dialog after a short delay to let confetti show
    setTimeout(() => {
      onOpenChange(false);
    }, 500);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="w-[calc(100%-2rem)] max-w-md sm:w-full mx-auto max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-xl sm:text-2xl flex items-center gap-2">
            <Heart className="w-5 h-5 sm:w-6 sm:h-6 text-pink-500 fill-pink-500 flex-shrink-0" />
            <span>We Care About Your Journey</span>
          </DialogTitle>
          <DialogDescription className="text-sm sm:text-base pt-2">
            Your consistent skincare routine is paying off!
          </DialogDescription>
        </DialogHeader>

        {/* Product Display */}
        <div className="border rounded-lg p-3 sm:p-4 bg-gradient-to-br from-blue-50 to-purple-50">
          <div className="flex gap-3 sm:gap-4">
            <div className="w-20 h-20 sm:w-24 sm:h-24 bg-white rounded-lg flex items-center justify-center shadow-sm p-1.5 sm:p-2 flex-shrink-0">
              <img
                src="https://res.cloudinary.com/dbtapyfau/image/upload/v1762365786/bottleDesktop_402x_ceuyw2.jpg"
                alt="Custom Formula"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-1.5 sm:gap-2">
                <h3 className="font-semibold text-base sm:text-lg">
                  Custom Formula
                </h3>
                <span className="text-[9px] sm:text-[10px] font-semibold bg-blue-100 text-blue-700 px-1 sm:px-1.5 py-0.5 rounded flex-shrink-0">
                  Rˣ
                </span>
              </div>
              <p className="text-xs sm:text-sm text-gray-600 mt-1">
                Personalized prescription treatment for acne, rosacea & dark
                spots
              </p>
              <div className="mt-2">
                <div className="flex flex-wrap items-baseline gap-1.5 sm:gap-2">
                  <span className="text-lg sm:text-xl font-bold text-blue-600">
                    $5.45
                  </span>
                  <span className="text-xs sm:text-sm text-gray-500">
                    first month
                  </span>
                </div>
                <p className="text-[10px] sm:text-xs text-gray-500 mt-0.5">
                  Then $29.95/month subscription
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Subscription Status */}
        <div className="space-y-2 sm:space-y-3 py-2">
          <div className="flex items-start gap-2 sm:gap-3 p-2.5 sm:p-3 bg-green-50 rounded-lg border border-green-200">
            <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 mt-0.5 flex-shrink-0" />
            <div className="min-w-0">
              <p className="font-semibold text-xs sm:text-sm text-green-900">
                Great Progress!
              </p>
              <p className="text-[10px] sm:text-xs text-green-700 mt-0.5 sm:mt-1">
                You've been using your Custom Formula consistently for 1 month
              </p>
            </div>
          </div>

          <div className="flex items-start gap-2 sm:gap-3 p-2.5 sm:p-3 bg-blue-50 rounded-lg border border-blue-200">
            <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 mt-0.5 flex-shrink-0" />
            <div className="min-w-0">
              <p className="font-semibold text-xs sm:text-sm text-blue-900">
                Time to Restock
              </p>
              <p className="text-[10px] sm:text-xs text-blue-700 mt-0.5 sm:mt-1">
                Your first month trial is ending. Continue your personalized
                treatment with a subscription
              </p>
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="bg-purple-50 rounded-lg p-3 sm:p-4 space-y-2">
          <p className="font-semibold text-xs sm:text-sm text-purple-900">
            Continue Your Subscription:
          </p>
          <ul className="text-[10px] sm:text-xs text-purple-700 space-y-1.5">
            <li className="flex items-start gap-1.5 sm:gap-2">
              <CheckCircle2 className="w-3 h-3 mt-0.5 flex-shrink-0" />
              <span>Personalized formula adjusted as your skin improves</span>
            </li>
            <li className="flex items-start gap-1.5 sm:gap-2">
              <CheckCircle2 className="w-3 h-3 mt-0.5 flex-shrink-0" />
              <span>24/7 access to your dermatology provider</span>
            </li>
            <li className="flex items-start gap-1.5 sm:gap-2">
              <CheckCircle2 className="w-3 h-3 mt-0.5 flex-shrink-0" />
              <span>Free shipping & easy auto-refills</span>
            </li>
            <li className="flex items-start gap-1.5 sm:gap-2">
              <CheckCircle2 className="w-3 h-3 mt-0.5 flex-shrink-0" />
              <span>Cancel or pause anytime</span>
            </li>
          </ul>
        </div>

        <DialogFooter className="flex-col sm:flex-col gap-2 mt-2">
          <Button
            className="w-full bg-blue-600 hover:bg-blue-700 text-sm sm:text-base"
            size="lg"
            onClick={handleResubscribe}
          >
            <RefreshCcw className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-2" />
            Resubscribe Now
          </Button>
          <Button
            variant="ghost"
            className="w-full text-sm sm:text-base"
            onClick={() => onOpenChange(false)}
          >
            Remind Me Later
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
