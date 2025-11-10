import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { ScrollArea } from "./ui/scroll-area";
import {
  Camera,
  CheckCircle2,
  Sparkles,
  Upload,
  ArrowRight,
  ArrowLeft,
} from "lucide-react";
import confetti from "canvas-confetti";

interface SkinAnalysisDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

type Step = "upload" | "questions" | "recommendations";

interface SkinProfile {
  skinType: string;
  concerns: string[];
  goals: string[];
}

export function SkinAnalysisDialog({
  open,
  onOpenChange,
}: SkinAnalysisDialogProps) {
  const [currentStep, setCurrentStep] = useState<Step>("upload");
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [skinProfile, setSkinProfile] = useState<SkinProfile>({
    skinType: "",
    concerns: [],
    goals: [],
  });

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUploadedImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSkinTypeSelect = (type: string) => {
    setSkinProfile((prev) => ({ ...prev, skinType: type }));
  };

  const handleConcernToggle = (concern: string) => {
    setSkinProfile((prev) => ({
      ...prev,
      concerns: prev.concerns.includes(concern)
        ? prev.concerns.filter((c) => c !== concern)
        : [...prev.concerns, concern],
    }));
  };

  const handleGoalToggle = (goal: string) => {
    setSkinProfile((prev) => ({
      ...prev,
      goals: prev.goals.includes(goal)
        ? prev.goals.filter((g) => g !== goal)
        : [...prev.goals, goal],
    }));
  };

  const triggerConfetti = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ["#8b5cf6", "#ec4899", "#f59e0b", "#10b981", "#3b82f6"],
    });

    setTimeout(() => {
      confetti({
        particleCount: 50,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ["#8b5cf6", "#ec4899"],
      });
    }, 150);

    setTimeout(() => {
      confetti({
        particleCount: 50,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ["#10b981", "#3b82f6"],
      });
    }, 300);
  };

  const handleGetRecommendations = () => {
    setCurrentStep("recommendations");
    triggerConfetti();
  };

  const handleAddToCart = (productName: string) => {
    console.log(`Added to cart: ${productName}`);
    triggerConfetti();
    setTimeout(() => {
      onOpenChange(false);
    }, 500);
  };

  const getRecommendedProducts = () => {
    const products = [];

    // Based on concerns and goals, recommend products
    if (
      skinProfile.concerns.includes("Acne") ||
      skinProfile.concerns.includes("Breakouts")
    ) {
      products.push({
        name: "Custom Formula",
        description:
          "Personalized prescription treatment targeting acne, rosacea & dark spots",
        price: "$5.45",
        priceNote: "first month",
        image:
          "https://res.cloudinary.com/dbtapyfau/image/upload/v1762365786/bottleDesktop_402x_ceuyw2.jpg",
        isRx: true,
        tag: "Best for Acne",
      });
    }

    if (
      skinProfile.concerns.includes("Dark Spots") ||
      skinProfile.concerns.includes("Hyperpigmentation")
    ) {
      products.push({
        name: "Dark Spot Serum",
        description: "Discoloration Fading Complex with niacinamide",
        price: "$18.40",
        originalPrice: "$23.00",
        image:
          "https://res.cloudinary.com/dbtapyfau/image/upload/v1762363148/DSS_12x__601952_loonx1.png",
        isRx: false,
        discount: "20% OFF",
        tag: "Brightening",
      });
    }

    if (
      skinProfile.skinType === "Dry" ||
      skinProfile.concerns.includes("Dryness")
    ) {
      products.push({
        name: "Cream Moisturizer",
        description: "Rich hydration for dry skin",
        price: "$13.60",
        originalPrice: "$17.00",
        image:
          "https://res.cloudinary.com/dbtapyfau/image/upload/v1762778946/CM_43x__27440_br2szr.png",
        isRx: false,
        discount: "20% OFF",
        tag: "Hydrating",
      });
    }

    if (
      skinProfile.goals.includes("Anti-aging") ||
      skinProfile.concerns.includes("Fine Lines")
    ) {
      products.push({
        name: "HydroTret",
        description:
          "Target texture and hydrate for smoother, healthier-looking skin",
        price: "$5.45",
        priceNote: "first month",
        image:
          "https://res.cloudinary.com/dbtapyfau/image/upload/v1762778970/HydroTret_PDP_2_t09isj.jpg",
        isRx: true,
        tag: "Anti-Aging",
      });
    }

    // If no specific matches, add the starter set
    if (products.length === 0) {
      products.push({
        name: "Starter Set",
        description: "Gentle essentials for all skin types",
        price: "$22.40",
        originalPrice: "$28.00",
        image:
          "https://res.cloudinary.com/dbtapyfau/image/upload/v1762778990/image_asa28h.jpg",
        isRx: false,
        discount: "20% OFF",
        tag: "Perfect Start",
      });
    }

    return products;
  };

  const resetDialog = () => {
    setCurrentStep("upload");
    setUploadedImage(null);
    setSkinProfile({
      skinType: "",
      concerns: [],
      goals: [],
    });
  };

  const renderUploadStep = () => (
    <>
      <DialogHeader>
        <DialogTitle className="text-xl sm:text-2xl flex items-center gap-2">
          <Camera className="w-5 h-5 sm:w-6 sm:h-6 text-purple-500 flex-shrink-0" />
          <span>Let's Analyze Your Skin</span>
        </DialogTitle>
        <DialogDescription className="text-sm sm:text-base pt-2">
          Upload a clear selfie to help us understand your skin better
          (Optional)
        </DialogDescription>
      </DialogHeader>

      <div className="py-4">
        <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 sm:p-8 text-center hover:border-purple-400 transition-colors">
          {uploadedImage ? (
            <div className="space-y-3">
              <img
                src={uploadedImage}
                alt="Uploaded selfie"
                className="w-32 h-32 sm:w-40 sm:h-40 mx-auto rounded-full object-cover border-4 border-purple-200"
              />
              <div className="flex items-center justify-center gap-2 text-green-600">
                <CheckCircle2 className="w-4 h-4" />
                <span className="text-sm font-medium">Photo uploaded!</span>
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setUploadedImage(null)}
                className="text-xs"
              >
                Change Photo
              </Button>
            </div>
          ) : (
            <label className="cursor-pointer block">
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
              />
              <div className="flex flex-col items-center gap-3">
                <Upload className="w-12 h-12 text-gray-400" />
                <div>
                  <p className="text-sm sm:text-base font-medium text-gray-700">
                    Click to upload your selfie
                  </p>
                  <p className="text-xs sm:text-sm text-gray-500 mt-1">
                    or drag and drop
                  </p>
                </div>
                <p className="text-xs text-gray-400">PNG, JPG up to 10MB</p>
              </div>
            </label>
          )}
        </div>
      </div>

      <DialogFooter className="flex-col sm:flex-col gap-2">
        <Button
          className="w-full bg-purple-600 hover:bg-purple-700 text-sm sm:text-base"
          size="lg"
          onClick={() => setCurrentStep("questions")}
        >
          {uploadedImage ? "Continue to Questions" : "Skip & Continue"}
          <ArrowRight className="w-4 h-4 ml-2" />
        </Button>
        <Button
          variant="ghost"
          className="w-full text-sm sm:text-base"
          onClick={() => {
            resetDialog();
            onOpenChange(false);
          }}
        >
          Maybe Later
        </Button>
      </DialogFooter>
    </>
  );

  const renderQuestionsStep = () => (
    <>
      <DialogHeader>
        <DialogTitle className="text-xl sm:text-2xl flex items-center gap-2">
          <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-purple-500 flex-shrink-0" />
          <span>Tell Us About Your Skin</span>
        </DialogTitle>
        <DialogDescription className="text-sm sm:text-base pt-2">
          Answer a few questions to get personalized recommendations
        </DialogDescription>
      </DialogHeader>

      <ScrollArea className="max-h-[60vh] pr-4">
        <div className="space-y-6 py-2">
          {/* Skin Type */}
          <div>
            <Label className="text-sm sm:text-base font-semibold mb-3 block">
              What's your skin type?
            </Label>
            <div className="grid grid-cols-2 gap-2">
              {["Oily", "Dry", "Combination", "Normal"].map((type) => (
                <Button
                  key={type}
                  variant={
                    skinProfile.skinType === type ? "default" : "outline"
                  }
                  className={`text-xs sm:text-sm ${
                    skinProfile.skinType === type
                      ? "bg-purple-600 hover:bg-purple-700"
                      : ""
                  }`}
                  onClick={() => handleSkinTypeSelect(type)}
                >
                  {type}
                </Button>
              ))}
            </div>
          </div>

          {/* Skin Concerns */}
          <div>
            <Label className="text-sm sm:text-base font-semibold mb-3 block">
              What are your main skin concerns? (Select all that apply)
            </Label>
            <div className="grid grid-cols-2 gap-2">
              {[
                "Acne",
                "Dark Spots",
                "Fine Lines",
                "Dryness",
                "Redness",
                "Hyperpigmentation",
                "Breakouts",
                "Texture",
              ].map((concern) => (
                <Button
                  key={concern}
                  variant={
                    skinProfile.concerns.includes(concern)
                      ? "default"
                      : "outline"
                  }
                  className={`text-xs sm:text-sm ${
                    skinProfile.concerns.includes(concern)
                      ? "bg-purple-600 hover:bg-purple-700"
                      : ""
                  }`}
                  onClick={() => handleConcernToggle(concern)}
                >
                  {skinProfile.concerns.includes(concern) && (
                    <CheckCircle2 className="w-3 h-3 mr-1" />
                  )}
                  {concern}
                </Button>
              ))}
            </div>
          </div>

          {/* Skincare Goals */}
          <div>
            <Label className="text-sm sm:text-base font-semibold mb-3 block">
              What are your skincare goals? (Select all that apply)
            </Label>
            <div className="grid grid-cols-2 gap-2">
              {[
                "Clear Skin",
                "Hydration",
                "Brightening",
                "Anti-aging",
                "Smooth Texture",
                "Even Tone",
              ].map((goal) => (
                <Button
                  key={goal}
                  variant={
                    skinProfile.goals.includes(goal) ? "default" : "outline"
                  }
                  className={`text-xs sm:text-sm ${
                    skinProfile.goals.includes(goal)
                      ? "bg-purple-600 hover:bg-purple-700"
                      : ""
                  }`}
                  onClick={() => handleGoalToggle(goal)}
                >
                  {skinProfile.goals.includes(goal) && (
                    <CheckCircle2 className="w-3 h-3 mr-1" />
                  )}
                  {goal}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </ScrollArea>

      <DialogFooter className="flex-col sm:flex-col gap-2 mt-4">
        <Button
          className="w-full bg-purple-600 hover:bg-purple-700 text-sm sm:text-base"
          size="lg"
          onClick={handleGetRecommendations}
          disabled={
            !skinProfile.skinType ||
            skinProfile.concerns.length === 0 ||
            skinProfile.goals.length === 0
          }
        >
          Get My Recommendations
          <Sparkles className="w-4 h-4 ml-2" />
        </Button>
        <Button
          variant="outline"
          className="w-full text-sm sm:text-base"
          onClick={() => setCurrentStep("upload")}
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back
        </Button>
      </DialogFooter>
    </>
  );

  const renderRecommendationsStep = () => {
    const products = getRecommendedProducts();

    return (
      <>
        <DialogHeader>
          <DialogTitle className="text-xl sm:text-2xl flex items-center gap-2">
            <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-purple-500 flex-shrink-0 animate-pulse" />
            <span>Your Personalized Recommendations</span>
          </DialogTitle>
          <DialogDescription className="text-sm sm:text-base pt-2">
            Based on your {skinProfile.skinType.toLowerCase()} skin and{" "}
            {skinProfile.concerns.length} concern(s)
          </DialogDescription>
        </DialogHeader>

        <ScrollArea className="max-h-[60vh] pr-4">
          <div className="space-y-4 py-2">
            {products.map((product, index) => (
              <div
                key={index}
                className="border rounded-lg p-3 sm:p-4 bg-gradient-to-br from-purple-50 to-pink-50"
              >
                <div className="flex gap-3 sm:gap-4">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 bg-white rounded-lg flex items-center justify-center shadow-sm p-1.5 sm:p-2 flex-shrink-0">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="font-semibold text-base sm:text-lg">
                        {product.name}
                      </h3>
                      {product.isRx && (
                        <span className="text-[9px] sm:text-[10px] font-semibold bg-blue-100 text-blue-700 px-1 sm:px-1.5 py-0.5 rounded flex-shrink-0">
                          Rˣ
                        </span>
                      )}
                      {product.tag && (
                        <span className="text-[9px] sm:text-[10px] font-semibold bg-purple-100 text-purple-700 px-1 sm:px-1.5 py-0.5 rounded flex-shrink-0">
                          {product.tag}
                        </span>
                      )}
                    </div>
                    <p className="text-xs sm:text-sm text-gray-600 mt-1">
                      {product.description}
                    </p>
                    <div className="mt-2 flex flex-wrap items-center gap-1.5 sm:gap-2">
                      <span className="text-lg sm:text-xl font-bold text-purple-600">
                        {product.price}
                      </span>
                      {product.originalPrice && (
                        <span className="text-xs sm:text-sm text-gray-500 line-through">
                          {product.originalPrice}
                        </span>
                      )}
                      {product.discount && (
                        <span className="bg-red-100 text-red-700 text-[10px] sm:text-xs px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full font-semibold">
                          {product.discount}
                        </span>
                      )}
                      {product.priceNote && (
                        <span className="text-xs sm:text-sm text-gray-500">
                          {product.priceNote}
                        </span>
                      )}
                    </div>
                    <Button
                      className="w-full mt-3 bg-purple-600 hover:bg-purple-700 text-xs sm:text-sm"
                      size="sm"
                      onClick={() => handleAddToCart(product.name)}
                    >
                      Add to Cart
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-4 p-3 sm:p-4 bg-blue-50 rounded-lg border border-blue-200">
            <p className="text-xs sm:text-sm text-blue-900 font-medium mb-2">
              💡 Expert Tip
            </p>
            <p className="text-xs sm:text-sm text-blue-700">
              {skinProfile.skinType === "Dry" &&
                "For dry skin, apply moisturizer while your skin is still damp to lock in hydration."}
              {skinProfile.skinType === "Oily" &&
                "Even oily skin needs hydration! Use lightweight, non-comedogenic products."}
              {skinProfile.skinType === "Combination" &&
                "Focus on balancing your skin by using different products on different areas if needed."}
              {skinProfile.skinType === "Normal" &&
                "Maintain your healthy skin with a consistent routine and sun protection!"}
            </p>
          </div>
        </ScrollArea>

        <DialogFooter className="flex-col sm:flex-col gap-2 mt-4">
          <Button
            variant="outline"
            className="w-full text-sm sm:text-base"
            onClick={() => {
              resetDialog();
              onOpenChange(false);
            }}
          >
            Close
          </Button>
        </DialogFooter>
      </>
    );
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="w-[calc(100%-2rem)] max-w-md sm:w-full mx-auto max-h-[90vh] overflow-hidden">
        {currentStep === "upload" && renderUploadStep()}
        {currentStep === "questions" && renderQuestionsStep()}
        {currentStep === "recommendations" && renderRecommendationsStep()}
      </DialogContent>
    </Dialog>
  );
}
