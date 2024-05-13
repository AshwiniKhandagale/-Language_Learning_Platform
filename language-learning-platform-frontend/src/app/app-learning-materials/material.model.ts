export class Material {
    content_id: string;
    language_id: string;
    content_type: 'image' | 'video' | 'audio' | 'text';
    foreign_word: string;
    base_word: string;
    creator_id: string;
    weightage: number;
    difficulty_level: 'beginner' | 'intermediate' | 'advanced';
    created_at: Date;
  
    constructor(data: any) {
      this.content_id = ''; // Generate a unique ID or use the one from the server response
      this.language_id = data.language_id;
      this.content_type = data.content_type;
      this.foreign_word = data.foreign_word;
      this.base_word = data.base_word;
      this.creator_id = data.creator_id;
      this.weightage = data.weightage;
      this.difficulty_level = data.difficulty_level;
      this.created_at = new Date(); // Use the current date and time
    }
  }
  