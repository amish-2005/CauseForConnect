
import React, { useState } from 'react';
import { Mail, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      toast({
        title: "Successfully subscribed!",
        description: "Thank you for joining our community. You'll receive our latest updates soon.",
      });
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  return (
    <section className="py-20 bg-gradient-to-r from-emerald-600 to-teal-600">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8">
          <div className="bg-white/20 p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
            <Mail className="h-8 w-8 text-white" />
          </div>
          <h2 className="text-4xl font-bold text-white mb-4">
            Stay Connected with Our Mission
          </h2>
          <p className="text-xl text-emerald-100 max-w-2xl mx-auto">
            Get the latest updates on our programs, success stories, and opportunities 
            to make a difference in your community.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <div className="flex space-x-4 mb-6">
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 bg-white/90 backdrop-blur-sm border-0 rounded-lg text-gray-900 placeholder-gray-500 focus:bg-white focus:ring-2 focus:ring-white"
              required
            />
            <Button 
              type="submit"
              className="bg-white text-emerald-600 hover:bg-gray-100 px-6 py-3 font-semibold transition-all duration-200"
              disabled={isSubscribed}
            >
              {isSubscribed ? (
                <Check className="h-5 w-5" />
              ) : (
                'Subscribe'
              )}
            </Button>
          </div>
        </form>

        <div className="text-emerald-100 text-sm">
          <p className="mb-2">Join 500+ subscribers who stay informed about our impact</p>
          <p>We respect your privacy. Unsubscribe at any time.</p>
        </div>

        {/* Newsletter Benefits */}
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          <div className="text-center">
            <h3 className="text-lg font-semibold text-white mb-2">Impact Updates</h3>
            <p className="text-emerald-100 text-sm">Monthly reports on program outcomes and community impact</p>
          </div>
          <div className="text-center">
            <h3 className="text-lg font-semibold text-white mb-2">Success Stories</h3>
            <p className="text-emerald-100 text-sm">Inspiring stories of transformation from our beneficiaries</p>
          </div>
          <div className="text-center">
            <h3 className="text-lg font-semibold text-white mb-2">Get Involved</h3>
            <p className="text-emerald-100 text-sm">Early access to volunteer opportunities and events</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
