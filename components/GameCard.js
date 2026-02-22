import { useState } from 'react';

function ComplexityStars({ level }) {
  return (
    <span className="complexity-stars">
      {[1, 2, 3, 4, 5].map((i) => (
        <span key={i} className={`star ${i <= level ? 'star--filled' : 'star--empty'}`}>
          ★
        </span>
      ))}
    </span>
  );
}

function GameDetailPanel({ details }) {
  return (
    <div className="detail-panel">
      {/* Overview */}
      <div className="detail-panel__section">
        <h4 className="detail-panel__heading">📖 Overview</h4>
        <p className="detail-panel__text">{details.overview}</p>
      </div>

      {/* Quick Info Bar */}
      <div className="detail-panel__info-bar">
        <div className="detail-panel__info-item">
          <span className="detail-panel__info-label">Designer</span>
          <span className="detail-panel__info-value">{details.designer}</span>
        </div>
        <div className="detail-panel__info-item">
          <span className="detail-panel__info-label">Published</span>
          <span className="detail-panel__info-value">{details.yearPublished}</span>
        </div>
        <div className="detail-panel__info-item">
          <span className="detail-panel__info-label">Best With</span>
          <span className="detail-panel__info-value">{details.bestWith}</span>
        </div>
        <div className="detail-panel__info-item">
          <span className="detail-panel__info-label">Ages</span>
          <span className="detail-panel__info-value">{details.ages}</span>
        </div>
      </div>

      {/* Mechanics */}
      <div className="detail-panel__section">
        <h4 className="detail-panel__heading">⚙️ Game Mechanics</h4>
        <div className="detail-panel__mechanics">
          {details.mechanics.map((m, i) => (
            <span key={i} className="detail-panel__mechanic-tag">{m}</span>
          ))}
        </div>
      </div>

      {/* Tips */}
      <div className="detail-panel__section">
        <h4 className="detail-panel__heading">💡 Pro Tips</h4>
        <ul className="detail-panel__tips">
          {details.tips.map((tip, i) => (
            <li key={i} className="detail-panel__tip">{tip}</li>
          ))}
        </ul>
      </div>

      {/* Links: Rulebook + Video */}
      <div className="detail-panel__links">
        <a
          href={details.rulebookUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="detail-panel__link detail-panel__link--rulebook"
        >
          <span className="detail-panel__link-icon">📕</span>
          <div className="detail-panel__link-content">
            <span className="detail-panel__link-title">Official Rulebook</span>
            <span className="detail-panel__link-desc">Read the full rules</span>
          </div>
          <span className="detail-panel__link-arrow">→</span>
        </a>
        <a
          href={details.videoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="detail-panel__link detail-panel__link--video"
        >
          <span className="detail-panel__link-icon">▶️</span>
          <div className="detail-panel__link-content">
            <span className="detail-panel__link-title">How to Play</span>
            <span className="detail-panel__link-desc">Watch the tutorial video</span>
          </div>
          <span className="detail-panel__link-arrow">→</span>
        </a>
      </div>
    </div>
  );
}

export default function GameCard({ game, isOwned, onToggleOwned }) {
  const [showAlternatives, setShowAlternatives] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className={`game-card ${showDetails ? 'game-card--expanded' : ''}`}>
      {/* Header */}
      <div className="game-card__header">
        <div className="game-card__emoji">{game.emoji}</div>
        <div className="game-card__title-area">
          <div className="game-card__name">{game.name}</div>
          <div className="game-card__meta">
            <span className="game-card__meta-tag">
              👥 {game.minPlayers === game.maxPlayers
                ? `${game.minPlayers}`
                : `${game.minPlayers}–${game.maxPlayers}`} players
            </span>
            <span className="game-card__meta-tag">
              ⏱ {game.estimatedTime} min
            </span>
            <span className="game-card__meta-tag">
              <ComplexityStars level={game.complexity} />
            </span>
          </div>
        </div>
      </div>

      {/* Description */}
      <p className="game-card__description">{game.description}</p>

      {/* Type Badges */}
      <div className="game-card__types">
        {game.types.map((type) => (
          <span key={type} className={`type-badge type-badge--${type}`}>
            {type}
          </span>
        ))}
      </div>

      {/* Own Toggle */}
      <div
        className="game-card__own-toggle"
        onClick={(e) => {
          e.stopPropagation();
          onToggleOwned(game.id);
        }}
      >
        <div className={`own-checkbox ${isOwned ? 'own-checkbox--checked' : ''}`}>
          {isOwned && <span className="own-checkbox__check">✓</span>}
        </div>
        <span className="own-label">
          {isOwned ? 'In my collection' : 'I own this game'}
        </span>
      </div>

      {/* Action Buttons Row */}
      <div className="game-card__actions">
        {/* Expanded Details Toggle */}
        <button
          className={`details-toggle ${showDetails ? 'details-toggle--active' : ''}`}
          onClick={() => setShowDetails(!showDetails)}
        >
          <span>📋 {showDetails ? 'Hide Details' : 'Game Details & Rules'}</span>
          <span className={`details-toggle__arrow ${showDetails ? 'details-toggle__arrow--open' : ''}`}>
            ▼
          </span>
        </button>

        {/* Alternatives Toggle */}
        <button
          className="alternatives-toggle"
          onClick={() => setShowAlternatives(!showAlternatives)}
        >
          <span>🛠 DIY Alternatives</span>
          <span className={`alternatives-toggle__arrow ${showAlternatives ? 'alternatives-toggle__arrow--open' : ''}`}>
            ▼
          </span>
        </button>
      </div>

      {/* Expanded Detail Panel */}
      {showDetails && game.details && (
        <GameDetailPanel details={game.details} />
      )}

      {/* Alternatives */}
      {showAlternatives && (
        <ul className="alternatives-list">
          {game.alternatives.map((alt, i) => (
            <li key={i} className="alternative-item">
              <span className="alternative-item__icon">💡</span>
              <span>{alt}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
