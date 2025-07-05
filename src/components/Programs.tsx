
import React from 'react';
import { BookOpen, Heart, Users, Image } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Programs = () => {
  const programs = [
    {
      icon: BookOpen,
      title: "Education Initiatives",
      description: "Providing quality education, school supplies, and tutoring support to ensure every child has access to learning opportunities.",
      impact: "200+ children enrolled",
      color: "from-blue-500 to-indigo-600"
    },
    {
      icon: Heart,
      title: "Health & Nutrition",
      description: "Comprehensive healthcare programs including regular health checkups, nutrition support, and health awareness campaigns.",
      impact: "300+ health checkups conducted",
      color: "from-red-500 to-pink-600"
    },
    {
      icon: Users,
      title: "Community Development",
      description: "Building stronger communities through skill development workshops, women empowerment programs, and family support services.",
      impact: "50+ families supported",
      color: "from-emerald-500 to-teal-600"
    },
    {
      icon: Image,
      title: "Awareness Campaigns",
      description: "Organizing community awareness drives on important social issues, rights education, and sustainable development practices.",
      impact: "25+ awareness drives conducted",
      color: "from-purple-500 to-violet-600"
    }
  ];

  return (
    <section id="programs" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">Impact</span> Programs
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Through comprehensive programs addressing education, health, and community development, 
            we create lasting change in the lives of vulnerable children and families.
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {programs.map((program, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <CardContent className="p-8 text-center h-full flex flex-col">
                <div className={`bg-gradient-to-r ${program.color} p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center`}>
                  <program.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{program.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-6 flex-grow">{program.description}</p>
                <div className="bg-gray-100 px-4 py-2 rounded-lg">
                  <span className="text-sm font-semibold text-gray-700">{program.impact}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Impact Statistics */}
        <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl p-12 text-white">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">Real Community Impact</h3>
            <p className="text-xl text-emerald-100">
              Every program we run creates measurable, sustainable change in our communities
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-emerald-100">Children Reached</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-emerald-100">Families Supported</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">95%</div>
              <div className="text-emerald-100">School Retention Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">150+</div>
              <div className="text-emerald-100">Active Volunteers</div>
            </div>
          </div>
        </div>

        {/* Current Initiatives */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">Current Initiatives</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h4 className="text-xl font-bold text-gray-900 mb-4">Back-to-School Campaign 2024</h4>
              <p className="text-gray-600 mb-4">
                Providing school supplies, uniforms, and educational support to 200 children for the new academic year.
              </p>
              <div className="bg-blue-100 p-4 rounded-lg">
                <div className="flex justify-between items-center">
                  <span className="text-blue-700 font-semibold">Progress: 75%</span>
                  <span className="text-blue-600">₹150,000 raised</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h4 className="text-xl font-bold text-gray-900 mb-4">Health & Nutrition Drive</h4>
              <p className="text-gray-600 mb-4">
                Monthly health checkups and nutrition support for 100 children in underserved communities.
              </p>
              <div className="bg-green-100 p-4 rounded-lg">
                <div className="flex justify-between items-center">
                  <span className="text-green-700 font-semibold">Active Program</span>
                  <span className="text-green-600">100 children enrolled</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Programs;
