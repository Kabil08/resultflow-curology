import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";
import { IframeLayout } from "./IframeLayout";
import { ShoppingCart, RefreshCcw, Sparkles } from "lucide-react";

type ScenarioType = "urgency" | "subscription" | "skinanalysis" | null;

export function HomePage() {
  const [selectedScenario, setSelectedScenario] = useState<ScenarioType>(null);

  if (selectedScenario) {
    return <IframeLayout scenario={selectedScenario} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 py-8 px-4 sm:py-12 sm:px-6 md:py-16 md:px-8 overflow-y-auto">
      <div className="max-w-6xl w-full mx-auto">
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 px-2">
            Curology Experience Demo
          </h1>
          <p className="text-base sm:text-lg text-gray-600 px-4">
            Choose a scenario to explore different user engagement strategies
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Scenario 1: Urgency/Scarcity */}
          <Card
            className="hover:shadow-2xl transition-all duration-300 cursor-pointer border-2 hover:border-purple-400 bg-white active:scale-95 flex flex-col"
            onClick={() => setSelectedScenario("urgency")}
          >
            <CardHeader className="pb-4">
              <div className="flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-purple-100 mb-3 sm:mb-4">
                <ShoppingCart className="w-7 h-7 sm:w-8 sm:h-8 text-purple-600" />
              </div>
              <CardTitle className="text-xl sm:text-2xl">
                Urgency & Scarcity Alert
              </CardTitle>
              <CardDescription className="text-sm sm:text-base">
                Engage users who have been viewing a product for a while
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-grow flex flex-col">
              <div className="space-y-2 sm:space-y-3 text-xs sm:text-sm text-gray-600 flex-grow">
                <p>
                  ✨ <strong>Scenario:</strong> User has been browsing a
                  specific product
                </p>
                <p>
                  ⏰ <strong>Trigger:</strong> After few seconds on the site
                </p>
                <p>
                  🎯 <strong>Action:</strong> Show urgent message about limited
                  stock and special offer
                </p>
                <p>
                  🛒 <strong>CTA:</strong> Add to cart with special pricing
                </p>
              </div>
              <Button
                className="w-full mt-4 sm:mt-6 text-sm sm:text-base py-5 sm:py-6"
                style={{ backgroundColor: "rgb(111, 92, 255)" }}
              >
                Try Urgency Scenario
              </Button>
            </CardContent>
          </Card>

          {/* Scenario 2: Subscription Reminder */}
          <Card
            className="hover:shadow-2xl transition-all duration-300 cursor-pointer border-2 hover:border-blue-400 bg-white active:scale-95 flex flex-col"
            onClick={() => setSelectedScenario("subscription")}
          >
            <CardHeader className="pb-4">
              <div className="flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-blue-100 mb-3 sm:mb-4">
                <RefreshCcw className="w-7 h-7 sm:w-8 sm:h-8 text-blue-600" />
              </div>
              <CardTitle className="text-xl sm:text-2xl">
                Subscription Renewal
              </CardTitle>
              <CardDescription className="text-sm sm:text-base">
                Remind loyal customers about their product usage
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-grow flex flex-col">
              <div className="space-y-2 sm:space-y-3 text-xs sm:text-sm text-gray-600 flex-grow">
                <p>
                  ✨ <strong>Scenario:</strong> User subscribed a month ago
                </p>
                <p>
                  ⏰ <strong>Trigger:</strong> After few seconds on the site
                </p>
                <p>
                  🎯 <strong>Action:</strong> Remind about consistent usage and
                  upcoming product end
                </p>
                <p>
                  🔄 <strong>CTA:</strong> Resubscribe to continue benefits
                </p>
              </div>
              <Button className="w-full mt-4 sm:mt-6 bg-blue-600 hover:bg-blue-700 text-sm sm:text-base py-5 sm:py-6">
                Try Subscription Scenario
              </Button>
            </CardContent>
          </Card>

          {/* Scenario 3: Skin Analysis */}
          <Card
            className="hover:shadow-2xl transition-all duration-300 cursor-pointer border-2 hover:border-pink-400 bg-white active:scale-95 flex flex-col"
            onClick={() => setSelectedScenario("skinanalysis")}
          >
            <CardHeader className="pb-4">
              <div className="flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-pink-100 mb-3 sm:mb-4">
                <Sparkles className="w-7 h-7 sm:w-8 sm:h-8 text-pink-600" />
              </div>
              <CardTitle className="text-xl sm:text-2xl">
                Personalized Skin Analysis
              </CardTitle>
              <CardDescription className="text-sm sm:text-base">
                Guide curious users to find their perfect skincare match
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-grow flex flex-col">
              <div className="space-y-2 sm:space-y-3 text-xs sm:text-sm text-gray-600 flex-grow">
                <p>
                  ✨ <strong>Scenario:</strong> User is curious about skincare
                  but unsure what to buy
                </p>
                <p>
                  ⏰ <strong>Trigger:</strong> After few seconds on the site
                </p>
                <p>
                  🎯 <strong>Action:</strong> Upload selfie and answer skin
                  questions for analysis
                </p>
                <p>
                  🎁 <strong>CTA:</strong> Get personalized product
                  recommendations
                </p>
              </div>
              <Button className="w-full mt-4 sm:mt-6 bg-pink-600 hover:bg-pink-700 text-sm sm:text-base py-5 sm:py-6">
                Try Skin Analysis Scenario
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="mt-8 sm:mt-10 md:mt-12 text-center">
          <p className="text-xs sm:text-sm text-gray-500">
            Powered by{" "}
            <span className="font-semibold text-gray-700">ResultFlow.ai</span>
          </p>
        </div>
      </div>
    </div>
  );
}
