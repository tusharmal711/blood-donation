import React, { useState } from 'react';
import { 
  Gift, 
  Award, 
  Star, 
  Heart, 
  Trophy, 
  Medal,
  Coffee,
  ShoppingBag,
  Ticket,
  Crown,
  Zap,
  Target
} from 'lucide-react';

const BloodReward = () => {
  const [selectedTier, setSelectedTier] = useState('bronze');

  const rewardTiers = {
    bronze: {
      name: 'Bronze Donor',
      donations: '1-5 Donations',
      color: 'from-amber-600 to-yellow-700',
      icon: <Medal className="w-8 h-8" />,
      rewards: [
        { icon: <Coffee className="w-6 h-6" />, title: 'Free Coffee', description: 'Complimentary beverage at donation centers' },
        { icon: <Gift className="w-6 h-6" />, title: 'Welcome Kit', description: 'Donor handbook and care package' },
        { icon: <Heart className="w-6 h-6" />, title: 'Thank You Card', description: 'Personalized appreciation message' }
      ]
    },
    silver: {
      name: 'Silver Donor',
      donations: '6-15 Donations',
      color: 'from-gray-400 to-gray-600',
      icon: <Award className="w-8 h-8" />,
      rewards: [
        { icon: <Ticket className="w-6 h-6" />, title: 'Movie Tickets', description: 'Free cinema passes for you and a friend' },
        { icon: <ShoppingBag className="w-6 h-6" />, title: 'Shopping Vouchers', description: '$25 gift cards to local retailers' },
        { icon: <Star className="w-6 h-6" />, title: 'Priority Scheduling', description: 'Skip the line with preferred appointments' }
      ]
    },
    gold: {
      name: 'Gold Donor',
      donations: '16-30 Donations',
      color: 'from-yellow-400 to-yellow-600',
      icon: <Trophy className="w-8 h-8" />,
      rewards: [
        { icon: <Gift className="w-6 h-6" />, title: 'Premium Rewards', description: '$100 gift cards and exclusive merchandise' },
        { icon: <Zap className="w-6 h-6" />, title: 'VIP Experience', description: 'Private donation suites and premium snacks' },
        { icon: <Target className="w-6 h-6" />, title: 'Health Checkups', description: 'Free annual health screenings' }
      ]
    },
    platinum: {
      name: 'Platinum Hero',
      donations: '31+ Donations',
      color: 'from-purple-500 to-indigo-600',
      icon: <Crown className="w-8 h-8" />,
      rewards: [
        { icon: <Trophy className="w-6 h-6" />, title: 'Exclusive Events', description: 'Access to donor appreciation galas' },
        { icon: <Gift className="w-6 h-6" />, title: 'Lifetime Rewards', description: 'Ongoing benefits and recognition' },
        { icon: <Star className="w-6 h-6" />, title: 'Hall of Fame', description: 'Recognition in our donor hall of fame' }
      ]
    }
  };

  const stats = [
    { number: '50,000+', label: 'Rewards Given', icon: <Gift className="w-6 h-6" /> },
    { number: '25,000+', label: 'Active Donors', icon: <Heart className="w-6 h-6" /> },
    { number: '$2M+', label: 'Value Distributed', icon: <Award className="w-6 h-6" /> },
    { number: '95%', label: 'Satisfaction Rate', icon: <Star className="w-6 h-6" /> }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-blue-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-red-600 via-red-700 to-purple-800 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 py-20">
          <div className="text-center">
            <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full mb-6">
              <Gift className="w-6 h-6 text-yellow-300" />
              <span className="font-semibold">Reward Program</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-white via-yellow-200 to-pink-200 bg-clip-text text-transparent leading-tight">
              Donate Blood,
              <br />
              Earn Rewards
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-8 font-light">
              Your generosity deserves recognition. Join our reward program and earn amazing benefits while saving lives.
            </p>
          </div>
        </div>
        
        {/* Floating elements */}
        <div className="absolute top-20 left-10 animate-bounce delay-100">
          <div className="w-16 h-16 bg-yellow-400/20 rounded-full flex items-center justify-center">
            <Star className="w-8 h-8 text-yellow-300" />
          </div>
        </div>
        <div className="absolute bottom-20 right-10 animate-bounce delay-300">
          <div className="w-20 h-20 bg-pink-400/20 rounded-full flex items-center justify-center">
            <Heart className="w-10 h-10 text-pink-300" />
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-red-500 to-purple-600 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                  <div className="text-white">{stat.icon}</div>
                </div>
                <div className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Reward Tiers */}
      <div className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Reward Tiers
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The more you donate, the better your rewards get. Each donation brings you closer to exclusive benefits and recognition.
            </p>
          </div>

          {/* Tier Selection */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {Object.entries(rewardTiers).map(([key, tier]) => (
              <button
                key={key}
                onClick={() => setSelectedTier(key)}
                className={`flex items-center gap-3 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  selectedTier === key
                    ? `bg-gradient-to-r ${tier.color} text-white shadow-lg scale-105`
                    : 'bg-white text-gray-600 hover:bg-gray-50 shadow-md hover:shadow-lg'
                }`}
              >
                {tier.icon}
                <span>{tier.name}</span>
              </button>
            ))}
          </div>

          {/* Selected Tier Display */}
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div className={`bg-gradient-to-r ${rewardTiers[selectedTier].color} p-8 text-white`}>
              <div className="flex items-center justify-center gap-4 mb-4">
                {rewardTiers[selectedTier].icon}
                <h3 className="text-3xl font-bold">{rewardTiers[selectedTier].name}</h3>
              </div>
              <p className="text-center text-xl opacity-90">{rewardTiers[selectedTier].donations}</p>
            </div>
            
            <div className="p-8">
              <div className="grid md:grid-cols-3 gap-6">
                {rewardTiers[selectedTier].rewards.map((reward, index) => (
                  <div key={index} className="group text-center p-6 rounded-2xl bg-gradient-to-br from-gray-50 to-white hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-red-500 to-purple-600 text-white rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                      {reward.icon}
                    </div>
                    <h4 className="text-xl font-bold text-gray-800 mb-2">{reward.title}</h4>
                    <p className="text-gray-600">{reward.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* How It Works */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              How It Works
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Getting rewarded for your life-saving donations is simple and automatic.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: '01',
                title: 'Donate Blood',
                description: 'Make your donation at any participating center',
                icon: <Heart className="w-8 h-8" />
              },
              {
                step: '02',
                title: 'Earn Points',
                description: 'Automatically receive points for each donation',
                icon: <Star className="w-8 h-8" />
              },
              {
                step: '03',
                title: 'Claim Rewards',
                description: 'Redeem points for amazing rewards and benefits',
                icon: <Gift className="w-8 h-8" />
              }
            ].map((item, index) => (
              <div key={index} className="relative text-center group">
                <div className="bg-gradient-to-r from-red-500 to-purple-600 text-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <div className="absolute -top-4 -right-4 bg-yellow-400 text-black font-bold text-lg w-12 h-12 rounded-full flex items-center justify-center">
                  {item.step}
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">{item.title}</h3>
                <p className="text-gray-600 text-lg">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-gradient-to-r from-red-600 via-red-700 to-purple-800 text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Start Earning Rewards?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Join thousands of donors who are already enjoying amazing benefits while making a difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-red-600 font-bold px-8 py-4 rounded-full text-lg transition-all duration-300 hover:bg-gray-100 hover:shadow-xl transform hover:scale-105">
              Schedule Donation
            </button>
            <button className="border-2 border-white text-white font-bold px-8 py-4 rounded-full text-lg transition-all duration-300 hover:bg-white hover:text-red-600 transform hover:scale-105">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BloodReward;