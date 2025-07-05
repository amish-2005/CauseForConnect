
import React from 'react';
import { ArrowDown, Heart, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm mb-8 animate-fade-in">
            <Heart className="h-4 w-4 text-emerald-600" />
            <span className="text-emerald-700 font-medium text-sm">Supporting SDG Goals 3, 4, and 10</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 animate-fade-in">
            Empowering <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">Children</span>,
            <br />
            Building <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-600">Communities</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in">
            Through education, health initiatives, and inclusive community programs, we bridge the gap between 
            vulnerability and opportunity for underprivileged children and families.
          </p>

          {/* Stats */}
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8 mb-12 animate-fade-in">
            <div className="flex items-center space-x-2">
              <div className="bg-emerald-100 p-2 rounded-lg">
                <Users className="h-5 w-5 text-emerald-600" />
              </div>
              <div className="text-left">
                <div className="text-2xl font-bold text-gray-900">500+</div>
                <div className="text-sm text-gray-600">Children Supported</div>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <div className="bg-teal-100 p-2 rounded-lg">
                <Heart className="h-5 w-5 text-teal-600" />
              </div>
              <div className="text-left">
                <div className="text-2xl font-bold text-gray-900">12</div>
                <div className="text-sm text-gray-600">Active Programs</div>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <div className="bg-cyan-100 p-2 rounded-lg">
                <Users className="h-5 w-5 text-cyan-600" />
              </div>
              <div className="text-left">
                <div className="text-2xl font-bold text-gray-900">150+</div>
                <div className="text-sm text-gray-600">Volunteers</div>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12 animate-fade-in">
            <Button 
              size="lg"
              className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              onClick={() => document.getElementById('donate')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Heart className="mr-2 h-5 w-5" />
              Make a Donation
            </Button>
            
            <Button 
              variant="outline"
              size="lg"
              className="border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-600 hover:text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              onClick={() => document.getElementById('volunteer')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Users className="mr-2 h-5 w-5" />
              Become a Volunteer
            </Button>
          </div>

          {/* Scroll Indicator */}
          <div className="animate-bounce">
            <button
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-gray-500 hover:text-emerald-600 transition-colors duration-200"
            >
              <ArrowDown className="h-6 w-6 mx-auto" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
