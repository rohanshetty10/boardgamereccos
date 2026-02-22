import { useState } from 'react';

const GAME_TYPES = [
  { id: 'strategy', label: 'Strategy', emoji: '♟️' },
  { id: 'party', label: 'Party', emoji: '🎉' },
  { id: 'family', label: 'Family', emoji: '👨‍👩‍👧‍👦' },
  { id: 'cooperative', label: 'Co-op', emoji: '🤝' },
  { id: 'trivia', label: 'Trivia', emoji: '🧠' },
  { id: 'card', label: 'Card', emoji: '🃏' },
  { id: 'bluffing', label: 'Bluffing', emoji: '🎭' },
  { id: 'word', label: 'Word', emoji: '📝' },
  { id: 'deduction', label: 'Deduction', emoji: '🔍' },
  { id: 'dexterity', label: 'Dexterity', emoji: '🤹' },
];

const COMPLEXITY_LEVELS = [
  { value: 0, label: 'Any' },
  { value: 1, label: 'Simple' },
  { value: 2, label: 'Easy' },
  { value: 3, label: 'Medium' },
  { value: 4, label: 'Complex' },
  { value: 5, label: 'Expert' },
];

export default function FilterPanel({
  playerCount,
  onPlayerCountChange,
  selectedTypes,
  onTypesChange,
  complexity,
  onComplexityChange,
  showOwnedOnly,
  onShowOwnedOnlyChange,
}) {
  const toggleType = (typeId) => {
    if (selectedTypes.includes(typeId)) {
      onTypesChange(selectedTypes.filter((t) => t !== typeId));
    } else {
      onTypesChange([...selectedTypes, typeId]);
    }
  };

  return (
    <div className="filters">
      {/* Player Count */}
      <div className="filters__section">
        <div className="filters__label">
          <span className="filters__label-icon">👥</span>
          Number of Players
        </div>
        <div className="player-slider-wrap">
          <div className="player-count-display">{playerCount}</div>
          <input
            type="range"
            className="player-slider"
            min="1"
            max="20"
            value={playerCount}
            onChange={(e) => onPlayerCountChange(Number(e.target.value))}
          />
        </div>
      </div>

      {/* Game Types */}
      <div className="filters__section">
        <div className="filters__label">
          <span className="filters__label-icon">🎯</span>
          Game Type
        </div>
        <div className="chips-grid">
          {GAME_TYPES.map((type) => (
            <button
              key={type.id}
              className={`chip ${selectedTypes.includes(type.id) ? 'chip--active' : ''}`}
              onClick={() => toggleType(type.id)}
            >
              <span className="chip__emoji">{type.emoji}</span>
              {type.label}
            </button>
          ))}
        </div>
      </div>

      {/* Complexity */}
      <div className="filters__section">
        <div className="filters__label">
          <span className="filters__label-icon">⚙️</span>
          Complexity
        </div>
        <div className="complexity-row">
          {COMPLEXITY_LEVELS.map((level) => (
            <button
              key={level.value}
              className={`complexity-btn ${complexity === level.value ? 'complexity-btn--active' : ''}`}
              onClick={() => onComplexityChange(level.value)}
            >
              {level.label}
            </button>
          ))}
        </div>
      </div>

      {/* Show Owned Only */}
      <div className="filters__section">
        <div
          className="collection-toggle"
          onClick={() => onShowOwnedOnlyChange(!showOwnedOnly)}
        >
          <div className={`toggle-switch ${showOwnedOnly ? 'toggle-switch--active' : ''}`}>
            <div className="toggle-knob" />
          </div>
          <span className="toggle-label">
            Only show games I own
          </span>
        </div>
      </div>
    </div>
  );
}
