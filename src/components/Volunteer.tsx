
import React, { useState } from 'react';
import { Users, Award, Heart, BookOpen, Image } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';

const Volunteer = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    skills: '',
    availability: '',
    interests: []
  });
  const { toast } = useToast();

  const volunteerRoles = [
    {
      icon: BookOpen,
      title: "Education Support",
      description: "Help with tutoring, teaching basic skills, and educational activities",
      time: "4-6 hours/week",
      color: "from-blue-500 to-indigo-600"
    },
    {
      icon: Heart,
      title: "Healthcare Assistance",
      description: "Support health checkups, awareness campaigns, and nutrition programs",
      time: "3-5 hours/week",
      color: "from-red-500 to-pink-600"
    },
    {
      icon: Users,
      title: "Community Outreach",
      description: "Engage with families, organize events, and build community connections",
      time: "5-8 hours/week",
      color: "from-emerald-500 to-teal-600"
    },
    {
      icon: Image,
      title: "Media & Documentation",
      description: "Photography, video creation, social media management, and storytelling",
      time: "2-4 hours/week",
      color: "from-purple-500 to-violet-600"
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Thank you for your interest!",
      description: "We'll contact you soon with volunteer opportunities. A certificate will be issued upon completion.",
    });
    setFormData({
      name: '',
      email: '',
      phone: '',
      skills: '',
      availability: '',
      interests: []
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="volunteer" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Join Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">Mission</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Become a volunteer and make a direct impact in the lives of children and families. 
            Together, we can create lasting change in our communities.
          </p>
        </div>

        {/* Benefits Section */}
        <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl p-8 md:p-12 text-white mb-16">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4">Why Volunteer With Us?</h3>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-white/20 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold mb-2">Certificates Issued</h4>
              <p className="text-emerald-100">Receive official volunteer certificates for your contribution</p>
            </div>
            <div className="text-center">
              <div className="bg-white/20 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold mb-2">Meaningful Impact</h4>
              <p className="text-emerald-100">See the direct results of your efforts in changing lives</p>
            </div>
            <div className="text-center">
              <div className="bg-white/20 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold mb-2">Community Network</h4>
              <p className="text-emerald-100">Connect with like-minded individuals and build lasting relationships</p>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Volunteer Roles */}
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-8">Volunteer Opportunities</h3>
            <div className="space-y-6">
              {volunteerRoles.map((role, index) => (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className={`bg-gradient-to-r ${role.color} p-3 rounded-lg`}>
                        <role.icon className="h-6 w-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="text-xl font-semibold text-gray-900">{role.title}</h4>
                          <span className="text-emerald-600 font-semibold text-sm">{role.time}</span>
                        </div>
                        <p className="text-gray-600">{role.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Volunteer Form */}
          <div>
            <Card className="shadow-xl border-0">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Volunteer Application</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name *</label>
                    <Input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address *</label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full"
                      placeholder="Enter your email address"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number *</label>
                    <Input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full"
                      placeholder="Enter your phone number"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Skills & Experience</label>
                    <Input
                      type="text"
                      name="skills"
                      value={formData.skills}
                      onChange={handleInputChange}
                      className="w-full"
                      placeholder="Teaching, healthcare, social work, etc."
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Availability</label>
                    <Input
                      type="text"
                      name="availability"
                      value={formData.availability}
                      onChange={handleInputChange}
                      className="w-full"
                      placeholder="Weekends, evenings, specific days"
                    />
                  </div>

                  <Button 
                    type="submit"
                    className="w-full bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white py-3 text-lg font-semibold"
                  >
                    <Users className="mr-2 h-5 w-5" />
                    Submit Application
                  </Button>
                </form>

                <p className="text-xs text-gray-500 text-center mt-4">
                  * Required fields. We'll contact you within 48 hours to discuss volunteer opportunities.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Volunteer;
