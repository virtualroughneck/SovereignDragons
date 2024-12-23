// src/App.js
import React from "react";

function App() {
  const [mintAmount, setMintAmount] = React.useState(2);
  const [selectedCategory, setSelectedCategory] = React.useState("background");
  const [selectedTraits, setSelectedTraits] = React.useState({});
  const [isLoading, setIsLoading] = React.useState(false);

  const fontStyle = "font-['Audiowide'] tracking-wide";

  const handleMint = async () => {
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 2000);
  };

  const traitCategories = {
    background: "BACKGROUND",
    eyes: "EYES",
    weapons: "WEAPONS",
    body: "BODY",
    expression: "EXPRESSION",
    horns: "HORNS",
    eyewear: "EYEWEAR",
    outfits: "OUTFITS",
    sling: "SLING",
  };

  const traitTypes = {
    background: {
      type: ["Holographic"],
    },
    eyes: {
      type: ["Light Yellow Eye"],
    },
    weapons: {
      type: ["AK47"],
    },
    body: {
      type: ["Abyss"],
    },
    expression: {
      type: ["Disgust"],
    },
    horns: {
      type: ["White Horns and Spikes"],
    },
    eyewear: {
      type: ["Mirrored Sunglasses"],
    },
    outfits: {
      type: ["Panjabi Prince Coat"],
    },
    sling: {
      type: ["Logo Degens 3.23%"],
    },
  };
  return (
    <div className={`min-h-screen bg-black p-6 ${fontStyle}`}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <img
            src="https://dragondegens.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdragon-logo-white.fc9a63fa.png&w=48&q=75"
            alt="Dragon Logo"
            className="w-24 h-24 mx-auto mb-4"
          />
          <div className="relative">
            <h1
              className="text-4xl mb-4 sovereign-dragons pb-2"
              style={{
                position: "relative",
                zIndex: 1,
                lineHeight: "1.5",
                fontFamily: "Audiowide, cursive",
              }}
            >
              Sovereign Dragons
            </h1>
            <h1 className="text-3xl text-white mb-2 tagline">
              <span className="craft">Craft.</span>
              <span className="summon">Summon.</span>
              <span className="conquer">Conquer.</span>
            </h1>
            <style>{`
              @import url('https://fonts.googleapis.com/css2?family=Audiowide&display=swap');

              .sovereign-dragons {
                font-family: 'Audiowide', cursive;
                font-size: 4.5rem;
                background: linear-gradient(45deg, #FFD700, #FFD700);
                background-size: 200% auto;
                -webkit-background-clip: text;
                background-clip: text;
                color: transparent;
                animation: shine 3s linear infinite, glow 3s ease-in-out infinite;
                padding-bottom: 0.5rem;
                letter-spacing: 2px;
              }

              .tagline {
                font-family: 'Audiowide', cursive;
                font-size: 2.5rem;
                letter-spacing: 2px;
              }

              .craft {
                background: linear-gradient(45deg, #FF6B6B, #FF8E53);
                background-size: 200% auto;
                -webkit-background-clip: text;
                background-clip: text;
                color: transparent;
                animation: shine 3s linear infinite;
              }

              .summon {
                background: linear-gradient(45deg, #4E54C8, #8F94FB);
                background-size: 200% auto;
                -webkit-background-clip: text;
                background-clip: text;
                color: transparent;
                animation: shine 3s linear infinite;
              }

              .conquer {
                background: linear-gradient(45deg, #11998e, #38ef7d);
                background-size: 200% auto;
                -webkit-background-clip: text;
                background-clip: text;
                color: transparent;
                animation: shine 3s linear infinite;
              }

              @keyframes shine {
                to {
                  background-position: 200% center;
                }
              }

              @keyframes glow {
                0%, 100% {
                  text-shadow: 
                    0 0 10px rgba(255, 215, 0, 0.7),
                    0 0 20px rgba(255, 215, 0, 0.5),
                    0 0 30px rgba(255, 215, 0, 0.3);
                }
                50% {
                  text-shadow: 
                    0 0 20px rgba(255, 215, 0, 0.9),
                    0 0 30px rgba(255, 215, 0, 0.7),
                    0 0 40px rgba(255, 215, 0, 0.5);
                }
              }
            `}</style>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Left side - Trait Selection (1/4 width) */}
          <div className="bg-black p-6 lg:col-span-1">
            <div className="mb-6">
              <h2 className="text-2xl mb-4 text-white">Select Dragon Trait</h2>

              <div className="grid grid-cols-2 gap-x-4 gap-y-3 mb-6">
                {Object.entries(traitCategories).map(([key, label]) => (
                  <button
                    key={key}
                    onClick={() => setSelectedCategory(key)}
                    className={`
                      px-3 py-2 text-white text-sm transition-all duration-300
                      border border-transparent
                      hover:font-bold hover:text-[#fff] hover:shadow-[0_0_10px_#fff]
                      ${
                        selectedCategory === key
                          ? "font-bold text-[#fff] shadow-[0_0_10px_#fff] border-red-500 shadow-[0_0_15px_rgba(255,0,0,0.5)]"
                          : ""
                      }
                      relative
                      before:absolute before:inset-0 before:border before:border-transparent
                      before:transition-all before:duration-300
                      ${
                        selectedCategory === key
                          ? "before:border-red-500 before:shadow-[0_0_10px_rgba(255,0,0,0.5)]"
                          : "hover:before:border-white hover:before:shadow-[0_0_10px_rgba(255,255,255,0.5)]"
                      }
                      text-center
                    `}
                  >
                    {label}
                  </button>
                ))}
              </div>

              <div className="space-y-4">
                {Object.entries(traitTypes[selectedCategory]).map(
                  ([traitKey, options]) => (
                    <div key={traitKey} className="space-y-2">
                      <label className="block text-sm text-white capitalize">
                        {traitKey === "type"
                          ? "Trait Type"
                          : traitKey.replace(/([A-Z])/g, " $1").trim()}
                      </label>
                      <select
                        value={
                          selectedTraits[`${selectedCategory}-${traitKey}`] ||
                          ""
                        }
                        onChange={(e) =>
                          setSelectedTraits({
                            ...selectedTraits,
                            [`${selectedCategory}-${traitKey}`]: e.target.value,
                          })
                        }
                        className="w-full bg-black text-white px-3 py-2 focus:ring-2 focus:ring-white focus:border-transparent hover:shadow-[0_0_10px_#fff] transition-all duration-300 text-sm rounded-lg"
                      >
                        <option value="">
                          {traitKey === "type"
                            ? "Select Trait Type"
                            : `Select ${traitKey}`}
                        </option>
                        {options.map((option, index) => (
                          <option key={index} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                    </div>
                  )
                )}
              </div>
            </div>
            <div className="mt-6 p-4 bg-black">
              <h3 className="text-lg mb-3 text-white">Selected Traits</h3>
              <div className="space-y-2">
                {Object.entries(selectedTraits).map(([key, value]) => (
                  <div
                    key={key}
                    className="flex justify-between items-center text-sm"
                  >
                    <span className="text-white capitalize">
                      {key.split("-")[0]}:
                    </span>
                    <div className="flex items-center gap-2">
                      <span className="text-white">{value}</span>
                      <button
                        onClick={() => {
                          const newTraits = { ...selectedTraits };
                          delete newTraits[key];
                          setSelectedTraits(newTraits);
                        }}
                        className="text-red-500 hover:text-red-400 transition-colors duration-200 px-2"
                        title="Remove trait"
                      >
                        ✕
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right side - NFT Preview (3/4 width) */}
          <div className="bg-black p-6 lg:col-span-3">
            <div className="relative aspect-square rounded-lg overflow-hidden bg-black mb-6">
              <img
                src="https://dragondegens.com/_next/image?url=%2Fgallery%2F2.png&w=384&q=75"
                alt="NFT Preview"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4 bg-black bg-opacity-75 px-2 py-1 rounded">
                <span className="text-white text-sm">DD</span>
              </div>
            </div>

            <div className="flex justify-center items-center text-white mb-4 text-xl font-semibold">
              <span className="mr-2">Total:</span>
              <span>{(1600 * mintAmount).toFixed(2)} NRG + gas</span>
            </div>

            <div className="flex justify-center">
              <div className="inline-block border-2 border-red-500 shadow-[0_0_15px_rgba(255,0,0,0.7)] rounded-lg">
                <button
                  onClick={handleMint}
                  disabled={isLoading}
                  className={`
                    py-4 px-12 text-white transition-all duration-300
                    text-2xl font-bold tracking-wider
                    hover:shadow-[0_0_10px_#fff,0_0_20px_#fff]
                    ${isLoading ? "cursor-not-allowed opacity-50" : ""}
                  `}
                >
                  {isLoading
                    ? "Summoning..."
                    : `Summon (${Object.keys(selectedTraits).length}/9 traits)`}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
