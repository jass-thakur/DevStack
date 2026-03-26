import { Footer } from "@/components/Footer";
import { useEffect } from "react";

export default function TermsPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background flex flex-col text-white pt-24">
      <div className="container mx-auto px-4 max-w-4xl flex-1 mb-20">
        <h1 className="text-4xl font-bold mb-8 gradient-text">Terms and Conditions</h1>
        
        <div className="space-y-8 text-muted-foreground leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">1. Background Data Usage</h2>
            <p>
              Welcome to DevStack Explorer. These terms and conditions outline the rules and regulations for the use of our application.
              By accessing this website, we assume you accept these terms and conditions. Do not continue to use DevStack Explorer if you do not agree to take all of the terms and conditions stated on this page.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">2. API Keys and Fair Use</h2>
            <p>
              Our service integrates directly with third-party AI APIs (such as Google Gemini). Users are required to provide their own API keys or rely on a global key if configured. It is strictly your responsibility to manage billing, quota limits, and API usage on your personal keys. DevStack Explorer does not assume liability for unexpected API charges.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">3. Disclaimer of Warranties</h2>
            <p>
              The materials on DevStack Explorer's website are provided on an 'as is' basis. DevStack Explorer makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">4. Limitations</h2>
            <p>
              In no event shall DevStack Explorer or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on DevStack Explorer's website.
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
}
