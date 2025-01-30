import "./App.css";
import Quotes from "./components/Quotes";

function App() {
  const quotesList = [
    {
      id: 1,
      quote:
        "You miss 100% of the shots you don’t take. But you also miss 100% of the naps you don’t take.",
    },
    {
      id: 2,
      quote:
        "If you think you are too small to make a difference, try sleeping with a mosquito.",
    },
    { id: 3, quote: "Life is short. Smile while you still have teeth." },
    {
      id: 4,
      quote:
        "I can’t change the direction of the wind, but I can adjust my sails to always reach my destination… and hope I don’t get seasick.",
    },
    {
      id: 5,
      quote:
        "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you’ll also love napping.",
    },
    {
      id: 6,
      quote: "Don’t take life too seriously. You’ll never get out of it alive.",
    },
    {
      id: 7,
      quote:
        "The only way to do great work is to love what you do… or just fake it until you make it.",
    },
    { id: 8, quote: "Behind every great man is a woman rolling her eyes." },
    {
      id: 9,
      quote:
        "You can’t have a positive life and a negative mind… except when you’re dealing with your Wi-Fi connection.",
    },
    {
      id: 10,
      quote:
        "I am an early bird and a night owl… so I am wise and I have worms.",
    },
    {
      id: 11,
      quote:
        "In three words I can sum up everything I’ve learned about life: it goes on… and sometimes you just need coffee.",
    },
    {
      id: 12,
      quote:
        "Do one thing every day that scares you… like getting out of bed without hitting snooze.",
    },
    {
      id: 13,
      quote: "The road to success is dotted with many tempting parking spaces.",
    },
    {
      id: 14,
      quote:
        "Life is not measured by the number of breaths we take, but by the moments that take our breath away… or the naps that do.",
    },
    {
      id: 15,
      quote:
        "Success usually comes to those who are too busy to be looking for it… or are really good at procrastination.",
    },
    {
      id: 16,
      quote:
        "I find that the harder I work, the more luck I seem to have. Or maybe I’m just really good at faking it.",
    },
    {
      id: 17,
      quote:
        "A day without laughter is a day wasted… so you better laugh at yourself.",
    },
    {
      id: 18,
      quote:
        "A goal without a plan is just a wish. A goal with pizza is a plan.",
    },
    {
      id: 19,
      quote:
        "Success is going from failure to failure without losing your enthusiasm… and without crying.",
    },
    {
      id: 20,
      quote:
        "If at first you don’t succeed, then skydiving definitely isn’t for you.",
    },
    {
      id: 21,
      quote: "You can’t change the world, but you can change your socks.",
    },
    {
      id: 22,
      quote:
        "It always seems impossible until it’s done… or until you give up.",
    },
    {
      id: 23,
      quote:
        "If you think you are too small to be effective, you have never been in bed with a mosquito.",
    },
    {
      id: 24,
      quote:
        "The only time to be positive you’re in the right path is when you’re on the edge of a cliff.",
    },
    {
      id: 25,
      quote:
        "The secret of getting ahead is getting started… and also taking naps in between.",
    },
    {
      id: 26,
      quote:
        "Don't let yesterday take up too much of today, unless yesterday was your nap day.",
    },
    {
      id: 27,
      quote:
        "The way to get started is to quit talking and begin doing… but let’s take a snack break first.",
    },
    {
      id: 28,
      quote:
        "You only live once, but if you do it right, once is enough… unless it’s a nap.",
    },
    {
      id: 29,
      quote:
        "Do not wait to strike till the iron is hot, but make it hot by striking… and make sure you have coffee.",
    },
    { id: 30, quote: "I can’t adult today. I’ll try again tomorrow." },
    {
      id: 31,
      quote:
        "It does not matter how slowly you go as long as you do not stop… except for when you’re on the couch watching TV.",
    },
    {
      id: 32,
      quote:
        "We can do anything we want to do if we stick to it long enough… except for waking up early.",
    },
    {
      id: 33,
      quote:
        "Life is 10% what happens to us and 90% how we react to it… and how much coffee we drink.",
    },
    {
      id: 34,
      quote:
        "Start where you are. Use what you have. Do what you can… and do it while wearing comfortable pants.",
    },
    {
      id: 35,
      quote: "Life is 50/50: you win some, you lose some, and you nap some.",
    },
    {
      id: 36,
      quote:
        "If you want to achieve greatness stop asking for permission… unless it's for a snack.",
    },
    {
      id: 37,
      quote:
        "The harder you work for something, the greater you’ll feel when you achieve it… and then you’ll deserve a nap.",
    },
    {
      id: 38,
      quote:
        "Don’t watch the clock; do what it does. Keep going… but also take breaks.",
    },
    {
      id: 39,
      quote:
        "Success is how high you bounce when you hit bottom… or how high the snacks are when you’re at the store.",
    },
    {
      id: 40,
      quote:
        "We may encounter many defeats, but we must not be defeated… except when it comes to running out of chips.",
    },
    {
      id: 41,
      quote:
        "Do not wait for leaders; do it alone, person to person… or with a really good playlist.",
    },
    {
      id: 42,
      quote:
        "It's not whether you get knocked down, it's whether you get up… and whether there's coffee waiting for you.",
    },
    {
      id: 43,
      quote:
        "The only limit to our realization of tomorrow is our doubts of today… and our ability to get out of bed.",
    },
    {
      id: 44,
      quote:
        "What lies behind us and what lies before us are tiny matters compared to what lies within us… like pizza.",
    },
    {
      id: 45,
      quote:
        "The best way to get things done is to simply begin. But take a moment to grab some snacks first.",
    },
    {
      id: 46,
      quote:
        "Your time is limited, so don’t waste it living someone else’s life… unless it’s their Netflix account.",
    },
    {
      id: 47,
      quote:
        "Everything you’ve ever wanted is on the other side of fear… and maybe a few snacks.",
    },
    {
      id: 48,
      quote:
        "It’s not about how bad you want it. It’s about how bad you can nap and still get stuff done.",
    },
    {
      id: 49,
      quote:
        "Do what you love, and you’ll never work a day in your life… or at least, that’s what I tell myself before I take a nap.",
    },
    {
      id: 50,
      quote:
        "The only way to do great work is to love what you do… or just fake it until you make it.",
    },
  ];
  return <Quotes quotesList={quotesList} />;
}

export default App;
