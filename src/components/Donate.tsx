
import React, { useState } from 'react';
import { Heart, Shield, Users, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';

const Donate = () => {
  const [selectedAmount, setSelectedAmount] = useState(1000);
  const [donationType, setDonationType] = useState('one-time');
  const { toast } = useToast();

  const donationAmounts = [500, 1000, 2500, 5000];

  const impactAreas = [
    {
      icon: BookOpen,
      title: "Education Support",
      description: "School supplies, books, and tutoring for underprivileged children",
      percentage: 40
    },
    {
      icon: Heart,
      title: "Healthcare Initiatives",
      description: "Medical checkups, nutrition programs, and health awareness",
      percentage: 35
    },
    {
      icon: Users,
      title: "Community Programs",
      description: "Skill development, women empowerment, and family support",
      percentage: 20
    },
    {
      icon: Shield,
      title: "Administrative Costs",
      description: "Operational expenses and program management",
      percentage: 5
    }
  ];

  const handleDonate = () => {
    toast({
      title: "Thank you for your support!",
      description: "You would be redirected to our secure payment gateway (Razorpay integration coming soon).",
    });
  };

  return (
    <section id="donate" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Make a <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">Difference</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your contribution directly impacts the lives of children and families in need. 
            Every donation helps us build stronger, more empowered communities.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Donation Form */}
          <div>
            <Card className="shadow-xl border-0">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Choose Your Contribution</h3>
                
                {/* Donation Type */}
                <div className="mb-6">
                  <label className="block text-sm font-semibold text-gray-700 mb-3">Donation Type</label>
                  <div className="flex space-x-4">
                    <button
                      className={`flex-1 py-3 px-4 rounded-lg border-2 transition-all duration-200 ${
                        donationType === 'one-time' 
                          ? 'border-emerald-500 bg-emerald-50 text-emerald-700' 
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                      onClick={() => setDonationType('one-time')}
                    >
                      One-time
                    </button>
                    <button
                      className={`flex-1 py-3 px-4 rounded-lg border-2 transition-all duration-200 ${
                        donationType === 'monthly' 
                          ? 'border-emerald-500 bg-emerald-50 text-emerald-700' 
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                      onClick={() => setDonationType('monthly')}
                    >
                      Monthly
                    </button>
                  </div>
                </div>

                {/* Amount Selection */}
                <div className="mb-6">
                  <label className="block text-sm font-semibold text-gray-700 mb-3">Amount (₹)</label>
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    {donationAmounts.map((amount) => (
                      <button
                        key={amount}
                        className={`py-3 px-4 rounded-lg border-2 transition-all duration-200 ${
                          selectedAmount === amount
                            ? 'border-emerald-500 bg-emerald-50 text-emerald-700'
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                        onClick={() => setSelectedAmount(amount)}
                      >
                        ₹{amount.toLocaleString()}
                      </button>
                    ))}
                  </div>
                  <input
                    type="number"
                    placeholder="Enter custom amount"
                    className="w-full py-3 px-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    onChange={(e) => setSelectedAmount(parseInt(e.target.value) || 0)}
                  />
                </div>

                {/* Impact Description */}
                <div className="mb-6 p-4 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-lg">
                  <h4 className="font-semibold text-emerald-800 mb-2">Your Impact:</h4>
                  <p className="text-emerald-700 text-sm">
                    ₹{selectedAmount.toLocaleString()} can provide educational support for {Math.floor(selectedAmount/500)} children 
                    or health checkups for {Math.floor(selectedAmount/300)} children for a month.
                  </p>
                </div>

                {/* Donate Button */}
                <Button 
                  onClick={handleDonate}
                  className="w-full bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <Heart className="mr-2 h-5 w-5" />
                  Donate ₹{selectedAmount.toLocaleString()} {donationType === 'monthly' ? '/month' : ''}
                </Button>

                <p className="text-xs text-gray-500 text-center mt-4">
                  Secure payment powered by Razorpay. All donations are tax-deductible.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Fund Usage */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">How Your Donation Helps</h3>
            <div className="space-y-6">
              {impactAreas.map((area, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                  <div className="flex items-start space-x-4">
                    <div className="bg-gradient-to-r from-emerald-500 to-teal-600 p-3 rounded-lg">
                      <area.icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-center mb-2">
                        <h4 className="font-semibold text-gray-900">{area.title}</h4>
                        <span className="text-emerald-600 font-bold">{area.percentage}%</span>
                      </div>
                      <p className="text-gray-600 text-sm mb-3">{area.description}</p>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-emerald-500 to-teal-600 h-2 rounded-full transition-all duration-500"
                          style={{ width: `${area.percentage}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Transparency Note */}
            <div className="mt-8 p-6 bg-blue-50 rounded-xl border border-blue-200">
              <h4 className="font-semibold text-blue-900 mb-2">Transparency Promise</h4>
              <p className="text-blue-800 text-sm">
                We are committed to full transparency in how your donations are used. 
                Regular impact reports and financial statements are published on our website.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Donate;
