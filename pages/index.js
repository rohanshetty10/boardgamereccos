import { useState, useMemo, useEffect } from 'react';
import Head from 'next/head';
import gamesData from '../data/gamesData';
import FilterPanel from '../components/FilterPanel';
import GameCard from '../components/GameCard';

export default function Home() {
  const [playerCount, setPlayerCount] = useState(4);
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [complexity, setComplexity] = useState(0);
  const [showOwnedOnly, setShowOwnedOnly] = useState(false);
  const [ownedGames, setOwnedGames] = useState({});
  const [sortBy, setSortBy] = useState('relevance');

  // Load owned games from localStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem('boardgame-owned');
      if (saved) {
        setOwnedGames(JSON.parse(saved));
      }
    } catch (e) {
      // Ignore localStorage errors
    }
  }, []);

  // Save owned games to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('boardgame-owned', JSON.stringify(ownedGames));
    } catch (e) {
      // Ignore localStorage errors
    }
  }, [ownedGames]);

  const toggleOwned = (gameId) => {
    setOwnedGames((prev) => ({
      ...prev,
      [gameId]: !prev[gameId],
    }));
  };

  const filteredGames = useMemo(() => {
    let results = gamesData.filter((game) => {
      // Player count filter
      if (playerCount < game.minPlayers || playerCount > game.maxPlayers) {
        return false;
      }

      // Type filter
      if (selectedTypes.length > 0) {
        const hasMatchingType = selectedTypes.some((t) => game.types.includes(t));
        if (!hasMatchingType) return false;
      }

      // Complexity filter
      if (complexity > 0 && game.complexity !== complexity) {
        return false;
      }

      // Owned filter
      if (showOwnedOnly && !ownedGames[game.id]) {
        return false;
      }

      return true;
    });

    // Score by relevance (number of type matches)
    results = results.map((game) => {
      let score = 0;
      if (selectedTypes.length > 0) {
        score = selectedTypes.filter((t) => game.types.includes(t)).length;
      }
      return { ...game, relevanceScore: score };
    });

    // Sort
    switch (sortBy) {
      case 'relevance':
        results.sort((a, b) => b.relevanceScore - a.relevanceScore);
        break;
      case 'name':
        results.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'complexity-asc':
        results.sort((a, b) => a.complexity - b.complexity);
        break;
      case 'complexity-desc':
        results.sort((a, b) => b.complexity - a.complexity);
        break;
      case 'time':
        results.sort((a, b) => a.estimatedTime - b.estimatedTime);
        break;
      case 'players':
        results.sort((a, b) => a.maxPlayers - b.maxPlayers);
        break;
      default:
        break;
    }

    return results;
  }, [playerCount, selectedTypes, complexity, showOwnedOnly, ownedGames, sortBy]);

  return (
    <>
      <Head>
        <title>Board Game Finder — Find Your Perfect Game Night Pick</title>
      </Head>

      {/* Animated Background */}
      <div className="bg-effects">
        <div className="bg-orb bg-orb--purple" />
        <div className="bg-orb bg-orb--teal" />
        <div className="bg-orb bg-orb--pink" />
      </div>

      <div className="app-container">
        {/* Hero */}
        <header className="hero">
          <div className="hero__badge">🎲 Board Game Recommender</div>
          <h1 className="hero__title">Find Your Perfect Game Night</h1>
          <p className="hero__subtitle">
            Tell us your group size and what you&apos;re in the mood for, and we&apos;ll
            recommend the best games — plus DIY ways to play without the box.
          </p>
        </header>

        {/* Filters */}
        <FilterPanel
          playerCount={playerCount}
          onPlayerCountChange={setPlayerCount}
          selectedTypes={selectedTypes}
          onTypesChange={setSelectedTypes}
          complexity={complexity}
          onComplexityChange={setComplexity}
          showOwnedOnly={showOwnedOnly}
          onShowOwnedOnlyChange={setShowOwnedOnly}
        />

        {/* Results Header */}
        <div className="results-header">
          <div className="results-count">
            Showing <strong>{filteredGames.length}</strong>{' '}
            {filteredGames.length === 1 ? 'game' : 'games'}
          </div>
          <select
            className="sort-select"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="relevance">Sort by Relevance</option>
            <option value="name">Sort by Name</option>
            <option value="complexity-asc">Easiest First</option>
            <option value="complexity-desc">Hardest First</option>
            <option value="time">Shortest First</option>
            <option value="players">Most Players</option>
          </select>
        </div>

        {/* Game Cards Grid */}
        <div className="games-grid">
          {filteredGames.length > 0 ? (
            filteredGames.map((game, index) => (
              <div key={game.id} style={{ animationDelay: `${index * 0.06}s` }}>
                <GameCard
                  game={game}
                  isOwned={!!ownedGames[game.id]}
                  onToggleOwned={toggleOwned}
                />
              </div>
            ))
          ) : (
            <div className="empty-state">
              <span className="empty-state__emoji">🎲</span>
              <div className="empty-state__title">No games match your filters</div>
              <div className="empty-state__text">
                Try adjusting the player count, game types, or complexity to find more options.
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <footer className="footer">
          Board Game Finder — built with 🎲 and ❤️
        </footer>
      </div>
    </>
  );
}
