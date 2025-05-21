import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle } from "lucide-react";
import SEOHead from "@/components/seo-head";
import { useLanguage } from "@/context/language-context";
import { Button } from "@/components/ui/button";
import Link from "@/next-link";

export default function NotFound() {
  const { language } = useLanguage();
  
  // Define SEO metadata for the 404 page in both languages
  const seoMetadata = {
    title: {
      de: "404 - Seite nicht gefunden | Urban Reparaturen",
      en: "404 - Page Not Found | Urban Reparaturen"
    },
    description: {
      de: "Die gesuchte Seite konnte nicht gefunden werden. Kehren Sie zur Startseite von Urban Reparaturen zurück.",
      en: "The page you were looking for could not be found. Return to Urban Reparaturen homepage."
    },
    keywords: {
      de: "Fehler 404, Seite nicht gefunden, Urban Reparaturen",
      en: "Error 404, page not found, Urban Reparaturen"
    }
  }
  
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gray-50">
      <SEOHead metadata={seoMetadata} />
      <Card className="w-full max-w-md mx-4">
        <CardContent className="pt-6">
          <div className="flex mb-4 gap-2">
            <AlertCircle className="h-8 w-8 text-red-500" />
            <h1 className="text-2xl font-bold text-gray-900">
              {language === "de" ? "404 - Seite nicht gefunden" : "404 - Page Not Found"}
            </h1>
          </div>

          <p className="mt-4 text-sm text-gray-600">
            {language === "de" 
              ? "Die von Ihnen gesuchte Seite existiert nicht oder wurde verschoben."
              : "The page you are looking for doesn't exist or has been moved."}
          </p>
          
          <div className="mt-6">
            <Link href="/">
              <Button className="bg-[#1A4D3C] hover:bg-[#1A4D3C]/90 text-white w-full">
                {language === "de" ? "Zurück zur Startseite" : "Back to Homepage"}
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
