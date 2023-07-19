export interface ContextInterfaces {
  items: any;
  selectedItem: string;
  setSelectedItem: React.Dispatch<React.SetStateAction<string>>;
  loading: boolean;
  libraryToRender: any;
  setLibraryToRender: React.Dispatch<any>;
  toolsToRender: any;
  frameworkToRender: any;
}

export interface ItemInterface {
  id: string;
  name: string;
  type: string;
  description: string;
  documentation: string;
  video: string;
  Framework: any[]; // Tipo específico para a propriedade "Framework"
  Library: any[]; // Tipo específico para a propriedade "Library"
  Tool: any[]; // Tipo específico para a propriedade "Tool"
}
