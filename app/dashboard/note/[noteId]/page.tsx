import { getNoteById } from "@/server/notes";


type Params = {
  noteId: string;
};

export default async function NotePage({ params }: { params: Params }) {
  const { noteId } = params;
  const {note} = await getNoteById(noteId);
  return <div>{note?.title}</div>;
}