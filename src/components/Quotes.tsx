import { useState, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaPause } from "react-icons/fa6";
import { FaDiceFive } from "react-icons/fa6";

type Quote = {
  id: number;
  quote: string;
};

type QuotesProps = {
  quotesList: Quote[];
};

const Quotes = ({ quotesList }: QuotesProps) => {
  const [currentQuote, setCurrentQuote] = useState<Quote | null>(null);

  const getRandomIndex = () => {
    return Math.floor(Math.random() * quotesList.length);
  };

  useEffect(() => {
    if (quotesList.length > 0) {
      const initialRandomQuote = quotesList[getRandomIndex()];
      setCurrentQuote(initialRandomQuote);
    }
  }, [quotesList]);

  const getNewQuote = () => {
    let newQuote = quotesList[getRandomIndex()];
    while (newQuote === currentQuote) {
      newQuote = quotesList[getRandomIndex()];
    }
    setCurrentQuote(newQuote);
  };

  const copyQuote = async () => {
    if (currentQuote) {
      try {
        await navigator.clipboard.writeText(currentQuote.quote);
        toast.success("Copied to clipboard!");
      } catch (error) {
        toast.error("Failed to copy to clipboard");
      }
    }
  };

  return (
    <>
      <main>
        <h2>{currentQuote ? `ADVICE #${currentQuote.id}` : ""}</h2>
        <p>{currentQuote?.quote || ""}</p>
        <div className="divider">
          <button className="copyQuote" onClick={copyQuote}>
            <FaPause />
          </button>
        </div>
        <button className="getQuote" onClick={getNewQuote}>
          <FaDiceFive />
        </button>

        <ToastContainer />
      </main>
    </>
  );
};

export default Quotes;
