import { useState, useEffect, useCallback } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const reviews = [
  { name: "Kelly Russell", initial: "K", color: "bg-gray-500", stars: 5, text: "Scott was AMAZING! He took care of my concerns with crickets, spiders, and earwigs immediately! He uses Eco friendly products that are safe around children and animals. There was no smell left in my home after he sprayed which I was very happy about. I've had many exterminators in the past, and I felt that his pricing was awesome, and his monthly fees are lower than any company I've ever worked with. I would definitely recommend anyone to Selke Pest Control." },
  { name: "Johnny Ahrens", initial: "J", color: "bg-gray-500", stars: 5, text: "Scott and his team have been fantastic to work with. They're responsive, professional, and clearly take pride in doing things the right way. From the initial inspection through treatment and follow-up, everything was handled efficiently and communicated clearly. What stood out most was their attention to detail and willingness to answer questions without trying to upsell unnecessary services. It's refreshing to work with a local business that genuinely cares about its customers and stands behind its work. If you're looking for a reliable pest control company, I would highly recommend Scott and his team. Excellent service, great people, and results you can count on." },
  { name: "Raegan Kernan", initial: "R", color: "bg-red-500", stars: 5, text: "Highly recommend! Professional, reliable, and incredibly knowledgeable. They were responsive, thorough, and made the entire process easy from start to finish. It's clear they genuinely care about their customers and take pride in their work. If you're looking for pest control, look no further!" },
  { name: "Andy Gilvey", initial: "A", color: "bg-blue-500", stars: 5, text: "Scott was great. He was able to come out to Cornelius and help us with a nasty hornet problem on very short notice before the weekend. He was very knowledgeable and honest and explained everything he was going to do. He stayed a while to make sure the situation was appropriately handled before leaving and took his time to do good work. It was also a bonus to get a live person on the phone. I would highly recommend Selke to anyone in the area who needs pest control and wants the job done right." },
  { name: "Garrett Nelson", initial: "G", color: "bg-green-600", stars: 5, text: "Scott is an unbelievable person. Highly recommend Selke for your pest control needs. I keep this guy on speed dial. Will drop anything for his customers. Support local family business that care rather than the corporate guys just looking for a check." },
  { name: "Garrett White", initial: "G", color: "bg-purple-600", stars: 5, text: "I've used other pest control companies in the past but the bug issue persists. What differentiates Selke from the rest is they're a premier service that also addresses yard concerns. Treating the yard in tandem with the basic services that other companies provide ended up being the game changer. No more bug problems!" },
  { name: "Anthony Criscuolo", initial: "A", color: "bg-orange-500", stars: 5, text: "Great experience with this company. They were friendly, and made the whole process easy. The technician explained everything clearly and did a thorough job. We've already noticed a big improvement and are really happy with the service." },
  { name: "Matt Oches", initial: "M", color: "bg-purple-500", stars: 5, text: "A big shout-out to Selke Pest Control for supporting the community! It's always great to see local businesses investing in and giving back to the neighborhoods they serve. Their willingness to offer special promotions and engage with residents shows a commitment to building relationships, not just growing a business. Thank you for supporting our community and helping make it a great place to live. Wishing you continued success!" },
  { name: "Jordan Singor", initial: "J", color: "bg-purple-600", stars: 5, text: "They responded quickly, and the technician was professional, thorough, and explained everything clearly. The treatment worked as expected, and we've had no issues since. Fair price and great service — highly recommend them for anyone needing reliable pest control around Charlotte." },
  { name: "Marsha Hathcock", initial: "M", color: "bg-cyan-600", stars: 5, text: "Hands down the best around. My third pest control company and I have finally found a keeper. They go the extra mile!" },
  { name: "David Garber", initial: "D", color: "bg-blue-600", stars: 5, text: "Switched from Terminix to Selke and wish I would have done so sooner. Haven't seen a single bug in months, and no more mosquitos! Highly recommend them to anyone dealing with pests." },
  { name: "Morgan Singor", initial: "M", color: "bg-yellow-500", stars: 5, text: "Best quote I got and we have seen a dramatic decrease in mosquitos! 100/10 would use again." },
  { name: "Kalon Foss", initial: "K", color: "bg-green-500", stars: 5, text: "I've done work with Scott for years and have always been impressed with how he runs a business. He is always putting the customer first, attentive to their needs, and over delivers!" },
  { name: "Jessica Brown", initial: "J", color: "bg-gray-600", stars: 5, text: "Quick to come out and after 1 treatment we're already seeing a difference. Highly recommend!!" },
  { name: "Mike Smyre", initial: "M", color: "bg-purple-500", stars: 5, text: "Cannot recommend these guys enough. Great service every single time." },
  { name: "Liviu Peter", initial: "L", color: "bg-green-700", stars: 5, text: "Scott was great. Responded quickly, and very thorough. Cannot recommend enough!" },
  { name: "Hillary Graham", initial: "H", color: "bg-green-600", stars: 5, text: "Excellent service! 10/10 recommend!" },
  { name: "Mason Cossette", initial: "M", color: "bg-blue-700", stars: 5, text: "Great experience! Highly recommend!" },
  { name: "Brett Metcalf", initial: "B", color: "bg-blue-500", stars: 5, text: "5 stars — outstanding service from start to finish." },
];

const VISIBLE = 3;

export function ReviewsCarousel() {
  const [start, setStart] = useState(0);
  const [paused, setPaused] = useState(false);
  const total = reviews.length;

  const next = useCallback(() => {
    setStart((s) => (s + 1) % total);
  }, [total]);

  const prev = () => setStart((s) => (s - 1 + total) % total);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(next, 9000);
    return () => clearInterval(timer);
  }, [paused, next]);

  const visible = Array.from({ length: VISIBLE }, (_, i) => reviews[(start + i) % total]);

  return (
    <div className="relative" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {visible.map((review, i) => (
          <div key={`${review.name}-${start}-${i}`} className="bg-white rounded-xl p-6 shadow-lg flex flex-col">
            <div className="flex items-center gap-3 mb-3">
              <div className={`w-10 h-10 rounded-full ${review.color} flex items-center justify-center flex-shrink-0`}>
                <span className="text-white font-medium text-sm">{review.initial}</span>
              </div>
              <div>
                <p className="font-semibold text-gray-900 text-sm">{review.name}</p>
                <div className="flex gap-0.5 mt-0.5">
                  {[...Array(review.stars)].map((_, j) => (
                    <Star key={j} className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>
              <div className="ml-auto">
                <svg viewBox="0 0 24 24" className="w-5 h-5" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
              </div>
            </div>
            <p className="text-gray-700 text-sm leading-relaxed flex-1">"{review.text}"</p>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-center gap-4 mt-8">
        <button onClick={prev} className="w-10 h-10 rounded-full bg-white border border-gray-200 shadow flex items-center justify-center hover:bg-cyan-50 hover:border-cyan-300 transition-colors" aria-label="Previous reviews">
          <ChevronLeft className="w-5 h-5 text-gray-600" />
        </button>
        <div className="flex gap-1.5">
          {reviews.map((_, i) => (
            <button key={i} onClick={() => setStart(i)} className={`rounded-full transition-all ${i === start ? 'w-6 h-2 bg-cyan-500' : 'w-2 h-2 bg-gray-300 hover:bg-gray-400'}`} aria-label={`Go to review ${i + 1}`} />
          ))}
        </div>
        <button onClick={next} className="w-10 h-10 rounded-full bg-white border border-gray-200 shadow flex items-center justify-center hover:bg-cyan-50 hover:border-cyan-300 transition-colors" aria-label="Next reviews">
          <ChevronRight className="w-5 h-5 text-gray-600" />
        </button>
      </div>

      <div className="text-center mt-4">
        <a href="https://share.google/R9A4vlUG4Q7A9dGyA" target="_blank" rel="noopener noreferrer" className="text-sm text-cyan-600 hover:text-cyan-700 font-medium">
          See all reviews on Google →
        </a>
      </div>
    </div>
  );
}
