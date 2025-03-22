
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';

interface CaseStudyCardProps {
  company: string;
  challenge: string;
  solution: string;
  results: string[];
}

const CaseStudyCard: React.FC<CaseStudyCardProps> = ({
  company,
  challenge,
  solution,
  results
}) => {
  return (
    <Card className="glass-card overflow-hidden border-white/5 backdrop-blur-md">
      <CardHeader className="pb-2">
        <CardTitle className="text-2xl font-bold text-white">Success Story: {company}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <h4 className="text-brand-purple font-semibold mb-1">Challenge</h4>
          <p className="text-white/80">{challenge}</p>
        </div>
        
        <div>
          <h4 className="text-brand-purple font-semibold mb-1">Solution</h4>
          <p className="text-white/80">{solution}</p>
        </div>
        
        <div>
          <h4 className="text-brand-purple font-semibold mb-1">Results</h4>
          <ul className="space-y-1">
            {results.map((result, index) => (
              <li key={index} className="flex items-start">
                <span className="w-5 h-5 rounded-full bg-brand-purple/20 flex items-center justify-center mr-2 mt-0.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-purple"></span>
                </span>
                <span className="text-white/80">{result}</span>
              </li>
            ))}
          </ul>
        </div>
      </CardContent>
      <CardFooter>
        <Button variant="ghost" className="w-full border border-white/10 text-white hover:bg-brand-purple/20 group">
          <span>Read Full Case Study</span>
          <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CaseStudyCard;
