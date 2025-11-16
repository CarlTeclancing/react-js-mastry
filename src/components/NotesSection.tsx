import { useState } from 'react';
import { FileText, Save } from 'lucide-react';
import './NotesSection.css';

interface NotesSectionProps {
  notes: string;
  onNotesUpdate: (notes: string) => void;
}

export default function NotesSection({ notes, onNotesUpdate }: NotesSectionProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [localNotes, setLocalNotes] = useState(notes);

  const handleSave = () => {
    onNotesUpdate(localNotes);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setLocalNotes(notes);
    setIsEditing(false);
  };

  return (
    <div className="notes-section">
      <div className="notes-header">
        <h3>
          <FileText size={20} />
          Notes & Reflections
        </h3>
        {!isEditing && (
          <button
            className="edit-button"
            onClick={() => setIsEditing(true)}
          >
            Edit
          </button>
        )}
      </div>

      {isEditing ? (
        <div className="notes-editor">
          <textarea
            value={localNotes}
            onChange={(e) => setLocalNotes(e.target.value)}
            placeholder="Write your thoughts, learnings, and reflections for this week..."
            className="notes-textarea"
          />
          <div className="notes-actions">
            <button className="save-button" onClick={handleSave}>
              <Save size={16} />
              Save
            </button>
            <button className="cancel-button" onClick={handleCancel}>
              Cancel
            </button>
          </div>
        </div>
      ) : (
        <div className="notes-display">
          {localNotes ? (
            <p>{localNotes}</p>
          ) : (
            <p className="no-notes">No notes yet. Click edit to add your thoughts!</p>
          )}
        </div>
      )}
    </div>
  );
}
