import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import { Button } from "./ui/button";
import { ShoppingCart, Clock, TrendingUp } from "lucide-react";
import confetti from "canvas-confetti";

interface UrgencyDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function UrgencyDialog({ open, onOpenChange }: UrgencyDialogProps) {
  const triggerConfetti = () => {
    // Main confetti burst
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ["#6F5CFF", "#ec4899", "#f59e0b", "#10b981", "#3b82f6"],
    });

    // Side bursts for extra celebration
    setTimeout(() => {
      confetti({
        particleCount: 50,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ["#6F5CFF", "#ec4899", "#f59e0b"],
      });
    }, 100);

    setTimeout(() => {
      confetti({
        particleCount: 50,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ["#10b981", "#3b82f6", "#f59e0b"],
      });
    }, 200);
  };

  const handleAddToCart = () => {
    triggerConfetti();
    console.log("Added to cart: Dark Spot Serum");

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
            <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6 text-orange-500 flex-shrink-0" />
            <span>Don't Miss Out!</span>
          </DialogTitle>
          <DialogDescription className="text-sm sm:text-base pt-2">
            We noticed you've been interested in this product
          </DialogDescription>
        </DialogHeader>

        {/* Product Display */}
        <div className="border rounded-lg p-3 sm:p-4 bg-gradient-to-br from-purple-50 to-pink-50">
          <div className="flex gap-3 sm:gap-4">
            <div className="w-20 h-20 sm:w-24 sm:h-24 bg-white rounded-lg flex items-center justify-center shadow-sm p-1.5 sm:p-2 flex-shrink-0">
              <img
                src="https://res.cloudinary.com/dbtapyfau/image/upload/v1762363148/DSS_12x__601952_loonx1.png"
                alt="Dark Spot Serum"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-semibold text-base sm:text-lg">
                Dark Spot Serum
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 mt-1">
                Discoloration Fading Complex with niacinamide
              </p>
              <div className="mt-2 flex flex-wrap items-center gap-1.5 sm:gap-2">
                <span className="text-lg sm:text-xl font-bold text-purple-600">
                  $18.40
                </span>
                <span className="text-xs sm:text-sm text-gray-500 line-through">
                  $23.00
                </span>
                <span className="bg-red-100 text-red-700 text-[10px] sm:text-xs px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full font-semibold">
                  20% OFF
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Urgency Messages */}
        <div className="space-y-2 sm:space-y-3 py-2">
          <div className="flex items-start gap-2 sm:gap-3 p-2.5 sm:p-3 bg-orange-50 rounded-lg border border-orange-200">
            <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-orange-600 mt-0.5 flex-shrink-0" />
            <div className="min-w-0">
              <p className="font-semibold text-xs sm:text-sm text-orange-900">
                Limited Time Offer!
              </p>
              <p className="text-[10px] sm:text-xs text-orange-700 mt-0.5 sm:mt-1">
                All non-Rx essentials 20% off - Limited time only
              </p>
            </div>
          </div>

          <div className="flex items-start gap-2 sm:gap-3 p-2.5 sm:p-3 bg-red-50 rounded-lg border border-red-200">
            <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 text-red-600 mt-0.5 flex-shrink-0" />
            <div className="min-w-0">
              <p className="font-semibold text-xs sm:text-sm text-red-900">
                Popular Choice!
              </p>
              <p className="text-[10px] sm:text-xs text-red-700 mt-0.5 sm:mt-1">
                This serum is trending - Get yours before stock runs low!
              </p>
            </div>
          </div>
        </div>

        <DialogFooter className="flex-col sm:flex-col gap-2 mt-2">
          <Button
            className="w-full text-sm sm:text-base"
            style={{ backgroundColor: "rgb(111, 92, 255)" }}
            size="lg"
            onClick={handleAddToCart}
          >
            <ShoppingCart className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-2" />
            Add to Cart - Save 20%
          </Button>
          <Button
            variant="ghost"
            className="w-full text-sm sm:text-base"
            onClick={() => onOpenChange(false)}
          >
            Continue Browsing
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
