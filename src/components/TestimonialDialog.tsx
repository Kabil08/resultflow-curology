import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import { Button } from "./ui/button";
import { ScrollArea } from "./ui/scroll-area";
import { Star, Quote, ArrowRight, CheckCircle2 } from "lucide-react";

interface TestimonialDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onGoBack?: () => void;
}

interface Testimonial {
  id: number;
  name: string;
  age: number;
  image: string;
  rating: number;
  issue: string;
  result: string;
  timeframe: string;
  quote: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah M.",
    age: 28,
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
    rating: 5,
    issue: "Acne & Dark Spots",
    result: "Clear, radiant skin",
    timeframe: "3 months",
    quote:
      "I've tried everything for my acne, but Curology's custom formula finally worked! My skin is clearer than it's been in years, and the dark spots are fading beautifully.",
  },
  {
    id: 2,
    name: "Jessica L.",
    age: 34,
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
    rating: 5,
    issue: "Fine Lines & Texture",
    result: "Smoother, younger-looking skin",
    timeframe: "2 months",
    quote:
      "The personalized approach made all the difference. My fine lines have noticeably reduced, and my skin texture is so much smoother. I look years younger!",
  },
  {
    id: 3,
    name: "Amanda R.",
    age: 25,
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop",
    rating: 5,
    issue: "Hyperpigmentation",
    result: "Even skin tone",
    timeframe: "4 months",
    quote:
      "My hyperpigmentation was so stubborn, but the Dark Spot Serum combined with my custom formula has been life-changing. My skin tone is finally even!",
  },
  {
    id: 4,
    name: "Emily K.",
    age: 31,
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop",
    rating: 5,
    issue: "Redness & Rosacea",
    result: "Calm, balanced skin",
    timeframe: "6 weeks",
    quote:
      "I was skeptical at first, but my rosacea has improved dramatically. The redness is under control, and I finally feel confident without makeup.",
  },
  {
    id: 5,
    name: "Olivia T.",
    age: 29,
    image:
      "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400&h=400&fit=crop",
    rating: 5,
    issue: "Breakouts & Texture",
    result: "Clear, smooth complexion",
    timeframe: "10 weeks",
    quote:
      "The subscription model keeps me consistent, and the results speak for themselves. No more breakouts, and my skin has never felt this smooth!",
  },
  {
    id: 6,
    name: "Rachel W.",
    age: 26,
    image:
      "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400&h=400&fit=crop",
    rating: 5,
    issue: "Stubborn Acne",
    result: "95% clear skin",
    timeframe: "12 weeks",
    quote:
      "After years of struggling with stubborn acne, Curology gave me my confidence back. I wish I had started this journey sooner!",
  },
];

export function TestimonialDialog({
  open,
  onOpenChange,
  onGoBack,
}: TestimonialDialogProps) {
  const handleClose = () => {
    onOpenChange(false);
  };

  const handleBackToOffer = () => {
    if (onGoBack) {
      onGoBack();
    }
  };

  const renderStars = (rating: number) => {
    return (
      <div className="flex gap-0.5">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-3 h-3 sm:w-4 sm:h-4 ${
              i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
            }`}
          />
        ))}
      </div>
    );
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="w-[calc(100%-2rem)] max-w-2xl sm:w-full mx-auto max-h-[90vh] overflow-hidden">
        <DialogHeader>
          <DialogTitle className="text-xl sm:text-2xl flex items-center gap-2">
            <Quote className="w-5 h-5 sm:w-6 sm:h-6 text-purple-500 flex-shrink-0" />
            <span>Real Results from Real People</span>
          </DialogTitle>
          <DialogDescription className="text-sm sm:text-base pt-2">
            Before you go, see how Curology has transformed these lives
          </DialogDescription>
        </DialogHeader>

        <ScrollArea className="max-h-[55vh] pr-4">
          <div className="space-y-4 py-2">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="border rounded-lg p-3 sm:p-4 bg-gradient-to-br from-purple-50 to-pink-50 hover:shadow-md transition-shadow"
              >
                <div className="flex gap-3 sm:gap-4">
                  {/* Profile Image */}
                  <div className="flex-shrink-0">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover border-2 border-purple-200"
                    />
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <div>
                        <h3 className="font-semibold text-sm sm:text-base">
                          {testimonial.name}, {testimonial.age}
                        </h3>
                        {renderStars(testimonial.rating)}
                      </div>
                    </div>

                    {/* Quote */}
                    <p className="text-xs sm:text-sm text-gray-700 italic mb-3 leading-relaxed">
                      "{testimonial.quote}"
                    </p>

                    {/* Results Grid */}
                    <div className="grid grid-cols-3 gap-2 text-center">
                      <div className="bg-white/70 rounded-md p-1.5 sm:p-2">
                        <p className="text-[9px] sm:text-[10px] text-gray-600 font-medium">
                          Issue
                        </p>
                        <p className="text-[10px] sm:text-xs font-semibold text-gray-900 mt-0.5">
                          {testimonial.issue}
                        </p>
                      </div>
                      <div className="bg-white/70 rounded-md p-1.5 sm:p-2">
                        <p className="text-[9px] sm:text-[10px] text-gray-600 font-medium">
                          Result
                        </p>
                        <p className="text-[10px] sm:text-xs font-semibold text-green-700 mt-0.5">
                          {testimonial.result}
                        </p>
                      </div>
                      <div className="bg-white/70 rounded-md p-1.5 sm:p-2">
                        <p className="text-[9px] sm:text-[10px] text-gray-600 font-medium">
                          Time
                        </p>
                        <p className="text-[10px] sm:text-xs font-semibold text-purple-700 mt-0.5">
                          {testimonial.timeframe}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Trust Indicators */}
          <div className="mt-6 space-y-3 bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg p-4 border border-purple-200">
            <h4 className="font-semibold text-sm sm:text-base text-purple-900 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-purple-600" />
              Why Thousands Trust Curology
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-gray-700">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                <span>
                  <strong>Personalized formulas</strong> created by licensed
                  dermatology providers
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                <span>
                  <strong>Clinically proven ingredients</strong> tailored to
                  your unique skin needs
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                <span>
                  <strong>24/7 support</strong> from your dedicated dermatology
                  team
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                <span>
                  <strong>Risk-free trial</strong> with money-back satisfaction
                  guarantee
                </span>
              </li>
            </ul>
          </div>
        </ScrollArea>

        <DialogFooter className="flex-col sm:flex-col gap-2 mt-4">
          {onGoBack && (
            <Button
              className="w-full bg-purple-600 hover:bg-purple-700 text-sm sm:text-base"
              size="lg"
              onClick={handleBackToOffer}
            >
              See My Personalized Offer
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          )}
          <Button
            variant={onGoBack ? "ghost" : "outline"}
            className="w-full text-sm sm:text-base"
            onClick={handleClose}
          >
            {onGoBack ? "Maybe Later" : "Close"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
