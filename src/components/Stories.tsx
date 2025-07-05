
import React from 'react';
import { BookOpen, Heart, Users, ArrowDown } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Stories = () => {
  const stories = [
    {
      category: "Success Story",
      title: "From Dropout to Dreamer: Priya's Journey",
      excerpt: "Meet Priya, who was on the verge of dropping out of school due to financial constraints. Through our education support program, she not only completed her studies but is now pursuing her dream of becoming a teacher.",
      date: "December 15, 2024",
      readTime: "4 min read",
      image: "photo-1581091226825-a6a2a5aee158"
    },
    {
      category: "Field Update",
      title: "Health Camp Reaches 200+ Children",
      excerpt: "Our recent health and nutrition camp in the rural areas of the district provided essential medical checkups, vaccinations, and nutritional supplements to over 200 children and their families.",
      date: "December 10, 2024",
      readTime: "3 min read",
      image: "photo-1486312338219-ce68d2c6f44d"
    },
    {
      category: "Founder's Note",
      title: "Reflections on Our Growing Impact",
      excerpt: "As we near the end of another impactful year, I reflect on the journey that brought us here and the incredible transformations we've witnessed in our communities.",
      date: "December 5, 2024",
      readTime: "5 min read",
      image: "photo-1506744038136-46273834b3fb"
    }
  ];

  const categories = [
    { name: "Success Stories", icon: Heart, count: 15, color: "from-red-500 to-pink-600" },
    { name: "Field Updates", icon: Users, count: 23, color: "from-emerald-500 to-teal-600" },
    { name: "Founder's Notes", icon: BookOpen, count: 8, color: "from-blue-500 to-indigo-600" }
  ];

  return (
    <section id="stories" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Stories of <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">Change</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Read inspiring stories of transformation, field updates from our programs, 
            and personal reflections from our founder's journey.
          </p>
        </div>

        {/* Story Categories */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {categories.map((category, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6 text-center">
                <div className={`bg-gradient-to-r ${category.color} p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center`}>
                  <category.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{category.name}</h3>
                <p className="text-gray-600">{category.count} stories published</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Featured Stories */}
        <div className="space-y-8 mb-12">
          {stories.map((story, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-0">
                <div className="grid md:grid-cols-3 gap-0">
                  {/* Image */}
                  <div className="md:col-span-1">
                    <div 
                      className="h-64 md:h-full bg-cover bg-center"
                      style={{
                        backgroundImage: `url(https://images.unsplash.com/${story.image}?auto=format&fit=crop&w=800&q=80)`
                      }}
                    ></div>
                  </div>
                  
                  {/* Content */}
                  <div className="md:col-span-2 p-8">
                    <div className="flex items-center space-x-4 mb-4">
                      <span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-sm font-semibold">
                        {story.category}
                      </span>
                      <span className="text-gray-500 text-sm">{story.date}</span>
                      <span className="text-gray-500 text-sm">{story.readTime}</span>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{story.title}</h3>
                    <p className="text-gray-600 leading-relaxed mb-6">{story.excerpt}</p>
                    
                    <Button 
                      variant="outline"
                      className="border-emerald-600 text-emerald-600 hover:bg-emerald-600 hover:text-white"
                    >
                      Read Full Story
                      <ArrowDown className="ml-2 h-4 w-4 rotate-[-90deg]" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Blog Subscription */}
        <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl p-8 md:p-12 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">Stay Updated with Our Stories</h3>
          <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
            Subscribe to receive the latest stories of impact, field updates, and insights 
            directly in your inbox.
          </p>
          
          <div className="max-w-md mx-auto flex space-x-4">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <Button className="bg-white text-emerald-600 hover:bg-gray-100 px-6 py-3">
              Subscribe
            </Button>
          </div>
          
          <p className="text-emerald-100 text-sm mt-4">
            Join 500+ subscribers who stay informed about our impact
          </p>
        </div>
      </div>
    </section>
  );
};

export default Stories;
