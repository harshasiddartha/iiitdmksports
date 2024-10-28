// components/Log.tsx


import { SignInButton,  } from '@clerk/nextjs';

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

type Sport = {
  name: string;
  emoji: string;
  price: number;
  description: string;
};

const sports: Sport[] = [
  { name: 'Table Tennis', emoji: '🏓', price: 500, description: 'Improve your reflexes and coordination' },
  { name: 'Badminton', emoji: '🏸', price: 500, description: 'Enhance your agility and stamina' },
  { name: 'Gym', emoji: '🏋️‍♂️', price: 1000, description: 'Build strength and stay fit' },
  { name: 'Carrom', emoji: '🎲', price: 300, description: 'Develop strategy and precision' },
];

const LoginPage = async  () => {
    
  return (
    
    <div>
         <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-r from-blue-50 via-blue-100 to-blue-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Welcome to IIITDM Sports
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Discover a wide range of sports facilities and activities at IIITDM. Stay fit, have fun, and excel in your favorite sports.
                </p>
              </div>
              <div className="space-x-4">
              <SignInButton>
      <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg">
        Book a slot
      </button>
    </SignInButton>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
              Available Sports
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {sports.map((sport) => (
                <Card key={sport.name} className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <CardTitle className="text-center text-3xl font-bold mb-2">
                      {sport.emoji}
                    </CardTitle>
                    <CardTitle className="text-center text-xl font-semibold">
                      {sport.name}
                    </CardTitle>
                    <CardDescription className="text-center">
                      {sport.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-2xl font-bold text-primary mb-4">₹{sport.price}/-</p>
                    <SignInButton>
      <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg">
        Book a slot
      </button>
    </SignInButton>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      
    </div>
  );
};

export default LoginPage;
