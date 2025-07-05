
import React from 'react';
import { PieChart, Shield, FileText, Award } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Transparency = () => {
  const fundUsage = [
    { category: "Education Programs", percentage: 40, amount: "₹4,00,000", color: "from-blue-500 to-indigo-600" },
    { category: "Healthcare Initiatives", percentage: 35, amount: "₹3,50,000", color: "from-red-500 to-pink-600" },
    { category: "Community Development", percentage: 20, amount: "₹2,00,000", color: "from-emerald-500 to-teal-600" },
    { category: "Administrative Costs", percentage: 5, amount: "₹50,000", color: "from-gray-500 to-gray-600" }
  ];

  const certifications = [
    {
      title: "NGO Registration",
      description: "Officially registered under the Indian Societies Registration Act",
      status: "Valid",
      year: "2023"
    },
    {
      title: "12A Registration",
      description: "Income Tax exemption under Section 12A",
      status: "Active",
      year: "2023"
    },
    {
      title: "80G Certification",
      description: "Tax deduction benefits for donors under Section 80G",
      status: "Valid",
      year: "2024"
    },
    {
      title: "FCRA Compliance",
      description: "Foreign Contribution Regulation Act compliance",
      status: "Pending",
      year: "2024"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">Transparency</span> Commitment
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We believe in complete transparency with our donors and community. 
            Here's how every rupee is utilized to create maximum impact.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Fund Usage Chart */}
          <div>
            <Card className="shadow-xl border-0">
              <CardContent className="p-8">
                <div className="flex items-center space-x-3 mb-8">
                  <div className="bg-gradient-to-r from-emerald-500 to-teal-600 p-3 rounded-lg">
                    <PieChart className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Fund Utilization</h3>
                </div>

                <div className="space-y-6">
                  {fundUsage.map((item, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-semibold text-gray-900">{item.category}</span>
                        <div className="text-right">
                          <div className="font-bold text-gray-900">{item.percentage}%</div>
                          <div className="text-sm text-gray-600">{item.amount}</div>
                        </div>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3">
                        <div 
                          className={`bg-gradient-to-r ${item.color} h-3 rounded-full transition-all duration-500`}
                          style={{ width: `${item.percentage}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 p-4 bg-emerald-50 rounded-lg border border-emerald-200">
                  <h4 className="font-semibold text-emerald-800 mb-2">Total Funds Raised (2024)</h4>
                  <p className="text-2xl font-bold text-emerald-900">₹10,00,000</p>
                  <p className="text-emerald-700 text-sm mt-1">Across all programs and initiatives</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Impact Metrics */}
          <div>
            <Card className="shadow-xl border-0">
              <CardContent className="p-8">
                <div className="flex items-center space-x-3 mb-8">
                  <div className="bg-gradient-to-r from-blue-500 to-indigo-600 p-3 rounded-lg">
                    <Award className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Impact Achieved</h3>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
                    <div className="text-blue-800 font-medium">Children Supported</div>
                  </div>
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <div className="text-3xl font-bold text-green-600 mb-2">50+</div>
                    <div className="text-green-800 font-medium">Families Empowered</div>
                  </div>
                  <div className="text-center p-4 bg-purple-50 rounded-lg">
                    <div className="text-3xl font-bold text-purple-600 mb-2">25+</div>
                    <div className="text-purple-800 font-medium">Community Programs</div>
                  </div>
                  <div className="text-center p-4 bg-red-50 rounded-lg">
                    <div className="text-3xl font-bold text-red-600 mb-2">95%</div>
                    <div className="text-red-800 font-medium">Program Success Rate</div>
                  </div>
                </div>

                <div className="mt-8 p-4 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-lg text-white">
                  <h4 className="font-semibold mb-2">Cost Per Beneficiary</h4>
                  <p className="text-2xl font-bold">₹2,000</p>
                  <p className="text-emerald-100 text-sm mt-1">Annual comprehensive support per child</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Certifications and Compliance */}
        <div>
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Legal Compliance & Certifications</h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We maintain all required certifications and comply with regulatory requirements 
              to ensure transparency and accountability.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6 text-center">
                  <div className="bg-gradient-to-r from-emerald-500 to-teal-600 p-3 rounded-full w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                    {cert.status === 'Valid' || cert.status === 'Active' ? (
                      <Shield className="h-6 w-6 text-white" />
                    ) : (
                      <FileText className="h-6 w-6 text-white" />
                    )}
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">{cert.title}</h4>
                  <p className="text-gray-600 text-sm mb-4">{cert.description}</p>
                  <div className="flex justify-between items-center">
                    <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                      cert.status === 'Valid' || cert.status === 'Active' 
                        ? 'bg-green-100 text-green-700' 
                        : 'bg-yellow-100 text-yellow-700'
                    }`}>
                      {cert.status}
                    </span>
                    <span className="text-gray-500 text-xs">{cert.year}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Annual Reports */}
        <div className="mt-16 text-center">
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Annual Reports & Financials</h3>
            <p className="text-gray-600 mb-6">
              Access our detailed annual reports, financial statements, and impact assessments.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-emerald-600 hover:to-teal-700 transition-all duration-200">
                Download 2024 Report
              </button>
              <button className="border-2 border-emerald-600 text-emerald-600 px-6 py-3 rounded-lg font-semibold hover:bg-emerald-600 hover:text-white transition-all duration-200">
                View Financial Statements
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Transparency;
