
import React from 'react';
import { Heart, Target, Eye, Users } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">Our Story</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Born from personal struggle and transformed into hope, CauseForConnect bridges the gap between 
            vulnerability and opportunity for children and families in need.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Founder's Story */}
          <div>
            <div className="mb-8">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Founder's Journey</h3>
              <div className="w-20 h-1 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full mb-6"></div>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Our founder's personal journey through adversity and struggle became the catalyst for change. 
                Having experienced firsthand the challenges faced by vulnerable families, she understood that 
                education, health, and community support could break the cycle of poverty.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                What started as a small initiative to help children in her neighborhood has grown into a 
                comprehensive organization dedicated to creating lasting impact through sustainable programs 
                and community engagement.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Today, CauseForConnect stands as a testament to the power of turning personal pain into 
                purpose, creating bridges of opportunity for those who need it most.
              </p>
            </div>
          </div>

          {/* Founder Image Placeholder */}
          <div className="relative">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-emerald-100 to-teal-100 p-8 flex items-center justify-center">
              <div className="text-center">
                <div className="bg-gradient-to-r from-emerald-500 to-teal-600 p-6 rounded-full mx-auto mb-4">
                  <Heart className="h-12 w-12 text-white" />
                </div>
                <p className="text-gray-600 font-medium">Founder's inspiring story</p>
                <p className="text-gray-500 text-sm">From struggle to strength</p>
              </div>
            </div>
          </div>
        </div>

        {/* Mission, Vision, Values */}
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardContent className="p-8 text-center">
              <div className="bg-gradient-to-r from-emerald-500 to-teal-600 p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To empower underprivileged children and families through comprehensive education, health initiatives, 
                and inclusive community programs that create sustainable positive change.
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardContent className="p-8 text-center">
              <div className="bg-gradient-to-r from-teal-500 to-cyan-600 p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <Eye className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                A world where every child has access to quality education, healthcare, and opportunities 
                to reach their full potential, regardless of their background or circumstances.
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardContent className="p-8 text-center">
              <div className="bg-gradient-to-r from-cyan-500 to-blue-600 p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Core Values</h3>
              <div className="text-gray-600 space-y-2">
                <div className="font-semibold text-emerald-600">Faith</div>
                <div className="font-semibold text-teal-600">Service</div>
                <div className="font-semibold text-cyan-600">Empowerment</div>
                <div className="font-semibold text-blue-600">Transparency</div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* SDG Goals */}
        <div className="mt-20 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Supporting UN SDG Goals</h3>
          <div className="flex flex-wrap justify-center items-center space-x-8 space-y-4">
            <div className="bg-red-100 px-6 py-3 rounded-lg">
              <span className="text-red-700 font-semibold">SDG 3: Good Health</span>
            </div>
            <div className="bg-blue-100 px-6 py-3 rounded-lg">
              <span className="text-blue-700 font-semibold">SDG 4: Quality Education</span>
            </div>
            <div className="bg-purple-100 px-6 py-3 rounded-lg">
              <span className="text-purple-700 font-semibold">SDG 10: Reduced Inequalities</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
