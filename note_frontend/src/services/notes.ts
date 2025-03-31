import { client } from '../services/auth';
import { NoteType } from '../types/note';

const URL = 'notes/';

const getAll = () => {
  const request = client.get<NoteType[]>(URL)
  return request.then(response => response.data)
}

const create = (newObject: {title: string; content: string;}) => {
  const request = client.post<NoteType>(URL, newObject)
  return request.then(response => response.data)
}

const update = (newObject: NoteType) => {
  const request = client.patch<NoteType>(`${URL}${newObject.id}/`, newObject)
  return request.then(response => response.data)
}

const remove = (id: number) => {
  const request = client.delete(`${URL}${id}/`)
  return request.then(response => console.log(response))
}

export default { 
  getAll, create, update, remove
}
