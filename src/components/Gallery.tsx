
import React, { useState } from 'react';
import { Image as ImageIcon, Video, Users, Heart } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Gallery = () => {
  const [activeTab, setActiveTab] = useState('photos');

  const photos = [
    {
      url: "photo-1518495973542-4542c06a5843",
      title: "Educational Workshop",
      description: "Children participating in our literacy program"
    },
    {
      url: "photo-1472396961693-142e6e269027",
      title: "Health Camp",
      description: "Medical checkups for rural communities"
    },
    {
      url: "photo-1517022812141-23620dba5c23",
      title: "Community Gathering",
      description: "Families coming together for awareness drive"
    },
    {
      url: "photo-1506744038136-46273834b3fb",
      title: "Nature Conservation",
      description: "Teaching environmental awareness"
    },
    {
      url: "photo-1581091226825-a6a2a5aee158",
      title: "Skill Development",
      description: "Women empowerment workshop"
    },
    {
      url: "photo-1486312338219-ce68d2c6f44d",
      title: "Digital Literacy",
      description: "Computer training for children"
    }
  ];

  const events = [
    {
      title: "Annual Education Drive 2024",
      date: "November 2024",
      description: "Distribution of school supplies to 200+ children",
      photos: 25
    },
    {
      title: "Health & Nutrition Camp",
      date: "October 2024",
      description: "Comprehensive health checkups for 150 families",
      photos: 40
    },
    {
      title: "Women Empowerment Workshop",
      date: "September 2024",
      description: "Skill development program for 50+ women",
      photos: 30
    },
    {
      title: "Community Awareness Drive",
      date: "August 2024",
      description: "Environmental and health awareness campaign",
      photos: 35
    }
  ];

  return (
    <section id="gallery" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">Gallery</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Capturing moments of joy, transformation, and community impact through our programs and initiatives.
          </p>
        </div>

        {/* Gallery Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-lg p-2 shadow-lg">
            <div className="flex space-x-2">
              <button
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg transition-all duration-200 ${
                  activeTab === 'photos' 
                    ? 'bg-gradient-to-r from-emerald-500 to-teal-600 text-white' 
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
                onClick={() => setActiveTab('photos')}
              >
                <ImageIcon className="h-5 w-5" />
                <span>Photos</span>
              </button>
              <button
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg transition-all duration-200 ${
                  activeTab === 'videos' 
                    ? 'bg-gradient-to-r from-emerald-500 to-teal-600 text-white' 
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
                onClick={() => setActiveTab('videos')}
              >
                <Video className="h-5 w-5" />
                <span>Videos</span>
              </button>
              <button
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg transition-all duration-200 ${
                  activeTab === 'events' 
                    ? 'bg-gradient-to-r from-emerald-500 to-teal-600 text-white' 
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
                onClick={() => setActiveTab('events')}
              >
                <Users className="h-5 w-5" />
                <span>Events</span>
              </button>
            </div>
          </div>
        </div>

        {/* Photos Tab */}
        {activeTab === 'photos' && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {photos.map((photo, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                <div className="relative">
                  <div 
                    className="h-64 bg-cover bg-center"
                    style={{
                      backgroundImage: `url(https://images.unsplash.com/${photo.url}?auto=format&fit=crop&w=800&q=80)`
                    }}
                  ></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <h3 className="text-lg font-semibold mb-1">{photo.title}</h3>
                    <p className="text-gray-200 text-sm">{photo.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        )}

        {/* Videos Tab */}
        {activeTab === 'videos' && (
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-0">
                <div className="aspect-video bg-gradient-to-br from-emerald-100 to-teal-100 flex items-center justify-center">
                  <div className="text-center">
                    <Video className="h-16 w-16 text-emerald-600 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Impact Documentary</h3>
                    <p className="text-gray-600">Stories of transformation from our communities</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg">
              <CardContent className="p-0">
                <div className="aspect-video bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center">
                  <div className="text-center">
                    <Video className="h-16 w-16 text-blue-600 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Founder's Message</h3>
                    <p className="text-gray-600">Personal journey and vision for the future</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Events Tab */}
        {activeTab === 'events' && (
          <div className="grid md:grid-cols-2 gap-8">
            {events.map((event, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="bg-gradient-to-r from-emerald-500 to-teal-600 p-3 rounded-lg">
                      <Heart className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{event.title}</h3>
                      <p className="text-emerald-600 font-medium mb-2">{event.date}</p>
                      <p className="text-gray-600 mb-4">{event.description}</p>
                      <div className="flex items-center space-x-2">
                        <ImageIcon className="h-4 w-4 text-gray-400" />
                        <span className="text-gray-500 text-sm">{event.photos} photos</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">Share Your Story</h3>
            <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
              Have photos or videos from our events? We'd love to feature your perspective 
              in our community gallery.
            </p>
            <button className="bg-white text-emerald-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors duration-200">
              Submit Photos
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
