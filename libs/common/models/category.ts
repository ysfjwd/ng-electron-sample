export interface Category {
  id: number;
  name: string;
  outlet: number;
  category: number;
}

export interface CategoryState extends Array<Category> {}

export enum CategoryActionTypes {
  LoadAllCategories = '[CATEGORY] Load All Categories',
  LoadAllCategoriesDone = '[CATEGORY] Load All Categories Done',
}
