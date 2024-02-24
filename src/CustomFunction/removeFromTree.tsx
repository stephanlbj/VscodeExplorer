import { Explorer } from "../data";

export const removeObjectFromTree = (obj: Explorer, folderId: string) => {
    obj.items = obj.items.filter(item => {
      if (item.items) {
        removeObjectFromTree(item, folderId);
        return item.id !== folderId;
      } 
    });
  };