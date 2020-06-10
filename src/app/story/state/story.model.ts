export interface Story {
  title: string;
  story: string;
  draft: boolean;
  category: string;
}

export function createStory() {
  return {
    title: '',
    story: '',
    draft: false,
    category: 'JS'
  } as Story;
}
