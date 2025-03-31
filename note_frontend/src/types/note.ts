
export interface NoteType {
  id: number;
  title: string;
  content: string;
  done: boolean;
  created_at: Date;
  updated_at: Date;
  user: number;
}
