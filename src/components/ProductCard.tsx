
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LucideIcon } from 'lucide-react';

interface ProductCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  features: string[];
  color: string;
  ctaText: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  title,
  description,
  icon: Icon,
  features,
  color,
  ctaText
}) => {
  return (
    <Card className="glass-card overflow-hidden hover-lift transition-all duration-300 border-white/5 backdrop-blur-md">
      <CardHeader className="pb-2">
        <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${color}`}>
          <Icon className="h-6 w-6 text-white" />
        </div>
        <CardTitle className="text-xl font-bold text-white">{title}</CardTitle>
        <CardDescription className="text-white/70">{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <span className="w-6 h-6 rounded-full bg-brand-purple/20 flex items-center justify-center mr-2 mt-0.5">
                <span className="w-2 h-2 rounded-full bg-brand-purple"></span>
              </span>
              <span className="text-white/80 text-sm">{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Button variant="ghost" className="w-full border border-white/10 text-white hover:bg-brand-purple/20">
          {ctaText}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
