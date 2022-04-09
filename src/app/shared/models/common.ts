export interface Image {
  path: string;
  extension: string;
}

export interface Character {
  id: number;
  name: string;
  description?: string;
  thumbnail: Image;

}

export interface Comic {
  id: number;
  title: string;
  issueNumber: number;
  description?: string;
  isbn: string;
  pageCount: number;
  thumbnail: Image;
}
